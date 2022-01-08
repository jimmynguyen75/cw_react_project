import { Card, Divider, Image, List, Tag, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import CategoriesService from '../services/CategoriesService';
import removeVietnamese from '../utils/removeVietnamese';
function Brands() {
    const history = useHistory();
    const location = useLocation();
    const [data, setData] = useState([])
    const { Meta } = Card;
    console.log(location.state)
    function handleDetail(record) {
        let repo = removeVietnamese.removeVietnameseTones(record.Title)
        history.push(`/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: record });
    }
    useEffect(() => {
        CategoriesService.getPostByBrandId(location.state.Id)
            .then((result) => {
                setData(result.data)
            })
            .catch((err) => { console.log(err) })
    }, [location])
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
                    {location !== null && <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <Avatar src={location.state.Image} style={{ height: 'auto', width: 'auto', margin: 'auto', maxHeight: '40px', maxWidth: '80px' }}></Avatar>
                        &nbsp;{location.state.Name}</div>}
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

export default Brands
