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

// Card data
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

  imageSection.style.display = "flex";
  imageSection.style.flexWrap = "wrap";

    duplicateImages.forEach(images => {

      var image = document.createElement("div");
      image.classList.add("card");
      image.style.transition = "all .4s linear";
      image.style.transformStyle = "preserve-3d";

      image.dataset.name = images.name;

      var front = document.createElement("div");
      front.classList.add("front");
      front.style.position = "absolute"
      front.style.backfaceVisibility = "hidden";
      front.style.background = "url('./images/Question_mark_card.png') no-repeat center / contain"

      var back = document.createElement("div");
      back.classList.add("back");
      back.style.position = "absolute"
      back.style.backgroundImage = `url(${images.img})`;
      back.style.backgroundRepeat = "no-repeat";
      back.style.backgroundPosition = "center";
      back.style.backgroundSize = "contain";
      back.style.backfaceVisibility = "hidden";
      back.style.transform = "rotateY(180deg)";

      imageSection.appendChild(image);
      image.appendChild(front);
      image.appendChild(back);

  });



  let count = 0;
  let attempts = 0;
  let correctCombo = 0;

  imageSection.addEventListener('click', function (e) {

    if (e.target.parentNode.classList == "card") {
      count ++;

      if (count === 1) {
        e.target.parentElement.style.transform = "rotateY(180deg)";
        clickedImage1 = new Object;
        clickedImage1 = e.target.parentElement;

      }

      if (count === 2) {

        count = 0;

        e.target.parentElement.style.transform = "rotateY(180deg)";
        clickedImage2 = new Object;
        clickedImage2 = e.target.parentElement;

        setTimeout( () => {

        if (clickedImage1.dataset.name != clickedImage2.dataset.name ) {

                  attempts += 1;

                  clickedImage1.style.transform = "";
                  clickedImage2.style.transform = "";

                  console.log("not same");

        }else

        if (clickedImage1.dataset.name === clickedImage2.dataset.name) {

                  correctCombo ++

        }

      }, 580);


      }


    }

      console.log(count);
      console.log(attempts);
      console.log(correctCombo);

      if (correctCombo == 8) {

        var score = document.getElementById("score");

        score.innerHTML = `You took ${attempts} attempts to locate all pictures`;

      }

  });

};
