/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carel = () => {
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const imgMount = document.createElement('img');
  const imgComp = document.createElement('img');
  const imgTree = document.createElement('img');
  const imgCar = document.createElement('img');
  const rightBtn = document.createElement('div');

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  imgMount.src = "./assets/carousel/mountains.jpeg";
  imgComp.src = "./assets/carousel/computer.jpeg";
  imgTree.src = "./assets/carousel/trees.jpeg";
  imgCar.src = "./assets/carousel/turntable.jpeg";
  rightBtn.textContent = '>';
  leftBtn.textContent = '<';

  let array = [];
  array.push(imgMount, imgComp, imgTree, imgCar);
  array.forEach((item, index) => {
    leftBtn.addEventListener('click', ()=> {
      return array[index -1];
    })
    rightBtn.addEventListener('click', () => {
      return array[index +1];
    })
  })

  carousel.append(leftBtn, imgMount, imgComp, imgTree, imgCar, rightBtn);

  return carousel
}

const container4 = document.querySelector('.carousel-container');

container4.appendChild(carel());