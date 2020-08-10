import React, { useEffect, useState } from "react";
import logo from "../assets/logos/logo3.png";
import "../PagesLogueado/Style/styleNavbar.css";
import { Route } from "react-router-dom";
import { Navbar } from "reactstrap";
import Auth from '../services/auth.service'

const NavBarLogueado = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    Auth.getMenu().then(res => {
      let menuItems = res.data;
      let i = 0;
      const buildMenu = (item, index) => {
        if (item.FKID_MENU !== null) {
          if (menuItems.filter(j => j.FKID_MENU === item.ID_MENU).length > 0) {
            index = index + 1;
            if (index < menuItems.length) {
              buildMenu(menuItems[index], index);
            } else {
              return;
            }
          } else {
            const indexFather = menuItems.findIndex(k => k.ID_MENU === item.FKID_MENU);
            if (menuItems[indexFather].children) {
              menuItems[indexFather].children = [...menuItems[indexFather].children, item];
            } else {
              menuItems[indexFather].children = [item];
            }
            menuItems.splice(menuItems.findIndex(g => g.ID_MENU === item.ID_MENU), 1);
            index = 0;
            buildMenu(menuItems[0], index);
          }
        } else {
          index = index + 1;
          if (index < menuItems.length) {
            buildMenu(menuItems[index], index);
          } else {
            return;
          }
        }
        return;
      }
      buildMenu(menuItems[0], i);
      setMenu(menuItems);
    })
      .catch(err => console.error(err))
  }, []);

  return (
    <div>
      <div className="Header">
        <div className="Headertitlebost">
          <div className="conlogin">
            <div><h1 className="titlehomelogueado">Toorito</h1> </div>
            <div className="logomenu">
              <img src={logo} alt="°1" />{" "}
            </div>
          </div>
        </div>
        <div className="HeaderNavList">
          <ul className="unavbar">
            {
              menu.map(route => route.children ? (
                <li key={Math.random() * 1000}>
                  <a href={"/" + route.RUTA ? route.RUTA : ''}>{route.NOMBRE}</a>
                  <ul>
                    {
                      route.children.map(rt => rt.children ? (
                        <li key={Math.random() * 1000}>
                          <a href={'/' + rt.RUTE ? rt.RUTE : ''}>{rt.NOMBRE}</a>
                          <ul>
                            {
                              rt.children.map(ruta => ruta.children ? (
                                <li key={Math.random() * 1000}>
                                  <ul>
                                    {
                                      ruta.children.map(_ => <li key={Math.random() * 1000}>
                                        <a href={"/" + _.RUTA ? _.RUTA : ''}>{_.NOMBRE}</a>
                                      </li>
                                      )
                                    }
                                  </ul>
                                </li>
                              ) :
                                <li key={Math.random() * 1000}>
                                  <a href={"/" + ruta.RUTA ? ruta.RUTA : ''}>{ruta.NOMBRE}</a>
                                </li>
                              )
                            }
                          </ul>
                        </li>
                      ) :
                        <li>
                          <a href={"/" + rt.RUTA}>{rt.NOMBRE}</a>
                        </li>
                      )
                    }
                  </ul>
                </li>
              ) :
                <li>
                  <a href={"/" + route.RUTA}>{route.NOMBRE}</a>
                </li>
              )
            }
            <div className="color"><button type="Default" className="toclose">Cerrar sesión</button></div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBarLogueado;