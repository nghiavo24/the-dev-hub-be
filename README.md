# The Dev Hub (Capstone Project) - Server side
<div align="center">An online organization tool by <strong>Morgan Arancibia</strong>, <strong>Jeffrey Koshy</strong>, and <strong>Nghia (Nathan) Vo</strong> to facilitate the job searching process.
<br></br>
<img src="https://i.imgur.com/ySdkLpv.png"/>
</div>

## Project Overview

+ This repository is the back-end respository for the app.
+ The back-end is deployed on Heroku: [here](the-dev-hub-app.herokuapp.com/api/thedevhub)
+ The front-end is deployed on Vercel: [here](the-dev-hub.vercel.app)
+ The associated front-end repository can be found: [here](https://github.com/nghiavo24/the-dev-hub-fe)

## About this API

### Information
The information in the back-end server is protected by Firebase authentication. This app is has full CRUD functionality for all of its databases.

### Installation
1. Clone this repository to your labs folder and change directory into it.
2. Run `npm i` to download required dependencies.
3. Run `node db/seed.js` to seed file.
4. Run `nodemon index.js` to run localhost

### Technologies Used
- [![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)]()
- [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)]()
- [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)]()
- [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)]()
- [![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)]()

### Resources Lists
GET- (https://the-dev-hub-app.herokuapp.com/api/thedevhub/posting)
```
 {
        "title": "Software Engineer",
        "company": "Facebook",
        "posted":"12-10-2022",
        "url": "https://pennsylvania.tarta.ai/j/kMy9uoQBvf0LOA5EtCGa1122-software-engineer-systems-in-harrisburg-pennsylvania-at-facebook?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        "note": "After looking at this posting, I would need to study more on the Meta languages used"
    },
```
GET - (https://the-dev-hub-app.herokuapp.com/api/thedevhub/application)
```
    {
        "title": "Lead Software Engineer",
        "company":"Studies Weekly Inc",
        "hiring_manager":"",
        "work_site":"Hybrid",
        "location":"Orem, UT",
        "applied":"12-14-2022",
        "url":"https://www.indeed.com/jobs?q=software+engineer&l=Provo%2C+UT&vjk=041711e459316186&advn=4361011677313895"
    },
```


## Deployment
The back-end of our application is a MongoDB, Express and Node with three models that includes a schema for Posting, Application, and Note. They follow RESTful architecture in naming and functionality of all available endpoints. Create, Read, Update, and Destroy (CRUD) was built in throughout the app. The back-end composes the following technologies/platforms:

### Heroku: 
Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps. The platform is elegant, flexible, and easy to use, offering developers the simplest path to getting our apps to market. Heroku plays a crucial part in our back-end server/app. 

### MongoDB Atlas: 
MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. According to General Assembly, _"even though SQL databases have been around for much longer, NoSQL databases have gained in popularity in recent years as the amount of user-generated data on web applications has grown exponentially. NoSQL databases like MongoDB lend themselves well to rapid app development use cases such as coding sprints and Agile settings. Anytime you have large amounts of data with little or no structure, unknown requirements, or when data is increasing at a very high rate, a flexible and scaleable database like MongoDB would be an ideal choice."_

### Postman:
Postman is a great tool when trying to dissect RESTful APIs made by others or test ones you have made yourself. It offers a sleek user interface with which to make HTML requests, without the hassle of writing a bunch of code just to test an API's functionality. **(Digitalcrafts)**


## Req-Res Diagram
![image](https://user-images.githubusercontent.com/114137772/210913054-17746858-649c-4c47-92d9-963437c858a7.png)


## User Stories
+ AAU, I want to be able to view the data of the job postings, after logging in.
+ AAU, I want to be able to view my own personal data of applications after logging in.
+ AAU, I want to able to add new postings and applications
+ AAU, I want to be able to edit or delete the current postings.
+ AAU, I want to be able to edit or delete my personal applications.
+ AAU, I want to be able to add notes to my applications page.


## Component Development
Our main component includes:
+ Controllers directory: two separate file for managing our API request and responses.
+ Data directory: contains two file with already-made JSON data to test our localhost in the first phase of the project.
+ Seed directory: contains file to seed already-made JSON into localhost database.
+ Connection file: contain file to connect to MongoDB.
+ Models directory: contains two file that have schema properties and values.


## Project Management 
We follow the SCRUM & Agile development process throughout our project. We meet daily to discuss about things like our goals for the days, our blockers, any on-going issues. We did pair-programming as well as individual programming. Before we break for the day, we discussed about our progress, any wins, remaining issues.
We follow the a strict 'Feature Branch' git workflow to avoid creating conflict and it had been very successful. Beside some minor conflicts due to unexpected changes in planning, we had no to very minimal conflict when merging. 
As a leader, Nathan tried to be as transparent and communicative to his team members as much as possible. He discussed his ideas, opened to suggestions, checked in with team members to make sure they were on the same page and peformed many code reviews sessions. Nathan was also responsible for being the SCRUM leader and Git Manager. He made all the pull requests, reviewed and resolved conflicts if there were any, then he merged and delete that branch. 

## Code Snippet

We had to add another condition to this middleware so it will not crash our server when we first started it. Without it, the server crashes as soon as the request is being sent to it.

```
class Middleware{
    async decodeToken(req, res, next) {
        let token
        if(req.headers.authorization){
            console.log(req.headers)
            token = req.headers.authorization.split(' ')[1];
            console.log(token)
        } else {
            return res.status(401).json({ message: 'No authentication provided'})
        }
        try{
            const decodeValue = await admin.auth().verifyIdToken(token);
            if(decodeValue) {
                console.log(decodeValue);
                return next();
            }
            return res.json({message: 'Unauthorized user!'});
        }
        catch(error){
            console.log(error);
            return res.json({message: 'Internal Error'});
        }
    }
}
```


## Issues & Resolutions
- Heroku deployment was an issue we submitted an issue ticket for. It showed that the server was deployed but when a request was received by the server, it caused the server to crash and rebuild. It turned about to be the secret key not being picked up by Heroku and we had to manually add that to the config in Heroku.

-  We also had trouble with current the date after the person has created a posting or application. We used the external feature of "moment". It displayed a long list of numbers, which were the date and time as well. Later we fixed this by changing it to a string and leting the user pick a date on the front-end. We also had to write a temporary code to solve the date being reversed when it was sent to MongoDB and sent back to us as YYYY/DD/MM.


## Resources:
+  [.env file issues](https://stackoverflow.com/questions/48378337/create-react-app-not-picking-up-env-files)
+  [Resolve the CORS issue in the back-end](https://stackoverflow.com/questions/46904400/why-does-the-browser-send-an-options-request-even-though-my-frontend-code-is-just)
+  [Schema help](https://mongoosejs.com/docs/schematypes.html)
+  [Resolve the CORS issue in the back-end](https://stackoverflow.com/questions/46904400/why-does-the-browser-send-an-options-request-even-though-my-frontend-code-is-jus)
