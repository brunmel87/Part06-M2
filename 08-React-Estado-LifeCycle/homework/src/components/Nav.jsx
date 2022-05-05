import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';

export function Nav({onSearch}) {
  return (
    <div className={s.container}>
      <div className={s.imgTitle}>
        <img src={Logo} className={s.img} alt='Logo Henry' />
        <p className={s.text}>Henry - Weather App</p>
      </div>
      <SearchBar onSearch={onSearch}/> 
    </div>
  );
};

export default Nav;
