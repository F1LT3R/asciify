#ASCIIfy

Creates HTML ASCII art from PNGs using a NODE Canvas.

##Installation

I know-I know, it's a hairy install!

 1. GET XQuartz: https://xquartz.macosforge.org/landing/
 2. Install XQuatrz
 3. Log-out and back in to inititialize XQuartz
 4. Install Cairo
  
        brew install cairo

5. Create Export Path

        export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:/opt/X11/lib/pkgconfig

6. Possibly fix some brew link problems :(

        rm /usr/local/lib/libpixman-1.0.21.6.dylib
        brew uninstall cairo pixman
        brew install pixman cairo
        brew link pixman cairo
        npm rebuild canvas

7. Copy the 6! out of libfreetype.dylib

        cp /usr/X11/lib/libfreetype.dylib /usr/local/lib/

7. Install node canvas

    npm install canvas

8. Run!

        node asciify al-everest.png
