## # 지원자

김태헌



## # 과제 목표

Google Form 클론 코딩



## # 프로젝트 실행

```
npm install
npm run dev
```



## # 프로젝트 환경

**빌드 도구** : Vite

**언어** : TypeScript

**상태 관리** : Redux-toolkit



## # Commit 컨벤션

```
feat: 기능 추가, 삭제, 변경 (코드 수정)
fix: 버그 수정
type: 코드 형식 변경
design: UI 변경
refactor: 코드 리팩토링
docs: 코드 외 문서의 추가, 삭제, 변경
test: 테스트 코드 추가, 삭제, 변경
chore: 빌드 업무 수정, 패키지 매니저 수정
```



## # 폴더 구조

```
src
 ┣ components
 ┃ ┣ Answer
 ┃ ┃ ┣ Complete
 ┃ ┃ ┃ ┣ BaseCompleteForm.tsx
 ┃ ┃ ┃ ┣ CompleteDropdownAnswer.tsx
 ┃ ┃ ┃ ┣ CompleteMultipleAndCheckBoxAnswer.tsx
 ┃ ┃ ┃ ┗ CompleteShortAndLongAnswer.tsx
 ┃ ┃ ┗ Modify
 ┃ ┃ ┃ ┣ BaseModifyForm.tsx
 ┃ ┃ ┃ ┣ ModifyDropdownAnswer.tsx
 ┃ ┃ ┃ ┣ ModifyMultipleAndCheckBoxAnswer.tsx
 ┃ ┃ ┃ ┗ ModifyShortAndLongAnswer.tsx
 ┃ ┣ FormContentList
 ┃ ┃ ┣ FormContent.tsx
 ┃ ┃ ┗ FormContentList.tsx
 ┃ ┣ FormTitle
 ┃ ┃ ┣ CompleteFormTitle.tsx
 ┃ ┃ ┗ FormTitle.tsx
 ┃ ┣ UI
 ┃ ┃ ┣ DivLine.tsx
 ┃ ┃ ┣ Dropdown.tsx
 ┃ ┃ ┣ Exit.tsx
 ┃ ┃ ┣ KebabMenu.tsx
 ┃ ┃ ┗ ToggleSwitch.tsx
 ┃ ┗ SideMenubar.tsx
 ┣ helper
 ┃ ┣ arrayValueDelete.ts
 ┃ ┣ arrayValueModify.ts
 ┃ ┣ handleAddQuestion.ts
 ┃ ┣ handleDeleteQuestion.ts
 ┃ ┗ handleReplaceQuestion.ts
 ┣ pages
 ┃ ┣ GoogleForm.tsx
 ┃ ┣ GoogleFormComplete.tsx
 ┃ ┗ GoogleFormPreview.tsx
 ┣ store
 ┃ ┣ formListSlice.ts
 ┃ ┣ formTitleSlice.ts
 ┃ ┗ store.ts
 ┣ styles
 ┃ ┗ theme.ts
 ┣ App.tsx
 ┣ env.d.ts
 ┗ main.tsx
```



## # 구현Scope

- 설문지 제목 추가, 편집
- 설문지 설명 추가, 편집
- 질문 추가
  - 단답형
  - 장문형
  - 객관식 질문
  - 체크박스
  - 드롭다운
- 질문 복사 기능
- 질문 삭제 기능
- 필수 옵션 설정 기능
- 미리보기 기능
- 양식 지우기
- 제출 버튼



## # 배포 링크

https://google-forms-clone-two.vercel.app/



