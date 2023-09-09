const main = () => {
    const parameters = new URLSearchParams(window.location.search);
    let params = {};
    const cleanUpData = (key) => {
        return key.split(",").map((ind) => ind.trim());
    };
    for (var value of parameters.keys()) {
        params[value] = parameters.get(value);
    }
    console.log(params);
    const {
        products,
        quantity,
        unitpricelbp,
        unitpriceusd,
        customer,
        location,
        date,
        totalLbp,
        totalusd,
    } = params;

    const prodArr = [];
    cleanUpData(products).forEach((name) => prodArr.push({ name }));
    cleanUpData(quantity).forEach(
        (quantity, i) => (prodArr[i].quantity = quantity)
    );
    cleanUpData(unitpricelbp).forEach(
        (unitpricelbp, i) => (prodArr[i].unitpricelbp = unitpricelbp)
    );
    cleanUpData(unitpriceusd).forEach(
        (unitpriceusd, i) => (prodArr[i].unitpriceusd = unitpriceusd)
    );

    const customerPart = document.querySelector("#customer");
    customerPart.innerHTML = customer;
    const locationPart = document.querySelector("#location");
    locationPart.innerHTML = location;
    const datePart = document.querySelector("#date");
    datePart.innerHTML = date;
    const tableBody = document.querySelector("#tableBod");

    prodArr.forEach((product) => {
        tableBody.innerHTML += `
        <tr>
        <td class="quantity">${product.quantity}</td>
        <td class="description">${product.name}</td>
        <td class="price">${product.unitpricelbp}</td>
        <td class="price">${product.unitpriceusd}</td>
        </tr>`;
    });
    const totalpricelbpPart = document.querySelector("#totalpricelbp");
    totalpricelbpPart.innerHTML = totalLbp;
    const totalpriceusdPart = document.querySelector("#totalpriceusd");
    totalpriceusdPart.innerHTML = totalusd;

    console.log(prodArr);
};
main();
