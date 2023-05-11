import React, {useState} from 'react';
import {Button, Col, Form, Input, InputNumber, Row, Table} from 'antd';
import MenuItem from "../menu/MenuItem";



const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} должна быть от ${min} до ${max}',
    },
};

const onFinish = (values) => {
    console.log(values);
};

const AddFilm = () => {
    let [nameFilms , setNameFilms] = useState("");
    let [releaseDate , setReleaseDate] = useState("");
    let [durationFilm , setDurationFilm] = useState("");
    let [descriptionFilm , setDescriptionFilm] = useState("");

    const onFinish = (value) => {
        console.log(value);
    };

    return (
        <div>
            <Row>
                <Col span={4}><MenuItem/></Col>
                <Col span={20}>
                    <div style={{opacity: 0.9}}>

                        <Form
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{
                                maxWidth: 600,
                            }}
                            validateMessages={validateMessages}
                        >
                            <Form.Item
                                name={['nameFilms']}
                                label="Название фильма"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите название фильма!"
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name={['releaseDate']}
                                label="Дата выхода"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите дату выхода фильма!"
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name={['durationFilm']}
                                label="Длительность(Минут)"
                                rules={[
                                    {
                                        type: 'number',
                                        min: 0,
                                        max: 500,
                                    },
                                ]}
                            >
                                <InputNumber/>
                            </Form.Item>
                            <Form.Item
                                name={['descriptionFilm']}
                                label="Описание фильма"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите описание фильма!"
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    ...layout.wrapperCol,
                                    offset: 8,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Добавить
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
};


export default AddFilm;

