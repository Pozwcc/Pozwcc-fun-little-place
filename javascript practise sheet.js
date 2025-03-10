//Adult site sample page Javascript

let welcome_message = "Welcome to Pozwcc's fun little place! 😉";
alert(welcome_message);

//Basic name prompt
let name = prompt('What is your name sir?', ["John Doe"])
alert(`Hello ${name}! Please answer the following question before you start having fun 🤗`);

//Access Adult site prompt
alert("You are about to access some very sexy and juicy stuff! You must be 18+ to access! 😛");
let age = prompt(`Please tell us your age to continue: `, [">> Please input your age here <<"]);

    if(age < 18) {
    alert(`Sorry ${name}, you can't access that shit. Wait till you grow up mate! 😝`);
    alert("You know what? We can make an exception for u. In exchange you give a taste of your pussy! 😛🍑")
}  
    else if(age >=100) {
    alert("You really think I would believe you are this fucking old mate!? Get your head out of your ass and grow up!! 💔💔")
}  
    else if (age = undefined) {
    alert("yeah i think you need to input your age you idiot.", "you ain't cooperating, i ain't giving you shit!!");
} else if (age >= 18 <=100) {
    alert("Welcome to this juicy website! Please pleasure yourself!");
} 




