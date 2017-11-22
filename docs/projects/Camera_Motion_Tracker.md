<div style="text-align: center">
  <h1>Camera Motion Tracker</h1>
  <p>Ben Clark | Portfolio</p>
</div>

---

This project was more of a trial run, to see how complex change an application would be to create. This project never got further than a few working application prototypes.

During my first year an University, I began getting very interested in visual and computer generated effects and imagery. My only issue was adding the VFX and CGI onto a clip of video from a camera. This is because most of the video clips that required effects were taken with camera motion, hence I would have to track the camera then add to effects to that track. 

After doing this with a range of free software tools, I found that it was often very difficult to get a 'clean' track that applied realistic motion and perspective to the CG elements. Therefore, I attempted to come up with a solution.

My solution was to use a phone, that could be mounted to a camera system. The phone could then track the cameras movement using the orientation and accelerometer sensors in the phone. This data could then be saved to a text based file, which could then be converted into a format that common visual effects programs like Adobe After Effects and Blender will be able to work with.

<img style="border: 1px solid black; display: block; margin: auto; width: 50%" src="https://benclark158.github.io/docs/projects/imgs/Camera_Motion_Tracker_1.jpg">

As shown above, I managed to fully implement an Android app that does exactly this. However, I quickly found that when the accelerometer was reading the acceleration, gravity would also be measured (obviously). Hence I needed some way to counteract this, just to get its acceleration relative to starting point. This could have been done, using the orientation of the device. 

Software would then have to be created that converted this saved format in to a format that would work with other applications. 

Sadly, this project never got fully completed, as 
 1. I don't do enough VFX and CGI work to require weeks of work. 
 2. The project was over taken in priority by a number of things such as University coursework. 
 
This was also my first ever app that I made with Android Studio, hence provided a lot of knowledge of both Java and the Android API that I now use today, and will be using for my second year group project.