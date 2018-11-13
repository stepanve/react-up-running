# 以前のバージョンのクリーンアップ
rm -rf __deployme
mkdir __deployme

# ビルド
sh scripts/build.sh

# Javascriptのミニファイ
uglify -s build.js -o __deployme/bundle.js
# cssのミニファイ
cssshrink bundle.css > __deployme/build.css
# HTMLと画像のコピー
cp index.html __deployme/index.html
cp -r images/ __deployme/images/

# 完了
date; echo;