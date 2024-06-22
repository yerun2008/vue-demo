window.onload = function() {
    let box = document.getElementsByClassName('box')[0];
    box.addEventListener('click', ()=> {
        alert('这是test分支的代码!');
    });
}