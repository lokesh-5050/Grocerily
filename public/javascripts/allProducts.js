const handleDelete = (e) => {
  let updateProductForm = document.querySelector(".updateProductForm");

  if (e.children[0].className == "ri-pencil-line") {
    e.children[0].classList.add("ri-close-fill");
    e.children[0].classList.remove("ri-pencil-line");
    e.children[0].style.zIndex = "9887";
    updateProductForm.style.display = "none";
    e.children[0].parentElement.parentElement.children[1].style.display =
      "initial";
      e.children[0].parentElement.parentElement.children[6].style.display = "initial";
      
      // let openFileOpt = e.children[0].parentElement.parentElement.children[1].children[0].children[0]
      // console.log(openFileOpt);
        
    } else {
      e.children[0].classList.remove("ri-close-fill");
      e.children[0].classList.add("ri-pencil-line");
      updateProductForm.style.display = "none";
      e.children[0].parentElement.parentElement.children[1].style.display =
        "none";
        e.children[0].parentElement.parentElement.children[6].style.display = "none"
        
        e.children[0].parentElement.parentElement.children[1].children[0].children[2].style.display = "none" // img
  }


  // console.log(e.children[0].parentElement.parentElement.children[1].children[0].children[0].className == "openFileOpt")
  
  

  console.log(e.children[0].parentElement.parentElement.children[1].children[0].children[2]);
};

const openFileOpt = (e, id)=>{
  console.log(e);
  console.log(e.parentElement);
  e.parentElement.children[1].click()
  e.parentElement.children[1].addEventListener("change", (insideE)=>{
    console.log(insideE.target.files[0]);
    let imgLink = URL.createObjectURL(insideE.target.files[0])
    e.parentElement.children[2].src = imgLink
    e.parentElement.children[2].style.display = "initial"
  })


}


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

    console.log(allProducts.childNodes);
    allProducts.childNodes.forEach((e, i) => {
      if (i % 2 == 0) {
      } else {
        console.log(e);
        let btnDel = document.querySelectorAll(
          `.${e.className} .deleteProduct`
        );
        console.log(btnDel);
        btnDel.forEach((e) => {
          e.classList.add("showDeleteBtn");
          e.classList.remove("deleteProduct");
        });

        //form
        let form = document.querySelectorAll(
          `.${e.className} .updateProductForm`
        );
        console.log(form);
        form.forEach((e) => {
          e.classList.add("showUpdateForm");
          e.classList.remove("updateProductForm");
        });
      }
    });
  });
}

function formAndDeleteBtnOff() {
  document.querySelectorAll(".all_products").forEach((allProducts) => {
    // console.log(allProducts.children.length)
    console.log(allProducts.children);

    console.log(allProducts.childNodes);
    allProducts.childNodes.forEach((e, i) => {
      if (i % 2 == 0) {
      } else {
        console.log(e);
        let btnDel = document.querySelectorAll(
          `.${e.className} .showDeleteBtn`
        );
        console.log(btnDel);
        btnDel.forEach((e) => {
          e.classList.remove("showDeleteBtn");
          e.classList.add("deleteProduct");
        });

        //form
        let form = document.querySelectorAll(`.${e.className} .showUpdateForm`);
        console.log(form);
        form.forEach((e) => {
          e.classList.remove("showUpdateForm");
          e.classList.add("updateProductForm");
        });
      }
    });
  });
}
