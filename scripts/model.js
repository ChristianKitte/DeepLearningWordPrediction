/**
 * Die Kennummer des aktuell ausgewählte Netz
 * ID 1 = ./data/model/model.json
 * @type {number}
 */
let currentNeuralNet = 0;

/**
 * True, wenn das Netzwerk geladen wurde, ansonsten false
 * @type {boolean}
 */
let neuralNetworkLoaded = false;

/**
 * Das aktuelle neuronale Netz
 */
let neuralNetwork

/**
 * Zuordnung Zahl (key) zu Word (value) aus dem Training
 * @type {{}}
 */
let intToWord = {};

/**
 * Zuordnung Word (key) zu Zahl (value) aus dem Training
 * @type {{}}
 */
let wordToInt = {};

/**
 * Die Größe des beim Training genutzten Fensters
 * @type {number}
 */
let windowsSize = 3;

/**
 * Daten des aktuell verwendtes Netzes
 * @type {{BreiteFenster: number, Accuracy: number, Epochen: number, AnzahlBatch: number, AnzahlZuordnung: number, AnzahlTrainingsdaten: number, Batches: number, AnzahlGewichte: number}}
 */
let model1_data = {
    AnzahlZuordnung: 0,
    AnzahlTrainingsdaten: 8565,
    BreiteFenster: 3,
    AnzahlGewichte: 959266,
    Batches: 32,
    AnzahlBatch: 268,
    Epochen: 100,
    Accuracy: 0.48
}

/**
 * Lädt das angeforderte Modell und erstellt die Zuordnungstabellen der Wörter / Token zu ihren Key
 * @param model Die ID des Modells (Index des DropDown)
 * @param reset Wenn True, wird die Anzeige auf den Anfangszustand gesetzt. Default= False
 *  */
async function loadSavedModel(model, reset = false) {
    if (reset === true) {
        neuralNetwork = "";
        neuralNetworkLoaded = false;

        intToWord.clear();
        wordToInt.clear();
    } else {
        return tf.loadLayersModel(model, false).then((model) => {
            neuralNetwork = model;
            neuralNetworkLoaded = true;

            let counter = 0;
            words.forEach((item) => {
                    intToWord[counter] = item;
                    wordToInt[item] = counter;

                    counter++;
                }
            )

            console.log(wordToInt);
            console.log(intToWord);

            tfvis.show.modelSummary(document.getElementById("model-structure"), model);
        });
    }
}

/**
 * Konvertiert ein Array von Token / Wörter in ein Array von Integer Entsprechungen
 * @param Tokenlist Eine Liste mit Token / Wörter
 */
function convertToInt(Tokenlist) {
    let intList = [];

    Tokenlist.forEach((value) => {
            intList.push(wordToInt[value]);
        }
    )

    return intList;
}

/**
 * Konvertiert ein Array von als Integer codierte Token / Wörter in ein Array von Token / Wörter
 * @param intList Eine Liste von als Integer vercodete Token / Wörter
 * @param numberOfPreds Die Anzahl der anzuzeigenden Vorhersagen
 */
function convertToWord(intList, numberOfPreds) {
    let tokenList = [];

    // Mit Hilfe von Danfo.js ein Series erzeugen und inPlace sortieren
    let prediction = new dfd.Series(intList);
    prediction.sortValues({"ascending": false, "inplace": true});
    prediction.print();

    // Übernehmen des Index
    let sf1Indexes = prediction.index;

    for (let i = 0; i < numberOfPreds; i++) {
        let idx = i; // Index der Indexliste selbst
        let wordIdx = sf1Indexes[i]; // Der hinterlegte WordIndex an der idxten Stelle
        let word = intToWord[wordIdx]; // Das hinter wordIdx stehende Wort
        let prop = intList[wordIdx]; // die Wahrscheinlichkeit für den idxten Eintrag
        let propPercent = prop * 100;

        tokenList.push(word + " (" + propPercent.toFixed(4).toString() + " %)");
    }

    return tokenList;
}

/**
 * Eine Vorhersage auf Basis der übergebenen drei Wörter treffen
 * @param predictionArray Der übergebene Text
 */
function predict(predictionArray) {
    if (neuralNetworkLoaded) {
        let intList = convertToInt(predictionArray);

        let resultList = [];
        let predictionResult = [];

        console.log(predictionArray);
        console.log(intList);

        tf.tidy(() => {
            let prediction = neuralNetwork.predict(tf.tensor2d(intList, [1, 3]));
            predictionResult = prediction.dataSync();
        });

        // Sichern der gesamten Vorhersage
        currentGroundTruthPredictions = predictionResult;

        // Formatierte Liste der letzten n Vorhersagen zurück geben
        resultList = convertToWord(predictionResult, 5);

        return resultList;
    } else {
        console.log("Kein Netzwerk geladen");
    }
}

