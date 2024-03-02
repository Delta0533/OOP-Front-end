import React from 'react'
import './Dropdown.css'

function Dropdown() {
  return (
    <div>
        <div className='dropdown'>
            <button>Course type</button>
            <div className='content'>
                <a href=''>วิชาภาค</a>
                <a href=''>วิชาเลือก</a>
                <a href=''>Gen-Ed</a>
            </div>
        </div>
    </div>
  )
}

export default Dropdown