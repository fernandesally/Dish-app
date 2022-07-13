AFRAME.registerComponent("marker-handler",{
    init:async function(){
        var dishes=await this.getDishes()
        this.el.addEventListener("markerFound",()=>{
            console.log("markerFound")
            var marker_id
            dishes.map(dish=>{marker_id=dish.id})
            console.log(marker_id)
            this.handleMarkerFound(dishes,marker_id)
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("markerLost")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound: function(dishes,marker_id){

        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="flex"
        var ratingButton=document.getElementById("rating-button")
        var orderButton=document.getElementById("order-button")
        ratingButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Rate Dish",
                text: "work in progress"
            })
        })
        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://imgur.com/4NZ6uLY",
                title:"THANK YOU FOR ORDERING",
                text: " your dish will be served soon"
            })
        })
        var dish=dishes.filter(dish=>dish.id===marker_id)[0]
        var model=document.querySelector(`#model-${dish.id}`)
        model.setAttribute("position",dish.model_geometry.position)
        model.setAttribute("rotation",dish.model_geometry.rotation)
        model.setAttribute("scale",dish.model_geometry.scale)
    },
    handleMarkerLost: function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"
    },
    getDishes:async function(){
        return await firebase.firestore()
        .collection("Dishes").get().then(snap=>{return snap.docs.map(doc=>doc.data())})
    }
})