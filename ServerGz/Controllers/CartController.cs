using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Linq;
using ServerGz.Models;
using Newtonsoft.Json;
using ServerGz.Data;

namespace ServerGz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly GzDbContext _context;

        public CartController(GzDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Item> GetCard()
        {
            var itemList = new List<Item>();
            if (HttpContext.Session.GetString("Cart") != null)
            {
                string json = HttpContext.Session.GetString("Cart");
                itemList = JsonConvert.DeserializeObject<List<Item>>(json);
                return itemList;
            }
            return itemList;
        }

        [HttpGet("{idCom}")]
        public IActionResult AddToCard(int idCom)
        {
            var itemList = new List<Item>();
            var com = _context.Computer.Find(idCom);

            if (HttpContext.Session.GetString("Cart") != null)
            {
                string json = HttpContext.Session.GetString("Cart");
                itemList = JsonConvert.DeserializeObject<List<Item>>(json);
            }
            var index = itemList.FindIndex(i => i.computer.id == idCom);
            if (index >= 0)
            {
                itemList[index].quanLiTy++;
            }
            else
            {
                itemList.Add(new Item
                {
                    computer = com,
                    quanLiTy = 1
                });
            }
            HttpContext.Session.SetString("Cart", JsonConvert.SerializeObject(itemList));
            return NoContent();
        }

        [HttpPut("{idCom}")]
        public IActionResult ChangeCart(int idCom, bool plus, bool remove)
        {
            string json = HttpContext.Session.GetString("Cart");
            var itemList = JsonConvert.DeserializeObject<List<Item>>(json);
            if (remove == true)
            {
                var item = itemList.Single(i => i.computer.id == idCom);
                itemList.Remove(item);
                HttpContext.Session.SetString("Cart", JsonConvert.SerializeObject(itemList));
                return NoContent();
            }
            var index = itemList.FindIndex(i => i.computer.id == idCom);
            if (index >= 0)
            {
                if (plus)
                {
                    itemList[index].quanLiTy++;
                }
                else
                {
                    if (itemList[index].quanLiTy > 0)
                    {
                        itemList[index].quanLiTy--;
                    }
                }
            }
            HttpContext.Session.SetString("Cart", JsonConvert.SerializeObject(itemList));

            return NoContent();
        }


    }
}
