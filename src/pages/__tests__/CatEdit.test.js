import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from '../CatEdit'


Enzyme.configure({ adapter: new Adapter() })

describe('when cat edit renders', () => {
  it('theres a form' , () => {
    let cat = {
      name: "",
      age: "",
      enjoys: ""
    }
    const catEdit = shallow(<CatEdit cat={cat} />)


  })

})

// it('theres been a change', () => {
//   let cat = {
//     name: "",
//     age: "",
//     enjoys: ""
//   }
//   const catEdit = shallow(<CatEdit cat={cat} />)
