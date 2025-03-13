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
const contentsContainer = document.getElementById('tab-contents');

// Function to create tabs and content areas
teiModules.forEach((module, index) => {
    // Create tab
    const tab = document.createElement('div');
    tab.className = 'tab';
    tab.innerText = module;
    tab.onclick = () => activateTab(index);
    tabsContainer.appendChild(tab);

    // Create tab content
    const content = document.createElement('div');
    content.className = 'tab-content';
    content.innerHTML = `<h2>${module}</h2><p>Content editing area for ${module}.</p>`;
    contentsContainer.appendChild(content);
});

// Function to activate a tab
function activateTab(activeIndex) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index) => {
        if (index === activeIndex) {
            tab.classList.add('active-tab');
        } else {
            tab.classList.remove('active-tab');
        }
    });

    contents.forEach((content, index) => {
        if (index === activeIndex) {
            content.classList.add('active-content');
        } else {
            content.classList.remove('active-content');
        }
    });
}

// Activate the first tab by default
activateTab(0);