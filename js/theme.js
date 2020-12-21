window.onload=function theme(){
    // referencje z htmla do motywu

    const body = document.body;
    const theme = localStorage.getItem('theme');

    // jezeli w localStorage jest zchacheowany theme, zmien klase body
    if(theme){
        document.body.classList.add(theme);
    }

    //przyciski podmieniaja klase body i zapisuja wybor do local storage
    document.getElementById('dark').onclick=()=>{
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    };
        
    document.getElementById('light').onclick=()=>{
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    };

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
};