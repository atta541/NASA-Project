# NASA Project 🚀

A comprehensive web application that showcases NASA's fascinating space data through an intuitive and interactive interface. Built with React frontend and Node.js backend, this application provides users with access to multiple NASA API endpoints including Astronomy Picture of the Day, Mars Rover Photos, Technology Transfer, and Near Earth Objects.

## 🌟 Live Demo

**[View Live Application](https://nasa-project-xi.vercel.app/)**

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Features
- **Astronomy Picture of the Day (APOD)**: Daily stunning space images with detailed descriptions
- **Mars Rover Photos**: Explore high-quality images captured by NASA's Mars rovers
- **Technology Transfer**: Discover NASA technologies available for commercial use
- **Near Earth Objects (NEO)**: Track asteroids and comets approaching Earth

### User Experience
- 🔍 **Advanced Search & Filtering**: Find specific content across all NASA datasets
- 📱 **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- 📊 **Data Visualization**: Interactive charts and graphs using Recharts library
- 🎨 **Modern UI**: Clean, intuitive interface with Tailwind CSS styling
- ⚡ **Fast Loading**: Optimized performance with loading states and error handling
- 🧭 **Easy Navigation**: React Router for smooth single-page application experience

### Technical Features
- 🛡️ **Security**: Helmet.js for enhanced security headers
- 🔄 **Real-time Data**: Live data fetching from NASA APIs
- 📈 **Performance Monitoring**: Built-in analytics and performance tracking
- 🎯 **Error Handling**: Comprehensive error handling for API failures
- 🌐 **CORS Support**: Proper cross-origin resource sharing configuration

## 🛠️ Tech Stack

### Frontend
- **React** (v19.1.0) - Modern JavaScript library for building user interfaces
- **React Router DOM** (v6.30.1) - Client-side routing
- **Recharts** (v3.1.0) - Data visualization and charting
- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework
- **Lucide React** (v0.525.0) - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime environment
- **Express** (v5.1.0) - Web application framework
- **Axios** (v1.10.0) - HTTP client for API requests
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **Helmet** (v8.1.0) - Security middleware
- **Morgan** (v1.10.0) - HTTP request logger
- **dotenv** (v17.2.0) - Environment variable management

### Development Tools
- **Nodemon** (v3.1.10) - Development server auto-restart
- **ESLint** - Code linting and formatting
- **Jest** - Testing framework

## 📁 Project Structure

```
NASA/
├── frontend/
│   ├── build/                 # Production build files
│   ├── public/               # Static files
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service functions
│   │   ├── App.jsx          # Main App component
│   │   ├── index.js         # Entry point
│   │   └── index.css        # Global styles
│   ├── .env                 # Environment variables
│   ├── .env.example         # Environment template
│   ├── package.json         # Dependencies and scripts
│   └── tailwind.config.js   # Tailwind CSS configuration
├── backend/
│   ├── api/                 # API route handlers
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── routes/          # Route definitions
│   │   └── services/        # Business logic
│   ├── .env                 # Environment variables
│   ├── .env.example         # Environment template
│   ├── index.js             # Server entry point
│   ├── package.json         # Dependencies and scripts
│   └── vercel.json          # Vercel deployment config
├── .gitignore
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm package manager
- NASA API key (free at [https://api.nasa.gov/](https://api.nasa.gov/))

### Step 1: Clone the Repository
```bash
git clone https://github.com/atta541/nasa-project.git
cd nasa-project
```

### Step 2: Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file from example
cp .env.example .env

# Edit .env file with your NASA API key
# NASA_API_KEY=your_nasa_api_key_here
# PORT=5000
# REACT_APP_FRONTEND_URL=http://localhost:3000
```

### Step 3: Frontend Setup
```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Create environment file from example
cp .env.example .env

# Edit .env file with backend URL
# REACT_APP_BACKEND_URL=http://localhost:5000
```

## ⚙️ Configuration

### Backend Configuration
Create a `.env` file in the backend directory using `.env.example` as a template:

```env
# NASA API Configuration
NASA_API_KEY=YOUR_NASA_API_KEY_HERE
PORT=5000
REACT_APP_FRONTEND_URL=http://localhost:3000
```

**To get your NASA API key:**
Visit [https://api.nasa.gov/](https://api.nasa.gov/) and sign up for a free API key.

### Frontend Configuration
Create a `.env` file in the frontend directory using `.env.example` as a template:

```env
# Backend API Configuration
REACT_APP_BACKEND_URL=http://localhost:5000
```

## 🎯 Usage

### Development Mode

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start the Frontend Application**
   ```bash
   cd frontend
   npm start
   ```
   Application will open at `http://localhost:3000`

### Production Mode

1. **Build the Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the Backend**
   ```bash
   cd backend
   npm start
   ```

## 🔌 API Endpoints

### Backend Routes

| Endpoint | Method | Description |
|----------|---------|-------------|
| `/apod` | GET | Astronomy Picture of the Day |
| `/apod?date=YYYY-MM-DD` | GET | APOD for specific date |
| `/mars` | GET | Mars Rover photos |
| `/mars?rover=curiosity&sol=1000` | GET | Filtered Mars photos |
| `/techtransfer/software` | GET | NASA software technology transfer |
| `/techtransfer` | GET | General technology transfer data |
| `/neo` | GET | Near Earth Objects |
| `/neo?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD` | GET | NEO data for date range |

**Base URL**: `http://localhost:5000` (development) | `https://your-backend-url.com` (production)

### NASA API Integration

The application integrates with the following NASA APIs:
- **APOD API**: Daily astronomy images and information
- **Mars Rover Photos API**: Images from Spirit, Opportunity, and Curiosity rovers
- **Technology Transfer API**: Commercial technology opportunities
- **NeoWs API**: Near Earth Object tracking data

## 🎨 Features in Detail

### Astronomy Picture of the Day (APOD)
- View daily space images with detailed descriptions
- Browse historical APOD entries
- High-resolution image display with metadata

### Mars Rover Photos
- Explore photos from multiple Mars rovers
- Filter by rover, camera, and sol (Mars day)
- Interactive image gallery with zoom capabilities

### Technology Transfer
- Discover NASA technologies available for licensing
- Search by category, keyword, or technology type
- Detailed technology descriptions and applications

### Near Earth Objects
- Track asteroids and comets approaching Earth
- View orbital data and hazard classifications
- Interactive charts showing approach distances and dates

## 🔧 Development

### Running Tests
```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test
```

### Code Formatting
```bash
# Install dependencies and run ESLint
npm run lint
```

### Adding New Features
1. Create feature branch: `git checkout -b feature/new-feature`
2. Implement changes in appropriate frontend/backend directories
3. Add tests for new functionality
4. Update documentation
5. Submit pull request

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Frontend Deployment (Vercel)
The frontend is deployed on Vercel and automatically updates with each push to the main branch.

**Live URL**: https://nasa-project-xi.vercel.app/

### Backend Deployment
Backend can be deployed on platforms like:
- Heroku
- Railway
- Render
- AWS EC2
- Vercel

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License. See the LICENSE file for details.

## 🙏 Acknowledgments

- NASA for providing free access to their amazing APIs
- React team for the excellent frontend framework
- Express.js team for the robust backend framework
- All contributors who helped make this project possible



**Built with ❤️ by Atta ur rehman**

*Exploring the cosmos, one API call at a time* 🌌
