// Get all 'Buy' buttons
const buyButtons = document.querySelectorAll('.remove-item-button');

// Get the existing table where the selected products will be added
const selectedProductsTable = document.createElement('table');
selectedProductsTable.id = 'selectedProductsTable';
document.body.appendChild(selectedProductsTable);

// Function to handle adding selected products to new table
function addToSelectedProducts(event) {
    const productDetails = event.target.parentElement;

    // Create a new row in the table for the selected product
    const newRow = selectedProductsTable.insertRow();

    // Add image cell
    const imgCell = newRow.insertCell();
    const img = document.createElement('img');
    img.src = productDetails.querySelector('.my-item-image').src;
    imgCell.appendChild(img);

    // Add store name cell
    const storeCell = newRow.insertCell();
    storeCell.textContent = productDetails.querySelector('.twenty').textContent;

    // Add price cell
    const priceCell = newRow.insertCell();
    priceCell.textContent = productDetails.querySelector('.prise').textContent;

    // Add delete button cell
    const deleteCell = newRow.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        selectedProductsTable.deleteRow(this.parentNode.parentNode.rowIndex);
    });
    deleteCell.appendChild(deleteButton);
}

// Add click event listener to each 'Buy' button
buyButtons.forEach(button => {
    button.addEventListener('click', addToSelectedProducts);
});
