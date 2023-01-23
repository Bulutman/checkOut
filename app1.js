const box = document.querySelector(".box")
let kdv = 0.18
let shipping = 20

box.addEventListener("click",(e)=>{
if(e.target.classList.contains("minus")){
    if(e.target.nextElementSibling.innerText>1){
        e.target.nextElementSibling.
        innerText--
    }else if (confirm("Ürünler Silinsin Mi?")){
        e.target.closest(".product").remove()

    }
}else if(e.target.classList.contains("plus")){   
 e.target.previousElementSibling.innerText++

}else if(e.target.classList.contains("btn-remove")){
    e.target.closest(".product").remove()
}
multiple(e)


})




function multiple(e){
    let price = e.target.closest(".elements").
     querySelector("b").innerText
    //  console.log(price);
     
     let piece = e.target.closest(".elements").
     querySelector(".amount").innerText
    //  console.log(piece);


     let productTotal= +(price*piece).toFixed(2)
     console.log(productTotal);
     e.target.closest(".elements").querySelector(".product-total").innerText=productTotal
     multipleAll()
}

function multipleAll(){
    let allProductTotla=document.querySelectorAll(".product-total")

    let sum=0
    allProductTotla.forEach((f)=>{
        sum+=+(f.innerText)
        sum=+(sum.toFixed(2))
        console.log(sum);
    })
    let subTotal=sum
    document.querySelector(".buttom-subtotal").nextElementSibling.innerText=subTotal

    let tax = +(subTotal*kdv).toFixed(2)
    document.querySelector(".buttom-tax").nextElementSibling.innerText=tax
    
    shipping>0 ? shipping : 0
    document.querySelector(".buttom-shipping").nextElementSibling.innerText=shipping

    allTotal=(subTotal+tax+shipping).toFixed(2)
    document.querySelector(".buttom-total").nextElementSibling.innerText= "$"+allTotal
}

  
window.addEventListener("load",()=>{
    multipleAll()
})
    
