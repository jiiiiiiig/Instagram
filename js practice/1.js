

//document 객체를 대상으로 이벤트 리스너를 추가한다. (비동기 - 일이 일어날때까지 기다린다)
//이벤트종류 : DOM<ContentLoaded
document.addEventListener("DOMContentLoaded",
  //이벤트 핸들러
  //HTML코드가 로딩된 이후 비동기적으로 수행할 작업들!
  function(e){
    //input 태그를 찾아 button 변수에 저장
    /*
    let이란?
    js의 객체. 딕셔너리와 유사
    key(키) : "value(값)"

    예시) let id = {
            name: "병현"     //String
            age : 29        //number
            books: "true"   //boolean
          }

    콘솔창에 id.name / id[name] 하면 "병현" 출력
    콘솔창에 id.height = 190 이렇게 객체에 새로운 값 바로 추가

    */
    let button = document.querySelector("input")
    //button 변수에 이벤트 리스너를 추가
    //이벤트 종류 : input
    button.addEventListener("input",
      //콘솔에 입력창의 값을 출력
      console.log(e.target.value)
    )
  }
)


//<p>태그에서 인라인 이벤트로 호출할 함수인 hi()를 정의한다
function hi(){
  alert("hi")
}
