const video = document.getElementById('videoInput')

Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models') //heavier/accurate version of tiny face detector
]).then(start)

function start() {
    document.body.append('Models Loaded')

    navigator.getUserMedia(
        { video:{} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )

    //video.src = '../videos/speech.mp4'
    console.log('video added')
    recognizeFaces()
}

async function recognizeFaces() {

    const labeledDescriptors = await loadLabeledImages()
    console.log(labeledDescriptors)
    const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.5)


    video.addEventListener('play', async () => {
        console.log('Playing')
        const canvas = faceapi.createCanvasFromMedia(video)
        document.body.append(canvas)

        const displaySize = { width: video.width, height: video.height }
        faceapi.matchDimensions(canvas, displaySize)



        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors()

            const resizedDetections = faceapi.resizeResults(detections, displaySize)

            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

            const results = resizedDetections.map((d) => {
                return faceMatcher.findBestMatch(d.descriptor)
            })
            results.forEach( (result, i) => {
                const box = resizedDetections[i].detection.box
                const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
                drawBox.draw(canvas)
            })
        }, 100)



    })
}


function loadLabeledImages() {
    //const labels = ['Black Widow', 'Captain America', 'Hawkeye' , 'Jim Rhodes', 'Tony Stark', 'Thor', 'Captain Marvel']
    const labels = ['vogiabao'] // for WebCam
    return Promise.all(
        labels.map(async (label)=>{
            const descriptions = []
            const a = Float32Array.of(-0.06812472641468048,0.06064695492386818,0.02173655852675438,-0.06961371004581451,-0.03118228167295456,-0.09733903408050537,-0.09492574632167816,-0.14894014596939087,0.1544848382472992,-0.09792309254407883,0.2739447355270386,-0.03587473928928375,-0.22589504718780518,-0.13570648431777954,-0.02102244831621647,0.1562284231185913,-0.18497920036315918,-0.09270068258047104,-0.03783375024795532,-0.015079876407980919,0.08196764439344406,-0.007580760400742292,0.059321947395801544,0.08080602437257767,-0.08141468465328217,-0.39192888140678406,-0.09938434511423111,-0.12313228845596313,0.008268381468951702,-0.08530639111995697,-0.05137982964515686,0.04582449793815613,-0.1578991413116455,-0.08386291563510895,0.005917597096413374,0.04467209056019783,-0.010169095359742641,-0.057715095579624176,0.24174924194812775,-0.006005196366459131,-0.18989452719688416,-0.026635875925421715,-0.012103511020541191,0.24555079638957977,0.2054508924484253,0.09795825928449631,0.04073302447795868,-0.09747324883937836,0.12363643944263458,-0.20379318296909332,0.04135847091674805,0.13723064959049225,0.04804380238056183,-0.018975509330630302,0.022991426289081573,-0.10547129809856415,0.012637820094823837,0.050142426043748856,-0.19112001359462738,0.027691679075360298,0.08440352976322174,-0.14758086204528809,-0.045599423348903656,-0.04191669821739197,0.23844434320926666,0.08756475895643234,-0.09806328266859055,-0.10713467001914978,0.16644863784313202,-0.14683422446250916,-0.09131983667612076,-0.004244811832904816,-0.15649189054965973,-0.1863671839237213,-0.3324664235115051,-0.01306114997714758,0.37009939551353455,0.11909422278404236,-0.19586212933063507,0.05688776448369026,-0.06392116844654083,-0.00023712565598543733,0.16753727197647095,0.07047731429338455,-0.018694540485739708,-0.009325625374913216,-0.13688969612121582,0.01172410324215889,0.2243722677230835,-0.05930395796895027,-0.05426858365535736,0.2073122262954712,-0.05256037414073944,0.09352356940507889,0.05166788399219513,0.03333010897040367,-0.08249156922101974,0.027975251898169518,-0.159002885222435,0.006334562785923481,0.1267855167388916,0.016196057200431824,0.0367639921605587,0.12280623614788055,-0.1300174593925476,0.08655110001564026,-0.012763364240527153,-0.003965734038501978,0.04287879541516304,-0.007109933067113161,-0.1721576452255249,-0.10867905616760254,0.14542843401432037,-0.13812445104122162,0.22173620760440826,0.16692326962947845,0.08771058171987534,0.11933206766843796,0.11489381641149521,0.05213892087340355,-0.027421221137046814,-0.03952949494123459,-0.22520305216312408,-0.05725874379277229,0.10526610165834427,0.0438765250146389,0.14397989213466644,-0.0008373587625101209)
            descriptions.push(a)
            return new faceapi.LabeledFaceDescriptors(label, descriptions)
        })
    )
}

function convertFL32ToUint8(float32Array){
    let output = new Uint8Array(float32Array.length);
    for (let i = 0; i < float32Array.length; i++) {
        let tmp = Math.max(-1, Math.min(1, float32Array[i]));
        tmp = tmp < 0 ? (tmp * 0x8000) : (tmp * 0x7FFF);
        tmp = tmp / 256;
        output[i] = tmp + 128;
    }
    return output;

}

function convertToFL32(incomingData){
    return Float32Array.from(incomingData)
}

