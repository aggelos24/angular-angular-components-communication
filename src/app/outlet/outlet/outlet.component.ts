import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-outlet',
	templateUrl: './outlet.component.html'
})
export class OutletComponent implements OnInit {
	constructor(private router: Router, private titleService: Title) {}
	
	@HostListener('document:keydown', ['$event'])							//when key is pressed
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.key == 'ArrowRight') {							//if right arrow is pressed
			this.nextPage();								//go to next page
		}
		else if (event.key == 'ArrowLeft') {							//if left arrow is pressed
			this.previousPage();								//go to previous page
		}
	}
	
	ngOnInit() {
		this.titleService.setTitle("Parent-Child Communication (router-outlet)");		//set document title
	}
	
	previousPage() {
		this.router.navigate(['/input-output']);						//navigate to
	}
	
	nextPage() {
		this.router.navigate(['/messenger']);							//navigate to
	}
}
