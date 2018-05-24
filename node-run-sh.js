const runBash = () => {
  var spawn = require('child_process').spawn,
    deploy = spawn('sh', [bashPath], {
    detached: true
  });
  deploy.unref()
}

runBash('./myBashFile.sh')
