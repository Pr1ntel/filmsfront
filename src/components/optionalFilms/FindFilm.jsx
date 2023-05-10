import React, {useEffect, useState} from 'react';
import {Table, Col, Row, Input, Space, Select, Button} from "antd";
import MenuItem from "../menu/MenuItem";
import FilmsApiWorker from "../../api/Api";
import {useNavigate} from "react-router-dom";

const FindFilm = () => {
    let [battlefieldData, setBattlefieldData] = useState("");
    const columns = [
        {
            title: 'Название',
            dataIndex: 'nameFilms',
            key: 'name',
            description:'descriptionFilm'
        },
        {
            title: 'Дата выхода',
            dataIndex: 'releaseDate',
            key: 'age',
        },
        {
            title: 'Длительность(Минут)',
            dataIndex: 'durationFilm',
            key: 'address',
        },

    ];
    let filmsApiWorker = new FilmsApiWorker();
    let [data, setData] = useState([]);
    const getFilmById = () => {
        filmsApiWorker.getFilmById()
            .then(response => {
                setData(response.data);
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