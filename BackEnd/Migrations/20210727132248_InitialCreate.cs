using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductsModel",
                columns: table => new
                {
                    productId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    productUnits = table.Column<int>(nullable: false),
                    productName = table.Column<string>(nullable: true),
                    productCategory = table.Column<string>(nullable: true),
                    productPrice = table.Column<int>(nullable: false),
                    productHasVariants = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductsModel", x => x.productId);
                });

            migrationBuilder.CreateTable(
                name: "ProductAttributes",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    attribute = table.Column<string>(nullable: true),
                    ProductsModelproductId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductAttributes", x => x.id);
                    table.ForeignKey(
                        name: "FK_ProductAttributes_ProductsModel_ProductsModelproductId",
                        column: x => x.ProductsModelproductId,
                        principalTable: "ProductsModel",
                        principalColumn: "productId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProductsVariantsModel",
                columns: table => new
                {
                    productVariantId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ProductVariantColor = table.Column<string>(nullable: true),
                    ProductVariantPrice = table.Column<int>(nullable: false),
                    ProductVariantUnits = table.Column<int>(nullable: false),
                    ProductsModelproductId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductsVariantsModel", x => x.productVariantId);
                    table.ForeignKey(
                        name: "FK_ProductsVariantsModel_ProductsModel_ProductsModelproductId",
                        column: x => x.ProductsModelproductId,
                        principalTable: "ProductsModel",
                        principalColumn: "productId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductAttributes_ProductsModelproductId",
                table: "ProductAttributes",
                column: "ProductsModelproductId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductsVariantsModel_ProductsModelproductId",
                table: "ProductsVariantsModel",
                column: "ProductsModelproductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductAttributes");

            migrationBuilder.DropTable(
                name: "ProductsVariantsModel");

            migrationBuilder.DropTable(
                name: "ProductsModel");
        }
    }
}
