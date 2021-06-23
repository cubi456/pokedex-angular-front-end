import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';


@NgModule({
    declarations:[
        PageNotFoundComponent,
        SidebarComponent,
        HeaderComponent,
        BreadcrumsComponent
    ],
    exports:[
        PageNotFoundComponent,
        SidebarComponent,
        HeaderComponent,
        BreadcrumsComponent
    ]
})

export class SharedModule{}