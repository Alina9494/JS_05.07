const PROMO = `PATRON`;

const PRODUCTS = [
    {
        id: 1,
        title: "iPhone 9",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69
    },
    {
        id: 2,
        title: "iPhone X",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09
    },
    {
        id: 4,
        title: "OPPOF19",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3
    },
    {
        id: 5,
        title: "Huawei P30",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09
    },
    {
        id: 6,
        title: "MacBook Pro",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25
    }
]

let promoCode = prompt(`Enter your promo code`);

const validCode = (code) => {
    if(code !== null){
        code = code.replaceAll(' ', '').toUpperCase()
    }
    return code === PROMO
}

const getProductPrice = (item, sale) => {
    let currentValue = item.price;

    if(sale) {
        const promoPrice = currentValue - (currentValue / 100) * item.discountPercentage;
        return promoPrice.toFixed(2);
    }

    return currentValue;
}

const getTotalPrice = (arr, sale) => {
    return arr.reduce((returnValue, item) => {
        return returnValue += +getProductPrice(item, sale);
    }, 0)
}

const sortTable = confirm(`Would you like to sort table by raiting?`)


const getTableRow = (item) => {
    let getColumns = Object
        .keys(item)
        .filter(key => key !== `id`)
        .map(key => {
            switch (key) {
                case `price`:
                    return `<td>${item[key] + `$`}</td>`
                case `discountPercentage`:
                    return `<td>${item[key] + `%`}</td>`
                default:
                    return `<td>${item[key]}</td>`
            }
        })
        .join(``)

    return `<tr>${getColumns}</tr>`
}

const renderProductsTable = (arr, sale, sort) => {
    const finalPrice = getTotalPrice(arr, sale);

    if(sort) {
        arr.sort((a, b) => b.rating - a.rating)
    }

    const rows = arr
        .map((item) => getTableRow(item))
        .join('')

    document.write(`
        <table>
            <thead>
                <tr>
                    <th>Product title</th>
                    <th>Product price</th>
                    <th>Product discount percentage</th>
                    <th>Product rating</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
            <tfoot>
                <tr>
                    <td colspan="4">Final price: ${finalPrice}$</td>
                </tr>
            </tfoot>
        </table>`
    );
}

renderProductsTable(PRODUCTS, validCode(promoCode), sortTable);









