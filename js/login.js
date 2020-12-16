window.onload=function(){
    
    // to jest po to zeby wyskakiwaly te dymki po najechaniu na znaki zapytania
    $('[data-toggle="popover"]').popover()


//                                   REGISTER


    //Definiujemy array zeby trzymac uzytkownikow 
    var userArray = [];

    //On first load, skip this step (null check)
    //But when returning to the main page after adding users, get all the added users
    //out of the array passed between the pages and into the working userArray
    if(JSON.parse(sessionStorage.getItem('passingArray')) != null){
        for(i=0;i<JSON.parse(sessionStorage.getItem('passingArray')).length;i++){
            userArray.push(JSON.parse(sessionStorage.getItem('passingArray'))[i]);
        };
    };
    
    //log listy uzytkownikow (debug)
    console.log(userArray);

    //Weryfikacja nowych uzytkownikow
    document.getElementById('registerBtn').onclick = function(){verifyNew()};
    
    function verifyNew(){
        var un = document.getElementById('newUsername').value;

        //sprawdza po kolei każdą nazwę użytkownika z arraya
        //jeżeli znajdzie match, czyści input i daje komunikat w placeholderze że użytkownik istnieje
        if(userArray.length>0){
            for(i=0; i<userArray.length; i++){
                if(un == userArray[i].un){
                    document.getElementById("newUsername").placeholder ="Podana nazwa użytkownika już istnieje";
                    document.getElementById('newUsername').value = "";
                    break;
                };
            };
            if(i==userArray.length){
                verifyEmail();
            };
        }else{
            verifyEmail();
        };
    };

//         EMAIL 
//to samo co w verifyNew tylko z emailem

    function verifyEmail(){

        var em =document.getElementById('newEmail').value;

        if(userArray.length>0){
            for(i=0; i<userArray.length; i++){
                if(em == userArray[i].em){
                    document.getElementById("newEmail").placeholder ="Podany adres email już istnieje";
                    document.getElementById('newEmail').value = "";
                    break;
                };
            };
            if(i==userArray.length){
                verifySecure();
            };
        }else{
            verifySecure();
        };
    }



//       HASLO

    function verifySecure(){

        var pw = document.getElementById('newPassword').value;

        //sprawdza czy haslo ma 8 znakow
        if(pw.length>=8){
            addUser();
        }else{
            document.getElementById("newPassword").placeholder ="Hasło musi posiadać przynajmniej 8 znaków";
            document.getElementById('newPassword').value = "";
        };
    };

//          DODANIE UZYTKOWNIKA

    function addUser(){
        
        var newUser = {
            un: document.getElementById('newUsername').value,
            pw: document.getElementById('newPassword').value,
            em: document.getElementById('newEmail').value,
        };

        //dodaj użytkownika do arraya, wyrzucenie danych z arraya tymczasowego do głównego i czyszczenie inputów
        userArray.push(newUser);
        sessionStorage.setItem('passingArray', JSON.stringify(userArray));
        document.getElementById('newUsername').value = "";
        document.getElementById('newPassword').value = "";
        document.getElementById('newEmail').value = "";
        location.reload();

        alert("Rejestracja zakończyła się powodzeniem!");
    };


//                                  LOGIN 

    document.getElementById('loginBtn').onclick = function (){authenticate()};

    // weryfikacja danych logowania
    function authenticate(){

        var un = document.getElementById('inputUsername').value;
        var pw = document.getElementById('inputPassword').value;

    // sprawdza czy uzytkownik dodany do userArray
    // jezeli nie przechodzi do else
    // jezeli przelecialo przez caly array i nie znalazlo kombinacji
    // username-password wzywa funkcje troubleshoot
        if(userArray.length>0){
            for(i=0; i<userArray.length; i++){
                if((un == userArray[i].un) && (pw == userArray[i].pw)){
                    
                    // daję to bo mam już dość próbowania wyciągania danych z passingArraya w account.html
                    // może nie jest to najlepiej zoptymalizowane ale jest 3:20 we wtorek i nic lepszego nie wymyślę
                    sessionStorage.setItem('loggedInUn', un);
                    sessionStorage.setItem('loggedInPw', pw);
                    sessionStorage.setItem('loggedInEm', userArray[i].em);
                    
                    // czyszczenie inputów w sumie nie wiem po co
                    document.getElementById('inputUsername').value = "";
                    document.getElementById('inputPassword').value = "";
                    
                    // przekierowanie na account.html
                    location.replace("account.html");
                    break;
                }
                if(i==userArray.length-1 || userArray.length==0){
                    console.log('working')
                    troubleshoot(un, pw);
                }
            }
        }else{// jezeli nie ma uzytkownika w userArray
            alert("Nie znaleziono takiego użytkownika. Prosimy najpierw się zarejestrować.");
            document.getElementById('inputUsername').value = "";
            document.getElementById('inputPassword').value = "";
        }

    };
    // koniec authenticate

    // username sie zgadza haslo nie - czysci input z hasla daje alert
    // jezeli username sie nie zgadza czysci oba inputy, daje alerta
    function troubleshoot(un, pw){
            for(j=0; j<userArray.length; j++){
                if((un == userArray[j].un) && (pw != userArray[j].pw)){
                    alert("Nieprawidłowe hasło.");
                    document.getElementById('inputPassword').value = "";
                    break;
                };
                if(j==userArray.length-1 || userArray.length==0){
                    alert("Nie znaleziono takiego użytkownika. Prosimy najpierw się zarejestrować.");
                    document.getElementById('inputUsername').value = "";
                    document.getElementById('inputPassword').value = "";
                };
            };
    };
    // koniec troubleshoot
};
// koniec window.onload=function


                        //  TO DO:
                        
                        // -moze to na localStorage przerobic -- moze na przycisk zapamiętaj mnie albo coś
           
                        // remember me przycisk jak zaznaczony to zamiast session storage dajemy local -- TO SAMO CO JEST WYZEJ Z LOCAL -- MOZE
                    
                        // -uporzadkowac ten jebany kod tu w htmlu i w cssie(!!!!!)

                        // jakos lepiej dac ten array do session storage -- ???