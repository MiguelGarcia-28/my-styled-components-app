# This is a React Styled Components App

This is a simple React Application demonstrating how to use Styled Components
for styling and theming. This App includes two different pages: Landing Page amd a User Profile Page.
Both of these pages with light/dark mode support, also these pages are responsive design.

### Installation 
1. Clone the repository

gh repo clone MiguelGarcia-28/my-styled-components-app
cd my-styled-components-app

2. Install dependencies

npm start

3. Start the development server:

npm start

    Project Structure
|
|-- components/
|   |-- Header.js       # Navigation bar with theme toggle
|   |-- Footer.js       # Footer with copyright
|   |-- LandingPage.js  # Main Landing Page
|   |-- ProfilePage.js  # User profile page
|
|-- styles/
|   |-- HeaderStyles.js
|   |-- FooterStyles.js
|   |-- LandingPageStyles.js
|   |-- ProfilePageStyles.js
|
|-- themes/
|   |-- theme.js        # Light and Dark theme definitions
|
|-- App.js              # Main App
|-- index.js
|-- GlobalStyles.js

 Styling with Styled Components
This app uses Styled Components for component-scoped styling:
- Each UI component has its own styled file for modularity and readability.
- Dynamic styles via props are used for hover states and theming.
- Media queries inside styled-components ensure responsive design.

 Theming
We use ThemeProvider from Styled Components to apply light and dark themes globally:
- Themes are defined in themes/theme.js.
- A toggle button in the Header switches between light and dark mode.
- Global styles automatically adapt to the selected theme.

 Responsive Design
Styled Components include media queries to adjust layouts and font sizes for smaller screen
widths, ensuring a smooth experience on mobile, tablet, and desktop.

 Built With
- React
- Styled Components
- React Router DOM