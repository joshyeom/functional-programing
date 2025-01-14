## 요점 정리

- 함수형 프로그래밍에서 불변 데이터가 필요합니다. 계산세어세는 변경 가능한 데이터에 쓰기를 할 수 없습니다.
- 카피-온-라이트는 데이터를 불변형으로 유지할 수 있는 원칙입니다. 복사본을 만들고 원본 대신 복사본을 변경하는 것을 말합니다.
- 카피-온-라이트는 값을 변경하기 전에 얕은 복사를 합니다. 그리고 리턴합니다. 이렇게 하면 통제 할 수 있는 범위에서 불변성을 구현할 수 있습니다.
- 보일러 플레이트 코드를 줄이기 위해 기본적인 배열과 객체 동작에 대한 카피-온-라이트 버전을 만들어 두는 것이 좋습니다.
