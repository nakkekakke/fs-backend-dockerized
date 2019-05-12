# Dockerized backend

Build the image from the Dockerfile, then run with command:

`docker run -p 3001:3001 -d <image_name>`

The running container can then be "curled" with

`curl -i localhost:3001/api/notes/` 
