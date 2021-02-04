using AplicacionPrueba.Entidades;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacionPrueba.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly SqlConnection Con;
        public ProductoController() 
        {
            Con = new SqlConnection(Cnx.sqlcon);
        }

        /// <summary>
        /// este servicio traera todos los productos
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<List<Producto>>> Get()
        {
            var sql = $"select * from Producto"; /* No es recomendable usar * pero como solo hay pocos campos no hay problema*/
            var resul = Con.Query<Producto>(sql);
            return Ok(resul);
        }


        /// <summary>
        /// este servicio traera solo un producto
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> Get(int id)
        {
            var sql = $"select * from Producto where Id = {id}"; /* No es recomendable usar * pero como solo hay pocos campos no hay problema*/
            var resul = Con.Query<Producto>(sql);
            return Ok(resul.FirstOrDefault());
        }

        /// <summary>
        /// este servicio guardara un producto
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult> Post(Producto producto)
        {
            var sql = $"insert Producto values(@Nombre,@Precio, @Stock, GETDATE())";
            var resul = Con.Execute(sql, producto);
            
            return Ok();
        }

        /// <summary>
        /// este servicio actualizara un producto
        /// </summary>
        /// <returns></returns>
        [HttpPut]
        public async Task<ActionResult> Put(Producto producto)
        {
            var sql = $"Update Producto set Nombre = @Nombre, Precio = @Precio, Stock =  @Stock where Id = @Id";
            var resul = Con.Execute(sql, producto);

            if (resul == 0)
                return NotFound();

            return Ok();
        }

        /// <summary>
        /// este servicio eliminara un producto
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var sql = $"delete from Producto where Id = @Id";
            var resul = Con.Execute(sql, new { Id = id });
            f(resul == 0)
                return NotFound();

            return Ok();
        }


    }
}
