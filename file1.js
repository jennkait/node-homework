function favoriteNumberGenerator(){
    return new Promise((resolve,reject) => {
        console.log ("Hmm, now thinking...")
        setTimeout (_ => {
            console.log("Got It")
            return resolve (4);
        }, 3000);
    })
}

module.exports = favoriteNumberGenerator;