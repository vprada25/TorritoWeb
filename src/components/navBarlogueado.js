import React, { useEffect, useState } from "react";
import logo from "../assets/logos/logo3.png";
import "../PagesLogueado/Style/styleNavbar.css";
import Menu from './setMenu';
import { Route } from "react-router-dom";
import { Navbar } from "reactstrap";
import Auth from '../services/auth.service'

const NavBarLogueado = () => {
  const [menu, setMenu] = useState([]);
  const [menuLevelOne, setMenuLevelOne] = useState([0]);
  const [menuLevelTwo, setMenuLevelTwo] = useState([0]);
  const [menuLevelThree, setMenuLevelThree] = useState([0]);
  useEffect(() => {
    let menuCalculed = [];
    Auth.getMenu().then(res => {
      menuCalculed = res.data.filter(route => route.FKID_MENU === null);
      console.log(res.data);
      res.data.map(route => {
        /* console.log(menuCalculed) */
        if (!menuCalculed.find(i => i.ID_MENU === route.ID_MENU)) {
          /* if (route.FKID_MENU !== null) { */
          const father = menuCalculed.find(i => i.ID_MENU === route.FKID_MENU)
          if (father) {
            /* father.children ? father.children.push(route) : father.children = [route] */
            menuCalculed = menuCalculed.map(i => {
              if (i.ID_MENU === father.ID_MENU) {
                if (i.children) {
                  i.children.push(route);
                  return i;
                }
                i.children = [route];
                return i;
              }
              return i;
            })
          }

          /* route.children = res.data.filter(item => item.FKID_MENU === route.ID_MENU)
          menuCalculed.push(route); */
          /* } */
        }
      });
      setMenu(menuCalculed)
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
                <li>
                  <a href={"/" + route.children[0].RUTA}>{route.children[0].NOMBRE}</a>
                  <ul>
                    {
                      route.children.filter(item => item !== route.children[0].ID_MENU).map(rt => (
                        <li>
                          <a href={'/' + rt.RUTE}>{rt.NOMBRE}</a>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ) :
                <li>
                  <a href={"/" + route.RUTA}>{route.NOMBRE}</a>
                </li>
              )
            }
            {/* <li>
              <a href="/">Principal</a>
            </li>

            <li>
              <a href="/Login">inventario</a>
              <ul>
                <li>
                  <a href="RegisterProducts">productos</a>
                </li>

                <li>
                  <a href="EmployessList">empleados</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Login">Administrar</a>
              <ul>
                <li>
                  <a href="s">empleado</a>
                </li>

                <li>
                  <a href="s">producto</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/Products">Comprar Productos</a>

              <ul>
                <li>
                  <a href="ProductsLogueado"> Res</a>
                </li>

                <li>
                  <a href="ProductsLogueado"> cerdo</a>
                </li>

                <li>
                  <a href="ProductsLogueado">Pollo</a>
                </li>

                <li>
                  <a href="ProductsLogueado">Pescado</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="a">Redes Sociales</a>
              <ul>
                <li>
                  <a href="a">Instagram</a>
                </li>

                <li>
                  <a href="a">Whatsapp</a>
                </li>

                <li>
                  <a href="a">Facebook</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/Contact">Contactános</a>
            </li>
            <li>
              <a href="/Info">Información</a>
            </li> */}
            <div className="color"><button type="Default" className="toclose">Cerrar sesión</button></div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBarLogueado;