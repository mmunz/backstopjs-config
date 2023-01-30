// example config for a project level config

const url = "https://example.ddev.site/";
const referenceUrl = "https://www.example.com/";

// if backstopConfig = null, then the defaults are used.
const backstopConfig = null;
// Use default config, but overwrite paths with custom values
// const backstopConfig = {
//     ...require('../../defaults/backstopConfig'),
//     "paths": {
//         "bitmaps_reference": "backstop_data/test/bitmaps_reference",
//         "bitmaps_test": "backstop_data/test/bitmaps_test",
//         "engine_scripts": "engine_scripts",
//         "html_report": "backstop_data/test/html_report",
//         "ci_report": "backstop_data/test/ci_report"
//     },
// };

const defaultScenario = null;
// const defaultScenario = {
//     ...require('../../defaults/scenario'),
//     "removeSelectors": [".cookie-hint"],
// };


const viewports = null;
// const viewports = [
//     {
//         "label": "phone",
//         "width": 220,
//         "height": 480
//     }
// ]

const scenarios = [
    {"label": "Home", "url": "/" },
    {"label": "about", "url": "/about" },
];

module.exports = {
    url: url,
    referenceUrl: referenceUrl,
    backstopConfig: backstopConfig,
    defaultScenario: defaultScenario,
    viewports: viewports,
    scenarios: scenarios,
}


