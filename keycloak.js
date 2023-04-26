const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'globex',
  clientId: 'globex',
  sslRequired: 'external',
  publicClient: true,
});

keycloak.init().then(function(authenticated) {
  alert(authenticated ? 'Authenticated Successfully' : 'Authentication Failure');
}).catch(function() {
  alert('Keycloak Failed to Initialize');
});