import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from '../CatNew'

Enzyme.configure({adapter: new Adapter() })

describe("When the CatNew component renders...", () => {

    it("displays a form", () => {
        const catNew = shallow(<CatNew />)
        const form = catNew.find("Form")
        expect(form.length).toEqual(1)
    })

    it("displays FormGroups for each input", () => {
        const catNew = shallow(<CatNew />)
        const formGroup = catNew.find("FormGroup")
        expect(formGroup.length).toEqual(3)
    })

})