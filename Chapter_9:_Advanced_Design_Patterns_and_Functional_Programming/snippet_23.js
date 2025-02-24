const defaults = { theme: "light", notifications: true, version: "1.0.0" };
return { ...defaults, ...options };
}
const userSettings = createSettings({ theme: "dark" });
console.log("User Settings:", userSettings);