import { Component, OnInit, HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-input-output',
	templateUrl: './input-output.component.html'
})
export class InputOutputComponent implements OnInit {
	constructor(private router: Router, private titleService: Title) {}
	
	@HostListener('document:keydown', ['$event'])						//when key is pressed
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.key == 'ArrowRight') {						//if right arrow is pressed
			this.nextPage();							//go to next page
		}
		else if (event.key == 'ArrowLeft') {						//if left arrow is pressed
			this.previousPage();													//go to previous page
		}
	}
	
	ngOnInit() {
		this.titleService.setTitle("Parent-Child Communication (selector)");		//set document title
	}
	
	previousPage() {
		this.router.navigate(['/url-params']);						//navigate to
	}
	
	nextPage() {
		this.router.navigate(['/outlet']);						//navigate to
	}
}
