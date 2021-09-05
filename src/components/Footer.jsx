import React from 'react'
import './styles.less'
import 'antd/dist/antd.less'
import { HomeOutlined, MailOutlined, PhoneOutlined, CopyrightOutlined } from '@ant-design/icons'
import { useHistory } from "react-router-dom";
import { BackTop } from 'antd'

function Footer() {
    const history = useHistory();

    function home() {
        history.push('/trang-chu');
        window.parent.location = window.parent.location.href;
    }
    function news() {
        history.push('/tin-tuc');
        window.parent.location = window.parent.location.href;
    }
    function event() {
        history.push('/su-kien');
        window.parent.location = window.parent.location.href;
    }
    function contest() {
        history.push('/cuoc-thi');
        window.parent.location = window.parent.location.href;
    }
    function about() {
        history.push('/ve-chung-toi');
        window.parent.location = window.parent.location.href;
    }
    function term() {
        history.push('/dieu-khoan-su-dung');
        window.parent.location = window.parent.location.href;
    }
    function privacy() {
        history.push('/chinh-sach-bao-mat');
        window.parent.location = window.parent.location.href;

    }

    return (
        <div className="ftCW">
            <div className="headerCW">
                <div className="footerCW">
                    <div className="row">
                        <div className="col-3">
                            <div className="ftTitle">CAR WORLD</div>
                            <div className="spaceFT">Xây dựng một sân chơi hữu ích dành cho những người chơi xe chuyên nghiệp</div>
                        </div>
                        <div className="col-3">
                            <div className="ftTitle">ĐIỀU HƯỚNG</div>
                            <button className="spaceFT1" onClick={home}>Trang chủ</button><br />
                            <button className="spaceFT1" onClick={news}>Tin tức</button><br />
                            <button className="spaceFT1" onClick={event}>Sự kiện</button><br />
                            <button className="spaceFT1" onClick={contest}>Cuộc thi</button><br />
                            <button className="spaceFT1" onClick={about}>Về chúng tôi</button>
                        </div>
                        <div className="col-3">
                            <div className="ftTitle">THÔNG TIN</div>
                            <button className="spaceFT2" onClick={term}>Điều khoản sử dụng</button>
                            <button className="spaceFT2" onClick={privacy}>Chính sách bảo mật</button>
                        </div>
                        <div className="col-3">
                            <div className="ftTitle">VỀ CHÚNG TÔI</div>
                            <div className="spaceFT">
                                <HomeOutlined className="iconFooter" />Đại Học FPT, P. Long Thạnh Mỹ, TP. Thủ Đức
                            </div>
                            <div className="spaceFT">
                                <MailOutlined className="iconFooter" />carworld@gmail.com
                            </div>
                            <div className="spaceFT">
                                <PhoneOutlined className="iconFooter" />+84 868 4705 98
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyRight">
                    <CopyrightOutlined className="iconFooterC" /> Copyright 2021-2022. All rights reserved.</div>
            </div>
            <BackTop />
        </div>
    )
}

export default Footer;
