import * as reporter from 'cucumber-html-reporter';

const options: reporter.Options = {
    theme: "bootstrap",  // 🔹 Assure-toi que la valeur est bien l'une des 4 proposées
    jsonFile: "report/cucumber_report.json",
    output: "report/cucumber_report.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true
};

// 🔹 Génération du rapport HTML
reporter.generate(options);
