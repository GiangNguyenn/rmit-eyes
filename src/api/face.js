import * as faceapi from 'face-api.js';

// Load models and weights
export async function loadModels() {
  const MODEL_URL = process.env.PUBLIC_URL + '/models';
  await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
  await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
  await faceapi.loadFaceRecognitionModel(MODEL_URL);
}

const STATUS = {
  pending_to_approve: 'Pending ...',
  approved: 'Approved ✔',
};

export async function getFullFaceDescription(blob, inputSize = 512) {
  // tiny_face_detector options
  let scoreThreshold = 0.7;
  const OPTION = new faceapi.TinyFaceDetectorOptions({
    inputSize,
    scoreThreshold,
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
  // const temperature =(Math.random() * (38.2 - 36.5 + 1) + 36.5).toFixed(2)
  if (!faceProfile.length) return;
  const labeledDescription = faceProfile
    .filter((profile) => profile.image_descriptor && profile.image_with_mask_descriptor)
    .map((profile) => {
      if (profile.image_descriptor && profile.image_with_mask_descriptor) {
        return new faceapi.LabeledFaceDescriptors(
          profile.student_name + '----' + profile.sid + '----' + STATUS[profile.status],
          [Float32Array.from(profile.image_descriptor.split(','))],
        );
      }
    });
  let faceMatcher = new faceapi.FaceMatcher(labeledDescription, maxDescriptorDistance);
  return faceMatcher;
}
