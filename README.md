# IBM Take Home Assignment

This project comprised of 3 tasks, namely Automation, Development, and Containerisation. The purpose of the assignment is to evaluate the ability to write Ansible automation scripts and develop a basic web service application and containerise it. 


# Project Structure

The project consist of the following main files and folders:

 - ansible/
	 - controller/
	 - host/
	 - vagrant/
 - webapp/express
	 - handler/
	 - middleware/
	 - Dockerfile
	 - package.json
	 - server.js

# Steps Taken

The following steps were taken to complete the 3 tasks

## Automation

The following are the main steps taken for this part of the project.

### 1. Provisioning Target VM/Ansible Host

This was carried out using Vagrant, provisioning a ubuntu vm with an assigned IP address attached, and port forwarding set-up to connect to the database from outside using the host device's public IP address and port 3306. 

To ensure the Ansible controller can access the Ansible host, a ssh key is generated on the controller and the public key will be added into the `/home/vagrant/.ssh/authorized_keys` file. 

### 2. Setting up Control Node

The control node is assumed to be the localhost. Hence, localhost will run Ansible playbooks and manage the configuration of remote hosts. A `host.ini` file is present that defines the inventory of hosts to be managed, which in this case is the vm that Vagrant has provisioned. A global playbook is also present as a means to apply tasks to all remote hosts when necessary. 

### 3. Running Scripts on Ansible Host

The playbooks on the Ansible host are split by tasks located in the `tasks/` folder. This approach allows for improved readability, maintainability, and error handling. An `init.yml` playbook sets up a basic MySQL database environment on the virtual machine "vm1" by performing the tasks specified in the `tasks/` folder.

## Web App & Containerisation

The following are the main steps taken for this part of the project.

## 1. Set up Express server

To set up an Express server in Node.js, create a new project, install Express, define the *hello_world* endpoint using `app.get()`, and start the server with `app.listen()` on port 5656.

## 2. Adding middleware

A simple logging middleware was created in the `middleware/` folder and added for monitoring and debugging purposes. 

## 3. Adding handler

A hello_world handler function was created in the `handler/` folder to process the get request to the *hello_world* endpoint by returning a "hello world" message in json.

## 4. Containerisation

To containerise the web application, a Dockerfile was created. The base image used was Node Alpine for the Express web app, while the container exposed port 5656 to the host system. This meant that the express server running within the container listening on port 5656 can be accessed from the host or other containers on the network. 
