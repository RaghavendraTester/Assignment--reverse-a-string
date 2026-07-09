

let browser="Chrome"

 function checkBrowserVersion(callback){

    setTimeout(() => {
        callback(browser); // Pass browser value to the callback
    }, 2000);

    

 }

 function browserVersion(version){

    console.log("The browsser version of callback is:",version);
    
}
 checkBrowserVersion(browserVersion)

