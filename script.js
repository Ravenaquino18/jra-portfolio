const roles = [
"Web Developer",
"Full Stack Developer",
"AI Enthusiast",
"Problem Solver",
"Sofware Developer"
];

let role = 0;
let char = 0;

function type(){

const element = document.getElementById("typing");

element.textContent =
roles[role].substring(0,char);

char++;

if(char > roles[role].length){
role++;
char = 0;

if(role >= roles.length){
role = 0;
}
}

setTimeout(type,120);
}

type();