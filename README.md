# Squiz integration refactoring code review

## Overview
This project is part of the Squiz product engineering interview process. The codebase has been written to contain issues that could be identified and fixed and to allow for extensions to the functionality to be built by an engineer.

# Scenario
Pretend you have just inherited this codebase from the business.

The project is a simple application which includes functions that use axios (https://www.npmjs.com/package/axios) to interact with the Petstore API to retrieve and create pets from a store's database. 

The company recently started working on this application. It's been decided that you are the new engineer on the project. Your job is to review the codebase, ensure that the code conforms to established coding standards, and learn the codebase with a view to beginning work on implementing new features as requested by your product manager.

> **Note:** Petstore is a free Open Source API provided by the team that maintain Swagger, a suite of tools for API developers. Docs and code for the API can be found at https://github.com/swagger-api/swagger-petstore  


## The App
To get the app to run, please ensure you have node 14 and npm 7 installed on your machine. Instructions available at https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-node-js-and-npm

Clone the git repo into an empty folder

In the terminal, navigate to the app's directory and run the command `npm install`. This will create a node_modules directory and install the required packages for the app to run.

To run the app on the CLI, use 

`node -e 'require("./index.js").<FUNCTION_NAME>(<PARAM1>, "<PARAM2>");'`
 - substitute the function name and params with the appropriate ones. Examples can be found below and also in the code for each function

For example: 

`node -e 'require("./index.js").getPetById(10);'`
 
will call `getPetById` and pass in 10 as the `petId` parameter. 
Responses are logged to the console in the terminal.

# Your Tasks
- Get the project running, inspect the codebase, and note down any issues you see.
- Familiarize yourself with the code and the API documentation, and think about how you might go about extending the code to implement more of the API functions.

> **Note:** We will be discussing the issues you have found during the interview, and discussing your ideas around extending the functionality, so please make sure you note them down and that you are familiar with the codebase. You don't need to actually write code as part of this process, but you can absolutely do so if that makes things easier or if you prefer to show your own code during the technical review.

# What we're looking for
- Your ability to read and understand an unfamiliar codebase
- Your ability to identify issues with an unfamiliar codebase
- Your ability to extend the functionality of an unfamiliar codebase
- Your ability to communicate those issues, why they're an issue, and what work needs to be done to resolve the issue
- Your ability to understand a new feature request and explain how you would implement it and why you would implement it in this way