import React from 'react'

export default function About() {
  return (
    <div className="container">
      <ul>
        <p style={{ textAlign: 'center' }}>This is the Moving Tiles app. It is part of the interview coding challenge. Below is an outline of the steps I took to create the app. I also explain some of the challenges I faced and my thought process behind determining the logic required to reach solutions. I am not always sure how something will get done but I'm comfortable identifying what's going on and what should happen next.</p>
        <br></br>
        <li>Navigated to project directory using terminal and ran create-react-app.</li>
        <li>Deleted unnecessary files, comments, and content such as the React logo and the HTML inside of "App" div in App.js.</li>
        <li>Edited App.js to include a state. I hardcoded some images with ids into the array with the intention of replacing with API images later.</li>
        <li>Created components folder and first component: Tiles.js.</li>
        <li>Created second component: TileImage.js.</li>
        <li>Added an event to capture the state change whenever an image is selected. I wanted to do this as a hover effect, however, I wasn't sure how so I used an onClick instead with the intention of going back later.</li>
        <li>Created a function to attach to the onClick event which would change the state of an image to true or false based on the current selected state (at this point, default for all images is initally false).</li>
        <li>To see the function at work, I added a black background to images with a state where selected is true.</li>
        <li>I used a tutorial to help me up until this point and it included the addition of a Header.js component and an About.js component. I decided to include these in my app, too, even though neither were part of the app demo.</li>
        <li>The tutorial also introduced me to JSON placeholder, a fake online REST API, and I decided to use it to generate my images using AJAX calls.
          I did this because I wanted to prioritize the development of functionality. I thought if I ran out of time, at least I was able to show the use of AJAX calls even if I didn't use my own API.
        </li>
        <li>Cleared my hardcoded array and used axios with react to setup the Get request to the JSON placeholder API.</li>
        <li>Set a limit to 18 photos because that's what I needed to create this particular app.</li>
        <li>Researched CSS Grid and created some additional divs as containers to help me form my grid.</li>
        <li>Once the grid was in place, I needed to figure out how to enlarge the selected tile and image.
          I didn't think I needed to change my onClick function because it's using the image id to alter the selected state so
          I focused on changing the styling of the tile and image.
          If it was selected, the span would increase both vertically and horizontally (used CSS grid for this). The image size would increase in both directions, too (used flexbox for this).</li>
        <li>The styling changes worked, however, only one tile at a time was showing as enlarged.</li>
        <li>I added a function that set two tiles as selected = true when the page loads. This didn't solve the issue but it gave me a starting point.</li>
        <li>Before adding the ability for two tiles to be enlarged at a time, I decided to revisit my onClick function. I found onMouse events and chose one to replace my onClick event. It worked. Now images were enlarged on a simple hover.</li>
        <li>I had to think about how I was going to enlarge two tiles at a time. This was probably where I started to have the biggest challenge.</li>
        <li>After some thinking, I knew if I could capture the value of the enlarged selected tiles, I could replace one at a time with a new selection.</li>
        <li>I went back and removed the function that set selected to true for two tiles and created a second array in the state where I would store the enlarged tile ids.</li>
        <li>Then, I hardcoded the index position of the two tiles I wanted to load as enlarged and I set the initial values to true in my ComponentDidMount function where I was getting the data for the tiles array.</li>
        <li>Next I changed my markSelected function. Originally I was just checking to see if the tile id in the array was equal to the current tile id and if it was then selected would be true. I changed this to check if the tile id was in the enlargedImage array and set the value to true or false based on that instead.</li>
        <li>This wasn't enough. I needed to set the state of the array so that it was capturing the new tile id everytime. Within the same function, I created a variable to set the enlargedImage array to contain the image where selected = true (by referencing its position in the array) in the first position of the array and the current image by id in the second position of the array.</li>
        <li>Now I could set the state for the enlargedImage array to the value of this new variable.</li>
        <li>This seemed to work but now I had a new problem: if I hovered over the image that was already selected, the id of that image became both the first and last value in the enlargedImage array. Because of that, only that single image would appear as selected and enlarged.</li>
        <li>I added another conditional to check if the current id is already in the enlargedImage array. If it isn't, the function runs and if it is, the function doesn't run and nothing changes.</li>
        <li>I was still having issues with the grid appearance. If I chose two tiles in the lower row, they would spill over outside of the grid.</li>
        <li>I attempted to read more about CSS grid to find a solution and I learned about grid-auto-flow: dense. It helped eliminate some of the dead space created when the selected tiles ran off the grid. It didn't completely solve the problem but it helped.</li>
        <li>While playing with some styling to correct the layout of the grid, I discovered a bug with my enlargedImage array. Some of the tile selections were changing both array position values completely instead of just the second position as the new id. With some more time, I would have looked into what was causing this and corrected it. I suspect it may have something to do with my hardcoded values. I find that hardcoding is helpful to set things up but can actually cause more problems later when being used alongside dynamic data.</li>
        <li>I also would have corrected the layout issue and replaced the JSON placeholder API with my own.</li>
        <li>I did my best to prioritize the features I thought mattered most and made a few revisions as I went along.</li>
        <li>I learned a lot about CSS grid and read up on arrays in order to overcome my biggest challenges.</li>
      </ul>
    </div>
  )
}
