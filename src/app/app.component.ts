import { Component } from "@angular/core";

@Component({
  selector: "app-root",

  template: `
    <!-- header -->
    <app-header></app-header>
    <main class="d-flex flex-fill pb-5 mb-5">
      <div class="container align-self-center">
        <div class="container">
          <!-- routes will be rendered here -->
          <router-outlet></router-outlet>
          <app-messages></app-messages>
        </div>
      </div>
    </main>
    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [],
  //templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Tour of Heroes";
  send_date = new Date();
  formattedDate: any;
  constructor() {
    this.send_date.setMonth(this.send_date.getMonth() + 8);
    this.formattedDate = this.send_date.toISOString().slice(0, 10);
    console.log(this.formattedDate);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
