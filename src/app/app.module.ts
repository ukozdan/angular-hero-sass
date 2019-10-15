import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { MessagesComponent } from "./messages/messages.component";

import { CoreModule } from "./core/core.module";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Font Awesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSquare,
  faCheckSquare,
  faChevronDown,
  faEnvelope,
  faPhoneAlt,
  faAddressCard,
  faSignOutAlt,
  faExclamationCircle,
  faUsers,
  faUserSecret,
  faLaptopCode,
  faHome,
  faCoffee,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
  faAddressCard as farAddressCard,
} from "@fortawesome/free-regular-svg-icons";
import {
  faStackOverflow,
  faGithub,
  faMedium
} from "@fortawesome/free-brands-svg-icons";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CoreModule,
    FontAwesomeModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HomeComponent,
    ContactComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faEnvelope,
      faPhoneAlt,
      faAddressCard,
      faSignOutAlt,
      faExclamationCircle,
      faUsers,
      faUserSecret,
      faLaptopCode,
      farCheckSquare,
      faChevronDown,
      faStackOverflow,
      faGithub,
      faMedium,
      faChevronDown,
      faChevronDown,
      faHome,
      faCoffee,
      faEye,
      farAddressCard
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
