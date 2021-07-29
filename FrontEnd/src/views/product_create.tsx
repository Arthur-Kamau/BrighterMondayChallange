import React, { Component } from 'react';
import { Product } from '../model/product';
import axios, { AxiosError, AxiosResponse } from "axios";

type ProductCreateProps = {};

type ProductCreateState = {
    errror: string,
    name: string,
    units: number,
    price: number,
    category: string,
    categories: Array<string>,

};
// class ProductCreate extends Component {

class ProductCreate extends React.Component<ProductCreateProps, ProductCreateState> {
    state: ProductCreateState = {
        errror: "",
        name: "",
        units: 0,
        price: 0,
        category: "",
        categories: []
    }



    componentDidMount() {
        axios({
            method: 'get',
            url: "https://test.araizen.com/productCategories",
            data: {}
        }).then((res: AxiosResponse) => {

           
            let  item = res.data;
            let tmp : Array<string> = [];
            for (let index = 0; index < item.length; index++) {
                const element = item[index];
                tmp.push(element["categories"])
            }
            this.setState({ categories:tmp });


        }).catch((reason: AxiosError) => {
            this.setState({ errror: "errror getting categories " });
        });

    }


    randomInteger = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    submitForm = (e: any) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: "https://test.araizen.com/products",
            data: {
                "productId": this.randomInteger(99, 292929),
                "productName": this.state.name,
                "productUnits": this.state.units,
                "productPrice": this.state.price,
                "productCategory": this.state.category,
                "productHasVariants": false,
                "productsVariants": [],
                "productAttributes": []
            }
        }).then((res: AxiosResponse) => {

            // this.setState({ categories: res.data["data"] });
            window.location.href = "/"

        }).catch((reason: AxiosError) => {
            console.log("=======================================")
            console.log("error " + e)
            console.log("=======================================")

            this.setState({ errror: "errror occured" + e })
        });
        
        
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
                                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/variant">Create Product Variant</a>
                                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/categories">Categories</a>
                            </div>
                        </div>

                        <div id="page-content-wrapper">


                            <br />
                            <br />
                            {this.state.errror.length > 0 ? <div className="badge badge-danger">  {this.state.errror} </div> : <React.Fragment />}
                            <br />
                            <br />
                            <div style={{ marginTop: "100px" }} className="container-fluid row">
                                <h2>Create a product</h2>
                                <div className="col-lg-6">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName">Name</label>
                                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" onChange={(e) => {

                                                this.setState({ name: e.target.value })
                                            }} placeholder="Enter Name" />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="amountInputAmount">Number of units</label>
                                            <input onChange={(e) => {
                                                try {
                                                    const b = parseInt(e.target.value);
                                                    this.setState({ units: b, errror: "" })
                                                } catch (error) {
                                                    this.setState({
                                                        errror: "Number of units error"
                                                    })
                                                }
                                            }} type="text" className="form-control" id="amountInputAmount" aria-describedby="amountHelp" placeholder="Enter Amount in Ksh" />

                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="unitsInputAmount">Units</label>
                                            <input onChange={(e) => {

                                                try {
                                                    const b = parseInt(e.target.value);
                                                    this.setState({ units: b, errror: "" })
                                                } catch (error) {
                                                    this.setState({
                                                        errror: "Number of units error"
                                                    })
                                                }
                                            }} type="text" className="form-control" id="amountInputAmount" aria-describedby="amountHelp" placeholder="Enter Units" />

                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="unitsInputAmount">Category</label>
                                            <select onChange={(e) => {

                                                this.setState({ category: e.target.value })
                                            }} id="inputState" className="form-control mx-5"
                                            >
                                                {this.state.categories.map((item, index) => {
                                                    return <option value={item} key={index}>{item}</option>

                                                })}


                                            </select>

                                        </div>




                                        <button type="submit" className="btn btn-primary" onClick={this.submitForm}>Submit</button>
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

export default ProductCreate;