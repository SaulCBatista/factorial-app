build:
	docker build -t factorial-app .

volume:
	docker volume create factorial-data

run:
	docker run -it --rm -v factorial-data:/app/results factorial-app $(n)

show-results:
	docker run --rm -v factorial-data:/app/results alpine cat /app/results/output.txt

