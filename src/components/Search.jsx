import React from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { Divider, Row, Col, Image, List, Card, Tag } from 'antd';
import { useState, useEffect } from 'react';
import removeVietnamese from '../utils/removeVietnamese'
export default function Search() {
    const history = useHistory();
    const location = useLocation();
    const [data, setData] = useState([])
    useEffect(() => {
        setData(location.state.data)
    }, [location, data])
    console.log("ok", data)
    const { Meta } = Card;
    function handleDetail(record) {
        let repo = removeVietnamese.removeVietnameseTones(record.Title)
        history.push(`/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: record });
    }
    function convertType(type) {
        if (type === 1) {
            return 'Xe'
        } else if (type === 2) {
            return 'Phụ kiện'
        } else if (type === 3) {
            return 'Sự kiện'
        } else if (type === 4) {
            return 'Cuộc thi'
        }
    }
    return (
        <div className="headerCW">
            <div className="navCW">
                <Divider orientation="left" style={{ fontSize: 24 }}>Kết quả cho "{location !== null && location.state.search}"</Divider>
                {/* <Row gutter={30} style={{ marginBottom: 30, cursor: 'pointer' }} onClick={() => {
                    handleDetail(firstData)
                }} >
                    <Col span={16}>
                        <Image preview={false} alt="" style={{ height: 300, width: 500 }} src={firstData != null && firstData.FeaturedImage} />
                    </Col>
                    <Col span={8}>
                        <div style={{ fontSize: 22, marginBottom: 10, fontWeight: '600' }}>{firstData != null && firstData.Title}</div>
                        <div style={{ fontSize: 16 }}>{firstData != null && firstData.Overview}</div>
                    </Col>
                </Row> */}
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data !== [] && data}
                    renderItem={item => (
                        <List.Item
                            onClick={() => {
                                handleDetail(item)
                            }}>
                            <Card
                                cover={<Image alt="" src={item.FeaturedImage} preview={false} style={{ height: 200, maxWidth: '100%' }} />}
                                hoverable
                            >
                                <Meta
                                    style={{ height: 155 }}
                                    title={<div style={{ height: 55, fontSize: 18 }}>{item.Title}</div>}
                                    description={
                                        <div className="textOverflow">
                                            <Tag color={item.Type === 1 ? 'magenta' : item.Type === 2 ? 'gold' : item.Type === 3 ? 'green' : 'geekblue' }>{convertType(item.Type)}</Tag>- {item.Overview}</div>
                                    }
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}
