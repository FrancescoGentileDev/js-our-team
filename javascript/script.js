// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// 'Angela Caroll',	'Chief Editor',	'angela-caroll-chief-editor.jpg'
// 'Walter Gordon',	'Office Manager',	'walter-gordon-office-manager.jpg'
// 'Angela Lopez'	'Social Media Manager'	'angela-lopez-social-media-manager.jpg'
// 'Scott Estrada'	'Developer'	'scott-estrada-developer.jpg'
// 'Barbara Ramos'	'Graphic Designer'	'barbara-ramos-graphic-designer.jpg'


//AVEVO VOGLIA DI SPERIMENTARE CON LE CLASSI NON VOLETEMENE ❤
class Member {
  constructor(fullname, position, image) {
    this.fullname = fullname;
    this.position = position;
    this.image = "img/" + image;
    }
    get name() {
       return this.fullname.split(" ")[0]
    }
    get lastName() {
        return fullname.split(" ")[1]
    }
}

const team = [];


//RIEMPIO IL TEAM
team.push(new Member("Wayne Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg"));
team.push(new Member("Angela Caroll", "Chief Editor", "angela-caroll-chief-editor.jpg"));
team.push(new Member("Walter Gordon", "Office Manager", "walter-gordon-office-manager.jpg"));
team.push(new Member("Angela Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg"));
team.push(new Member("Scott Estrada", "Developer", "scott-estrada-developer.jpg"));
team.push(new Member("Barbara Ramos", "Graphic Designer", "barbara-ramos-graphic-designer.jpg"));

//MILESTONE 1
// console.log(team)
// const listElement = document.querySelector('.about-us > ul');
// for (element of team) {
//     const listItem = document.createElement("li");
//     listItem.append(`${element.fullname}, ${element.position}, ${element.image}`)
//     listElement.append(listItem)
// }
//MILESTONE 2
console.log(team)
const listElement = document.querySelector('.about-us > ul');
for (element of team) {
    const listItem = document.createElement("li");
    listItem.innerHTML = 
        `
        <img src="${element.image}" alt="">
                <p class="name">${element.fullname}</p>
                <p class="position">${element.position}</p>
        `
    listElement.append(listItem)
}