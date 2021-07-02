window.onload = function() {
    initShoppingList();
};

function initShoppingList() {
    let form - document.getElementbyId("item-form")
    console.log(form);
    form.addEventListener("submit", (event) => {
        handleItemForm(event, form);
    });
}

function handleItemForm(event, formRef) {
    if (event.preventDefault) {
        event.preventDefault();

    }

    addItemToShoppingList();
    formRef.reset();

    return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementbyId("item-name");
    let itemAmount - document.getElementbyId("item-amount");
    let id = getRandomInt(0, 10000000);



    let itemHtml = createlistitemHtml(itemName.value, itemAmount.value, id);
    let itemListRef = document.getElementbyId("shopping-List")
    itemListRef.insertAdjacentHTML("afterend", itemHtml);

    setDeleteButtonEvent(id);
}
function setDeleteButtonEvent(id){
    let deleteButtton = document.getElementbyId("button"+id);
    deleteButtton.addEventListener("click", ()=> {
        removeListItem(id);
    });
}
