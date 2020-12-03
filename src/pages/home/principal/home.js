import React, { useEffect } from "react";
import logo from "../../../assets/logos/Logo.png";

import "../../../Style/stylehome.css";

import Nabvar from "../../../components/navbar.js";
import Footer from "../../../components/footer.js";
import { Link } from "react-router-dom";

import { user } from "../../../services/user/userActions";

import { useSelector, useDispatch } from "react-redux";

const items = [
  {
    name: "Carne de Res",
    description: "En el Toorito tenemos el privilegio de cuidar nuestro producto desde su origen, obteniendo una carne saludable con un magnifico sabor, marmoreo y terneza. Nuestro portafolio abarca desde los potentes Ojos de Bife y Tomahawk Steaks para parrillar hasta los mas suaves y magros Lomitos y Cuadriles para preparar en la casa.",
    price: 5,
    photo: "https://www.recetas.com/files/ingredient/thumb/c/carne-de-res_gj04y"
  },
  {
    name: "Carne de Cerdo",
    description: "Hamburguesa rica y saludable",
    price: 15,
    photo: "https://www.mercadodechamartin.es/madrid/wp-content/uploads/2018/01/Carne-de-cerdo.jpeg"
  },
  {
    name: "Pollo",
    description: "Agua de un charco del Himalaya",
    price: 5,
    photo: "https://i.blogs.es/8ceb02/pollo_entero/450_1000.jpg"
  },
];

function Catalogue() {
  return(
    <section>
    {items.map(items => <div>
      
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img class="img-fluid rounded-circle" src={items.photo} alt="" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-4">{items.name}  </h2>
              <p>
                {items.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>)}
    </section>
    
  )
}

function Menu() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(user.getUser());
  }, []);

  return (
    <div>
      <Nabvar />

      <header class="masthead text-center text-white">
        <div class="masthead-content">
          <div class="container">
            <h1 class="masthead-heading mb-0">El Toorito</h1>
            <h2 class="masthead-subheading mb-0">
              LAS MEJORES CARNES EN LA PUERTA DE SU CASA
            </h2>
          </div>
        </div>
      </header>
      <Catalogue></Catalogue>
      <Footer />
    </div>
  );
}

export default Menu;
