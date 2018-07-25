import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-conclusion',
	templateUrl: './conclusion.component.html'
})
export class ConclusionComponent implements OnInit {
	constructor(private router: Router, private titleService: Title) {}
	
	@HostListener('document:keydown', ['$event'])						//when key is pressed
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.key == 'ArrowLeft') {							//if left arrow is pressed
			this.previousPage();							//go to previous page
		}
	}
	
	ngOnInit() {
		this.titleService.setTitle("Communication between Components");			//set document title
	}
	
	previousPage() {
		this.router.navigate(['/messenger']);						//navigate to
	}
}
