import { send } from 'emailjs-com';

export default function emailJSApproveEmail(mail) {
  return send('service_9czz5bj', 'template_c92olon', mail, 'g0pNZy3CHjiuC2qd5').then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    },
  );
}
