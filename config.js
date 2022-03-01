module.exports = {
	/* The token of your Discord Bot */
	token: "ODk5ODI0NDgyMDU3ODcxNDAw.YW4Y2g.wNUzsRLNoWzFLPdzbtsgyDuaMqM",
	/* For the support server */
	support: {
		id: "940603363198922803", // The ID of the support server
		logs: "940603368995434508", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: true, // whether the dashboard is enabled or not
		secret: "", // Your discord client secret
		baseURL: "http://localhost:8080", // The base URl of the dashboard
		logs: "", // The channel ID of logs
		port: "8080", // Dashboard port
		expressSessionPassword: "", // Express session password (it can be what you want)
		failureURL: "http:omtecheducation.tk" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "", // The URl of the mongodb database
	prefix: ">", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#FF0000", // The default color for the embeds
		footer: "Om Utilities | Made With 💖" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "330254934563880961", // The ID of the bot's owner
		name: "DogBay#9999" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "", // The webhook auth that you have defined on discordbots.org
		channel: "" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "7a7e9f7e340da9c0322c15061dd7450491e1cfe06eee376c8ebfc1903ec34cd1ab041c863cbcaeaf6f347913c48c29903a1f7925a017e565ad83bda988a2aa2e",
	
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Omcodez1503", // Founder's github account
		donate: "https://dsc.gg/omtecheducationgaming" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "Om Utilities on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "Om Tech Education Gaming : https://dsc.gg/omtecheducationgaming",
			type: "PLAYING"
		
		}
	]
};
