const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const backButton = document.querySelector('#back');

function createObject(){
  // Check if "postArray" exists in localStorage
  if(localStorage.getItem("postArray")){
    // Get the JSON string from localStorage and parse it into a JavaScript object
    let blogPostArray = JSON.parse(localStorage.getItem("postArray"));

    // Assuming there's only one blog post in the array
    let blogPostObject = blogPostArray[0];

    // Populate the elements with retrieved data
    username.textContent = "Created By: " + blogPostObject.username;
    title.textContent = blogPostObject.title;
    content.textContent =blogPostObject.content;
  }
}

createObject();

backButton.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Navigate to the index.html page
  window.location.href = "index.html";
});
