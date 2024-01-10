const fs = require("fs").promises;
const ENV_VARS = ["API_URL", "API_URL_IMAGES", "VAPID_KEY", "API_PREFIX"];

let contentVariables = "";
for (const varName of ENV_VARS) {
	if (!process.env[varName]) {
		continue;
	}

	contentVariables += `${varName}=${process.env[varName]}\n`;
}

(async () => {
	await fs.writeFile("./.env", contentVariables, "utf8");
})();
