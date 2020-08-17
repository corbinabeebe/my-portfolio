import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter:new Adapter() });

const myExample = {
    'title': "Book Review Web App",
    'href': 'http://example.com',
    'desc': "Under Construction",
    'image': {
        'desc': "Example screenshot of book review web app",
        'src': "images/book_review_app.jpg",
        'comment': `Book Review Web Application`
    }
    };

describe("ExampleWorkModal component", () => {
    let mockCloseModalFn = jest.fn();
    
    let component = shallow(<ExampleWorkModal example={myExample}
        open={ false}/>);

    let openComponent = shallow(<ExampleWorkModal example={myExample}
        open = {true} 
        /*closeModal= {mockCloseModalFn}*//>);

    let anchors = component.find('a');


    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => { 
        expect(anchors.prop('href')).toEqual(myExample.href);
    });

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    });

    /**Need to work on this test for close modal button being clicked */
    /* it("Should call close modal handler when clicked", () => {
        closeModal.simulate("click");
        expect(mockCloseModalFn).toHaveBeenCalled();
    }); */

});