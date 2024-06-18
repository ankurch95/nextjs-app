import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CustomDropdown.module.css'; // Adjust the path to your CSS module

const CustomDropdown = () => {
  const [showSell, setShowSell] = useState(false);
  const [showBuy, setShowBuy] = useState(false);

  const handleSellMouseEnter = () => {
    setShowSell(true);
    setShowBuy(false); // Ensure the other dropdown is closed
  };

  const handleSellMouseLeave = () => {
    setShowSell(false);
  };

  const handleBuyMouseEnter = () => {
    setShowBuy(true);
    setShowSell(false); // Ensure the other dropdown is closed
  };

  const handleBuyMouseLeave = () => {
    setShowBuy(false);
  };

  return (
    <>
      <Dropdown
        className={styles.customDropdown}
        onMouseEnter={handleSellMouseEnter}
        onMouseLeave={handleSellMouseLeave}
        show={showSell}
      >
        <Dropdown.Toggle id="dropdown-basic2" className="bg-white text-black border-0">
          Sell a car
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.customDropdownMenu}>
          <Dropdown.Item href="#/action-1" className="text-slate-700 text-sm py-2">Cars in Delhi</Dropdown.Item>
          <Dropdown.Item href="#/action-1" className="text-slate-700 text-sm py-2">Cars in Gurgaon</Dropdown.Item>
          <Dropdown.Item href="#/action-1" className="text-slate-700 text-sm py-2">Cars in Meerut</Dropdown.Item>
          <Dropdown.Item href="#/action-1" className="text-slate-700 text-sm py-2">Cars in Ghaziabad</Dropdown.Item>
          <Dropdown.Item href="#/action-1" className="text-slate-700 text-sm py-2">Cars in chennai</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        className={styles.customDropdown}
        onMouseEnter={handleBuyMouseEnter}
        onMouseLeave={handleBuyMouseLeave}
        show={showBuy}
      >
        <Dropdown.Toggle id="dropdown-basic2" className="bg-white text-black border-0">
          Buy a car
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.customDropdownMenu}>
          <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Cars in Surat</Dropdown.Item>
          <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Cars in Mumbai</Dropdown.Item>
          <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Cars in Bengluru</Dropdown.Item>
          <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Cars in Indore</Dropdown.Item>
          <Dropdown.Item href="#/action-1" className='text-slate-700 text-sm py-2'>Cars in Jammu</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CustomDropdown;
