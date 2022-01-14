import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Col, Image, List, Row, Avatar } from 'antd';
import parse from 'html-react-parser';
import moment from 'moment';
import 'moment/locale/vi';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import CategoriesService from '../../services/CategoriesService';
// import ContestService from '../../services/ContestService';
import EventService from '../../services/EventService';
import './style.less';
import { useHistory } from "react-router-dom";
import removeVietnamese from '../../utils/removeVietnamese'
export default function ViewCategory() {
    const location = useLocation();
    const [title, setTitle] = useState('');
    const [record, setRecord] = useState('');
    const [postList, setPostList] = useState([]);
    const [eventList, setEventList] = useState([]);
    const history = useHistory();
    const [brand, setBrand] = useState('')

    function handleDetail(record1) {
        CategoriesService.getPostById(record1.Id).then((res) => {
            let repo = removeVietnamese.removeVietnameseTones(record1.Title)
            history.push(`/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: res.data });
            window.location.reload()
        }).catch((error) => {
            console.error(error)
        })
    }
    function handleEventDetail(record) {
        let repo = removeVietnamese.removeVietnameseTones(record.Title)
        history.push(`/su-kien/${repo.replace(/\s+/g, '-').toLowerCase()}`, { record: record });
    }
    const onClickBrand = () => {
        history.push({
            pathname: '/hang-xe',
            search: brand.Name,
            state: brand
        })
    }
    useEffect(() => {
        document.title = title
        switch (location.pathname) {
            default:
                return (setTitle(location.state != null && location.state.record.Title))
        }
    }, [location.pathname, title, location.state])
    useEffect(() => {
        setRecord(location.state != null && location.state.record)
    }, [location.state])
    useEffect(() => {
        let result = []
        CategoriesService.getCars()
            .then((res) => {
                res.data.forEach((data) => {
                    if (data.Id !== record.Id) {
                        if (data.Status === 1) {
                            result.push(data)
                        }
                    }
                })
                let filtered = result.filter(function (value, index, arr) {
                    return index < 3
                })
                setPostList(filtered)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [record])
    useEffect(() => {
        EventService.getEvents()
            .then((res) => {
                let filtered = res.data.filter(function (value, index, arr) {
                    return index < 3
                })
                setEventList(filtered)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        CategoriesService.getBrandById(record.BrandId).then((brand) => {
            setBrand(brand.data);
        }).catch((error) => { console.log(error) })
    }, [record])
    DecoupledEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
            const toolbarContainer = document.querySelector('#toolbar-container');
            editor.isReadOnly = true
            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            if (toolbarContainer.length > 0) {
                editor.ui.view.top.remove(toolbarContainer)
            }
        })
        .catch((error) => {
            console.error(error);
        });
    return (
        <div className="headerCW">
            <Row gutter={15}>
                <Col>
                    <div style={{ padding: '9.6px', fontWeight: 600, fontSize: 32, width: 900, marginTop: 30 }}> {record !== '' && record.Title}</div>
                    <Row style={{ paddingLeft: '9.6px', marginTop: '5px', fontSize: 15, color: '#888888' }}>
                        {brand !== '' && <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={onClickBrand}><Avatar src={brand.Image} style={{ height: 'auto', width: 'auto', margin: 'auto', maxHeight: '40px', maxWidth: '40px' }}></Avatar>&nbsp;{brand.Name}</div>}
                        <div style={{ display: 'flex', alignItems: 'center' }}>&nbsp;- {record !== '' && moment(record.CreatedDate).format('llll')}</div>
                    </Row>
                    <div style={{ fontWeight: '500', marginBottom: 1, fontSize: 18, padding: '9.6px', width: 900 }}>
                        {record !== '' && record.Type === 1 ? <span style={{ color: '#555555', fontWeight: 450 }}>Xe </span> :
                            record !== '' && record.Type === 2 ? <span style={{ color: '#555555', fontWeight: 450 }}>Phụ kiện </span> :
                                record !== '' && record.Type === 3 ? <span style={{ color: '#555555', fontWeight: 450 }}>Sự kiện </span> :
                                    record !== '' && record.Type === 4 ? <span style={{ color: '#555555', fontWeight: 450 }}>Cuộc thi </span> : null}
                        - {record !== '' && record.Overview}
                    </div>
                    <div id="toolbar-container"></div>
                    <div id="editor" style={{ width: 900 }}>
                        {record !== '' && <p>{parse(record.Contents)}</p>}
                    </div>
                    <div style={{ paddingLeft: '9.6px', fontWeight: '500' }}>Thực hiện: {record !== '' && record.CreatorName}</div>
                </Col>
                <Col style={{ width: 280 }}>
                    {/* <div style={{ marginTop: 50 }}>Bài đăng gần đây</div> */}
                    <div className="featuredEC" style={{ marginTop: 40 }}>
                        <span style={{ paddingBottom: 2, borderBottom: '4px solid rgb(245, 126, 79)' }}>BÀI ĐĂNG</span> NỔI BẬT
                    </div>
                    <List
                        itemLayout="horizontal"
                        dataSource={postList}
                        renderItem={(item) => (
                            <div style={{ paddingBottom: 15, cursor: 'pointer' }} onClick={() => { handleDetail(item) }}>
                                <Image src={item.FeaturedImage} preview={false}></Image>
                                <div className="hoverTitle" style={{ fontWeight: 550, fontSize: 16 }}>{item.Title}</div>
                            </div>
                        )}
                    />
                    {/* <div style={{ marginTop: 20 }}>Sự kiện đề xuất</div> */}
                    <div className="featuredEC" style={{ marginTop: 20 }}>
                        <span style={{ paddingBottom: 2, borderBottom: '4px solid rgb(245, 126, 79)' }}>SỰ KIỆN</span> NỔI BẬT
                    </div>
                    <List
                        itemLayout="horizontal"
                        dataSource={eventList}
                        renderItem={item => (
                            <div style={{ paddingBottom: 15, cursor: 'pointer' }} onClick={() => { handleEventDetail(item) }}>
                                <Image src={item.Image} preview={false}></Image>
                                <div className="hoverTitle" style={{ fontWeight: 550, fontSize: 16 }}>{item.Title}</div>
                            </div>
                        )}
                    />
                    {/* <div style={{ marginTop: 30 }}>Cuộc thi đề xuất</div>
                    <List
                        itemLayout="horizontal"
                        dataSource={contestList}
                        renderItem={item => (
                            <div>{item.Title}</div>
                        )}
                    /> */}
                </Col>
            </Row>
        </div>
    )
}
