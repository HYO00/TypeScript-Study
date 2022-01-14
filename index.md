TypeScript = JavaScript + Type
JavaScript 동적 타입핑 -> 컴파일시 실행
5 - '1' 가능 숫자에서 문자지만 가능
편리하지만 프로젝트가 커지면 자유도 & 유연성은 오히려 단점
TS를 쓰면 타입을 엄격히 검사해서 에러를 뱉어냄

js파일은 브라우저에서 못읽는다. js로 변환해여 사용가능
어떻게? 터미널에 tsc -w 입력해두면 자동변환된다. 끄지않으면 변환!
tsconfig.json은 ts -> js컴파일시 옵션 설정을 가능하게 해준다.

타입변경에 들어갈수 있는 변수
string, number, boolean, null, undefined, bigint, [], {} 등

# ts 파일이 변경되면 즉시 js가 변경되도록 설정

tsc -w
