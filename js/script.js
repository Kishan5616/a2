function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let message = document.forms["myForm"]["message"].value;

  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  if (email === "") {
    alert("Email must be filled out");
    return false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email address");
    return false;
  }

  if (message === "") {
    alert("Please enter a message");
    return false;
  }

  return true;
}

function hamburger() {
  var menu = document.getElementById("menu-links");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

