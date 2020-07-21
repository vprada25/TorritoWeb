import React from 'react';

import { Carousel } from 'antd';

import "../../Style/stylehomeL.css";

import Navbar from "../../../components/navBarlogueado";

import { FacebookOutlined, WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons';

function home() {
    return (
        <div className="homegeneral">
            <Navbar />
            <div className="general-text">
                <div className="text-div">
                    <p className="text-p">Toorito te permite administrar tus productos,
                     con un manego facil y flexible para que todos los usuarios puedan sacarle la maxima funcionalidad a la app. </p>
                </div>

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

                    <div className="text-carousel">
                        <p className="carousel-p">Pescado</p>
                        <img
                            src={require("../../../assets/imgs/pescado.jpg")}
                            alt="°Pescado"
                            className="carousel-img"
                        />

                    </div>

                </Carousel>
            </div>
            <div className="general-p">
                <p className="p-p">Para comunicarse con nosotros puede utilizar estas redes sociales,
                las cuales seran mostradas acontinuación.</p>
            </div>
            <div className="general-iconos">
                <FacebookOutlined className="iconosfacebook" />
                <WhatsAppOutlined className="iconoswhatsapp" />
                <InstagramOutlined className="iconosinstagram" />
            </div>

        </div>
    );
}

export default home;