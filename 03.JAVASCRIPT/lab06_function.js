//js로만 개발을 해야 하는 상황
//node 가 브라우저 아니라 하더라도 개발 및 실행 test를 용이하게 해주는 기능
/* 함수 학습
1. 사용자 정의 함수 개발 방법
2. parameter에 대한 특징 확인
*/ 
function fun1(){
    console.log(1);
}
fun1();

console.log("--- 2 ---");
function fun2(v){
    console.log(v);
}
fun2();//undefined - js 타입
fun2(11);   //11
fun2(11, 22); //11
fun2(11, 22, 33); //11

console.log("--- 3 ---");
function fun3(v1, v2){
    console.log(v1);
}
fun3();//undefined - js 타입
fun3(11);   //11
fun3(11, 22); //11
fun3(11, {key1:22, key2:33}); //11

console.log("--- 4 ---");
/*
java 
1. 변수 선언
    타입 변수명;
2. 메소드 구현
    반환타입 메소드명([..]){[...]}

- int 변수에는 int값만 가능
- double 변수에는 double값만 가능
- 선언된 변수 타입에 맞는 데이터값만 대입

----
js
1. 변수 선언
[var] 변수명;
- 타입 선언 없음
- 변수에 대입되는 데이터 값은 동적으로 가변적임
2. 함수가 값을 반환시 반환타입 명시 안함

*/
