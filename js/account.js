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
  // koniec account.js

  // theme.js + checkLogIn bo nie można mieć >2 window.onload=function() w jednym htmlu

  // referencje z htmla do motywu

  const body = document.body;
  const theme = localStorage.getItem('theme');
  
  // jezeli w localStorage jest zchacheowany theme, zmien klase body
  if(theme){
    document.body.classList.add(theme);
  }

  // przyciski podmieniaja klase body i zapisuja wybor do local storage
  document.getElementById('dark').onclick=()=>{
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  };
          
  document.getElementById('light').onclick=()=>{
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  };
  
  // sprawdza czy jest przycisk do konta bo inaczej bedzie wywyalal error do consoli
  if( document.getElementById('accLink')){

    // po kliknieciu na "konto" w navbarze przywołuje funkcję checkLogIn
    document.getElementById('accLink').addEventListener("click", function (){

      // funkcja sprawdza czy w session storage coś jest, jeżeli tak przekierowuje na account.html
      // else href=login.html
      if(sessionStorage.getItem('loggedInUn') != null){
        document.getElementById('accLink').href="account.html"
      }else{
        document.getElementById('accLink').href="login.html"
      }
    });
  };
  // koniec theme + checkLogIn
  
};
// koniec window.onload=function