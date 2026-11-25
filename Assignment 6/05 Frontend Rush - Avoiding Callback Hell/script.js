function design(callback) {
    setTimeout(function() {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(function() {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(function() {
        console.log("Test completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(function() {
        console.log("Deploy completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(function() {
        console.log("Celebration completed");
    }, 1000);
}

// Callback Hell
console.log("Callback Hell Started");

design(function() {
    build(function() {
        test(function() {
            deploy(function() {
                celebrate();
            });
        });
    });
});

function wait(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    });
}

async function runPipeline() {
    console.log("Async/Await Started");

    await wait(1000);
    console.log("Design completed");

    await wait(1000);
    console.log("Build completed");

    await wait(1000);
    console.log("Test completed");

    await wait(1000);
    console.log("Deploy completed");

    await wait(1000);
    console.log("Celebration completed");
}

setTimeout(function() {
    runPipeline();
}, 5000);