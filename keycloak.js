const keycloak = new Keycloak("./keycloak.json");

keycloak.init().then(function(authenticated) {
  alert(authenticated ? 'authenticated' : 'not authenticated');
}).catch(function() {
  alert('failed to initialize');
});