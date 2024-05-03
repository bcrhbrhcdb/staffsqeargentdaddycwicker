const test1 = document.getElementById('d');
const test2 = document.getElementById('s');

test2.addEventListener('click', ()=>{
    test1.innerHTML = `<p>Hello World!</p>`
})