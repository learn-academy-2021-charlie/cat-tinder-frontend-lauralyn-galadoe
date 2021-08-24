import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import mockCats from '../../mockCats'
import CatShow from '../CatShow'

Enzyme.configure({ adapter: new Adapter() })

describe('When the CatShow component renders...', () => {
    it("has a CardTitle", () => {
        const catShow = shallow(<CatShow cat={mockCats[0]}/>)
        const cardTitle = catShow.find("CardTitle")
        expect(cardTitle.length).toEqual(1)
    })

})