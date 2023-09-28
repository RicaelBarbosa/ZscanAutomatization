const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vd7986',
  e2e: {
    setupNodeEvents(on, config) {
     console.log("te amo")
    },
  },
});
