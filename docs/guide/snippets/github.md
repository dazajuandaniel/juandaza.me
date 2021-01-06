# Github Snippets

### Adding SSH keys to Github
Run the following in the terminal

```shell
ssh-keygen
```

Press enter at each prompt to leave everything at defaults. The type

```shell
cat .ssh/id_rsa.pub > id_rsa.txt
```

The file above has the key that needs to be copied and paste on Github Settings -> New SSH Key.

### Creating a new Github repo and adding files to it.

Run the below after creating a new repo in Github

```shell
cd <my_cloned_repo>
rm rf .git
```

```shell
git init
git add .
git commit -m "Initial Commit
```

Push your commits

```shell
git remote add origin <repo URL>
git push -u --force origin master
```

### Renaming Git Branch

Once you're in the local branch run the following

```shell
git branch -m <new_name>
```

```shell
git push origin -u <new_name>
```

```shell
git push origin --delete <old_name>
```