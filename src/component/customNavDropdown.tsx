// components/CustomDropdown.js
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from './CustomDropdown.module.css';

const CustomDropdown = () => {
  return (
    <Dropdown className={styles.customDropdown}>
      <Dropdown.Toggle id="dropdown-basic" className='bg-white text-black border-0' >Buy a car</Dropdown.Toggle>

      <Dropdown.Menu className={styles.customDropdownMenu}>
        <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Action</Dropdown.Item>
      </Dropdown.Menu>


      <Dropdown.Toggle id="dropdown-basic" className='bg-white text-black border-0' >Sell a car</Dropdown.Toggle>

      <Dropdown.Menu className={styles.customDropdownMenu}>
        <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
