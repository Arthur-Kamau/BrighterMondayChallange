using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using MySql.Data.EntityFrameworkCore.Extensions;
using BackEnd.Models;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using System;

namespace BackEnd
{
    public class ApplicationDbContext : DbContext
    {
        public virtual DbSet<ProductCategories> db_categories { get; set; }

        public virtual DbSet<ProductsModel> db_products { get; set; }
        public virtual DbSet<ProductsVariantsModel> db_products_variants { get; set; }
       
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
            .UseMySql("server=127.0.0.1;port=3306;user=kamau;password=kamau09;database=brightormonday")
            .UseLoggerFactory(
                LoggerFactory.Create(b => b.AddConsole().AddFilter(level => level >= LogLevel.Information)

            )).EnableSensitiveDataLogging()
            .EnableDetailedErrors();
        }
    }

}