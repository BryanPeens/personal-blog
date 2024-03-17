console.log(localStorage);

const backButton = document.querySelector('#back');

backButton.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  location.href = "index.html";
});
