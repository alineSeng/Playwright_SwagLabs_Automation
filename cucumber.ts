export default {
    default: {
      require: ["ts-node/register", "test/StepsForTests/*.ts"], // Charger TypeScript + steps
      format: ["progress-bar", "json:reports/cucumber-report.json"],
      paths: ["features/*.feature"], // Charger les fichiers .feature
      publishQuiet: true,
    },
  };
  