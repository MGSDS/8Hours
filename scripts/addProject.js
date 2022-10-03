!function (){
   function createProjectRowHTML(projectName, category)
    {
        return(
            "                    <div class=\"grid-table__row island__table-row_padding\">\n" +
            "                        <div class=\"text text_size_s text_white island__text_table-row-element-margin\">"+ projectName + "</div>\n" +
            "                        <div class=\"text text_size_s text_white island__text_table-row-element-margin\">" + category + "</div>\n" +
            "                        <button class=\"button island__button button_edit-button text_size_s text_white\">Edit</button>\n" +
            "                    </div>\n")
    }

    let projectsSet = new Set();

    function addProject(event) {
       event.preventDefault();
       let form = document.getElementById('project-add-form');
       let list = document.getElementById('projects-list');
       let projectName = form["project-name"].value;
       let categoryName = form["category"].value;

       if (!projectName || !categoryName) {
           alert("Project name and Category can not be empty");
           return;
       }

       if (projectsSet.has(projectName.toLowerCase())) {
           alert("Project already exists");
           return;
       }

       projectsSet.add(projectName.toLowerCase());

       list.innerHTML += createProjectRowHTML(capitalizeFirstLetter(projectName), capitalizeFirstLetter(categoryName));
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    document.addEventListener("DOMContentLoaded", _ => {
        document.getElementById('project-add-form').addEventListener('submit', (event) => addProject(event));
    })
}()