document.getElementById('postButton').addEventListener('click', function() {
    const postText = document.getElementById('postText').value;

    if (postText.trim() !== '') {
        const postContainer = document.createElement('div');
        postContainer.className = 'post my-3 p-3';

        const postContent = document.createElement('p');
        postContent.textContent = postText;
        postContainer.appendChild(postContent);

        const likeButton = document.createElement('button');
        likeButton.className = 'btn btn-success me-2';
        likeButton.textContent = 'Curtir';
        likeButton.addEventListener('click', function() {
            if (likeButton.textContent === 'Curtir') {
                likeButton.textContent = 'Curtido';
                likeButton.classList.remove('btn-success');
                likeButton.classList.add('btn-secondary');
            } else {
                likeButton.textContent = 'Curtir';
                likeButton.classList.remove('btn-secondary');
                likeButton.classList.add('btn-success');
            }
        });
        postContainer.appendChild(likeButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger';
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function() {
            postContainer.remove();
        });
        postContainer.appendChild(deleteButton);

        document.getElementById('posts').appendChild(postContainer);
        document.getElementById('postText').value = '';
    }
});
