using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace BackEnd.Models
{
    [Table("ProductsVariantsModel")]
    public class ProductsVariantsModel
    {



        ///<summary>
        /// Gets or sets ProductId.
        ///</summary>
        [Key]
        public int productVariantId { get; set; }
        ///<summary>
        /// Gets or sets ProductVariantColor.
        ///</summary>
        public string ProductVariantColor { get; set; }

        ///<summary>
        /// Gets or sets ProductVariantPrice.
        ///</summary>
        public int ProductVariantPrice { get; set; }


        ///<summary>
        /// Gets or sets ProductVariantUnits.
        ///</summary>
        public int ProductVariantUnits { get; set; }


        ///<summary>
        /// Gets or sets ProductCategory.
        ///</summary>
        public string productCategory { get; set; }
    }
}