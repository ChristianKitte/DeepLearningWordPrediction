/**
 * Das aktuell ausgewählte Netz
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
 * Lädt das angeforderte Modell
 * @param model Die ID des Modells (Index des DropDown)
 * @param reset Wenn True, wird die Anzeige auf den Anfangszustand gesetzt. Default= False
 *  */
async function loadSavedModel(model, reset = false) {
    if (reset === true) {
        neuralNetwork = "";
        neuralNetworkLoaded = false;

    } else {
        model = "./data/model/model.json";

        return tf.loadLayersModel(model, false).then((model) => {
            neuralNetwork = model;
            neuralNetworkLoaded = true;
        });
    }
}

/**
 * Eine Vorhersage auf Basis der übergebenen drei Wörter treffen
 * @param predictionArray Der übergebene Text
 */
function predict(predictionArray) {
    if (neuralNetworkLoaded) {
        console.log(predictionArray);

        let predictionResult;

        tf.tidy(() => {
            let input = tf.zeros([1, 3]);
            let prediction = neuralNetwork.predict(input);

            predictionResult = prediction.dataSync();
        });


        console.log(predictionResult);

        return predictionResult;
    } else {
        console.log("Kein Netzwerk geladen");
    }
}

