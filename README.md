# vensrepo
vensrepo for Menukart Project

1. To clone and use react as is
git clone https://github.com/venkatchowdhary/vensrepo.git
cd TestTracker
npm install
npm start

2. Steps to create a new react project without react CLI
git clone https://github.com/venkatchowdhary/vensrepo.git
mkdir TestTracker
cd TestTracker
npm init --y      -- To initialize the node project, creates package.json
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin @babel/core babel-loader @babel/preset-env @babel/preset-react

touch webpack.config.js
mkdir src
cd src
touch index.js
touch index.html

Copy conetent from the project to respective files, webpack.config.js, index.js, index.html

Modify package.json -- Add scripts as shown in project package.json to start webapck-dev-server
Then npm start

3. Push project to github
 touch .gitignore                     -- If there is no such file exists in the project
 Add node_modules/ to .gitignore      -- To ignored by git
 git status
 git add .
 git commit -m "Sample react project without using react CLI"
 git push
