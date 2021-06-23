import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { GetPokemonComponent } from './pages/get-pokemon/get-pokemon.component';
import { EditPokemonComponent } from './pages/edit-pokemon/edit-pokemon.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { CrearPokemonComponent } from './pages/crear-pokemon/crear-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PokemonsComponent,
    GetPokemonComponent,
    EditPokemonComponent,
    PageNotFoundComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumsComponent,
    CrearPokemonComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
