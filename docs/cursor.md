# Cursor Editor Tip

## 유용한 질문들

-   how does this code work?
-   create add function in javascript
-   what is wrong with this code?

## install

### git editor를 vscode에서 cursor로 변경할 떄 (미해결)

-   문제

    -   cursor editor를 이용 중인데 `git commit` 시에 editor가 vscode로 열린다. 아직 수정이 안된 상태다. 그래서 cursor로 바꾸려고 해보았다.
    -   [기타 자료-도움이 안됨](https://github.com/getcursor/cursor/issues/900)

-   cursor path

    -   "C:\Users\YB\AppData\Local\Programs\cursor\resources\app\bin\cursor"

-   vscode path

    -   "C:\Users\YB\AppData\Local\Programs\Microsoft VS Code\bin\code"

-   git에서 core.editor 삭제 (수정을 위해)

    -   `git config --global --unset core.editor`
    -   `git config --global --unset-all core.editor`

-   git에서 core.editor 추가

    -   `git config --global core.editor "C:\Users\YB\AppData\Local\Programs\cursor\resources\app\bin\cursor --wait" ` (cursor)
    -   `git config --global core.editor "cursor --wait"` (vscode)

-   위에 cursor path를 넣거나 `cursor --wait`로 설정해도 오류가 생긴다. 그래서 path에 직접 들어가 code, cursor 파일을 각 각 직접 변경하려고 시도 중이었으나, 아직 이해가 부족하다.

---

##### 참고

-   [Titus Tech Talk](https://www.youtube.com/watch?v=8h6Kpac5U2c)
-   [HuXn WebDev](https://www.youtube.com/watch?v=ApZ5PT8g0H8)
