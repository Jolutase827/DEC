const player = {
    name: "Manz",       // Nombre del jugador
    life: 4,            // Cantidad de vida actual
    totalLife: 6,       // Máximo de vida posible
    toString: function() {
      return `${this.name} (${this.life}/${this.totalLife})`;
    }
  };

  console.log('Mi jugador es'+player);