import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
  <footer class="fixed-bottom pt-3 bg-white shadow-sm">
		<div class="container">
			<p>Cambridge Assessment &copy; <span class="currentYear">{{currentYear}}</span></p>
		</div>
	</footer>
  <!--<a href="https://twitter.com/chrisoncode">Chris from Scotch</a>-->
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
