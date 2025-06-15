document.addEventListener ('DOMContentLoaded', ()=>{
	let form = document.querySelector('form')
	form.addEventListener('submit', (sub)=>{
		sub.preventDefault()
		buildList(sub.target.input.value)
		form.reset()
	})
})

function buildList(List){

	let li = document.createElement('ol')
	let btn = document.createElement('button')
    btn.addEventListener('click', removeName)
	btn.textContent = 'Remove'
	li.textContent = List 
	li.appendChild(btn)
	document.querySelector('#list').appendChild(li)
}

function removeName(r){
	r.target.parentNode.remove()
}