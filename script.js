const mainMenu = document.querySelector( '.navbar' );
window.addEventListener( 'scroll', ()=> {
    if( window.scrollY > 100 ){
        mainMenu.classList.add( 'slidedown' );
    }else{
        mainMenu.classList.remove( 'slidedown' );
    }
} );

 function openModal(role) {
    document.getElementById("roleType").value = role;
    document.getElementById("registerModalLabel").innerText = `Register as ${role}`;
    var myModal = new bootstrap.Modal(document.getElementById('registerModal'));
    myModal.show();
  }
  
  const mockup = document.querySelector('.phone-mockup');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        mockup.classList.add('show');
      }
    });
  });

  observer.observe(mockup);
