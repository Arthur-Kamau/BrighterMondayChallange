using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace BackEnd.Models
{
    [Table("ProductCategories")]
    public class ProductCategories
    {


        public ProductCategories(int id,  string categories)
        {

            this.id = id;
            this.categories = categories;
        }
        ///<summary>
        /// Gets or sets ProductId.
        ///</summary>
        [Key]
        public int id { get; set; }

        ///<summary>
        /// Gets or sets attribute.
        ///</summary>
        public string categories { get; set; }
    }
}