function calculateTip(){
     
    // To get Input type[number] Values

    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

    // To calculate Tip & Total amount
    
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = tipAmount + billAmount;


    // To display results

    document.getElementById("tip-amount").textContent = "$" + tipAmount.toFixed(2);
    document.getElementById("total-amount").textContent = "$" + totalAmount.toFixed(2);
}