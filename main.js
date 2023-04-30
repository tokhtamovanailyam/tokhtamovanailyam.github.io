 const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const message = document.querySelector('#message').value;
  

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);

  form.reset();
  
}
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenu = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

