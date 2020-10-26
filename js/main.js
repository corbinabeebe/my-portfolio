import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    title: "Book Review Web App",
    href: "https://github.com/corbinabeebe/flaskapps/tree/master/project1",
    desc: ``` Book review web application. Uses flask micro service framework connected to a Heroku/Postgres
            database via SQLAlchemy. Allows user to create a login, authenticate login information, search for books, leave reviews on books,
            and sends a http requests to Goodreads.com to show review information and count (Python, HTML5, CSS, Bootstrap, Flask)```,
    image: {
      desc: "Screenshot of book review web app",
      src: "images/book_review_app.jpg",
      comment: `Book Review Web Application`,
    },
  },
  {
    title: "Serverless Portfolio",
    href: "https://portfolio.cbeebe.net",
    desc: ```Serverless Portfolio of projects built with JavaScript. Uses React, Babel for primary structure of portfolio.
            Uses Chai, Mocha, Jest and Enzyme for testing. Portfolio is then bundled with webpack and uploaded to AWS via a python a boto3
            lambda script. Portfolio is tracked on AWS with Code Build and Code Pipeline (Python, JavaScript, React.js, Babel, AWS: Route56,
            CloudFront, Lambda, Codebuild```,
    image: {
      desc: "Image of Serverless portfolio",
      src: "images/portfoliopicture.jpg",
      comment: `Serverless portfolio`,
    },
  },
  {
    title: "Password Generator Application",
    href:
      "https://github.com/corbinabeebe/Android_Apps/tree/master/PasswordGenerator",
    desc: ```Android app that allows the user to select the length of the password they want generated with a seek
            bar. User can then click the generate button to generate a random password of desired length. Password meets most password policy
            requirements (Java, Android, XML)```,
    image: {
      desc: "image of password generator app",
      src: "images/PasswordGenerator.jpg",
      comment: `Password generator app screen shot`,
    },
  },
];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work')); 