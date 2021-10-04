import React from 'react'
import './styles.less'
import 'antd/dist/antd.less'
import { Input, AutoComplete, Menu, Dropdown, message, Row, Col } from 'antd';
import { UserOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from "react-router-dom";
function Navbar() {
    const { SubMenu } = Menu;
    const renderTitle = (title) => (
        <span>
            {title}
            <a
                style={{
                    float: 'right',
                }}
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >
                more
            </a>
        </span>
    );
    const renderItem = (title, count) => ({
        value: title,
        label: (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {title}
                <span>
                    <UserOutlined /> {count}
                </span>
            </div>
        ),
    });
    const options = [
        {
            label: renderTitle('News'),
            options: [renderItem('News', 10000), renderItem('News UI', 10600)],
        }
    ];
    const Complete = () => (
        <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            options={options}
        >
            <Input.Search size="middle" placeholder="Tìm kiếm" />
        </AutoComplete>
    );
    const history = useHistory();
    const location = useLocation();
    const home = () => {
        history.push('/trang-chu')
        console.log(location.pathname)
    }

    const menu = (
        <Menu >
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd menu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );
    return (
        <div className="headerLine">
            <div className="headerCW">
                <div className="navCW">
                    <Row gutter={15}>
                        <Col span={4}>
                            <button className="nvRight" style={{ fontSize: 24, fontWeight: 'bold', target: 'red' }}>Car World</button>
                        </Col>
                        <Col span={14}>
                            <div className="divMenu">
                                <Menu mode="horizontal" className="MenuCW" defaultSelectedKeys={[location.pathname]}>
                                    <Menu.Item key="/" className="navRight1"><a href="/" style={{ textDecoration: 'none' }}>Trang chủ</a></Menu.Item>
                                    <SubMenu key="SubMenu" className="navRight2" title="Chuyên mục">
                                        <Menu.ItemGroup title="Xe">
                                            <Menu.Item key="/tin-xe"><a href="/tin-xe" style={{ textDecoration: 'none' }}>Tin Xe</a></Menu.Item>
                                            <Menu.Item key="/tin-phu-kien"><a href="/tin-phu-kien" style={{ textDecoration: 'none' }}>Tin Phụ Kiện</a></Menu.Item>
                                        </Menu.ItemGroup>
                                        <Menu.ItemGroup title="Hoạt động">
                                            <Menu.Item key="/tin-su-kien"><a href="/tin-su-kien" style={{ textDecoration: 'none' }}>Tin Sự kiện</a></Menu.Item>
                                            <Menu.Item key="/tin-cuoc-thi"><a href="/tin-cuoc-thi" style={{ textDecoration: 'none' }}>Tin Cuộc thi</a></Menu.Item>
                                        </Menu.ItemGroup>
                                    </SubMenu>
                                    {/* <Menu.Item key="/tin-xe" className="navRight2"><a href="/tin-xe" style={{ textDecoration: 'none' }}>Tin phụ kiện</a></Menu.Item> */}
                                    <Menu.Item key="/su-kien" className="navRight3"><a href="/su-kien" style={{ textDecoration: 'none' }}>Sự kiện</a></Menu.Item>
                                    <Menu.Item key="/cuoc-thi" className="navRight4"><a href="/cuoc-thi" style={{ textDecoration: 'none' }}>Cuộc thi</a></Menu.Item>
                                    <Menu.Item key="/ve-chung-toi" className="navRight5"><a href="/ve-chung-toi" style={{ textDecoration: 'none' }}>Về chúng tôi</a></Menu.Item>
                                </Menu>
                            </div>
                        </Col>
                        <Col span={6}>
                            <button className="navRight6" style={{ width: '100%' }}><Complete /></button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
