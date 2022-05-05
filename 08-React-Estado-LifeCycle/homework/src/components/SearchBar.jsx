import React, { useState } from "react";
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch("Cairns");
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
      />
      <input className={s.btn}type="submit" value="Agregar" />
    </form>
  );
}