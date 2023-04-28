var keycloak = new Keycloak('./keycloak.json');

function login() {
  keycloak.init({
      onLoad: 'login-required'
    })
    .then(function() {
      document.getElementById("placeHolder1").innerHTML = "<h1>LOGGED IN!</h1>";
      document.getElementById("placeHolder2").innerHTML = 
        "<a href='http://localhost:8080/auth/realms/globex/protocol/openid-connect/logout?redirect_uri=http://localhost:8000'>Logout</a>";
    })
    .catch(function() {
      alert('Failed to initialize');
    });
}

function logout() {  
  keycloak.logout()
    .then((success) => {
      window.location.href = "home.html";
      console.log("--> log: logout success ", success );
    })
    .catch((error) => {
      console.error("--> log: logout error ", error );
    });
}