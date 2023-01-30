var args = require('minimist')(process.argv.slice(2));

const scenarios = [];
let siteConfig = {};

if (!args.id) {
    console.error('Error: No --id argument given.')
    process.exit();
}

try {
    config = './sites/' + args.id + '/config.js'
    siteConfig = require(config);
} catch(err) {
    console.error('Could not require config file ' + config);
    process.exit();
}

const viewports = siteConfig.viewports ? siteConfig.viewports : require("./defaults/viewports");
const backstopConfig = siteConfig.backstopConfig ? siteConfig.backstopConfig : require("./defaults/backstopConfig");
const defaultScenario = siteConfig.defaultScenario ? siteConfig.defaultScenario : require("./defaults/scenario");


if(Object.keys(siteConfig.scenarios).length < 1) {
    console.error("Error: No scenarios defined.")
    process.exit();
}

if (args.url) {
    url = args.url;
} else {
    url = siteConfig.url;
}
if (!url) {
    console.error('Error: missing url');
}

if (args.referenceUrl) {
    referenceUrl = args.referenceUrl;
} else {
    referenceUrl = siteConfig.referenceUrl;
}
if (!args.referenceUrl) {
    console.error('Error: missing referenceUrl');
}

siteConfig.scenarios.map(scenario => {
    scenarios.push({
        ...defaultScenario,
        ...{
            ...scenario,
            ...{
                "label": scenario.label || scenario.url + (scenario.clickSelector || ""),
                "url": url ? url + scenario.url : referenceUrl + scenario.url,
                "referenceUrl": referenceUrl + (scenario.referenceUrl || scenario.url)
            }
        }
    });
});

module.exports = {
    ...backstopConfig,
    "id": args.id,
    "viewports": viewports,
    "scenarios": scenarios,
    "paths": {
        "bitmaps_reference": "backstop_data/" + args.id + "/bitmaps_reference",
        "bitmaps_test": "backstop_data/" + args.id + "/bitmaps_test",
        "engine_scripts": "engine_scripts",
        "html_report": "backstop_data/" + args.id + "/html_report",
        "ci_report": "backstop_data/" + args.id + "/ci_report"
    },
};
