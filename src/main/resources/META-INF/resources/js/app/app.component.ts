import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: "app.component.html",
	styles: [
	    `
            .example-form {
                min-width: 150px;
                max-width: 500px;
                width: 100%;
            }

            .example-full-width {
                width: 100%;
            }
        `
    ]
})
export class AppComponent implements OnInit {
	food: String;

	ngOnInit(){
		this.food = "Sushi";
	}

	load() {
		this.food="Asado";
	}
}