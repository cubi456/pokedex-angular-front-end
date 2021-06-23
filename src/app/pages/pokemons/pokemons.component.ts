import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../scripts/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styles: [
  ]
})
export class PokemonsComponent implements OnInit {
    
  pokemons:Pokemon[];

  constructor(public _pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.actualizarPokemons();
  }

   /**
   * Solicita la lista de pokemons al servicio Pokemon
   * y los almacena dentro del array pokemons.
   */
    async actualizarPokemons()
    {
        this.pokemons = await this._pokemonService.recuperarPokemons();
    }


    async deletePokemon(name:string)
    {
       if(window.confirm("Desea eliminar el pokemon: "+name))
          await this._pokemonService.eliminarPokemon(name);
       window.location.reload();
    }

}
