$("#rsvpPassword").submit(function(evt) {
  evt.preventDefault();
  var password = document.getElementById('InputPassword1').value;
  if (password == "1") {
    $("#rsvpPages").load("ajax/rsvpPage2.html", function() {
      let dropdown = $('#selectCeremony');

      dropdown.empty();

      dropdown.append('<option selected="true" disabled>Select your name</option>');
      dropdown.prop('selectedIndex', 0);

      const url = 'data/attendees.json';
      // Populate dropdown with list of provinces
      $.getJSON(url, function(data) {
        $.each(data, function(key, entry) {
          dropdown.append($('<option></option>').attr('value', key).text(entry.name));

        })
      }).done(function() {
        $("#rsvpName").submit(function(evt) {
          evt.preventDefault();
          var name = $("#selectCeremony").val();
          console.log(name);
          document.cookie = 'name=' + name;
          $("#rsvpPages").load("ajax/rsvpPage3.html", function() {
            const url = 'data/attendees.json';
            $.getJSON(url, function(data) {
              var i = getCookie("name");
              var details = data[name];
              var guestA = details.details.guests;
              var guestB = details.details.kids;
              isPlural(guestA,guestB);
              $.each(guestA, function(key, value) {
                $("#rsvpAdults").append('<li>' + value + '</li>');
              })
              $.each(guestB, function(key, value) {
                $("#rsvpKids").append('<li>' + value + '</li>');
              })
            })
          })
        });
      });
    });
  } else if (password == "evening") {
    alert("You have been invited to the Evening Celebration")
  } else {
    alert("wrong password");
  }
});

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
var weddingDate = new Date("05/20/2023");
var todaysDate = new Date();
var dateDifferenceTime = todaysDate.getTime() - weddingDate.getTime();
var dateCalc = dateDifferenceTime / (1000 * 3600 * 24) - 2;
let result = Math.round(dateCalc);
result = result.toString();
result1 = result.substring(1);
$('#daysRemaining').append(result1);
