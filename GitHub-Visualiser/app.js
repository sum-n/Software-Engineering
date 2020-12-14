var form = document.getElementById("my-form")
var loadingElement = document.querySelector('#result');
loadingElement.style.display = 'none';
form.addEventListener('submit', function(e) {
	e.preventDefault()

	var search = document.getElementById("search").value

	document.getElementById("result").innerHTML = ""

	fetch("https://api.github.com/users/"+search)
	
	.then((result) => result.json())

	.then((data) => {

		console.log(data)
		loadingElement.style.display = '';

	//Display the user avatar
	document.getElementById("result").innerHTML = `
	<a target="_blank" href="https://github.com/${search}"> <img src="${data.avatar_url}"/></a>
	`
})

})
