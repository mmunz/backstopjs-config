// don't use the config options id, viewports, scenarios and parh here.
// Those are dynamically set in the backstop.js script.
module.exports = {
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "report": ["browser"],
    "engine": "puppeteer",
    "engineOptions": {
        "ignoreHTTPSErrors": true,
        "args": [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--enable-features=NetworkService",
            "--ignore-certificate-errors"
        ]
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": true,
    "debugWindow": false,
};
