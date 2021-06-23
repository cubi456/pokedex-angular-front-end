import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { GetPokemonComponent } from './pages/get-pokemon/get-pokemon.component';
import { IndexComponent } from './pages/index/index.component';
import { EditPokemonComponent } from './pages/edit-pokemon/edit-pokemon.component';
import { CrearPokemonComponent } from './pages/crear-pokemon/crear-pokemon.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [
    {path: '**', component:PageNotFoundComponent}
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true})