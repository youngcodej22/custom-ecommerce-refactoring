import React from 'react';

import logoWhitePC from '/assets/logo/logo_white_pc.png';
import certificationLogo1 from '/assets/footer/footer-icon-1.png';
import certificationLogo2 from '/assets/footer/footer-icon-2.png';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="content-info-wrap"></div>
            <div id="footer">
                <div className="footer-box">
                    <div className="footer-logo footer-tit">
                        <a href="#">
                            <img src={logoWhitePC} alt="하단 로고" />
                        </a>
                    </div>
                    <div className="footer-info">
                        <div className="footer-info-list">
                            <p>(주)맥케이슨 대표이사 : 백배순</p>
                            <p>
                                서울특별시 종로구 종로00길 0 (KOSMO DAECHI) 1층 <span className="bar"></span>{' '}
                                사업자등록번호 : 601-86-01617{' '}
                                <a href="#" className="btn-licensee-info">
                                    [사업자정보확인]
                                </a>
                            </p>
                            <p>통신판매업신고번호 : 제2024-서울강남-00000호</p>
                            <p className="dn">개인정보관리자 : 지영배</p>
                        </div>
                        <p className="copyright">©Copyright MCKAYSON.All right Reserved.</p>
                        <ul className="certification-list">
                            <li className="seal-box">
                                <img src={certificationLogo1} alt="보안서버 적용 확인" />
                            </li>
                            <li className="escraw-box">
                                <img src={certificationLogo2} alt="에스크로 서비스 확인" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-box">
                    <p className="footer-tit">ABOUT</p>
                    <div className="footer-list">
                        <ul>
                            <li>
                                <a href="../main/html.php?htmid=service/brandstory-new.html">BRAND STORY</a>
                            </li>
                            <li>
                                <a href="../service/faq.php">AS / FAQ</a>
                            </li>
                            <li>
                                <a href="../service/agreement.php">이용약관</a>
                            </li>
                            <li>
                                <a href="../service/private.php">개인정보처리방침</a>
                            </li>
                            <li>
                                <a href="../main/html.php?htmid=service/email-reject.html">이메일무단수집거부</a>
                            </li>
                            <li className="dn">
                                <a href="../service/cooperation.php">대리점 개설문의</a>
                            </li>
                            <li>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-box">
                    <p className="footer-tit">CS CENTER</p>
                    <p className="tell">1877-7309</p>
                    <p>
                        10:00 - 12:00, 13:00 - 16:00
                        <br />
                        (주말, 공휴일 휴무)
                    </p>
                    <p>
                        <a href="mailto:online@mckayson.com" className="btn-email">
                            online@mckayson.com
                        </a>
                    </p>
                    <p>대리점 개설문의: 010-9841-7890</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
