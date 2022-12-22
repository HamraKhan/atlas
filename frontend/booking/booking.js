//Form validation
function validateForm() {
  console.log("testing");
  if (document.bookingForm.fname.value === "") {
    alert("Please provide a first name");
    document.bookingForm.fname.focus();
    return false;
  }
  if (document.bookingForm.lname.value === "") {
    alert("Please provide a last name");
    document.bookingForm.lname.focus();
    return false;
  }
  if (document.bookingForm.email.value === "") {
    alert("Please provide your email");
    document.bookingForm.email.focus();
    return false;
  }
  if (document.bookingForm.phone.value === "") {
    alert("Please provide your phone number");
    document.bookingForm.phone.focus();
    return false;
  }
  if (document.bookingForm.guests.value === 0) {
    alert("Please provide number of guests");
    document.bookingForm.guests.focus();
    return false;
  }

  const todaysDate = new Date();
  const selectedDateStr = document.bookingForm.datePicker.value;
  const selectedTimeStr = document.bookingForm.time.value;
  //if date is in date format then show error message
  if (selectedDateStr === "") {
    alert("Please select valid booking date");
    document.bookingForm.datePicker.focus();
    return false;
  }
  //if time is in --:-- format then show error
  if (selectedTimeStr === "") {
    alert("Please select valid booking time");
    document.bookingForm.time.focus();
    return false;
  }

  const selectedDateTime = Date.parse(
    `${selectedDateStr}T${selectedTimeStr}:00`
  );
  //if date is before current date then show error
  if (selectedDateTime.getTime() < todaysDate.getTime()) {
    alert("Please select valid booking date");
    document.bookingForm.datePicker.focus();
    return false;
  }

  //if time is !> 1hr from current time then show error
  if (
    selectedDateTime.getTime() >
    todaysDate.setHours(todaysDate.getHours() + 1).getTime()
  ) {
    alert("Please select valid booking time");
    document.bookingForm.time.focus();
    return false;
  }
}
