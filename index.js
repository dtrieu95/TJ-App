const sku = document.getElementById ('sku');
const form = document.getElementById("search");
const searchResultDiv = document.getElementById("searchresult");

form.addEventListener("submit", (e) =>{
    // prevents a page refresh
    e.preventDefault();

    // converting input to number
    // calling search using number
    const product = search(parseInt(sku.value, 10));
    
    // creates <p> element
    const resultTitle = document.createElement("p");

    // populates <p> element with product info
    resultTitle.innerText = 
    `${product.name} $${product.price}
    ${product.description}`

    // creates <btn> element
    const btn = document.createElement("button");
    btn.innerHTML = "X";

    // adding click event listener
    btn.addEventListener("click", event =>{
        // const target = event.target;
        // const parent = target.parentElement;
        const parent = event.target.parentElement;
        parent.remove()
    });

    // creating result <div>
    const resultDiv = document.createElement('div');

    // populate result <div> with product info and x button
    resultDiv.appendChild(resultTitle)
    resultDiv.appendChild(btn)

    // appends result <div> to page
    searchResultDiv.appendChild(resultDiv)
});
    


