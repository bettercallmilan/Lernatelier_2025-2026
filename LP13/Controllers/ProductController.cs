using LP13.Models;
using Microsoft.AspNetCore.Mvc;
using System;

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

        private readonly AppDbContext _context;

        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var products = _context.Products.ToList();
            return View(products);
        }

        [HttpPost]
        public IActionResult Create(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        public IActionResult Delete(int id)
        {
            var product = _context.Products.Find(id);
            _context.Products.Remove(product);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
