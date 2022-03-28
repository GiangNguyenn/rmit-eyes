import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Form, Input, InputNumber, Button} from 'antd';
import 'antd/dist/antd.css';
import axios from "../http-common";
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
        axios.post('/auth/register', {
            name, email, phone, sid, image, imageWithMask, vaccineDocument
        }).then(res => console.log('successfully added user!'))
    };
    const handleUpload = (e) => {
        const data = new FormData();
        data.append("name", name);
        data.append("file", e.target.files[0]);
        axios.post("/upload", data)
            .then(res => {
                switch (e.target.name) {
                    case "image":
                        setImage(res.data);
                        return;
                    case "imageWithMask":
                        setImageWithMask(res.data);
                        return;
                    case "vaccineDocument":
                        setVaccineDocument(res.data);
                        return;
                }
            })
            .catch(err => console.log(err));
    }

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
                <Input value={name} onChange={e => setName(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Student ID"
            >
                <Input value={sid} onChange={e => setSid(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Phone">
                <Input value={phone} onChange={e => setPhone(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Face Image Without Mask">
                <input type={'file'} name={'image'} onChange={handleUpload} />
            </Form.Item>
            <Form.Item label="Face Image With Mask">
                <input type={'file'} name={'imageWithMask'} onChange={handleUpload} />
            </Form.Item>
            <Form.Item label="Your Vaccine Document(s)">
                <input type={'file'} name={'vaccineDocument'} onChange={handleUpload} />
            </Form.Item>
            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;
