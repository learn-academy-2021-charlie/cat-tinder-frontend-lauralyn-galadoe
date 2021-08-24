import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'

Enzyme.configure({ adapter: new Adapter() })

describe('When the Header component renders ... ', () => {
    
    it('displays the text Cat Tinder!', () => {
        //arrange
        const renderedHeader = shallow(<Header />)
        //act
        const h3Tag = renderedHeader.find("h3")
        //assert
        expect(h3Tag.text()).toEqual("Cat Tinder!")
    })

})