# F1 DeFi Security Dashboard - Frontend

A professional F1-themed DeFi security dashboard built with React for monitoring MEV attacks, smart contract security, and real-time blockchain threats.

## Features

- **F1 Racing Theme**: Carbon fiber textures, racing colors (Red, Yellow, Green), and immersive loading experiences
- **Wallet Integration**: MetaMask wallet connection with WalletConnect and Coinbase Wallet support (coming soon)
- **Interactive Loading**: F1 race track loading animation with start lights and sound effects
- **Real-time Dashboard**: Live transaction monitoring, risk meter, and security alerts
- **Protected Routes**: Secure routing with wallet authentication
- **Responsive Design**: Optimized for desktop (1280px minimum width)

## Tech Stack

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Ethers.js** - Ethereum interaction
- **Recharts** - Data visualization
- **Web3** - Blockchain connectivity

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm or yarn
- MetaMask browser extension (for wallet connection)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## Sound Effects

The loading screen includes F1-themed sound effects. To enable audio:

1. Navigate to `src/assets/sounds/`
2. Read the `README.md` file for required sound files
3. Add MP3 files with the exact names listed
4. Restart the development server

The app will gracefully handle missing sound files.

## Usage

### Connecting a Wallet

1. Visit the landing page
2. Click "CONNECT WALLET"
3. Select MetaMask from the modal
4. Approve the connection in MetaMask
5. Wait for the F1 loading animation
6. Access the dashboard

### Navigation

Use the sidebar to navigate between pages:
- **Dashboard** - Overview with metrics and charts
- **Mempool** - Real-time mempool monitoring
- **Protection** - MEV protection settings
- **Alerts** - Security alert history
- **Analytics** - Advanced analytics
- **Settings** - User preferences

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)
- Safari (latest 2 versions)

**Note:** Desktop only (minimum width: 1280px)

---

**Built for the F1 DeFi Security Hackathon**
