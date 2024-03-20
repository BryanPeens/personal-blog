// Select the back button element
const backButton = document.querySelector('#back');

// Select the posts container element
const posts = document.querySelector('#posts');

// Function to create blog post elements
function createObject(){
  // Check if "postArray" exists in localStorage
  if(localStorage.getItem("postArray")){
    // Get the JSON string from localStorage and parse it into a JavaScript object
    let blogPostArray = JSON.parse(localStorage.getItem("postArray"));

    // Loop through each blog post object in the array
    blogPostArray.forEach((element, index) => {

      // Create a new section element for each blog post
      const section = document.createElement('section');
      // Set the section's id attribute dynamically
      section.setAttribute('id',`blog-container-${index}`);
      // Set the section's class attribute
      section.setAttribute('class',`post-container`);
      // Create h2, p, and h4 elements for title, content, and username respectively
      const h2 = document.createElement('h2');
      h2.setAttribute('id',`title-${index}`);
      const p = document.createElement('p');
      p.setAttribute('id',`content-${index}`);
      const h4 = document.createElement('h4');
      h4.setAttribute('id',`username-${index}`);

      // Append title, content, and username elements to the section
      section.appendChild(h2);
      section.appendChild(p);
      section.appendChild(h4);

      // Set text content for title, content, and username elements
      h2.textContent = element.title;
      p.textContent = element.content;
      h4.textContent = "Created by: " + element.username;
  
      // Append the section to the posts container
      posts.appendChild(section);
    });
  }
}

// Call the createObject function to populate posts on page load
createObject();

// Event listener for back button click
backButton.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Navigate to the index.html page
  window.location.href = "index.html";
});
