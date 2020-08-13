import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [ {
    'title': "Book Review Web App",
    'image': {
        'desc': "Example screenshot of book review web app",
        'src': "images/book_review_app.jpg",
        'comment': `Book Review Web Application`
        }
    },
    {
    'title': "What's that Flagg? app",
    'image': {
        'desc': "example image of What's that flag application",
        'src': "images/whats_that_flag.png",
        'comment':`Android game application - What's that Flag?`
        }
    },
    {
    'title': "Portfolio Boilerplate",
    'image': {
        'desc': "image of portfolio boilerplate",
        'src': "images/portfoliopicture.jpg",
        'comment': `Portfolio boilerplate code`
        }
    }
  ]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work')); 