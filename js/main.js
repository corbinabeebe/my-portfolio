import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [ 
    {
    'title': "Book Review Web App",
    'href': '#',
    'desc': "Under Construction",
    'image': {
        'desc': "Example screenshot of book review web app",
        'src': "images/book_review_app.jpg",
        'comment': `Book Review Web Application`
        }
    },
    {
    'title': "What's that Flagg? app",
    'href': '#',
    'desc': "Under Construction",
    'image': {
        'desc': "example image of What's that flag application",
        'src': "images/whats_that_flag.png",
        'comment':`Android game application - What's that Flag?`
        }
    },
    {
    'title': "Corbin's Blog",
    'href': '#',
    'desc': "Under Construction",
    'image': {
        'desc': "image of Corbin's Blog",
        'src': "images/portfoliopicture.jpg",
        'comment': `Portfolio boilerplate code`
        }
    }
  ]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work')); 