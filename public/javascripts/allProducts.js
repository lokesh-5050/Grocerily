const handleDelete = (e) => {
  console.log(e);
  console.log(e.children[0].className == "ri-pencil-line");

  // let deleteBtn = document.querySelector(".all_products .deleteProduct");
  let updateProductForm = document.querySelector(".item #updateProductForm");
  if (e.children[0].className == "ri-pencil-line") {
    e.children[0].classList.add("ri-close-fill");
    e.children[0].classList.remove("ri-pencil-line");
    formAndDeleteBtnOn();
    // deleteBtn.style.display = "initial";
    // updateProductForm.style.display = "initial"
  } else {
    e.children[0].classList.remove("ri-close-fill");
    e.children[0].classList.add("ri-pencil-line");
    formAndDeleteBtnOff();
    // deleteBtn.style.display = "none";
    // updateProductForm.style.display = "none"
  }
};

const it = document.getElementById("clickMe");
const input = document.getElementById("input");
const frame = document.getElementById("frame");

const dropZoneElement = document.querySelector(".drop-zone");
it.addEventListener("click", (e) => {
  input.click();
});

input.addEventListener("change", (e) => {
  console.log(e.target.files[0]);
  frame.src = URL.createObjectURL(e.target.files[0]);
  var name = (document.querySelector(".nameOfImage").innerHTML =
    e.target.files[0].name);
  frame.style.display = "initial";
});

input.addEventListener("ondrag", (e) => {
  e.preventDefault();
  console.log("dragged");
});

dropZoneElement.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZoneElement.classList.add("drop-zone--over");
});

["dragleave", "dragend"].forEach((type) => {
  dropZoneElement.addEventListener(type, (e) => {
    dropZoneElement.classList.remove("drop-zone--over");
  });
});

dropZoneElement.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log(e.dataTransfer.getData);
  dropZoneElement.classList.remove("drop-zone--over");

  //  if (e.dataTransfer.files.length) {
  //   inputElement.files = e.dataTransfer.files;
  //   updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
  // }
});
// const preview = (e)=>{
//   console.log(e);
//   let frame = document.getElementById("frame");
//   frame.src = URL.createObjectURL(e.target.files[0])
// }

function formAndDeleteBtnOn() {
  document.querySelectorAll(".all_products").forEach((allProducts) => {
    // console.log(allProducts.children.length)
    console.log(allProducts.children);
    // allProducts.children.
    // for (let i = 0; i < allProducts.children.length; i++) {
    //   allProducts.children[i].children[i].style.display = "initial";
    //   allProducts.children[i].children[5].style.display = "initial";
    // }
    console.log(allProducts.childNodes);
    allProducts.childNodes.forEach((e, i) => {
      if (i % 2 == 0) {
      } else {
        console.log(e)
        let btnDel = document.querySelectorAll(`.${e.className} .deleteProduct`)
        console.log(btnDel);
        btnDel.forEach(e =>{
          e.classList.add("showDeleteBtn")
          e.classList.remove("deleteProduct")
        })
        

        //form
        let form = document.querySelectorAll(`.${e.className} .updateProductForm`)
        console.log(form)
        form.forEach(e=>{
          e.classList.add("showUpdateForm")
          e.classList.remove("updateProductForm")
        })

      }
    });
  });
}

function formAndDeleteBtnOff() {
  document.querySelectorAll(".all_products").forEach((allProducts) => {
    // console.log(allProducts.children.length)
    console.log(allProducts.children);
    // allProducts.children.
    // for (let i = 0; i < allProducts.children.length; i++) {
    //   allProducts.children[i].children[i].style.display = "initial";
    //   allProducts.children[i].children[5].style.display = "initial";
    // }
    console.log(allProducts.childNodes);
    allProducts.childNodes.forEach((e, i) => {
      if (i % 2 == 0) {
      } else {
        console.log(e)
        let btnDel = document.querySelectorAll(`.${e.className} .deleteProduct`)
        console.log(btnDel);
        btnDel.forEach(e =>{
          e.classList.remove("showDeleteBtn")
          e.classList.add("deleteProduct")
        })
        

        //form
        let form = document.querySelectorAll(`.${e.className} .updateProductForm`)
        console.log(form)
        form.forEach(e=>{
          e.classList.remove("showUpdateForm")
          e.classList.add("updateProductForm")
        })

      }
    });
  });
}
