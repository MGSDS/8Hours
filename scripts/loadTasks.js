const url = "https://fakerapi.it/api/v1/custom?_quantity=100&id=counter&projectName=firstName&elapsedTime=number&income=number&date=date_time&taskName=firstName&categoryName=firstName";

const island =
    "          <div class=\"island main__island island_vertical island_shadow\">\n" +
    "            <div class=\"text island__text text_semi-bolt text_size_l text_white\"> Fri, June 13th 2077</div>\n" +
    "            <div id=\"curr-day-grid\" class=\"grid-table grid-table_time-entries island__table\">  <!--FIXME: bullshit temp id-->\n" +
    "              <div class=\"grid-table__row\">\n" +
    "                <div class=\"text text_semi-bolt text_size_m text_white island__text_table-row-element-margin\">Task Name</div>\n" +
    "                <div class=\"text text_semi-bolt text_size_m text_white island__text_table-row-element-margin\">Project Name</div>\n" +
    "                <div class=\"text text_semi-bolt text_size_m text_white island__text_table-row-element-margin\">Category</div>\n" +
    "                <div class=\"text text_semi-bolt text_size_m text_white island__text_table-row-element-margin\">Income</div>\n" +
    "                <div class=\"text text_semi-bolt text_size_m text_white island__text_table-row-element-margin\">Time Spent</div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"text island__text text_size_l text_white\"><span class=\"text text_semi-bolt\">Total time spent:</span> 9:33 <span class=\"text text_semi-bolt\">Total Income:</span> $100</div>\n" +
    "          </div>";

const entry =
    "               <div class=\"grid-table__row\">\n" +
    "                <div class=\"text text_semi-bolt text_size_m text_white island__text_table-row-element-margin\">task</div>\n" +
    "                <div class=\"text text_semi-bolt text_size_m text_white island__text_table-row-element-margin\">proj</div>\n" +
    "                <div class=\"text text_semi-bolt text_size_m text_white island__text_table-row-element-margin\">cat</div>\n" +
    "                <div class=\"text text_semi-bolt text_size_m text_white island__text_table-row-element-margin\">inc</div>\n" +
    "                <div class=\"text text_semi-bolt text_size_m text_white island__text_table-row-element-margin\">time</div>\n" +
    "              </div>\n";


function disableLoadingAnimation(){
    document.getElementById("loading").classList.add("lds-ripple_hidden");
}

function fetchEntries() {
    let requestInit = {
        method: "GET",
        headers : {
            "Content-Type" : "application/json"
        },
    };
    fetch(url, requestInit)
    .then(function(response) {
        if (!response.ok) {
            alert("Error: can not fetch data from server");
            throw Error(response.statusText);
        }
        return response.json();
    }).then(function(data) {
        showInDom(data.data);
    });
}



function showInDom(data) {
    let today = new Date();

    let stats = {
        timeSpent: 0,
        income: 0
    };
    let entries = data;
    let main = document.getElementById('main');
    let island = createIsland(today.toDateString(), entries, stats);
    disableLoadingAnimation();
    main.append(island);
}

function createIsland(date, entries, stats) {
    let island = document.createElement("div");
    island.classList.add("island", "main__island", "island_vertical", "island_shadow");
    let islandDate = document.createElement("div");
    islandDate.classList.add("text", "island__text", "text_semi-bolt", "text_size_l", "text_white");
    islandDate.innerHTML = date;
    island.appendChild(islandDate);
    let entriesGrid = document.createElement("div");
    entriesGrid.classList.add("grid-table", "grid-table_time-entries", "island__table");
    let entriesGridHeader = document.createElement("div");
    entriesGridHeader.classList.add("grid-table__row");
    let entriesGridHeaderTaskName = document.createElement("div");
    entriesGridHeaderTaskName.classList.add("text", "text_semi-bolt", "text_size_m", "text_white", "island__text_table-row-element-margin");
    entriesGridHeaderTaskName.innerHTML = "Task Name";
    entriesGridHeader.appendChild(entriesGridHeaderTaskName);
    let entriesGridHeaderProjectName = document.createElement("div");
    entriesGridHeaderProjectName.classList.add("text", "text_semi-bolt", "text_size_m", "text_white", "island__text_table-row-element-margin");
    entriesGridHeaderProjectName.innerHTML = "Project Name";
    entriesGridHeader.appendChild(entriesGridHeaderProjectName);
    let entriesGridHeaderCategory = document.createElement("div");
    entriesGridHeaderCategory.classList.add("text", "text_semi-bolt", "text_size_m", "text_white", "island__text_table-row-element-margin");
    entriesGridHeaderCategory.innerHTML = "Category";
    entriesGridHeader.appendChild(entriesGridHeaderCategory);
    let entriesGridHeaderIncome = document.createElement("div");
    entriesGridHeaderIncome.classList.add("text", "text_semi-bolt", "text_size_m", "text_white", "island__text_table-row-element-margin");
    entriesGridHeaderIncome.innerHTML = "Income";
    entriesGridHeader.appendChild(entriesGridHeaderIncome);
    let entriesGridHeaderTimeSpent = document.createElement("div");
    entriesGridHeaderTimeSpent.classList.add("text", "text_semi-bolt", "text_size_m", "text_white", "island__text_table-row-element-margin");
    entriesGridHeaderTimeSpent.innerHTML = "Time Spent";
    entriesGridHeader.appendChild(entriesGridHeaderTimeSpent);
    entriesGrid.appendChild(entriesGridHeader);

    for (let i = 0; i < entries.length; i++) {
        let entry = createEntry(entries[i]);
        entriesGrid.appendChild(entry);
    }

    island.appendChild(entriesGrid);
    let islandStats = document.createElement("div");
    islandStats.classList.add("text", "island__text", "text_size_l", "text_white");
    islandStats.innerHTML = "<span class=\"text text_semi-bolt\">Total time spent:</span> " + stats.timeSpent + " <span class=\"text text_semi-bolt\">Total Income:</span> $" + stats.income;
    island.appendChild(islandStats);
    return island;
}

function createEntry(entry) {
    let row = document.createElement("div");
    row.classList.add("grid-table__row");
    let entryTaskName = document.createElement("div");
    entryTaskName.classList.add("text", "text_semi-bolt", "text_size_m", "text_white", "island__text_table-row-element-margin");
    entryTaskName.innerHTML = entry.taskName;
    row.appendChild(entryTaskName);
    let entryProjectName = document.createElement("div");
    entryProjectName.classList.add("text", "text_semi-bolt", "text_size_m", "text_white", "island__text_table-row-element-margin");
    entryProjectName.innerHTML = entry.projectName;
    row.appendChild(entryProjectName);
    let entryCategory = document.createElement("div");
    entryCategory.classList.add("text", "text_semi-bolt", "text_size_m", "text_white", "island__text_table-row-element-margin");
    entryCategory.innerHTML = entry.categoryName;
    row.appendChild(entryCategory);
    let entryIncome = document.createElement("div");
    entryIncome.classList.add("text", "text_semi-bolt", "text_size_m", "text_white", "island__text_table-row-element-margin");
    entryIncome.innerHTML = entry.income;
    row.appendChild(entryIncome);
    let entryTimeSpent = document.createElement("div");
    entryTimeSpent.classList.add("text", "text_semi-bolt", "text_size_m", "text_white", "island__text_table-row-element-margin");
    entryTimeSpent.innerHTML = entry.elapsedTime;
    row.appendChild(entryTimeSpent);
    return row;
}


document.addEventListener("DOMContentLoaded", _ => {
    fetchEntries()
});