import MenuItem from "../menu/MenuItem";
import {AudioOutlined} from '@ant-design/icons';
import {Col, Input, Space, Row, Select,Button} from 'antd';
import React from "react";

const {Search} = Input;

const onSearch = (value) => console.log(value);

const DeleteFilm = () => (
    <div>
        <Row>
            <Col span={8}><MenuItem/></Col>
            <Col span={16}>
                <div style={{opacity: 1}}>
                    <div>
                        <Input placeholder="Название фильма" style={{
                            width:'19%'
                        }} />
                        </div>
                        <div>
                    <Space
                        direction="vertical"
                        style={{
                            width: '18%',
                        }}
                    />
                        <Select
                            placeholder="Жанр"
                            style={{
                                width: '19%',
                            }}
                        />
                            </div>
                    <div>
                        <Button type="primary" danger ghost
                        style={{
                            width:'7%',
                        }}>
                            Удалить
                        </Button>
                    </div>


                </div>
            </Col>
        </Row>
    </div>
);

export default DeleteFilm;