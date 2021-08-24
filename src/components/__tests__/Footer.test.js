import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter() })

describe('When Footer renders ... ', () => {
    
    it('displays an h3 tag', () => {
        const renderedFooter = shallow(<Footer />)
        const h3Tag = renderedFooter.find('h3')
        expect(h3Tag.length).toEqual(1)
    })

})