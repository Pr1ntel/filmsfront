import React, {useEffect, useState} from 'react';
import {Table, Col, Row, Input, Space, Select, Button} from "antd";
import MenuItem from "../menu/MenuItem";
import FilmsApiWorker from "../../api/Api";
import {useNavigate} from "react-router-dom";

const FindFilm = () => {
    const columns = [
        {
            title: 'Название',
            dataIndex: 'nameFilms',
            key: '1',
            description:'descriptionFilm'
        },
        {
            title: 'Дата выхода',
            dataIndex: 'releaseDate',
            key: '2',
        },
        {
            title: 'Длительность(Минут)',
            dataIndex: 'durationFilm',
            key: '3',
        },

    ];
    let [battlefieldData, setBattlefieldData] = useState("");
    let filmsApiWorker = new FilmsApiWorker();
    let [data, setData] = useState([]);
    const getFilmById = () => {
        filmsApiWorker.getFilmById(battlefieldData)
            .then(response => {
                console.log(response.data);
                let temp = [];
                temp.push(response.data);
                setData(temp);
            })
            .catch(error => {
                console.log("getFindFilm ERRRROR");
            });
    }
    useEffect(() => {
        getFilmById();
    }, []);
    const navigate = useNavigate()
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
                                        {record.descriptionFilm}
                                    </p>
                                ),
                                rowExpandable: (record) => record.name !== 'Not Expandable',
                            }}
                            dataSource={data}

                        />
                    </div>
                </Col>
                <Col span={8}>
                    <h2 style={{
                        color:"blue",
                    }}>Поиск фильма</h2>
                    <div>
                        <Input placeholder="ID фильма" style={{
                            width: '40%',
                        }}
                        value={battlefieldData}
                               onChange={event => {
                                   setBattlefieldData(event.target.value);
                                   console.log(battlefieldData)
                               }}
                        />
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
                                htmlType="submit"
                                style={{
                                    width: '13%',
                                }}
                        onClick={getFilmById}>
                            Поиск
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>

    );
};

export default FindFilm;