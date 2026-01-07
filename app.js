let elContainer = document.getElementById("container");
let elTemlate = document.getElementById("templateCard");
let elTemlateSkeleton = document.getElementById("templateSkeleton");
let elLoader = document.getElementById("loader");
let elDelete = document.getElementById("deleteCard");

loader(true);
fetch("https://json-api.uz/api/project/fn44-amaliyot/cars")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    ui(res.data);
  })
  .catch(() => {
    console.log("xatolik");
  })
  .finally(() => {
    loader(false);
  });

function loader(boolean) {
  elLoader.innerHTML = null;

  if (boolean) {
    Array.from({ length: 7 }, (_, index) => index).forEach(() => {
      elLoader.appendChild(elTemlateSkeleton.cloneNode(true).content);
    });
  }
}
function ui(data) {
  data.forEach((element) => {
    const clone = elTemlate.cloneNode(true).content;

    clone.querySelector("h2").innerText = element.name
      ? element.name
      : "no title";
    clone.querySelector("p").innerText = element.equipment.comfort.join("  ");
    clone.querySelector("img").src = element.image;
    clone.querySelector("button").id = element.id;
   
    elContainer.appendChild(clone);
  });
}

// Delete section

elContainer.addEventListener("click",(evt)=>{
if (evt.target.classList.contains("js-delete-button")) {
console.log(evt.target.id);

}
})

