import React from 'react';

import { Carousel } from 'antd';

import "../../Style/stylehomeL.css";

function home() {
    return (
        <div className="homegeneral">

            <div className="general-text">
                <p className="text-p">Toorito te permite administrar tus productos, con un manego facil y flexible para que todos los usuarios puedan sacarle la maxima funcionalidad a la app. </p>
                <Carousel autoplay>
                    <div className="text-carousel">
                        <p className="carousel-p">Res</p>
                        <img
                            src={require("../../../assets/imgs/res.jpg")}
                            alt="°Res"
                            className="carousel-img"
                        />

                    </div>

                    <div className="text-carousel">
                    <p className="carousel-p">Pollo</p>
                        <img
                            src={require("../../../assets/imgs/pollo.jpg")}
                            alt="°Pollo"
                            className="carousel-img"
                        />
                        
                    </div>

                    <div className="text-p">
                    <p className="carousel-p">Pescado</p>
                        <img
                            src={require("../../../assets/imgs/pescado.jpg")}
                            alt="°Pescado"
                            className="carousel-img"
                        />
                        
                    </div>

                </Carousel>
            </div>


        </div>
    );
}

export default home;