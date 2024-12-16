// list of topics videos
const topics = [
    "Topic 1: ",
    "Topic 2: ",
    "Topic 3: ",
    "Topic 4: ",
    "Topic 5: Video 1",
    "Topic 6: Video 2",
    "Topic 7: Video 3",
    "Topic 8: Video 4",
    "Topic 9: Video 5",
    "Topic 10: Video 6",
    "Topic 11: Video 7",
    "Topic 12: Video 8",
    "Topic 13: Video 9",
    "Topic 14: Video 10",
    "Topic 15: Video 11",
    "Topic 16: Video 12",
    "Topic 17: Video 13",
    "Topic 18: Video 14",
    "Topic 19: Video 15",
    "Topic 20: Video 16",
    "Topic 21: Video 17",
    "Topic 22: Video 18",
    "Topic 23: Video 19",
    "Topic 24: Video 20",
    "Topic 25: Video 21",
    "Topic 26: Video 22",
    "Topic 27: Video 23",
    "Topic 28: Video 24",
    "Topic 29: Video 25",
    "Topic 30: Video 26",
    "Topic 31: Video 27",
    "Topic 32: Video 28",
    "Topic 33: Video 29",
    "Topic 34: Video 30",
    "Topic 35: Video 31",
    "Topic 36: Video 32",
    "Topic 37: Video 33",
    "Topic 38: Video 34",
    "Topic 39: Video 35",
    "Topic 40: Video 36",
    "Topic 41: Video 37",
    "Topic 42: Video 38",
    "Topic 43: Video 39",
    "Topic 44: Video 40",
    "Topic 45: Video 41",
    "Topic 46: Video 42",
    "Topic 47: Video 43",
    "Topic 48: Video 44",
    "Topic 49: Video 45",
    "Topic 50: Video 46",
    "Topic 51: Video 47",
    "Topic 52: Video 48",
    "Topic 53: Video 49",
    "Topic 54: Video 50",
    "Topic 55: Video 51",
    "Topic 56: Video 52",
    "Topic 57: Video 53",
    "Topic 58: Video 54",
    "Topic 59: Video 55",
    "Topic 60: Video 56",
    "Topic 61: Video 57",
    "Topic 62: Video 58",
    "Topic 63: Video 59",
    "Topic 64: Video 60",
    "Topic 65: Video 61",
    "Topic 66: Video 62",
    "Topic 67: Video 63",
    "Topic 68: Video 64",
    "Topic 69: Video 65",
    "Topic 70: Video 66",
    "Topic 71: Video 67",
    "Topic 72: Video 68",
    "Topic 73: Video 69",
    "Topic 74: Video 70",
    "Topic 75: Video 71",
    "Topic 76: Video 72",
    "Topic 77: Video 73",
    "Topic 78: Video 74",
    "Topic 79: Video 75",
    "Topic 80: Video 76",
    "Topic 81: Video 77",
    "Topic 82: Video 78",
    "Topic 83: Video 79",
    "Topic 84: Video 80",
    "Topic 85: Video 81",
    "Topic 86: Video 82",
    "Topic 87: Video 83",
    "Topic 88: Video 84",
    "Topic 89: Video 85",
    "Topic 90: Video 86",
    "Topic 91: Video 87",
    "Topic 92: Video 88",
    "Topic 93: Video 89",
    "Topic 94: Video 90",
    "Topic 95: Video 91",
    "Topic 96: Video 92",
    "Topic 97: Video 93",
    "Topic 98: Video 94",
    "Topic 99: Video 95",
    "Topic 100: Video 96"
];


const topicsVamsi = document.getElementById("topics-vamsi");
const topicsSanjam = document.getElementById("topics-sanjam");

function generateTopics(column, name) {
    topics.forEach((topic, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" id="${name}-topic-${index}" data-name="${name}" />
            <label for="${name}-topic-${index}">${topic}</label>
        `;
        column.appendChild(li);
    });
}

generateTopics(topicsVamsi, "vamsi");
generateTopics(topicsSanjam, "sanjam");

// progrss
const progressVamsi = document.getElementById("progress-vamsi");
const progressSanjam = document.getElementById("progress-sanjam");

function updateProgressBar(name) {
    const totalTopics = topics.length;
    const checkedTopics = document.querySelectorAll(
        `#topics-${name} input[type="checkbox"]:checked`
    ).length;

    const progress = (checkedTopics / totalTopics) * 100;

    if (name === "vamsi") {
        progressVamsi.style.width = `${progress}%`;
    } else if (name === "sanjam") {
        progressSanjam.style.width = `${progress}%`;
    }

    saveCheckboxState(); // Save state on every progress update
}

// Save and Load Checkbox State using localStorage
function saveCheckboxState() {
    const checkboxState = {
        vamsi: {},
        sanjam: {}
    };

    document.querySelectorAll(`#topics-vamsi input[type="checkbox"]`).forEach((checkbox, index) => {
        checkboxState.vamsi[index] = checkbox.checked;
    });

    document.querySelectorAll(`#topics-sanjam input[type="checkbox"]`).forEach((checkbox, index) => {
        checkboxState.sanjam[index] = checkbox.checked;
    });

    localStorage.setItem("checkboxState", JSON.stringify(checkboxState));
}

function loadCheckboxState() {
    const checkboxState = JSON.parse(localStorage.getItem("checkboxState"));

    if (checkboxState) {
        document.querySelectorAll(`#topics-vamsi input[type="checkbox"]`).forEach((checkbox, index) => {
            checkbox.checked = checkboxState.vamsi[index] || false;
        });

        document.querySelectorAll(`#topics-sanjam input[type="checkbox"]`).forEach((checkbox, index) => {
            checkbox.checked = checkboxState.sanjam[index] || false;
        });

        updateProgressBar("vamsi");
        updateProgressBar("sanjam");
    }
}

// Add event listeners to checkboxes
document.addEventListener("change", (e) => {
    const checkbox = e.target;

    if (checkbox.dataset.name === "vamsi") {
        updateProgressBar("vamsi");
    } else if (checkbox.dataset.name === "sanjam") {
        updateProgressBar("sanjam");
    }
});

// Load saved checkbox states on page load
document.addEventListener("DOMContentLoaded", () => {
    loadCheckboxState();
});
