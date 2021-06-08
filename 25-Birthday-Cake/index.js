const onMyBirthday = (isFrdSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isFrdSick) {
                resolve(2);
            } else {
                //reject(0)
                reject(new Error('I am sad'))
            }
        }, 2000)

    })
}

console.time("Timer")
onMyBirthday(false)
    .then((result) => {
        console.timeLog("Timer")
        console.log(`I have ${result} cake`);

    })
    .catch((error) => {
        console.timeLog("Timer")
        //console.log(`I have ${result} cake`);
        console.log(error);


    }).finally(() => {
        console.log("Party");

    })