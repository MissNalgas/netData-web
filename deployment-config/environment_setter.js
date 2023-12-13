const fs = require("fs").promises;
const ENV_VARS = [
	"DATABASE_USER",
	"DATABASE_HOST",
	"DATABASE_NAME",
	"DATABASE_PORT",
	"DATABASE_PASSWORD",
	"SERVER_APP_PORT",
	"NODE_ENV",
	"REDIS_URL",
	"SECRET_PASSWORD",
	"REDIS_HOSTNAME",
	"REDIS_PORT",
	"API_PREFIX",
	"APP_PORT",
	"API_URL",
	"API_URL_IMAGES",
	"VAPID_KEY",
	"NEXT_PUBLIC_API_URL",
];

let contentVariables = "";
for (const varName of ENV_VARS) {
	if (!process.env[varName]) {
		continue;
	}

	contentVariables += `${varName}=${process.env[varName]}\n`;
}

(async () => {
	await fs.writeFile("./.env", contentVariables, "utf8");
	await fs.writeFile("./env.production", contentVariables, "utf8");
})();
