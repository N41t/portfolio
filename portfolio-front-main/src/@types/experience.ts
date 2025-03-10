export interface Experience {
	id: number;
	position: string;
	short_description: string;
	date_from: string;
	date_to: string;
	company_name: string;
	technologies: {
		id: number;
		title: string;
		icon: string;
	}[];
}
