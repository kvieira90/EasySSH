'use strict';

var inquirer = require("inquirer");
var fsjetpack = require('fs-jetpack');
var _ = require('lodash');

var questions = [{
	type: 'input', 
	name: 'name',
	message: 'Enter your ssh config name'
},
{
	type: 'input', 
	name: 'HostName',
	message: 'Enter the hostname of your server'
},
{
	type: 'input', 
	name: 'User',
	message: 'Enter your username'
},
{
	type: 'input', 
	name: 'IdentityFile',
	message: 'Enter the location of your identity file (or leave blank)'
},
{
	type: 'input',
	name: 'PasswordAuthentication',
	message: 'Use password for login? (yes/no)'
},
{
	type: 'input', 
	name: 'Port',
	message: 'Enter your port if needed'
}];

inquirer.prompt(questions, function( answers ) {
	var name = answers.name
	delete answers['name'];
	var cleanString = 'Host ' + name + '\n';
	_.forEach(answers, function(value, key){
		if(value !== ''){
			cleanString += '  ' + key + ' ' + value + '\n';
		}
	});
	var filelocation = process.env['HOME'] + '/.ssh/config';
  fsjetpack.append(filelocation, cleanString);
  console.log('Congrats! You can now access your server by typing ssh ' + name);
});