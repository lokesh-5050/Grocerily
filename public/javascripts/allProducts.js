const handleDelete = (e) => {
  console.log(e.children[0].className == "ri-pencil-line");
  let editBtn = document.querySelector(".deleteProduct")
  if (e.children[0].className == "ri-pencil-line") {
    e.children[0].classList.add("ri-close-fill");
    e.children[0].classList.remove("ri-pencil-line");
    editBtn.style.display = "initial"
  } else {
    e.children[0].classList.remove("ri-close-fill");
    e.children[0].classList.add("ri-pencil-line");
    editBtn.style.display = "none"
  }
};



