import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFoundImage from '../../assets/missing-cat.jpg'
import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('When Not Found renders', () => {
    
    it('displays an image', () => {
        //arrange
        const renderedNotFound = shallow(<NotFound />)
        //act
        const renderedImg = renderedNotFound.find("img")
        //assert
        expect(renderedImg.prop("src")).toEqual(NotFoundImage);
    })

})
