import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-introduction',
	templateUrl: './introduction.component.html'
})
export class IntroductionComponent implements OnInit {
	constructor(private router: Router, private titleService: Title) {}
	
	@HostListener('document:keydown', ['$event'])						//when key is pressed
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.key == 'ArrowRight') {						//if right arrow is pressed
			this.nextPage();							//go to next page
		}
	}
	
	ngOnInit() {
		this.titleService.setTitle("Communication between Components");			//set document title
	}

	nextPage() {
		this.router.navigate(['/sharing-variables']);					//navigate to
	}
}
