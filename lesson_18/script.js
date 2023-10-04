const calendarData = {
    days: [`Monday`, `Tuesday`, `Friday`],
    hours: {
      start: 10,
      end: 17,
    },
    todos: [
      {
        day: `Monday`,
        hour: 10,
        title: `First todo`,
      },
      {
        day: `Monday`,
        hour: 13,
        title: `Second todo`,
      },
      {
        day: `Tuesday`,
        hour: 12,
        title: `Third todo`,
      },
      {
        day: `Tuesday`,
        hour: 17,
        title: `Fourth todo`,
      },
      {
        day: `Friday`,
        hour: 14,
        title: `Fifth todo`,
      },
    ],
};

const container = document.querySelector(`#container`)

const renderTable = (list) => {
    list = JSON.parse(JSON.stringify(list))

    const table = document.createElement(`table`)
    table.classList.add("table__calendar");

    const thead = document.createElement(`thead`)
    const trH = document.createElement(`tr`);

    trH.append(document.createElement('th'));

    list.days.forEach((item) => {
        const th = document.createElement(`th`);
 
        th.innerHTML = item;
        trH.append(th)

        th.classList.add("head");
    });


    const tbody = document.createElement(`tbody`)

    for(let i = calendarData.hours.start; i <= calendarData.hours.end; i++) {
        const trB = document.createElement(`tr`);
        const td = document.createElement(`td`);

        td.innerHTML = `${i}:00`
        td.classList.add("column");
        trB.append(td);

        list.days.forEach((day) => {
            const td = document.createElement(`td`);
            td.classList.add("td")
            const todos = list.todos.filter(todo => todo.day === day && todo.hour === i);

            todos.forEach(item => {
                const div = document.createElement(`div`);
                div.classList.add("todo");

                const p = document.createElement(`p`);
                p.innerHTML = item.title

                div.addEventListener(`click`, () => {
                    div.classList.add("active");
                });


                const button = document.createElement(`button`)
                button.innerHTML = `Delete`;

                button.addEventListener(`click`, () => {
                    div.remove();
                });

                div.append(p);
                div.append(button);
                td.append(div)
            })

            trB.append(td)
        });
 

        tbody.append(trB)
    }

    container.append(table)
    table.append(thead)
    thead.append(trH)
    table.append(tbody)
}

renderTable(calendarData)




