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
            <Input.Search size="middle" placeholder="Search in Car World" />
        </AutoComplete>
    );
    const history = useHistory();
    const location = useLocation();
    const home = () => {
        history.push('/home')
        console.log(location.pathname)
    }
    function news() {
        history.push('/news');
    }
    function event() {
        history.push('/event');
    }
    function contest() {
        history.push('/contest');
    }
    function about() {
        history.push('/about');
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
                                    <Menu.Item key="/home" className="navRight1" onClick={home}>Home</Menu.Item>
                                    <Menu.Item key="/news" className="navRight2" onClick={news}>News</Menu.Item>
                                    <Menu.Item key="/event" className="navRight3" onClick={event}>Event</Menu.Item>
                                    <Menu.Item key="/contest" className="navRight4" onClick={contest}>Contest</Menu.Item>
                                    <Menu.Item key="/about" className="navRight5" onClick={about}>About</Menu.Item>
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
