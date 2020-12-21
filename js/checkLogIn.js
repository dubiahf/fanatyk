function checkLogIn(){

    // po kliknieciu na "konto" w navbarze przywołuje funkcję checkLogIn
    document.getElementById('accLink').onclick = function (){checkLogIn()};


    // funkcja sprawdza czy w session storage coś jest, jeżeli tak przekierowuje na account.html
    // else href=login.html
    function checkLogIn(){
      if(sessionStorage.getItem('loggedInUn') != null){
        document.getElementById('accLink').href="account.html"
      }else{
        document.getElementById('accLink').href="login.html"
      }
    };
};

