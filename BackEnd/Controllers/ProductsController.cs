using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BackEnd.Models;

namespace BackEnd.Controllers
{

    public class ProductsController : Controller
    {


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
        public IActionResult addProduct()
        {

            return Content("add a product");

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
            return Content("get products");

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