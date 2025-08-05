from node:latest 
workdir /app
copy package.json ./
run npm install
copy ..
expose 6000
cmd ["npm","start"]

