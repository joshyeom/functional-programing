## 카피-온-라이트

### 언제 쓰나요?

- 통제할 수 있는 데이터를 바꿀 때

### 어디서 쓰나요?

- 안전지대 어디서나

### 복사방식

- 얕은 복사(상대적으로 비용이 덜 듭니다.)

### 규칙

1. 바꿀 데이터의 얕은 복사를 만든다.
2. 복사본을 변경한다.
3. 복사본을 반환한다.

## 방어적 복사

### 언제 쓰나요?

- 신뢰할 수 없는 코드와 데이터를 주고받아야 할 때

### 어디서 쓰나요?

- 안전지대의 경계에서 데이터가 오고 갈 때

### 복사방식

- 깊은 복사(상대적으로 비용이 많이 듭니다.)

### 규칙

1. 안전지대로 들어오는 데이터에 깊은 복사를 만든다.
2. 안전지대로 나가는 데이터에 깊은 복사를 만든다.