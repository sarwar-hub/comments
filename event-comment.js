// Commenting system by addEventListener


 //Set addEventListener to an element
document.getElementById('sendButton').addEventListener('click', function(){
    // Get the input field
    let userName = document.getElementById('userName');
    let commentText = document.getElementById('commentText');
    // Get input field values
    let userNameValue = userName.value;
    let commentTextValue = commentText.value;

    // Get comment container
    let commentContainer = document.getElementById('comments');

    // Create element to set the comment value
    let user = document.createElement('h3');
    let comment = document.createElement('p');
    // Set value to the created element
    user.innerText = userNameValue;
    comment.innerText = commentTextValue;

    // Append the element to comment container
    commentContainer.appendChild(user);
    commentContainer.appendChild(comment);

    // Clear input fields
    userName.value = '';
    commentText.value = '';
});