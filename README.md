# cv2

This project requires node:16.

You can run commands within docker to ensure proper permissions and node version, e.g.:

```bash
docker run -it --rm -p 8080:8080 -v $(pwd):/workdir node:16 bash -c "usermod -u $(id -u) node && groupmod -g $(id -g) node && su - node -c \"cd /workdir && npm install\""
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
