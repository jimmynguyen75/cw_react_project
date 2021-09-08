import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import EventService from '../../services/EventService';
import { List, Card, Spin, Space } from 'antd'
import { EnvironmentOutlined, FieldTimeOutlined } from '@ant-design/icons'
import f2 from './f2.png'

function EventPost() {
    const history = useHistory();
    const location = useLocation();
    const { title, id } = useParams();
    const [eventDetail, setEventDetail] = useState([]);

    useEffect(() => {
        EventService.getEventDetail(id).then((res) => {
            console.log(res.data)
            setEventDetail(res.data);
        })
            .catch(err => {
                console.log(err)
            })
    }, []);
    document.title = eventDetail.title;

    return (
        <Spin
            size="large"
            spinning={eventDetail == null ? true : false}
        >
            <div className="event33">
                <div className="row">
                    <div className="col-5" >
                        <div className="left" >
                            <div className="row" style={{
                                height: 300,
                                backgroundColor: "#9DBAD5",
                                color: "white",
                            }}>
                                <div className="col-4" style={{ fontSize: 28, fontWeight: "bold" }}>
                                    <div style={{ border: "2px solid white", margin: "10px", height: "150px", width: "150px" }}>
                                        <div style={{ textAlign: "center" }}>25</div>
                                        <div style={{ textAlign: "center" }}>Tháng 9</div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div style={{ margin: "10px" }}>
                                        {eventDetail.description}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div><FieldTimeOutlined /><span>Thời gian</span></div>
                                <div><EnvironmentOutlined /><span>Địa điểm</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7" style={{padding: '0px'}}>
                        <div className="right">
                            <img style={{height: 300, width: 695}} src={f2} />
                        </div>
                    </div>
                </div>
            </div>
        </Spin>
    )
}

export default EventPost;
