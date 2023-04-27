var keycloak = new Keycloak("https://rldemo-jhunt.github.io/keycloak.json");

function login() {
  keycloak.init({ onLoad: 'login-required' }).then(function(authenticated) {
    alert(authenticated ? 'authenticated' : 'not authenticated');
  }).catch(function() {
    alert('failed to initialize');
  });
}

function logout() {
  //keycloak.logout('http://localhost:8080/auth/realms/globex/protocol/openid-connect/logout?redirect_uri=encodedRedirectUri')
  //alert("Logged Out");
}

function callback() {
  //keycloak.callback()
}
