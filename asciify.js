// Currently this just outputs img data.

 var fs = require('fs');
 var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(200,200)
  , ctx = canvas.getContext('2d');
  ;

 fs.readFile(__dirname + '/al-everest.png', function(err, pic){
  if (err) throw err;
  img = new Image;
  img.src = pic;
  ctx.drawImage(img, 0, 0, img.width / 4, img.height / 4);
  console.log('<img src="' + canvas.toDataURL() + '" />');
});
  





// STUFF FOR LATER

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });


// var canvas = require('canvas');
// console.log(canvas.cairoVersion);

// var Canvas = require('canvas')
//   , Image = Canvas.Image
//   , canvas = new Canvas(200,200)
//   , ctx = canvas.getContext('2d');

// ctx.font = '30px Impact';
// ctx.rotate(.1);
// ctx.fillText("Awesome!", 50, 100);

// var te = ctx.measureText('Awesome!');
// ctx.strokeStyle = 'rgba(0,0,0,0.5)';
// ctx.beginPath();
// ctx.lineTo(50, 102);
// ctx.lineTo(50 + te.width, 102);
// ctx.stroke();

// console.log('<img src="' + canvas.toDataURL() + '" />');



// [GET XQuartz] https://xquartz.macosforge.org/landing/
// [install XQuatrz, log out and in to init xwin]
// brew install cario
// export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:/opt/X11/lib/pkgconfig
// [maybe this?:start]
//    rm /usr/local/lib/libpixman-1.0.21.6.dylib
//    brew uninstall cairo pixman
//    brew install pixman cairo
//    brew link pixman cairo
//    npm rebuild canvas
// [maybe this?:end]
// cp /usr/X11/lib/libfreetype.dylib /usr/local/lib/
// npm install canvas
