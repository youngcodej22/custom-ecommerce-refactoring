import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoBlackPC from '/assets/logo/logo_black_pc.png';
import logoWhitePC from '/assets/logo/logo_white_pc.png';
import btnClose from '/assets/icon/icon-close.png';
import btnSearchBlack from '/assets/icon/icon-search-black.png';
import btnSearch from '/assets/icon/icon-search.png';
import btnCartBlack from '/assets/icon/icon-cart-black.png';
import btnCart from '/assets/icon/icon-cart.png';
import btnMypageBlack from '/assets/icon/icon-mypage-black.png';
import btnMypage from '/assets/icon/icon-mypage.png';
import btnLoginBlack from '/assets/icon/icon-login-black.png';
import btnLogin from '/assets/icon/icon-login.png';
import btnServiceBlack from '/assets/icon/icon-service-black.png';
import btnService from '/assets/icon/icon-service.png';

import './Header.scss';

// const Header: React.FC<{ isOn: boolean, setIsOn: React.Dispatch<React.SetStateAction<boolean>> }> = ({
//     isOn,
//     setIsOn,
// }) => {
const Header: React.FC = () => {
    const location = useLocation();
    const [isOn, setIsOn] = useState(false);
    const [isActiveBg, setIsActiveBg] = useState(false);
    const [isActive, setIsActive] = useState(null);
    const [scrollY, setScrollY] = useState(window.scrollY);
    // const [scrollY, setScrollY] = useState(0);

    console.log('0', isOn);

    const tabsliRef = useRef([]);
    // const [tabs, setTabs] = useState([
    //     {
    //         title: 'brand',
    //         id: 1,
    //         isActive: false,
    //     },
    //     {
    //         title: 'new',
    //         id: 2,
    //         isActive: false,
    //     },
    //     {
    //         title: 'women',
    //         id: 3,
    //         isActive: false,
    //     },
    //     {
    //         title: 'men',
    //         id: 4,
    //         isActive: false,
    //     },
    //     {
    //         title: 'acc',
    //         id: 5,
    //         isActive: false,
    //     },
    //     {
    //         title: 'outlet',
    //         id: 6,
    //         isActive: false,
    //     },
    // ]);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        // location.pathname !== '/' ? console.log('Yes') : console.log('No');
        // location.pathname !== '/' ? setIsOn(prevIsOn => true) : setIsOn(false);

        if (location.pathname !== '/') {
            setIsOn(true);
            // setIsOn(location.pathname === '/productlist');
            console.log('1', isOn);
        } else {
            setIsOn(false);
        }

        console.log('2', isOn);
    }, [location.pathname]);

    console.log('3', isOn);

    useEffect(() => {
        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        if (location.pathname !== '/') return;

        if (scrollY > 50) {
            setIsOn(true);
        } else {
            setIsOn(false);
        }

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY, isOn]);

    const handleActiveBgEnter = () => {
        if (location.pathname !== '/') {
            setIsActiveBg(true);
        } else {
            setIsActiveBg(true);
            setIsOn(true);
        }
    };

    const handleActiveBgLeave = () => {
        // if (location.pathname !== '/') return;
        // setIsActiveBg(false);
        // setIsOn(false);

        if (location.pathname !== '/') {
            setIsActiveBg(false);
        } else {
            setIsActiveBg(false);
            setIsOn(false);
        }
    };

    const handleMouseEnter = index => {
        // if (location.pathname !== '/') return;

        // const navItem = e?.target;
        // const boundingBox = navItem.getBoundingClientRect();
        // const offsetLeft = boundingBox.left;
        // const offsetWidth = boundingBox.width;
        // const leftValue = offsetLeft + offsetWidth / 2;
        // navItem.style.left = `${leftValue}px`;

        // ! 여러개 ref를 배열로 관리
        const tabsliRefList = tabsliRef.current[index];

        let deps1UlElStyle = tabsliRefList.children[1].children[0].style;
        let leftValue = tabsliRefList.offsetLeft;

        // deps1UlElLeft = `${leftValue}px`;
        deps1UlElStyle.setProperty('left', `${leftValue}px`);

        setIsOn(true);
        setIsActive(index);
    };

    useEffect(() => {
        // if (location.pathname !== '/') return;
        if (isActiveBg) {
            setIsOn(true);
        }
    }, [isActiveBg]);

    const handleMouseLeave = e => {
        // // if (location.pathname !== '/') return;
        // setIsActive(null);

        // // if (scrollY > 0 && isOn) {
        // if (scrollY > 0) {
        //     setIsOn(true);
        // } else {
        //     setIsOn(false);
        // }

        if (location.pathname !== '/') {
            setIsActive(null);
            setIsOn(true);
        } else {
            setIsActive(null);
            scrollY > 0 ? setIsOn(true) : setIsOn(false);
        }
    };

    const handleMouseEnterNoIdx = () => {
        // if (location.pathname !== '/') return;
        // if (scrollY === 0) {
        //     setIsOn(true);
        // }
        setIsOn(true);
    };

    const handleMouseLeaveNoIdx = () => {
        // // if (location.pathname !== '/') return;
        // if (scrollY > 0) {
        //     setIsOn(true);
        // } else {
        //     setIsOn(false);
        // }

        if (location.pathname !== '/') {
            // return;
            setIsOn(true);
        } else {
            scrollY > 0 ? setIsOn(true) : setIsOn(false);
        }
    };

    return (
        <>
            {/* <header id="header-nav" className={(isOn && scrollY > 0) || isOn ? 'on' : ''}> */}
            <header id="header-nav" className={isOn ? 'on' : ''}>
                <div className="logo">
                    <a href="/">
                        {isOn ? (
                            <img src={logoBlackPC} alt="로고" />
                        ) : (
                            <img src={logoWhitePC} alt="로고" />
                        )}
                    </a>
                </div>
                <div className="gnb">
                    <ul
                        className={
                            isActiveBg ? 'gnb-wrap active-bg' : 'gnb-wrap'
                        }
                        onMouseEnter={handleActiveBgEnter}
                        onMouseLeave={handleActiveBgLeave}
                    >
                        <li
                            // ! infinite loop 조심
                            // onMouseEnter={handleMouseEnter(0)}
                            className="gnb-li brand"
                            // onMouseEnter={e => handleMouseEnter(e, 0)}
                            // onMouseLeave={e => handleMouseLeave(e)}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                            ref={el => (tabsliRef.current[0] = el)}
                        >
                            {/* <Link className="gnb-link" to="/brand">
                                BRAND
                            </Link> */}
                            <a className="gnb-link" href="/brand">
                                BRAND
                            </a>
                            {/* <div className="gnb-deps1"> */}
                            <div
                                className={
                                    isActive === 0
                                        ? 'gnb-deps1 active'
                                        : 'gnb-deps1'
                                }
                            >
                                <ul>
                                    <li>
                                        <a href="">LOOKBOOK</a>
                                    </li>
                                    <li>
                                        <a href="">COORDINATION</a>
                                    </li>
                                    <li>
                                        <a href="">HISTORY</a>
                                    </li>
                                    <li>
                                        <a href="">BRAND NEWS</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className="gnb-li new"
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                            ref={el => (tabsliRef.current[1] = el)}
                        >
                            <a className="gnb-link" href="/productlist">
                                NEW
                            </a>
                            <div
                                className={
                                    isActive === 1
                                        ? 'gnb-deps1 active'
                                        : 'gnb-deps1'
                                }
                            >
                                <ul>
                                    <li>
                                        <a href="">겨울 컬렉션</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">씨슬 시그니처</a>
                                            </li>
                                            <li>
                                                <a href="">할리 스티븐슨</a>
                                            </li>
                                            <li>
                                                <a href="">해리스 트위드</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">여성</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">상의</a>
                                            </li>
                                            <li>
                                                <a href="">하의</a>
                                            </li>
                                            <li>
                                                <a href="">아우터</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">남성</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">상의</a>
                                            </li>
                                            <li>
                                                <a href="">하의</a>
                                            </li>
                                            <li>
                                                <a href="">아우터</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">액세서리</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">남성</a>
                                            </li>
                                            <li>
                                                <a href="">여성</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">온라인 상품권</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className="gnb-li women"
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                            ref={el => (tabsliRef.current[2] = el)}
                        >
                            <a className="gnb-link" href="/productlist">
                                WOMEN
                            </a>
                            <div
                                className={
                                    isActive === 2
                                        ? 'gnb-deps1 active'
                                        : 'gnb-deps1'
                                }
                            >
                                <ul>
                                    <li>
                                        <a href="">상의</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">티셔츠</a>
                                            </li>
                                            <li>
                                                <a href="">스웨터</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">하의</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">팬츠</a>
                                            </li>
                                            <li>
                                                <a href="">쇼츠</a>
                                            </li>
                                            <li>
                                                <a href="">스커트</a>
                                            </li>
                                            <li>
                                                <a href="">원피스</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">아우터</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">점퍼</a>
                                            </li>
                                            <li>
                                                <a href="">다운/패딩</a>
                                            </li>
                                            <li>
                                                <a href="">베스트</a>
                                            </li>
                                            <li>
                                                <a href="">가디건</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className="gnb-li men"
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={handleMouseLeave}
                            ref={el => (tabsliRef.current[3] = el)}
                        >
                            <a className="gnb-link" href="">
                                MEN
                            </a>
                            <div
                                className={
                                    isActive === 3
                                        ? 'gnb-deps1 active'
                                        : 'gnb-deps1'
                                }
                            >
                                <ul>
                                    <li>
                                        <a href="">상의</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">티셔츠</a>
                                            </li>
                                            <li>
                                                <a href="">스웨터</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">하의</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">팬츠</a>
                                            </li>
                                            <li>
                                                <a href="">쇼츠</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">아우터</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">점퍼</a>
                                            </li>
                                            <li>
                                                <a href="">다운/패딩</a>
                                            </li>
                                            <li>
                                                <a href="">베스트</a>
                                            </li>
                                            <li>
                                                <a href="">가디건</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className="gnb-li acc"
                            onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={handleMouseLeave}
                            ref={el => (tabsliRef.current[4] = el)}
                        >
                            <a className="gnb-link" href="">
                                ACC
                            </a>
                            <div
                                className={
                                    isActive === 4
                                        ? 'gnb-deps1 active'
                                        : 'gnb-deps1'
                                }
                            >
                                <ul>
                                    <li>
                                        <a href="">모자</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">볼캡</a>
                                            </li>
                                            <li>
                                                <a href="">바이저</a>
                                            </li>
                                            <li>
                                                <a href="">버킷햇</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">양말</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">단목</a>
                                            </li>
                                            <li>
                                                <a href="">반목</a>
                                            </li>
                                            <li>
                                                <a href="">종목</a>
                                            </li>
                                            <li>
                                                <a href="">니삭스</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">가방</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">볼파우치</a>
                                            </li>
                                            <li>
                                                <a href="">파우치</a>
                                            </li>
                                            <li>
                                                <a href="">보스턴백</a>
                                            </li>
                                            <li>
                                                <a href="">캐디백</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">기타</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">골프화</a>
                                            </li>
                                            <li>
                                                <a href="">장갑</a>
                                            </li>
                                            <li>
                                                <a href="">벨트</a>
                                            </li>
                                            <li>
                                                <a href="">기타</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className="gnb-li outlet"
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={handleMouseLeave}
                            ref={el => (tabsliRef.current[5] = el)}
                        >
                            <a className="gnb-link" href="">
                                OUTLET
                            </a>
                            <div
                                className={
                                    isActive === 5
                                        ? 'gnb-deps1 active'
                                        : 'gnb-deps1'
                                }
                            >
                                <ul>
                                    <li>
                                        <a href="">여성</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">아우터</a>
                                            </li>
                                            <li>
                                                <a href="">상의</a>
                                            </li>
                                            <li>
                                                <a href="">하의</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">남성</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">아우터</a>
                                            </li>
                                            <li>
                                                <a href="">상의</a>
                                            </li>
                                            <li>
                                                <a href="">하의</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">액세서리</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">남성</a>
                                            </li>
                                            <li>
                                                <a href="">여성</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="gnb-li promotion">
                            <a
                                className="gnb-link"
                                href="/promotion"
                                onMouseEnter={handleMouseEnterNoIdx}
                                onMouseLeave={handleMouseLeaveNoIdx}
                            >
                                PROMOTION
                            </a>
                        </li>
                        <li className="gnb-li review">
                            <a
                                className="gnb-link"
                                href=""
                                onMouseEnter={handleMouseEnterNoIdx}
                                onMouseLeave={handleMouseLeaveNoIdx}
                            >
                                REVIEW
                            </a>
                        </li>
                        <li className="gnb-li store">
                            <a
                                className="gnb-link"
                                href=""
                                onMouseEnter={handleMouseEnterNoIdx}
                                onMouseLeave={handleMouseLeaveNoIdx}
                            >
                                STORE
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            {/* {isOn ? ( */}
                            {isOn ? (
                                <img src={btnSearchBlack} alt="검색" />
                            ) : (
                                <img src={btnSearch} alt="검색" />
                            )}
                            <span>검색</span>
                        </li>
                        <li>
                            <a href="" className="btn-login">
                                {isOn ? (
                                    <img src={btnLoginBlack} alt="검색" />
                                ) : (
                                    <img src={btnLogin} alt="검색" />
                                )}
                                <span>로그인</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="btn-mypage">
                                {isOn ? (
                                    <img src={btnMypageBlack} alt="검색" />
                                ) : (
                                    <img src={btnMypage} alt="검색" />
                                )}
                                <span>마이페이지</span>
                            </a>
                        </li>
                        <li>
                            <a href="/cart" className="btn-cart">
                                {isOn ? (
                                    <img src={btnCartBlack} alt="검색" />
                                ) : (
                                    <img src={btnCart} alt="검색" />
                                )}
                                <span>장바구니</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="btn-service">
                                {isOn ? (
                                    <img src={btnServiceBlack} alt="검색" />
                                ) : (
                                    <img src={btnService} alt="검색" />
                                )}
                                <span>고객센터</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="search-popup" style={{ display: 'none' }}>
                    <form
                        action=""
                        name="formSearch"
                        id="formSearch"
                        method="get"
                        // noValidate="noValidate"
                    >
                        <span className="btn-close">
                            <img src={btnClose} alt="검색 닫기" />
                        </span>
                        <input type="hidden" name="adUrl" value="" />
                        <fieldset>
                            <legend>검색폼</legend>
                            <div className="search-wrap">
                                <input
                                    type="text"
                                    id="search_form"
                                    name="keyword"
                                    className="search-text"
                                    title="23' F/W 신상품 바로가기!"
                                    placeholder="23' F/W 신상품 바로가기!"
                                    autoComplete="off"
                                />
                                <input
                                    type="image"
                                    src={btnSearchBlack}
                                    id="btnSearch"
                                    className="btn-search"
                                    title="검색"
                                    value="검색"
                                    alt="검색"
                                />
                            </div>
                            <div
                                className="search-keywordList-wrap"
                                style={{ display: 'none' }}
                            >
                                <input
                                    type="hidden"
                                    name="recentCount"
                                    value="10"
                                />
                                <div className="search-keywordList">
                                    <div className="search-recent-wrap">
                                        <dl>
                                            <dt>최근검색어</dt>
                                            <dd>최근 검색어가 없습니다.</dd>
                                        </dl>
                                    </div>
                                    <div className="search-close-wrap">
                                        <button
                                            type="button"
                                            className="btn-search-close"
                                        >
                                            <strong>닫기</strong>
                                        </button>
                                    </div>

                                    <dl>
                                        <dt>추천상품</dt>
                                        <dd>
                                            <ul>
                                                <li>
                                                    <a href=""></a>
                                                </li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </header>
        </>
    );
};

export default Header;
