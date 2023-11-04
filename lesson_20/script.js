const container = document.getElementById(`container`)

const API = `https://6519440e818c4e98ac60353a.mockapi.io`

const getData = (path) => {
    return fetch(API + `/${path}`)
        .then((data) => {
            if(data.ok) return data.json()
            else return Promise.reject(data.status)
        })
}

const putData = (path, id, data) => {
    return fetch(API + `/${path}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    })
    .then((data) => {
        if(data.ok) return data.json()
        else return Promise.reject(data.status)
    });
}

const deleteData = (path, id) => {
    return fetch(API + `/${path}/${id}`, {
        method: 'DELETE',
    })
    .then((data) => {
        if(data.ok) return data.json()
        else return Promise.reject(data.status)
    });
}

const postData = (path, data) => {
    return fetch(API + `/${path}`, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then((data) => {
        if(data.ok) return data.json()
        else return Promise.reject(data.status)
    });
}


const getColumn = (element, column) => {
    const td = document.createElement(`td`)

    if(column === `name` || column === `comics`) {
        td.innerHTML = element[column]
    } else if(column === `favourite`) {
        const checkbox = document.createElement(`input`)
        checkbox.type = `checkbox`
        checkbox.checked = element[column]

        checkbox.addEventListener(`change`, (el) => {
            putData('heroes', element['id'], { ...element, favourite: el.target.checked })
            .then(() => {
                console.log('Hero favourite has changed');
            });
        })

        td.append(checkbox)
    } else if(column === `actions`) {
        const button = document.createElement(`button`)
        button.innerHTML = `Delete`;

        button.addEventListener(`click`, () => {
            deleteData('heroes', element['id'])
            .then(() => {
                const currentRow = document.getElementById(`hero_${element['id']}`);

                if (currentRow) {
                    currentRow.remove();
                }
            })
        })

        td.append(button)
    }

    return td
}

const getRow = (element, columns) => {
    const tr = document.createElement(`tr`);
    tr.setAttribute('id', `hero_${element['id']}`);

    columns.forEach((column) => {
        tr.append(getColumn(element, column))
    });

    return tr
}

const getBody = (data, columns) => {
    const tBody = document.createElement(`tbody`)

    data.forEach((element) => {
        tBody.append(getRow(element, columns))
    });

    return tBody
}

const getColumns = (element) => {
    const columns = Object.keys(element).filter((key) => {
        return key !== 'id'
    });

    columns.push(`actions`);

    return columns;
}

const appendRow = (element) => {
    const columns = getColumns(element);
    const row = getRow(element, columns);
    const tbody = document.getElementsByTagName('tbody');

    if (tbody) {
        tbody[0].append(row);
    }
}

const buildTable = (data) => {
    const table = document.createElement(`table`);
    const thead = document.createElement(`thead`)
    const trH = document.createElement(`tr`)
    const columns = getColumns(data[0]);

    columns.forEach((key) => {
        const th = document.createElement(`th`)

        th.innerHTML = key[0].toUpperCase() + key.slice(1)
        trH.append(th)
    });

    table.setAttribute('class', 'styled-table');

    thead.append(trH)
    table.append(thead)
    table.append(getBody(data, columns))
    container.append(table)
}

const getAllData = () => {
    getData(`heroes`)
        .then(data => {
            buildTable(data)
        })
        .catch((err) => {console.log(`in catch ${err}`);}) 
};

getAllData()

const getComics = () => {
    getData(`comics`)
        .then(data => {
            const select = document.getElementById('comicsSelect');

            data.forEach((comic) => {
                const option = document.createElement('option');
                option.value = comic.id;
                option.text = comic.name;
                select.append(option);
            });
        })
    .catch((err) => {console.log(`in catch ${err}`);}) 
}

getComics();

const cleanForm = () => {
    const name = document.getElementById('name');
    const comics = document.getElementById('comicsSelect');
    const favourite = document.getElementById('favourite');

    name.value = '';
    comics.value = null;
    favourite.checked = false;

}

const form = document.getElementById(`form`)

form.addEventListener(`submit`, (el) => {
    el.preventDefault();

    const name = document.getElementById('name').value;
    const comics = document.getElementById('comicsSelect').value;
    const favourite = document.getElementById('favourite').checked;

    postData(`heroes`, { name, comics, favourite })
    .then((data) => {
        appendRow(data);
        cleanForm();
    });
})



