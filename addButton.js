AFRAME.registerComponent("addbutton",{
    init: function(){
        var button1=document.createElement("button")
        button1.innerHTML="rate dish"
        button1.setAttribute("id","rating-button")
        var button2=document.createElement("button")
        button2.innerHTML="order now"
        button2.setAttribute("id","order-button")
        button1.setAttribute("class","btn btn-warning ml-3 mr-3")
        button2.setAttribute("class","btn btn-warning mr-3")
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.appendChild(button1)
        buttonDiv.appendChild(button2)
    }
})