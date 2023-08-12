#!/bin/zsh
today=".config/backup"$(date +%Y%m%d)".log"
rsync -chiru --log-file=$today .config/a $1 \
	--include-from=includelist
#	--exclude=.config/BraveSoftware* \
#	--exclude=.config/transmission* \
#	--exclude=.config/Microsoft* \
#	--exclude=*Analytics* \
#	--exclude=*GIMP*
