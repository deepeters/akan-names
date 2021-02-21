var mName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
var fName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
var weekDays = ['Sun','Mon','Tue','Wen','Thur','Fri','Sat']


function getName(event) {
    event.preventDefault()
    let myName = document.getElementById("name").value;
    return myName;
    
}


let gender = document.getElementById (radio)
    return gender;
    if (gender === male){
        return male
        else return female;
    }

function getBirthday(event) {
    event.preventDefault()
    let date = document.getElementById (date).value;
    let myBirthday = new Date(date).toDateString();
    let dayString = myBirthday.split () [0];
    var compare = dayString.toDateString();
    var day = days.indexOf(compare);
    return day;