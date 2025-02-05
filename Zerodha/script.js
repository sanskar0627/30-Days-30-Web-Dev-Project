const stocks = [
    { name: "TCS", price: "₹3450" },
    { name: "Reliance", price: "₹2500" },
    { name: "Infosys", price: "₹1550" },
    { name: "HDFC Bank", price: "₹1650" }
];

document.addEventListener("DOMContentLoaded", function () {
    let stocksContainer = document.getElementById("stocks");

    stocks.forEach(stock => {
        let stockDiv = document.createElement("div");
        stockDiv.innerHTML = `<h4>${stock.name}: ${stock.price}</h4>`;
        stocksContainer.appendChild(stockDiv);
    });
});
