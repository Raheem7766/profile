const { prisma } = require("../config/prisma");

// Simple admin login (for future use)
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Email and password are required",
      });
    }

    // Find admin by email
    const admin = await prisma.admin.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        username: true,
        passwordHash: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        error: "Invalid email or password",
      });
    }

    // Check if admin is active
    if (!admin.isActive) {
      return res.status(401).json({
        success: false,
        error: "Account is deactivated. Please contact administrator.",
      });
    }

    // Verify password (you would implement bcrypt comparison here)
    // For now, this is a placeholder
    const bcrypt = require("bcrypt");
    const isPasswordValid = await bcrypt.compare(password, admin.passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        error: "Invalid email or password",
      });
    }

    // Remove sensitive data from response
    const { passwordHash, ...adminWithoutSensitiveData } = admin;

    res.json({
      success: true,
      message: "Login successful",
      data: {
        admin: adminWithoutSensitiveData,
      },
    });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({
      success: false,
      error: "Login failed",
      message: error.message,
    });
  }
};

// Create admin (for initial setup)
const createAdmin = async (req, res) => {
  try {
    const {
      email,
      username,
      password,
      firstName,
      lastName,
      role = "admin",
    } = req.body;

    // Validate required fields
    if (!email || !username || !password) {
      return res.status(400).json({
        success: false,
        error: "Email, username, and password are required",
      });
    }

    // Hash password
    const bcrypt = require("bcrypt");
    const passwordHash = await bcrypt.hash(password, 12);

    const admin = await prisma.admin.create({
      data: {
        email,
        username,
        passwordHash,
        firstName,
        lastName,
        role,
        isActive: true,
      },
      select: {
        id: true,
        email: true,
        username: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    res.status(201).json({
      success: true,
      data: admin,
      message: "Admin created successfully",
    });
  } catch (error) {
    console.error("Error creating admin:", error);

    // Handle unique constraint violations
    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        error: "Admin with this email or username already exists",
      });
    }

    res.status(500).json({
      success: false,
      error: "Failed to create admin",
      message: error.message,
    });
  }
};

module.exports = {
  createAdmin,
  adminLogin,
};
