// ==================LOGIN FORM======================
const login_from = document.getElementById("login-form"),
  user_login = document.getElementById("user"),
  loginClose = document.getElementById("login-close");

user_login.addEventListener("click", () => {
  login_from.classList.add("show-login");
});

loginClose.addEventListener("click", () => {
  login_from.classList.remove("show-login");
});

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
  ticket_booking1 = document.getElementById("ticket_1"),
  ticketClose = document.getElementById("ticket-close");

ticket_booking.addEventListener("click", () => {
  ticket_form.classList.add("show-ticket");
});

ticket_booking1.addEventListener("click", () => {
  ticket_form.classList.add("show-ticket");
});

ticketClose.addEventListener("click", () => {
  ticket_form.classList.remove("show-ticket");
});

// ==================CALENDAR==================
const datepicker = document.querySelector(".datepicker");
const dateInput = document.querySelector(".date-input");
const yearInput = datepicker.querySelector(".year-input");
const monthInput = datepicker.querySelector(".month-input");
const cancelBtn = datepicker.querySelector(".cancel");
const applyBtn = datepicker.querySelector(".apply");
const nextBtn = datepicker.querySelector(".next");
const prevBtn = datepicker.querySelector(".prev");
const dates = datepicker.querySelector(".dates");

let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();

// show datepicker
dateInput.addEventListener("click", () => {
  datepicker.hidden = false;
});

cancelBtn.addEventListener("click", () => {
  datepicker.hidden = true;
});

applyBtn.addEventListener("click", () => {
  dateInput.value = selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  datepicker.hidden = true;
});

nextBtn.addEventListener("click", () => {
  if (month === 11) year++;
  month = (month + 1) % 12;
  displayDates();
});
prevBtn.addEventListener("click", () => {
  if (month === 0) year--;
  month = (month - 1 + 12) % 12;
  displayDates();
});

monthInput.addEventListener("change", () => {
  month = monthInput.selectedIndex;
  displayDates();
});
yearInput.addEventListener("change", () => {
  year = yearInput.value;
  displayDates();
});

const updateYearMonth = () => {
  monthInput.selectedIndex = month;
  yearInput.value = year;
};

const handleDateClick = (e) => {
  const button = e.target;

  const selected = dates.querySelector(".selected");
  selected && selected.classList.remove("selected");
  button.classList.add("selected");
  selectedDate = new Date(year, month, parseInt(button.textContent));
};

const displayDates = () => {
  updateYearMonth();
  dates.innerHTML = "";
  const lastOfPrevMonth = new Date(year, month, 0);
  for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
    const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
    const button = createButton(text, true, -1);
    dates.appendChild(button);
  }
  const lastOfMOnth = new Date(year, month + 1, 0);

  for (let i = 1; i <= lastOfMOnth.getDate(); i++) {
    const button = createButton(i, false);
    button.addEventListener("click", handleDateClick);
    dates.appendChild(button);
  }

  const firstOfNextMonth = new Date(year, month + 1, 1);

  for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
    const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;

    const button = createButton(text, true, 1);
    dates.appendChild(button);
  }
};

const createButton = (text, isDisabled = false, type = 0) => {
  const currentDate = new Date();
  let comparisonDate = new Date(year, month + type, text);
  const isToday =
    currentDate.getDate() === text &&
    currentDate.getFullYear() === year &&
    currentDate.getMonth() === month;

  const selected = selectedDate.getTime() === comparisonDate.getTime();

  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = isDisabled;
  button.classList.toggle("today", isToday);
  button.classList.toggle("selected", selected);
  return button;
};

displayDates();

// ==================LOGIN FORM CHECK======================

function validator(options) {
  function validate(inputElement, rule) {
    var errorMessage = rule.test(inputElement.value);
    var errorElement =
      inputElement.parentElement.querySelector(".form-message");

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("erorrInput");
    } else {
      errorElement.innerText = " ";
      inputElement.parentElement.classList.remove("erorrInput");
    }
  }

  var formElement = document.querySelector(options.form);

  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
      }
    });
  }
}

validator.Email_sign_in = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập Email";
    },
  };
};

validator.Password_sign_in = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập mật khẩu";
    },
  };
};

validator.Email_sign_up = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập Email hợp lệ";
    },
  };
};

validator.Password_sign_up = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập mật khẩu";
    },
  };
};

validator.Repeat_password_sign_up = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng xác nhận mật khẩu";
    },
  };
};
