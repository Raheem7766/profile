const getValidApiKeys = () => {
  const apiKeysEnv = process.env.API_KEYS;
  if (!apiKeysEnv) {
    console.warn(
      "⚠️ No API_KEYS found in environment variables. Using default keys."
    );
    return ["portfolio-api-key-123", "admin-key-456"];
  }

  // Split by comma and trim whitespace
  return apiKeysEnv
    .split(",")
    .map((key) => key.trim())
    .filter((key) => key.length > 0);
};

const VALID_API_KEYS = getValidApiKeys();

const validateApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  console.log(`🔐 API Key validation attempt:`, {
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.headers["user-agent"],
    apiKey: apiKey ? `${apiKey.substring(0, 8)}...` : "None provided",
    endpoint: `${req.method} ${req.path}`,
    validKeysCount: VALID_API_KEYS.length,
    timestamp: new Date().toISOString(),
  });

  // Check if API key is provided
  if (!apiKey) {
    console.log("❌ API Key missing");
    return res.status(401).json({
      success: false,
      error: "API key required",
      message: "Please provide x-api-key header",
    });
  }

  // Check if API key is valid
  if (!VALID_API_KEYS.includes(apiKey)) {
    console.log("❌ Invalid API Key");
    return res.status(403).json({
      success: false,
      error: "Invalid API key",
      message: "The provided API key is not valid",
    });
  }

  console.log("✅ API Key validated successfully");
  next();
};

const optionalApiKeyValidation = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey) {
    console.log(`🔐 Optional API Key provided:`, {
      ip: req.ip || req.connection.remoteAddress,
      apiKey: `${apiKey.substring(0, 8)}...`,
      endpoint: `${req.method} ${req.path}`,
      timestamp: new Date().toISOString(),
    });

    if (!VALID_API_KEYS.includes(apiKey)) {
      console.log("❌ Invalid API Key (optional)");
      return res.status(403).json({
        success: false,
        error: "Invalid API key",
        message: "The provided API key is not valid",
      });
    }

    console.log("✅ Optional API Key validated successfully");
  } else {
    console.log("ℹ️ No API Key provided (optional endpoint)");
  }

  next();
};

module.exports = {
  validateApiKey,
  optionalApiKeyValidation,
  VALID_API_KEYS,
  getValidApiKeys,
};
