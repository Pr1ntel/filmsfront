import React from 'react';
import {Col, Row} from "antd";
import MenuItem from "../menu/MenuItem";
import TableItemMain from "../../TableItemMain";

const HorrorPage = () => {
    return (
        <div>
            <Row>
                <Col span={4}><MenuItem /></Col>
                <Col span={20}><TableItemMain /></Col>
            </Row>
        </div>
    );
};

export default HorrorPage;