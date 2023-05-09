const fs = require('file-system');
const {createClient} = require('contentful')

//Production api
const client = createClient({
space: '4imncg5qweum',
environment: 'master', // defaults to 'master' if not set
accessToken: 'eyxoJk9M8ZMtjluScJLOqLjot45BaapeMq8pFkZZhAc'
});

client.getEntries().then((data) => {

    //console.log('data', data);

    const [siteEntry] = data.items.filter(
        (entry) => entry.sys.contentType.sys.id === "site"
    );
    
    const jsonString = JSON.stringify(siteEntry, null, 2);

    const filePath = "public/data.json";

    fs.writeFile(filePath, jsonString, (err) => {
        if(err) {
            console.error("Failed to save JSON data:", err);
        } else {
            console.log("JSON data saved to file:", filePath);
        }
    });
});
            
