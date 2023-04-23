import React from "react";
import MenuItem from "./menu/MenuItem";
import TableItemMain from "./TableItemMain";
import { Col, Row } from 'antd';

function App() {
        return (

            <Row>
                <Col span={4}><MenuItem /></Col>
                <Col span={20}><TableItemMain /></Col>
            </Row>


        )
}

            export default App;