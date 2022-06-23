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
        configureInput(currentPredictionsString);
    })

/**
 * Setzt das Modell und aktualisiert die Anzeige
 */
function setModel() {
    clearTextInput();

    if (currentNeuralNet === 1) {
        let model = "./data/model/model.json";

        let descriptionDropDown = document.getElementById("model-type");
        let description = descriptionDropDown.options[descriptionDropDown.selectedIndex].text;

        setInfoText(description);
        loadSavedModel(model);
    } else {
        let model = "Noch kein Modell ausgewählt...";
        setInfoText(model, true);
    }
}

/**
 * Löscht das Eingabefeld für den Freitext
 */
function clearTextInput() {
    document.getElementById("listPrediction").innerHTML = "keine Vorhersagen";

    document.getElementById("freeTextInput").value = "";
    document.getElementById("outWord").value = "";
    document.getElementById("outArray").value = "";
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
        infoString.textContent = "Das Neuronale Netz: " + name + " wurde geladen";
        infoString.classList.replace("on-load-pending", "on-load-done");
    }
}

/**
 * Füllt eine HMTL Liste mit den übergebenen Vorschlägen
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