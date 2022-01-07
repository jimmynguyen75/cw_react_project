import React, { useEffect, useState } from 'react'
import { Divider, Row, Col, Image, List, Card, Spin, Select } from 'antd';
import CategoriesService from '../../services/CategoriesService';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import removeVietnamese from '../../utils/removeVietnamese'
import './style.less'
function Categories() {
    const { Option } = Select;
    const location = useLocation();
    const [data, setData] = useState({ cars: [], accessories: [], events: [], contests: [] })
    const [brands, setBrands] = useState([]);
    const [filteredTable, setFilteredTable] = useState(null);
    const [dt, setDt] = useState(null);
    const firstData =
        location.pathname === "/tin-xe" ? data.cars[0] :
            location.pathname === "/tin-phu-kien" ? data.accessories[0] :
                location.pathname === "/tin-su-kien" ? data.events[0] :
                    location.pathname === "/tin-cuoc-thi" ? data.contests[0] : null
    const secondData =
        location.pathname === "/tin-xe" ? data.cars[1] :
            location.pathname === "/tin-phu-kien" ? data.accessories[1] :
                location.pathname === "/tin-su-kien" ? data.events[1] :
                    location.pathname === "/tin-cuoc-thi" ? data.contests[1] : null
    const thirdData =
        location.pathname === "/tin-xe" ? data.cars[2] :
            location.pathname === "/tin-phu-kien" ? data.accessories[2] :
                location.pathname === "/tin-su-kien" ? data.events[2] :
                    location.pathname === "/tin-cuoc-thi" ? data.contests[2] : null
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
            case "/tin-xe":
                return setTitle('Tin xe')
            case "/tin-phu-kien":
                return setTitle('Tin phụ kiện')
            case "/tin-su-kien":
                return setTitle('Tin sự kiện')
            default:
                return setTitle('Tin cuộc thi')
        }
    }, [location.pathname, title])
    useEffect(() => {
        let car = []
        let accessory = []
        let event = []
        let contest = []
        const fetchData = async () => {
            const cars = await CategoriesService.getCars();
            const accessories = await CategoriesService.getAccessories();
            const events = await CategoriesService.getEvents();
            const contests = await CategoriesService.getContests();
            cars.data.forEach((data) => {
                if (data.Status === 1) {
                    car.push(data)
                }
            })
            accessories.data.forEach((data) => {
                if (data.Status === 1) {
                    accessory.push(data)
                }
            })
            events.data.forEach((data) => {
                if (data.Status === 1) {
                    event.push(data)
                }
            })
            contests.data.forEach((data) => {
                if (data.Status === 1) {
                    contest.push(data)
                }
            })
            setData({ cars: car, accessories: accessory, events: event, contests: contest })
        }
        fetchData();
    }, [])
    useEffect(() => {
        CategoriesService.getAllBrand()
            .then(res => {
                setBrands(res.data);
            })
            .catch(err => console.log(err))
    }, [])
    const handleSelectBrand = (id) => {
        id !== undefined && CategoriesService.getPostByBrandId(id).then((res) => { setFilteredTable(res.data) }).catch(err => console.log(err))
    }
    const handleBrandClear = () => {
        setFilteredTable(null)
    }
    // useEffect(() => {
    //     {location.pathname === "/tin-xe" ? setDt(data.cars) :
    //         location.pathname === "/tin-phu-kien" ? setDt(data.accessories) :
    //             location.pathname === "/tin-su-kien" ? setDt(data.events) :
    //                 location.pathname === "/tin-cuoc-thi" ? setDt(data.contests) : null}
    // }, [])
    return (
        <Spin spinning={data.cars.length !== 0 ? false : true}>
            <div className="headerCW">
                <Select
                    className="selectBrand"
                    style={{ width: 220, float: 'right', marginTop: 25, marginRight: 15, marginBottom: '-25px' }}
                    showSearch
                    placeholder="Sắp xếp theo hãng"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={handleSelectBrand}
                    onClear={handleBrandClear}
                    allowClear
                >
                    {dt !== null && Array.from(new Set(dt.map(obj => obj.BrandId))).map((brand) => (
                        brands.map((brands) => (
                            brand === brands.Id && <Option key={brands.Id} value={brands.Id}>{brands.Name}</Option>
                        ))
                    ))}
                </Select>
                <div className="navCW">
                    <Divider orientation="left" style={{ fontSize: 32 }}>TIN XE</Divider>

                    <Row gutter={15} style={{ marginBottom: 20 }}>
                        <Col className="hoverTitlePage" span={16} style={{ cursor: 'pointer' }} onClick={() => { handleDetail(firstData) }}>
                            <Image preview={false} alt="" style={{ height: 400, width: '773.68px', objectFit: 'cover' }} src={firstData != null && firstData.FeaturedImage} />
                            <div style={{ fontSize: 28, marginBottom: 10, fontWeight: '600' }}>{firstData != null && firstData.Title}</div>
                        </Col>
                        <Col span={8}>
                            <Row className="hoverTitlePage" style={{ cursor: 'pointer' }} onClick={() => { handleDetail(secondData) }} >
                                <Image preview={false} alt="" style={{ height: 200, width: '378.67px', objectFit: 'cover', cursor: 'pointer' }} src={secondData != null && secondData.FeaturedImage} />
                                <div style={{ fontSize: 16, marginBottom: 15, fontWeight: '600', width: '378.67px' }}>{secondData != null && secondData.Title}</div>
                            </Row>
                            <Row className="hoverTitlePage" style={{ cursor: 'pointer' }} onClick={() => { handleDetail(thirdData) }}>
                                <Image preview={false} alt="" style={{ height: 200, width: '378.67px', objectFit: 'cover', cursor: 'pointer' }} src={thirdData != null && thirdData.FeaturedImage} />
                                <div style={{ fontSize: 16, marginBottom: 10, fontWeight: '600', width: '378.67px' }}>{thirdData != null && thirdData.Title}</div>
                            </Row>
                        </Col>
                    </Row>
                    <Divider></Divider>
                    <List
                        grid={{ gutter: 16, column: 3 }}
                        dataSource={
                            location.pathname === "/tin-xe" ? data.cars.filter(function (value, index, arr) { return (index !== 0 && index !== 1 && index !== 2) }) :
                                location.pathname === "/tin-phu-kien" ? data.accessories.filter(function (value, index, arr) { return (index !== 0 && index !== 1 && index !== 2) }) :
                                    location.pathname === "/tin-su-kien" ? data.events.filter(function (value, index, arr) { return (index !== 0 && index !== 1 && index !== 2) }) :
                                        location.pathname === "/tin-cuoc-thi" ? data.contests.filter(function (value, index, arr) { return (index !== 0 && index !== 1 && index !== 2) }) : null}
                        renderItem={item => (
                            <List.Item
                                onClick={() => {
                                    handleDetail(item)
                                }}>
                                <Card
                                    cover={<Image alt="" src={item.FeaturedImage} preview={false} style={{ height: 250, maxWidth: '100%', objectFit: 'cover' }} />}
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
        </Spin>
    )
}
export default Categories;