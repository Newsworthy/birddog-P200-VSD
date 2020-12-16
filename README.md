# The BirdDog P200 Vital System Display

I built this tiny app because I found when using the PTZ Keyboard provided by BirdDog with the P200 camera, it doesn't display the settings values when you adjust them. As a broadcast camera operator, this isn't really acceptable. I don't want to be guessing iris levels, and definitely not shutter speeds.

## So I built the "BirdDog P200 VSD"

This is a project built in React, so it will work on any browser, on any device.

It only receives information from the camera, and does not send information to it. No camera settings can or will be modified by this app whatsoever.

### Known Bugs

- When adjusting settings from the PTZ keyboard, results may take up to five seconds to display on the VSD. To quote BirdDog support: "The Keyboard is not talking the new encode language yet we made for the Camera lineup, so this should be rolled into the next update, whenever that officially gets released." As of December 2020, this hasn't happened yet.

- The Gain Limit display will frequently display an error. This is due to the API returning an out of range number instead of the actual value. Turns out I found a bug in the P200 API that I have reported, and will hopefully be fixed in the future.

If you find any bugs in this software, please email me at development@newsworthyvision.com