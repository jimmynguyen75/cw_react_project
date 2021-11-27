import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import imgAbout1 from './f3.jpg';
import './styles.less';

function AboutUs() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
        document.title = "Về chúng tôi"
    }, []);

    return (
        <div className="about">
            <img alt="" src={imgAbout1} />
            <div className="title"><span className="title1" style={{ paddingBottom: 6 }}>Một thế </span>giới Xe</div>
            <div className="aDes" data-aos="flip-left" style={{ letterSpacing: 1.4, lineHeight: 1.6, paddingTop: 10 }}> <span style={{ fontSize: 42, lineHeight: 0 }}>"</span> Nếu bạn muốn đi nhanh, hãy đi một mình. Nếu bạn muốn đi xa, hãy đi cùng Car World ”</div>
            <div className="aboutUs"><span className="hl11">Về</span> chúng tôi</div>
            <div className="shortDes">
                <div className="col-12" data-aos="fade-up" style={{ letterSpacing: 1.2, lineHeight: 1.8, fontSize: 16 }}><span style={{ fontSize: 36, lineHeight: 0 }}>H</span>
                    ệ thống CW chịu trách nhiệm về hoạt động trao đổi các linh kiện và phụ kiện
                    của các hãng xe lớn nhất trên thế giới cũng như tổ chức các sân chơi thú vị dành cho những người đam mê ô tô.
                    Hệ thống CW được thành lập bởi CW Team với hơn 100 nhân viên.
                    Hệ thống tập trung vào phát triển mô hình trao đổi các loại xe và các dịch vụ liên quan đến xe.
                    Hơn nữa, hệ thống mong muốn trở thành người dẫn đầu trong lĩnh vực phần mềm xe cộ.
                    Danh mục sản phẩm bao gồm thương hiệu Mercedes-Benz, BMW, Toyota, Kia, Hyundai, Vinfast...
                    Vì tính bền vững là nguyên tắc chỉ đạo của chiến lược hệ thống CW,
                    điều này có nghĩa là tạo ra giá trị lâu dài cho tất cả các bên liên quan:
                    cho khách hàng, nhân viên, nhà đầu tư, đối tác kinh doanh và toàn xã hội.
                    Do đó, hệ thống chịu trách nhiệm về các tác động kinh tế,
                    sinh thái và xã hội của các hoạt động kinh doanh của mình và xem xét toàn bộ chuỗi giá trị.
                </div>
                <div className="aboutUs"><span className="hl11">Mục</span> tiêu</div>
                <div className="shortDes1">
                    <div className="row">
                        <div className="col-6" data-aos="fade-right" style={{ letterSpacing: 1.2, lineHeight: 1.8, paddingRight: 30, paddingBottom: 30, fontSize: 16 }}><span style={{ fontSize: 36, lineHeight: 0 }}>X</span>
                            ây dựng một sân chơi hữu ích dành cho những người chơi xe chuyên nghiệp.
                            Chiến lược của hệ thống CW là sự chuyển đổi hình thức trao đổi xe để trở thành số
                            1 về di động điện và kỹ thuật số hóa toàn diện. Đồng thời, tập trung rõ ràng vào việc cải thiện cơ cấu lợi nhuận,
                            lấy tính bền vững làm nguyên tắc chỉ đạo. Cơ sở cho sự thành công của chiến lược mới của chúng tôi là do
                            đội ngũ có năng lực và trình độ cao của chúng tôi cung cấp.
                        </div>
                        <div className="col-6" data-aos="fade-left" style={{ letterSpacing: 1.2, lineHeight: 1.8, paddingLeft: 30, paddingBottom: 30, fontSize: 16 }}><span style={{ fontSize: 36, lineHeight: 0 }}>"T</span>
                            heo đuổi sự hoàn hảo” - đó là Mục đích của hệ thống CW. Đó là ý nghĩa sâu xa hơn đằng sau công việc của chúng tôi,
                            nó là điều thúc đẩy chúng tôi, lý do tại sao chúng tôi theo đuổi nhiều hơn những gì có thể đạt được ngay lập tức.
                            Tinh thần tiên phong này là một phần trong DNA của chúng tôi. Trong thời kỳ thay đổi,
                            nó mang lại cho chúng ta định hướng cho chiến lược phát triển toàn diện và bền vững cũng như cho các quyết định của chúng ta.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
