# easySSH

Simple CLI tool for adding ssh credentials to your config file for easier access to your servers.

## CLI

```
$ npm install -g easyssh

$ easyssh
```

## Usage

Once you start easyssh, you will be asked to create a nickname for your server. This should be a short word or phrase that describes the server. It could be "dev" "production" "clientName" etc.

<img src="https://rawgit.com/kvieira90/EasySSH/master/media/sshconfig.png">

You will then be required to enter the HostName which is either the IP or name of vm your sshing into

<img src="https://rawgit.com/kvieira90/EasySSH/master/media/serverip.png">

Next you'll be prompted for the username

<img src="https://rawgit.com/kvieira90/EasySSH/master/media/username.png">

One of the easiest ways to ssh into a server is by creating a private key, then moving it to the authorized keys location on the server. To create a key enter the following in the terminal

```
ssh-keygen -t rsa
```
Once the key has been created, enter the following into the terminal with your credentials to move the private key to the server
```
cat ~/.ssh/id_rsa.pub | ssh user@hostname 'cat >> .ssh/authorized_keys'
```
If you do not have the ability to add the key to the server, skip this step, leave the following question blank and go to the next question. If you do have access, type or paste the key location such as the one above '~/.ssh/id_rsa.pub'

<img src="https://rawgit.com/kvieira90/EasySSH/master/media/identityfile.png">

If you did not have access to the server and were just givin username & password or do not want to use the identity file, type yes in the following prompt. 

<img src="https://rawgit.com/kvieira90/EasySSH/master/media/password.png">

In some cases you may need to specify which port to access the server. If so, enter the port into the following prompt, or leave blank if not necessary. 

<img src="https://rawgit.com/kvieira90/EasySSH/master/media/port.png">

That's all. Now depending on what you used for a nickname for your server, type

```
$ ssh server-nickname
```
