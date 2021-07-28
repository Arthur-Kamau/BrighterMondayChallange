using System;
using System.ComponentModel.DataAnnotations;
namespace BackEnd.Models
{
    
    public class ProductUpdate
    {


        public ProductUpdate(int id, string field, string value)
        {

            this.id = id;
            this.field = field;
            this.value = value;
        }
        ///<summary>
        /// Gets or sets ProductId.
        ///</summary>
        [Key]
        public int id { get; set; }

        ///<summary>
        /// Gets or sets field.
        ///</summary>
        public string field { get; set; }

        ///<summary>
        /// Gets or sets value.
        ///</summary>
        public string value { get; set; }
    }
}