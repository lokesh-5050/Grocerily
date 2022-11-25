const handleDelete = (e) => {
  console.log(e.children[0].className == "ri-pencil-line");
  let deleteBtn = document.querySelector(".all_products .deleteProduct");
  let updateProductForm = document.getElementById("updateProductForm")
  if (e.children[0].className == "ri-pencil-line") {
    e.children[0].classList.add("ri-close-fill");
    e.children[0].classList.remove("ri-pencil-line");
    deleteBtn.style.display = "initial";
    // updateProductForm.style.display = "initial"
  } else {
    e.children[0].classList.remove("ri-close-fill");
    e.children[0].classList.add("ri-pencil-line");
    editBtn.style.display = "none";
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
      var name = document.querySelector(".nameOfImage").innerHTML = e.target.files[0].name
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
