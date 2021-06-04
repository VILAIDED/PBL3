using Microsoft.EntityFrameworkCore.Migrations;

namespace ServerGz.Migrations
{
    public partial class iii : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bill_Account_accountname",
                table: "Bill");

            migrationBuilder.DropColumn(
                name: "accountId",
                table: "Bill");

            migrationBuilder.RenameColumn(
                name: "accountname",
                table: "Bill",
                newName: "accountName");

            migrationBuilder.RenameIndex(
                name: "IX_Bill_accountname",
                table: "Bill",
                newName: "IX_Bill_accountName");

            migrationBuilder.AddForeignKey(
                name: "FK_Bill_Account_accountName",
                table: "Bill",
                column: "accountName",
                principalTable: "Account",
                principalColumn: "name",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bill_Account_accountName",
                table: "Bill");

            migrationBuilder.RenameColumn(
                name: "accountName",
                table: "Bill",
                newName: "accountname");

            migrationBuilder.RenameIndex(
                name: "IX_Bill_accountName",
                table: "Bill",
                newName: "IX_Bill_accountname");

            migrationBuilder.AddColumn<int>(
                name: "accountId",
                table: "Bill",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Bill_Account_accountname",
                table: "Bill",
                column: "accountname",
                principalTable: "Account",
                principalColumn: "name",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
