const userElement = document.getElementById('timeslot_selected');
const radioButtons = document.querySelectorAll('input[name="timeslot"]');
const checkbox = document.getElementById('timeslot_selected');

radioButtons.forEach((radio) => {
radio.onclick = function() {
let timeslotSelected = document.getElementById("timeslot_selected");
  timeslotSelected.setAttribute("data-actualdate", "2023-08-18");

//selecting time
   timeslotSelected = document.getElementById("timeslot_selected");
  var timeStart = timeslotSelected.value;
  timeslotSelected.setAttribute("data-timestart", timeStart);
  const selectedTimeStart = this.dataset.timestart;

    // Set the data-actualdate attribute on the checkbox to the selected date (assuming you have the date value in a variable called "selectedDate")
    checkbox.dataset.actualdate = selectedDate;

    // Set the data-timestart attribute on the checkbox to the selected data-timestart value
    checkbox.dataset.timestart = selectedTimeStart;


console.log(checkbox.dataset.timestart);
  enableNameField();
}
}


function enableNameField() {
  document.getElementById('full_name').disabled = false;
  document.getElementById('email').disabled = false;

document.querySelector('input[name="email_confirmation"]').disabled= false;

document.querySelector('input[name="humancheck"]').disabled= false;

document.querySelector('input[name="agree_terms"]').disabled= false;
  document.getElementById('contact_no').disabled = false;
  document.getElementById('message').disabled = false;

document.querySelector('input[name="btnSubmit"]').disabled= false;


}



function enableNameField() {
  document.getElementById('full_name').disabled = false;
  document.getElementById('email').disabled = false;

document.querySelector('input[name="email_confirmation"]').disabled= false;

document.querySelector('input[name="humancheck"]').disabled= false;

document.querySelector('input[name="agree_terms"]').disabled= false;
  document.getElementById('contact_no').disabled = false;
  document.getElementById('message').disabled = false;

document.querySelector('input[name="btnSubmit"]').disabled= false;


}
  enableNameField();
};

function enableNameField() {
  document.getElementById('full_name').disabled = false;
  document.getElementById('email').disabled = false;

document.querySelector('input[name="email_confirmation"]').disabled= false;

document.querySelector('input[name="humancheck"]').disabled= false;

document.querySelector('input[name="agree_terms"]').disabled= false;
  document.getElementById('contact_no').disabled = false;
  document.getElementById('message').disabled = false;

document.querySelector('input[name="btnSubmit"]').disabled= false;


}

// #selected_date ma value k k auxa, need to checl that values, first. in coonsole while they open visa slot???