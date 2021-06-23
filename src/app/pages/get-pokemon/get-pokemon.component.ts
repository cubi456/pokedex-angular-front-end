import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../scripts/pokemon';

@Component({
  selector: 'app-get-pokemon',
  templateUrl: './get-pokemon.component.html',
  styles: [
  ]
})
export class GetPokemonComponent implements OnInit {

  pokemon:Pokemon = new Pokemon("","",null,null,null);

  constructor(public _pokemonService:PokemonService) { }

  ngOnInit(): void {
  }

  async buscar(name:string){
    let salida = await this._pokemonService.recuperarPokemon(name);
    if(salida==null)
      {
        alert("No se encontro el pokemon ingresado en la base de datos");
        this.pokemon = new Pokemon("","",null,null,null);
      }
    else
      this.pokemon = salida;
  }
}
