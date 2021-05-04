import React, { Component } from 'react'
import 'aos/dist/aos.css'
import Img1 from './img/product1.jpg'

export default class Home extends Component {
    render() {
        return (
            <section className="py-4 py-lg-5 container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mx-0 mb-4">
                        <div class="card p-0 overflow-hidden h-100 shadow">
                            <img src={Img1} class="card-img-top" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Home page</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mx-0 mb-4">
                        <div class="card p-0 overflow-hidden h-100 shadow">
                            <img src={Img1} class="card-img-top" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Home page</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mx-0 mb-4">
                        <div class="card p-0 overflow-hidden h-100 shadow">
                            <img src={Img1} class="card-img-top" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Home page</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


