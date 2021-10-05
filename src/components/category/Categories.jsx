import React, { useEffect, useState } from 'react'
import { Divider, Row, Col, Image, List, Card } from 'antd';
import CategoriesService from '../../services/CategoriesService';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import removeVietnamese from '../../utils/removeVietnamese'
import './style.less'
function Categories() {
    const location = useLocation();
    const [data, setData] = useState({ cars: [], accessories: [], events: [], contests: [] })
    const firstData =
        location.pathname == '/tin-xe' ? data.cars[0] :
            location.pathname == '/tin-phu-kien' ? data.accessories[0] :
                location.pathname == '/tin-su-kien' ? data.events[0] :
                    location.pathname == '/tin-cuoc-thi' ? data.contests[0] : null
    const history = useHistory();
    const { Meta } = Card;
    const [title, setTitle] = useState("")
    function handleDetail(record) {
        let repo = removeVietnamese.removeVietnameseTones(record.Title)
        history.push(`/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: record });
    }
    useEffect(() => {
        document.title = title
        switch (location.pathname) {
            case '/tin-xe':
                return setTitle('Tin xe')
            case '/tin-phu-kien':
                return setTitle('Tin phụ kiện')
            case '/tin-su-kien':
                return setTitle('Tin sự kiện')
            case '/tin-cuoc-thi':
                return setTitle('Tin cuộc thi')
        }
    }, [location.pathname, title])
    useEffect(() => {
        const fetchData = async () => {
            const cars = await CategoriesService.getCars();
            const accessories = await CategoriesService.getAccessories();
            const events = await CategoriesService.getEvents();
            const contests = await CategoriesService.getContests();
            setData({ cars: cars.data, accessories: accessories.data, events: events.data, contests: contests.data })
        }
        fetchData();
    }, [])
    return (
        <div className="headerCW">
            <div className="navCW">
                <Divider orientation="left" style={{ fontSize: 32 }}>TIN XE</Divider>
                <Row gutter={30} style={{ marginBottom: 30, cursor: 'pointer' }} onClick={() => {
                    handleDetail(firstData)
                }} >
                    <Col span={16}>
                        <Image preview={false} alt="" style={{ height: 500, width: 780 }} src={firstData != null && firstData.FeaturedImage} />
                    </Col>
                    <Col span={8}>
                        <div style={{ fontSize: 22, marginBottom: 10, fontWeight: '600' }}>{firstData != null && firstData.Title}</div>
                        <div style={{ fontSize: 16 }}>{firstData != null && firstData.Overview}</div>
                    </Col>
                </Row>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={
                        location.pathname == '/tin-xe' ? data.cars.filter(function (value, index, arr) { return index !== 0 }) :
                            location.pathname == '/tin-phu-kien' ? data.accessories.filter(function (value, index, arr) { return index !== 0 }) :
                                location.pathname == '/tin-su-kien' ? data.events.filter(function (value, index, arr) { return index !== 0 }) :
                                    location.pathname == '/tin-cuoc-thi' ? data.contests.filter(function (value, index, arr) { return index !== 0 }) : null}
                    renderItem={item => (
                        <List.Item
                            onClick={() => {
                                handleDetail(item)
                            }}>
                            <Card
                                cover={<Image alt="" src={item.FeaturedImage} preview={false} style={{ height: 250, maxWidth: '100%' }} />}
                                hoverable
                            >
                                <Meta
                                    style={{ height: 155 }}
                                    title={<div style={{ height: 55, fontSize: 18 }}>{item.Title}</div>}
                                    description={<div className="textOverflow">{item.Overview}</div>}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}
export default Categories;