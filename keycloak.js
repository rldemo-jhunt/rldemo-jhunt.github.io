const keycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'globex',
  clientId: 'globex',
  redirectUri: "https://rldemo-jhunt.github.io/callback.html"
};

var keycloak = new Keycloak(keycloakConfig);

keycloak.init({
  onLoad: 'login-required'
}).success(function () {
  // User is authenticated
}).error(function () {
  // User is not authenticated
});