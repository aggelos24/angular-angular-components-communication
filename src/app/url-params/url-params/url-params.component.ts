import { Component, OnInit, HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-url-params',
	templateUrl: './url-params.component.html'
})
export class UrlParamsComponent implements OnInit {
	constructor(private router: Router, private titleService: Title) {}

	@HostListener('document:keydown', ['$event'])				//when key is pressed
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.key == 'ArrowRight') {				//if right arrow is pressed
			this.nextPage();					//go to next page
		}
		else if (event.key == 'ArrowLeft') {				//if left arrow is pressed
			this.previousPage();					//go to previous page
		}
	}
	
	ngOnInit() {
		this.titleService.setTitle("URL Parameters");			//set document title
	}
	
	previousPage() {
		this.router.navigate(['/web-storage']);				//navigate to
	}

	nextPage() {
		this.router.navigate(['/input-output']);			//navigate to
	}
}
