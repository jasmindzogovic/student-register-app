"use strict";

const form = document.getElementById("form");
const formName = document.getElementById("form__name");
const formAge = document.getElementById("form__age");
const formRoll = document.getElementById("form__roll");
const studentsContainer = document.querySelector(".students");

const students = JSON.parse(localStorage.getItem("students")) || [];

// Pushing to students array, and sending to localStorage

const addStudent = (name, age, roll) => {
  students.push({ name, age, roll });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, roll };
};

// Rendering markup

const createStudentElement = ({ name, age, roll }) => {
  const markup = `<div>
  <h2>Student name: ${name}</h2>
  <p>Student age: ${age}</p>
  <p>Student roll: ${roll}</p>
  </div>`;

  studentsContainer.insertAdjacentHTML("afterbegin", markup);
};

// Rendering array to DOM

students.forEach(createStudentElement);

// Adding new objects to array, and localStorage on submit

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newStudent = addStudent(formName.value, formAge.value, formRoll.value);

  createStudentElement(newStudent);

  [formName, formAge, formRoll].forEach((input) => (input.value = ""));
});
