const elLoginForm = document.getElementById("loginform");

elLoginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formData = new FormData(elLoginForm);
  let result = {};
  formData.forEach((value, key) => {
    result[key] = value;
    login(result);
  });
});

function login(data) {
  fetch("https://json-api.uz/api/project/fn44-amaliyot/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      localStorage.setItem("token", res.access_token);
      location.href = "./index.html";
    })
    .catch(() => {});
}
