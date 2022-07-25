# First Git Work
staging area contains those files which are ready to commit
below are the commands for git :

```
    1. git status - checks the current status of your file.
    
    untracked----unmodified----modified----staged

    2. git add <file-name> - to add the file in staging area.

    3. git add .
    it adds all the files in staging area

    4. git commit -m 'enter-your-comment'
    this commmand is used to commit the changes in your repository

    5. git init
    It initialises the folder as repository

    6. git commit -a -m 'enter-your-comment'
    this command will perform staging and commit simulatneously.

    7. git diff 
    for checking the changes been made in your repos
    
    8. git log -p
    along with previous commit it performs 'git diff' as well

    9. git log -p -n
    it shows only the last n changes & commit

    10. git log --stat
    shows simplified form of 'git diff'. shows how many insertion and deletion are there

    * git log --pretty=oneline
    * git log --pretty=short
    * git log --since=2.days (shows changes been made since 2 days. 2 and days can be replace with any number and week or year)

    11. git checkout --<file-name> 
    this command will bring previous commited file

    12. git checkout -f
    this command will be applied to all the files

    13. git config --global alias <alias-name> <actual-command>
    this command will create alias to commands provided

    14. git checkout -b 'name-of-branch'
    this command will create new branch

    15. git merge <merge-name> 
    This merges the specified branch with its parent branch
```

That's all for now
