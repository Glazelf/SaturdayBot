const cron = require("cron");
const timezone = 'cest';
// const saturdayTime = '00 00 18 * * 6'; // 6pm every saturday
const saturdayTime = '00 2 4 * * *'; // testing time
const fs = require("fs");
const config = require('./config.json');
const Twitter = require('twitter-lite');
const client = new Twitter(config);

let filePath = './assets/saturdayimage.png';
let saturdayimg = fs.readFileSync(filePath);

console.log("Awaiting cronjob...");

// Send Nintendo direct prediction
new cron.CronJob(saturdayTime, async () => {
    tweet(saturdayimg);
}, timezone = timezone, start = true);

// Tweet function
function tweet(saturdayimg) {

    // Set body to an object
    let postBody = {
        'media_data': saturdayimg
    };

    // Tweet
    client.post('statuses/update', postBody).catch(console.error).then(result => {
        console.log(result);
    });
};