var expanded = false;

function onChange() {
  var selectedItems = document.querySelectorAll(".city_select:checked");
  let selected = [];
  var selectedOptions = document.getElementById("selectedOptions");
  selectedItems.forEach((opt) => {
    selected.push(opt.value);
  });
  if (selected.length != 0) {
    selectedOptions.innerHTML = selected;
  } else {
    selectedOptions.innerHTML = "Пожалуйста выберите";
  }
}
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function onChangeInterest() {
  var selectedInterests = document.querySelectorAll(".hobby_select:checked");
  let selectedInterest = [];
  var selectedOptionsInterests = document.getElementById(
    "selectedOptions_interest"
  );
  selectedInterests.forEach((opt) => {
    selectedInterest.push(opt.value);
  });

  if (selectedInterest.length != 0) {
    selectedOptionsInterests.innerHTML = selectedInterest;
  } else {
    selectedOptionsInterests.innerHTML = "Любая";
  }
}

function showCheckboxesInterest() {
  var checkboxes = document.getElementById("checkboxes_interest");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

let forms = document.querySelectorAll("fieldset");
let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");
let buttons = document.querySelector(".buttons");
let currentFormIndex = 0;

function checkFormIndex() {
  if (currentFormIndex < 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
}
window.onload = checkFormIndex();

function nextForm() {
  forms.forEach((form, index1) => {
    if (form.classList.contains("animate")) {
      currentFormIndex = index1;
      form.classList.remove("animate");
      form.classList.add("d-none");
    }
  });

  if (currentFormIndex >= 0 && currentFormIndex < forms.length - 1) {
    forms[currentFormIndex + 1].classList.remove("d-none");
    forms[currentFormIndex + 1].classList.add("animate");
  }

  if (currentFormIndex === -1 || currentFormIndex === forms.length - 1) {
    forms[0].classList.remove("d-none");
    forms[0].classList.add("animate");
  }
  if (currentFormIndex === forms.length - 2) {
    buttons.style.display = "none";
  }
  console.log(currentFormIndex);
  if (currentFormIndex >= 0) {
    prevBtn.style.display = "block";
  }
}

function prevForm() {
  forms.forEach((form, index) => {
    if (form.classList.contains("animate")) {
      currentFormIndex = index;
      form.classList.remove("animate");
      form.classList.add("d-none");
    }
  });
  if (currentFormIndex > 0) {
    forms[currentFormIndex - 1].classList.remove("d-none");
    forms[currentFormIndex - 1].classList.add("animate");
  }
  if (currentFormIndex < 2) {
    prevBtn.style.display = "none";
  }
  if (currentFormIndex === 0) {
    forms[forms.length - 1].classList.remove("d-none");
    forms[forms.length - 1].classList.add("animate");
  }
}

let submitBtn = document.getElementById("submit_btn");
let submitModal = document.querySelector(".form_success");

function submitForm() {
  submitModal.classList.remove("d-none");
  submitModal.classList.add("active");
}

submitBtn.addEventListener('click',submitForm)
