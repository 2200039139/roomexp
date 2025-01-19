import React from 'react'
import './body.css'
import Top from './TopSection/Top'
import Listing from './ListingSection/Listing'

const Body = () => {
  return (
    <div className='mainContent'>
      <Top />

      <div className="bottom flex">
        <Listing />
        
      </div>
    </div>
  )
}

export default Body