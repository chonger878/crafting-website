function remove(btn){
    btn.remove();
}

function addLike(id){
    var e = document.querySelector("#"+id)
    console.log(e)
    e.innerText++
}