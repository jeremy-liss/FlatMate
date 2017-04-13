import React from 'react'

import BillItems from './BillItems'

const Bills = () => (
  <div className='bills'>
   <h1>Bills</h1>
   <div>
     <BillItems />
     <a href='#/home'>Return Home</a>
   </div>
  </div>
)

export default Bills
