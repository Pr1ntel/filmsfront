import React from 'react';
import {Table, Col, Row, Input, Space, Select, Button} from "antd";
import MenuItem from "../menu/MenuItem";

const FindFilm = () => {
    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Дата выхода',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Длительность(Минут)',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Фото',
            dataIndex: 'photo',
            key: 'photo',
        },

    ];
    return (
        <div>
            <Row>
                <Col span={4}><MenuItem/></Col>
                <Col span={12}>
                    <div style={{opacity: 0.9}}>
                        <Table
                            columns={columns}
                            expandable={{
                                expandedRowRender: (record) => (
                                    <p
                                        style={{
                                            margin: 0,
                                        }}
                                    >
                                        {record.description}
                                    </p>
                                ),
                                rowExpandable: (record) => record.name !== 'Not Expandable',
                            }}


                        />
                    </div>
                </Col>
                <Col span={8}>
                    <h2 style={{
                        color:"blue",
                    }}>Поиск фильма</h2>
                    <div>
                        <Input placeholder="Название фильма" style={{
                            width: '40%'
                        }}/>
                    </div>
                    <div>
                        <Space
                            direction="vertical"
                            style={{
                                width: '40%',
                            }}
                        />
                    </div>
                    <div>
                        <Button type="primary"
                                style={{
                                    width: '13%',
                                }}>
                            Поиск
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>

    );
};

export default FindFilm;