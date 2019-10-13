import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div class="sticky-top">
      <div class="shadow-sm">
        <nav class="navbar navbar-expand-lg navbar-dark bg-ca-black bg-dark">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              aria-controls="navbarContent"
              [attr.aria-expanded]="!collapsed"
              aria-label="Toggle navigation"
              (click)="collapsed = !collapsed"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="navbar-collapse"
              [class.collapse]="!collapsed"
              id="navbarContent"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" routerLink="">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="contact">Contact</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="users">Users</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="/dashboard">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="/heroes">Heroes</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
