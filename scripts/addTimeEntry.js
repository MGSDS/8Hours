!function() {
    function createEntryHTML(taskName, projectName, category, money,  time){
        return(
            "               <div class=\"grid-table__row island__table-row_padding\">\n" +
            "                <div class=\"text text_size_s text_white island__text_table-row-element-margin\">" + taskName + "</div>\n" +
            "                <div class=\"text text_size_s text_white island__text_table-row-element-margin\">" + projectName + "</div>\n" +
            "                <div class=\"text text_size_s text_white island__text_table-row-element-margin\">" + category + "</div>\n" +
            "                <div class=\"text text_size_s text_white island__text_table-row-element-margin\">" + money + "</div>\n" +
            "                <div class=\"text text_size_s text_white island__text_table-row-element-margin\">" + time + "</div>\n" +
            "              </div>"
        );
    }

    let started = false;
    let startTime;

    <!--FIXME: bullshit temp add-->
    function addTimeEntry(event) {
        event.preventDefault();
        if (!started) {
            event.submitter.value = "Stop";
            startTime = new Date().getTime();
            started = true;
            return;
        }

        let form = document.getElementById("add-time-entry-form");
        let taskName = form["task-name"].value;
        let projectName = form["project-name"].value;
        let categoryName = form["category-name"].value;
        let hourPrice = form["hour-price"].value;

        if (!taskName || !projectName || !categoryName || !hourPrice) {
            alert("All fields are required");
            return;
        }

        let endTime = new Date().getTime();

        let list = document.getElementById("curr-day-grid");
        let time = Math.floor((endTime - startTime) / 60000) + Math.random()*60*4
        let income = +(hourPrice) * time / 60

        event.submitter.value = "Start";

        list.innerHTML += createEntryHTML(taskName, projectName, categoryName, income.toFixed(2), toHoursAndMinutes(time))

        started = false;
    }

    function toHoursAndMinutes(totalMinutes) {
        const minutes = Math.floor(totalMinutes % 60);
        const hours = Math.floor(totalMinutes / 60);

        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
    }

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    document.addEventListener("DOMContentLoaded", _ => {
        document.getElementById('add-time-entry-form').addEventListener('submit', (event) => addTimeEntry(event));
    })
}()