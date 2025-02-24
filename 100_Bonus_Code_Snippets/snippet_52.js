function createSecretHolder(secret) {
return {
getSecret() { return secret; },
setSecret(newSecret) { secret = newSecret; }
};
}
const secretHolder = createSecretHolder("mySecret");
console.log(secretHolder.getSecret());
secretHolder.setSecret("newSecret");
console.log(secretHolder.getSecret());