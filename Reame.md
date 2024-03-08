# Realtime Whiteboard

Realtime Whiteboard is a collaborative web application built with React to provide users with a seamless and interactive whiteboarding experience. It facilitates real-time collaboration, allowing users to create or join whiteboard sessions, draw using various tools, and receive instant updates on others' actions. The application also incorporates authentication, responsive design, and the option to save and export whiteboard content.

## Features

- **Create and Join Sessions:** Users can initiate new whiteboard sessions or join existing ones.
- **Drawing Tools:** The whiteboard supports drawing with different colors and brush sizes.
- **Undo/Redo Functionality:** Users can easily undo or redo their last action on the whiteboard.
- **Real-time Cursor Movement:** Cursors of connected users move in real-time, reflecting their drawing actions.
- **Save and Export:** An option to save the whiteboard content as an image or PDF file is provided.
- **Authentication:** Secure user signup and login using Keycloak ensure authorized access.
- **Responsive Design:** The application is designed to work seamlessly on both desktop and mobile devices.

## Technology Stack

- **Frontend:** Developed using React, ensuring a professional and fluidic user experience.
- **Real-time Functionality:** WebSocket or PostGres SQL via Docker container for seamless real-time collaboration.
- **Drawing Library:** Utilizes Fabric.js or Konva.js for efficient drawing on the whiteboard.
- **Authentication:** Implements secure authentication with Keycloak via Docker.
- **Layout Design:** Utilizes Bootstrap 5.0 for a clean and responsive layout.
- **Codebase:** Written exclusively in TypeScript for error-free, readable, and clean code.

## Bonus Features (for extra points)

- **Live Chat:** Users can collaborate through live chat while drawing on the whiteboard.
- **Invitation System:** Enables users to invite others to join their whiteboard session via email.
- **Export as Video:** Adds the ability to export whiteboard content as a video with playback of drawing actions.

## Quick Hint

Local storage is used to save user preferences for an enhanced user experience.

## References

- [Keycloak](https://www.keycloak.org/) - Secure authentication solution.
- [Keycloak Docker Guide](https://www.keycloak.org/getting-started/getting-started-docker) - Docker setup for Keycloak.

**Note:** Ensure a plagiarism-free submission. The UI must meet high standards, and the code should be clean, readable, and error-free. Submit the assignment via a GitHub link, including all assets and a screenshot of the final application. Do not send LinkedIn requests.
