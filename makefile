build:
	echo "build"
	docker compose build

up:
	echo "アプリケーション起動"
	docker compose up

rm:
	echo "rm"
	docker compose rm $(ctn)