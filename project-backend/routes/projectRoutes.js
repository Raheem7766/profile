const express = require('express');
const router = express.Router();
const { validateApiKey, optionalApiKeyValidation } = require('../middleware/auth');
const {
  createProject,
  getAllProjects,
  getProjectById,
  getProjectBySlug,
  updateProject,
  deleteProject,
  getProjectCategories,
  getFeaturedProjects,
  likeProject,
} = require('../controllers/projectController');

// Public routes (no API key required)
router.get('/', optionalApiKeyValidation, getAllProjects);
router.get('/featured', optionalApiKeyValidation, getFeaturedProjects);
router.get('/categories', optionalApiKeyValidation, getProjectCategories);
router.get('/:id', optionalApiKeyValidation, getProjectById);
router.get('/slug/:slug', optionalApiKeyValidation, getProjectBySlug);
router.post('/:id/like', optionalApiKeyValidation, likeProject);

// Protected routes (API key required)
router.post('/', validateApiKey, createProject);
router.put('/:id', validateApiKey, updateProject);
router.delete('/:id', validateApiKey, deleteProject);

module.exports = router;
