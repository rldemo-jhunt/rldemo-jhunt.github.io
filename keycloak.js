var keycloak = new Keycloak("https://rldemo-jhunt.github.io/keycloak.json");

function login() {
  keycloak.init({ onLoad: 'login-required' })
    .then(function(authenticated) {
      console.log(authenticated ? 'Authenticated' : 'Not authenticated');
    })
    .catch(function() {
      console.error('Failed to initialize');
    });
}

function logout() {  
  keycloak.logout({ redirectUri : 'http://localhost:8080/' })
    .then((success) => {
      console.log("--> log: logout success ", success );
    })
    .catch((error) => {
      console.error("--> log: logout error ", error );
    });
}