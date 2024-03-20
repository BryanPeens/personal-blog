document.addEventListener('DOMContentLoaded', function() {
    // Get the checkbox element
    var checkbox = document.getElementById('checkbox-slider');

    // Add event listener for 'click' event
    checkbox.addEventListener('click', function() {
        if (this.checked) { 
            console.log('Checkbox is checked');
            document.body.setAttribute("class", "dark");
        } else {
            console.log('Checkbox is not checked');
            document.body.removeAttribute("class");
        }
    });
});
