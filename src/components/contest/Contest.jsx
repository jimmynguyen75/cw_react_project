import { DoubleRightOutlined, EnvironmentOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { List, Select, Spin } from 'antd';
import moment from 'moment';
import 'moment/locale/vi';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import ContestService from '../../services/ContestService';
import removeVietnamese from '../../utils/removeVietnamese';
import NumberFormat from 'react-number-format';
import f1 from './f3.jpg';
import './styles.less';
const { Option } = Select;
function Contest() {
    const [contests, setContests] = useState();
    const history = useHistory();
    const [thisMonth, setThisMonth] = useState([]);
    const [month, setMonth] = useState(moment().format('M'));
    function handleChange(value) {
        setMonth(value);
    }
    useEffect(() => {
        document.title = "Cuộc thi";
        let result = []
        ContestService
            .getContests()
            .then(res => {
                res.data.forEach(contest => {
                    if (moment(contest.StartDate).format('M-yyyy') !== moment().format(month + '-yyyy')) {
                        result.push(contest)
                    }
                })
                setContests(result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [month]);
    function handleClick(record) {
        let repo = removeVietnamese.removeVietnameseTones(record.Title)
        history.push(`/cuoc-thi/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: record });
    }
    useEffect(() => {
        let result = []
        ContestService.getContests()
            .then(res => {
                res.data.forEach(contest => {
                    if (moment(contest.StartDate).format('M-yyyy') === moment().format(month + '-yyyy')) {
                        result.push(contest)
                    }
                })
                setThisMonth(result)
            })
    }, [month])
    const monthNow = moment().format('M')
    return (
        <div className="contest">
            <img alt="" src={f1} />
            <div className="eventTitle33"><span className="eventTitle34">CUỘC THI THÁNG {month}</span>
                <Select defaultValue={monthNow} style={{ width: 130, float: 'right', marginTop: 15, marginRight: 12 }} onChange={handleChange}>
                    <Option value="1" disabled={1 < monthNow ? true : false}>Tháng 1</Option>
                    <Option value="2" disabled={2 < monthNow ? true : false}>Tháng 2</Option>
                    <Option value="3" disabled={3 < monthNow ? true : false}>Tháng 3</Option>
                    <Option value="4" disabled={4 < monthNow ? true : false}>Tháng 4</Option>
                    <Option value="5" disabled={5 < monthNow ? true : false}>Tháng 5</Option>
                    <Option value="6" disabled={6 < monthNow ? true : false}>Tháng 6</Option>
                    <Option value="7" disabled={7 < monthNow ? true : false}>Tháng 7</Option>
                    <Option value="8" disabled={8 < monthNow ? true : false}>Tháng 8</Option>
                    <Option value="9" disabled={9 < monthNow ? true : false}>Tháng 9</Option>
                    <Option value="10" disabled={10 < monthNow ? true : false}>Tháng 10</Option>
                    <Option value="11" disabled={11 < monthNow ? true : false}>Tháng 11</Option>
                    <Option value="12" disabled={12 < monthNow ? true : false}>Tháng 12</Option>
                </Select>
            </div>
            <div className="event33">
                <Spin size="large" spinning={contests == null ? true : false} >
                    <List itemLayout="horizontal"
                        pagination={{
                            onChange: page => {
                                document.body.scrollTop = 540; // For Safari
                                document.documentElement.scrollTop = 540;
                            },
                            pageSize: 3,
                        }}
                        dataSource={thisMonth}
                        renderItem={item => (
                            <List.Item>
                                <div className="rowHover" style={{ cursor: 'pointer' }} >
                                    <div style={{ width: 1160 }}>
                                        <div className="row">
                                            <div className="col-1" style={{ paddingRight: 0 }}>
                                                <div className="eventDateTime" style={{ height: 200, textAlign: 'center' }}>
                                                    <div style={{ fontSize: 32, fontWeight: 600, paddingTop: 15 }}>{moment(item.StartDate).format('DD')}</div>
                                                    <div style={{ fontSize: 16, fontWeight: 600, paddingTop: 10 }}>{moment(item.StartDate).format('MMM')}</div>
                                                    <div style={{ fontSize: 16, fontWeight: 600, paddingTop: 5 }}>{moment(item.StartDate).format('YYYY')}</div>
                                                    <div style={{ fontSize: 16, fontWeight: 600, paddingTop: 15, color: '#ff7643' }}><FieldTimeOutlined /></div>
                                                    <div style={{ fontSize: 15, fontWeight: 550 }}>{moment(item.StartDate).format('HH:mm')}</div>
                                                </div>
                                            </div>
                                            <div className="col-9" onClick={() => { handleClick(item) }}>
                                                <div className="row">
                                                    <div className="col-4" style={{ padding: 0 }}>
                                                        <div style={{ float: 'left' }} className="eventImage">
                                                            {<img alt="" src={item.Image} style={{ minWidth: '306px', minHeight: 200, width: 'auto', height: 'auto', maxHeight: '200px' }} />}
                                                        </div>
                                                    </div>
                                                    <div className="col-8" style={{ padding: 0, height: 200, backgroundColor: '#f4fcff' }}>
                                                        <div style={{ height: 170 }}>
                                                            <div className="eventTitle" style={{ height: 81, marginTop: 2 }}>
                                                                {item.Title}
                                                            </div>
                                                            <div className="eventDes">
                                                                {item.Description}
                                                            </div>
                                                        </div>
                                                        <div className="findOutMore">
                                                            <div style={{ float: 'left', fontSize: 14 }}>Chi tiết </div>
                                                            <DoubleRightOutlined />
                                                            <div style={{ float: 'right', fontSize: 14, marginRight: 10 }}>
                                                                <i style={{ color: '#87A8A4' }} className="fas fa-money-bill"></i>&nbsp;&nbsp;{item.Fee === 0 ? "Miễn phí" :
                                                                    <NumberFormat
                                                                        value={item.Fee}
                                                                        displayType="text"
                                                                        type="text"
                                                                        suffix=" vnđ"
                                                                        thousandSeparator={'.'}
                                                                        decimalSeparator={','}
                                                                    />}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2" style={{ paddingLeft: 0, backgroundColor: '#d8f4ff' }}>
                                                <div style={{ textAlign: 'center', height: 160 }}>
                                                    <div><EnvironmentOutlined style={{ fontSize: 24, paddingTop: 20, color: '#ff7643' }} /></div>
                                                    <div style={{ fontSize: 15, fontWeight: 600, paddingTop: 5, paddingLeft: 9, paddingRight: 9, color: 'rgb(1, 65, 85)' }}>{item.Venue}</div>
                                                </div>
                                                <a href={"http://maps.google.com/?q=" + item.Venue} rel="noopener noreferrer" target="_blank" style={{ textAlign: 'center', display: 'block', fontSize: 18, fontWeight: 600, color: '#ff7643' }}>
                                                    Google Maps
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </List.Item>
                        )}
                    />
                </Spin>
            </div>
            <div className="eventTitle33" style={{ marginTop: '-30px' }}><span className="eventTitle34">CÁC CUỘC THI</span></div>
            <div className="event33">
                <Spin size="large" spinning={contests == null ? true : false} >
                    <List itemLayout="horizontal"
                        pagination={{
                            onChange: page => {
                                document.body.scrollTop = 540; // For Safari
                                document.documentElement.scrollTop = 540;
                            },
                            pageSize: 3,
                        }}
                        dataSource={contests}
                        renderItem={item => (
                            <List.Item>
                                <div className="rowHover" style={{ cursor: 'pointer' }} >
                                    <div style={{ width: 1160 }}>
                                        <div className="row">
                                            <div className="col-1" style={{ paddingRight: 0 }}>
                                                <div className="eventDateTime" style={{ height: 200, textAlign: 'center' }}>
                                                    <div style={{ fontSize: 32, fontWeight: 600, paddingTop: 15 }}>{moment(item.StartDate).format('DD')}</div>
                                                    <div style={{ fontSize: 16, fontWeight: 600, paddingTop: 10 }}>{moment(item.StartDate).format('MMM')}</div>
                                                    <div style={{ fontSize: 16, fontWeight: 600, paddingTop: 5 }}>{moment(item.StartDate).format('YYYY')}</div>
                                                    <div style={{ fontSize: 16, fontWeight: 600, paddingTop: 15, color: '#ff7643' }}><FieldTimeOutlined /></div>
                                                    <div style={{ fontSize: 15, fontWeight: 550 }}>{moment(item.StartDate).format('HH:mm')}</div>
                                                </div>
                                            </div>
                                            <div className="col-9" onClick={() => { handleClick(item) }}>
                                                <div className="row">
                                                    <div className="col-4" style={{ padding: 0 }}>
                                                        <div style={{ float: 'left' }} className="eventImage">
                                                            {<img alt="" src={item.Image} style={{ minWidth: '306px', minHeight: 200, width: 'auto', height: 'auto', maxHeight: '200px' }} />}
                                                        </div>
                                                    </div>
                                                    <div className="col-8" style={{ padding: 0, height: 200, backgroundColor: '#f4fcff' }}>
                                                        <div style={{ height: 170 }}>
                                                            <div className="eventTitle" style={{ height: 81, marginTop: 2 }}>
                                                                {item.Title}
                                                            </div>
                                                            <div className="eventDes">
                                                                {item.Description}
                                                            </div>
                                                        </div>
                                                        <div className="findOutMore">
                                                            <div style={{ float: 'left', fontSize: 14 }}>Chi tiết</div>
                                                            <DoubleRightOutlined />
                                                            <div style={{ float: 'right', fontSize: 14, marginRight: 10 }}>
                                                                <i style={{ color: '#87A8A4' }} className="fas fa-money-bill"></i>&nbsp;&nbsp;{item.Fee === 0 ? "Miễn phí" :
                                                                    <NumberFormat
                                                                        value={item.Fee}
                                                                        displayType="text"
                                                                        type="text"
                                                                        suffix=" vnđ"
                                                                        thousandSeparator={'.'}
                                                                        decimalSeparator={','}
                                                                    />}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2" style={{ paddingLeft: 0, backgroundColor: '#d8f4ff' }}>
                                                <a href={"http://maps.google.com/?q=" + item.Venue} rel="noopener noreferrer" target="_blank" style={{ textAlign: 'center', display: 'block', fontSize: 18, fontWeight: 600, color: '#ff7643' }}>

                                                    <div style={{ textAlign: 'center', height: 160 }}>
                                                        <div><EnvironmentOutlined style={{ fontSize: 24, paddingTop: 20, color: '#ff7643' }} /></div>
                                                        <div style={{ fontSize: 15, fontWeight: 600, paddingTop: 5, paddingLeft: 9, paddingRight: 9, color: 'rgb(1, 65, 85)' }}>{item.Venue}</div>
                                                    </div>
                                                    Google Maps
                                                </a>
                                            </div>
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

export default Contest;