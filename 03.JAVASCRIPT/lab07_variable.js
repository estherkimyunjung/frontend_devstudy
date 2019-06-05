//변수 선언
//ES6 - ECMA2015 버전, 객체 지향등 새로운 문법들이 많이 추가 및 생성
//js framework들이 더 발전, 이 ES6문법을 활용해서 개발
/* 변수 선언 문법
1. var - 정통
2. let - ES6
    - block scope 범위로 처리
3. const - ES6
    - 상수
4. 키워드없이 변수명
    - 전역 영역, 로컬 영역
*/
var v1 = "v1";
function fun1(){
    var v2 = "var v2";//로컬별수
    v3 = "v3";//전역
    let v4 = "v4";
    if(true){
        let name = "encore";
        console.log(name);
    }
    //console.log(name);ReferenceError: name is not defined
}
console.log(v1);
fun1();
/* 
정상 실행시 = v3
    fun1() : 선언된 변수들이 생성, v3은 전역변수로 자동 생성
비정상 실행시 = ReferenceError: v3 is not defined
    fun1() 구현되어 있다 하더라도 호출을 안 했기 때문에 변수들 자체가 생성이 안 되어있음
*/
console.log(v3);
//console.log(v4);
