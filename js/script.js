var mName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
var fName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
var weekDays = ['Sun','Mon','Tue','Wen','Thur','Fri','Sat']


function getName(event) {
    event.preventDefault()
    let myName = document.getElementById("name").value;
    return myName;
    
}


function getBirthday(event) {
    event.preventDefault()
    let date = document.getElementById (date).value;
    let myBirthday = new Date(date).toDateString();
    let dayString = myBirthday.split () [0];
    var compare = dayString.toDateString();
    var day = days.indexOf(compare);
    return day;

function getGender(event) {
    event.preventDefault()
    var returnGetName = getName(event);
    var returnGetDay = getDay(event);
    var message;

    getDay(event); 
    var genders = document.getElementsByName ('gender')   
    if (genders[0].checked == true) {
            var gender = "male";
    }
        else if (genders[1].checked == true) {
            var gender = "male";
    }
        else {
            return false;
        }
    switch (gender) {

    }
    case "male":
        if (returnGetDay == 0) {
            message = `${returnGetname}, you were born on ${days[0]}day, and your Akan Name is ${maleName[0]} !`;
        } else if (returnGetDay == 1) {
            message = `${returnGetname}, you were born on ${days[1]}day, and your Akan Name is ${maleName[1]} !`;
        } else if (returnGetDay == 2) {
            message = `${returnGetname}, you were born on ${days[2]}sday, and your Akan Name is ${maleName[2]} !`;
        } else if (returnGetDay == 3) {
            message = `${returnGetname}, you were born on ${days[3]}nesday, and your Akan Name is ${maleName[3]} !`;
        } else if (returnGetDay == 4) {
            message = `${returnGetname}, you were born on ${days[4]}rsday, and your Akan Name is ${maleName[4]} !`;
        } else if (returnGetDay == 5) {
            message = `${returnGetname}, you were born on ${days[5]}day, and your Akan Name is ${maleName[5]} !`;
        } else {
            message = `${returnGetname}, you were born on ${days[6]}urday, and your Akan Name is ${maleName[6]} !`;
        }
        break;
    case "female":
        if (returnGetDay == 0) {
            message = `${returnGetname}, you were born on ${days[0]}day, and your Akan Name is ${femaleName[0]} !`;
        } else if (returnGetDay == 1) {
            message = `${returnGetname}, you were born on ${days[1]}day, and your Akan Name is ${femaleName[1]} !`;
        } else if (returnGetDay == 2) {
            message = `${returnGetname}, you were born on ${days[2]}sday, and your Akan Name is ${femaleName[2]} !`;
        } else if (returnGetDay == 3) {
            message = `${returnGetname}, you were born on ${days[3]}nesday, and your Akan Name is ${femaleName[3]} !`;
        } else if (returnGetDay == 4) {
            message = `${returnGetname}, you were born on ${days[4]}rsday, and your Akan Name is ${femaleName[4]} !`;
        } else if (returnGetDay == 5) {
            message = `${returnGetname}, you were born on ${days[5]}day, and your Akan Name is ${femaleName[5]} !`;
        } else if (returnGetDay == 6) {
            message = `${returnGetname}, you were born on ${days[6]}urday, and your Akan Name is ${femaleName[6]} !`;
        } else {
            return false;
        }
        break
    default:

}
return message;
}

function validateForm() {
    if (document.myForm.name.value == "") {
        alert("Please provide your name!");
        return false;
    }
    if (document.myForm.date.value == "") {
        alert("Please provide your Birthday!");
        return false;
    }
    if (document.myForm.gender.value == "") {
        alert("Please provide your Gender!");
        return false;
    }
    return true;
}

function getResults(event) {

event.preventDefault();
var validate = validateForm();
var results = getGender(event);
let displayTag = document.getElementById("displayarea");
displayTag.innerHTML = results;

};

