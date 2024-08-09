const youtubedl = require('youtube-dl-exec')
const logger = require('progress-estimator')()
const path = require('path');

const {configs} = require('./configs')





let { videoLink } = configs;

(async function(){
  // Ensure the downloads directory exists
  const downloadsDir = path.join(__dirname, 'downloads');
  const promise = youtubedl(videoLink, { output: path.join(downloadsDir, 'video.%(ext)s'), mergeOutputFormat: 'mp4', format: 'bestvideo[ext=mp4][height<=1440]+bestaudio[ext=m4a]/best[ext=mp4][height<=1440]'})
  const result = await logger(promise, `Obtaining ${videoLink}`)
  console.log(result)
})();