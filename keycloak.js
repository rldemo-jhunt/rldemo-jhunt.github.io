var keycloak = new Keycloak("https://rldemo-jhunt.github.io/keycloak.json");

function login() {
  keycloak.init({ onLoad: 'login-required' }).then(function(authenticated) {
    alert(authenticated ? 'authenticated' : 'not authenticated');
  }).catch(function() {
    alert('failed to initialize');
  });
}

function logout() {  
    keycloak.logout();
}

function callback() {
  keycloak.callback();
}
