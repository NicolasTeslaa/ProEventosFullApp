using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    public IEnumerable<Evento> _evento = new Evento[]
        {
            new Evento( ){
                EventoId = 1,
                Tema = "Angular 15 e .NET 7",
                Local = "São Paulo",
                Lote = "1º Lote",
                QtdPessoas = 100,
                DataEvento = DateTime.Now.AddDays(2).ToString()
            },
                  new Evento( ){
                EventoId = 2,
                Tema = "Angular 14 e .NET ",
                Local = "São Paulo",
                Lote = "2º Lote",
                QtdPessoas = 250,
                DataEvento = DateTime.Now.AddDays(2).ToString(),
                ImagemURL = "foto.png"
            },
        };
    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _evento;
    }
    [HttpGet("{id}")]
    public IEnumerable<Evento> GetById(int id)
    {
        return _evento.Where(evento => evento.EventoId == id);
    }

    [HttpPost]
    public string Post()
    {
        return "Exemplo de Post";
    }
}
