const fs = require('path');
const fse = require('fs-extra');
const path = require('path');
const rootDir = path.join(__dirname);
const targetDir = path.join(rootDir, "public");

const assetDir = path.join(rootDir, "assets");
const cssDir = path.join(rootDir, "css");
const jsDir = path.join(rootDir, "js");
const pluginDir = path.join(rootDir, "plugin");
const chapterDir= path.join(rootDir, "chapter");
const index = path.join(rootDir, 'index.html');
const srcSet = [assetDir, cssDir, jsDir, pluginDir, chapterDir, index];

srcSet.forEach((dir)=>{
  fse.copy(dir, path.join(targetDir, path.basename(dir)));
});


