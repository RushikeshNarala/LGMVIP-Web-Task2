from node:latest 

workdir /app    # creating a working folder in docker image so that our total code go under this folder 
copy package.json ./ # copying package.json file to working directory (./ it means /app)
run npm install
copy . .   # copying code files from local to docker .. means source to destination 

expose 6000
cmd ["npm","start"]

