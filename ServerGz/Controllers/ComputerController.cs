using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerGz.Data;
using ServerGz.Models;
using Microsoft.AspNetCore.Authorization;

namespace GzWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComputerController : ControllerBase
    {
        private readonly GzDbContext _context;

        public ComputerController(GzDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Computer> GetComputer()
        {
            return _context.Computer;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Computer>> GetComputer(int id)
        {
            var computer = await _context.Computer.FindAsync(id);

            if (computer == null)
            {
                return NotFound();
            }

            return computer;
        }

        [HttpPut("{id}")]
        [Authorize(Roles="admin")]
        public async Task<IActionResult> PutComputer(int id, Computer computer)
        {
            if (id != computer.id)
            {
                return BadRequest();
            }

            _context.Entry(computer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComputerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        [Authorize(Roles="admin")]
        public async Task<ActionResult<Computer>> PostComputer(Computer computer)
        {
            _context.Computer.Add(computer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComputer", new { id = computer.id }, computer);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles="admin")]
        public async Task<IActionResult> DeleteComputer(int id)
        {
            var computer = await _context.Computer.FindAsync(id);
            if (computer == null)
            {
                return NotFound();
            }

            _context.Computer.Remove(computer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComputerExists(int id)
        {
            return _context.Computer.Any(e => e.id == id);
        }
    }
}
