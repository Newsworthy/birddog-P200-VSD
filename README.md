# The BirdDog P200 Vital System Display

I built this app because I found when using the PTZ Keyboard provided by BirdDog with the P200 camera, it doesn't display the settings values when you adjust them. As a broadcast camera operator, this isn't really acceptable. I don't want to be guessing iris levels, and definitely not shutter speeds.

Also, sometimes it's just good to know if you've accidentally engaged the IR cut function, or mirrored/flipped the camera.

## So I built the "BirdDog P200 VSD"

This is a project built in React, and now encapsulated within Electron. Currently this is Windows only, looking to enable it cross platform soon.

It only receives information from the camera, and does not send information to it. No camera settings can or will be modified by this app whatsoever. It polls the cameras API once every second for the latest information.

It was built using a P200 camera running the BETA firmware "BirdDog P200 A2_A3 20.12.3374" - As a result, your experience may be different to mine. I would love to see the results from other firmwares if you have errors.

### Known Bugs

- When adjusting settings from the PTZ keyboard, results may take up to five seconds to display on the VSD. To quote BirdDog support: "The Keyboard is not talking the new encode language yet we made for the Camera lineup, so this should be rolled into the next update, whenever that officially gets released." As of December 2020, this hasn't happened yet.

- The Gain Limit display will frequently display an error. This is due to the API returning an out of range number instead of the actual value. Turns out I found a bug in the P200 API that I have reported, and will hopefully be fixed in the future.

### There will be errors!

I am giving out this app for free for people to play with, and the source code is publically available via this GitHub repository. I accept no responsibility for how it affects your hardware (It shouldn't) or your software on your machines (It also shouldn't).

If you find any bugs in this software, or would like to see more features displayed, please email me at development@newsworthyvision.com

### Installation

You can now simply run the .exe file and install it on any Windows machine on the same network subnet as your BirdDog camera. 

You can find the .exe file in the releases section, as well as the original React build that allows you to run this in any browser.

#### Changelog

v0.2.2 - 17/12/2020
- Moved App to Electron, allowing it to be run on local machines far more cleanly than the App the day before. I will still publish a standalone web build as well.
- Tweaked some stuff to make it prettier
- Altered the IP input field, you no longer need to add http:// - The prepend hopefully makes that clear
- Refactored a lot of code, separating each item into their own file. Makes it easier to track bugs and tweak, and massively reduces App.js in size.
- There is still a lot of work to go!

v0.1.1 - 16/12/2020
- First serious upload
- Retooled the Connect/Disconnect functions, now no longer lies to you saying that it is connected when it isn't. Especially with IP's that aren't BirdDogs.

#### Roadmap

Things I'd love to get working in the future
- Transitions on data change
- Multiple camera inputs
- Open to suggestions!
