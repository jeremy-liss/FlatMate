import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme';

import Header from '../../../client/components/Header.jsx'

test('shallow', t => {
  const wrapper = shallow(<Header />)
  t.equal(wrapper.contains(<h1>Flat Mate </h1>), true)
  t.end()
})
