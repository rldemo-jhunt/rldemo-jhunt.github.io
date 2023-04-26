const keycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'globex',
  clientId: 'globex',
};

var keycloak = new Keycloak(keycloakConfig);

keycloak.init({
  onLoad: 'login-required'
}).success(function () {
  // User is authenticated
}).error(function () {
  // User is not authenticated
});