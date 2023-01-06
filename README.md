# Project 3 - Online Store App - Dealio (Back-End)
<div align="center">An online organization tool by <strong>Morgan Arancibia</strong>, <strong>Jeffrey Koshy</strong>, and <strong>Nghia (Nathan) Vo</strong>
<br></br>
<img src="https://i.imgur.com/ySdkLpv.png"/>
</div>

## Project Overview

+ This repository is the back-end respository for the app.
+ The back-end is deployed on Heroku: TBD
+ The front-end is deployed on Vercel: TBD
+ The associated front-end repository can be found: TBD

## About this API

### Information
The information in the back-end server is is protected by firebase authentication. This app is has full CRUD functionality.
**_Jeffrey Koshy_**

### Installation
1. Clone this repository to your labs folder and change directory into it.
2. Run `npm i` to download required dependencies.
3. Run `node db/seeb/seed-Item.js` to seed file.
4. Run `nodemon index.js` to run localhost

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
Get- (https://the-dev-hub-app.herokuapp.com/api/thedevhub/application)
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
**_Nathan_**

### Heroku: 
Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps. The platform is elegant, flexible, and easy to use, offering developers the simplest path to getting our apps to market. Heroku plays a crucial part in our back-end server/app. 

### MongoDB Atlas: 
MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. According to General Assembly, _"even though SQL databases have been around for much longer, NoSQL databases have gained in popularity in recent years as the amount of user-generated data on web applications has grown exponentially. NoSQL databases like MongoDB lend themselves well to rapid app development use cases such as coding sprints and Agile settings. Anytime you have large amounts of data with little or no structure, unknown requirements, or when data is increasing at a very high rate, a flexible and scaleable database like MongoDB would be an ideal choice."_

### Postman:
Postman is a great tool when trying to dissect RESTful APIs made by others or test ones you have made yourself. It offers a sleek user interface with which to make HTML requests, without the hassle of writing a bunch of code just to test an API's functionality. **(Digitalcrafts)**

### Vercel:
Vercel is the most accessible platform to deploy websites. By connecting the ** your GitHub repository** to Vercel, you can simply deploy the main branch to Vercel domains — and it does all the heavy lifting for you. **(Julian Wallis)**

## Req-Res Diagram
**_Morgan A_**

## User Stories
+ AAU, I want to be able to view the data of the job postings, after logging in.
+ AAU, I want to be able to view my own personal data of applications after logging in.
+ AAU, I want to able to add new postings and applications
+ AAU, I want to be able to edit or delete the current postings.
+ AAU, I want to be able to edit or delete my personal applications.
+ AAU, I want to be able to add notes to my applications page.

**_Jeffrey Koshy_**

## Component Development
Our main component includes:
+ Controllers directory: two separate file for managing our API request and responses.
+ Data directory: contains two file with already-made JSON data to test our localhost in the first phase of the project.
+ Seed directory: contains file to seed already-made JSON into localhost database.
+ Connection file: contain file to connect to MongoDB.
+ Models directory: contains two file that have schema properties and values.




## Project Management 
The team followed the daily SCRUM protocols and met for a 5 to 10 minutes a day to discuss small wins, achievements, any blockers, unresolved issues, obstacles that we were encountering. We also met before the day end to discuss any working plans and small goals for the next days.As for the Git workflow, we follow the *'Feature Branch'* method where we have the inital code set-up in the main branch. Everyone who is working will branch out to dev branch to work and push up the code accordingly. Guillermo, who is our Git Manager, then reviewed the latest code with the team to validate the code. He then will submit a pull request and merged that PR to the dev branch. Once our code met MVP, he then merge code to main branch for deployment to Heroku. The team was committed to collabrate creatively and equally. We tried to be mindful of that and divided the work so that everyone at least working on something on both back-end and front-end.
**_Nathan
_**
<div align="center">
<img src="https://user-images.githubusercontent.com/114704720/206955919-a8dbd9d1-3a2c-4e1d-bb16-b626883ce46c.png"/>
</div>

## Code Snippet
We are proud of this code, because it took many days and helps from instructors and TAs to get the authentification working. We tried with different options at first and finnaly ended with firebase. This allows the user to only view data if they are logged in.

```
const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if(user){
          user.getIdToken().then((tkn, uid) => {
            sessionStorage.setItem("accessToken", tkn);
            setAuthorizedUser(true);
            console.log(user)
          })
        }
        setUid(user.uid)
        setDisplayName(user.displayName)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      })
  }

  const logOutUser = () => {
    signOut(auth).then(() => {
      sessionStorage.clear();
      setAuthorizedUser(false);
      navigate('/')
      alert('Logged Out Successfully');
    })
    .catch((error) => {
      alert(error);
    })
  }
  ```


**_Jeffrey Koshy_**

## Issues & Resolutions

-Heroku deployemnt was an issue we submitted an issue ticket for. But we later found out that we just needed to wait a little longer for it to fully deploy.
-We also had trouble with current the date after the person has created a posting or application. We used the external feature of "moment". It displayed a long list of numbers, which were the date and time as well. Later we fixed this by changing it to a string and leting the user pick a date on the front-end.


**_Jeffrey Koshy_**

## Resources:

+ [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
+ [Inline HTML](https://stackoverflow.com/questions/12090472/how-do-i-center-an-image-in-the-readme-md-file-on-github)
+ [Intro to Mongo and Mongoose](https://git.generalassemb.ly/seir-ten3/intro-to-mongo-and-mongoose)
+ [What is Postman, and Why Should I Use It?](https://www.digitalcrafts.com/blog/student-blog-what-postman-and-why-use-it)
+ [Jullian Wallis - What Is VERCEL? Is It The Right Platform For Front-End Developers?](https://webo.digital/blog/what-is-vercel-is-it-the-right-platform-for-front-end-developers/)
+ [Whimsical - Used for the Req-Res Diagram](https://whimsical.com)
+ https://stackoverflow.com/questions/44854311/heroku-mean-stack-error-parameter-url-must-be-a-string-not-undefined
+  https://console.cloud.google.com/apis/credentials/consent?project=dev-hub-auth

**_(Anyone can put the resources they used here)_**
