// module imports
import {
  getBio,
  getUsername,
  setBio,
  setUsername,
  setLike,
  getLikes,
} from "./src/storage.js";
import { displayEnrolledCourses, initGoals } from "./src/ui.js";
import {
  handleAddCourseHover,
  handleEnrolledHover,
  handleHoverLeave,
  handleLogin,
  handleBioBlur,
  enrollMsgs,
} from "./src/events.js";
import { displayLikes, searchBook } from "./src/addcourse.js";

// kuya doms
const enrolledBox = document.querySelector(".courses-box");
const goalsBox = document.querySelector('.goals-box')
const bioInput = document.querySelector(".user-input");
const userUsername = document.querySelector(".user-details h1");
const myUsername = document.querySelector(".enterMyuser");
const loginBtn = document.querySelector(
  '.signin-login-buttons a[href="user.html"]'
);
const userBody = document.querySelector("body");
const likedBody = document.querySelector("body .liked-body");
const addCBody = document.querySelector('body .add-body')

// Banat

// Bio input event
if (bioInput) {
  bioInput.addEventListener("blur", handleBioBlur(bioInput, setBio));
}

if (likedBody) {
  displayLikes(getLikes);


}

if(addCBody){
  searchBook()
}

// User page initialization
if (enrolledBox) {

  displayEnrolledCourses(
    enrolledBox,
    handleEnrolledHover(
      userBody,
      enrolledBox,
      displayEnrolledCourses,
      handleEnrolledHover,
      handleHoverLeave
    ),
    handleHoverLeave
  );
  bioInput.value = getBio();
  userUsername.innerText = getUsername();

  initGoals(goalsBox,userBody,enrollMsgs)
  
}

// Add course controls
document.querySelectorAll(".book1").forEach((book) => {
  book.addEventListener(
    "mouseenter",
    handleAddCourseHover(userBody, enrolledBox, handleHoverLeave)
  );

  book.addEventListener("mouseleave", handleHoverLeave);
});

document.querySelectorAll(".likedBook").forEach((book) => {
  book.addEventListener(
    "mouseenter",
    handleAddCourseHover(userBody, enrolledBox, handleHoverLeave)
  );

  book.addEventListener("mouseleave", handleHoverLeave);
});


document.querySelectorAll(".book-enrolled").forEach((book) => {
  book.addEventListener(
    "mouseenter",
    handleEnrolledHover(userBody, enrolledBox, handleHoverLeave)
  );

  book.addEventListener("mouseleave", handleHoverLeave);
});

// Login handler
if (loginBtn) {
  loginBtn.addEventListener("click", handleLogin(myUsername, setUsername));
}
