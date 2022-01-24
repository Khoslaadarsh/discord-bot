// OTM1MDYyOTQyNTQwNTI5Njc0.Ye5LOg.

// OTM1MDYyOTQyNTQwNTI5Njc0.Ye5LOg.LnpggP6hLy9bI58No8q_4oCExgI


// OTM1MDYyOTQyNTQwNTI5Njc0.Ye5LOg.LnpggP6hLy9bI58No8q_4oCExgI




// const Discord = require("discord.js");
const Discord = require("discord.js");
require("dotenv").config();
// const Express = require("express");


const TOKEN = "OTM1MDYyOTQyNTQwNTI5Njc0.Ye5LOg.LnpggP6hLy9bI58No8q_4oCExgI";

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello World!");
    }
})

client.login(process.env.TOKEN);

