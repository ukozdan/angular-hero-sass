import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  //template: ``,
  templateUrl: "./contact.component.html",
  // styles: [],
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${
      this.email
    }. My message is ${this.message}`;
    alert(allInfo);
  }
}
