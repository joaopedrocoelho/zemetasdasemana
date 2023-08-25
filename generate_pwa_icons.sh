#!/bin/zsh -e

icon=./public/app_icon.svg
bg=#ffffff

out_dir=./public/app-icon
manifest=./public/manifest.json
icons_path_base=images/app-icon
index=./pwa_icons_meta.html

npx pwa-asset-generator $icon $out_dir --manifest $manifest --opaque false --icon-only --favicon --type png --path-override $icons_path_base --index $index
npx pwa-asset-generator $icon $out_dir --manifest $manifest --background $bg --icon-only --path-override $icons_path_base --index $index

npx pwa-asset-generator $icon $out_dir --manifest $manifest --background $bg --splash-only --path-override $icons_path_base --index $index
