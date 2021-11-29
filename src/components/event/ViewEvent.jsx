import { Carousel, Col, Image, Input, Row, Spin, Card } from 'antd';
import moment from 'moment';
import 'moment/locale/vi';
import React, { useEffect, useState } from 'react';
import EventService from '../../services/EventService'
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import removeVietnamese from '../../utils/removeVietnamese'
function ViewEvent() {
    const location = useLocation();
    const [record, setRecord] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState([]);
    const [events, setEvents] = useState([]);
    const history = useHistory();
    const { Meta } = Card;
    function handleEventDetail(record) {
        let repo = removeVietnamese.removeVietnameseTones(record.Title)
        history.push(`/su-kien/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: record });
    }
    useEffect(() => {
        setRecord(location.state != null && location.state.record)
    }, [location.state])
    useEffect(() => {
        document.title = title
        switch (location.pathname) {
            default:
                return (setTitle(location.state != null && location.state.record.Title))
        }
    }, [location.pathname, title, location.state])
    useEffect(() => {
        let ex = location.state != null && location.state.record.Image.split("|")
        if (ex.length > 1) {
            ex.pop();
        }
        setImg(ex)
    }, [record, location.state])
    useEffect(() => {
        let result = []
        EventService.getEvents()
            .then(res => {
                res.data.forEach((data) => {
                    if (record.Id !== data.Id) {
                        result.push(data)
                    }
                })
                let filtered = result.filter(function (value, index, arr) {
                    return index < 3
                })
                setEvents(filtered)
            })
            .catch(err => {
                console.error(err)
            })
    }, [record.Id])
    return (
        <div className="headerCW">
            <div className="navCW">
                <Spin
                    size="large"
                    spinning={record == null ? true : false}
                >
                    <Row style={{ width: '1180px' }}>
                        <Col span={12}>
                            <div className="left" >
                                <div className="row" style={{
                                    height: 300,
                                    backgroundColor: "#F1935C",
                                    color: "white",
                                }}>
                                    <Row>
                                        <div className="col-3" style={{ fontSize: 28, fontWeight: "bold" }}>
                                            <div style={{ border: "2px solid white", margin: "10px", height: "150px", width: "150px" }}>
                                                <div style={{ textAlign: "center" }}>{moment(record.StartDate).format('DD')}</div>
                                                <div style={{ textAlign: "center" }}>Tháng {moment(record.StartDate).format('MM')}</div>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div style={{ margin: "10px", marginLeft: "40px" }}>
                                                <div style={{ letterSpacing: 1, paddingBottom: 5, paddingTop: 15 }}><i className="far fa-clock" style={{ color: '#D35D6E' }}></i> Bắt đầu <span style={{ fontWeight: 500 }}>ĐĂNG KÝ</span>: {moment(record.StartRegister).format('HH:mm - DD/MM/YYYY')}</div>
                                                <div style={{ letterSpacing: 1, paddingBottom: 25 }}><i className="far fa-clock" style={{ color: '#D35D6E' }}></i> Kết thúc <span style={{ fontWeight: 500 }}>ĐĂNG KÝ</span>: {moment(record.EndRegister).format('HH:mm - DD/MM/YYYY')}</div>
                                                <div style={{ letterSpacing: 1, paddingBottom: 5 }}><i className="far fa-clock" style={{ color: '#FF7800' }}></i> Thời gian <span style={{ fontWeight: 500 }}>BẮT ĐẦU</span>: {moment(record.StartDate).format('HH:mm - DD/MM/YYYY')}</div>
                                                <div style={{ letterSpacing: 1, paddingBottom: 5 }}><i className="far fa-clock" style={{ color: '#FF7800' }}></i> Thời gian <span style={{ fontWeight: 500 }}>KẾT THÚC</span>: {moment(record.EndDate).format('HH:mm - DD/MM/YYYY')}</div>
                                            </div>
                                        </div>
                                    </Row>
                                    <div style={{ letterSpacing: 1, marginLeft: 10 }}><i className="fas fa-users" style={{ color: '#E36387' }}></i> <span style={{ fontWeight: '550' }}>Số lượng giới hạn:</span> {record.MinParticipants} - {record.MaxParticipants}</div>
                                    <div style={{ letterSpacing: 1, marginLeft: 10 }}><i className="fas fa-user-check" style={{ color: '#CBE2B0' }}></i>  <span style={{ fontWeight: '550' }}>Đã tham gia:</span> {record.CurrentParticipants}</div>
                                    <div style={{ marginLeft: 10, letterSpacing: 1 }}><i className="fas fa-map-marker-alt" style={{ color: '#A6B1E1' }}></i>  &nbsp;<span style={{ fontWeight: '550' }}>Địa điểm:</span> {record.Venue}</div>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="right" style={{ backgroundColor: '#F1935C', height: 300 }}>
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
                    </Row>
                    <div style={{ width: '1175px', marginLeft: '-10px' }}>
                        <div className="featuredEC" style={{ marginTop: 15, fontSize: 22 }}>
                            <span style={{ paddingBottom: 2, borderBottom: '4px solid rgb(245, 126, 79)' }}>MÔ TẢ</span> SỰ KIỆN
                        </div>
                        <Input.TextArea style={{ backgroundColor: 'white', color: 'black', border: 'none', fontSize: '18px' }} disabled={true} autoSize={{ minRows: 2, maxRows: 100 }} value={record.Description}></Input.TextArea>
                    </div>
                    <div className="newsTitle" style={{ marginTop: 30, width: 1160 }}>Sự kiện gợi ý</div>
                    <div className="site-card-wrapper" >
                        <Row gutter={16} style={{ width: '1175px' }}>
                            <Col span={8} onClick={() => { handleEventDetail(events.length !== 0 && events[0]) }}>
                                <Card
                                    cover={<Image alt="" src={events.length !== 0 && events[0].Image} preview={false} style={{ height: 250, maxWidth: '100%', objectFit: 'cover' }} />}
                                    hoverable
                                >
                                    <Meta
                                        style={{ height: 155 }}
                                        title={<div style={{ height: 55, fontSize: 18 }}>{events.length !== 0 && events[0].Title}</div>}
                                        description={<div className="textOverflow">{events.length !== 0 && events[0].Description}</div>}
                                    />
                                </Card>
                            </Col>
                            <Col span={8} onClick={() => { handleEventDetail(events.length !== 0 && events[1]) }}>
                                <Card
                                    cover={<Image alt="" src={events.length !== 0 && events[1].Image} preview={false} style={{ height: 250, maxWidth: '100%', objectFit: 'cover' }} />}
                                    hoverable
                                >
                                    <Meta
                                        style={{ height: 155 }}
                                        title={<div style={{ height: 55, fontSize: 18 }}>{events.length !== 0 && events[1].Title}</div>}
                                        description={<div className="textOverflow">{events.length !== 0 && events[1].Description}</div>}
                                    />
                                </Card>
                            </Col>
                            <Col span={8} onClick={() => { handleEventDetail(events.length !== 0 && events[2]) }}>
                                <Card
                                    cover={<Image alt="" src={events.length !== 0 && events[2].Image} preview={false} style={{ height: 250, maxWidth: '100%', objectFit: 'cover' }} />}
                                    hoverable
                                >
                                    <Meta
                                        style={{ height: 155 }}
                                        title={<div style={{ height: 55, fontSize: 18 }}>{events.length !== 0 && events[2].Title}</div>}
                                        description={<div className="textOverflow">{events.length !== 0 && events[2].Description}</div>}
                                    />
                                </Card>
                            </Col>
                        </Row>

                    </div>
                </Spin>
            </div>
        </div>
    )
}

export default ViewEvent;
