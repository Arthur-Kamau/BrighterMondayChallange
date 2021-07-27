using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace BackEnd.Models
{
      [Table("ProductsModel")]
    public class ProductsModel
    {
    
    ///<summary>
    /// Gets or sets ProductId.
    ///</summary>
    [Key]
    public int productId { get; set; }

    ///<summary>
    /// Gets or sets ProductUnits.
    ///</summary>
    public int productUnits { get; set; }


    ///<summary>
    /// Gets or sets ProductName.
    ///</summary>
    public string productName { get; set; }



    ///<summary>
    /// Gets or sets ProductCategory.
    ///</summary>
    public string productCategory{ get; set; }


    ///<summary>
    /// Gets or sets ProductPrice.
    ///</summary>
    public int productPrice{ get; set; }


     ///<summary>
    /// Gets or sets ProductHasVariants.
    ///</summary>
    public bool productHasVariants{ get; set; }


    ///<summary>
    /// Gets or sets ProductAttributes.
    ///</summary>
    public System.Collections.Generic.List<ProductsVariantsModel> productsVariants { get; set; }
    

    ///<summary>
    /// Gets or sets ProductAttributes.
    ///</summary>
    public System.Collections.Generic.List<ProductAttributes> productAttributes { get; set; }
    
    
    }
}