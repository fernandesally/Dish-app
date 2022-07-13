AFRAME.registerComponent("create-marker",{
  init:async function(){
    var mainscene=document.querySelector("#main-scene")
    var dishes=await this.getDishes()
    dishes.map(dish=>{
      console.log(dish)
        var marker=document.createElement("a-marker")
        marker.setAttribute("id",dish.id)
        marker.setAttribute("type","pattern")
        marker.setAttribute("url",dish.marker_pattern_url)
        marker.setAttribute("cursor",{rayOrigin:"mouse"})
        marker.setAttribute("marker-handler",{})
        mainscene.appendChild(marker)
        var model=document.createElement("a-entity")
        model.setAttribute("id", `#model-${dish.id}`)
        model.setAttribute("position",dish.model_geometry.position)
        model.setAttribute("rotation", dish.model_geometry.rotation)
        model.setAttribute("scale",dish.model_geometry.scale)
        model.setAttribute("gltf-model",dish.model_url)
        model.setAttribute("gesture-handler",{})
        marker.appendChild (model)
    })
  } ,
  getDishes:async function(){
    return firebase.firestore()
    .collection("Dishes").get().then(snap=>{return snap.docs.map(doc=>doc.data())})
} 
})