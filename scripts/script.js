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


  duplicateImages = imagesArray.concat(imagesArray)

  duplicateImages = randomizer(duplicateImages, 18);

  var imageSection = document.getElementById("imageSection");

    duplicateImages.forEach(images => {

      var image = document.createElement("div");
      image.classList.add("card");

      image.dataset.name = images.name;

      var front = document.createElement("div");
      front.classList.add("front");

      var back = document.createElement("div");
      back.classList.add("back")
      back.style.backgroundImage = `url(${images.img})`;

      imageSection.appendChild(image);
      image.appendChild(front)
      image.appendChild(back)

  });



  let count = 0;
  let attempts = 0;
  let correctCombo = 0;

  imageSection.addEventListener('click', function (e) {

    if (e.target.parentNode.classList == "card") {
      count ++;

      if (count === 1) {
        e.target.parentNode.classList.add("selected")
        clickedImage1 = new Object
        clickedImage1 = e.target.parentElement
      }

      if (count === 2) {

        count = 0;

        e.target.parentNode.classList.add("selected")
        clickedImage2 = new Object;
        clickedImage2 = e.target.parentElement;

        setTimeout( () => {

        if (clickedImage1.dataset.name != clickedImage2.dataset.name ) {

                  attempts += 1;

                  clickedImage1.classList.remove("selected");
                  clickedImage2.classList.remove("selected")

                  console.log("not same");

        }

        if (clickedImage1.dataset.name === clickedImage2.dataset.name) {

                  correctCombo ++

        }

        }, 900);


      };


    };

      console.log(count);
      console.log(attempts);
      console.log(correctCombo);

      if (correctCombo == 8) {

        var score = document.getElementById("score");

        score.innerHTML = `You took ${attempts} attempts to locate all ${correctCombo}`

      }

  });

}
