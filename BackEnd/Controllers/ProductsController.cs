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

        // ProductsModel tem2 = new ProductsModel(
        //     productId: 9,
        //     productUnits: 4,
        //     productName: "name",
        //     productCategory: "soap",
        //     productPrice: 1200,
        //     productHasVariants: false
        // // productAttributes: (new ProductAttributes[] { }).ToList()
        // );
        // ProductsCompositeModel item = new ProductsCompositeModel(
        // productComposites: (new ProductsModel[] { }).ToList(),
        // productsCompositeUnits: 9,
        // productsCompositePrice: 99,
        // productsCompositeName: "test",
        // productsCompositeCategory: "sample"
        //         );
        // List<ProductsCompositeModel> list = new List<ProductsCompositeModel>();





        [HttpGet]
        [Route("/productAttributes")]
        public IActionResult listProductAttributes()
        {


            return Content("Not implemented");
        }



        [HttpPost]
        [Route("/productAttributes")]
        public IActionResult addProductAttribute()
        {

            return Content("Not implemented");
        }

        [HttpPut]
        [Route("/products")]
        public IActionResult modifyProduct([FromBody] ProductUpdate productUpdate)
        {


            using (var context = new ApplicationDbContext())
            {

                var x = (from m in context.db_products where m.productId.Equals(productUpdate.id) select m).ToList();

                if (x.Count > 0)
                {
                    context.db_products.Attach(x[0]);
                    x[0].productName = productUpdate.value;
                    // context.Entry(context.db_products).State = System.Data.Entity.EntityState.Modified;    
                    context.SaveChanges();

                    return Content("okay");
                }
                else
                {
                    return Content("not found");
                }
            }


        }


        [HttpPost]
        [Route("/products")]
        public IActionResult addProduct([FromBody] ProductsModel productsModel)

        {



            using (var context = new ApplicationDbContext())
            {
                context.Add(productsModel);
                context.SaveChanges();
            }



            return Content("Okay");
        }


        [HttpGet]
        [Route("/products/{category}")]
        public IActionResult getProductInaCategory(string category)
        {
            Console.WriteLine("cat " + category);
            using (var context = new ApplicationDbContext())
            {
                var x = (from m in context.db_products where m.productCategory.Equals(category) select m).ToList();

                string json = JsonConvert.SerializeObject(x, Formatting.Indented);
                return Content(json);
            }
        }



        [HttpGet]
        [Route("/products")]
        public IActionResult getProducts()
        {


            using (var context = new ApplicationDbContext())
            {
                var x = (from m in context.db_products select m).ToList();

                string json = JsonConvert.SerializeObject(x, Formatting.Indented);
                return Content(json);
            }


        }





        [HttpPost]
        [Route("/productCategory")]
        public IActionResult addProductCategory([FromBody] ProductCategories productsCategories)
        {

            using (var context = new ApplicationDbContext())
            {
                context.Add(productsCategories);
                context.SaveChanges();
            }


            return Content("okay");


        }


        [HttpGet]
        [Route("/productCategories")]
        public IActionResult getProductCategories()
        {

            using (var context = new ApplicationDbContext())
            {
                var x = (from m in context.db_categories select m).ToList();

                string json = JsonConvert.SerializeObject(x, Formatting.Indented);
                return Content(json);
            }

        }


    }
}