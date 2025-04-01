import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
	selector: 'app-content',
	imports: [RouterModule],
	templateUrl: './content.component.html',
	styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
	constructor(private route: ActivatedRoute) {}

	@Input()
	photoCover: string = '';

	@Input()
	title: string = '';

	@Input()
	description: string = '';

	private id: string | null = '0';

	ngOnInit(): void {
		this.route.paramMap.subscribe((value) => {
			this.id = value.get('id');
		});

		this.setValuesToComponent(this.id);
	}

	setValuesToComponent(id: string | null) {
		const result = fakeData.filter((article) => article.id == this.id)[0];

		if (result) {
			this.title = result.title;
			this.description = result.description;
			this.photoCover = result.photoCover;
		}
	}
}
