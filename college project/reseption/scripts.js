document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Contact form submitted!');
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login form submitted!');
});
function loadContent(page){
    const content=document.getElementById('Question-form');
    switch(page){
        case 'Medicine & Checkup':
            content.innerHTML=`
            <section id="Medicine'>
                <h1>Welcome to our Medical Store</h1>
                <p>Order your Medicine or Get Checkup</p>
            </Selection>
            `;
            break

    }
}