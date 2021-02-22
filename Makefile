build:
	npm i
lint:
	npm run pretest
docker:
	docker build -t url-shortener .
	docker push gquiroa/url-shortener:master
	docker run -d -p 80:80 gquiroa/url-shortener:{{ circle_branch }}
kubernetes-deploy:
	kubectl run url-shortener \
		--generator=run-pod/v1 \
		--image=gquiroa/url-shortener:master \
		--port=8081 \
		--labels app=url-shortener
	kubectl create deployment url-shortener --image=gquiroa/url-shortener:master
	export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
	kubectl expose deployment/url-shortener --type="NodePort" --port=80
	kubectl port-forward url-shortener 8081:80