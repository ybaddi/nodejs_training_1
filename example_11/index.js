var redis = require("redis");

var client = redis.createClient();


client.on("error", (err)=>{
    console.log("redis server error: " + err);
});

client.connect().then(()=>{
    console.log("connected");
    client.set("key", "value").then(()=>{
        console.log("data set");
        client.get("key", console.log).then((data => {
            console.log("data is " + data); 
        }))
    })

})

