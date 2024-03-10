const login_from = document.getElementById("login-form"),
  user_login = document.getElementById("user"),
  user_login1 = document.getElementById("user_1"),
  loginClose = document.getElementById("login-close");

user_login.addEventListener("click", () => {
  login_from.classList.add("show-login");
});

user_login1.addEventListener("click", () => {
  login_from.classList.add("show-login");
});

loginClose.addEventListener("click", () => {
  login_from.classList.remove("show-login");
});
// ==================LOGIN FORM======================

const container = document.getElementById("container-login"),
  registerBtn = document.getElementById("register"),
  loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
// ==================TICKET FORM======================
const ticket_form = document.getElementById("ticket-form"),
  ticket_booking = document.getElementById("ticket"),
  ticketClose = document.getElementById("ticket-close");

ticket_booking.addEventListener("click", () => {
  ticket_form.classList.add("show-ticket");
});

ticketClose.addEventListener("click", () => {
  ticket_form.classList.remove("show-ticket");
});
