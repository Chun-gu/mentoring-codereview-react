# 안내사항

과제 진행하시기 전에 꼭 필독해주세요!!

## 개발환경

- node 버전은 18.15.0 버전으로 진행해주세요
- 라이브러리에 대한 제한은 따로 없습니다
- [yarn start 혹은 npm start] script를 통해 로컬환경에서 개발한 결과물을 확인할 수 있습니다

## 안내사항

- 브랜치를 `version/light`로 변경하시고 진행해주세요
- api를 호출하려는 경우 `src/apis` 폴더에 존재하는 메서드를 이용해주세요
- 해당 과제가 실제 product로 런칭이 될 것이라고 생각하고 진행해주세요
- 프로젝트 폴더 구조는 자유롭게 변경하셔도 무방합니다
- 과제가 완료되면 `개인오픈채팅방`으로 깃허브링크 혹은 파일을 전달해주세요

## 기획서

아래 링크를 들어가시면 확인하실 수 있습니다

https://www.figma.com/file/Bf9I7bAymnfJA76SkXAX0S/%EA%B3%BC%EC%A0%9C?type=design&node-id=0%3A1&mode=design&t=1m2m1jjnNZVmixh7-1

---

# 요구 사항 분석

### 홈 화면

- 찜하기 버튼 클릭 시, 팝업 필요 없음
- 찜목록은 store에서 관리
- 예매하기 버튼 클릭 시, 예매 화면으로 이동
- 리스트는 실제 API에서 응답받는 것처럼 구현

### 찜목록

- 찜하기 버튼 클릭 시, 리스트 아이템 삭제 및 갱신
- 예매하기 버튼 클릭 시, 예매 화면으로 이동
- 리스트는 실제 API에서 응답받는 것처럼 구현

### 예매 화면

- 뒤로가기 버튼 클릭 시, 이전 화면으로 이동
- 예매 완료 시, 홈화면으로 이동
- 이메일 전송 기능은 구현 필요 없음

# 구현한 기능

- 전시회(리스트 or 아이템) fetch
- 찜 등록 or 취소
- 예매

## store

- 전시회
  - GET: 전시회 목록 반환
  - GET: 전시회 반환
- 북마크
  - POST: 찜
  - DELETE: 삭제
- 예매
  - POST: 예매 결과 반환

## 컴포넌트

- components
  - ui: 공통 컴포넌트
  - 전시회 리스트
  - 전시회 아이템
  -

---

# 최종 README 템플릿

## 🔧 기술 스택

- 스택 이름:
  - 선정 이유:
- TailwindCSS
  - 선정 이유: 디자인 토큰을 생성해 테마를 적용하면 공통된 스타일의 경우 빠르게 개발 가능

## 📝 구현 사항

### 1. 구현한 기능 이름

- 이유:
- 어려웠던 점:
- 결과:

## 📈 개선 사항

### 1. 개선한 기능 이름

- 개선한 이유(문제):
- 개선한 방법:
- 결과:

### 2. 이미지 최적화

#### 문제

- **과한 이미지 사이즈**: 기획에 정의된 이미지의 크기는 `80x80`, `390x390` 두 가지인데, 서버에서 보내는 이미지의 크기는 전부 `1440x1440`이다.
- **이미지 포맷**: `webp`가 아님.
- **캐시**: ~~이미지를 응답하는 헤더에 캐싱이 되어 있지 않다. 매번 새로 요청 보내야 함.~~  
   ETag와 Last-Modified를 사용해 캐싱함.
  - 응답 헤더: `Etag: "68e24665c35b5e7abaa41dec9f47ba83"`  
     `Last-Modified: Sun, 17 Dec 2023 07:00:21 GMT`
  - 요청 헤더: `If-Modified-Since: Sun, 17 Dec 2023 07:00:21 GMT,
If-None-Match: "68e24665c35b5e7abaa41dec9f47ba83"`

#### 해결

- **이미지 서버**: 이미지 서버의 제어권이 나에게 있지 않기 때문에, 리사이징 이미지 서버를 새로 만들었다.
- **리사이징 & 포맷 변환**: 필요한 크기로 리사이징 및 포맷을 변환한 뒤 오리진에 저장
- **캐싱**: 오리진에 저장된 이미지를 클라우드 프론트에 캐싱, 클라우드 프론트 응답 값에 캐시 헤더

#### 결과

- 이미지 로딩 시간 감소: Nms => Nms
- LCP 점수 향상: n점 => n점

# 1st 스프린트

## 에러 해결

### CRACO

[Craco-Alias Error] Cannot parse tsconfig.json. Please validate it on https://jsonformatter.curiousconcept.com.
trailing comma가 있으면 에러가 발생해서 prettier 규칙을 override해서 tsconfig.json에만 trailingcomma 옵션을 껐다.

### MSW mockServiceWorker Git에 올려도 되나?

안 올려도 됨. 과거엔 `npx msw init` 해야만 생성되는 파일이라 git에 올려야 했지만, 이제는 `package.json`에 아래처럼 되어있으면 언제든 `msw`가 설치될 때 생성됨. 즉 `npm i` 할 때도 생성됨.

- [출처](https://github.com/mswjs/msw/discussions/1015)

```json
"msw": {
    "workerDirectory": [
      "public"
    ]
  }
```

### MSW가 불필요하게 요청을 인터셉트 함

그게 올바른 행동임. 사용자가 무슨 요청을 인터셉트 하고 싶은지 모르기 때문에 msw는 모든 요청을 전부 인터셉트함.
이게 싫다면 아래처럼 핸들러에 특정 요청은 그냥 보내도록 하면 됨.

```js
http.get('*.js', () => passthrough());
```

- [출처](https://github.com/mswjs/msw/issues/1936)

---

# 2nd 스프린트

## 동기

### PR

- TBD

### Font

#### Pretendard

##### 문제

- 디자인에 사용된 폰트가 `Apple SD Gothic Neo`이기에 애플 비사용자를 위해 해당 폰트를 직접 서빙하려고 했다.

##### 과정

- 해당 폰트의 라이센스를 검색한 결과, [Apple 커뮤니티](https://discussionskorea.apple.com/thread/251576809?sortBy=best)에서 "커뮤니티 전문가(Apple 소속이라고 함)"의 답변을 찾을 수 있었다.

  > Apple 기본 Font인 Apple SD 산돌고딕 Neo의 License는 모두 Apple이 가지고 있으며 Apple Product 사용자는 비상업, 상업 용도 모두 사용 가능합니다.  
  > 단 Font 파일에 대한 `공유 및 배포는 License 위반`에 해당됩니다.

- Apple 소속 직원의 답변이니 공식적인 답변이라고 할 수 있지만, 문서를 더 찾아보기로 했다.
- 먼저, 해당 폰트가 최신 OS인 [macOS Sonoma에 포함](https://support.apple.com/ko-kr/HT213773)된 것을 확인했고, [macOS Sonoma용 소프트웨어 사용권 계약](https://www.apple.com/legal/sla/docs/macOSSonoma.pdf)을 찾아보니 아래와 같이 설명한다.

  > 1-A. 본 사용권에 수반되는 ... `서체 및 모든 데이터는` ... 본 사용권 약관에 따른 사용만을 위하여 Apple Inc.가 귀하에게 `사용 허가한 것이며 판매한 것이 아닙니다`.  
  > 2-E. 서체. 귀하는 본 사용권 이용 약관에 따라 Apple 소프트웨어 실행 중에 콘텐츠를 표시 및 인쇄할 수 있는 Apple 소프트웨어에 포함된 서체를 사용할 수 있습니다. 그러나, 귀하는 `삽입(embedding)을 제한하지 않는 서체에 한해 콘텐츠에 해당 서체를 삽입할 수 있습니다`. 이러한 `삽입(embedding) 제한은 Font Book/ Preview/ Show Font Info 패널에서 확인`하실 수 있습니다.

- 이에 Font Book을 확인하려 했지만 Windows 사용자라 불가능했다.
- 현재까지의 정보를 기반으로 웹폰트를 직접 서빙하는 것이 `공유 및 배포` 또는 `삽입(embedding)`에 해당하는 것인지 판단해보면,
- `공유 및 배포` : 폰트 저작권은 `폰트 파일`에 적용되는데, 해당 폰트 파일 자체가 사용자에게 전달될 뿐만 아니라 브라우저를 사용해 다운로드까지 할 수 있으므로, `공유 및 배포`에 해당한다.
- `삽입(embedding)` : 아래 [산돌구름의 공지사항](https://www.sandollcloud.com/support/notice/view.html?id=91&lang=ko_KR)에 따르면 `삽입(embedding)`에 해당한다.
  > `폰트파일을 홈페이지 서버에 탑재`하여(이를 #`임베딩`이라고 합니다.) 홈페이지의 폰트가 방문자에게도 보여질 수 있도록 제작합니다. (이를 #웹폰트라고 합니다.)

##### 결론

- ["Apple SD 산돌고딕 Neo가 없는 다른 환경에서 이를 대체"](https://cactus.tistory.com/306)하기 위해 만들어진 [Pretendard](https://github.com/orioncactus/pretendard)를 사용하기로 했다.

#### CDN or 로컬?

폰트를 CDN 사용할 것인지 로컬에서 직접 보낼 것인지
가변 다이나믹 서브셋 깃헙에서 다운 받고 로컬에서 직접 서빙하기 => 캐싱되는지 확인
FOUT로 인한 CLS를 최대한 방지하기 위해 font-size-adjust 속성이나 letter-spacing, line-height 조정

- CDN 사용시
  - HTML 요청 => HTML 응답 => CSS 요청 => CSS 응답 => 폰트 요청 => 폰트 응답
- 로컬 사용시
  - HTML 요청 => HTML 응답 => 폰트 요청 => 폰트 응답

#### TailwindCSS

디자인에 사용된 요소 분석하고 템플릿 만듦

---

# 4th 스프린트

## useContext에 디버깅용 함수 사용

- 합성 컴포넌트를 구현하는데 몇몇 컴포넌트는 특정 컴포넌트 내에서만 사용하도록 제한할 목적으로 useContext를 사용해서 해당 context에 접근할 수 없으면 에러를 발생시켰다. 개발환경과 배포환경에 에러 메시지를 다르게 띄워서 혹시라도 사용자가 이 에러를 마주하면 운영팀에서 보고할 수 있도록 가이드했다.

## ComponentPropsWith<> 커스텀 유틸리티 타입

### 동기

컴포넌트가 전달받는 props의 타입을 정의하기 위해 `ComponentPropsWithRef`, `ComponentPropsWithoutRef`를 사용하고 있었는데 제가 만든 합성 컴포넌트 `ExhibitionCard` 이후 다른 사람이 사용할 때 이런 에러가 발생하지 않도록 강제하고 싶었습니다.

## 과정

|    ref    |    children    | type                                                                     |
| :-------: | :------------: | :----------------------------------------------------------------------- |
|  `void`   |     `void`     | `Omit<RequireKey<ComponentPropsWithRef<E>, never>, never>`               |
|  `void`   | `'noChildren'` | `Omit<RequireKey<ComponentPropsWithRef<E>, never>, 'children'>`          |
|  `'ref'`  |     `void`     | `Omit<RequireKey<ComponentPropsWithRef<E>, 'ref'>, never>`               |
|  `'ref'`  | `'noChildren'` | `Omit<RequireKey<ComponentPropsWithRef<E>, 'ref'>, 'children'>`          |
|  `void`   |  `'children'`  | `Omit<RequireKey<ComponentPropsWithRef<E>, 'children'>, never>`          |
|  `'ref'`  |  `'children'`  | `Omit<RequireKey<ComponentPropsWithRef<E>, 'ref' \| 'children'>, never>` |
| `'noRef'` |     `void`     | `Omit<RequireKey<ComponentPropsWithoutRef<E>, never>, never>`            |
| `'noRef'` | `'noChildren'` | `Omit<RequireKey<ComponentPropsWithoutRef<E>, never>, 'children'>`       |
| `'noRef'` |  `'children'`  | `Omit<RequireKey<ComponentPropsWithoutRef<E>, 'children'>, never>`       |

## 결과

## 고민

### ExhibitionCard 안에서 DetailList라는 합성 컴포넌트를 하나 더 만든 이유

전시회 정보의 마크업으로 dl, dt, dd 태그를 사용하는데 dt, dd 태그는 dl 태그 내부에 위치해야 한다. 그래서 dl 태그 밖에서 사용했을 때 에러를 발생시키기 위해 사용했다.

# TODO

## useDetailContext

해당 훅을 호출한 컴포넌트 이름 알아내서 에러 메시지에 넣기

## 이미지 최적화

MSW에서 이미지 요청 가로채서 최적화 시키고 이미지 서버 역할 대신하도록 하기

## 에러 처리

에러 바운더리 사용해서 에러 처리하기

- 페이지 404
- 컴포넌트 에러

## 로딩 처리

서스펜스로 스켈레톤 띄우기

## 폴더 구조 개편

FSD 식으로 개편

## ORM like grammar

서버에서 데이터 꺼내오는 거 ORM처럼 바꾸기

- localStorage를 클래스화 시킬 수 있음
