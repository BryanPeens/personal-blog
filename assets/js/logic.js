document.addEventListener('DOMContentLoaded', function() {

    const postContainer = document.querySelector('#post-container');
    const lineDiv = document.querySelector('#line-div');
    const usernameField = document.querySelector('#username');
    const titleField = document.querySelector('#title');
    const contentField = document.querySelector('#content');

    // Get the checkbox element
    var checkbox = document.getElementById('checkbox-slider');

    // Add event listener for 'click' event
    checkbox.addEventListener('click', function() {
        if (this.checked) {
            console.log('Checkbox is checked');
            document.body.style.backgroundColor = "black";
            // postContainer.color = "white";
            // lineDiv.style.borderColor = "white";
            // titleField.color = "white";
            // contentField.color = "white";
            // usernameField.color = "white";
            // postContainer.borderColor = "white";
        } else {
            console.log('Checkbox is not checked');
            document.body.style.backgroundColor = "white";
            // postContainer.style.color = "black"; // Should be the text color
            // lineDiv.style.borderColor = "black";
            // titleField.style.color = "black";
            // contentField.style.color = "black";
            // usernameField.style.color = "black";
            // postContainer.style.borderColor = "black";
        }
    });
});
