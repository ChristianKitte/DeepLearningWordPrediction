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
 */
async function loadSavedModel(model) {
    model = "./data/model/model.json";

    return tf.loadLayersModel(model, false).then((model) => {
        neuralNetwork = model;
        neuralNetworkLoaded = true;
    });
}

/**
 * Eine Vorhersage auf Basis der übergebenen drei Wörter treffen
 * @param predictionArray Der übergebene Text
 */
function predict(predictionArray) {
    console.log(predictionArray);

    let predictionResult;

    tf.tidy(() => {
        let input = tf.zeros([1, 40]);
        let prediction = neuralNetwork.predict(input);

        predictionResult = prediction.dataSync();
    });



    console.log(predictionResult);

    return predictionResult;
}

