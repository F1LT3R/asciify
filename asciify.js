
var fs  = require('fs')
  , PNG = require('pngjs').PNG
  , charWidth = 80
  , charRamp = "@%#*+=-:. "
  // , charRamp = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. "
  , charRampLen = charRamp.length
  , colorChannels = 3
  , valuesPerChannel = 255
  , maxRGB = colorChannels*valuesPerChannel  
  , rampRatio = charRampLen/(maxRGB+1)
  ;

fs.createReadStream('al-everest.png')
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {

    var aspectRatio = this.width/charWidth
      // , ascii = '<span style="font-family:console;">'
      , ascii = ''      
      , x
      , y
      ;

    for (y = 0; y < this.height; parseInt(y+=aspectRatio*2)) {
      for (x = 0; x < this.width; parseInt(x+=aspectRatio)) {
        
        var idx = (this.width * y + x) << 2
          , r = this.data[idx]
          , g = this.data[idx+1]
          , b = this.data[idx+2]
          , a = this.data[idx+3]
          , brightness = r+g+b
          ;
        
        // ascii += '<span style="color:rgba('+r+','+g+','+b+')">'+charRamp[parseInt(rampRatio*brightness)]+'<span>';
        ascii += charRamp[parseInt(rampRatio*brightness)];

      }
      ascii += '\n';
      // ascii += '<br>\n';
    }
    // ascii += '</span>';
    
    console.log(ascii);
    
    // this.pack().pipe(fs.createWriteStream('out.png'));
});