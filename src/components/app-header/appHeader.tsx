import logo from "../../assets/spacex_logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import './appHeader.scss';
import { API_URL } from "../../index";
import { createPortal } from 'react-dom';


function AppHeader() {
  const [menuList, setMenuList] = useState<IMenuItem[] | []>([])
  const [isModalShow, setIsModalShow] = useState<boolean>(false);

  interface IMenuItem {
    text: string;
    url: string;
  }

  useEffect(() => {
    axios.get<IMenuItem[]>(API_URL + 'menu_items/').then(data => setMenuList(data.data))
  }, [])


  return (
    <header className="header__container w-100">
      <div className="justify-content-between container d-flex h-100">
        <div className='header__logo-wrapper h-100 d-flex align-items-center'>
          <img className="header__logo" src={logo} alt="logo"/>
        </div>
        <div className="h-100 align-items-center justify-content-end d-flex">
          <div className="header__menu-wrapper h-100 align-items-center d-none w-100 d-lg-flex">
            {menuList.map((item, index) => {
             return <a className="header__menu-item body-bold" key={index} href={item.url}>{item.text}</a>
            })}
          </div>
          <div className="d-block d-lg-none"> 
            { !isModalShow && <svg xmlns="http://www.w3.org/2000/svg" className="header__icon" onClick={() => setIsModalShow(true)} viewBox="0 0 50 50">
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>}
            { isModalShow && createPortal(
              <div className="header__modal container position-absolute w-100 h-100 d-flex justify-content-between">
                <div className="d-grid header__modal-items">
                  {menuList.map((item, index) => {
                    return <a className="header__modal-item body-bold" key={index} href={item.url}>{item.text}</a>
                  })}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="header__icon" onClick={() => setIsModalShow(false)} viewBox="0 0 50 50">
                  <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg>
              </div>,
              document.body
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
