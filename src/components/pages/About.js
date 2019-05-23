import React from 'react'

export default function About() {
  return (
      <div className="container">
      <ol>
        <p style={{ textAlign: 'center' }}>This is the Moving Tiles app v1.0.0. It is part of the Capco interview coding challenge. Below is an outline of the steps I took to create the app.</p>
        <br></br>
        <li>Navigated to project directory using terminal and ran create-react-app.</li>
        <li>Deleted unnecessary files, comments, and content such as the React logo and the HTML inside of "App" div in App.js.</li>
        <li>Edited App.js to include a state. I hardcoded some images with ids into the array with the intention of replacing with API images later.</li>
        <li>Created components folder and first component: Tiles.js.</li>
        <li>Created second component: TileImage.js.</li>
        <li>Added an event to capture the state change whenever an image is selected. I wanted to do this as a hover effect, however, I wasn't sure how so I used an onClick instead with the intention of going back later.</li>
        <li>Created a function to attach to the onClick event which would change the state of an image to true or false based on the current selected state (default for all images is initally false).</li>
        <li>To see the function at work, I added a red background to images with a state where selected is true.</li>
        <li>I used a tutorial to help me up until this point and it included the addition of a Header.js component and an About.js component. I decided to include these in my app, too, even though neither were part of the app demo provided by Capco.</li>
        <li>The tutorial also introduced me to JSON placeholder, a fake online REST API, and I decided to use it to generate my images using AJAX calls.
          I did this because I wanted to prioritize the development of functionality. I thought if I ran out of time, at least I was able to show the use of AJAX calls even if I didn't use my own API.
        </li>
        <li>Cleared my hardcoded array and used axios with react to setup the Get request to the JSON placeholder API.</li>
        <li>Set a limit to 18 photos because that's what I needed to create this particular app. </li>
        <li>Researched CSS Grid and created some additional divs as containers to help me form my grid.</li>
        <li>Once the grid was in place, I needed to figure out how to enlarge the selected tile and image.
          I didn't think I needed to change my onClick function because it's using the image id to alter the selected state so
          I focused on changing the styling of the tile and image.
          If it was selected, the span would increase both vertically and horizontally. The image size would increase in both directions, too.</li>
          <li>The styling changes worked, however, any image selected from the second or last row, moved the rest of the tiles out of the grid template.</li>
        </ol>
        </div>
  )
}
