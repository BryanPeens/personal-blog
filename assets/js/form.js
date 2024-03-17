const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  window.blogposts = [] // Initialize new array for post object

  // Trim the values and check if they are not empty
  let username = usernameInput.value.trim();
  let title = titleInput.value.trim();
  let content = contentInput.value.trim();

  if (!username || !title || !content) {
    // If any field is empty, alert the user and stop
    alert("Please fill in all fields.");
    return;
  }

  // Create a blog post object
  let blogPostObject = {
    username: username,
    title: title,
    content: content
  };
  window.blogposts.push(blogPostObject); // Add the blog object to the array
  console.log(window.blogposts); // Log the array of blog posts
  // Convert the object to JSON and store it in local storage
  localStorage.setItem('postArray', JSON.stringify(window.blogposts));

  console.log(localStorage);

  location.href = "blog.html";

  // Clear the input fields
  usernameInput.value = '';
  titleInput.value = '';
  contentInput.value = '';
  
});
