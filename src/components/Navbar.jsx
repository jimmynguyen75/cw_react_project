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
    function news() {
        history.push('/tin-tuc');
    }
    function event() {
        history.push('/su-kien');
    }
    function contest() {
        history.push('/cuoc-thi');
    }
    function about() {
        history.push('/ve-chung-toi');
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
                                    <Menu.Item key="/trang-chu" className="navRight1" onClick={home}>Trang chủ</Menu.Item>
                                    <Menu.Item key="/tin-tuc" className="navRight2" onClick={news}>Tin tức</Menu.Item>
                                    <Menu.Item key="/su-kien" className="navRight3" onClick={event}>Sự kiện</Menu.Item>
                                    <Menu.Item key="/cuoc-thi" className="navRight4" onClick={contest}>Cuộc thi</Menu.Item>
                                    <Menu.Item key="/ve-chung-toi" className="navRight5" onClick={about}>Về chúng tôi</Menu.Item>
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
