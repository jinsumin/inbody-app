## 인바디 코딩테스트 과제
### 웹 개발 직군 지원자 진수민

## https://inbody-board.vercel.app
## [과제 배포 사이트 바로가기](https://inbody-board.vercel.app)

### 과제 내용
- 공지사항 등록 페이지

### 사용한 기술
- JavaScript, React, Next.js, TailwindCSS, Notion API, Github, Vercel

### 프로젝트 구조
- components
    - board
        - borad-items.js
    - board.js
    - footer.js
    - header.js
    - layout.js
- config
    - index.js
- pages
    - api
        - submit-form.js
    - _app.js
    - index.js
    - register.js

### 구현 설명
- 클라우드 데이터베이스인 notion 을 활용하여 연동하였습니다. TOKEN, ID 값을 가져와서 권한을 부여 받았습니다.
- notion api ref : https://developers.notion.com/reference/intro
- 리액트 라이브러리를 활용하여 view 를 구현하였습니다. 
- tailwindCSS 를 활용하여 스타일링을 구현하였습니다.
- tailwind docs : https://tailwindcss.com/
- Next.js 환경에서 submit form api 핸들러 및 getServerSideProps 를 활용하여 db query 로직을 구현하였습니다.
- Next.js docs : https://nextjs.org/docs/getting-started
- 비동기 통식 방식은 fetch 방식을 사용하였습니다.
- github, vercel 을 활용하여 배포를 하였습니다.
