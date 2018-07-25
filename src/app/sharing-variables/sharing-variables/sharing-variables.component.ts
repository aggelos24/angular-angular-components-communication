import { Component, OnInit, HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-sharing-variables',
	templateUrl: './sharing-variables.component.html'
})
export class SharingVariablesComponent implements OnInit {
	constructor(private router: Router, private titleService: Title) {}
	
	@HostListener('document:keydown', ['$event'])						//when key is pressed
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.key == 'ArrowRight') {						//if right arrow is pressed
			this.nextPage();							//go to next page
		}
		else if (event.key == 'ArrowLeft') {						//if left arrow is pressed
			this.previousPage();							//go to previous page
		}
	}
	
	ngOnInit() {
		this.titleService.setTitle("Sharing Variables via Service");			//set document title
	}
	
	previousPage() {
		this.router.navigate(['/introduction']);					//navigate to
	}

	nextPage() {
		this.router.navigate(['/web-storage']);						//navigate to
	}
}
