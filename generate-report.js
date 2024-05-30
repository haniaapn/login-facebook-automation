const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: '/Users/haniapn/Documents/login-facebook-automation/.tmp/new',  // Ubah sesuai dengan lokasi file JSON hasil tes Anda
  reportPath: './cucumber-report',
  metadata: {
    browser: {
      name: 'chrome',
      version: '60',
    },
    device: 'MacOS 13.1',
    platform: {
      name: 'macOS',
      version: '13.1',  // Sesuaikan dengan versi macOS Anda
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Facebook login page ' },
      { label: 'Release', value: '0.0.1' },
    ],
  },
});
