import React from 'react'
import './styles.less'
import 'antd/dist/antd.less'
import { Input, AutoComplete, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from "react-router-dom";

function Navbar() {


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
            style={{
                width: 250,
            }}
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
    return (
        <div className="headerLine">
            <div className="headerCW">
                <div className="navCW">
                    <div className="row">
                        <div className="col-3">
                            <button className="nvRight" style={{ fontSize: 24, fontWeight: 'bold', target: 'red' }}>Car World</button>
                        </div>
                        <div className="col-6">
                            <div className="divMenu">
                                <Menu mode="horizontal" className="MenuCW" defaultSelectedKeys={[location.pathname]}>
                                    <Menu.Item key="/trang-chu" className="navRight1"><a href="/trang-chu" style={{textDecoration: 'none'}}>Trang chủ</a></Menu.Item>
                                    <Menu.Item key="/tin-xe" className="navRight2"><a href="/tin-xe" style={{textDecoration: 'none'}}>Tin xe</a></Menu.Item>
                                    <Menu.Item key="/su-kien" className="navRight3"><a href="/su-kien" style={{textDecoration: 'none'}}>Sự kiện</a></Menu.Item>
                                    <Menu.Item key="/cuoc-thi" className="navRight4"><a href="/cuoc-thi" style={{textDecoration: 'none'}}>Cuộc thi</a></Menu.Item>
                                    <Menu.Item key="/ve-chung-toi" className="navRight5"><a href="/ve-chung-toi" style={{textDecoration: 'none'}}>Về chúng tôi</a></Menu.Item>
                                </Menu>
                            </div>
                        </div>
                        <div className="col-3">
                            <button className="navRight6"><Complete /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
