import React, { Component, useEffect } from 'react'
import Card from './Card'
import Img1 from './img/product1.jpg'
import Img2 from './img/product2.jpg'
import Img3 from './img/product3.jpg'
import Img4 from './img/product4.jpg'
import Img5 from './img/product5.jpg'
import Img6 from './img/product6.jpg'
import Img7 from './img/product7.jpg'
import Img8 from './img/product8.jpg'
import Img9 from './img/product9.jpg'
import Img10 from './img/product10.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Gallery = () => {
        useEffect(() => {
            Aos.init();
        }, [])
        return (
            <section className="py-4 py-lg-5 container">
                <div className="row">

                    <Card aos="fade-out" aos_offsed="100" img={Img1} title="title1" desc="desc1"/>
                    <Card aos="fade-up" aos_offsed="100" img={Img2} title="title2" desc="desc2"/>
                    <Card aos="fade-down" aos_offsed="100" img={Img3} title="title3" desc="desc3"/>
                    <Card aos="fade-left" aos_offsed="100" img={Img4} title="title4" desc="desc4"/>
                    <Card aos="fade-right" aos_offsed="100" img={Img5} title="title5" desc="desc5"/>
                    <Card aos="fade-up-right" aos_offsed="100" img={Img6} title="title6" desc="desc6"/>
                    <Card aos="fade-up-left" aos_offsed="100" img={Img7} title="title7" desc="desc7"/>
                    <Card aos="fade-down-right" aos_offsed="100" img={Img8} title="title8" desc="desc8"/>
                    <Card aos="fade-down-left" aos_offsed="100" img={Img9} title="title9" desc="desc9"/>
                    <Card aos="slide-up" aos_offsed="100" img={Img10} title="title10" desc="desc10"/>
            
                    <Card aos="slide-down" aos_offsed="100" img={Img1} title="title1" desc="desc1"/>
                    <Card aos="slide-left" aos_offsed="100" img={Img2} title="title2" desc="desc2"/>
                    <Card aos="slide-right" aos_offsed="100" img={Img3} title="title3" desc="desc3"/>
                    <Card aos="zoom-in" aos_offsed="100" img={Img4} title="title4" desc="desc4"/>
                    <Card aos="zoom-in-up" aos_offsed="100" img={Img5} title="title5" desc="desc5"/>
                    <Card aos="zoom-in-down" aos_offsed="100" img={Img6} title="title6" desc="desc"/>
                    <Card aos="zoom-in-left" aos_offsed="100" img={Img7} title="title7" desc="desc7"/>
                    <Card aos="zoom-in-right" aos_offsed="100" img={Img8} title="title8" desc="desc8"/>
                    <Card aos="zoom-out-down" aos_offsed="100" img={Img9} title="title9" desc="desc9"/>
                    <Card aos="zoom-out-left" aos_offsed="100" img={Img10} title="title10" desc="desc10"/>
            
                </div>
            </section>
        )
}
export default Gallery;

