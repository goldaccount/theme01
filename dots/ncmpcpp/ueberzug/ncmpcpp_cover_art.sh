#!/bin/zsh
# Cover art script for ncmpcpp-ueberzug

# SETTINGS
music_library="/home/nr2/.config/mpd/music"
fallback_image="/home/nr2/.config/ncmpcpp/ueberzug/default.png"
padding_top=5
padding_bottom=3
padding_right=1
max_width=39
reserved_playlist_cols=40
reserved_cols_in_percent="true"
force_square="false"
square_alignment="top"
left_aligned="true"
padding_left=1

# Only set this if the geometries are wrong or ncmpcpp shouts at you to do it.
# Visually select/highlight a character on your terminal, zoom in an image 
# editor and count how many pixels a character's width and height are.
font_height=
font_width=

main() {
    kill_previous_instances >/dev/null 2>&1
    find_cover_image        >/dev/null 2>&1
    display_cover_image     2>/dev/null
    detect_window_resizes   >/dev/null 2>&1
}

# ==== Main functions =========================================================

kill_previous_instances() {
    script_name=$(basename "$0")
    for pid in $(pidof -x "$script_name"); do
        if [ "$pid" != $$ ]; then
            kill -15 "$pid"
        fi 
    done
}

find_cover_image() {
	tempIFS=$IFS
	IFS="\b"
	input=$music_library/`mpc --host="/home/nr2/.config/mpd/socket" --format %file% current` 
	ext=`echo "$input" | sed 's/^.*\.//'`
	if [ "$ext" = "flac" ]; then                                   
    	metaflac --export-picture-to=/tmp/mpd_cover.jpg $input &&  
	    cover_path="/tmp/mpd_cover.jpg" && return
	else
	    ffmpeg -y -i "$input" /tmp/mpd_cover.jpg &&
	    cover_path="/tmp/mpd_cover.jpg" && return
	fi

    # If we still failed to find a cover image, we use the fallback
    if [ -z "$cover_path" ]; then
        cover_path=$fallback_image
    fi
	IFS=$tempIFS
}

display_cover_image() {
	term_x=`kitty +kitten icat --print-window-size | cut -dx -f1`
	term_y=`kitty +kitten icat --print-window-size | cut -dx -f2`
	img_x=`expr ${term_x} / ${max_width}`
	img_y=`expr ${term_y} \* ${max_width} / 1000 - ${padding_bottom} `
	kitty +kitten icat --clear
	kitty +kitten icat --engine magick -z -5 --align left --scale-up --place ${img_x}x${img_y}@${padding_left}x${padding_top} ${cover_path}
	#kitty +kitten icat --align left --scale-up --place 50x50@${padding_left}x${padding_top} ${cover_path}
}

detect_window_resizes() {
    {
#        trap 'display_cover_image' WINCH
#        while :; do sleep .1; done
    } &
}

main
