function hello(){
    let element = document.createElement('p');
    element.innerHTML = "hello webpack!";
    return element;
}
export {hello}
