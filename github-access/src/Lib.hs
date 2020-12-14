 module Lib
    ( someFunc
    ) where

import GitHub

someFunc :: IO ()
someFunc = do
  putStrLn "GitHub Call"
  testGitHubCall
  putStrLn "End."


testGitHubCall :: IO ()
testGitHubCall = do
  putStrLn "Testing the GitHub Call."
