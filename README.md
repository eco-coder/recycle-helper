# 분리수거 도우미
KBSC 소프트웨어 대회 참가작품

### 기술 스택
- React
- Next.js
- Typescript
- Sass
- Vercel

### 필수 환경
- node 14^

### 명령어
```bash
yarn dev # run 
```

### 변수, 파일 이름 작성 규칙
- Class name should be a PascalCase
- Enum type should be a PascalCase
- Constants should be written in UPPER_SNAKE_CASE
- Variables and functions should be written in camelCase
- Assets name should be written in lower_snake_case const imgUrl = 'assets/icons/icon_add.png'

### PR 날리기
- fork 따기
- local에 clone 하기 `eco-coder/recycle-helper` : X `[your github id]/recycle-helper` : O
```bash
# PR = Pull Request
# upstream = eco-coder/recycle-helper
# origin = [your github id]/recycle-helper

git remote add upstream https://github.com/eco-coder/recycle-helper.git # 최초 1회만, upstream 저장소 지정

git checkout main # origin/main 브랜치로 이동
git fetch upstream main # 원격 upstream에서 데이터를 로컬로 받아옴
git pull upstream main # origin/main 을 upstream/main 으로 덮어 씌움

git branch [custom branch]
git checkout [custom branch]

# 커밋하면서 작업 반복
...
git add .
git commit -m "커밋 내용"
git push
...

# 첫 커밋 이후에 https://github.com/eco-coder/recycle-helper/pulls 
# 위 링크로 가보면 compare & PR 초록색 버튼이 생길 것임 누르고
# 우선은 Create PR 하지 말고 Create Draft PR로 하면서 작업 하면됨

# 다시 커밋 반복

# 작업을 완료하고 최종 머지를 앞두고 해야할일
git rebase # 작업하던 브랜치에서 치면됨
# 참고 https://www.youtube.com/watch?v=tX2qn2x6v48
git push -f # 주의 내가 작업한 코드가 날아갈 수 있음
# 어려울것 같으면 회의 시간에 같이 해도 좋습니다 :)

# 이후에 회의 시간에 머지 요청을 주시면 서로 코드리뷰후에 maintainer가 머지 
```