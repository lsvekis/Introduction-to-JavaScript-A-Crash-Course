const ConfigSingleton = (function() {
let instance;
function createInstance() {
return { apiUrl: "https://api.example.com", timeout: 5000 };
}
return {
getInstance() {
if (!instance) instance = createInstance();
return instance;
}
};
})();
const config1 = ConfigSingleton.getInstance();
const config2 = ConfigSingleton.getInstance();
console.log("Singleton instances same?", config1 === config2);