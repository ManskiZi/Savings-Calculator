// Define a receipt with prices
const receipt = [21.99, 10.67, 18.50];

// Function to extract the cents portion from a price
function getCents(price) {
  const splitPrice = price.toString().split(".");
  return splitPrice[1];
}

// Function to check if the total cost of items in a receipt exceeds $50
function getsDiscount(rec) {
  let total = 0;
  for (let i = 0; i < rec.length; i++) {
    total += rec[i];
  }
  if (total > 50) {
    return true; // Apply a discount if the total is greater than $50
  } else {
    return false;
  }
}

// Function to determine the discount rate based on cents
function findDiscount(price) {
  let cents = getCents(price);
  if (cents == 67) {
    return 0.3; // Apply a 30% discount for prices ending in 67 cents
  } else if (cents == 95) {
    return 0.4; // Apply a 40% discount for prices ending in 95 cents
  } else if (cents == 99) {
    return 0.5; // Apply a 50% discount for prices ending in 99 cents
  } else {
    return 0; // No discount for other cents
  }
}

// Function to calculate the total cost, taking into account discounts
function calculateTotal(receipt) {
  let total = 0;
  let totalSavings = 0;
  for (let i = 0; i < receipt.length; i++) {
    let originalPrice = receipt[i];
    if (getsDiscount(receipt) == true) {
      let discountRate = findDiscount(originalPrice);
      const savings = originalPrice * discountRate;
      totalSavings = totalSavings + savings;
      let discountedPrice = originalPrice - savings;
      total += discountedPrice;

      if (discountRate != 0) {
        console.log(savings.toFixed(2)); // Display savings for each item
      }
    } else {
      total += originalPrice;
    }
  }
  console.log("Total Saved: " + totalSavings.toFixed(2)); // Display total savings
  console.log("Total Post-Discount: " + total.toFixed(2)); // Display total cost after discounts
}

// Calculate and display the total cost for the given receipt
calculateTotal(receipt);
