const starList = document.querySelectorAll('.stars__list')


starList.forEach(function (item) {
    let html = ''
    for (let i = 1; i <= 5; i++) {
        html += `<li>
        <img src="images/icon-star.svg" alt="star" />
      </li>`
    }
    item.innerHTML = html
})
