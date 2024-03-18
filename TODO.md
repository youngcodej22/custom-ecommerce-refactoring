# TODO List

## File Structure

1. [x] vite, packages 설치
2. [x] config 파일들 설정 (tsconfig, vite.config, .prettierrc, ...)
3. [x] assets 추가
4. [x] Router 설정 (App.tsx)
5. [x] Layout 추가, 설정
6. [x] components 추가 (Header, Footer, )
7. [x] pages 추가
8. [x] styles 추가 (custom CSS Framework 도입)
9. [x] types 추가 (aos)

<br />

## Component화

1.  Home
    -   Season Trend
        -   ProductCard (이미지, 제목/설명, 가격, 뱃지)
    -   Best Coordination
        -   코디 이미지
        -   ProductCard (이미지, 제목, 뱃지)

### component 만들기

1. ProductCard

    - [x] Card에 따라 설명이 들어가는 것과 안들어 가는 것 가능하게 하자.
        - MainContents에 `.goods-tab-box>ul>li`가 하나의 ProductCard가 된다.
    - [ ] ProductCard를 컴포넌트화 한 후에 framework화하자.

2. Tab
    - [ ] Home>Season Trend에서 Tab 누르면 해당 카테고리 상품 보이게 (category가 NEW이면 label에서 MEN이 있는지 본다듣지)
    - [ ] ACC의 경우 남자,여자 다 보여야해서 db에서 category에서 잘 나타내자

<br />

## Git extension을 활용해서 프로젝트 진행해보자

-   [inpa](https://inpa.tistory.com/entry/VSCode-%F0%9F%92%BD-GIT-%EC%9D%B5%EC%8A%A4%ED%85%90%EC%85%98-%EC%B6%94%EC%B2%9C)

---

## 정리

1. React Convention

-   [React-Naming convention](https://www.linkedin.com/pulse/react-js-naming-convention-kristiyan-velkov/)
-   [React-Components naming convention](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505)
