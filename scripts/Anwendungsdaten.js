/**
 * Das aktuelle neuronale Netz
 */
let currentNeuralNet;

/**
 * Aktueller String zur Vorhersage
 */
let currentPredictionsString

/**
 * Die aktuellen Vorhersagen
 */
let currentPredictions

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

        currentPredictionsString = document.getElementById("freeTextInput").value;
        currentPredictions = predict(currentPredictionsString);
        setSuggestion(currentPredictions, "listPrediction");
    })

/**
 * Setzt die initialen Werte der Oberfläche basierend auf den aktuellen Werten nach Abschluss des Ladevorgangs
 */
function setInitialValue() {
    // Auslesend er Dropdowns
    currentNeuralNet = document.getElementById("model-type").selectedIndex;
}

/**
 * Setzt die Vorschlagsliste mit den aktuelle Vorschlägen
 * @param werte Eine Liste mit Vorschlägen
 * @param id Die ID der Liste
 */
function setSuggestion(werte, id) {
    // Vorhersagefeld füllen
}