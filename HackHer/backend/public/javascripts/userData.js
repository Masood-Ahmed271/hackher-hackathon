"use strict";

let user;

class Users {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

const newusername = function () {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let email = document.querySelector("#email").value;
  user = new User(username, email, password);
  console.log(user);
};
