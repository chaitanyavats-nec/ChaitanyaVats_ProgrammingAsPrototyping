let topTextInput, bottomTextInput;
let fontSizeSlider= document.getElementById("fontSizeSlider");
let fontColorSliderH, fontColorSliderS, fontColorSliderB;
let fontSelector;
let memeImage;
let imageSelector;
let selectedImage; // Declare selectedImage globally

function setup() {
  // Create canvas in column-two
  let canvas = createCanvas(600,600);
  canvas.parent('column-two'); // Assign the canvas to a div with ID 'column-two'
  
 

  function saving() {
    saveCanvas(canvas, "Canvas1", "jpg");
  }

  
  imageSelector = createSelect();
  imageSelector.option('Surprised Pikachu', 'assets/Surprised_Pikachu.jpg');
  imageSelector.option('Unsettled Tom', 'assets/Unsettled_Tom.jpg');
  imageSelector.option('Blinking White Guy', 'assets/Blinking_Guy.jpg');
  imageSelector.parent('column-one');
  imageSelector.changed(changeImage);
  imageSelector.class('imageSelector')
  
  topTextInput = createInput('Top text');
  topTextInput.parent('column-one');
  topTextInput.class('inputbox');
   // Adjust position for column-one
  
  bottomTextInput = createInput('Bottom text');
  bottomTextInput.parent('column-one');
  bottomTextInput.class('inputbox');
   // Adjust position for column-one
  
  fontSizeSlider = createSlider(10, 100, 50); // Min, Max, Default
  fontSizeSlider.parent('column-one');
  fontSizeSlider.class('slider')
   // Adjust position for column-one
  
  fontColorSliderH = createSlider(0, 360, 180);
  fontColorSliderH.parent('column-one');
  fontColorSliderH.class('slider');
  // Adjust position for column-one
  
  fontColorSliderS = createSlider(0, 100, 50);
  fontColorSliderS.parent('column-one'); // Adjust position for column-one
  fontColorSliderS.class('slider');

  fontColorSliderB = createSlider(0, 100, 50);
  fontColorSliderB.parent('column-one'); // Adjust position for column-one
  fontColorSliderB.class('slider');
  
  fontSelector = createRadio();
  fontSelector.option('Arial');
  fontSelector.option('Times New Roman');
  fontSelector.option('Comic Sans MS');
  fontSelector.selected('Arial');
  fontSelector.parent('column-one');
  fontSelector.id('fontSelector') 
  // Adjust position for column-one
  
  let generateButton = createButton('Make Meme');
  generateButton.parent('column-one'); // Adjust position for column-one
  generateButton.mousePressed(generateMeme);
  generateButton.class('buttons');

  let btn = createButton("Save Image");
  btn.parent('column-one');
  btn.mousePressed(saving);
  btn.class("buttons");
}

function draw() {
  background(60, 50, 10);
  imageMode(CENTER);
  
  if (selectedImage) {
    image(selectedImage, width / 2, height / 2); // Center the image if it's loaded
  }

  textSize(fontSizeSlider.value());
  colorMode(HSB);
  fill(fontColorSliderH.value(), fontColorSliderS.value(), fontColorSliderB.value());
  textAlign(CENTER, CENTER);
  
  let selectedFont = fontSelector.value();
  textFont(selectedFont);
  
  text(topTextInput.value(), width / 2, 50);
  text(bottomTextInput.value(), width / 2, height - 50);
}

function generateMeme() {
  // Add code to save the meme with the added text
  // You can use libraries like html2canvas or p5.dom to save the canvas with text
}

function changeImage() {
  selectedImage = loadImage(imageSelector.value()); // Assign the selected image to the global variable
}
