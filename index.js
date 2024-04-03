let obj = (function () {
  let ul = document.querySelector('ul')
  function clone() {
    let newObj = ul.children[0].cloneNode(true)
    ul.append(newObj)
  }
  clone()
  let duration = 2000
  let itemHeight = 30, curIndex = 0

  setInterval(move, duration)
  function move() {
    let from = itemHeight * curIndex
    curIndex++
    let to = itemHeight * curIndex
    //每隔50s变化一次，间隔时间
    let duration = 50
    //变化总时间
    let totalTime = 1000
    let times = totalTime / duration//变化次数
    let length = (to - from) / times//变化一次的距离
    let timeId = setInterval(function () {
      from += length
      if (from >= to) {
        clearInterval(timeId)
        if (curIndex === ul.children.length - 1) {
          curIndex = 0
          from = 0
        }
      }
      ul.scrollTop = from
    }, duration)
  }
  return duration
})();

