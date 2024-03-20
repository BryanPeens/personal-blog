const backButton = document.querySelector('#back');

const posts = document.querySelector('#posts');

function createObject(){
  // Check if "postArray" exists in localStorage
  if(localStorage.getItem("postArray")){
    // Get the JSON string from localStorage and parse it into a JavaScript object
    let blogPostArray = JSON.parse(localStorage.getItem("postArray"));

    // Assuming there's only one blog post in the array
    blogPostArray.forEach((element, index) => {

      const section = document.createElement('section');
      section.setAttribute('id',`blog-container-${index}`);
      section.setAttribute('class',`post-container`);
      const h2 = document.createElement('h2');
      h2.setAttribute('id',`title-${index}`);
      const p = document.createElement('p');
      p.setAttribute('id',`content-${index}`);
      const h4 = document.createElement('h4');
      h4.setAttribute('id',`username-${index}`);

      section.appendChild(h2);
      section.appendChild(p);
      section.appendChild(h4);

      h2.textContent = element.title;
      p.textContent = element.content;
      h4.textContent = "Created by: " + element.username;
  
      posts.appendChild(section);
    });
  }
}

createObject();

backButton.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Navigate to the index.html page
  window.location.href = "index.html";
});
