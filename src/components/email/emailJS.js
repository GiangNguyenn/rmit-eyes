import { send } from 'emailjs-com';

export default function emailJS(mail) {
  return send('service_9czz5bj', 'template_a8cjx5i', mail, 'g0pNZy3CHjiuC2qd5').then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    },
  );
}
