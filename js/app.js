$(document).ready(function () {
  $(".carousel").carousel({
    fullWidth: true,
    duration: 200,
    indicators: true
  })

  $(".modal").modal({
    dismissible: true,
    inDuration: 300,
    outDuration: 000
  })
})

const counter = document.querySelectorAll(".counter")
const speed = 400

counter.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target")
    const count = +counter.innerText
    // console.log(target);
    const inc = target / speed
    window.scrollTo(0, 0)

    if (count < target) {
      counter.innerText = Math.ceil(count + inc)
      setTimeout(updateCount, 1)
    } else {
      count.innerText = target
    }
  }
  updateCount()
})
