//Convertire la seguente funzione basata su callback in una funzione basata su Promise

function callback_BasedFunction(arg1, arg2, callback) {
    setTimeout(() => {
        const result = arg1 + arg2;
        if (result % 2 !== 0) {
            callback(null, result);
        } else {
            callback(new Error('Result is not odd!'), null);
        }
    }, 1000);
}


function promise(arg1, arg2) {
    return new Promise((resolve, reject) => {
        const result = arg1 + arg2;
        if (result & 2 !== 0) {
            resolve("okay")
        }
        else {
            reject("result is not odd!")
        }

    }).then(() => {
        console.log("okay")
    }).catch(() => {
        console.log("result is not odd!")
    })
}

promise()

// ho creato una funzione con arg1 e arg2 come parametri, poi ho impostato la promise,
//ho cretato la costante result, e subito dopo dato le condizioni per i costrutti if else 
//impostati resolve e catch ho dato loro i then e catch per ottnere i risultati, per poi eseguire la funzione