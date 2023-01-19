# Running the App
Go into the project directory and run:
`npm start`

# My Implementation
My main solution to the problem was to create responsive breakpoints or CSS media queries, where I defined certain dimensions that would indicate that the device was mobile and adjusted the frontend design accordingly to fit the screen. The main breakpoints I set were 768px, 992px, and 1080px as these were the most popular dimensions across all devices. When the app identifies that it has reached a tablet/mobile screen or 768px width, the columns adjust accordingly to stack against each other instead of being side to side so that users don't have to scroll horizontally.

In addition to this, I defined font sizes using rem instead of set pixels. In order to ensure that font sizes change with respect to parent container width, rem allows the root font-size to scale proportionally rather than being static.

Another solution I used to create this outcome is by using fluidity. Instead of setting specific pixels to define the width, height, and padding of elements, I could use percentages to define columns and grids. This allows the website to be responsive to different screens by scaling them to fit the mobile screen according the proportions set rather than using fixed dimensions. 

For the navigation bar, I create the function GetWindowDimension to detect when the screen reached below 768px, indicating a tablet or mobile device, so that I could switch to using a hamburger menu instead of displaying the navigation buttons up on the screen. This was done as hamburger menus are commonly used among websites and are quite intuitive to the user while adequately being able to fit the screen instead of the buttons going off to the side.

Overall, I made use of general CSS techniques to set breakpoints and ensure the website was responsive to a general number of screen sizes. I also made use of a hook function when building the mobile navigation bar as I felt it was the easiest way to completely change the way the menu is being displayed respectively across screens.