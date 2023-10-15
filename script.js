//your JS code here. If required.
const modal = document.getElementById('modal')
const open = document.getElementById('openModal')
function handleClick(){
	modal.style.display = "block"
}
function handleClose(){
	modal.style.display = "none"
}
// window.addEventListener("click", function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });

window.addEventListener('click',(e)=>{
	if(e.target !== open && !modal.contains(e.target)){
	handleClose()
	}
})