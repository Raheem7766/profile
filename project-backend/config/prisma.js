const { PrismaClient } = require('@prisma/client')
const fs = require('fs');
const path = require('path');

// Create Prisma client instance
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

// Test the database connection
async function testConnection() {
  try {
    console.log('Attempting to connect to database with Prisma...');
    await prisma.$connect();
    console.log('✅ Database connected successfully with Prisma!');
    return true;
  } catch (error) {
    const errorLogPath = path.join(__dirname, '..', 'error.log');
    const errorMessage = `[${new Date().toISOString()}] Prisma database connection failed: ${error.message}\n`;
    fs.appendFileSync(errorLogPath, errorMessage);
    console.error('❌ Prisma database connection failed:', error.message);
    console.error('Full error:', error);
    return false;
  }
}

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

module.exports = {
  prisma,
  testConnection
};
