var keycloak = new Keycloak('./keycloak.json');

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
  keycloak.logout()
    .then((success) => {
      console.log("--> log: logout success ", success );
      window.location.href = "login.html"; // Redirect to the login page after logout
    })
    .catch((error) => {
      console.error("--> log: logout error ", error );
    });
}