import React, { Component } from 'react';
import "./styles.css";
import { Product } from "../model/product";
import axios, { AxiosError, AxiosResponse } from "axios";

type HomeProps = {};

type HomeState = {
    products: Array<Product>,

};

class Home extends React.Component<HomeProps, HomeState> {
    state: HomeState = {

        products: [
            {
                id: 1,
                name: "socks",
                units: "99",
                price: "200",
                category: "cloths",
                color: "red",
            }
        ]
    }

    componentDidMount() {

    }

    updateItem = (id: number) => {
    }

    render() {
        return (
            <div>
                <nav className="navbar  navbar-dark bg-dark">
                    <span className="navbar-brand" >Brightor Monday Store</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </nav>
                <div className="d-flex" id="wrapper">

                    <div className="border-end bg-white" id="sidebar-wrapper">

                        <div className="list-group list-group-flush">
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/">Home</a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/create">Create Product</a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/create/variant">Create Product Variant</a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/categories">Categories</a>
                        </div>
                    </div>


                    <div id="page-content-wrapper">


                        <br />


                        <div style={{ marginTop: "100px", color: "black" }} className="container-fluid">

                            {this.state.products.map((item, index) => {
                                return <div className="card" key={index} style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17aecd5a2d8%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17aecd5a2d8%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.203125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {item.name}</h5>
                                        <p className="card-text">Price : Ksh {item.price}.</p>
                                        <p className="card-text">Category : {item.category}.</p>
                                        <p className="card-text">Units : {item.units}.</p>

                                        <a href="#" className="btn btn-danger bi  bi-pen" onClick={(e) => { this.updateItem(item.id) }}></a>
                                    </div>
                                </div>
                            })}


                        </div>


                    </div>

                </div>


            </div>
        );
    }
}

export default Home;