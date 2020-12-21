window.onload=function(){

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

    // referencje z htmla do motywu

    const body = document.body;
    const theme = localStorage.getItem('theme');

    if(theme){
      body.classList.add(theme);
    }

    document.getElementById('dark').onclick=()=>{
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    };
    
    document.getElementById('light').onclick=()=>{
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    };
};

