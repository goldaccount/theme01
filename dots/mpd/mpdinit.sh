#!/bin/zsh
killall mpd && \ 
	touch $HOME/.config/mpd/socket && \
		mpd
