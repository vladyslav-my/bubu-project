const express = require('express');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(jsonServer.defaults({}));
app.use(express.static(path.join(__dirname, 'public')));

// Database
const db = {
	users: [],
	products: [
		{
			feedbackId: 0,
			productsImageId: 0,
			productsDescId: 0,
			productsFeedbackId: 0,
			productsCharacterId: 0,
			productsColorId: 0,
			productsGenderId: 0,
			id: 0,
			title: "Коляска 2в1 Anex M/Type Dune mt-01Q",
			available: true,
			code: "EP-01",
			price: 5000,
			discountPrice: 6000,
			discountPercent: 15,
		}
	],
	productsGenders: [
		{
			id: 0,
			list: [
				{
					id: 0,
					gender: ["Хлопчик"]
				},
				{
					id: 1,
					gender: ["Дівчинка"]
				}
			]
		}
	],

	productsColors: [
		{
			id: 0,
			list: [
				{
					id: 1,
					color: "#34CBF"
				},
				{
					id: 2,
					color: "#FF3636"
				},
				{
					id: 3,
					color: "#4AFF3A"
				}
			]
		}
	],
	productsCharacters: [
		{
			id: 0,
			list: [
				{
					id: 0,
					name: "Виробник",
					character: "Anex",
				},
				{
					id: 1,
					name: "Країна",
					character: "Польща",
				},
				{
					id: 2,
					name: "Колір",
					character: "Сірий",
				},
				{
					id: 3,
					name: "Стать",
					character: "Хлопчик/дівчинка",
				},
				{
					id: 4,
					name: "Вага",
					character: "14 кг",
				},
				{
					id: 5,
					name: "Розмір (ДхШхВ)",
					character: "108.5х60х124.5 см",
				}
			],
		}
	],
	productsDescs: [
		{
			id: 0,
			list: [
				{
					id: 0,
					text: "Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт для дітей. Ця модель дозволяє однаково насолоджуватися прогулянками міськими вуличками і лісовими стежками.",
					src: "http://localhost:8000/images/discount.png",
					alt: "discount"
				},
				{
					id: 1,
					text: "Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт для дітей. Ця модель дозволяє однаково насолоджуватися прогулянками міськими вуличками і лісовими стежками.",
					src: "http://localhost:8000/images/discount.png",
					alt: "discount"
				},
			]
		}
	],
	productsFeedbacks: [
		{
			id: 0,
			list: [
				{
					id: 0,
					date: "20.09.22",
					name: "Олег 1",
					rating: 4,
					text: "Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной. Ещё  немаловажными плюсами являются маленькими габаритами в сложенном состоянии и легко снять весь текстиль для стирки. Из минусов только то что в комплектации нет маскитки, дождивика и чехла на ножки.",
					images: [
						{
							id: 0,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 1,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 2,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 3,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 4,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						}
					]
				},
				{
					id: 1,
					date: "20.09.22",
					name: "Олег 2",
					rating: 5,
					text: "Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной. Ещё  немаловажными плюсами являются маленькими габаритами в сложенном состоянии и легко снять весь текстиль для стирки. Из минусов только то что в комплектации нет маскитки, дождивика и чехла на ножки.",
					images: [
						{
							id: 0,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 1,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 2,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 3,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 4,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						}
					]
				},
				{
					id: 2,
					date: "20.09.22",
					name: "Олег 3",
					rating: 3,
					text: "Оказалась, очень удобной для малыша со скрытым копюшоном батискафом, для родителей лёгкой и маневренной. Ещё  немаловажными плюсами являются маленькими габаритами в сложенном состоянии и легко снять весь текстиль для стирки. Из минусов только то что в комплектации нет маскитки, дождивика и чехла на ножки.",
					images: [
						{
							id: 0,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 1,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 2,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 3,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						},
						{
							id: 4,
							src: "http://localhost:8000/images/discount.png",
							alt: "discount",
						}
					]
				},
			]
		}
	],
	productsImages: [
		{
			id: 0,
			list: [
				{
					id: 0,
					src: "http://localhost:8000/images/discount.png",
					alt: "discount"
				},
				{
					id: 1,
					src: "http://localhost:8000/images/discount.png",
					alt: "discount"
				},
				{
					id: 2,
					src: "http://localhost:8000/images/discount.png",
					alt: "discount"
				},
				{
					id: 3,
					src: "http://localhost:8000/images/discount.png",
					alt: "discount"
				},
				{
					id: 4,
					src: "http://localhost:8000/images/discount.png",
					alt: "discount"
				}
			],
		}
	]
};

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
	// if (req.headers.authorization) {
	// 	// Here you can implement logic to verify the token or credentials
	// 	return next();
	// } else {
	// 	return res.status(401).json({ error: 'Unauthorized' });
	// }
	return next()
};

// Registration route
app.post('/register', async (req, res) => {
	try {
		const { name, phone, email, password } = req.body;

		// Check if username already exists
		if (db.users.find((user) => user.phone === phone)) {
			return res.status(400).json({ error: 'Phone already exists' });
		}

		if (db.users.find((user) => user.email === email)) {
			return res.status(400).json({ error: 'Email already exists' });
		}


		const user = { id: Date.now(), name, phone, email, password };
		db.users.push(user);

		// Write updated data back to JSON file
		fs.writeFileSync('db.json', JSON.stringify(db), 'utf-8');

		return res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

// Login route
app.post('/login', async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = db.users.find((user) => user.email === username || user.phone === username && user.password === password);

		if (!user) {
			return res.status(401).json({ error: 'Invalid credentials' });
		}

		return res.json({ username, password });

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

// Use json-server for other routes
app.use('/api', isAuthenticated, jsonServer.router(db));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
