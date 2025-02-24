return {
getSecret() {
return secret;
},
setSecret(newSecret) {
secret = newSecret;
}
};
}
const secretHolder = createSecretHolder("mySecret");
console.log(secretHolder.getSecret()); // Output: mySecret
secretHolder.setSecret("newSecret");
console.log(secretHolder.getSecret()); // Output: newSecret