// ===========================================================================================================================> GLOBAL VARS
let fetchResponses = 0;
let maxFetch = 6;

let bcNormal;
let bcClassic;
let helmetNormal;
let helmetBestseller;
let scNormal;
let scBestseller;

let buttonRef;

// =======================================================================================================================> BC NORMAL CARDS
const mostrarBcNormalCards = () => {
    
    const container = document.getElementById("bc-normal");

    if (localStorage.getItem("bcNormal") === null) {

        console.log("bcNormal does not exist in localstorage");

        let tmpProduct;
        let products = [];

        bcNormal.forEach((post) => {

            tmpProduct = {};

            tmpProduct.image = post.image;
            tmpProduct.detail = post.detail;
            tmpProduct.pilot = post.pilot;
            tmpProduct.info = post.info;
            tmpProduct.price = post.price;
            tmpProduct.amount = post.amount;
            tmpProduct.id = post.id;

            products.push(tmpProduct);

        });
        
        localStorage.setItem("bcNormal", JSON.stringify(products));

    };

    bcNormal = [];

    let storageProducts = JSON.parse(localStorage.getItem('bcNormal'));

    for (var i = 0; i < storageProducts.length; i++) {

        tmpProduct = {};

        tmpProduct.image = storageProducts[i].image;
        tmpProduct.detail = storageProducts[i].detail;
        tmpProduct.pilot = storageProducts[i].pilot;
        tmpProduct.info = storageProducts[i].info;
        tmpProduct.price = storageProducts[i].price;
        tmpProduct.amount = storageProducts[i].amount;
        tmpProduct.id = storageProducts[i].id;

        bcNormal.push(tmpProduct);
        
    };
    
    bcNormal.forEach((post) => {

        const div = document.createElement("div");
        div.classList.add("swiper-slide");
        div.innerHTML = `                    
                        <div class="product-container">
                            <div class="product-content">
                                <div class="product-info">
                                    <div class="product-image-container">
                                        <img class="product-image" src= ${post.image} >
                                    </div>
                                    <div class="bc-detail">
                                        <h4 class="bc-detail-text"> ${post.detail} </h4>
                                    </div>
                                    <h2 class="product-pilot"> ${post.pilot} </h2>
                                    <h3 class="product-category"> ${post.info} </h3>
                                    <h3 class="product-price"> $${post.price} </h3>
                                    <h3 class="product-amount"> ${post.amount} </h3>
                                    <h3 class="product-id"> ${post.id} </h3>
                                    <button class="add-button">agregar</button>
                                </div>
                            </div>
                        </div>
                        `;

        container.appendChild(div);

    });

    countFetch("bcNormal");

};

// ======================================================================================================================> BC CLASSIC CARDS
const mostrarBcClassicCards = () => {

    const container = document.getElementById("bc-classic");

    if (localStorage.getItem("bcClassic") === null) {

        console.log("bcClassic does not exist in localstorage");

        let tmpProduct;
        let products = [];

        bcClassic.forEach((post) => {

            tmpProduct = {};

            tmpProduct.image = post.image;
            tmpProduct.detail = post.detail;
            tmpProduct.pilot = post.pilot;
            tmpProduct.info = post.info;
            tmpProduct.price = post.price;
            tmpProduct.amount = post.amount;
            tmpProduct.id = post.id;

            products.push(tmpProduct);

        });
        
        localStorage.setItem("bcClassic", JSON.stringify(products));

    };

    bcClassic = [];

    let storageProducts = JSON.parse(localStorage.getItem("bcClassic"));

    for (var i = 0; i < storageProducts.length; i++) {

        tmpProduct = {};

        tmpProduct.image = storageProducts[i].image;
        tmpProduct.detail = storageProducts[i].detail;
        tmpProduct.pilot = storageProducts[i].pilot;
        tmpProduct.info = storageProducts[i].info;
        tmpProduct.price = storageProducts[i].price;
        tmpProduct.amount = storageProducts[i].amount;
        tmpProduct.id = storageProducts[i].id;

        bcClassic.push(tmpProduct);
        
    };
    
    bcClassic.forEach((post) => {

        const div = document.createElement("div");
        div.classList.add("swiper-slide");
        div.innerHTML = `                    
                        <div class="product-container">
                            <div class="product-content">
                                <div class="product-info">
                                    <div class="product-image-container">
                                        <img class="product-image" src= ${post.image} >
                                    </div>
                                    <div class="bc-detail-classics">
                                        <h4 class="bc-detail-classics-text"> ${post.detail} </h4>
                                    </div>
                                    <h2 class="product-pilot"> ${post.pilot} </h2>
                                    <h3 class="product-category"> ${post.info} </h3>
                                    <h3 class="product-price"> $${post.price} </h3>
                                    <h3 class="product-amount"> ${post.amount} </h3>
                                    <h3 class="product-id"> ${post.id} </h3>
                                    <button class="add-button">agregar</button>
                                </div>
                            </div>
                        </div>
                        `;

        container.appendChild(div);

    });

    countFetch("bcClassic");

};

// ===================================================================================================================> HELMET NORMAL CARDS
const mostrarHelmetNormalCards = () => {

    const container = document.getElementById("helmet-normal");

    if (localStorage.getItem("helmetNormal") === null) {

        console.log("helmetNormal does not exist in localstorage");

        let tmpProduct;
        let products = [];

        helmetNormal.forEach((post) => {

            tmpProduct = {};

            tmpProduct.image = post.image;
            tmpProduct.detail = post.detail;
            tmpProduct.pilot = post.pilot;
            tmpProduct.info = post.info;
            tmpProduct.price = post.price;
            tmpProduct.amount = post.amount;
            tmpProduct.id = post.id;

            products.push(tmpProduct);

        });
        
        localStorage.setItem("helmetNormal", JSON.stringify(products));

    };

    helmetNormal = [];

    let storageProducts = JSON.parse(localStorage.getItem("helmetNormal"));

    for (var i = 0; i < storageProducts.length; i++) {

        tmpProduct = {};

        tmpProduct.image = storageProducts[i].image;
        tmpProduct.detail = storageProducts[i].detail;
        tmpProduct.pilot = storageProducts[i].pilot;
        tmpProduct.info = storageProducts[i].info;
        tmpProduct.price = storageProducts[i].price;
        tmpProduct.amount = storageProducts[i].amount;
        tmpProduct.id = storageProducts[i].id;

        helmetNormal.push(tmpProduct);
        
    };
    
    helmetNormal.forEach((post) => {

        const div = document.createElement("div");
        div.classList.add("swiper-slide");
        div.innerHTML = `                    
                        <div class="product-container">
                            <div class="product-content">
                                <div class="product-info">
                                    <div class="product-image-container">
                                        <img class="product-image" src= ${post.image} >
                                    </div>
                                    <h2 class="product-pilot"> ${post.pilot} </h2>
                                    <h3 class="product-category"> ${post.info} </h3>
                                    <h3 class="product-price"> $${post.price} </h3>
                                    <h3 class="product-amount"> ${post.amount} </h3>
                                    <h3 class="product-id"> ${post.id} </h3>
                                    <button class="add-button">agregar</button>
                                </div>
                            </div>
                        </div>
                        `;

        container.appendChild(div);

    });

    countFetch("helmetNormal");

};

// ===============================================================================================================> HELMET BESTSELLER CARDS
const mostrarHelmetBestsellerCards = () => {

    const container = document.getElementById("helmet-bestseller");

    if (localStorage.getItem("helmetBestseller") === null) {

        console.log("helmetBestseller does not exist in localstorage");

        let tmpProduct;
        let products = [];

        helmetBestseller.forEach( (post) => {

            tmpProduct = {};

            tmpProduct.image = post.image;
            tmpProduct.detail = post.detail;
            tmpProduct.pilot = post.pilot;
            tmpProduct.info = post.info;
            tmpProduct.price = post.price;
            tmpProduct.amount = post.amount;
            tmpProduct.id = post.id;

            products.push(tmpProduct);

        });
        
        localStorage.setItem("helmetBestseller", JSON.stringify(products));

    };

    helmetBestseller = [];

    let storageProducts = JSON.parse(localStorage.getItem("helmetBestseller"));

    for (var i = 0; i < storageProducts.length; i++) {

        tmpProduct = {};

        tmpProduct.image = storageProducts[i].image;
        tmpProduct.detail = storageProducts[i].detail;
        tmpProduct.pilot = storageProducts[i].pilot;
        tmpProduct.info = storageProducts[i].info;
        tmpProduct.price = storageProducts[i].price;
        tmpProduct.amount = storageProducts[i].amount;
        tmpProduct.id = storageProducts[i].id;

        helmetBestseller.push(tmpProduct);
        
    };
    
    helmetBestseller.forEach((post) => {

        const div = document.createElement("div");
        div.classList.add("swiper-slide");
        div.innerHTML = `                    
                        <div class="product-container">
                            <div class="product-content">
                                <div class="product-info">
                                    <div class="product-image-container">
                                        <img class="product-image" src= ${post.image} >
                                    </div>
                                    <div class="helmet-detail">
                                        <h4 class="helmet-detail-text"> ${post.detail} </h4>
                                    </div>
                                    <h2 class="product-pilot"> ${post.pilot} </h2>
                                    <h3 class="product-category"> ${post.info} </h3>
                                    <h3 class="product-price"> $${post.price} </h3>
                                    <h3 class="product-amount"> ${post.amount} </h3>
                                    <h3 class="product-id"> ${post.id} </h3>
                                    <button class="add-button">agregar</button>
                                </div>
                            </div>
                        </div>
                        `;

        container.appendChild(div);

    });

    countFetch("helmetBestseller");

};

// =======================================================================================================================> SC NORMAL CARDS
const mostrarScNormalCards = () => {

    const container = document.getElementById("sc-normal");

    if (localStorage.getItem("scNormal") === null) {

        console.log("scNormal does not exist in localstorage");

        let tmpProduct;
        let products = [];

        scNormal.forEach((post) => {

            tmpProduct = {};

            tmpProduct.image = post.image;
            tmpProduct.detail = post.detail;
            tmpProduct.pilot = post.pilot;
            tmpProduct.info = post.info;
            tmpProduct.price = post.price;
            tmpProduct.amount = post.amount;
            tmpProduct.id = post.id;

            products.push(tmpProduct);

        });
        
        localStorage.setItem("scNormal", JSON.stringify(products));

    };

    scNormal = [];

    let storageProducts = JSON.parse(localStorage.getItem("scNormal"));

    for (var i = 0; i < storageProducts.length; i++) {

        tmpProduct = {};

        tmpProduct.image = storageProducts[i].image;
        tmpProduct.detail = storageProducts[i].detail;
        tmpProduct.pilot = storageProducts[i].pilot;
        tmpProduct.info = storageProducts[i].info;
        tmpProduct.price = storageProducts[i].price;
        tmpProduct.amount = storageProducts[i].amount;
        tmpProduct.id = storageProducts[i].id;

        scNormal.push(tmpProduct);
        
    };
    
    scNormal.forEach((post) => {

        const div = document.createElement("div");
        div.classList.add("swiper-slide");
        div.innerHTML = `                    
                        <div class="product-container">
                            <div class="product-content">
                                <div class="product-info">
                                    <div class="product-image-container">
                                        <img class="product-image" src= ${post.image} >
                                    </div>
                                    <h2 class="product-pilot"> ${post.pilot} </h2>
                                    <h3 class="product-category"> ${post.info} </h3>
                                    <h3 class="product-price"> $${post.price} </h3>
                                    <h3 class="product-amount"> ${post.amount} </h3>
                                    <h3 class="product-id"> ${post.id} </h3>
                                    <button class="add-button">agregar</button>
                                </div>
                            </div>
                        </div>
                        `;

        container.appendChild(div);

    });

    countFetch("scNormal");

};

// ===================================================================================================================> SC BESTSELLER CARDS
const mostrarScBestsellerCards = () => {

    const container = document.getElementById("sc-bestseller");

    if (localStorage.getItem("scBestseller") === null) {

        console.log("scBestseller does not exist in localstorage");

        let tmpProduct;
        let products = [];

        scBestseller.forEach((post) => {

            tmpProduct = {};

            tmpProduct.image = post.image;
            tmpProduct.detail = post.detail;
            tmpProduct.pilot = post.pilot;
            tmpProduct.info = post.info;
            tmpProduct.price = post.price;
            tmpProduct.amount = post.amount;
            tmpProduct.id = post.id;

            products.push(tmpProduct);

        });
        
        localStorage.setItem("scBestseller", JSON.stringify(products));

    };

    scBestseller = [];

    let storageProducts = JSON.parse(localStorage.getItem("scBestseller"));

    for (var i = 0; i < storageProducts.length; i++) {

        tmpProduct = {};

        tmpProduct.image = storageProducts[i].image;
        tmpProduct.detail = storageProducts[i].detail;
        tmpProduct.pilot = storageProducts[i].pilot;
        tmpProduct.info = storageProducts[i].info;
        tmpProduct.price = storageProducts[i].price;
        tmpProduct.amount = storageProducts[i].amount;
        tmpProduct.id = storageProducts[i].id;

        scBestseller.push(tmpProduct);
        
    };
    
    scBestseller.forEach((post) => {

        const div = document.createElement("div");
        div.classList.add("swiper-slide");
        div.innerHTML = `                    
                        <div class="product-container">
                            <div class="product-content">
                                <div class="product-info">
                                    <div class="product-image-container">
                                        <img class="product-image" src= ${post.image} >
                                    </div>
                                    <div class="sc-detail">
                                        <h4 class="sc-detail-text"> ${post.detail} </h4>
                                    </div>
                                    <h2 class="product-pilot"> ${post.pilot} </h2>
                                    <h3 class="product-category"> ${post.info} </h3>
                                    <h3 class="product-price"> $${post.price} </h3>
                                    <h3 class="product-amount"> ${post.amount} </h3>
                                    <h3 class="product-id"> ${post.id} </h3>
                                    <button class="add-button">agregar</button>
                                </div>
                            </div>
                        </div>
                        `;

        container.appendChild(div);

    });

    countFetch("scBestseller");

};

// =========================================================================================================================> BAG FUNCTIONS
// => Buying process
document.readyState == "loading" ? document.addEventListener("DOMContentLoaded", fetchCards) : fetchCards();

// => Buying process function
function buyProcess() {

    console.log("buyProcess");

    // => Add item to bag
    
    let addToBag = document.getElementsByClassName("add-button");

    for (let i = 0; i < addToBag.length; i++) {

        let button = addToBag[i];
        button.addEventListener("click", addToBagCliked);

    };

    // => Change item Quantity at bag
    let quantityInputs = document.getElementsByClassName("bag-quantity");

    for (let i = 0; i < quantityInputs.length; i++) {
        
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);

    };

    // => Remove items from bag
    let removeBagItem = document.getElementsByClassName("trash-icon");

    for (let i = 0; i < removeBagItem.length; i++) {

        let button = removeBagItem[i];
        button.addEventListener("click", removeBagItem);

    };
    
    // => Buy button work
    document.getElementsByClassName("bag-button-buy")[0].addEventListener("click", buyButtonCliked);

    checkForDisabling();

};

// => Add to bag by clicking function
function addToBagCliked(event) {

    let button = event.target;
    let shopProducts = button.parentElement;
    let image = shopProducts.getElementsByClassName("product-image")[0].src;
    let pilot = shopProducts.getElementsByClassName("product-pilot")[0].innerText;
    let category = shopProducts.getElementsByClassName("product-category")[0].innerText;
    let price = shopProducts.getElementsByClassName("product-price")[0].innerText;
    let stock = shopProducts.getElementsByClassName("product-amount")[0].innerText;
    let id = shopProducts.getElementsByClassName("product-id")[0].innerText;
    buttonRef = shopProducts.getElementsByClassName("add-button")[0];

    // => If the stock is greater than 0, the product is added to the bag
    if (stock > 0) {

        addProductToBag(image, pilot, category, price, stock, id);
        updateTotal();

    };
    
};

// => Item added to bag function
function addProductToBag(image, pilot, category, price, stock, id, amount) {
    
    amount == undefined && (amount = 1);

    let bagShopBox = document.createElement("div");
    bagShopBox.classList.add("bag-box");
    let bagItems = document.getElementsByClassName("bag-content")[0];
    let bagItemsId = bagItems.getElementsByClassName("bag-product-id");
    let bagItemsQuantity = bagItems.getElementsByClassName("bag-quantity");

    for (let i = 0; i < bagItemsId.length; i++) {

        if (bagItemsId[i].innerText == id) {

            if (bagItemsQuantity[i].value < Number(stock)) {

                bagItemsQuantity[i].value++

            } 
            
            else {

                swal.fire({ icon: "warning", title: "[ATENCION]", text: "¡producto sin stock!", showConfirmButton: false, timer: 2000, background: "#ffffff", color: "#0179fd", width: "13rem", })
                buttonRef.disabled = true;

            };

            return;

        };

    };
    
    let bagBoxContent = `
                        <!-- product image -->
                        <div class="product-image">
                            <img src= ${image} alt="">
                        </div>
    
                        <!-- product purchase details -->
                        <div class="detail-box">
    
                            <!-- pilot name and product info-->
                            <h3 class="bag-product-id">${id}</h3>
                            <h3 class="bag-product-title">${pilot}</h3>
                            <h3 class="bag-product-detail">${category}</h3>
    
    
                            <div class="quantity-price">
                                <!-- modify quantity -->
                                <input class="bag-quantity" type="number" value="${Number(amount)}" id="item-quantity" onchange="limitMax(this)" onfocusout="limitMax(this)"  onkeyup="limitMax(this)" min="1" max="${Number(stock)}">
                                <!-- product price -->
                                <h3 class="bag-price">${price}</h3>
                                <p>u.</p>
                            </div>
                                                
                        </div>
    
                        <!-- remove product from bag -->
                        <img class="trash-icon" src="image/icons/bag-section/trash-icon.png" alt="">
    `;
    
    bagShopBox.innerHTML = bagBoxContent;
    bagItems.append(bagShopBox);
    bagShopBox.getElementsByClassName("trash-icon")[0].addEventListener("click", removeBagItem);
    bagShopBox.getElementsByClassName("bag-quantity")[0].addEventListener("change", quantityChanged);

};

// => Quantity changes function
function quantityChanged(event) {

    let input = event.target;

    (isNaN(input.value) || input.value <= 0) && (input.value = 1);

    updateTotal();

};

// => Remove items from bag funtion
function removeBagItem(event) {

    let buttonCliked = event.target;
    let currentID = (buttonCliked.parentElement.children[1].children[0].innerText);

    // => Warning Question
    Swal.fire({

        title: "¿eliminar?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#ff0100",
        cancelButtonColor: "#0daf02",
        confirmButtonText: "aceptar",
        cancelButtonText: "cancelar",
        width: "12rem",

    })
    
    .then((result) => {

        // => If confirmed, the product is removed
        if (result.isConfirmed) {

            removeFromStorage(currentID);
            buttonCliked.parentElement.remove();
            updateTotal();

            // => Product removed message
            Swal.fire({

                icon: "error",
                title: "Producto",
                text: "¡eliminado!",
                showConfirmButton: false,
                timer: 3000,
                width: "11rem",

            });
            
            let tmpCards = document.getElementsByClassName("product-container");

            for (let i = 0; i < tmpCards.length; i++) {

                let tmpCard = tmpCards[i];
                let tmpButton = tmpCard.getElementsByClassName("product-id");
                let btn = tmpButton[0];

                if (btn.innerText == currentID) {

                    let cardButton = tmpCard.getElementsByClassName("add-button")[0];
                    cardButton.disabled = false;

                };

            };

        }
        
        // => On the contrary, the product is preserved
        else {

            // => Preserved product message
            Swal.fire({

                icon: "success",
                title: "Producto",
                text: "¡conservado!",
                showConfirmButton: false,
                timer: 3000,
                width: "11rem",

            });

        };

    });   

};

//=> Update stock function
function updateStock() {

    let bagItems = document.getElementsByClassName("bag-content")[0];
    let bagItemsId = bagItems.getElementsByClassName("bag-product-id");
    let bagItemsQuantity = bagItems.getElementsByClassName("bag-quantity");

    for (let i = 0; i < bagItemsId.length; i++) {

        let strID = bagItemsId[i].innerText.trim();
        let strQuantity = Number(bagItemsQuantity[i].value);
        let strFirst2 = strID.substring(0,3);

        if (strFirst2 == "bcn") {

            updateStockBCN(strID, strQuantity);

        } 
        
        else if (strFirst2 == "bcc") {

            updateStockBCC(strID, strQuantity);

        } 
        
        else if (strFirst2 == "hen") {

            updateStockHEN(strID, strQuantity);

        } 
        
        else if (strFirst2 == "heb") {

            updateStockHEB(strID, strQuantity);

        } 
        
        else if (strFirst2 == "scn") {

            updateStockSCN(strID, strQuantity);

        } 
        
        else if (strFirst2 == "scb") {

            updateStockSCB(strID, strQuantity);

        };

    };

};

// => Update bcNormal stock
function updateStockBCN(productID, productQuantity) {

    let products = [];

    for (i = 0; i < bcNormal.length; i++) {

        if (bcNormal[i].id == productID) {

            if (localStorage.getItem("bcNormal")) {

                let storageProducts = JSON.parse(localStorage.getItem("bcNormal"));
                products = storageProducts.filter(product => product.id !== productID );  

            };

            tmpProduct = {};

            tmpProduct.image = bcNormal[i].image;
            tmpProduct.detail = bcNormal[i].detail;
            tmpProduct.pilot = bcNormal[i].pilot;
            tmpProduct.info = bcNormal[i].info;
            tmpProduct.price = bcNormal[i].price;
            tmpProduct.amount = bcNormal[i].amount - productQuantity;
            tmpProduct.id = bcNormal[i].id;

            products.splice(i, 0, tmpProduct); 

        };

    };

    localStorage.setItem("bcNormal", JSON.stringify(products));

};

// => Update bcClassic stock
function updateStockBCC(productID, productQuantity) {

    let products = [];

    for (i = 0; i < bcClassic.length; i++) {

        if (bcClassic[i].id == productID) {

            if (localStorage.getItem("bcClassic")) {

                let storageProducts = JSON.parse(localStorage.getItem("bcClassic"));
                products = storageProducts.filter(product => product.id !== productID );    

            };

            tmpProduct = {};

            tmpProduct.image = bcClassic[i].image;
            tmpProduct.detail = bcClassic[i].detail;
            tmpProduct.pilot = bcClassic[i].pilot;
            tmpProduct.info = bcClassic[i].info;
            tmpProduct.price = bcClassic[i].price;
            tmpProduct.amount = bcClassic[i].amount - productQuantity;
            tmpProduct.id = bcClassic[i].id;

            products.splice(i, 0, tmpProduct); 
        };

    };
    
    localStorage.setItem("bcClassic", JSON.stringify(products));

};

// => Update helmetNormal stock
function updateStockHEN(productID, productQuantity) {

    let products = [];

    for (i = 0; i < helmetNormal.length; i++) {

        if (helmetNormal[i].id == productID) {

            if (localStorage.getItem("helmetNormal")) {

                let storageProducts = JSON.parse(localStorage.getItem("helmetNormal"));
                products = storageProducts.filter(product => product.id !== productID );   

            };

            tmpProduct = {};

            tmpProduct.image = helmetNormal[i].image;
            tmpProduct.detail = helmetNormal[i].detail;
            tmpProduct.pilot = helmetNormal[i].pilot;
            tmpProduct.info = helmetNormal[i].info;
            tmpProduct.price = helmetNormal[i].price;
            tmpProduct.amount = helmetNormal[i].amount - productQuantity;
            tmpProduct.id = helmetNormal[i].id;

            products.splice(i, 0, tmpProduct); 

        };

    };
    
    localStorage.setItem("helmetNormal", JSON.stringify(products));

};

// => Update helmetBestseller stock
function updateStockHEB(productID, productQuantity) {

    let products = [];

    for (i = 0; i < helmetBestseller.length; i++) {

        if (helmetBestseller[i].id == productID) {

            if (localStorage.getItem("helmetBestseller")) {

                let storageProducts = JSON.parse(localStorage.getItem("helmetBestseller"));
                products = storageProducts.filter(product => product.id !== productID ); 

            };

            tmpProduct = {};

            tmpProduct.image = helmetBestseller[i].image;
            tmpProduct.detail = helmetBestseller[i].detail;
            tmpProduct.pilot = helmetBestseller[i].pilot;
            tmpProduct.info = helmetBestseller[i].info;
            tmpProduct.price = helmetBestseller[i].price;
            tmpProduct.amount = helmetBestseller[i].amount - productQuantity;
            tmpProduct.id = helmetBestseller[i].id;

            products.splice(i, 0, tmpProduct); 

        };

    };
    
    localStorage.setItem("helmetBestseller", JSON.stringify(products));

};

// => Update scNormal stock
function updateStockSCN(productID, productQuantity) {

    let products = [];

    for (i = 0; i < scNormal.length; i++) {

        if (scNormal[i].id == productID) {

            if (localStorage.getItem("scNormal")) {

                let storageProducts = JSON.parse(localStorage.getItem("scNormal"));
                products = storageProducts.filter(product => product.id !== productID ); 

            };

            tmpProduct = {};

            tmpProduct.image = scNormal[i].image;
            tmpProduct.detail = scNormal[i].detail;
            tmpProduct.pilot = scNormal[i].pilot;
            tmpProduct.info = scNormal[i].info;
            tmpProduct.price = scNormal[i].price;
            tmpProduct.amount = scNormal[i].amount - productQuantity;
            tmpProduct.id = scNormal[i].id;

            products.splice(i, 0, tmpProduct); 

        };

    };
    
    localStorage.setItem("scNormal", JSON.stringify(products));

};

// => Update scBestseller stock
function updateStockSCB(productID, productQuantity) {

    let products = [];

    for (i = 0; i < scBestseller.length; i++) {

        if (scBestseller[i].id == productID) {

            if (localStorage.getItem("scBestseller")) {

                let storageProducts = JSON.parse(localStorage.getItem("scBestseller"));
                products = storageProducts.filter(product => product.id !== productID );   

            };

            tmpProduct = {};

            tmpProduct.image = scBestseller[i].image;
            tmpProduct.detail = scBestseller[i].detail;
            tmpProduct.pilot = scBestseller[i].pilot;
            tmpProduct.info = scBestseller[i].info;
            tmpProduct.price = scBestseller[i].price;
            tmpProduct.amount = scBestseller[i].amount - productQuantity;
            tmpProduct.id = scBestseller[i].id;

            products.splice(i, 0, tmpProduct); 

        };

    };
    
    localStorage.setItem("scBestseller", JSON.stringify(products));

};

// => Buy button function
function buyButtonCliked() {

    console.log("buyButtonCliked");
    let bagContent = document.getElementsByClassName("bag-content")[0];

    updateStock();

    if (bagContent.hasChildNodes()) {

        Toastify({

            text: "compra procesada con exito",
            duration: 4000,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true,

        })
        
        .showToast();

    };

    refreshCards();
    buyProcess();
    emptyBag();
    localStorage.removeItem("products");
    updateTotal();
    
};

// => Resfresh cards stock function
function refreshCards() {

    let container;
    
    container = document.getElementById("bc-normal");

    while (container.hasChildNodes()) {

        container.removeChild(container.firstChild);

    };

    container = document.getElementById("bc-classic");

    while (container.hasChildNodes()) {

        container.removeChild(container.firstChild);

    };

    container = document.getElementById("helmet-normal");

    while (container.hasChildNodes()) {

        container.removeChild(container.firstChild);

    };

    container = document.getElementById("helmet-bestseller");

    while (container.hasChildNodes()) {

        container.removeChild(container.firstChild);

    };

    container = document.getElementById("sc-normal");

    while (container.hasChildNodes()) {

        container.removeChild(container.firstChild);

    };

    container = document.getElementById("sc-bestseller");

    while (container.hasChildNodes()) {

        container.removeChild(container.firstChild);

    };

    mostrarBcNormalCards();
    mostrarBcClassicCards();
    mostrarHelmetNormalCards();
    mostrarHelmetBestsellerCards();
    mostrarScNormalCards();
    mostrarScBestsellerCards();

    buildSlider();

};

// => Empty bag function
function emptyBag() {

    let bagContent = document.getElementsByClassName("bag-content")[0];
    let bagBoxes = bagContent.getElementsByClassName("bag-box");

    while (bagContent.hasChildNodes()) {

        bagContent.removeChild(bagContent.firstChild);

    };

    let btn = document.getElementById("buy-button");

    bagBoxes.length > 0 ? btn.disabled = false : btn.disabled = true;

};

// => Update total function
function updateTotal() {

    let bagContent = document.getElementsByClassName("bag-content")[0];
    let bagBoxes = bagContent.getElementsByClassName("bag-box");
    let total = 0;
    let btn = document.getElementById("buy-button");

    let totalQuantity = 0;

    bagBoxes.length > 0 ? btn.disabled = false : btn.disabled = true;

    for (let i = 0; i < bagBoxes.length; i++) {

        let bagBox = bagBoxes[i];
        let priceElement = bagBox.getElementsByClassName("bag-price")[0];
        let quantityElement = bagBox.getElementsByClassName("bag-quantity")[0];
        let price = Number(priceElement.innerText.replace("$", ""))
        let quantity = quantityElement.value;
        total = total + (price * quantity);

        totalQuantity += Number(quantity);

        let id = bagBox.getElementsByClassName("bag-product-id")[0].innerText;
        let image = bagBox.getElementsByClassName("product-image")[0].children[0].getAttribute("src");
        let pilot = bagBox.getElementsByClassName("bag-product-title")[0].innerText;
        let category = bagBox.getElementsByClassName("bag-product-detail")[0].innerText;
        let amount = bagBox.getElementsByClassName("bag-quantity")[0].getAttribute("max");
        let tmpQuantity = quantity;  

        saveToStorage(id, image, pilot, category, Number(amount), Number(tmpQuantity), price);    

    };

    let quantitySpan = document.getElementById("counter");
    quantitySpan.innerText = totalQuantity;

    document.getElementsByClassName("bag-total-price")[0].innerText = "$" + total;  

};

// => Save to local storage function
function saveToStorage(id, image, pilot, category, stock, amount, price){

    let productID = id;
    let products = [];

	if (localStorage.getItem("products")) {

        let storageProducts = JSON.parse(localStorage.getItem("products"));
        products = storageProducts.filter(product => product.productID !== productID );

	};

    products.push({"productID" : id, "image" : image, "pilot" : pilot, "category" : category, "stock" : Number(stock), "amount" : Number(amount), "price" : price});

    localStorage.setItem("products", JSON.stringify(products));

};

// => Remove from local storage function
function removeFromStorage(id) {

    let productID = id;
	let storageProducts = JSON.parse(localStorage.getItem("products"));
    let products = storageProducts.filter(product => product.productID !== productID );
    localStorage.setItem("products", JSON.stringify(products));

};

// Load bag from local storage function
function loadBagFromStorage() {

	let storageProducts = JSON.parse(localStorage.getItem("products"));

    try {

        for (var i = 0; i < storageProducts.length; i++) {

            let productID = storageProducts[i].productID;
            let image = storageProducts[i].image;
            let pilot = storageProducts[i].pilot;
            let category = storageProducts[i].category;
            let stock = storageProducts[i].stock;
            let amount = storageProducts[i].amount;
            let price = storageProducts[i].price;

            addProductToBag(image, pilot, category, price, stock, productID, amount);
            
        };

        updateTotal();

    } 
    
    catch(error) {

        console.log("products does not exist in localstorage");

    };

};

// => Getting products data from jason
function fetchCards() {

    fetch("./json/bcNormal.json")

        .then( (response) => response.json() )
        .then( (data) => {

            bcNormal = data;
            console.log(bcNormal);
            mostrarBcNormalCards();

        });
        
    fetch("./json/bcClassic.json")

        .then( (response) => response.json() )
        .then( (data) => {

            bcClassic = data;
            console.log(bcClassic);
            mostrarBcClassicCards();

        });

    fetch("./json/helmetNormal.json")

        .then( (response) => response.json() )
        .then( (data) => {

            helmetNormal = data;
            console.log(helmetNormal);
            mostrarHelmetNormalCards();

        });

    fetch("./json/helmetBestseller.json")

        .then( (response) => response.json() )
        .then( (data) => {

            helmetBestseller = data;
            console.log(helmetBestseller);
            mostrarHelmetBestsellerCards();

        });

    fetch("./json/scNormal.json")

        .then( (response) => response.json() )
        .then( (data) => {

            scNormal = data;
            console.log(scNormal);
            mostrarScNormalCards();

        });
        
    fetch("./json/scBestseller.json")

        .then( (response) => response.json() )
        .then( (data) => {

            scBestseller = data;
            console.log(scBestseller);
            mostrarScBestsellerCards();

        });

};

// => Limmit quantity at input
function limitMax(element) {

    let maxValue = element.getAttribute("max");

    if (Number(element.value) > Number(maxValue)) {

        element.value = maxValue;

        Swal.fire({

            icon: "info",
            title: "[stock maximo]",
            text: maxValue + " unidades",
            showConfirmButton: false,
            timer: 4000,
            background: "#ffffff",
            color: "#0179fd", 
            width: "15rem",

        });

    };

};

//=> function to disable add button
function checkForDisabling(){

    let tmpBagItem = document.getElementsByClassName("bag-product-id");
    let tmpBagItemQuantity = document.getElementsByClassName("bag-quantity");
    let tmpCards = document.getElementsByClassName("product-container");

    for (let ia = 0; ia < tmpBagItem.length; ia++) {

        let currentID = tmpBagItem[ia].innerText;
        let bagAmount = Number(tmpBagItemQuantity[ia].value);

        for (let i = 0; i < tmpCards.length; i++) {

            let tmpCard = tmpCards[i];
            let tmpButton = tmpCard.getElementsByClassName("product-id");
            let tmpAmount = Number(tmpCard.getElementsByClassName("product-amount")[0].innerText);

            let btn = tmpButton[0];
    
            if (btn.innerText == currentID && bagAmount == tmpAmount) {

                let cardButton = tmpCard.getElementsByClassName("add-button")[0];
                cardButton.disabled = true;

            };
    
        };

    };

    for (let i = 0; i < tmpCards.length; i++) {

        let tmpCard = tmpCards[i];
        // let tmpButton = tmpCard.getElementsByClassName("product-id");
        let tmpAmount = Number(tmpCard.getElementsByClassName("product-amount")[0].innerText);
        // let btn = tmpButton[0];

        if (tmpAmount == 0) {

            let cardButton = tmpCard.getElementsByClassName("add-button")[0];
            cardButton.disabled = true;
        };
        
    };

};

// => Counting loaded fetchs
function countFetch(which) {

    console.log("loading fetch " + which);

    fetchResponses++;

    if (fetchResponses == maxFetch) {

        emptyBag();
        loadBagFromStorage();
        buildSlider();
        checkForDisabling();
        buyProcess();

    };

};