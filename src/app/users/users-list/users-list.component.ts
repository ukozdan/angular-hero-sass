import { Component, OnInit } from "@angular/core";
import { UserService } from "../../core/services/user.service";

@Component({
  selector: "app-users-list",
  // template: ``,
  templateUrl: "./users-list.component.html",
  // styles: [],
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  users;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
