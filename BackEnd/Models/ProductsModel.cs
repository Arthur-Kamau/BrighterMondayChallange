using System;

namespace BackEnd.Models
{
    public class ProductsModel
    {
    
    ///<summary>
    /// Gets or sets ProductId.
    ///</summary>
    public int ProductId { get; set; }

    ///<summary>
    /// Gets or sets ProductUnits.
    ///</summary>
    public int ProductUnits { get; set; }


    ///<summary>
    /// Gets or sets ProductName.
    ///</summary>
    public string ProductName { get; set; }



    ///<summary>
    /// Gets or sets ProductCategory.
    ///</summary>
    public string ProductCategory{ get; set; }


    ///<summary>
    /// Gets or sets ProductPrice.
    ///</summary>
    public int ProductPrice{ get; set; }


     ///<summary>
    /// Gets or sets ProductHasVariants.
    ///</summary>
    public bool ProductHasVariants{ get; set; }


    ///<summary>
    /// Gets or sets ProductAttributes.
    ///</summary>
    public System.Collections.Generic.List<ProductsVariantsModel> ProductsVariants { get; set; }
    

    ///<summary>
    /// Gets or sets ProductAttributes.
    ///</summary>
    public System.Collections.Generic.List<string> ProductAttributes { get; set; }
    
    
    }
}