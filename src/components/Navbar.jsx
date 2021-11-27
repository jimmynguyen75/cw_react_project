import { Col, Input, Menu, Row } from 'antd';
import 'antd/dist/antd.less';
import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import CategoriesService from '../services/CategoriesService';
import removeVietnamese from '../utils/removeVietnamese';
import './styles.less';
function Navbar() {
    const { Search } = Input;
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
            size="small"
        />
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
                                    <Menu.Item key="/" className="navRight1"><div  onClick={() => history.push("/")} style={{ textDecoration: 'none' }}>Trang chủ</div></Menu.Item>
                                    <SubMenu key="SubMenu" className="navRight2" title="Chuyên mục">
                                        <Menu.ItemGroup title="Xe">
                                            <Menu.Item key="/tin-xe"><div onClick={() => history.push("/tin-xe")} style={{ textDecoration: 'none' }}>Tin Xe</div></Menu.Item>
                                            <Menu.Item key="/tin-phu-kien"><div onClick={() => (history.push("/tin-phu-kien"))} style={{ textDecoration: 'none' }}>Tin Phụ Kiện</div></Menu.Item>
                                        </Menu.ItemGroup>
                                        <Menu.ItemGroup title="Hoạt động">
                                            <Menu.Item key="/tin-su-kien"><div onClick={() => history.push("/tin-su-kien")} style={{ textDecoration: 'none' }}>Tin Sự kiện</div></Menu.Item>
                                            <Menu.Item key="/tin-cuoc-thi"><div onClick={() => history.push("/tin-cuoc-thi")} style={{ textDecoration: 'none' }}>Tin Cuộc thi</div></Menu.Item>
                                        </Menu.ItemGroup>
                                    </SubMenu>
                                    {/* <Menu.Item key="/tin-xe" className="navRight2"><a href="/tin-xe" style={{ textDecoration: 'none' }}>Tin phụ kiện</a></Menu.Item> */}
                                    <Menu.Item key="/su-kien" className="navRight3"><div onClick={() => history.push("/su-kien")} style={{ textDecoration: 'none' }}>Sự kiện</div></Menu.Item>
                                    <Menu.Item key="/cuoc-thi" className="navRight4"><div onClick={() => history.push("/cuoc-thi")} style={{ textDecoration: 'none' }}>Cuộc thi</div></Menu.Item>
                                    <Menu.Item key="/ve-chung-toi" className="navRight5"><div onClick={() => history.push("/ve-chung-toi")} style={{ textDecoration: 'none' }}>Về chúng tôi</div></Menu.Item>
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
