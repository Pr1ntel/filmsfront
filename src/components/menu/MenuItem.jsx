import {
    AppstoreOutlined,  DesktopOutlined, LoadingOutlined,
    MenuFoldOutlined, MenuUnfoldOutlined,
    YoutubeOutlined, PlusOutlined, QuestionOutlined, ScissorOutlined
} from '@ant-design/icons';
import {Button, Menu} from 'antd';
import {useState} from 'react';
import {Link} from "react-router-dom";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Главная', '1', <DesktopOutlined/>),
    getItem('Жанры фильмов', 'sub1', <YoutubeOutlined/>, [
        getItem('', '2', <Link to ="/horror">Ужасы</Link>) ,
        getItem('', '3', <Link to ="/comedy">Комедии</Link>),
        getItem('', '4', <Link to ="/action">Боевик</Link>),
        getItem('', '5', <Link to ="/fantasy">Фантастика</Link>),
    ]),
    getItem('Действия', 'sub2', <AppstoreOutlined/>, [
        getItem('Добавить фильм', '7',<Link to ="/addFilm"></Link>),
        getItem('Удалить фильм', '8',<Link to ="/deleteFilm"></Link>),
        getItem('Поиск фильма', '9',<Link to ="/findFilm"></Link>,),
        getItem('На будущее', 'sub3', <LoadingOutlined/>,
            [getItem('Буду смотреть', '11'),
                getItem('Что то', '12')]),
    ]),
];
const MenuItem = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div
            style={{
                width: 256,
            }}
        >
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1', 'sub2']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}

            />

        </div>
    );
};
export default MenuItem;