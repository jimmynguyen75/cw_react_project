import { Button, Col, Row, Skeleton, Tag } from 'antd';
import 'antd/dist/antd.less';
import Aos from 'aos';
import 'aos/dist/aos.css';
import moment from 'moment';
import 'moment/locale/vi';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useHistory } from "react-router-dom";
import CategoriesService from '../../services/CategoriesService';
import ContestService from '../../services/ContestService';
import EventService from '../../services/EventService';
import removeVietnamese from '../../utils/removeVietnamese';
import './styles.less';
function Home() {
    const [post, setPost] = useState(null);
    const [event, setEvent] = useState(null);
    const [contest, setContest] = useState(null);
    const history = useHistory();
    ReactGA.initialize("G-1CF3W5KCBY");
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    useEffect(() => {
        Aos.init({ duration: 2000 });
        document.title = "Trang chủ";
    }, []);
    useEffect(() => {
        let data = []
        CategoriesService.getAll()
            .then((res) => {
                res.data.forEach((category) => {
                    if (category.Status === 1) {
                        data.push(category)
                    }
                })
                setPost(data)
            })
            .catch((err) => { console.log(err) })
    }, [])
    useEffect(() => {
        EventService.getEvents().then((res) => { setEvent(res.data) }).catch((err) => { console.log(err) })
    }, [])
    useEffect(() => {
        ContestService.getContests().then((res) => { setContest(res.data) }).catch((err) => { console.log(err) })
    }, [])
    function handleDetail(record) {
        let repo = removeVietnamese.removeVietnameseTones(record.Title)
        history.push(`/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: record });
    }
    function handleEventDetail(record) {
        let repo = removeVietnamese.removeVietnameseTones(record.Title)
        history.push(`/su-kien/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: record });
    }
    function handleContestDetail(record) {
        let repo = removeVietnamese.removeVietnameseTones(record.Title)
        history.push(`/cuoc-thi/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: record });
    }
    const [dis, setDis] = useState("none")
    const [skele, setSkele] = useState("")
    useEffect(() => {
        post !== null && setDis(true)
        post !== null && setSkele("none")
    }, [post])
    return (
        <>
            <div className="bodyCW">
                <div className="contentCW">
                    <div className="row" style={{ display: skele }}>
                        <div className="col-9">
                            <Row gutter={15}>
                                <Col span={16} >
                                    <Skeleton.Avatar active shape="square" style={{ width: '575.1px', height: 383 }} />
                                </Col>
                                <Col span={8}>
                                    <Row>
                                        <Col>
                                            <Skeleton.Avatar active shape="square" style={{ width: 279.3, marginBottom: 10, height: 186.3 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Skeleton.Avatar active shape="square" style={{ width: 279.3, height: 186.3 }} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <div style={{ marginTop: 15, marginBottom: 10 }}> <Skeleton.Input active style={{ width: 100 }} /></div>
                            <div style={{ width: 870 }}>
                                <div className="row">
                                    <div className="col-4" style={{ paddingLeft: 12 }}>
                                        <Skeleton.Avatar active shape="square" style={{ width: 279.3, marginBottom: 10, height: 186.3 }} />
                                        <Skeleton.Input active style={{ width: 150, height: 35, borderRadius: 10, marginBottom: 10 }} />
                                        <Skeleton.Input active style={{ width: 279.3, height: 25, borderRadius: 10, marginBottom: 10 }} />
                                        <Skeleton.Input active style={{ width: 279.3, height: 25, borderRadius: 10, marginBottom: 10 }} />
                                        <Skeleton.Input active style={{ width: 220, height: 25, borderRadius: 10, marginBottom: 10 }} />
                                    </div>
                                    <div className="col-4" style={{ paddingLeft: 8 }}>
                                        <Skeleton.Avatar active shape="square" style={{ width: 279.3, marginBottom: 10, height: 186.3 }} />
                                        <Skeleton.Input active style={{ width: 150, height: 35, borderRadius: 10, marginBottom: 10 }} />
                                        <Skeleton.Input active style={{ width: 279.3, height: 25, borderRadius: 10, marginBottom: 10 }} />
                                        <Skeleton.Input active style={{ width: 279.3, height: 25, borderRadius: 10, marginBottom: 10 }} />
                                        <Skeleton.Input active style={{ width: 220, height: 25, borderRadius: 10, marginBottom: 10 }} />
                                    </div>
                                    <div className="col-4" style={{ paddingLeft: 5 }}>
                                        <Skeleton.Avatar active shape="square" style={{ width: 279.3, marginBottom: 10, height: 186.3 }} />
                                        <Skeleton.Input active style={{ width: 150, height: 35, borderRadius: 10, marginBottom: 10 }} />
                                        <Skeleton.Input active style={{ width: 279.3, height: 25, borderRadius: 10, marginBottom: 10 }} />
                                        <Skeleton.Input active style={{ width: 279.3, height: 25, borderRadius: 10, marginBottom: 10 }} />
                                        <Skeleton.Input active style={{ width: 220, height: 25, borderRadius: 10, marginBottom: 10 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="featuredEC">
                                <Skeleton.Input active style={{ width: 200 }} />
                            </div>
                            <Skeleton.Avatar active shape="square" style={{ width: 279.3, marginBottom: 10, height: 370, borderRadius: 18 }} />
                            <Skeleton.Avatar active shape="square" style={{ width: 279.3, marginBottom: 10, height: 370, borderRadius: 18 }} />
                        </div>
                    </div>
                    <div style={{ display: dis }}>
                        <div className="row">
                            <div className="col-9">
                                <Row gutter={15}>
                                    <Col span={16} style={{ cursor: 'pointer' }} onClick={() => handleDetail(post != null && post[0])}>
                                        <div className="backgroundFeatured">
                                            <div className="featuredTitle">{post != null && post[0].Title}</div>
                                            <div className="featuredDes">{post != null && post[0].Overview} </div>
                                        </div>
                                        <img alt="" style={{ width: '100%', height: 383, objectFit: 'cover' }} src={post != null && post[0].FeaturedImage} />
                                    </Col>
                                    <Col span={8}>
                                        <Row>
                                            <Col style={{ cursor: 'pointer' }} onClick={() => handleDetail(post != null && post[1])}>
                                                <div className="backgroundFeatured1">
                                                    <div className="featuredTitle1">{post != null && post[1].Title}</div>
                                                </div>
                                                <img alt="" style={{ width: '100%', marginBottom: 10, height: 186.3, objectFit: 'cover' }} src={post != null && post[1].FeaturedImage} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ cursor: 'pointer' }} onClick={() => handleDetail(post != null && post[2])}>
                                                <div className="backgroundFeatured1">
                                                    <div className="featuredTitle1">{post != null && post[2].Title}</div>
                                                </div>
                                                <img alt="" style={{ width: '100%', marginBottom: 10, height: 186.3, objectFit: 'cover' }} src={post != null && post[2].FeaturedImage} />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div className="newsTitle">Tin tức</div>
                                <div className="newsContent" style={{ width: 870 }}>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="news1" style={{ cursor: 'pointer' }} onClick={() => handleDetail(post != null && post[3])}>
                                                <img alt="" style={{ height: 150, witdth: 'auto', objectFit: 'cover' }} src={post != null && post[3].FeaturedImage} />
                                                <div className="newsTitleinBox" style={{ fontSize: 18, paddingTop: 5 }}>{post != null && post[3].Title}</div>
                                                <div className="newsDesinBox">{post != null && post[3].Overview} </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="news1" style={{ cursor: 'pointer' }} onClick={() => handleDetail(post != null && post[4])}>
                                                <img alt="" style={{ height: 150, witdth: 'auto', objectFit: 'cover' }} src={post != null && post[4].FeaturedImage} />
                                                <div className="newsTitleinBox" style={{ fontSize: 18, paddingTop: 5 }}>{post != null && post[4].Title}</div>
                                                <div className="newsDesinBox">{post != null && post[4].Overview} </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="news1" style={{ cursor: 'pointer' }} onClick={() => handleDetail(post != null && post[5])}>
                                                <img alt="" style={{ height: 150, witdth: 'auto', objectFit: 'cover' }} src={post != null && post[5].FeaturedImage} />
                                                <div className="newsTitleinBox" style={{ fontSize: 18, paddingTop: 5 }}>{post != null && post[5].Title}</div>
                                                <div className="newsDesinBox">{post != null && post[5].Overview} </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="featuredEC">
                                    <span style={{ paddingBottom: 2, borderBottom: '4px solid rgb(245, 126, 79)' }}>SỰ KIỆN</span> NỔI BẬT
                                </div>
                                <Col onClick={() => handleEventDetail(event != null && event[0])} style={{ cursor: 'pointer' }}>
                                    {/* <div style={{ position: 'absolute', right: 0 }} ><i class="fas fa-eye"  style={{ color: 'white', background: '#ff7643', padding: 5, fontSize: 16, borderRadius: 30, margin: '10px 10px 0px 0px' }} /></div> */}
                                    <div className="activeHome">
                                        <div className="activeBodyHome" style={{ fontWeight: 600, color: 'black' }}>{event != null && event[0].Title}</div>
                                        <div style={{ backgroundColor: '#FBF7F0', width: '100%', padding: '6px 10px 6px 10px', marginBottom: 10, marginTop: 10, borderRadius: 18, fontSize: 14, color: '#555454' }}>{event != null && moment(event[0].StartDate).format('lll')}</div>
                                        <div className="activeVenue" style={{ border: '1px solid #DFDFDF', padding: '6px 10px 6px 10px', marginBottom: 10, marginTop: 10, borderRadius: 18, fontSize: 14, color: '#555454' }}><i className="fas fa-map-marked-alt" style={{ color: '#ff7643' }}></i>&nbsp;&nbsp;{event != null && event[0].Venue}</div>
                                        <Row>
                                            {/* <Avatar.Group size="small" maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                                <Tooltip title="Ant User" placement="top">
                                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                                </Tooltip>
                                                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                                                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                                            </Avatar.Group> */}
                                            <Tag style={{borderRadius: 90}} color="#2db7f5">#{event != null && event[0].CurrentParticipants}</Tag>
                                            <div style={{  fontSize: 14, color: '#555454' }}>Người đã tham gia</div>
                                        </Row>
                                    </div>
                                    <div className="activeImg"><img alt="" src={event != null && event[0].Image} className='activeImgHover' /></div>
                                </Col>
                                <Col style={{ marginTop: 10, marginBottom: 10, cursor: 'pointer' }} onClick={() => handleEventDetail(event != null && event[1])}>
                                    <div className="activeHome">
                                        <div className="activeBodyHome" style={{ fontWeight: 600, color: 'black' }}>{event != null && event[1].Title}</div>
                                        <div style={{ backgroundColor: '#FBF7F0', width: '100%', padding: '6px 10px 6px 10px', marginBottom: 10, marginTop: 10, borderRadius: 18, fontSize: 14, color: '#555454' }}>{event != null && moment(event[1].StartDate).format('lll')}</div>
                                        <div className="activeVenue" style={{ border: '1px solid #DFDFDF', padding: '6px 10px 6px 10px', marginBottom: 10, marginTop: 10, borderRadius: 18, fontSize: 14, color: '#555454' }}><i className="fas fa-map-marked-alt" style={{ color: '#ff7643' }}></i>&nbsp;&nbsp;{event != null && event[1].Venue}</div>
                                        <Row>
                                            {/* <Avatar.Group size="small" maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                                <Avatar src={event != null && event[1].Image} />
                                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                                <Tooltip title="Ant User" placement="top">
                                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                                </Tooltip>
                                                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                                                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                                            </Avatar.Group> */}
                                            <Tag style={{ borderRadius: 90 }} color="#87d068">#{event != null && event[1].CurrentParticipants}</Tag>
                                            <div style={{ marginLeft: 4, fontSize: 14, color: '#555454' }}>Người đã tham gia</div>
                                        </Row>
                                    </div>
                                    <div className="activeImg"><img alt="" src={event != null && event[1].Image} /></div>
                                </Col>
                                <Button type='primary' onClick={() => (window.location.href = '/su-kien')} style={{ display: 'flex', margin: 'auto', borderRadius: 5, width: 120, justifyContent: 'center' }} >Xem thêm</Button>
                            </div>
                        </div>
                        <div className="EC">Sự kiện</div>
                        <div className="row" data-aos="zoom-in">
                            <div className="col-4" >
                                <div className="ECsmall" onClick={() => handleEventDetail(event != null && event[2])} style={{ cursor: 'pointer' }}>
                                    <img alt="" src={event != null && event[2].Image} />
                                    <div className="ECsmallTitle" style={{ fontSize: 20 }}>{event != null && event[2].Title}</div>
                                    <div className="des">{event != null && event[2].Description}</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="ECsmall" onClick={() => handleEventDetail(event != null && event[3])} style={{ cursor: 'pointer' }}>
                                    <img alt="" src={event != null && event[3].Image} />
                                    <div className="ECsmallTitle" style={{ fontSize: 20 }}>{event != null && event[3].Title}</div>
                                    <div className="des">{event != null && event[3].Description}</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="ECsmall" onClick={() => handleEventDetail(event != null && event[4])} style={{ cursor: 'pointer' }}>
                                    <img alt="" src={event != null && event[4].Image} />
                                    <div className="ECsmallTitle" style={{ fontSize: 20 }}>{event != null && event[4].Title}</div>
                                    <div className="des">{event != null && event[4].Description}</div>
                                </div>
                            </div>
                        </div>
                        <div className="EC" style={{ paddingTop: 20 }} >Cuộc thi</div>
                        <div className="row" data-aos="zoom-in">
                            <div className="col-4">
                                <div className="ECsmall" onClick={() => handleContestDetail(contest != null && contest[0])} style={{ cursor: 'pointer' }}>
                                    <img alt="" src={contest != null && contest[0].Image} />
                                    <div className="ECsmallTitle" style={{ fontSize: 20 }}>{contest != null && contest[0].Title}</div>
                                    <div className="des">{contest != null && contest[0].Description}</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="ECsmall" onClick={() => handleContestDetail(contest != null && contest[1])} style={{ cursor: 'pointer' }}>
                                    <img alt="" src={contest != null && contest[1].Image} />
                                    <div className="ECsmallTitle" style={{ fontSize: 20 }}>{contest != null && contest[1].Title}</div>
                                    <div className="des">{contest != null && contest[1].Description}</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="ECsmall" onClick={() => handleContestDetail(contest != null && contest[2])} style={{ cursor: 'pointer' }}>
                                    <img alt="" src={contest != null && contest[2].Image} />
                                    <div className="ECsmallTitle" style={{ fontSize: 20 }}>{contest != null && contest[2].Title}</div>
                                    <div className="des">{contest != null && contest[2].Description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
