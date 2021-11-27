import React from 'react'
import './styles.less'
import 'antd/dist/antd.less'
import { HomeOutlined, MailOutlined, PhoneOutlined, CopyrightOutlined } from '@ant-design/icons'
import { useHistory } from "react-router-dom"
import { BackTop } from 'antd'
function Footer() {
    const history = useHistory();
    return (
        <div className="ftCW">
            <div className="headerCW">
                <div className="footerCW">
                    <div className="row">
                        <div className="col-4">
                            <div className="ftTitle" style={{ fontSize: 18 }}>CAR WORLD</div>
                            <div className="spaceFT" style={{ fontSize: 16 }}>Xây dựng một sân chơi hữu ích dành cho những người chơi xe chuyên nghiệp</div>
                        </div>
                        {/* <div className="col-3">
                            <div className="ftTitle" style={{ fontSize: 18 }}>ĐIỀU HƯỚNG</div>
                            <button className="spaceFT1" style={{ fontSize: 16 }} ><a className="spaceFT11" href="/trang-chu">Trang chủ</a></button><br />
                            <button className="spaceFT1" style={{ fontSize: 16 }} ><a className="spaceFT11" href="/tin-xe">Tin xe</a></button><br />
                            <button className="spaceFT1" style={{ fontSize: 16 }} ><a className="spaceFT11" href="/su-kien">Sự kiện</a></button><br />
                            <button className="spaceFT1" style={{ fontSize: 16 }} ><a className="spaceFT11" href="/cuoc-thi">Cuộc thi</a></button><br />
                            <button className="spaceFT1" style={{ fontSize: 16 }} ><a className="spaceFT11" href="/ve-chung-toi">Về chúng tôi</a></button>
                        </div> */}
                        <div className="col-4">
                            <div className="ftTitle" style={{ fontSize: 18 }}>THÔNG TIN</div>
                            <button className="spaceFT2" style={{ fontSize: 16 }}><span className="spaceFT22" onClick={() => history.push("/dieu-khoan-su-dung")}>Điều khoản sử dụng</span></button>
                            <br /><button className="spaceFT2" style={{ fontSize: 16 }}><span className="spaceFT22" onClick={() => history.push("/chinh-sach-bao-mat")}>Chính sách bảo mật</span></button>
                        </div>
                        <div className="col-4">
                            <div className="ftTitle" style={{ fontSize: 18 }}>VỀ CHÚNG TÔI</div>
                            <div className="spaceFT" style={{ fontSize: 16 }}>
                                <HomeOutlined className="iconFooter" />Đại Học FPT, P. Long Thạnh Mỹ, TP. Thủ Đức
                            </div>
                            <div className="spaceFT" style={{ fontSize: 16 }}>
                                <MailOutlined className="iconFooter" />carworld@gmail.com
                            </div>
                            <div className="spaceFT" style={{ fontSize: 16 }}>
                                <PhoneOutlined className="iconFooter" />+84 868 4705 98
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyRight" style={{ fontSize: 16 }}>
                    <CopyrightOutlined className="iconFooterC" /> Copyright 2021-2022. All rights reserved.</div>
            </div>
            <BackTop />
        </div>
    )
}

export default Footer;
