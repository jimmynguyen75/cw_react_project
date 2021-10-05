import { EnvironmentOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { Spin, Row, Col, Carousel, Image, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import f2 from './f2.png';
import 'moment/locale/vi';
import moment from 'moment';
function ViewEvent() {
    const history = useHistory();
    const location = useLocation();
    const [record, setRecord] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState([]);
    useEffect(() => {
        setRecord(location.state != null && location.state.record)
    })
    useEffect(() => {
        document.title = title
        switch (location.pathname) {
            case (location.pathname):
                return (setTitle(location.state != null && location.state.record.Title))
        }
    }, [location.pathname, title])
    useEffect(() => {
        let ex = location.state != null && location.state.record.Image.split("|")
        if (ex.length > 1) {
            ex.pop();
        }
        setImg(ex)
    }, [record])
    return (
        <div className="headerCW">
            <div className="navCW">
                <Spin
                    size="large"
                    spinning={record == null ? true : false}
                >
                    <Row>
                        <Col span={12}>
                            <div className="left" >
                                <div className="row" style={{
                                    height: 300,
                                    backgroundColor: "#9DBAD5",
                                    color: "white",
                                }}>
                                    <div className="col-3" style={{ fontSize: 28, fontWeight: "bold" }}>
                                        <div style={{ border: "2px solid white", margin: "10px", height: "150px", width: "150px" }}>
                                            <div style={{ textAlign: "center" }}>{moment(record.StartDate).format('DD')}</div>
                                            <div style={{ textAlign: "center" }}>Tháng {moment(record.StartDate).format('MM')}</div>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div style={{ margin: "10px", marginLeft: "30px" }}>
                                            <div>Thời gian bắt đầu: {moment(record.StartDate).format('HH:mm DD/MM/YYYY')}</div>
                                            <div>Thời gian kết thúc: {moment(record.EndDate).format('HH:mm DD/MM/YYYY')}</div>
                                            <div>Thời gian bắt đầu đăng ký: {moment(record.StartRegister).format('HH:mm DD/MM/YYYY')}</div>
                                            <div>Thời gian kết thúc đăng ký: {moment(record.EndRegister).format('HH:mm DD/MM/YYYY')}</div>
                                            <div>Số lượng tham gia: {record.MinParticipants} - {record.MaxParticipants}</div>
                                            <div>Đã tham gia: {record.CurrentParticipants}</div>
                                            <div>Địa điểm: {record.Venue}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="right" style={{ backgroundColor: '#9DBAD5', height: 300 }}>
                                <Carousel effect="fade" >
                                    {img.map((object, i) => {
                                        return (
                                            <div >
                                                <Image preview={false} style={{ width: '610px', height: '300px', objectFit: 'scale-down' }} key={i} src={object} />
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        </Col>
                        <div style={{ width: '1200px', margin: '5px 12px 5px 5px', }}>
                            <Input.TextArea style={{ backgroundColor: 'white', color: 'black', border: 'none' }} disabled={true} autoSize={{ minRows: 2, maxRows: 100 }} value={record.Description}></Input.TextArea>
                        </div>
                    </Row>
                </Spin>
            </div>
        </div>
    )
}

export default ViewEvent;
