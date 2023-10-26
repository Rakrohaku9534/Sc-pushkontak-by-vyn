const cron = require('node-cron');
const { exec } = require('child_process');

cron.schedule('0 0 * * *', () => {
  console.log('Running npm restart...');
  exec('npm restart', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
});
