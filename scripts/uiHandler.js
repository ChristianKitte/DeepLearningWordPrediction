/**
 * Setzt das Modell und aktualisiert die Anzeige
 */
function setModel() {
    clearTextInput();

    setInfoText(currentNeuralNet);
    loadSavedModel(currentNeuralNet);
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
 * @param id Die ID des Infostrings
 */
function setInfoText(id) {
    let infoString = document.getElementById("on-load-string");

    infoString.textContent = "Das data " + id + " wurde gelade";
    infoString.classList.replace("on-load-pending", "on-load-done");
}