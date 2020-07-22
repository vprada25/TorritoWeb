import React from "react";
import "../../../Style/StyleProfile.css";

function config() {
  return (
    <div>
      <div className="root">
        <label className="titleProfile">Configuración del Perfil</label>
      </div>

      <div className="picture">
        <table >
          <tr>
           {/*  <th>NIT</th> */}
            <th>NOMBRE EMPRESA</th>
            <th>DIRECCIÓN EMPRESA</th>
            <th>TELÉFONO</th>
          </tr>
          <tr>
              
             {/*  <td><label>
              <input type="text" className="contend-business " id="lastName" />
            </label></td> */}
              <td><label>
             
              <input type="text" className="contend-business" id="lastName" />
            </label></td>
              <td><label>
              
              <input type="text" className="contend-business " id="lastName" />
            </label></td>
              <td><label>
              
              <input type="text" className="contend-business " id="lastName" />
            </label></td>
          </tr>
        </table>
        
      </div>
      <div className="rootbutoon">
        <button type="submit" className="buttons-registrar-profile">
                Registrar
              </button>
        </div>
    </div>
  );
}

export default config;
