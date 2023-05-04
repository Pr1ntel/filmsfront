import {Table, Col, Row} from "antd";
import {useNavigate} from "react-router-dom"
import React, {useEffect, useState} from "react";
import MenuItem from "../menu/MenuItem";
import FilmsApiWorker from "../../api/Api";


function ActionPage() {
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
    const getActionFilms = () => {
        filmsApiWorker.getActionFilms()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("getActionFilms ERRRROR");
            });
    }
    useEffect(() => {
        getActionFilms();
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
}


export default ActionPage;