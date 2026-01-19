const elLoginForm = document.getElementById("loginform");

elLoginForm.addEventListener("submit", (evt) => {
  evt.preventDefault(evt);
  const formData = new FormData(elLoginForm);
  let result = {};

  formData.forEach((value, key) => {
    result[key] = value;
  });
});

function login(data) {
  fetch("https://json-api.uz/api/project/fn44-amaliyot/auth/login", {
    method: "POST",
    headers: {
      contentType: "Application/json",
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
    .catch(() => {
      alert("error  successfuly");
    });
}
