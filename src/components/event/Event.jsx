import React, { useEffect, useState } from 'react'
import './styles.less'
import f1 from './f2.png'
import { List, Card, Spin, Space } from 'antd'
import EventService from '../../services/EventService'
import { useHistory, useLocation } from "react-router-dom";
import { DoubleRightOutlined, FieldTimeOutlined, EnvironmentOutlined } from '@ant-design/icons';

function Event() {
    const { Meta } = Card;
    const [events, setEvents] = useState();

    useEffect(() => {
        EventService
            .getTotalEvents()
            .then(res => {
                console.log(res)
                setEvents(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <div className="event">
            <img src={f1} />
            <div className="eventTitle33"><span className="eventTitle34">SỰ KIỆN</span></div>
            <div className="event33">
                <Spin
                    size="large"
                    spinning={events == null ? true : false}
                >
                    <List
                        itemLayout="horizontal"
                        pagination={{
                            onChange: page => {
                                document.body.scrollTop = 540; // For Safari
                                document.documentElement.scrollTop = 540;
                            },
                            pageSize: 5,
                        }}
                        dataSource={events}
                        renderItem={item => (
                            <List.Item
                            >
                                <div style={{ width: 1200 }}>
                                    <div className="row">
                                        <div className="col-1" style={{ paddingRight: 0 }}>
                                            <div className="eventDateTime" style={{ height: 200, textAlign: 'center' }}>
                                                <div style={{ fontSize: 32, fontWeight: 600, paddingTop: 15 }}>29</div>
                                                <div style={{ fontSize: 16, fontWeight: 600, paddingTop: 10 }}>July</div>
                                                <div style={{ fontSize: 16, fontWeight: 600, paddingTop: 5 }}>2021</div>
                                                <div style={{ fontSize: 16, fontWeight: 600, paddingTop: 15, color: '#ff7643' }}><FieldTimeOutlined /></div>
                                                <div style={{ fontSize: 15, fontWeight: 550 }}>8:00 am</div>
                                            </div>
                                        </div>
                                        <div className="col-9" style={{}}>
                                            <div className="row">
                                                <div className="col-4" style={{ padding: 0 }}>
                                                    <div style={{ float: 'left' }} className="eventImage">
                                                        {<img src={f1} style={{ width: 298, height: 200 }} />}
                                                    </div>
                                                </div>
                                                <div className="col-8" style={{ padding: 0, height: 200, backgroundColor: '#f4fcff' }}>
                                                    <div style={{ height: 170 }}>
                                                        <div className="eventTitle">
                                                            {item.title}
                                                        </div>
                                                        <div className="eventDes">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                    <div className="findOutMore">
                                                        <div style={{ float: 'left' }}>Find out more </div>
                                                        <DoubleRightOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2" style={{ paddingLeft: 0, backgroundColor: '#d8f4ff' }}>
                                            <div style={{ textAlign: 'center', height: 160 }}>
                                                <div><EnvironmentOutlined style={{ fontSize: 24, paddingTop: 20, color: '#ff7643' }} /></div>
                                                <div style={{ fontSize: 15, fontWeight: 600, paddingTop: 5, paddingLeft: 9, paddingRight: 9, color: 'rgb(1, 65, 85)' }}>Đại Học FPT, P.Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh</div>
                                            </div>
                                            <a href="http://maps.google.com/?q=Đại học FPT Khu Công nghệ cao" target="_blank" style={{ textAlign: 'center', display: 'block', fontSize: 18, fontWeight: 600, color: '#ff7643' }}>
                                                Google Maps
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </List.Item>
                        )}
                    />
                </Spin>
            </div>
        </div>
    )
}

export default Event;
