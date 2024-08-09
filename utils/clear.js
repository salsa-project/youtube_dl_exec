const fs = require('fs').promises;
const path = require('path');

const clearDownloads = async () => {
  const downloadsDir = path.join(__dirname, '../downloads');

  try {
    const files = await fs.readdir(downloadsDir);
    const deletePromises = files.map(file => fs.unlink(path.join(downloadsDir, file)));
    await Promise.all(deletePromises);
    console.log('Downloads folder cleared.');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('Downloads folder does not exist.');
    } else {
      console.error('Error clearing downloads folder:', error);
    }
  }
};

clearDownloads();
