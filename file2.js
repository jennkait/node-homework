var favoriteNumberGenerator = require('./file1');

function waitForReturnAndPrint() {
     favoriteNumberGenerator().then(fav => {
          console.log("Favorite number is..." + fav)
     }) .catch(err => {
          console.error("Error occured", err)
     })
}

waitForReturnAndPrint();