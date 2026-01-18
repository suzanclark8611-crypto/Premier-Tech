const axios = require('axios');

async function checkGoogleIndexing() {
    const siteUrl = "https://premier-tech.onrender.com";
    console.log(`Checking status for ${siteUrl}...`);

    try {
        // We use a search check logic here
        const response = await axios.get(`https://www.google.com/search?q=site:${siteUrl}`);
        
        if (response.data.includes("did not match any documents") || response.data.includes("not found")) {
            console.log("Not indexed yet. Keep waiting!");
        } else {
            console.log("MATCH FOUND! Premier Tech is on Google!");
            sendWhatsAppAlert();
        }
    } catch (error) {
        console.log("Error checking Google. Might be blocked by bot detection.");
    }
}

function sendWhatsAppAlert() {
    // This connects to your WhatsApp API or Remote Control Server
    const message = "🚀 GREAT NEWS: Premier Tech is now LIVE on Google Search!";
    const waLink = `https://wa.me/233544590624?text=${encodeURIComponent(message)}`;
    console.log("Click here to see: " + waLink);
    // In a real Cron Job, you'd use an API call to actually send the text.
}

checkGoogleIndexing();
