/**
 * Setzt das Modell und aktualisiert die Anzeige
 */
function setModel() {
    clearTextInput();

    if (currentNeuralNet === 1) {
        model = "./data/model/model.json";

        setInfoText(model);
        loadSavedModel(model);
    } else {
        model = "Noch kein Modell ausgewählt...";
        setInfoText(model, true);
    }
}

/**
 * Löscht das Eingabefeld für den Freitext
 */
function clearTextInput() {
    document.getElementById("listPrediction").innerHTML = "keine Vorhersagen";
    document.getElementById("freeTextInput").value = "";
}

/**
 * Setzt den Infostraing für das geladene Modell
 * @param name Die ID des Infostrings
 * @param reset Wenn True, wird die Anzeige auf den Anfangszustand gesetzt. Default= False
 */
function setInfoText(name, reset = false) {
    let infoString = document.getElementById("on-load-string");

    if (reset === true) {
        infoString.textContent = "Noch kein Modell ausgewählt...";
        infoString.classList.replace("on-load-done", "on-load-pending");
    } else {
        infoString.textContent = "Das Modell " + name + " wurde gelade";
        infoString.classList.replace("on-load-pending", "on-load-done");
    }
}