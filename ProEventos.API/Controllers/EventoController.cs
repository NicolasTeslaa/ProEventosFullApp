using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    private readonly DataContext _context;
    public EventoController(DataContext context){
        _context = context;
    }
   
    private readonly DataContext context;

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _context.Eventos;
    }
    [HttpGet("{id}")]
    public Evento GetById(int id)
    {
        return _context.Eventos.FirstOrDefault(evento => evento.EventoId == id);
    }

    [HttpPost]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    public string Post()
    {
        return "Exemplo de Post";
    }
}
