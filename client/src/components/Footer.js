import React from 'react'
import inst from '../assets/image/inst.svg'
import tg from '../assets/image/teleg.svg'
import vk from '../assets/image/vk.svg'
import { NavLink } from 'react-bootstrap'
import { PROFILE_ROUTE } from '../utils/consts'
import { FaArrowRight } from 'react-icons/fa'

const Footer = ({title = []}) => {
  return (
    <div className='w-100 d-flex justify-content-center'>
      <footer className='d-inline-block mb-3'>
        <div className='d-flex flex-column mb-3'>
          <NavLink className='d-flex flex-column align-items-center' href={PROFILE_ROUTE}>
            <div className='heading-font f-450 text-uppercase d-flex flex-column align-items-center mb-2'>
              <span className='me-2 mb-2'>{title[0]}</span>
              <span className='stroke'>{title[1]}</span> 
            </div>
            <div className='d-flex align-items-center'>
              <FaArrowRight className='me-2'/>
              <h4 className='mb-0'>
                Записаться
              </h4>
            </div>
          </NavLink>
        </div>
        <div className='w-100 d-flex justify-content-between'>
            <a href="https://t.me/annatsareva" >
              <img src={tg} alt="" width="48px" />
            </a>
            <a href="https://instagram.com/annatsareva1?igshid=NTdlMDg3MTY=" >
              <img src={inst} alt="" />
            </a>  
            <a href="https://vk.com/tsarevaanna" >
              <img src={vk} alt="" width="48px" />
            </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer