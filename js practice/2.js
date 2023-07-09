document.addEventListener("DOMContentLoaded",
  function(e){
    document.addEventListener("keydown",
      function(e){
        console.log(e.key)
        if (e.key ==="q"){
          alert('this is Q!!!')
          /*
          자바스크립트에서
          = 대입
          == 비교 (3 == '3' : True)
          === 엄격한 비교 (3 === '3' : False)
          */
        }
      }
    )

    let keydown = document.querySelector("#keydown")
    keydown.addEventListener("keydown",
      function(e){
        console.log(e.target.value)
      }
    )

    let change = document.querySelector("#change")
    keydown.addEventListener("change",
      function(e){
        console.log(e.target.value)
      }
    )

    let input = document.querySelector("#input")
    keydown.addEventListener("input",
      function(e){
        console.log(e.target.value)
      }
    )
  }
)
