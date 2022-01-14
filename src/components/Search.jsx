import { Card, Divider, Image, List, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import CategoriesService from '../services/CategoriesService';
import removeVietnamese from '../utils/removeVietnamese';
export default function Search() {
    const history = useHistory();
    const location = useLocation();
    const [data, setData] = useState([])
    useEffect(() => {
        setData(location.state.data)
    }, [location, data])
    const { Meta } = Card;
    function handleDetail(record) {
        CategoriesService.getPostById(record.Id).then((res) => {
            let repo = removeVietnamese.removeVietnameseTones(record.Title)
            history.push(`/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: res.data });
            console.log(res.data)
        }).catch((error) => {
            console.error(error)
        })
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
                <Divider orientation="left" style={{ fontSize: 24 }}>
                    {location !== null && (location.state.data.length !== 0 ? ("Kết quả cho '" + location.state.search + "'") : ('Không tìm thấy'))}
                </Divider>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data !== [] && data}
                    renderItem={item => (
                        <List.Item
                            onClick={() => {
                                handleDetail(item)
                            }}>
                            <Card
                                cover={<Image alt="" src={item.FeaturedImage} preview={false} style={{ height: 200, maxWidth: '100%', objectFit: 'cover' }} />}
                                hoverable
                            >
                                <Meta
                                    style={{ height: 155 }}
                                    title={<div style={{ height: 55, fontSize: 18 }}>{item.Title}</div>}
                                    description={
                                        <div className="textOverflow">
                                            <Tag color={item.Type === 1 ? 'magenta' : item.Type === 2 ? 'gold' : item.Type === 3 ? 'green' : 'geekblue'}>{convertType(item.Type)}</Tag>- {item.Overview}</div>
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
