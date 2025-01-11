let productImg = document.getElementById('productImg');
let btns = document.getElementsByClassName('btn');

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    productImg.src = `assets/image${i + 1}.png`;
    for (let btn of btns) {
      btn.classList.remove('active');
    }
    this.classList.add('active');
  };
}
