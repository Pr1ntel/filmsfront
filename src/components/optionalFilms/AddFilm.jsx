import React, {useState} from 'react';
import {Button, Col, Form, Input, InputNumber, Row, Table} from 'antd';
import MenuItem from "../menu/MenuItem";
import {json} from "react-router-dom";


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
    let [nameFilms, setNameFilms] = useState("");
    let [releaseDate, setReleaseDate] = useState("");
    let [durationFilm, setDurationFilm] = useState("");
    let [styleFilm, setStyleFilm] = useState("");
    let [descriptionFilm, setDescriptionFilm] = useState("");

    let photoFilm = "";

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
                                <Input value={nameFilms}
                                       onChange={event => {
                                           setNameFilms(event.target.value);
                                           console.log(nameFilms);
                                       }}/>
                            </Form.Item>
                            <Form.Item
                                name={['styleFilm']}
                                label="Жанр фильма"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите жанр фильма!"
                                    },
                                ]}
                            >
                                <Input value={styleFilm}
                                            onChange={event => {
                                                setStyleFilm(event.target.value);
                                                console.log(styleFilm)
                                            }}/>
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
                                <Input value={releaseDate}
                                       onChange={event => {
                                           setReleaseDate(event.target.value);
                                           console.log(releaseDate);
                                       }}/>
                            </Form.Item>
                            <Form.Item
                                name={['durationFilm']}
                                label="Длительность(Минут)"
                            >
                                <Input value={durationFilm}
                                             onChange={event => {
                                                 setDurationFilm(event.target.value);
                                                 console.log(durationFilm)
                                             }}/>
                            </Form.Item>
                            <Form.Item
                                name={['descriptionFilm']}
                                label="Описание фильма"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите описание фильма!",
                                    },
                                ]}
                            >
                                <Input value={descriptionFilm}
                                       onChange={event => {
                                           setDescriptionFilm(event.target.value);
                                           console.log(descriptionFilm)
                                       }}/>
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    ...layout.wrapperCol,
                                    offset: 8,
                                }}
                            >
                                <Button type="primary" htmlType="submit"
                                      //onClick={A}
                                    >
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

