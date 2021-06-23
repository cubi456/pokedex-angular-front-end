import { NgModule } from "@angular/core";
import { CrearPokemonComponent } from './crear-pokemon/crear-pokemon.component';
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { GetPokemonComponent } from "./get-pokemon/get-pokemon.component";
import { IndexComponent } from "./index/index.component";
import { PokemonsComponent } from "./pokemons/pokemons.component";
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations:[
        IndexComponent,
        PokemonsComponent,
        GetPokemonComponent,
        EditPokemonComponent,
        CrearPokemonComponent,
        PagesComponent
    ],
    exports:[
        IndexComponent,
        PokemonsComponent,
        GetPokemonComponent,
        EditPokemonComponent,
        CrearPokemonComponent,
        PagesComponent

    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule{}