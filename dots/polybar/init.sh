#!/bin/zsh
polybar -r -c .config/polybar/config.ini wm &; disown
polybar -r -c .config/polybar/config.ini menu &; disown
polybar -r -c .config/polybar/config.ini music &; disown
polybar -r -c .config/polybar/config.ini info &; disown
polybar -r -c .config/polybar/config.ini clock &; disown
polybar -r -c .config/polybar/config.ini fill1 &; disown
polybar -r -c .config/polybar/config.ini fill2 &; disown
polybar -r -c .config/polybar/config.ini fill3 &; disown
polybar -r -c .config/polybar/config.ini fill4 &; disown
#polybar -r -c .config/polybar/config.ini fill5 &; disown
#polybar -r -c .config/polybar/config.ini fill3 &; disown


