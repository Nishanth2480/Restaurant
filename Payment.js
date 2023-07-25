function showLoading(event, button) {
  event.preventDefault(); // Prevent form submission

  button.innerHTML = "Processing Payment...";

  setTimeout(function() {
    button.innerHTML = "Payment completed.";
  }, 3000);}