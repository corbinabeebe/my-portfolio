import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter:new Adapter() });

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
    }
]


describe("ExampleWork component", () => {
    let component = shallow(<ExampleWork work={myWork}/>)

    it("Should be a 'span' element", () => {
        
        expect(component.type()).toEqual('span');
    });

    it("Should contain as many children as there are work examples", () => {
        expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
    });

    it("Should allow our modal to open and close", () => {
        component.instance().openModal();
        expect(component.instance().state.modalOpen).toBe(true);
        component.instance().closeModal();
        expect(component.instance().state.modalOpen).toBe(false);
    });
});

describe("ExampleWorkBubble component", () => {
    let mockOpenModalFn = jest.fn();

    let component = shallow(<ExampleWorkBubble example={myWork[1]}
        openModal={mockOpenModalFn}/>);

    let images = component.find("img");

    it("Should contain a single img element", () => {
        expect(images.length).toEqual(1);
    });

    it("Should have the image source set corrently", () => {
        expect(images.prop('src')).toEqual(myWork[1].image.src);
    });

    it("Should call openModal handler when clicked", () => {
        component.find(".section__exampleWrapper").simulate("click");
        expect(mockOpenModalFn).toHaveBeenCalled();
    });
});