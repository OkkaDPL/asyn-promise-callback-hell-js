const form = document.querySelector("form[name='iniForm']");
const data = ["1.jpg", "2.jpg", "3.jpg"];
// Processing get data
form.onsubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const userName = document.getElementById('userName').value;

    const getToken = doLogin(userName);
    getToken.then(result => {
        const { token } = result;
        console.log("your token => ", token);
        const getApiKey = generateApi(token);
        getApiKey.then(result => {
            const { apiKey } = result;
            console.log("apiKey => ", apiKey);
            const getData = getPictures(apiKey);
            getData.then(result => {
                const { pic } = result;
                console.log("your data => ", pic);
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });
}
// End get data

// Generate data
const doLogin = (userName) => {
    return new Promise((resolve, reject) => {
        if (userName === "okka") {
            console.log("On generate token...");
            setTimeout(() => {
                const token = ~~(Math.random() * 12345678);
                resolve({ token });
            }, 1000);
        } else {
            reject("Username not found.");
        }
    });
}

const generateApi = (token) => {
    return new Promise((resolve, reject) => {
        if (token) {
            console.log("Processing apiKey...");
            setTimeout(() => {
                const apiKey = "xxxKey454523";
                resolve({ apiKey });
            }, 2000);
        } else {
            reject("Can't reach apiKey, no token here.. ");
        }
    })
}

const getPictures = (apiKey) => {
    return new Promise((resolve, reject) => {
        if (apiKey) {
            console.log("Processing data...");
            setTimeout(() => {
                resolve({ pic: data });
            }, 3000);
        } else {
            reject("Can't reach data, no apiKey.")
        }
    })
}
// End generate data