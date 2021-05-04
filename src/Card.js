import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return ( 
            <section class="py-4 py-lg-5 container">
            <div class="row">
                <div class="col">
                    <div data-aos={this.props.aos} data-aos-offset={this.aos_offset} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        <div class="card p-0 overflow-hidden h-100 shadow">
                            <img src={this.props.img} class="rounded float-end"/>
                            <div class="card-body">
                                <h5 class="card-title">{this.props.title}</h5>
                                <p class="card-text">{this.props.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        )
    }
}