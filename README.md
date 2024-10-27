# My Travel Journal 🌏

This is a simple travel journal app built with React. It displays a list of travel destinations with relevant details such as location, date range, description, and an image for each destination. The app has a clean and visually appealing UI.

## Project Overview

![Screenshot](./screenshot.png) <!-- Replace with the actual image path if needed -->

This app showcases a list of travel experiences, each card displaying:

- The country and location name
- Date range of the trip
- A short description of the place
- A related image

## Features

- **Responsive Layout**: The app is designed to adapt to different screen sizes.
- **Dynamic Data**: Destinations are rendered dynamically from a JavaScript array, making it easy to add or modify entries.
- **Styled Components**: Each component is styled to create a neat, organized look.

## Technologies Used

- **React**: Used for building the user interface and handling the state.
- **CSS**: For styling the components and ensuring a responsive layout.
- **Vite**: Used as the bundler and development server.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/my-travel-journal.git
   ```
2. Navigate to the project folder:
   ```bash
   cd my-travel-journal
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

Here's a quick overview of the folder structure:

```
my-travel-journal/
├── public/            # Public assets
├── src/
│   ├── assets/        # Images and other static assets
│   ├── components/    # React components
│   ├── App.js         # Main app component
│   └── main.js        # Entry point for React
├── .gitignore
├── package.json
└── README.md
```

## Data Structure

The travel destinations are stored in a simple array of objects, allowing you to add new locations or update existing ones with ease:

```javascript
export default [
    {
        countryName: "Japan",
        placeName: "Mount Fuji",
        dateRange: "12 Jan, 2023 - 24 Jan, 2023",
        desc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    {
        countryName: "Australia",
        placeName: "Sydney Opera House",
        dateRange: "27 May, 2023 - 8 Jun, 2023",
        desc: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
    },
    {
        countryName: "Norway",
        placeName: "Geirangerfjord",
        dateRange: "01 Oct, 2024 - 18 Nov, 2024",
        desc: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    }
];
```

## Usage

After starting the development server, open your browser and go to `http://localhost:5173` to view the app. Each travel destination is displayed as a card with relevant information.

## Customization

To add new locations:

1. Open the data file where the destinations are stored.
2. Add a new object with the same structure as the existing entries.

## License

This project is open source and available under the MIT License.

---

Feel free to replace `"./screenshot.png"` with the actual path to your screenshot image file to display it in the README. Let me know if you'd like any more details added!
