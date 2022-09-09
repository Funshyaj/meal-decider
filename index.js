let btn = document.querySelector("button")
const foods = [ "rice" , "beans" ,"yam", "eba" , "bread "]

btn.addEventListener("click", ()=>{
let p = btn.nextElementSibling
let random = Math.floor(Math.random() * foods.length)
p.innerHTML  = foods[random]
})