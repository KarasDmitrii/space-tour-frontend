import logo from "../../assets/spacex_logo.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
import './appHeader.scss';
import { API_URL } from "../../index";


function AppHeader() {
  const [menuList, setMenuList] = useState<IMenuItem[] | []>([])

  interface IMenuItem {
    text: string;
    url: string;
  }

  useEffect(() => {
    getMenuList()
  }, [])

  const getMenuList = () => {
    axios.get<IMenuItem[]>(API_URL + 'menu_items/').then(data => setMenuList(data.data))
  }


  return (
    <header className="header__container w-100">
      <div className="justify-content-between container d-flex h-100">
        <div className='header__logo-wrapper h-100 d-flex align-items-center'>
          <img className="header__logo" src={logo} alt="logo"/>
        </div>
        <div className="header__menu-wrapper h-100 align-items-center d-flex">
          {menuList ? menuList.map((item, index) => {
            return <a className="header__menu-item body-bold" key={index}>{item.text}</a>
          }) : <p>элементы меню отсуствуют</p>}
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
