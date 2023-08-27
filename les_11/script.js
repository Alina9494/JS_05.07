const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

const newArr = []
users.forEach((item) => {
    const name = item[0] + `!`;
    newArr.push(name)
});


const changeName = users.map((item) => {
    return item[0] + `?`
})

const filterArr = users.filter((item) => {
    return item.includes(`red`)
})

console.log(filterArr);

const totalScore = filterArr.reduce((returnValue, item) => {
    return returnValue += item[2]
}, 0)

console.log(totalScore);


const getRanderTable = arr => {

    arr = JSON.parse(JSON.stringify(arr))

    const TRs = arr
        .filter((item) => {
            return item.includes(`red`)
        })
        .map((item) => {
            return `<tr>${
                item.map((inner) => {

                    if(Array.isArray(inner)) {
                        inner = `
                        <ul>
                            <li>${inner.join(`</li><li>`)}</li>
                        </ul>`
                    }

                    return `<td>${inner}</td>`
                })
                .join(' ')
            }</tr>`
        })
        .join(` `)

   
    let table = `<table class="table_users">
        <thead>
            <tr>
                <th>Username</th>
                <th>Team</th>
                <th>Score</th>
                <th>Items</th>
            </tr>
        </thead>
        <tbody>${TRs}</tbody>
        <tfoot>
            <tr>
                <td colspan=\"4\">Total score: ${totalScore}</td>
            </tr>
        </tfoot>
    </table>`

    return table
}

document.write(getRanderTable(users))