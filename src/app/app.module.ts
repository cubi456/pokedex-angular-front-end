import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { GetPokemonComponent } from './pages/get-pokemon/get-pokemon.component';
import { EditPokemonComponent } from './pages/edit-pokemon/edit-pokemon.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PokemonsComponent,
    GetPokemonComponent,
    EditPokemonComponent,
    PageNotFoundComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
