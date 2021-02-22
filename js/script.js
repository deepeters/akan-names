let userForm = document.querySelector('form');
let myModal = new bootstrap.Modal(document.getElementById('myModal'))
let dayOfWeek = document.getElementById('dayOfWeek');
let akanName = document.getElementById('akanName')
let alert = document.getElementById('invalidDateAlert')

let resetForm =() =>{
  document.querySelector("form").reset();
}

let showAlert = (message) =>{
  alert.innerHTML = message
}

let closeAlert = ()=>{
  alert.innerHTML = null
  }

userForm.addEventListener("submit", (e)=>{
  e.preventDefault()

let  dateValue = document.getElementById('date').value
let  gender = document.querySelector('input[name="genderRadio"]:checked').value;

let selectedDate = (new Date(dateValue)).getDay()  


let currentDay = (new Date()).getDate(); 
let selectedDay = (new Date(dateValue)).getDate();


let currentMonth = (new Date()).getMonth() + 1;
let selectedMonth = (new Date(dateValue)).getMonth() + 1;


let currentYear = (new Date()).getFullYear();
let selectedYear = (new Date(dateValue)).getFullYear();


let maleAkanNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleAkanNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

let weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


if(selectedYear >= currentYear && selectedMonth > currentMonth){
  showAlert("Date is Invalid!")
  return
}else{

  if(selectedMonth >= currentMonth && selectedDay > currentDay){
    showAlert("Date is Invalid!")
      return
  }
  else{
  if(selectedDate >=0 && gender === "male"){
      dayOfWeek.innerHTML= weekDay[selectedDate]
    akanName.innerHTML= maleAkanNames[selectedDate]
  }else if(selectedDate >=0 && gender === "female"){
        dayOfWeek.innerHTML= weekDay[selectedDate]
    akanName.innerHTML= femaleAkanNames[selectedDate]
  }}
}
closeAlert()
myModal.show()
resetForm()

})