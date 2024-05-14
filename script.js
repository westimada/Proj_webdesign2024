const itemList = document.getElementById("items-list");
const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function() {
  const itemValue = itemInput.value;
  
  // Perform your computation here based on the item value
  const computedValue = calculateSomething(itemValue);

  // Create a list item to display the result
  const listItem = document.createElement("li");
  listItem.textContent = `Item: ${itemValue} - Computed Value: ${computedValue}`;
  itemList.appendChild(listItem);

  // Clear the input field
  itemInput.value = "";
});

// Replace with your actual computation function
function calculateSomething(itemValue) {
  // Perform your calculation logic here and return the result
  // Example: Square the number
  return itemValue * itemValue;
}