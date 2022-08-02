# First Git Work
staging area contains those files which are ready to commit
below are the commands for git :

`git status`
checks the current status of your file.

  untracked----unmodified----modified----staged

`git add <file-name>`

to add the file in staging area.

`git add .`

it adds all the files in staging area

`git commit -m '<enter-your-comment>'`

this commmand is used to commit the changes in your repository

`git init`

It initialises the folder as repository

`git commit -a -m '<enter-your-comment>'`

this command will perform staging and commit simulatneously.

`git diff `

for checking the changes been made in your repos
    
`git log -p`

along with previous commit it performs 'git diff' as well

`git log -p -n`

it shows only the last n changes & commit

`git log --stat`

shows simplified form of 'git diff'. shows how many insertion and deletion are there
   * git log --pretty=oneline
   * git log --pretty=short
   * git log --since=2.days (shows changes been made since 2 days. 2 and days can be replace with any number and week or year)

`git checkout --<file-name> `

This command will bring previous commited file.

`git checkout -f`

This command will be applied to all the files.

`git config --global alias <alias-name> <actual-command>`

this command will create alias to commands provided

`git checkout -b '<name-of-branch>' `

this command will create new branch

`git merge <merge-name> `
    
This merges the specified branch with its parent branch

That's all for now
