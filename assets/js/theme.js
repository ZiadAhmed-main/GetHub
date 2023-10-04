/**
 * @license MIT
 * @author Ziad Ahmed <ziadahmedcf@gmail.com>
 * @copyright Ziad Ahmed 2023
 */

"use strict";

const html = document.documentElement;
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
  html.dataset.theme = sessionStorage.getItem("theme");
} else {
  html.dataset.theme = isDark ? "dark" : "light";
}

let isPressed = false;

const changeTheme = function () {
  isPressed = isPressed ? false : true;
  this.setAttribute("aria-pressed", isPressed);
  html.setAttribute("data-theme", html.dataset.theme === "light" ? "dark" : "light");
  sessionStorage.setItem("theme", html.dataset.theme);
};

const themeBtn = document.querySelector("[data-theme-btn]");

themeBtn.addEventListener("click", changeTheme);
