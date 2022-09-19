function initListeners() {
  $("#submit").click((e) => {
    e.preventDefault();
    let allUsers = JSON.parse(localStorage.getItem("Person"));

    let fn = $("#firstName").val();
    let ln = $("#lastName").val();
    let sa = $("#age").val();
    let pn = $("#phoneNumber").val();
    let ea = $("#email").val();
    let sc = $("#classOne").val();
    let ct = $("#classTwo").val();
    let tc = $("#classThree").val();

    // make it required for both first and last name to be input
    if (
      fn != "" &&
      ln != "" &&
      sa != "" &&
      pn != "" &&
      ea != "" &&
      sc != "" &&
      ct != ""
    ) {
      let userObj = {
        fName: fn,
        lName: ln,
        age: sa,
        phoneNumber: pn,
        email: ea,
        classOne: sc,
        classTwo: ct,
        classThree: tc,
      };
      allUsers.push(userObj);
      //console.log(users);
      localStorage.setItem("Person", JSON.stringify(allUsers));

      $("#firstName").val("");
      $("#lastName").val("");
      $("#age").val("");
      $("#phoneNumber").val("");
      $("#email").val("");
      $("#classOne").val("");
      $("#classTwo").val("");
      $("#classThree").val("");
    } else {
      alert("Please fill out all required fields!");
    }
  });

  $("#getName").click((e) => {
    e.preventDefault();
    $("#app").html("");
    console.log("hello");
    let allUsers = JSON.parse(localStorage.getItem("Person"));

    $.each(allUsers, function (idx, user) {
      console.log(user.fName);
      $("#app").append(
        `<p><b>Full Name:</b> ${user.fName} ${user.lName} <b>Age:</b> ${user.age} <b>Phone Number:</b> ${user.phoneNumber} <b>Email Address:</b> ${user.email} <b>Classes:</b> ${user.classOne} ${user.classTwo} ${user.classThree}</p><hr size="6" width="100%" align="left" color="pink">`
      );
    });
  });
}

function initSite() {
  if (localStorage) {
    let people = localStorage.getItem("Person");
    // console.log(people);
    if (people) {
      let persons = JSON.parse(localStorage.getItem("Person"));
      console.log(persons);
    } else {
      localStorage.setItem("Person", "[]");
      alert("No students added yet");
    }
  } else {
    console.log("No local storage found");
  }
}

$(document).ready(function () {
  initListeners();
  initSite();
});
