import * as faceapi from 'face-api.js';

// Load models and weights
export async function loadModels() {
  const MODEL_URL = process.env.PUBLIC_URL + '/models';
  await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
  await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
  await faceapi.loadFaceRecognitionModel(MODEL_URL);
}

export async function getFullFaceDescription(blob, inputSize = 512) {
  // tiny_face_detector options
  let scoreThreshold = 0.7;
  const OPTION = new faceapi.TinyFaceDetectorOptions({
    inputSize,
    scoreThreshold
  });
  const useTinyModel = true;

  // fetch image to api
  let img = await faceapi.fetchImage(blob);

  // detect all faces and generate full description from image
  // including landmark and descriptor of each face
  let fullDesc = await faceapi
    .detectAllFaces(img, OPTION)
    .withFaceLandmarks(useTinyModel)
    .withFaceDescriptors();
  return fullDesc;
}

const maxDescriptorDistance = 0.5;

export async function createMatcher(faceProfile) {
  console.log('go 1', faceProfile)
  if (!faceProfile.length) return;
  const labeledDescription = faceProfile.filter(profile => profile.image_descriptor &&
    profile.image_with_mask_descriptor).map(profile => {
    if (profile.image_descriptor && profile.image_with_mask_descriptor) {
      return new faceapi.LabeledFaceDescriptors(
        profile.student_name + ' ' + profile.sid + ' ' + profile.status,
        [Float32Array.from(profile.image_descriptor.split(',')), Float32Array.from(profile.image_descriptor.split(','))]
      )
    }

  })
  let faceMatcher = new faceapi.FaceMatcher(
    labeledDescription,
    maxDescriptorDistance
  );
  return faceMatcher;
}
