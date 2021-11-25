import { Col, Input, Menu, Row } from 'antd';
import 'antd/dist/antd.less';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import CategoriesService from '../services/CategoriesService';
import removeVietnamese from '../utils/removeVietnamese'
import './styles.less';
import { AutoComplete } from 'antd';
function Navbar() {
    const { Search } = Input;
    const [data, setData] = useState([])
    const { SubMenu } = Menu;
    const history = useHistory();
    const location = useLocation();
    const onSearch = value => {
        let result = []
        CategoriesService.search(value)
            .then((response) => {
                response.data.forEach((res) => {
                    if (res.Status === 1) {
                        result.push(res)
                    }
                })
                let repo = removeVietnamese.removeVietnameseTones(value)
                setData(result)
                history.push({
                    pathname: '/tim-kiem',
                    search: '?' + repo.replace(/\s+/g, '-').toLowerCase(),
                    state: ({ data: result, search: value })
                })
            })
            .catch((err) => {
                console.log(err)
            })
    };
    const Complete = () => (
        <Search
            className="searchSVG"
            placeholder="Tìm kiếm"
            onSearch={onSearch}
            enterButton
            allowClear
        />
    );
    console.log("value: ", data)
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
                                    <Menu.Item key="/" className="navRight1"><a onClick={() => history.push("/")} style={{ textDecoration: 'none' }}>Trang chủ</a></Menu.Item>
                                    <SubMenu key="SubMenu" className="navRight2" title="Chuyên mục">
                                        <Menu.ItemGroup title="Xe">
                                            <Menu.Item key="/tin-xe"><a onClick={() => history.push("/tin-xe")} style={{ textDecoration: 'none' }}>Tin Xe</a></Menu.Item>
                                            <Menu.Item key="/tin-phu-kien"><a onClick={() => history.push("/tin-phu-kien")} style={{ textDecoration: 'none' }}>Tin Phụ Kiện</a></Menu.Item>
                                        </Menu.ItemGroup>
                                        <Menu.ItemGroup title="Hoạt động">
                                            <Menu.Item key="/tin-su-kien"><a onClick={() => history.push("/tin-su-kien")} style={{ textDecoration: 'none' }}>Tin Sự kiện</a></Menu.Item>
                                            <Menu.Item key="/tin-cuoc-thi"><a onClick={() => history.push("/tin-cuoc-thi")} style={{ textDecoration: 'none' }}>Tin Cuộc thi</a></Menu.Item>
                                        </Menu.ItemGroup>
                                    </SubMenu>
                                    {/* <Menu.Item key="/tin-xe" className="navRight2"><a href="/tin-xe" style={{ textDecoration: 'none' }}>Tin phụ kiện</a></Menu.Item> */}
                                    <Menu.Item key="/su-kien" className="navRight3"><a onClick={() => history.push("/su-kien")} style={{ textDecoration: 'none' }}>Sự kiện</a></Menu.Item>
                                    <Menu.Item key="/cuoc-thi" className="navRight4"><a onClick={() => history.push("/cuoc-thi")} style={{ textDecoration: 'none' }}>Cuộc thi</a></Menu.Item>
                                    <Menu.Item key="/ve-chung-toi" className="navRight5"><a onClick={() => history.push("/ve-chung-toi")} style={{ textDecoration: 'none' }}>Về chúng tôi</a></Menu.Item>
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
