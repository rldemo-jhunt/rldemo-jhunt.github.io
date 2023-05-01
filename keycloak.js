var keycloak = new Keycloak('./keycloak.json');

//function login() {
  keycloak.init({
      onLoad: 'login-required'
    })
    .then(function(authenticated) {
      console.log(authenticated ? 'Authenticated' : 'Not authenticated');
    })
    .catch(function() {
      console.error('Failed to initialize');
    });
//}

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