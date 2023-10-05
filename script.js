//your JS code here. If required.
const modal = document.getElementById('modal')
const open = document.getElementById('open')
function handleClick(){
	modal.style.display = "block"
}
function handleClose(){
	modal.style.display = "none"
}
document.addEventListener('click',(e)=>{
	if(e.target !== open && !modal.contains(e.target)){
	handleClose()
	}
})