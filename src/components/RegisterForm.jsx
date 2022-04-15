import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';
import axios from '../http-common';
import TextField from '@material-ui/core/TextField';
import { FormControl, Grid } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import PublishIcon from '@material-ui/icons/Publish';

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
  const [imageWithMask, setImageWithMask] = useState('');
  const [vaccineDocument, setVaccineDocument] = useState('');
  const onFinish = () => {
    axios
      .post('/auth/register', {
        name,
        email,
        phone,
        sid,
        image,
        imageWithMask,
        vaccineDocument,
      })
      .then((res) => console.log('successfully added user!'));
  };
  const handleUpload = (e) => {
    const data = new FormData();
    data.append('name', name);
    data.append('file', e.target.files[0]);
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

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Grid container spacing={7}>
        <Grid item xs={6}>
          {/* <Form.Item
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item> */}
          <Grid xs={12}>
            <TextField
              label="Name"
              value={name}
              rules={[
                {
                  required: true,
                },
              ]}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          {/* <Form.Item
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item> */}
          <Grid xs={12}>
            <TextField
              label="Email"
              value={email}
              rules={[
                {
                  type: 'email',
                },
              ]}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          {/* <Form.Item label="Student ID">
            <Input value={sid} onChange={(e) => setSid(e.target.value)} />
          </Form.Item> */}
          <Grid xs={12}>
            <TextField label="Student ID" value={sid} onChange={(e) => setSid(e.target.value)} />
          </Grid>
          {/* <Form.Item label="Phone">
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Item> */}
          <Grid xs={12}>
            <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Grid>
          <Grid>
            <DropzoneArea
              name={'vaccineDocument'}
              type={'file'}
              dropzoneText={'Your Vaccine Document(s)'}
              onChange={() => handleUpload}
              Icon={PublishIcon}
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          {/* <Form.Item label="Face Image Without Mask">
            <input type={'file'} name={'image'} onChange={handleUpload} />
          </Form.Item>
          <Form.Item label="Face Image With Mask">
            <input type={'file'} name={'imageWithMask'} onChange={handleUpload} />
          </Form.Item>
          <Form.Item label="Your Vaccine Document(s)">
            <input type={'file'} name={'vaccineDocument'} onChange={handleUpload} />
          </Form.Item> */}
          <DropzoneArea
            name={'image'}
            type={'file'}
            dropzoneText={'Face Image Without Mask'}
            onChange={() => handleUpload}
            Icon={PublishIcon}
          />
          <DropzoneArea
            name={'imageWithMask'}
            type={'file'}
            dropzoneText={'Face Image With Mask'}
            onChange={() => handleUpload}
            Icon={PublishIcon}
          />
        </Grid>
      </Grid>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button color="red" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
