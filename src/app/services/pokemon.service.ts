import { Injectable } from '@angular/core';
import { Pokemon } from '../scripts/pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private _url:string = "http://localhost:8080/api/"
  
  constructor(private http:HttpClient) { }

   /**
   * Este metodo recupera el pokemon recibido
   * por parametro del servidor.
   * Retorna una promesa.
   */
    async recuperarPokemon(name:string):Promise<Pokemon>
    {     
      return await this.http.get<Pokemon>(this._url+"getPokemon/"+name).toPromise();
    }
    
  /**
   * Este metodo recupera todos los pokemon
   * almacenados en la base de datos.
   * Retorna una promesa.
   */
     async recuperarPokemons():Promise<Pokemon[]>
     {     
       return await this.http.get<Pokemon[]>(this._url+"pokemons").toPromise();
     }

   /**
   * Este metodo recupera todos los pokemon
   * almacenados en la base de datos.
   * Retorna una promesa.
   */
  async eliminarPokemon(name:string):Promise<Pokemon>
  {     
     return await this.http.get<Pokemon>(this._url+"deletePokemon/"+name).toPromise();
  }

  async updatePokemon(pokemon:Pokemon):Promise<Pokemon>
  {
    return await this.http.post<Pokemon>(this._url+"updatePokemon",pokemon).toPromise();
  }

}
