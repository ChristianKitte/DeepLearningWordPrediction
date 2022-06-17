/**
 * Setzt das Modell und aktualisiert die Anzeige
 */
function setModel() {
    clearTextInput();

    setInfoText(currentNeuralNet);
    loadModel(currentNeuralNet);
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

    infoString.textContent = "Das Model " + id + " wurde gelade";
    infoString.classList.replace("on-load-pending", "on-load-done");
}

/**
 * Lädt das angeforderte Modell
 * @param modelID Die ID des Modells (Index des DropDown)
 */
function loadModel(modelID) {
    alert("loadModel");
}