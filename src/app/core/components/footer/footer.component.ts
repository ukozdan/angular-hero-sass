import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  // template: ``,
  templateUrl: "./footer.component.html",
  // styles: [],
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  send_date = new Date();
  formattedDate: any;
  constructor() {
    this.formattedDate = this.send_date.getFullYear();
  }
  ngOnInit() {}
}
