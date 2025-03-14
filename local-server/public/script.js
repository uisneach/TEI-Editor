// List of TEI modules
const teiModules = [
    'TEI',
    'Header',
    'Core',
    'Text Structure',
    'Gaiji',
    'Verse',
    'Drama',
    'Spoken',
    'CMC',
    'Dictionaries',
    'Manuscripts',
    'Transcriptions',
    'Text Criticism',
    'Names and Dates',
    'Figures',
    'Corpus',
    'Linking',
    'Analysis',
    'Feature Structures',
    'Graphs',
    'Certainty',
    'Doc Elements'
];

const tabsContainer = document.getElementById('tabs');
const contentContainer = document.getElementById('tab-content');

// Function to create tabs
teiModules.forEach((module, index) => {
    const tab = document.createElement('div');
    tab.className = 'tab';
    tab.innerText = module;
    tab.onclick = () => loadModuleContent(module);
    tabsContainer.appendChild(tab);
});

// Function to load module content
function loadModuleContent(module) {
    // Update active tab styling
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
        if (tab.innerText === module) {
            tab.classList.add('active-tab');
        }
    });

    // Load content based on module
    switch (module) {
        case 'Header':
            loadHeaderEditor();
            break;
        // Add cases for other modules as needed
        default:
            contentContainer.innerHTML = `<h2>${module} Editor</h2><p>Editor for ${module} module will be implemented here.</p>`;
    }
}

// Function to load Header editor
function loadHeaderEditor() {
    contentContainer.innerHTML = `
        <h2>TEI Header Editor</h2>
        <form id="headerForm">
            <label for="title">Title:</label><br>
            <input type="text" id="title" name="title"><br><br>
            <label for="author">Author:</label><br>
            <input type="text" id="author" name="author"><br><br>
            <label for="publicationDate">Publication Date:</label><br>
            <input type="date" id="publicationDate" name="publicationDate"><br><br>
            <!-- Add more metadata fields as needed -->
            <input type="button" value="Save" onclick="saveHeaderData()">
        </form>
    `;
}

function createAttributeList(attributes) {
    let outputHTML = '<form>';
    outputHTML += '</form>';
    return outputHTML;
}

// Function to save Header data
function saveHeaderData() {
    const form = document.getElementById('headerForm');
    const formData = new FormData(form);
    const headerData = {};
    formData.forEach((value, key) => {
        headerData[key] = value;
    });
    console.log('Header Data:', headerData);
    // Implement AJAX call to save data to the server
}

// Activate the first tab by default
loadModuleContent(teiModules[0]);