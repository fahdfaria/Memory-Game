console.log("linked");

window.onload = () => {

  function randomizer(arr, count) {

  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;

    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
  return shuffled.slice(min);
}

const imagesArray = [
  {
    'name': 'dog',
    'img': 'images/dog.gif',
  },
  {
    'name': 'kangaroo',
    'img': 'images/kangaroo.gif',
  },
  {
    'name': 'running',
    'img': 'images/running.gif',
  },
  {
    'name': 'tennis',
    'img': 'images/tennis.gif',
  },
  {
      'name': 'dragon and co',
      'img': 'images/dragon.gif',
  },
  {
    'name': 'old man chill',
    'img': 'images/oldmanchill.gif',
  },
  {
    'name': 'spinner lady',
    'img': 'images/spinnerlady.gif',
  },
  {
    'name': 'split man',
    'img': 'images/splitman.gif',
  },
  {
    'name': 'wolverine',
    'img': 'images/wolverine.gif',
  },
];


  duplicateImages = imagesArray.concat(imagesArray);

  duplicateImages = randomizer(duplicateImages, 18);

  var imageSection = document.getElementById("imageSection");

    duplicateImages.forEach(images => {

      var image = document.createElement("div");
      image.classList.add("card");

      image.dataset.name = images.name;

      var front = document.createElement("div");
      front.classList.add("front");
      front.style.background = "url('./images/Question_mark_card.png') no-repeat center / contain"

      var back = document.createElement("div");
      back.classList.add("back");
      back.style.background = `url(${images.img}) no-repeat center / contain`;
      back.style.transform = "rotateY(180deg)";

      imageSection.appendChild(image);
      image.appendChild(front);
      image.appendChild(back);

  });



  let attempts = 0;
  let correctCombo = 0;
  let count = 0;

  imageSection.addEventListener('click', function (e) {

    if (e.target.parentNode.classList == "card") {

      count++

      if (count === 1) {
        e.target.parentElement.style.transform = "rotateY(180deg)";
        clickedImage1 = new Object;
        clickedImage1 = e.target.parentElement;

      }

      if (count === 2) {
        e.target.parentElement.style.transform = "rotateY(180deg)";
        clickedImage2 = new Object;
        clickedImage2 = e.target.parentElement;

        setTimeout( () => {

        if (clickedImage1.dataset.name != clickedImage2.dataset.name ) {

        clickedImage1.style.transform = "";

        clickedImage2.style.transform = "";

        attempts++;

        console.log("not same");

        }else

        if (clickedImage1.dataset.name === clickedImage2.dataset.name) {

          correctCombo ++

        }

      }, 600);

      count = 0;


      }


    }

      console.log(count);
      console.log(attempts);
      console.log(correctCombo);

      if (correctCombo > 0) {

        var score = document.getElementById("score");

        score.innerHTML = `You took ${attempts} attempts to locate ${correctCombo} similar images.`;

      }


  });

};
