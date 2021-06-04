﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServerGz.Data;

namespace ServerGz.Migrations
{
    [DbContext(typeof(GzDbContext))]
    [Migration("20210601160253_is")]
    partial class @is
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.6");

            modelBuilder.Entity("ServerGz.Models.Account", b =>
                {
                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.Property<string>("password")
                        .HasColumnType("TEXT");

                    b.HasKey("name");

                    b.ToTable("Account");
                });

            modelBuilder.Entity("ServerGz.Models.Bill", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("accountName")
                        .HasColumnType("TEXT");

                    b.Property<string>("address")
                        .HasColumnType("TEXT");

                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.Property<string>("phone")
                        .HasColumnType("TEXT");

                    b.Property<double>("totalPrice")
                        .HasColumnType("REAL");

                    b.HasKey("id");

                    b.HasIndex("accountName");

                    b.ToTable("Bill");
                });

            modelBuilder.Entity("ServerGz.Models.BillInfo", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("billId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("computerId")
                        .HasColumnType("INTEGER");

                    b.Property<double>("price")
                        .HasColumnType("REAL");

                    b.Property<int>("quanLiTy")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.HasIndex("billId");

                    b.HasIndex("computerId");

                    b.ToTable("BillInfo");
                });

            modelBuilder.Entity("ServerGz.Models.Computer", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("amount")
                        .HasColumnType("INTEGER");

                    b.Property<string>("image")
                        .HasColumnType("TEXT");

                    b.Property<string>("info")
                        .HasColumnType("TEXT");

                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.Property<double>("price")
                        .HasColumnType("REAL");

                    b.Property<double>("sizeDisk")
                        .HasColumnType("REAL");

                    b.Property<double>("sizePin")
                        .HasColumnType("REAL");

                    b.Property<double>("sizeRam")
                        .HasColumnType("REAL");

                    b.Property<double>("sizeScreen")
                        .HasColumnType("REAL");

                    b.Property<string>("typeCpu")
                        .HasColumnType("TEXT");

                    b.Property<string>("typeDisk")
                        .HasColumnType("TEXT");

                    b.Property<double>("weight")
                        .HasColumnType("REAL");

                    b.HasKey("id");

                    b.ToTable("Computer");
                });

            modelBuilder.Entity("ServerGz.Models.UserInfo", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("accountName")
                        .HasColumnType("TEXT");

                    b.Property<string>("address")
                        .HasColumnType("TEXT");

                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.Property<string>("phone")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.HasIndex("accountName")
                        .IsUnique();

                    b.ToTable("UserInfo");
                });

            modelBuilder.Entity("ServerGz.Models.Bill", b =>
                {
                    b.HasOne("ServerGz.Models.Account", "account")
                        .WithMany()
                        .HasForeignKey("accountName");

                    b.Navigation("account");
                });

            modelBuilder.Entity("ServerGz.Models.BillInfo", b =>
                {
                    b.HasOne("ServerGz.Models.Bill", "Bill")
                        .WithMany("billInfo")
                        .HasForeignKey("billId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ServerGz.Models.Computer", "Computer")
                        .WithMany()
                        .HasForeignKey("computerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Bill");

                    b.Navigation("Computer");
                });

            modelBuilder.Entity("ServerGz.Models.UserInfo", b =>
                {
                    b.HasOne("ServerGz.Models.Account", "account")
                        .WithOne("userInfo")
                        .HasForeignKey("ServerGz.Models.UserInfo", "accountName");

                    b.Navigation("account");
                });

            modelBuilder.Entity("ServerGz.Models.Account", b =>
                {
                    b.Navigation("userInfo");
                });

            modelBuilder.Entity("ServerGz.Models.Bill", b =>
                {
                    b.Navigation("billInfo");
                });
#pragma warning restore 612, 618
        }
    }
}
