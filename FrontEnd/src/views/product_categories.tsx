import React, { Component } from 'react';
import { Product } from "../model/product"
import axios, { AxiosError, AxiosResponse } from "axios";

type ProductCategoriesProps = {};

type ProductCategoriesState = {
    error: string,
    newCategory: string,
    categories: Array<string>,

};

class ProductCategories extends React.Component<ProductCategoriesProps, ProductCategoriesState> {
    state: ProductCategoriesState = {
        error: "",
        newCategory: "",
        categories: []
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: "http://localhost:5000/productCategories",
            data: {}
        }).then((res: AxiosResponse) => {

            this.setState({ categories: res.data["data"] });


        }).catch((reason: AxiosError) => {
            this.setState({ error: "errror " });
        });

    }

    submitForm = (e: any) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: "http://localhost:5000/products",
            data: {
                "data": this.state.newCategory,

            }
        }).then((res: AxiosResponse) => {

            // this.setState({ categories: res.data["data"] });
            let tmp = this.state.categories;
            tmp.push(this.state.newCategory);
            this.setState({
                categories: tmp,
                newCategory: ""
            })

        }).catch((reason: AxiosError) => {
            this.setState({ error: "errror " });
        });

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
                            <h6>Catgories</h6>

                            {this.state.categories.map((item, index) => {
                                return <div className="card" key={index} style={{ width: "1rem" }}>
                                    {item}
                                </div>

                            })}

                            <div style={{ marginTop: "100px" }}>

                                <h2>Create a category</h2>
                                <div className="col-lg-6">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName">Name</label>
                                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" onChange={(e) => {

                                                this.setState({ newCategory: e.target.value })
                                            }} placeholder="Enter Name" />

                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={this.submitForm}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default ProductCategories;