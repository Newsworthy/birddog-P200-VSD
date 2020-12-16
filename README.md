# The BirdDog P200 Vital System Display

I built this tiny app because I found when using the PTZ Keyboard provided by BirdDog with the P200 camera, it doesn't display the settings values when you adjust them. As a broadcast camera operator, this isn't really acceptable. I don't want to be guessing iris levels, and definitely not shutter speeds.

Also, sometimes it's just good to know if you've accidentally engaged the IR cut function, or mirrored/flipped the camera.

## So I built the "BirdDog P200 VSD"

This is a project built in React, so it will work on any browser, on any device.

It only receives information from the camera, and does not send information to it. No camera settings can or will be modified by this app whatsoever. It polls the cameras API once every second for the latest information.

It was built using a P200 camera running the BETA firmware "BirdDog P200 A2_A3 20.12.3374" - As a result, your experience may be different to mine. I would love to see the results from other firmwares if you have errors.

### Known Bugs

- When adjusting settings from the PTZ keyboard, results may take up to five seconds to display on the VSD. To quote BirdDog support: "The Keyboard is not talking the new encode language yet we made for the Camera lineup, so this should be rolled into the next update, whenever that officially gets released." As of December 2020, this hasn't happened yet.

- The Gain Limit display will frequently display an error. This is due to the API returning an out of range number instead of the actual value. Turns out I found a bug in the P200 API that I have reported, and will hopefully be fixed in the future.

### There will be errors!

I am giving out this app for free for people to play with, and the source code is publically available via this GitHub repository. I accept no responsibility for how it affects your hardware (It shouldn't) or your software on your machines (It also shouldn't).

If you find any bugs in this software, or would like to see more features displayed, please email me at development@newsworthyvision.com

### Installation

This MUST be run on a local machine, querying a networked P200 camera. Due to the insecure nature of the BirdDog API on the camera, this cannot be run online, as much as I would like it to be. Please send me an email if youn would like a ZIP file with the built application.
