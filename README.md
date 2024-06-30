# Food Delivery App

This project is a modern food delivery application that allows users to order pizzas from a menu. It aims to provide a seamless and user-friendly experience for ordering food without requiring user accounts or logins.

## Features

- **Simple Ordering:** Users can order one or more pizzas from a menu.
- **No Accounts or Logins:** Users simply input their names before using the app.
- **Dynamic Menu:** The pizza menu is loaded from an API and can change dynamically.
- **Cart Functionality:** Users can add multiple pizzas to a cart before placing an order.
- **Easy Ordering Process:** Ordering only requires the user's name, phone number, and address.
- **Priority Orders:** Users can mark their order as "priority" for an additional 20% of the cart price.
- **Order Submission:** Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API.
- **On-Delivery Payments:** Payments are made on delivery, so no payment processing is necessary in the app.
- **Order Tracking:** Each order gets a unique ID that is displayed for users to look up their order later.

## Tech Stack

- **Redux & Redux Toolkit:** Centralized state management to maintain consistency across the application.
- **React:** Component-based architecture for building a modular and maintainable frontend.
- **Vite:** Next-generation frontend tooling for fast and efficient development.
- **React Router:** Declarative routing for dynamic and accessible navigation.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/food-delivery-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd food-delivery-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application

To start the development server:
```bash
npm run dev
```
or
```bash
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Branching

### Creating a New Branch

To create a new branch and push it to the remote repository:
```bash
git checkout -b new-branch-name
git push -u origin new-branch-name
```

### Switching Between Branches

To switch back to the main branch or any other branch:
```bash
git checkout main
```
or
```bash
git checkout branch-name
```

## Contact

For questions or feedback, please reach out via [GitHub Issues](https://github.com/youseftrek/react-food-delivery/issues).
