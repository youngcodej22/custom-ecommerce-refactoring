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

**먼저, 해당 파일에서 컴포넌트에 해당하는 부분을 잘라내고, 둘째, 컴포넌트 `.tsx`파일을 만들고 붙여넣어 거기서부터 시작하자**

1. ProductCard

    - [x] Card에 따라 설명이 들어가는 것과 안들어 가는 것 가능하게 하자.
        - MainContents에 `.goods-tab-box>ul>li`가 하나의 ProductCard가 된다.
    - [ ] ProductCard를 컴포넌트화 한 후에 framework화하자.

2. Tab

    - [ ] Home>Season Trend에서 Tab 누르면 해당 카테고리 상품 보이게 (category가 NEW이면 label에서 MEN이 있는지 본다듣지)
    - [ ] ACC의 경우 남자,여자 다 보여야해서 db에서 category에서 잘 나타내자
    - [x] **MainContents**컴포넌트에서 `Tabs`컴포넌트로 코드를 분리시키면서 `handleClick()`을 `Tabs`로 옮김. (맥락상 Tabs에서 사용되는 event handle이기 때문에)
    - [ ] Tabs 컴포넌트를 다른 곳에서 재사용 할 수도 있기 때문에 ProductCard와 분리 시켜 보자 (children을 이용해야 할거다)
        - [x] MainContents에 TabPane에 대한 자식들을 어떻게 할 것인가? ProductCard는 MainContent에 존재해야한다. 맥락상 Tabs, TabPane은 Tab에 관련한 것만 있어야 한다.
        - [x] **결국** 자식(Tabs)가 가진 state, eventhandle을 부모(MainContent)가 사용하려면 ContextAPI같은 상태툴을 사용해야한다. 부모>자식은 props로 해결가능하지만
        - [x] 상태관리를 위해 props로 연결하는 것을 했지만 더 좋은 방법이 있나?
        - [x] contextAPI 사용
        - [ ] Redux, zustand 등으로 옮기기

3. MainContents
    - [ ] ProductCards에 연결된 데이터를 상위 랭킹을 json으로 넣어서 상위 8개 제품만 보이게 해보자

<br />

## remote에 commit title 잘못쓴거 바꾸자, refac으로

<br />

## Tyepscript로 변환

<br />

## Data에 53개 데이터가 아니라 10개만 Request할 수 있을까?

<br />

## Lighthouse 및 성능 측정 해보자

<br />

## products_home.json에서 사진 연결 사진 호스팅을 내꺼로 옮기자

<br />

## Git extension을 활용해서 프로젝트 진행해보자

-   [inpa](https://inpa.tistory.com/entry/VSCode-%F0%9F%92%BD-GIT-%EC%9D%B5%EC%8A%A4%ED%85%90%EC%85%98-%EC%B6%94%EC%B2%9C)

<br />

## branch 나눠서 처리하자

<br />

## 개발자도구 React rendering 횟수 문제되는 컴포넌트등 최적화 알아보기

---

## 정리

1. React Convention

-   [React-Naming convention](https://www.linkedin.com/pulse/react-js-naming-convention-kristiyan-velkov/)
-   [React-Components naming convention](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505)
