import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/scripts/skill';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../../scripts/pokemon';
import { Evolution } from '../../scripts/evolution';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon:Pokemon = new Pokemon("","",null,null,null);

   fieldSkills: Skill[] = [];
   skill: Skill = new Skill("","");

   fieldEvolitons: Evolution[] = [];
   evolution: Evolution = new Evolution("","",null);

   formulario:FormGroup = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      tipos: new FormControl('',[Validators.required,Validators.minLength(3)]),
      nivel: new FormControl('',[Validators.required,Validators.minLength(1)])
   });

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
      {
        this.pokemon = salida;
        this.formulario.controls['nombre'].setValue(this.pokemon.name);
        this.formulario.controls['tipos'].setValue(this.pokemon.name);
        this.formulario.controls['nivel'].setValue(this.pokemon.name);
        this.fieldSkills = this.pokemon.skills;
        this.fieldEvolitons =this.pokemon.evolutions;
      }
  }

  addSkill(){
    this.fieldSkills.push(this.skill)
    this.skill = new Skill("","");
  }

  deleteSkill(index) {
    this.fieldSkills.splice(index, 1);
  }

  addEvolution(){
    this.fieldEvolitons.push(this.evolution)
    this.evolution = new Evolution("","",null);
  }

  deleteEvolution(index) {
    this.fieldEvolitons.splice(index, 1);
  }
  
  updatePokemon()
  {
    alert("llegue");
    if(this.formulario.valid)
    {
      this.pokemon.name  =this.formulario.value.nombre;
      this.pokemon.types =this.formulario.value.tipos;
      this.pokemon.level =this.formulario.value.nivel;
      
      this.pokemon.skills    = this.fieldSkills;
      this.pokemon.evolutions= this.fieldEvolitons;

      this._pokemonService.updatePokemon(this.pokemon);
      alert("Se agrego el pokemon con exito");
      this.pokemon = new Pokemon("","",null,null,null);
    }
    else
    {
      alert("Ocurrio un error al ingresar los datos.");
    }
  }
}
