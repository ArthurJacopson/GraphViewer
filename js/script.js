const graphData = {
    "BBB_2014J": {
        "all": [
            "graph_html_data/BBB_2014J/all/BBB_2014J_assessment_average.html",
            "graph_html_data/BBB_2014J/all/BBB_2014J_assessment_cumulative.html",
            "graph_html_data/BBB_2014J/all/BBB_2014J_vle_line.html",
            "graph_html_data/BBB_2014J/all/BBB_2014J_vle_withdrawn.html",
        ],
        "disability": [
            "graph_html_data/BBB_2014J/all/BBB_2014J_assessment_average_disability.html",
            "graph_html_data/BBB_2014J/all/BBB_2014J_assessment_cumulative_disability.html",
        ],
        "gender": [
            "graph_html_data/BBB_2014J/all/BBB_2014J_assessment_average_gender.html",
            "graph_html_data/BBB_2014J/all/BBB_2014J_assessment_cumulative_gender.html",
        ],
    },
    "EEE_2014B": {
        "all": [
            "graph_html_data/EEE_2014B/all/EEE_2014B_assessment_average.html",
            "graph_html_data/EEE_2014B/all/EEE_2014B_assessment_cumulative.html",
            "graph_html_data/EEE_2014B/all/EEE_2014B_vle_line.html",
            "graph_html_data/EEE_2014B/all/EEE_2014B_vle_withdrawn.html",
        ],
        "disability": [
            "graph_html_data/EEE_2014B/all/EEE_2014B_assessment_average_disability.html",
            "graph_html_data/EEE_2014B/all/EEE_2014B_assessment_cumulative_disability.html",
        ],
        "gender": [
            "graph_html_data/EEE_2014B/all/EEE_2014B_assessment_average_gender.html",
            "graph_html_data/EEE_2014B/all/EEE_2014B_assessment_cumulative_gender.html",
        ],
    },
};

// DOM elements
const categorySelect = document.getElementById("categorySelect");
const subcategorySelect = document.getElementById("subcategorySelect");
const graphSelect = document.getElementById("graphSelect");
const graphIframe = document.getElementById("graphIframe");

// Populate subcategories based on selected category
function populateSubcategories() {
    const selectedCategory = categorySelect.value;

    if (!selectedCategory || !graphData[selectedCategory]) {
        subcategorySelect.innerHTML = '<option value="">-- Select a Subcategory --</option>';
        graphSelect.innerHTML = '<option value="">-- Select a Graph --</option>';
        return;
    }

    subcategorySelect.innerHTML = '<option value="">-- Select a Subcategory --</option>';
    Object.keys(graphData[selectedCategory]).forEach((subcategory) => {
        const option = document.createElement("option");
        option.value = subcategory;
        option.textContent = subcategory;
        subcategorySelect.appendChild(option);
    });

    graphSelect.innerHTML = '<option value="">-- Select a Graph --</option>';
}

// Populate graphs based on selected subcategory
function populateGraphs() {
    const selectedCategory = categorySelect.value;
    const selectedSubcategory = subcategorySelect.value;

    if (!selectedSubcategory || !graphData[selectedCategory][selectedSubcategory]) {
        graphSelect.innerHTML = '<option value="">-- Select a Graph --</option>';
        return;
    }

    graphSelect.innerHTML = '<option value="">-- Select a Graph --</option>';
    graphData[selectedCategory][selectedSubcategory].forEach((graph) => {
        const option = document.createElement("option");
        option.value = graph;
        option.textContent = graph.split("/").pop().replace(".html", ""); // Display file name without extension
        graphSelect.appendChild(option);
    });
}

// Display selected graph
function displayGraph() {
    const selectedGraph = graphSelect.value;
    graphIframe.src = selectedGraph ? selectedGraph : "";
}
