// SERVER-SIDE CODE
const { response } = require('express');
const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host    : 'localhost',
    port    : 3307,
    user    : 'root',
    password: '',
    database: 'nodemysql'
});

// Connect
db.connect((error) => {
    if (error) {
        throw error;
    }
    console.log('MySQL Connected...');
});

const app = express();

// Create DB
app.get('/createdb', (request, response) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (error, result) => {
        if (error) {
            throw error;
        }
        console.log(result);
        response.send('Database created...');
    });
});

// Create table
app.get('/createuserstable', (request, response) => {
    let sql = 'CREATE TABLE users(user_id INT NOT NULL AUTO_INCREMENT, email VARCHAR(40) NOT NULL, password VARCHAR(40) NOT NULL, balance DECIMAL(12, 2) DEFAULT 0.00, PRIMARY KEY(user_id))';
    db.query(sql, (error, result) => {
        if (error) {
            throw error;
        }
        console.log(result);
        response.send('Users table created...');
    });
});

app.listen('3800', () => {
    console.log('Server started on port 3800');
});

// CLIENT-SIDE CODE
/*
const loginForm = document.querySelector("form.login");
const registerForm = document.querySelector("form.register");
const loginButton = document.querySelector("label.login");
const registerButton = document.querySelector("label.register");
const registerLink = document.querySelector(".register-link a");
const loginText = document.querySelector(".title-text .login");
const registerText = document.querySelector(".title-text .register");
registerButton.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginButton.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
registerLink.onclick = (() => {
    registerButton.click();
    return false;
});
registerForm.addEventListener("submit", event => {
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, registerForm, (error, result) => {
        if (error) {
            throw error;
        }
        console.log(result);
        response.send('Registration successful!');
    });
});
function validateForm() {
    let email = registerForm["e-mail"].value;
    let password1 = registerForm["password"].value;
    let password2 = registerForm["password2"].value;
    if (!email.endsWith('@marist.edu') || !email.indexOf('@') == (email.length - 11)) {
        alert("E-mail must be a marist.edu email");
        return false;
    }
    if (password1 != password2) {
        alert("Passwords must match");
        return false;
    }
}*/

// For loginForm, addEventListener => readsDatabase(), compares input to it