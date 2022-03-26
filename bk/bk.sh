#!/bin/zsh
today="$HOME/.config/backup"$(date +%Y%m%d)".log"
target="$HOME/gitthings/theme01/dots"
rsync -chiru --log-file=$today $HOME/.config/polybar $target
rsync -chiru --log-file=$today $HOME/.config/bspwm $target 
rsync -chiru --log-file=$today $HOME/.config/sxhkd $target 
rsync -chiru --log-file=$today $HOME/.config/kitty $target
rsync -chiru --log-file=$today $HOME/.config/ncmpcpp $target 
rsync -chiru --log-file=$today $HOME/.config/colors $target 
rsync -chiru --log-file=$today $HOME/.config/nvim $target 
rsync -chiru --log-file=$today $HOME/.config/mpd/mpd.conf $target/mpd 


