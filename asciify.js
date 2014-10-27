
var fs  = require('fs')
  , PNG = require('pngjs').PNG
  , charWidth = 80
  // , charRamp = "@%#*+=-:. "
  // , charRamp = "█▓▒░ "
  , charRamp = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. "
  , charRampLen = charRamp.length
  , colorChannels = 3
  , valuesPerChannel = 255
  , maxRGB = colorChannels*valuesPerChannel  
  , rampRatio = charRampLen/(maxRGB+1)
  // RGB Color Pallette
  , colors = [
     [255,  0,  0]
    , [255,128,  0]
    , [255,255,  0]
    , [128,255,  0]
    , [  0,255,  0]
    , [  0,255,128]
    , [  0,255,255]
    , [  0,128,255]
    , [128,  0,255]
    , [255,  0,255]
    , [255,  0,128]
    , [128,128,128]
    , [255,255,255]
    , [  0,  0,  0]
    ]
  // HSB Color Pallette
  // , colors = [
  //     [ 0, 1, 0.5 ]
  //   , [ 0.08366013071895424, 1, 0.5 ]
  //   , [ 0.16666666666666666, 1, 0.5 ]
  //   , [ 0.2496732026143791, 1, 0.5 ]
  //   , [ 0.3333333333333333, 1, 0.5 ]
  //   , [ 0.4169934640522876, 1, 0.5 ]
  //   , [ 0.5, 1, 0.5 ]
  //   , [ 0.5830065359477125, 1, 0.5 ]
  //   , [ 0.7503267973856209, 1, 0.5 ]
  //   , [ 0.8333333333333334, 1, 0.5 ]
  //   , [ 0.9163398692810457, 1, 0.5 ]
  //   , [ 0, 0, 0.5019607843137255 ]
  //   , [ 0, 0, 1 ]
  //   , [ 0, 0, 0 ]
  //   ]
  , numberOfColors = colors.length
  ;

// GET THE HSB COLORS FOR AN RGB PALLETTE
// for (var i =0; i< colorsRGB.length; i+=1) {
//   var col = colorsRGB[i];
//   // console.log(col);
//   console.log(rgbToHsl(col[0], col[1], col[2]));
// }




fs.createReadStream('al-everest.png')
  .pipe(new PNG({
    filterType: 4
  }))
  .on('parsed', function() {

    var aspectRatio = this.width/charWidth
      , ascii = '<style>@import url(http://fonts.googleapis.com/css?family=Source+Code+Pro:300,600);\n\nbody{background:black;font-size:12px;font-family:"Source Code Pro";letter-spacing:-3.5px;line-height:5px;}*{margin:0;padding:0}</style> <span>'
      // , ascii = ''      
      , thisColor
      , closestColor
      , i
      , x
      , y
      ;

    for (y = 0; y < this.height; parseInt(y+=aspectRatio)) {
      for (x = 0; x < this.width; parseInt(x+=aspectRatio)) {

        var idx = (this.width * y + x) << 2
          , r = this.data[idx]
          , g = this.data[idx+1]
          , b = this.data[idx+2]
          , a = this.data[idx+3]
          , brightness = r+g+b
          ;  

        // √((r2-r1)2 + (g2-g1)2 + (b2-b1)2)
        // var minimalFoundColorDistance = 9999999
        //   , cfc // closestFoundColor
        //   ;

        // for (i = 0; i< numberOfColors; i+=1) {
        //   var curPalCol = colors[i];
          
        //   var colDist = Math.sqrt(
        //         Math.pow((r-curPalCol[0]), 2) + 
        //         Math.pow((g-curPalCol[1]), 2) + 
        //         Math.pow((b-curPalCol[2]), 2)
        //       );

        //   console.log(colDist);
        //   if (colDist<minimalFoundColorDistance) {
        //     minimalFoundColorDistance = colDist;
        //     cfc = curPalCol;
        //   }  
        // }
        // console.log(cfc);

        // if(x>80){
        //   // console.log(ascii);
        //   return;
        // }

        // ascii += charRamp[parseInt(rampRatio*brightness)];
        // ascii += '<span class="asciify-color-'+closestColor+'">'+charRamp[parseInt(rampRatio*brightness)]+'<span> ';
        // ascii += '<span style="color:rgba('+cfc[0]+','+cfc[1]+','+cfc[2]+');">'+charRamp[parseInt(rampRatio*brightness)]+'</span> ';
        ascii += '<span style="color:rgb('+r+','+g+','+b+');">'+charRamp[parseInt(rampRatio*brightness)]+'</span> ';
      }
      // ascii += '\n';
      ascii += '<br>\n';
    }
    ascii += '</span>';
    
    // console.log(ascii);
    

    var fs = require('fs');
    fs.writeFile("./test.html", ascii, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    }); 

    // this.pack().pipe(fs.createWriteStream('out.png'));
});