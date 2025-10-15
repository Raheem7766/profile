require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { testConnection } = require('./config/prisma');

// Import routes and middleware
const projectRoutes = require('./routes/projectRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { requestLogger, errorLogger } = require('./middleware/logger');
const { optionalApiKeyValidation } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request/Response logging middleware
app.use(requestLogger);

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio Project Management API',
    version: '1.0.0',
      endpoints: {
        health: '/health',
        projects: '/api/projects',
        featured: '/api/projects/featured',
        categories: '/api/projects/categories',
        admins: '/api/admins'
      }
  });
});

// Health check endpoint (public - no API key required)
app.get('/health', optionalApiKeyValidation, (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: 'Connected',
    uptime: process.uptime(),
    authenticated: !!req.headers['x-api-key']
  });
});

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/admins', adminRoutes);

// Error handling middleware
app.use(errorLogger);
app.use((err, req, res, next) => {
  res.status(500).json({ 
    success: false,
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!'
  });
});

// Start server
async function startServer() {
  try {
    // Test database connection
    const isConnected = await testConnection();
    
    if (!isConnected) {
      const errorLogPath = path.join(__dirname, 'error.log');
      const errorMessage = `[${new Date().toISOString()}] Failed to start server: Database connection failed\n`;
      fs.appendFileSync(errorLogPath, errorMessage);
      console.error('Failed to start server: Database connection failed');
      process.exit(1);
    }
    
    app.listen(PORT, () => {
      console.log(`🚀 Portfolio Project API Server is running on http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
      console.log(`📁 Projects API: http://localhost:${PORT}/api/projects`);
    });
  } catch (error) {
    const errorLogPath = path.join(__dirname, 'error.log');
    const errorMessage = `[${new Date().toISOString()}] Server startup error: ${error.message}\n`;
    fs.appendFileSync(errorLogPath, errorMessage);
    console.error('Server startup error:', error);
    process.exit(1);
  }
}

startServer();
