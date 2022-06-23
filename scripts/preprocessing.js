/**
 * Das nächste angefangene, aber nicht beendete Word
 * @type {string}
 */
let currentNextWord = ""

/**
 * Die komplette, aktuellen Vorhersagen für die letzten drei Wörter
 * @type {*[]}
 */
let currentGroundTruthPredictions = [];

/**
 * Verarbeitet den übergebenen Input des Nutzers, selektiert Wörter für die Vorhersage und führt
 * sie nach jedem neu abgeschlossenen Wort aus. Ein Wort ist abgeschlossen, wenn der Nutzer ein
 * Leerzeichen eingibt.
 *
 * Für nicht vollendete Wörter basiert die Vorhersage auf der Letzten Vorhersage unter
 * Berücksichtigung des aktuellen Wortes (Filterung des letzten Ergebnisses)
 * @param currentPredictionsString
 */
function configureInput(currentPredictionsString) {
    if (currentPredictionsString.lastIndexOf("\n") === currentPredictionsString.length - 1) {
        processWordFinished(currentPredictionsString, windowsSize, "listPrediction");
    } else if (currentPredictionsString.lastIndexOf(" ") === currentPredictionsString.length - 1) {
        processWordFinished(currentPredictionsString, windowsSize, "listPrediction");
    } else {
        processWordInProgress(currentPredictionsString, currentGroundTruthPredictions, 5, "listPrediction")
    }
}

/**
 * Führt eine Vorhersage auf Basis der in wordCount angegebenen Zahl an Wörter durch. Hierbei werden nur Zahlen,
 * Buchstaben, Leeräume, Ausrufezeichen und Fragezeichen berücksichtigt
 * @param currentPredictionsString Der aktuelle, komplette Eingabestring
 * @param wordCount Die Anzahl der zu berücksichtigenden Wörter
 * @param idList Die ID der Liste, in der die Vorhersage ausgegeben werden soll
 */
function processWordFinished(currentPredictionsString, wordCount, idList) {
    // Neues Word ist zu berücksichtigen ==> neue Vorhersage erstellen

    currentNextWord = "";
    let predictionArray = [];

    // https://thewebdev.info/2022/01/11/how-to-remove-everything-but-letters-numbers-space-exclamation-and-question-mark-from-a-javascript-string/
    const result = currentPredictionsString.replace(/[^a-zA-Z0-9]/g, ' ');
    let words = result.trim().split(" ");

    let countWords = words.length;
    let countWordInsert = 0;

    // Vorbelegen des Arrays...
    for (let i = 0; i < wordCount; i++) {
        predictionArray[i] = "";
    }

    if (countWords <= wordCount) {
        // Alle Wörter werden übernommen...

        for (let i = 0; i < countWords; i++) {
            predictionArray[i] = words[i];
        }
    } else {
        /// Nur die letzten Wörter werden übernommen...

        for (let i = countWords - wordCount; i <= countWords - 1; i++) {
            predictionArray[countWordInsert] = words[i];
            countWordInsert++;
        }
    }

    document.getElementById("outWord").value = "";
    document.getElementById("outArray").value = predictionArray;

    let resultToShow = predict(predictionArray);
    setSuggestion(resultToShow, "listPrediction");
}

/**
 * Filtert auf Basis des aktuellen Wortteils die zuletzt ausgeführte Vorhersage und gibt die möglichen Wörter
 * aus.
 * @param currentPredictionsString Der aktuelle, komplette Eingabestring
 * @param lastPredictions Das Ergebnis der letzten Vorhersage
 * @param numberOfPreds Die Anzahl der zu berücksichtigenden Wörter
 * @param idList Die ID der Liste, in der die Vorhersage ausgegeben werden soll
 */
function processWordInProgress(currentPredictionsString, lastPredictions, numberOfPreds, idList) {
    // Kein neues Wort. daher nur die Liste zur Anzeigen filtern

    let startIndex = currentPredictionsString.lastIndexOf(" ");

    if (startIndex !== -1) {
        // Text ab dem ersten Vorkommen eines Leerzeichens nehmen
        currentNextWord = currentPredictionsString.substring(startIndex).trim();
    } else {
        // noch kein Leerzeichen vorhanden, den gesamten Text nehmen
        currentNextWord = currentPredictionsString.trim();
    }

    document.getElementById("outWord").value = currentNextWord;

    // Es gab zuvor eine Vorhersage und die Vorhersage ist nicht leer gewesen...
    if (currentGroundTruthPredictions != null && currentGroundTruthPredictions.length > 0) {
        // erstellen einer Series und sortieren
        let prediction = new dfd.Series(lastPredictions);
        prediction.sortValues({"ascending": false, "inplace": true});

        // übernehmen des Index
        let sf1Indexes = prediction.index;

        let finalPredictionList = [];
        for (let i = 0; i < numberOfPreds; i++) {
            let idx = i; // Index der Indexliste selbst
            let wordIdx = sf1Indexes[i]; // Der hinterlegte WordIndex an der idxten Stelle
            let word = intToWord[wordIdx]; // Das hinter wordIdx stehende Wort
            let wordLower = word.toLowerCase();

            if (wordLower.startsWith(currentNextWord.toLowerCase())) {
                let prop = lastPredictions[wordIdx]; // die Wahrscheinlichkeit für den idxten Eintrag
                let propPercent = prop * 100;
                finalPredictionList.push(word + " (" + propPercent.toFixed(4).toString() + " %)");
            }
        }

        setSuggestion(finalPredictionList, "listPrediction");
    } else {
        setSuggestion([], "listPrediction");
    }
}
