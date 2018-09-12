const development = {
    SNYK_DASHBOARD_URL: "https://app.snyk.io/org/pivotal-demo/",
    PCF_APPS_MGR_URL: "https://console.run.pivotal.io/",
    FAKE_BANK_BFF_URL: "http://localhost:3001/api/account/"
};

const production = {
    SNYK_DASHBOARD_URL: "https://app.snyk.io/org/pivotal-demo/",
    PCF_APPS_MGR_URL: "https://console.run.pivotal.io/",
    FAKE_BANK_BFF_URL: process.env.FAKE_BANK_BFF_URL
};

const config = process.env.REACT_APP_STAGE === 'production'
    ? production
    : development;

export default {
    ...config
};