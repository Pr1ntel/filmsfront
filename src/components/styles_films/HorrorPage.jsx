import React, {useEffect, useState} from 'react';
import {Col, Row, Table} from "antd";
import MenuItem from "../menu/MenuItem";
import TableItemMain from "../menu/TableItemMain";
import FilmsApiWorker from "../../api/Api";
import {useNavigate} from "react-router-dom";

function HorrorPage () {
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
    const getHorrorFilms = () => {
        filmsApiWorker.getHorrorFilms()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("getComedyFilms ERRRROR");
            });
    }
    useEffect(() => {
        getHorrorFilms();
    }, []);
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
                                        {record.descriptionFilm}
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
export default HorrorPage;