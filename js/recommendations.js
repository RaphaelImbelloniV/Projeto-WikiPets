document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('recommended-posts-container');
    if (!container) return; 

    const currentPageUrl = window.location.pathname;
    const filteredPosts = allPosts.filter(post => post.url !== currentPageUrl);
    const recommendedPosts = filteredPosts.sort(() => 0.5 - Math.random()).slice(0, 3);

    if (recommendedPosts.length === 0) {
        const section = document.querySelector('.recommended-posts-section');
        if (section) section.style.display = 'none';
        return;
    }

    recommendedPosts.forEach(post => {
        const postCard = document.createElement('a');
        postCard.href = post.url;
        postCard.className = 'post-card';

        postCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="post-card-img">
            <div class="post-card-content">
                <h3 class="post-card-title">${post.title}</h3>
                <p class="post-card-description">${post.description}</p>
            </div>
        `;
        container.appendChild(postCard);
    });
});