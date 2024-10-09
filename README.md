# E-commerce with Web Scraping

## 목적

💡 '웹크롤링'을 통해 할 수 있는 작업을 해본다.

-   [Repo: 나의 웹크롤링](https://github.com/youngcodej22/ecommerce-web-scraping)

💡 'commit convention' 및 PR(pull request) 작성 연습을 통해 문제점을 고민해본다.

## 작업 소개

-   골프웨어 사이트 디자인 클론 및 리액트로 변경 <br />
-   제품 이미지, 상세 내용 🗝️'웹크롤링'을 통해 추가 (연습 목적 일회성, 추후 변경 예정)

## 작업 내용

❗ 현재 '메인페이지', 상품 리스트 페이지만 구현 (상세 페이지, 그 외 페이지 X) <br />

❗ 일부 아이콘 및 이미지 not found는 원본 사이트에 링크로 연결해서 not found 처리 됨 (이미지 주소가 원본에서 달라져서) (추후 사이트 업데이트하려고 함)<br />

✔️ 메인페이지

-   로고, 메뉴 탭 이동 (Brand부터 Promotion까지 페이지 연결 가능)
-   Season Trend 탭 이동
-   Best Coordination 슬라이더 (More style 버튼 연결 페이지 구현)

✔️ 페이지

-   Brand, New, Women, men, acc, outlet, promotion 까지만 페이지 구현

✔️ **상품 리스트 페이지 (New 부터 outlet 까지)**

-   **'신상품' 부터 '선호도순' 까지 '웹크롤링'된 JSON에 추가 데이터를 넣어서 상품 정렬을 구현**
-   **왼쪽 Sidebar에 필터 ON/OFF 버튼**
-   **왼쪽 Sidebar에 상품 Tab Click 가능 및 URL parameter를 기반으로 현 위치 색깔 표시**
-   **왼쪽 Sidebar에 하단에 '상세 필터' 기능 (성별 부터 가격 까지 기능 구현)**

## Skill

-   React
-   TypeScript
-   Vite
-   SCSS

## Commit convention

-   [참고: conventional-emoji-commits](https://conventional-emoji-commits.site/list/list)

1.  ⚙(`:gear:`) conf: 환경설정
2.  📚(`:book:`) docs: 문서화
3.  📦(`:package:`) assets: 이미지, 아이콘 등 파일
4.  ✨(`:sparkles:`) feat: 기능 추가 및 업데이트
5.  🎨(`:art:`) style: CSS 관련
6.  🩹(`:adhesive_bandage:`) fix: 수정
7.  🔨(`:hammer:`) refac: 코드 리팩토링, 기능적인 변경 없이
8.  🔷(`:large_blue_diamond:`) types: type 추가
9.  🤖(`:robot_face:`) ci: CI 환경설정
10. 🛠️(`:hammer_and_wrench:`) build: build 관련 설정
11. 🧪(`:test_tube:`) test: test 관련 코드를 추가 하거나 적용
12. ⏪(`:rewind:`) revert: 이전 커밋으로 되돌릴 때
13. 🌏(`:earth_asia:`) common: 일반적인 변경 (적합한 특정 커밋이 없는 경우, 특별한 것이 아닌 변화)
14. 🐛(`:bug:`) bug: 버그 발생 시
