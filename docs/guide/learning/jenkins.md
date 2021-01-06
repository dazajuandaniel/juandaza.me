# Jenkins Learning

### Resources

#### Install Jenkins

Install Java
```sh
sudo apt update
sudo apt install openjdk-8-jdk
```

Install Jenkins
```sh
sudo apt-get update

wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -

sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > \
    /etc/apt/sources.list.d/jenkins.list'

sudo apt-get update

sudo apt-get install jenkins
```

After installing run
```sh
sudo systemctl start jenkins

sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

To run commands as `sudo`:

```sh
vi  /etc/sudoers
jenkins ALL=(ALL) NOPASSWD: ALL
```

#### Things to Consider for Installation
1. Make sure Jenkins user can run `sudo` commands.
2. Be mindful of the Terraform state.
3. Get the right plugins and credentials in place.
4. Make sure AWS Resources have the right accesses.