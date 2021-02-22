build:
	npm i
lint:
	npm run pretest
docker:
	docker build -t url-shortener .
	docker run -p 80:80 url-shortener