import React from 'react'
import render from 'react-test-renderer'

import Header from '../../../client/components/Header.jsx'

it('Does the header read Flat Mate?', ()=> {
  const tree = render.create(
    <link page="../../../client/components/Header"></link>
  ).toJSON()
  expect(tree).toMatchSnapshot()
  })
