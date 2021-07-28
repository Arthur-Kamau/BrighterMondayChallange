import React, { Component } from 'react';


import { ProductVariantTypes } from '../model/product_variant';



type ProductCreateVariantProps = {};

type ProductCreateVariantState = {
    products: ProductVariantTypes |  null,


};

class ProductCreateVariant extends React.Component<ProductCreateVariantProps, ProductCreateVariantState> {
    state: ProductCreateVariantState = {

        products: null,
    }
    render() {
        return (
            <React.Fragment>


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
                            <div style={{ marginTop: "100px" }} className="container-fluid row">
                                <h2>Create a product</h2>
                                <div className="col-lg-6">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName">Name</label>
                                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name" />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="amountInputAmount">Amount</label>
                                            <input type="text" className="form-control" id="amountInputAmount" aria-describedby="amountHelp" placeholder="Enter Amount in Ksh" />

                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="unitsInputAmount">Units</label>
                                            <input type="text" className="form-control" id="amountInputAmount" aria-describedby="amountHelp" placeholder="Enter Units" />

                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="unitsInputAmount">Category</label>
                                            <input type="text" className="form-control" id="categoryInputAmount" aria-describedby="categoryHelp" placeholder="Enter Category" />

                                        </div>


                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Has variants</label>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


            </React.Fragment>
        );
    }
}

export default ProductCreateVariant;