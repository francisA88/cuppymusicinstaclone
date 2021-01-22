const popup = document.querySelector(".popup-background")
const trigger = document.querySelector("#popup-trigger")
const cancelBtn = document.querySelector(".popup>.cancel")
trigger.addEventListener("click", (e)=>{
  popup.style.display = "flex";
})
cancelBtn.onclick = e=>popup.style.display = "none"