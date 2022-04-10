#!/bin/zsh
/usr/local/bin/polybar -r -c .config/polybar/config.ini wm &
/usr/local/bin/polybar -r -c .config/polybar/config.ini menu &
polybar -r -c .config/polybar/config.ini music &
polybar -r -c .config/polybar/config.ini info &
polybar -r -c .config/polybar/config.ini clock &
polybar -r -c .config/polybar/config.ini fill1 &
polybar -r -c .config/polybar/config.ini fill2 &
polybar -r -c .config/polybar/config.ini fill3 &
polybar -r -c .config/polybar/config.ini fill4 &
#polybar -r -c .config/polybar/config.ini fill5 &; disown
#polybar -r -c .config/polybar/config.ini fill3 &; disown
