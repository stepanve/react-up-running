# Javascript TransCompile
babel --presets react,es2015 js/source -d js/build
# Javascript Packaging
browserify js/build/app.js -o bundle.js
# css Packaging
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css