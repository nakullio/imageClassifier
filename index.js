let net;

const webcamElement = document.getElementById('webcam');

async function app() {
    console.log("loading mobilenet...")

    // load the actual model
    net = await mobilenet.load();
    console.log("loaded the model");

    // get the image
    // const imgEl = document.getElementById('img');

    // // then we use mobilenet library to classify the image
    // const result = await net.classify(imgEl);

    // put webcame app
    const webcam = await tf.data.webcam(webcamElement);

    // console.log(result);
    while(true) {

        const img = await webcam.capture();
        const result = await net.classify(img);

        document.getElementById('console').innerText = `
        prediction: ${result[0].className}\n
        probability: ${result[0].probability}
        `;

    img.dispose();

    await tf.nextFrame();

    }
}

app();