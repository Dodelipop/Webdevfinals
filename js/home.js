document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const title = document.getElementById('title');
        if (window.scrollY > 50) {
            title.innerHTML = '<h1>EC</h1>';
        } else {
            title.innerHTML = '<h1>ELYSIAN COUTURE</h1>';
        }
    });
});