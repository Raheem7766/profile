const requestLogger = (req, res, next) => {
  const startTime = Date.now();
  const requestId = Math.random().toString(36).substr(2, 9);
  
  // Add request ID to request object for tracking
  req.requestId = requestId;
  
  console.log(`\n🚀 [${requestId}] ${req.method} ${req.path}`, {
    timestamp: new Date().toISOString(),
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.headers['user-agent'],
    contentType: req.headers['content-type'],
    apiKey: req.headers['x-api-key'] ? `${req.headers['x-api-key'].substring(0, 8)}...` : 'None',
    body: req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH' ? req.body : undefined
  });

  // Override res.json to log responses
  const originalJson = res.json;
  res.json = function(data) {
    const duration = Date.now() - startTime;
    
    console.log(`📤 [${requestId}] Response:`, {
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      dataSize: JSON.stringify(data).length,
      success: data.success !== undefined ? data.success : 'unknown',
      timestamp: new Date().toISOString()
    });

    // Log response data (be careful with sensitive data)
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 [${requestId}] Response Data:`, data);
    }

    // Call original json method
    return originalJson.call(this, data);
  };

  next();
};

const errorLogger = (err, req, res, next) => {
  const requestId = req.requestId || 'unknown';
  
  console.error(`\n❌ [${requestId}] ERROR:`, {
    message: err.message,
    stack: err.stack,
    url: `${req.method} ${req.path}`,
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.headers['user-agent'],
    timestamp: new Date().toISOString()
  });

  // Log to error.log file
  const fs = require('fs');
  const path = require('path');
  const errorLogPath = path.join(__dirname, '..', 'error.log');
  const errorMessage = `[${new Date().toISOString()}] [${requestId}] ${err.message}\n`;
  fs.appendFileSync(errorLogPath, errorMessage);

  next(err);
};

const simpleLogger = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - ${req.ip}`);
  next();
};

module.exports = {
  requestLogger,
  errorLogger,
  simpleLogger
};
