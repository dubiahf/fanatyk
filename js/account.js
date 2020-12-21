window.onload=function(){

  // żeby popovery działały
  $('[data-toggle="popover"]').popover()

  // rzeczy z sessionStorage dajemy w placeholedery inputów
  document.getElementById("disabledUn").placeholder = sessionStorage.getItem('loggedInUn');
  document.getElementById("disabledPw").placeholder = sessionStorage.getItem('loggedInPw');
  document.getElementById("disabledEn").placeholder = sessionStorage.getItem('loggedInEm');

  // funkcja logout czysci session storage    
  document.getElementById('logout').onclick = function (){logout()};

  function logout(){
    sessionStorage.removeItem('loggedInUn');
    sessionStorage.removeItem('loggedInPw');
    sessionStorage.removeItem('loggedInEm');
  };
};