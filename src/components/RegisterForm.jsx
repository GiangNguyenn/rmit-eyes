import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Form, Input, InputNumber, Button} from 'antd';
import 'antd/dist/antd.css';
import axios from '../http-common';
import {loadModels} from "../api/face";
import * as face from 'face-api.js'
const faceApi = require('../api/face')
const layout = {
  labelCol: {
    span: 50,
  },
  wrapperCol: {
    span: 50,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sid, setSid] = useState('');
  const [image, setImage] = useState('');
  const [imageDescriptor, setImageDescriptor] = useState('');
  const [imageWithMask, setImageWithMask] = useState('');
  const [imageWithMaskDescriptor, setImageWithMaskDescriptor] = useState(null);
  const [vaccineDocument, setVaccineDocument] = useState('');
  const onFinish = () => {
    const data = {
      name,
      email,
      phone,
      sid,
      image,
      imageWithMask,
      vaccineDocument,
      imageDescriptor,
      imageWithMaskDescriptor
    }
    axios
      .post('/auth/register', data)
      .then((res) => console.log('successfully added user!'));
  };
  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
  })

  const handleUpload = async (e) => {
    const data = new FormData();
    data.append('name', name);
    data.append('file', e.target.files[0]);
    fileToDataUri(e.target.files[0]).then(async uri => {
      const desc = await faceApi.getFullFaceDescription(uri)
      if (desc.length === 0) {
        alert('Wrong Image Uploaded! Please Upload your real image.')
        return;
      }
      const descriptionString = desc[0].descriptor.toString()
      //TODO: important
      // Validate Images here in the future
      // check existing uploaded image
      if (e.target.name === 'image') {
        setImageDescriptor(descriptionString)
      } else setImageWithMaskDescriptor(descriptionString)
    })
      axios
        .post('/upload', data)
        .then((res) => {
          switch (e.target.name) {
            case 'image':
              setImage(res.data);
              return;
            case 'imageWithMask':
              setImageWithMask(res.data);
              return;
            case 'vaccineDocument':
              setVaccineDocument(res.data);
              return;
          }
        })
        .catch((err) => console.log(err));

  };
  useEffect(async ()=>{
    await loadModels()
  }, [])

  const isValidInput = () => image && imageWithMask && vaccineDocument && imageDescriptor && imageWithMaskDescriptor;
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={name} onChange={(e) => setName(e.target.value)}/>
      </Form.Item>
      <Form.Item
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Student ID">
        <Input value={sid} onChange={(e) => setSid(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Phone">
        <Input value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Face Image Without Mask">
        <input type={'file'} name={'image'} onChange={handleUpload}/>
      </Form.Item>
      <Form.Item label="Face Image With Mask">
        <input type={'file'} name={'imageWithMask'} onChange={handleUpload}/>
      </Form.Item>
      <Form.Item label="Your Vaccine Document(s)">
        <input type={'file'} name={'vaccineDocument'} onChange={handleUpload}/>
      </Form.Item>
      <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
        <Button disabled={!isValidInput()} color="red" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
