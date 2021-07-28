import React, { Component } from 'react';
import "./styles.css";

class Home extends Component {
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
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/list">Categories</a>
                        </div>
                    </div>


                    <div id="page-content-wrapper">


                        <br />
                        <div style={{ marginTop: "100px", color: "black" }} className="container-fluid">
                            <h6>Welcome to store you can create, list and update products</h6>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default Home;