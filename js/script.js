// script.js

function updateGraph() {
    const studentSelect = document.getElementById("studentSelect");
    const graphSection = document.getElementById("graphSection");
    const graphImage = document.getElementById("graphImage");
    const status = document.getElementById("status");
    const notifyBtn = document.getElementById("notifyBtn");

    const selectedStudent = studentSelect.value;

    if (selectedStudent) {
        graphSection.style.display = "block";  // Show the graph section

        // Based on student selection, update the graph and status
        switch (selectedStudent) {
            case "student1":
                igraph.src = "graph_html_data/BBB_2014J/all/BBB_2014J_assessment_average.html";
                status.textContent = "Stable Pattern";
                status.style.color = "green";
                break;
            case "student2":
                igraph.src = "graph_html_data/EEE_2014B/all/EEE_2014B_vle_line.html";
                status.textContent = "Dangerous Pattern";
                status.style.color = "red";
                break;
            case "student3":
                graphImage.src = "assets/images/graph_student3.png";
                status.textContent = "Stable Pattern";
                status.style.color = "green";
                break;
            default:
                graphSection.style.display = "none";
        }

        // Enable the notify button
        notifyBtn.style.display = "inline-block";  // Make the button visible
    } else {
        graphSection.style.display = "none";  // Hide the graph section if no student is selected
    }
}

// Notify Student function
function notifyStudent() {
    const statusText = document.getElementById("status").textContent;

    if (statusText.includes("Dangerous")) {
        alert("The student has been notified about their dangerous academic pattern. Please take necessary actions.");
    } else {
        alert("The student has been notified about their stable academic pattern.");
    }
}
