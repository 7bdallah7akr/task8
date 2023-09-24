var allimg = document.querySelectorAll("#img")
var divcontent = document.querySelector("#content")
var btn = document.querySelector("#btn")
var divprice = document.querySelector("#price")
var title = document.querySelector("#title")
var h6 = document.querySelectorAll(".h6")
totalprice = 0

h6.forEach(function(item){
    item.onclick = function(){
        divcontent.innerHTML += item.textContent + "    /     "
        totalprice  +=  +(item.getAttribute("price"))
        if(divcontent.innerHTML !=""){
            btn.style.display = "block"
        }
        if(divcontent.innerHTML !=""){
            divcontent.style.display = "block"
        }
        btn.onclick = function(){
            divprice.innerHTML  = totalprice
            divprice.style.display = "block"
        }
    }
})

