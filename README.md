# TOS M BossTimer

## 1. 프로젝트 계획 이유
### > [**TOS M BossTimer**](https://tos-m-bosstimer.vercel.app/)

- 실제 개발한 서비스는 단순 보여주기 식이 아닌, 서비스를 필요로 하는 사용자들에 의해 빛나는 것이라고 생각합니다.
- 그래서, 사용자에게 도움이 될 수 있으면서 빠르게 서비스할 수 있는 주제를 찾게 되었고, 신규 출시한 **모바일 게임**을 대상으로 삼게 되었습니다.
- 그 과정에서, 유저에게 공유가 필요한 **필드 보스 등장 컨텐츠**를 주제로 잡아 개발 대상으로 삼을 수 있었습니다

### 1.1. 제공기능

1. HOME
   - 에피소드 별 보스 타이머 기능 제공
   - 일정 시간 내 알림 기능 제공

2. Admin
   - 소개 및 유저분들께 드리는 말씀 제공

3. Update
   - 버전 소개 및 업데이트 내용 제공 

---

## 2. Install & Deploy

### 2.1. Init: Next.js

- [**Install Node.js Path**](https://nodejs.org/ko/download/) : Next.js 설치를 위해, 기본적으로 Node가 필요하니, Node.js 설치를 진행합니다.

- 다음으로, create-next-app을 설치합니다.
  ```shell
  npm install –g create-next-app
  ```

- 위 과정에서 설치한 create-next-app으로 Next.js 프로젝트를 생성합니다.
  ```shell
  npx create-next-app [project-name]
  ```

- Next.js project를 실행합니다.
  ```shell
  npm run dev
  ```

### 2.2. Firebase

- 사용자 데이터 관리를 위한 데이터베이스인 [**Firebase**](https://firebase.google.com/docs/web/setup?hl=ko) 를 설치합니다.
  ```shell
  npm install firebase
  ```

### 2.3 recoil

- React 상태 관리를 목적으로 제공되는 라이브러리인 recoil를 설치합니다.
  ```shell
  npm install recoil
  yarn add recoi
  ```


### 2.4. TypeScript 

- 타입스크립트를 설치합니다
  ```shell
  npm install [-g(전역설치)] typescript
  ```

- Next.js 프로젝트를 실행해봅니다.
  ```shell
  npm run dev
  ```

- 만약, 터미널에 Typescript 설정 방법이 출력된다면, 안내대로 TypeScript에 필요한 라이브러리를 설치합니다.
  ```shell
  npm install --save-dev @types/react @types/node
  ```

- Next.js 프로젝트를 다시 실행합니다.
  ```shell
  npm run dev
  ```

### 2.5. Tailwind

- 먼저, Tailwind를 설치합니다.
  ```shell
  npm install -D tailwindcss
  npx tailwindcss init
  ```

- tailwind.config.js의 내용을 변경합니다.
  ```
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    mode: 'jit',
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}", /*page 내 js,ts 파일을 tailwind css로 적용*/
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode:'class',
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

- globals.css 내용을 변경합니다.
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- postcss.config.js을 root에 생성합니다.
  ```
  module.exports = {
      plugins : {
          tailwindcss : {config : './tailwind.config.js'},
      },
  }
  ```

### 2.6 LottieFiles

- lottie-player를 설치합니다.
  ```
  npm install --save react-lottie-player
  ```

- public/*.json 형식으로 다운로드한 파일을 저장한 후, 컴포넌트 형식으로 파일을 참조합니다.


### 2.7 Deploy - Vercel

- Vercel은 Next.js에서 제공하는 배포 플랫폼으로 [빌드 + 배포 + 호스팅] 서비스를 제공합니다.
- 본 프로젝트의 설계 결과물은 Vercel을 이용하여 배포 중에 있습니다.

---

## 3. Update

### v1.0.0 (2022-11-18)

- 타이머 서비스 시작
- 에피소드 01 ~ 08의 필드 보스의 리젠 시간을 확인할 수 있습니다.

- 필드 이벤트 시간을 제외한 보스 별 리젠 시간을 갱신하기 버튼을 눌러 갱신할 수 있습니다.

- 보스 처치 후 아무나 갱신하기 버튼을 눌러 시간을 갱신하게 되면, 변경된 시간을 실시간으로 모든 유저가 변경된 시간을 페이지 새로고침 없이 확인할 수 있습니다.

### v1.1.0 (2022-11-18)

- 에피소드 07, 08의 2개 채널(1,2)에 대한 필드 보스의 리젠 시간을 확인할 수 있습니다.

- 채널 추가 과정에서, 에피소드 별 전체 보스 리젠 시간이 초기화되었습니다. (2022-11-18 12:00).

### v1.1.1 (2022-11-18)

- Ep07, Ep08 에피소드의 채널 별로 필드 이벤트 시작 시간 및 타이머의 출력 영역을 분리하였습니다.

- EP08 영역에서 즉시 시간 갱신이 이루어지지 않던 문제를 해결하였습니다.

### v1.2.0 (2022-11-19)

- 메인 화면 변경 및 회원가입 과정의 비밀번호 문제 안내 추가

- 메인 화면을 좀 더 심미성 있게 변경하였습니다.

- 회원가입 과정에서 비밀번호 입력을 6글자 미만으로 수행하는 경우, 알 수 없는 오류 문구라고 출력하는 대신, 비밀번호 길이를 6글자 이상 입력해달라고 요청하는 문구를 출력할 수 있도록 하였습니다.

### v1.2.2 (2022-11-20)

- 에피소드 06 2개 채널(1,2)에 대한 필드 보스의 리젠 시간을 확인할 수 있습니다.

### v1.2.3 (2022-11-25)

- 모든 필드의 보스 이벤트마다 타이머의 남은 시간에 따라 알림이 발생하던 기능의 기준 시간을 10분에서 5분으로 변경하였습니다.