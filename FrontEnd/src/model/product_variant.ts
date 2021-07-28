 export  interface ProductVariantTypes {

    name: string,
    variants: Array<ProductVariant>
}
export interface ProductVariant {
    amount: string,
    price: string,
    category: string,
    color: string,
}