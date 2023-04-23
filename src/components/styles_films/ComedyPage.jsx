import React from 'react';
import {Col, Row, Table} from "antd";
import MenuItem from "../menu/MenuItem";
import TableItemMain from "../../TableItemMain";
import {useNavigate} from "react-router-dom";

function ComedyPage () {
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
        {
            title: 'ActionPage',
            dataIndex: '',
            key: 'x',
            render: () => <a>Delete</a>,
        },
    ];
    const data = [
        {
            key: 1,
            name: 'Комедия1',
            age: '18.2.1990',
            address: '190',
            description: 'Тут какое то описание',
        },
        {
            key: 2,
            name: 'Комедия2',
            age: '18.2.1990',
            address: '180',
            description: 'описание',
        },
        {
            key: 3,
            name: 'Комедия3',
            age: '18.2.1990',
            address: '177',
            description: 'Описание',
        },
        {
            key: 4,
            name: 'Комедия4',
            age: '18.2.1990',
            address: '156',
            description: 'Описание',
        },
    ];
    const navigate = useNavigate()
    return (
        <div>
            <Row >
                <Col span={4}><MenuItem/></Col>
                <Col span={20} >
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
                            dataSource={data}

                        />
                    </div>
                </Col>

            </Row>
        </div>
    )
};
export default ComedyPage;