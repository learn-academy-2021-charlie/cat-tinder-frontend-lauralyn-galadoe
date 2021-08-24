import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HomeImage from '../../assets/cat-on-back.jpeg'
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home renders ... ', () => {
    
    it('displays an image"', () => {
        //arrange
        const renderedHome = shallow(<Home />)
        //act
        const renderedImg = renderedHome.find("img")
        //assert
        expect(renderedImg.prop("src")).toEqual(HomeImage);
    })

})