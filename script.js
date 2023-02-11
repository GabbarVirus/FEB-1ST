fetch("https://dummyjson.com/products")
.then((response)=>response.json())
.then((data)=>{
    console.log("ShowData",data);
    let myArr=data.products;
    
    let myDiv=document.getElementById("container")
    myArr.map((product)=>{
        myDiv.innerHTML+=
     `<div class="card">
     <div class="card-image">
         <img src="${product.images[0]}" alt="image">
     </div>
     <div class="card-body">
         <div class="details">
             Title:${product.title}
         </div>

         <div class="brand">
             Brand:${product.brand}
         </div>

         <div class="price">
             Price:${product.price}
         </div>

         <div class="rating">
             Rating:${product.rating}
         </div>

         <div class="stock">
             Stock:${product.stock}
         </div>

         

     </div>
     
 </div>`
       
            
        
        
    });
}) 