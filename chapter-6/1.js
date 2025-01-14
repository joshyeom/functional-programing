// Practice
var mailing_list = [];

function add_contact(email) {
  mailing_list.push(email);
}

function submit_form_handler(event) {
  var form = event.target;
  var email = form.elements["email"].value;
  add_contact(email);
}

// Solution
var mailing_list = [];

function add_contact(mailing_list, email) {
  var newMailingList = [...mailing_list, email];
  return newMailingList;
}

function submit_from_handler(event, mailing_list) {
  var form = event.target;
  var email = form.elements["email"].value;
  mailing_list = add_concat(mailing_list, email);
}
