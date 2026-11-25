let failedModule = Math.floor(Math.random() * 3);

function loadProfile() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (failedModule === 0) {
                reject("Profile Failed");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (failedModule === 1) {
                reject("Posts Failed");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (failedModule === 2) {
                reject("Messages Failed");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    let startTime = Date.now();

    let results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    let endTime = Date.now();

    console.log("Dashboard Loading Results:");

    results.forEach(function(result, index) {
        let modules = ["Profile", "Posts", "Messages"];

        if (result.status === "fulfilled") {
            console.log(modules[index] + ": Success - " + result.value);
        } else {
            console.log(modules[index] + ": Failed - " + result.reason);
        }
    });

    console.log("Total time taken: " + (endTime - startTime) + " ms");
}

loadDashboard();