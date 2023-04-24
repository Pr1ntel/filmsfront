import React from 'react';
import {Button, Col, Form, Input, Row, Table} from 'antd';
import MenuItem from "../menu/MenuItem";


const MyFormItemContext = React.createContext([]);

function toArr(str) {
    return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({prefix, children}) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({name, ...props}) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};
const AddFilm = () => {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <div>
            <Row >
                <Col span={4}><MenuItem/></Col>
                <Col span={20} >
                    <div style={{opacity: 0.9}}>

                        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                            <MyFormItemGroup prefix={['user']}>
                                <MyFormItemGroup prefix={['name']}>
                                    <MyFormItem name="firstName" label="First Name">
                                        <Input/>
                                    </MyFormItem>
                                    <MyFormItem name="lastName" label="Last Name">
                                        <Input/>
                                    </MyFormItem>
                                </MyFormItemGroup>

                                <MyFormItem name="age" label="Age">
                                    <Input/>
                                </MyFormItem>
                            </MyFormItemGroup>

                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>

            </Row>
        </div>
    )
};


export default AddFilm;

