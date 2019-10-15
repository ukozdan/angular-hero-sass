import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div class="sticky-top">
      <div class="shadow-sm">
        <nav
          class="quick-nav navbar navbar-expand-lg navbar-dark bg-ca-black bg-dark"
        >
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Contact us</a
                  >
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="tel:+441223553543"
                      ><i class="fas fa-phone-alt"></i>
                      <span>+441223553543</span></a
                    >
                    <a
                      class="dropdown-item"
                      href="mailto:groupsecurity@cambridgeassessment.org.uk"
                      ><i class="fas fa-envelope"></i>
                      <span>groupsecurity@cambridgeassessment.org.uk</span></a
                    >
                  </div>
                </li>
              </ul>
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-user"></i> <span>Daniel Sanders</span>
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="/logout.php"
                      ><i class="far fa-address-card"></i>
                      <span>Profile</span></a
                    >
                    <a class="dropdown-item" href="/logout.php"
                      ><i class="fas fa-sign-out-alt"></i>
                      <span>Log out</span></a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

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

        <header class="branding pt-4 bg-white">
          <div class="container">
            <div class="row">
              <div class="col-6 d-flex align-self-center">
                <p class="h1 font-rubik m-0">
                  <span class="fa-stack h4 d-inline-flex align-items-center">
                    <i class="fas fa-coffee fa-stack-2x"></i>
                    <i
                      class="far fa-eye fa-stack-1x fa-inverse"
                      style="margin-top:-.65rem;margin-left:-0.15rem;"
                    ></i>
                  </span>
                  Security
                </p>
              </div>
              <div class="col-6 d-flex justify-content-end align-self-center">
                <div class="d-flex align-items-center justify-content-end">
                  <img src="./assets/img/cambridge-assessment-logo.svg" class="main-logo img-fluid" width="220" height="60">
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav
          class="main-nav navbar navbar-expand-lg navbar-light pb-lg-0 bg-white"
        >
          <div class="container">
            <!--<a class="navbar-brand" href="#">Navbar</a>-->
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown2"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown2">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link pb-2 font-weight-bold" href="#"
                    >Home <span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="nav-item dropdown megamenu position-static">
                  <a
                    id="megamenu1"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="nav-link dropdown-toggle pb-2 font-weight-bold"
                    >Incident</a
                  >
                  <div
                    aria-labelledby="megamenu1"
                    class="dropdown-menu w-100 bg-transparent border-0 p-0 m-0"
                  >
                    <div class="container">
                      <div class="card border-0 shadow">
                        <div class="card-header border-bottom-0">
                          <h5 class="font-weight-bold">Incident</h5>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-lg-6 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-6 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown megamenu position-static">
                  <a
                    id="megamenu2"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="nav-link dropdown-toggle pb-2 font-weight-bold"
                    >Assistance</a
                  >
                  <div
                    aria-labelledby="megamenu2"
                    class="dropdown-menu w-100 bg-transparent border-0 p-0 m-0"
                  >
                    <div class="container">
                      <div class="card border-0 shadow">
                        <div class="card-header border-bottom-0">
                          <h5 class="font-weight-bold">Assistance</h5>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-lg-3 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown megamenu position-static">
                  <a
                    id="megamenu3"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="nav-link dropdown-toggle pb-2 font-weight-bold"
                    >Pen-Test</a
                  >
                  <div
                    aria-labelledby="megamenu3"
                    class="dropdown-menu w-100 bg-transparent border-0 p-0 m-0"
                  >
                    <div class="container">
                      <div class="card border-0 shadow">
                        <div class="card-header border-bottom-0">
                          <h5 class="font-weight-bold">Pen-Test</h5>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-lg-6 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-6 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown megamenu position-static">
                  <a
                    id="megamenu4"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="nav-link dropdown-toggle pb-2 font-weight-bold"
                    >Quick-Check</a
                  >
                  <div
                    aria-labelledby="megamenu4"
                    class="dropdown-menu w-100 bg-transparent border-0 p-0 m-0"
                  >
                    <div class="container">
                      <div class="card border-0 shadow">
                        <div class="card-header border-bottom-0">
                          <h5 class="font-weight-bold">Quick-Check</h5>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-lg-3 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 mb-4">
                              <ul class="list-unstyled">
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="" class="nav-link text-small pb-0"
                                    >Nav link text</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <nav aria-label="breadcrumb">
        <div class="container">
          <ol class="breadcrumb small bg-transparent px-2 mb-0">
            <li class="breadcrumb-item active" aria-current="page">
              <i class="fas fa-home"></i> Home
            </li>
          </ol>
        </div>
      </nav>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
