import React, { useEffect } from 'react'
import 'antd/dist/antd.less'
import './styles.less'
import { Button } from 'antd'
import featured from './featured1.png'
import f1 from './1.jpg'
import f2 from './2.jpg'
import f3 from './3.jpg'
import f4 from './4.jpg'
import f5 from './5.jpg'
import f6 from './6.jpg'
import f7 from './7.jpg'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReactGA from 'react-ga';
function Home() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    useEffect(() => {
        Aos.init({ duration: 2000 });
        document.title = "Trang chủ";
    }, []);

    const steps = [
        {
            id: '1',
            message: 'Bạn cần giúp gì?',
            trigger: 2
        },
        {
            id: '2',
            options: [
                { value: 1, label: 'Number 1', trigger: '4' },
                { value: 2, label: 'Number 2', trigger: '3' },
                { value: 3, label: 'Number 3', trigger: '3' },
            ],
        },
        {
            id: '3',
            message: 'game',
            trigger: '1'
        },
        {
            id: '4',
            message: 'help',
            end: true
        },
    ]

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Azeret Mono',
        headerBgColor: '#ffa751',
        headerFontColor: '#ffff',
        headerFontSize: '18px',
        botBubbleColor: '#ffa751',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };

    return (
        <div className="bodyCW">
            <div className="contentCW">
                <div className="row">
                    <div className="col-9">
                        <div className="featuredImage">
                            <img src={featured}></img>
                            <div className="featuredTitle">We Rejected Bedliners for our Ford F-150; See What We Installed</div>
                            <div className="featuredDes">Ford F-150 Limited SuperCrew, winner of our Best of 2021 award, and we waited this long to install a bedliner. We don’t recommend delaying this step, but we had a pretty good reason. We didn’t like the usual options:</div>
                        </div>
                        <div className="newsTitle">Tin tức</div>
                        <div className="newsContent" style={{ width: 860 }}>
                            <div className="row">
                                <div className="col-4">
                                    <div className="news1">
                                        <img src={f4} />
                                        <div className="newsTitleinBox" style={{ fontSize: 20 }}>2020 Toyota Yaris Review Yaris is Toyota Yaris  one of the smallest </div>
                                        <div className="newsDesinBox">he Yaris is one of the smallest and least expensive vehicles in Toyota's lineup, but it doesn't look or feel like anything else in the automaker's stable.</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="news1">
                                        <img src={f5} />
                                        <div className="newsTitleinBox" style={{ fontSize: 20 }}>Lots of appealing standard features at a reasonable price</div>
                                        <div className="newsDesinBox">The to the Mazda-sourced infotai to the Mazda-sourced infotainmen to the Mazda-sourced infotainment system. That's hardly a bad thing,</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="news1">
                                        <img src={f6} />
                                        <div className="newsTitleinBox" style={{ fontSize: 20 }}>ban runabout that should work out well for sedan shoppers on a budget.</div>
                                        <div className="newsDesinBox">he Yaris is one of the smallest and least expensive vehicles in Toyota's lineup, but it doesn't look or feel like anything else in the automaker's stable.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="featuredEC">
                            Sự kiện, cuộc thi mới nhất
                        </div>
                        <div className="featuredEC">
                            <img src={f1} />
                            <div className="featuredECTitle">We Rejected Drop-in and Spray-In</div>
                        </div>
                        <div className="featuredEC">
                            <img src={f2} />

                            <div className="featuredECTitle">We Rejected We Rejected Dro Drop-in and Spray-In</div>
                        </div>
                        <div className="featuredEC">
                            <img src={f3} />
                            <div className="featuredECTitle">We Rejected We Rejected Dro Drop-in and Spray-In</div>
                        </div>
                        <Button style={{ display: 'flex', margin: 'auto', borderRadius: 20, width: 150, justifyContent: 'center' }} >Xem thêm</Button>
                    </div>
                </div>
                <div className="EC">Sự kiện</div>
                <div className="row" data-aos="zoom-in">
                    <div className="col-4">
                        <div className="ECsmall">
                            <img src={f7} />
                            <div className="ECsmallTitle" style={{ fontSize: 20 }}>Which Yaris does Edmunds recommend?</div>
                            <div className="des">The Yaris comes well appointed from the get-go, so we recommend sticking with the base L trim. The LE and the XLE add a number of convenience features</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="ECsmall">
                            <img src={f6} />
                            <div className="ECsmallTitle" style={{ fontSize: 20 }}>Which Yaris does Edmunds recommend?</div>
                            <div className="des">The Yaris comes well appointed from the get-go, so we recommend sticking with the base L trim. The LE and the XLE add a number of convenience features</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="ECsmall">
                            <img src={f5} />
                            <div className="ECsmallTitle" style={{ fontSize: 20 }}>Which Yaris does Edmunds recommend?</div>
                            <div className="des">The Yaris comes well appointed from the get-go, so we recommend sticking with the base L trim. The LE and the XLE add a number of convenience features</div>
                        </div>
                    </div>
                </div>
                <div className="EC" style={{ paddingTop: 20 }} >Cuộc thi</div>
                <div className="row" data-aos="zoom-in">
                    <div className="col-4">
                        <div className="ECsmall">
                            <img src={f3} />
                            <div className="ECsmallTitle" style={{ fontSize: 20 }}>Which Yaris does Edmunds recommend?</div>
                            <div className="des">The Yaris comes well appointed from the get-go, so we recommend sticking with the base L trim. The LE and the XLE add a number of convenience features</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="ECsmall">
                            <img src={f2} />
                            <div className="ECsmallTitle" style={{ fontSize: 20 }}>Which Yaris does Edmunds recommend?</div>
                            <div className="des">The Yaris comes well appointed from the get-go, so we recommend sticking with the base L trim. The LE and the XLE add a number of convenience features</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="ECsmall">
                            <img src={f1} />
                            <div className="ECsmallTitle" style={{ fontSize: 20 }}>Which Yaris does Edmunds recommend?</div>
                            <div className="des">The Yaris comes well appointed from the get-go, so we recommend sticking with the base L trim. The LE and the XLE add a number of convenience features</div>
                        </div>
                    </div>
                </div>
            </div>
            <ThemeProvider theme={theme}>
                <ChatBot
                    steps={steps}
                    headerTitle="Car World xin chào bạn!"
                    floating={true}
                    botAvatar={f1}
                />
            </ThemeProvider>
        </div>
    )
}
export default Home;
