import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        name: "Incident",
        itemCssClass: "",
        itemHeaderCssClass: "bg-ca-orange text-white",
        itemIconCssClass: "exclamation-circle",
        itemHeaderText: "Incident",
        itemBodyCssClass: "",
        itemBodyText: "Report a Security or suspicious Incident.",
        itemFooterCssClass: "",
        itemFooterText: "Go"
      },
      {
        id: 2,
        name: "Assistance",
        itemCssClass: "",
        itemHeaderCssClass: "",
        itemIconCssClass: "",
        itemHeaderText: "",
        itemBodyCssClass: "",
        itemBodyText: "",
        itemFooterCssClass: "",
        itemFooterText: ""
      },
      {
        id: 3,
        name: "Pen-Test",
        itemCssClass: "",
        itemHeaderCssClass: "",
        itemIconCssClass: "",
        itemHeaderText: "",
        itemBodyCssClass: "",
        itemBodyText: "",
        itemFooterCssClass: "",
        itemFooterText: ""
      },
      {
        id: 4,
        name: "Quick-Check",
        itemCssClass: "",
        itemHeaderCssClass: "",
        itemIconCssClass: "",
        itemHeaderText: "",
        itemBodyCssClass: "",
        itemBodyText: "",
        itemFooterCssClass: "",
        itemFooterText: ""
      }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
