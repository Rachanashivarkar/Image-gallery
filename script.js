const imagesArr = [
    "./images/kyoto.jpg",
    "./images/Miyazaki.jpg",
    "./images/nara.jpg",
    "./images/tokyo.jpg",
    "./images/toyama.jpg"
  ];
  
  let imgIndex = 0;
  const imgElement = document.getElementById('img');
  
  function prev() {
    if (imgIndex === 0) {
      imgIndex = imagesArr.length - 1;
    } else {
      imgIndex--;
    }
    imgElement.src = imagesArr[imgIndex];
  }
  
  function next() {
    if (imgIndex === imagesArr.length - 1) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }
    imgElement.src = imagesArr[imgIndex];
  }
  