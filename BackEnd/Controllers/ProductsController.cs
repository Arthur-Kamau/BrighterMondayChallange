using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BackEnd.Models;
using Newtonsoft.Json;

namespace BackEnd.Controllers
{

    public class ProductsController : Controller
    {

        ProductsModel tem2 = new ProductsModel(
productId: 9,
productUnits: 4,
productName: "name",
productCategory: "soap",
productPrice: 1200,
productHasVariants: false,
productsVariants: (new ProductsVariantsModel[] { }).ToList(),
productAttributes: (new ProductAttributes[] { }).ToList()
        );
        ProductsCompositeModel item = new ProductsCompositeModel(
        productComposites: (new ProductsModel[] { }).ToList(),
        productsCompositeUnits: 9,
        productsCompositePrice: 99,
        productsCompositeName: "test",
        productsCompositeCategory: "sample"
                );
        List<ProductsCompositeModel> list = new List<ProductsCompositeModel>();


        [HttpGet]
        [Route("/productAttributes")]
        public IActionResult listProductAttributes()
        {

            return Json(null);
        }



        [HttpPost]
        [Route("/productAttributes")]
        public IActionResult addProductAttribute()
        {

            return Json(null);
        }

        [HttpPut]
        [Route("/products")]
        public IActionResult modifyProduct()
        {

            return Content("modify a product");
        }


        [HttpPost]
        [Route("/products")]
        public IActionResult addProduct([FromBody] ProductsModel productsModel)
        // public IActionResult addProduct( )
        {

            Console.WriteLine("hey "+ productsModel.productName);

           
            string json = JsonConvert.SerializeObject(productsModel, Formatting.Indented);
            
            return Content(json);
        }


        [HttpGet]
        [Route("/productCategory")]
        public IActionResult getProductInaCategory()
        {

            return Content("get products in a Category");
        }



        [HttpGet]
        [Route("/products")]
        public IActionResult getProducts()
        {

            string json = JsonConvert.SerializeObject(tem2, Formatting.Indented);
            
            return Content(json);
        }





        [HttpPost]
        [Route("/productCategory")]
        public IActionResult addProductCategory()
        {
            return Content("addProductCategory");
        }


        [HttpGet]
        [Route("/productCategory")]
        public IActionResult getProductCategories()
        {
            return Content("getProductCategories");
        }










    }
}