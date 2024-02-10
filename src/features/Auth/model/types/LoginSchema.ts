export interface LoginSchema {
	username: Field;
	password: Field;
	isLoading: boolean;
}

interface Field {
	field: string;
	wrong: boolean;
	textWrong: ""
}

export interface LoginUserData {
	username: string;
	password: string;
}
