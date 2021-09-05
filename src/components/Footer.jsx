import React from 'react'
import './styles.less'
import 'antd/dist/antd.less'
import { HomeOutlined, MailOutlined, PhoneOutlined, CopyrightOutlined } from '@ant-design/icons'
import { useHistory } from "react-router-dom";

function Footer() {
    const history = useHistory();

    function home () {
        history.push('/home')
    }
    function news() {
        history.push('/news');
    }
    function event() {
        history.push('/event');
    }
    function contest() {
        history.push('/contest');
    }
    function about() {
        history.push('/about');
    }

    return (
        <div className="ftCW">
            <div className="headerCW">
                <div className="footerCW">
                    <div className="row">
                        <div className="col-3">
                            <div className="ftTitle">CAR WORLD</div>
                            <div className="spaceFT">Car World is a great website to help people having knowledge about car</div>
                        </div>
                        <div className="col-3">
                            <div className="ftTitle">NAVIGATION</div>
                            <button className="spaceFT1" onClick={home}>Home</button><br />
                            <button className="spaceFT1" onClick={news}>News</button><br />
                            <button className="spaceFT1" onClick={contest}>Event</button><br />
                            <button className="spaceFT1" onClick={event}>Contest</button><br />
                            <button className="spaceFT1" onClick={about}>About</button>
                        </div>
                        <div className="col-3">
                            <div className="ftTitle">INFO</div>
                            <div className="spaceFT">Term of Use</div>
                            <div className="spaceFT">Privacy Statement</div>
                        </div>
                        <div className="col-3">
                            <div className="ftTitle">ABOUT US</div>
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
        </div>
    )
}

export default Footer;
