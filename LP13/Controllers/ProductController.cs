using LP13.Models;
using Microsoft.AspNetCore.Mvc;

namespace LP13.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Details()
        {
            var product = new Product
            {
                Id = 1,
                Name = "Laptop",
                Price = 1299.99m,
                Category = "Elektronik"
            };

            return View(product);
        }

        public IActionResult List()
        {
            var products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Price = 1299 },
            new Product { Id = 2, Name = "Maus", Price = 29 }
        };

            return View(products);
        }
    }
}
