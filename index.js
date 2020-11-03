var fetch = require('node-fetch')

var config = require("./config.json")
var cron = require('node-cron');
const Telegraf = require('telegraf');
var bot = new Telegraf(config.telegram_token)
// bot.telegram.sendMessage(config.chat_id, "👍")

var coda = null;
async function run(force_notify) {
	var result = await //<-- INCOLLA PRIMA DEGLI SLASH
	result = await result.json()
	coda = Number(result.ticket.usersInLineAheadOfYou)
	if (force_notify || coda < config.alert_at)
		bot.telegram.sendMessage(config.chat_id, "Utenti in coda: " + coda)
	console.log("Utenti in coda: " + coda)
}
cron.schedule('0 * * * *', () => {
	run(true)
})
cron.schedule('* * * * *', () => {
	run()
})
run(true)