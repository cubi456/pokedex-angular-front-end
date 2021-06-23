import { Routes, RouterModule } from '@angular/router';
import { CrearPokemonComponent } from './crear-pokemon/crear-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { GetPokemonComponent } from './get-pokemon/get-pokemon.component';
import { IndexComponent } from './index/index.component';
import { PagesComponent } from './pages.component';
import { PokemonsComponent } from './pokemons/pokemons.component';


const pagesRoutes: Routes = [
    {path: '' ,
    component: PagesComponent,
    children:[
                {path: 'index' ,component: IndexComponent},
                {path: 'pokemons',component:PokemonsComponent},
                {path: 'getPokemon', component:GetPokemonComponent},
                {path: 'addPokemon', component:CrearPokemonComponent},
                {path: 'editPokemon', component:EditPokemonComponent},
                { path: '', redirectTo: '/index', pathMatch: 'full' }
               ]}
]

export const PAGES_ROUTES = RouterModule.forRoot(pagesRoutes,{useHash:true})