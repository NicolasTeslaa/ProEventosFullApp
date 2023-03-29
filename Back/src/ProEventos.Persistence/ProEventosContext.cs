using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;

namespace ProEventos.Persistence
{
    public class ProEventosContext : DbContext
    {

        public ProEventosContext(DbContextOptions<ProEventosContext> options) : base(options)
        {
         
        }

        public DbSet<Evento> Eventos { get; set; }
        public DbSet<Lote>Lote { get; set; }
        public DbSet<Palestrante>Palestrante { get; set; }
        public DbSet<PalestranteEvento>PalestranteEvento { get; set; }
        public DbSet<RedeSocial>RedesSocial { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<PalestranteEvento>()
            .HasKey(PE => new { PE.EventoId, PE.PalestranteId });
        }
    }
}