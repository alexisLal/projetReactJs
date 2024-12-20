# Requirements

- node.js

# Start project

```sh
# install dependencies
npm i
# start container docker-compose
docker-compose up -d
# start project with development mode
npm run dev
```

### reset all docker containers, images and volums

```sh
docker system prune -a -f --volumes
```
