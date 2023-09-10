const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];


class User {
	constructor(userObj){
		Object.assign(this, userObj)
	}

	render(){
		return `
		<div class="user">
		<div class="user__info">
		<div class="user__info--data">
			<img src="${this.getImgUrl}" alt="${this.age}" height="50">
			<div class="user__naming">
				<p>Name: <b>${this.name}</b></p>
				<p>Age: <b>${this.age} </b></p>
			</div>
		</div>
		<div class="user__info--role ${this.role}">
			<img src="${this.getRoleUrl}" alt="${this.role}" height="25">
			<p>${this.role}</p>
		</div>
	</div>
	${this.renderCourses()}
	</div>`
	}

	get getImgUrl(){
		return `./images/users/${this.img}.png`
	}

	get getRoleUrl(){
		return `./images/roles/${this.role}.png`
	}

	getMark(score){
		if(score <= 20) {
			return gradation[20];
		}

		if(score <= 55) {
			return gradation[55];
		}

		if(score <= 85) {
			return gradation[85];
		}

		if(score <= 100) {
			return gradation[100];
		}
	}

	getMarkSpan(score) {
		const mark = this.getMark(score);
		
		return `<span class="${mark}">${mark}</span>`;
	}
}

class Student extends User {
	constructor(obj){
		super(obj)
	}

	renderCourses(){
		if(this.courses) {
			const str = this.courses.map(item => {
				return `
				<p class="user__courses--course student"> ${item.title} 
				${this.getMarkSpan(item.mark)}
				</p>`
			})
			.join(``);

			return `<div class="user__courses">${str}</div>`
		}
		return ``
	}
}

class Lector extends User {
	constructor(obj){
		super(obj)
	}

	renderCourses(){
		if(this.courses) {
			const str =  this.courses.map(item => {
				return `
				<div class="user__courses--course lector">
					<p>Title: <b>${item.title}</b></p>
					<p>Lector's score: ${this.getMarkSpan(item.score)}</p>
					<p>Average student's score: ${this.getMarkSpan(item.studentsScore)}</p>
				</div>`
			})
			.join(``);

			return `<div class="user__courses admin--info">${str}</div>`
		}

		return ``
	}

}

class Admin extends User {
	constructor(obj){
		super(obj)
	}

	renderCourses(){
		if(this.courses) {
			const str = this.courses.map(item => {
				return `
				<div class="user__courses--course admin">
					<p>Title: <b>${item.title}</b></p>
					<p>Admin's score: ${this.getMarkSpan(item.score)}</p>
					<p>Lector: <b>${item.lector}</b></p>
				</div>`
			})
			.join(``)

			return `<div class="user__courses admin--info">${str}</div>`
		}

		return ``
	}

}

const userList = users.map(obj => {
	if(obj.role === "student"){
		return new Student(obj)
	} else if(obj.role === "lector"){
		return new Lector(obj)
	} else if(obj.role === "admin"){
		return new Admin(obj)
	}
});


document.write('<div class="users">')

userList.forEach(obj => {
	document.write(obj.render())
})

document.write('</div>')


