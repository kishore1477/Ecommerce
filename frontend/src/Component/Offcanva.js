import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
const Offcanva = (props) => {
  const { show, handleClose, price, title } = props
  console.log("item in offscanva", title)
  return (
    <div>  <Offcanvas show={show} onHide={handleClose} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
   
        <ol className='list-decimal'>
      <li className='flex'>
        <div className='w-2/3 bg-red-700'> title is th e most important part of application  you can visit the title and show yoiur thoughts.</div>
        <div className='w-1/3 bg-green-700 text-center'>1</div>
      
      </li>
      <li className='flex'>
        <div className='w-2/3 bg-red-700'> title is th e most important part of application  you can visit the title and show yoiur thoughts.</div>
        <div className='w-1/3 bg-green-700 text-center'>1</div>
      
      </li>
      <li className='flex'>
        <div className='w-2/3 bg-red-700'> title is th e most important part of application  you can visit the title and show yoiur thoughts.</div>
        <div className='w-1/3 bg-green-700 text-center'>1</div>
      
      </li>

        
        </ol>
      </Offcanvas.Body>
    </Offcanvas></div>
  )
}

export default Offcanva