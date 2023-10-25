const addBtn1 = document.getElementById("addBtn1")
const addBtn2 = document.getElementById("addBtn2")
const addBtn3 = document.getElementById("addBtn3")
const addBtn4 = document.getElementById("addBtn4")

const cartList = document.getElementById('cartList')


addBtn1.addEventListener('click', () => {

    let li = document.createElement('li')
    li.innerText = "Product 1"+ " "+"=15$"
    
    let removeButton = document.createElement("button");
    removeButton.classList.add("bg-red-400", "hover:bg-red-600", "text-white", "py-2", "px-4", "rounded", "ml-10")
    removeButton.id = "removeButton"
    removeButton.innerHTML = 'Remove';
    li.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        const confirmRemove = confirm('Are you sure you want to remove this item?');

        if (confirmRemove) {
            li.remove();
        }
    })


    cartList.appendChild(li)
    alert("Added To Cart")

})
addBtn2.addEventListener('click', () => {

    let li = document.createElement('li')
    li.innerText = "Product 2"+ " "+"=10$"
    let removeButton = document.createElement("button");
    removeButton.classList.add("bg-red-400", "hover:bg-red-600", "text-white", "py-2", "px-4", "rounded", "ml-10")
    removeButton.id = "removeButton"
    removeButton.innerHTML = 'Remove';
    li.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        const confirmRemove = confirm('Are you sure you want to remove this item?');

        if (confirmRemove) {
            li.remove();
        }
    })


    cartList.appendChild(li)
    alert("Added To Cart")

})
addBtn3.addEventListener('click', () => {

    let li = document.createElement('li')
    li.innerText = "Product 3"+ " "+"=90$"
    let removeButton = document.createElement("button");
    removeButton.classList.add("bg-red-400", "hover:bg-red-600", "text-white", "py-2", "px-4", "rounded", "ml-10")
    removeButton.id = "removeButton"
    removeButton.innerHTML = 'Remove';
    li.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        const confirmRemove = confirm('Are you sure you want to remove this item?');

        if (confirmRemove) {
            li.remove();
        }
    })


    cartList.appendChild(li)
    alert("Added To Cart")

})
addBtn4.addEventListener('click', () => {

    let li = document.createElement('li')
    li.innerText = "Product 4"+ " "+"=20$"
    let removeButton = document.createElement("button");
    removeButton.classList.add("bg-red-400", "hover:bg-red-600", "text-white", "py-2", "px-4", "rounded", "ml-10")
    removeButton.id = "removeButton"
    removeButton.innerHTML = 'Remove';
    li.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        const confirmRemove = confirm('Are you sure you want to remove this item?');

        if (confirmRemove) {
            li.remove();
        }
    })


    cartList.appendChild(li)
    alert("Added To Cart")

})

