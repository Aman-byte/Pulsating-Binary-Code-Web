const background = document.querySelector('#background');

// generate random binary numbers
function generateBinary() {
  let binary = '';
  for (let i = 0; i < 8; i++) {
    binary += Math.floor(Math.random() * 2);
  }
  return binary;
}

// create binary number elements
for (let i = 0; i < (window.innerHeight / 10) * (window.innerWidth / 10); i++) {
  const binaryNumber = document.createElement('div');
  binaryNumber.classList.add('binary');
  binaryNumber.innerText = generateBinary();
  background.appendChild(binaryNumber);
}
