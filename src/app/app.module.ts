import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {AppComponent} from "./app.component";
import {NavigatorComponent} from "./navigator/navigator.component";
import {MapComponent} from "./map/map.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";

import {MapService} from "./map.service";
import {GeocodingService} from "./geocoding.service";

import {HeaderComponent} from "./header/header.component";

import "leaflet";
import "leaflet.vectorgrid";
import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AutoCompleteModule, CalendarModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ResponseJsoService} from "./response-jso.service";

@NgModule({
  declarations: [
    NavigatorComponent,
    MapComponent,
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AutoCompleteModule,
    ButtonModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    CalendarModule
  ],
  providers: [MapService, GeocodingService, ResponseJsoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
