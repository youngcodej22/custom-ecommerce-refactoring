# E-commerce with Custom CSS Framework 연습 - 기록

## 진행 순서

### 환경설정

#### packages

1. vite
    - 비트는 자바스크립트 네이티브 모듈 (opens new window)을 기반으로 한 데브 서버
    - `yarn create vite`
2. aos
    - Animate On Scroll library
    - `yarn add aos`
3. node-sass
    - node 환경에서 사용가능한 sass
    - `yarn add node-sass`
4. swiper
    - carousel library
    - `yarn add swiper`
5. sass
    - css preprocessor
    - `yarn add -D sass`
6. @types/aos
    - vite를 통해 설치 한 것 외에 추가 설치

---

## 오류 해결

### 1. 이미 remote로 push한 commit message 변경

-   ❔ 문제: 마지막으로 push한 commit에 제목을 잘못 작성하여 수정이 필요했다. (convention에 맞게 ADD를 추가하였다.)
-   ❗ 해결
    -   `git commit --amend` 이후 마지막한으로 작성한 commit을 수정한다.
    -   `git push --force-with-lease origin main` (main이 아니라면 다른 브랜치를 작성)
-   ✔️ 생각한 점

    -   공식문서에서 보면 이 방법들을 추천하지 않는다. 이유는 협업을 한 경우에 동료들의 repository에 commit message가 업데이트 되지 않는다는 점이다. 만약 꼭 필요한 상황이라면 동료들에게 알려준 후에 해결 하는 것이 좋겠다.
    -   나의 경우는 혼자 작업을 하여서 일단 이 방법으로 수정을 하였다.

-   [github docs](https://docs.github.com/ko/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)

---

### Reference

-   [참고 site: mackayson-pc](https://www.mckayson.com/)
-   [참고 site: mackayson-mobile](https://m.mckayson.com/)
-   [좋은 commit message 작성법](https://djkeh.github.io/articles/How-to-write-a-git-commit-message-kor/)
