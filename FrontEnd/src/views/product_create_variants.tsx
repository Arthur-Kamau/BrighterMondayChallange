import React, { Component } from 'react';


import { ProductVariantTypes } from '../model/product_variant';



type ProductCreateVariantProps = {};

type ProductCreateVariantState = {
    products: ProductVariantTypes | null,


};

class ProductCreateVariant extends React.Component<ProductCreateVariantProps, ProductCreateVariantState> {
    state: ProductCreateVariantState = {

        products: null,
    }
    render() {
        return (
            <React.Fragment>

                <h1>To be done</h1>
            </React.Fragment>
        );
    }
}

export default ProductCreateVariant;