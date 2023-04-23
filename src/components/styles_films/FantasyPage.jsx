import React from 'react';
import {Col, Row, Table} from "antd";
import MenuItem from "../menu/MenuItem";
import TableItemMain from "../../TableItemMain";
import {useNavigate} from "react-router-dom";

function FantasyPage () {
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
                name: 'фантастика1',
                age: '18.2.1990',
                address: '190',
                description: 'Тут какое то описание',
            },
            {
                key: 2,
                name: 'фантастика2',
                age: '18.2.1990',
                address: '180',
                description: 'описание',
            },
            {
                key: 3,
                name: 'фантастика3',
                age: '18.2.1990',
                address: '177',
                description: 'Описание',
            },
            {
                key: 4,
                name: 'фантастика4',
                age: '18.2.1990',
                address: '156',
                description: 'Описание',
            },
            {
                key: 5,
                name: 'фантастика4',
                age: '18.2.1990',
                address: '156',
                description: 'Описание',
            },
            {
                key: 6,
                name: 'фантастика4',
                age: '18.2.1990',
                address: '156',
                description: 'Описание',
            },
            {
                key: 7,
                name: 'фантастика4',
                age: '18.2.1990',
                address: '156',
                description: 'Описание',
            },
            {
                key: 8,
                name: 'фантастика4',
                age: '18.2.1990',
                address: '156',
                description: 'Описание',
            },
            {
                key: 9,
                name: 'фантастика4',
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
                                        <p className={"deskriptionBox"}
                                            style={{
                                                margin: 0,
                                                 background:"#f5f5dc",

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
    }
export default FantasyPage;