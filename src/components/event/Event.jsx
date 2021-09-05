import React, { useEffect, useState } from 'react'
import './styles.less'
import f1 from './f2.png'
import { List, Card, Spin } from 'antd'
import EventService from '../../services/EventService'
import { useHistory, useLocation } from "react-router-dom";

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
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 6,
                        }}
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 3,
                            xl: 3,
                            xxl: 3,
                        }}
                        dataSource={events}
                        onChange={(pagination) => {
                            document.body.scrollTop = 0; // For Safari
                            document.documentElement.scrollTop = 0;
                        }}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                    hoverable
                                    style={{ width: 340 }}
                                    cover={<img width={340} style={{ height: 300 }} src={item.image} />}
                                >
                                    <Meta
                                        title={item.title}
                                    //description="www.instagram.com"
                                    />
                                    <div className="additional">
                                        <p>{item.description}</p>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Spin>
            </div>
        </div>
    )
}

export default Event;
