let getbtn = document.getElementById("add-btn");

let Pname = document.getElementById("name").value
let description = document.getElementById("description").value
let price = document.getElementById("price").value
let categories = document.getElementById("categories").value



getbtn.addEventListener("click", function() {
  
  let pic = document.getElementById("pic").files[0].name;
  let pics = URL.createObjectURL(pic);
  console.log(pics)

    if (Pname === "" || description === "" || price === "" || pic.value === "") {
        alert("All fields must be filled out.");
        return;
    }
    var productobj = {
        name : Pname,
        description : description,
        price : price,
        pic : pic.files[0].name,
        categories : categories
    }
    var productArray = JSON.parse(localStorage.getItem("Product")) || [];
    productArray.push(productobj)
    localStorage.setItem("Product", JSON.stringify(productArray));
})

var abc =   JSON.parse(localStorage.getItem("Product"))
let productcard = document.getElementById("Product-card")
abc.forEach(data => {
productcard.innerHTML= `<div class="container">
			<div class="wrapper">
			  <div class="banner-image"> 
              <img src="${data.pic}" alt="Product Image">
              </div>
			  <h1>${data.name}</h1>
			  <p>${data.description}</p>
			 </div>
			 <div class="button-wrapper"> 
			 <button class="btn outline">DETAILS</button>
			   <button class="btn fill">BUY NOW</button>
			 </div>
			   </div>
		   </div>
           `
});