import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from '../CatEdit'


Enzyme.configure({ adapter: new Adapter() })

describe('when cat edit renders', () => {
  it("displays a form", () => {
    let cat = {
        name: "",
        age: "",
        enjoys: ""
    }

      const catEdit = shallow(<CatEdit cat={cat}/>)
      const form = catEdit.find("Form")
      expect(form.length).toEqual(1)
  })

  it("displays FormGroups for each input", () => {
    let cat = {
        name: "",
        age: "",
        enjoys: ""
    }

      const catEdit = shallow(<CatEdit cat={cat}/>)
      const formGroup = catEdit.find("FormGroup")
      expect(formGroup.length).toEqual(3)
  })

})

// it('theres been a change', () => {
//   let cat = {
//     name: "",
//     age: "",
//     enjoys: ""
//   }
//   const catEdit = shallow(<CatEdit cat={cat} />)
