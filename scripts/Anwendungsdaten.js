/**
 * Das nächste angefangene, aber nicht beendete Word
 * @type {string}
 */
let currentNextWord = ""

/**
 * Die komplette, aktuellen Vorhersagen für die letzten drei Wörter
 * @type {*[]}
 */
let currentGroundTruthPredictions = []

/**
 * OnChange Event Handler für Modellauswahl
 */
d3.select('#model-type')
    .on("change", function () {
        currentNeuralNet = +this.value;
        setModel(currentNeuralNet);
    })

/**
 * OnChange Event Handler der Texteingabe
 */
d3.select('#freeTextInput')
    .on("input", function () {
        //funzt nicht: currentPredictionsString = +this.value;

        let currentPredictionsString = document.getElementById("freeTextInput").value;

        if (currentPredictionsString.length > 1 && currentPredictionsString.lastIndexOf(" ") === currentPredictionsString.length - 1) {
            // Neues Word ist zu berücksichtigen ==> neue Vorhersage erstellen
            currentNextWord = "";
            let words = currentPredictionsString.split(" ");

            let search_1;
            let search_2;
            let search_3;

            if (words.length === 1) {
                search_1 = "";
                search_2 = "";
                search_3 = words[words.length - 1];
            }
            if (words.length === 2) {
                search_1 = "";
                search_2 = words[words.length - 2];
                search_3 = words[words.length - 1];
            } else {
                search_1 = words[words.length - 3];
                search_2 = words[words.length - 2];
                search_3 = words[words.length - 1];
            }

            let predictionArray = [search_1, search_2, search_3];

            currentGroundTruthPredictions = predict(predictionArray);
            console.log(predictionArray);

            setSuggestion(currentGroundTruthPredictions, "listPrediction");
        } else {
            // Kein neues Wort. daher nur die Liste zur Anzeigen filtern

            let startIndex = currentPredictionsString.lastIndexOf(" ");
            if (startIndex !== -1) {
                // ab dem ersten Vorkommen eines Leerzeichens
                currentNextWord = currentPredictionsString.substring(startIndex + 1, currentPredictionsString.length - 1);
            } else {
                // noch kein Leerzeichen vorhanden
                currentNextWord = currentPredictionsString;
            }

            console.log(currentNextWord);

            if (currentGroundTruthPredictions.length > 0) {
                const filtered = currentGroundTruthPredictions.filter(checkCurrentInput);
                setSuggestion(filtered, "listPrediction");
            } else {
                setSuggestion([], "listPrediction");
            }
        }
    })

/**
 * Filtert den übergebenen Wert nach der aktuellen Eingabe
 * @param word Das zu überprüfende Wort
 * @returns {boolean} True, wenn das Wort angezeigt werden soll
 */
function checkCurrentInput(word) {
    return true;
}

/**
 * Setzt die Vorschlagsliste mit den aktuelle Vorschlägen
 * @param werte Eine Liste mit Vorschlägen
 * @param id Die ID der Unordered List
 */
function setSuggestion(werte, id) {
    let ul = document.getElementById("listPrediction");
    ul.innerHTML = "";

    let li = document.createElement('li');
    li.classList.add("list-inline-item");
    li.innerHTML = "";

    ul.appendChild(li);

    let count = 0;
    werte.forEach((element) => {
        if (count < 5) {
            let li = document.createElement('li');
            li.classList.add("list-inline-item");
            li.innerHTML = element;

            ul.appendChild(li);

            count++;
        }
    });
}