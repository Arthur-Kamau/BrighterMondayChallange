using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
     [Table("ProductAttributes")]
    public class ProductAttributes
    {
    
    ///<summary>
    /// Gets or sets ProductId.
    ///</summary>
    public int id { get; set; }

    ///<summary>
    /// Gets or sets attribute.
    ///</summary>
    public string attribute { get; set; }
    }
}