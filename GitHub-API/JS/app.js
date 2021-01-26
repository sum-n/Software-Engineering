function handleInput() {
    var user = document.getElementById("user").value;
    var token = document.getElementById("token").value;
    if (doughnutChart1 != null) doughnutChart1.destroy();
    if (lineChart2 != null) lineChart2.destroy();
    main(user, token); 
}

async function main(user, token) {
    var url = `https://api.github.com/users/${user}/repos`;
    var repo = await getRequest(url, token);

    url = `https://api.github.com/users/${user}`;
    var info = await getRequest(url, token);
    
    userInformation(info);
    languagesOfRepos(repo, user, token);
    totalNumbersOfCommits(repo, user, token);
}

async function getRequest(url, token) {
    const input = {
        'Authorization': `Token ${token}`
    }
    const response = (token == undefined) ? await fetch(url) : await fetch(url, {
        "method": "GET",
        "input": input
    });
    var data = await response.json();
    return data;
}

function userInformation(info) {
    var img = document.getElementById('img');
    img.src = info.avatar_url

    var name = document.getElementById('name');
    name.innerHTML = `<b>Name: </b>${info.name}`;

    var login = document.getElementById('login');
    login.innerHTML = `<b>Login ID: </b>${info.login}`;

    var bio = document.getElementById('bio');
    bio.innerHTML = `<b>Bio: </b>${info.bio == null ? 'Bio not found' : info.bio}`;

    var following = document.getElementById('following');
    following.innerHTML = `<b>Following: </b>${info.following}`;

    var followers = document.getElementById('followers');
    followers.innerHTML = `<b>Followers: </b>${info.followers}`;

    var public_repos = document.getElementById('public_repos');
    public_repos.innerHTML = `<b>Public Repos: </b>${info.public_repos}`;

    var location = document.getElementById('location');
    location.innerHTML = `<b>Location: </b>${info.location}`;

    var inBytes = document.getElementById('data');
    inBytes.innerHTML = `<b>*All the languages are in Bytes*</b>`;    

    var inCommits = document.getElementById('data2');
    inCommits.innerHTML = `<b>*Total commits from all public Repos*</b>`;   
}

async function languagesOfRepos(repo, user, token) {
    var label = [];
    var data = [];
    var backgroundColor = [];

    for (i in repo) {
        var url = `https://api.github.com/repos/${user}/${repo[i].name}/languages`;
        var languages = await getRequest(url, token);

        for (language in languages) {
            if (label.includes(language)) {
                for (i = 0; i < label.length; i++)
                    if (language == label[i])
                        data[i] = data[i] + languages[language];
            } else {
                label.push(language);
                data.push(languages[language]);
                backgroundColor.push(`rgba(${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 150)}, ${Math.floor(Math.random() * 250)}, 0.9)`);
            }
        }
    }
    repoDoughnutChart('language', 'doughnut', 'languages', `Languages from Repositories`, label, data, backgroundColor);
}

async function totalNumbersOfCommits(repo, user, token) {
    var label = [];
    var data = [];
    var backgroundColor = [];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    for (i in repo) {
        var url = `https://api.github.com/repos/${user}/${repo[i].name}/commits?per_page=100`;
        var commits = await getRequest(url, token).catch(error => console.error(error));

        for (j in commits) {
            var date = commits[j].commit.author.date;
            var d = new Date(date);
            var day = days[d.getDay()];
            if (label.includes(day)) {
                for (i = 0; i < label.length; i++)
                    if (day == label[i])
                        data[i] += 1;
            } else {
                label.push(day);
                data.push(1);
                backgroundColor.push(`rgba(${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 150)}, ${Math.floor(Math.random() * 250)}, 0.9)`);
            }
        }
    }
    commitsLineChart('commits', 'line', 'commits', `Total number of Commits per Day`, label, data, backgroundColor);
}

function repoDoughnutChart(ctx, type, datasetLabel, titvarext, label, data, backgroundColor) {
    var myChart = document.getElementById(ctx).getContext('2d');
    chart1 = new Chart(myChart, {
        type: 'doughnut',
        data: {
            labels: label,
            datasets: [{
                label: datasetLabel,
                data: data,
                backgroundColor: backgroundColor,
                borderColor: '#fff',
                hoverBorderWidth: 2,
                hoverBorderColor: '#fff'
            }],
        },
        options: {
            title: {
                display: true,
                text: titvarext,
                fontSize: 20
            },
            legend: {
                position: 'left',
                labels: {
                    fontColor: '#fff'
                }
            }
        }
    });
}

function commitsLineChart(ctx, type, datasetLabel, titvarext, label, data, backgroundColor) {
    var myChart = document.getElementById(ctx).getContext('2d');
    chart2 = new Chart(myChart, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: datasetLabel,
                data: data,
                backgroundColor: backgroundColor,
                borderColor: '#fff',
                hoverBorderWidth: 2,
                hoverBorderColor: '#fff'
            }],
        },
        options: {
            title: {
                display: true,
                text: titvarext,
                fontSize: 20,
            },
            legend: {
                position: 'left',
                labels: {
                    fontColor: '#fff'
                }
            }
        }
    });
}
var doughnutChart1 = null;
var lineChart2 = null;