Video Player with Next.js

Host Link : https://video-player-nextjs.netlify.app/

To get started with the Video Player made with Next.js, follow these steps:

Step 1: Install the required dependencies:

npm install

This command will import all the necessary Node.js modules needed for the project.

Step 2: Start the development server by running one of the following commands:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Choose the appropriate command based on your preferred package manager. This will launch the development server.

Step 3: Once the server is running, open http://localhost:3000 in your web browser to see the result.

// 

Project Structure

The project is structured as follows:

src folder: This folder contains all the source code for the project.

components folder: Inside the components folder, we have various reusable components used throughout the application.

Playlist: This component integrates the playlist functionality. It utilizes dummy JSON data to populate the playlist.

Files:
index.jsx: The main JavaScript file for the Playlist component.
styles.scss: The SCSS file containing styles specific to the Playlist component.
VideoPlayer: This component serves as the main video player for the application. It includes all the necessary functionalities for video playback.

Files:
index.jsx: The main JavaScript file for the VideoPlayer component.
styles.scss: The SCSS file containing styles specific to the VideoPlayer component.
Each component folder contains an index.jsx file, which serves as the main entry point for the component, and a styles.scss file for component-specific styles.
