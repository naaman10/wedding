// $("#rsvpPassword").submit(function(evt) {
//   evt.preventDefault();
//   var password = document.getElementById('InputPassword1').value;
//   if (password == "1") {
//     $("#rsvpPages").load("ajax/rsvpPage2.html", function() {
//       $("#rsvpInfo").text('Find your party');
//       let dropdown = $('#selectCeremony');
//       dropdown.empty();
//       dropdown.append('<option selected="true" disabled>Select your name</option>');
//       dropdown.prop('selectedIndex', 0);
//       const url = 'data/attendees.json';
//       // Populate dropdown with list of provinces
//       $.getJSON(url, function(data) {
//         $.each(data, function(key, entry) {
//           dropdown.append($('<option></option>').attr('value', key).text(entry.name));
//         })
//       }).done(function() {
//         $("#rsvpName").submit(function(evt) {
//           evt.preventDefault();
//           var name = $("#selectCeremony").val();
//           console.log(name);
//           document.cookie = 'name=' + name;
//           $("#rsvpPages").load("ajax/rsvpPage3.html", function() {
//             $("#rsvpInfo").text('Your party details');
//             const url = 'data/attendees.json';
//             $.getJSON(url, function(data) {
//               var i = getCookie("name");
//               var details = data[name];
//               var guestA = details.details.guests;
//               var guestB = details.details.kids;
//               isPlural(guestA,guestB);
//               gotKids(guestB);
//               $.each(guestA, function(key, value) {
//                 var i = Math.floor((Math.random() * 10) + 1);
//                 var ii = key + i;
//                 $("#rsvpAdults").append('<li><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault' + ii + '"><label class="form-check-label" for="flexCheckDefault' + ii + '">' + value + '</label></div></li>');
//               })
//               $.each(guestB, function(key, value) {
//                 var i = Math.floor((Math.random() * 10) + 1);
//                 var ii = key + i;
//                 $("#rsvpKids").append('<li><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault' + ii + '"><label class="form-check-label" for="flexCheckDefault' + ii + '">' + value + '</label></div></li>');
//               })
//             })
//           })
//         });
//       });
//     });
//   } else if (password == "evening") {
//     $("#rsvpPages").load("ajax/rsvpPage2.html", function() {
//       $("#rsvpInfo").text('Find your party');
//       let dropdown = $('#selectCeremony');
//       dropdown.empty();
//       dropdown.append('<option selected="true" disabled>Select your name</option>');
//       dropdown.prop('selectedIndex', 0);
//       const url = 'data/attendeesE.json';
//       $.getJSON(url, function(data) {
//         $.each(data, function(key, entry) {
//           dropdown.append($('<option></option>').attr('value', key).text(entry.name));
//         })
//       }).done(function() {
//         $("#rsvpName").submit(function(evt) {
//           evt.preventDefault();
//           var name = $("#selectCeremony").val();
//           console.log(name);
//           document.cookie = 'name=' + name;
//           $("#rsvpPages").load("ajax/rsvpPage4.html", function() {
//             $("#rsvpInfo").text('Your party details');
//             const url = 'data/attendeesE.json';
//             $.getJSON(url, function(data) {
//               var i = getCookie("name");
//               var details = data[name];
//               var guestA = details.details.guests;
//               var guestB = details.details.kids;
//               isPlural(guestA,guestB);
//               gotKids(guestB);
//               $.each(guestA, function(key, value) {
//                 var i = Math.floor((Math.random() * 10) + 1);
//                 var ii = key + i;
//                 $("#rsvpAdults").append('<li><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault' + ii + '"><label class="form-check-label" for="flexCheckDefault' + ii + '">' + value + '</label></div></li>');
//               })
//               $.each(guestB, function(key, value) {
//                 var i = Math.floor((Math.random() * 10) + 1);
//                 var ii = key + i;
//                 $("#rsvpKids").append('<li><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault' + ii + '"><label class="form-check-label" for="flexCheckDefault' + ii + '">' + value + '</label></div></li>');
//               })
//             })
//           })
//         });
//       });
//     });
//   } else {
//     alert("wrong password");
//   }
// });

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function isPlural(adult, kids) {
  let a = adult.length;
  let b = kids.length;
  if (a + b > 1) {
    $('#plural1').append('We');
    $('#plural2').append('We');
  } else if (a + b == 1) {
    $('#plural1').append('I');
    $('#plural2').append('I');
    $("#rsvpKidsText").remove();
  }
}
function gotKids(kids) {
  let a = kids.length;
  if (a == 0) {
    $("#rsvpKidsText").remove();
  }
}


var weddingDate = new Date("05/20/2023");
var todaysDate = new Date();
var dateDifferenceTime = todaysDate.getTime() - weddingDate.getTime();
var dateCalc = dateDifferenceTime / (1000 * 3600 * 24) - 2;
let result = Math.round(dateCalc);
result = result.toString();
result1 = result.substring(1);
$('#daysRemaining').append(result1);

const rsvpLoginBtn = document.getElementById('rsvpLoginEnter');
if (rsvpLoginBtn) {
  rsvpLoginBtn.addEventListener('click', () => {
    rsvpLogin();
  });
}

function rsvpLogin() {
  console.log("submitted");
  let password = document.getElementById("InputPassword1").value
  if (password == "ceremony" || password == "evening") {
    console.log(password);
    localStorage.setItem("invite", password);
    localStorage.setItem("id", document.getElementById("rsvpEmail").value)
    redirect(password)
  } else {
    var element = document.getElementById('InputPassword1');
    element.classList.add("is-invalid");
  }
} 

function redirect(i) {
  window.location.href = "/rsvp/send";
}

window.onload = function() {
  let pageTitle = document.title;
  if (pageTitle == "Send Your RSVP") {
    var login = localStorage.getItem("invite");
    console.log(login);
     if (login !== null) {
       ceremony();
     } else {
      window.location.href = "/rsvp"
       
     }
  } else if (pageTitle == "RSVP") {
    var login = localStorage.getItem("id");
    if (login !== null) {
      window.location.href = "/rsvp/send"
    }
  }
};

function ceremony() {
  let inviteType = localStorage.getItem("invite");
  updateEmail();
  if (inviteType == "ceremony") {
    let contentTime = "13:00 onwards"
    let contentType = "Our Ceremony & Evening Celebration";
    document.getElementById("inviteType").insertAdjacentHTML("afterend", contentType);
    document.getElementById("inviteTime").insertAdjacentHTML("afterend", contentTime);
  } 
  if (inviteType == "evening") {
    let contentTime = "19:00 onwards"
    let contentType = "Our Evening Celebration";
    document.getElementById("inviteType").insertAdjacentHTML("afterend", contentType);
    document.getElementById("inviteTime").insertAdjacentHTML("afterend", contentTime);
  }
  
}

function updateEmail() {
  let email = localStorage.getItem("id");
  document.getElementById("emailAddress").value = email;
}