using System;

namespace BackEnd.Models
{
    public class ProductsCompositeModel
    {

        public ProductsCompositeModel(System.Collections.Generic.List<ProductsModel> productComposites, int productsCompositeUnits, int productsCompositePrice, string productsCompositeName, string productsCompositeCategory)
        {
            this.productComposites = productComposites;
            this.productsCompositeUnits = productsCompositeUnits;
            this.productsCompositePrice = productsCompositePrice;
            this.productsCompositeName = productsCompositeName;
            this.productsCompositeCategory = productsCompositeCategory;

        }

        ///<summary>
        /// Gets or sets ProductAttributes.
        ///</summary>
        public System.Collections.Generic.List<ProductsModel> productComposites { get; set; }

        ///<summary>
        /// Gets or sets ProductsCompositeUnits.
        ///</summary>
        public int productsCompositeUnits { get; set; }


        ///<summary>
        /// Gets or sets ProductsCompositePrice.
        ///</summary>
        public int productsCompositePrice { get; set; }


        ///<summary>
        /// Gets or sets ProductsCompositeName.
        ///</summary>
        public string productsCompositeName { get; set; }



        ///<summary>
        /// Gets or sets ProductsCompositeCategory.
        ///</summary>

        public string productsCompositeCategory { get; set; }

    }
}
