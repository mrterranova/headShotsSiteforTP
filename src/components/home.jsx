import React, { Component } from 'react'


class Home extends Component {
    render () {
    return (
        <div className="homeDiv container">
            <br/>
            Welcome to the Headshot App. Please take your photo using the below application. 
            <br/>
            You need: to be dressed professionally, a plain blue or white background, good lighting, and if possible help from a family member or a friend.
                <br />
                <br />
                <ol> <h3 style={{ margin: 0 }} id="instructions">Instructions:</h3>
                    <li>
                        Before you start, make sure you are dressed professionally.
                </li>
                    <li>
                        Find a plain neutral color wall to use as a background.
                </li>
                    <li>
                        Make sure that you have good lighting. You want to be lit with a warm light coming from above at a slight angle. <br />
                        <br />
                        <a href="http://www.prexperts.com/_assets/images/Cactus%20News/Clamshell%20lighting%20650.png">Good lighting: an example.</a>
                        <p>You do not need a reflector but you do not want to be directly under a light or back lit either.</p>
                    </li>
                    <li>
                        Click show to display the frame where you will center yourself in.
                </li>
                    <li>
                        Have the photo taker center your image in the frame.
                </li>
                    <li>
                        Turn your body slightly to the right and then look at the camera.
                </li>
                    <li>
                        Smile and say cheese!  😊 🧀
                </li>
                    <li>
                        Click on the circle to take the photo.
                </li>
                    <li>
                        If you like the photo, then save it to your device and send it to your ************
                </li>
                    <li>
                        If not click retake and follow steps 5 through 10 again.
                </li>
                </ol>

            </div>
        )
    }
}

export default Home