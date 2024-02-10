export interface RegisterSchema {
	name: Field;
	phone: Field;
	email: Field;
	password: Field;
	isLoading: boolean;
}

interface Field {
	field: string;
	wrong: boolean;
	textWrong: ""
}

export interface RegisterUserData {
	name: string;
	phone: string;
	email: string;
	password: string;
}
