const { prisma } = require("../config/prisma");

// Create a new project
const createProject = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      longDescription,
      category,
      technologies,
      features,
      challenges,
      solutions,
      images,
      thumbnail,
      liveUrl,
      githubUrl,
      demoUrl,
      duration,
      teamSize,
      status = "published",
      isFeatured = false,
    } = req.body;

    // Validate required fields
    if (!title || !slug || !description || !category) {
      return res.status(400).json({
        success: false,
        error: "Title, slug, description, and category are required",
      });
    }

    // Create slug from title if not provided
    const projectSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const project = await prisma.project.create({
      data: {
        title,
        slug: projectSlug,
        description,
        longDescription,
        category,
        technologies: technologies || [],
        features: features || [],
        challenges: challenges || [],
        solutions: solutions || [],
        images: images || [],
        thumbnail,
        liveUrl,
        githubUrl,
        demoUrl,
        duration,
        teamSize,
        status,
        isFeatured,
        isActive: true,
      },
      include: {
        projectImages: true,
        projectTechnologies: true,
      },
    });

    res.status(201).json({
      success: true,
      data: project,
      message: "Project created successfully",
    });
  } catch (error) {
    console.error("Error creating project:", error);

    // Handle unique constraint violations
    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        error: "Project with this slug already exists",
      });
    }

    res.status(500).json({
      success: false,
      error: "Failed to create project",
      message: error.message,
    });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      status = "published",
      featured,
      search,
    } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    // Build where clause
    const where = {
      isActive: true,
      status: status,
    };

    if (category) {
      where.category = category;
    }

    if (featured === "true") {
      where.isFeatured = true;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { category: { contains: search, mode: "insensitive" } },
      ];
    }

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        include: {
          projectImages: true,
          projectTechnologies: true,
        },
        orderBy: [
          { isFeatured: "desc" },
          { createdAt: "desc" },
        ],
        skip,
        take,
      }),
      prisma.project.count({ where }),
    ]);

    res.json({
      success: true,
      data: {
        projects,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit)),
        },
      },
      message: "Projects retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch projects",
      message: error.message,
    });
  }
};

// Get project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await prisma.project.findUnique({
      where: { id: parseInt(id) },
      include: {
        projectImages: true,
        projectTechnologies: true,
      },
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    // Increment view count
    await prisma.project.update({
      where: { id: parseInt(id) },
      data: { views: { increment: 1 } },
    });

    res.json({
      success: true,
      data: project,
      message: "Project retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch project",
      message: error.message,
    });
  }
};

// Get project by slug
const getProjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const project = await prisma.project.findUnique({
      where: { slug },
      include: {
        projectImages: true,
        projectTechnologies: true,
      },
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    // Increment view count
    await prisma.project.update({
      where: { slug },
      data: { views: { increment: 1 } },
    });

    res.json({
      success: true,
      data: project,
      message: "Project retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch project",
      message: error.message,
    });
  }
};

// Update project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Validate admin ID
    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({
        success: false,
        error: "Invalid project ID",
      });
    }

    // Check if project exists
    const existingProject = await prisma.project.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingProject) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    const project = await prisma.project.update({
      where: { id: parseInt(id) },
      data: updateData,
      include: {
        projectImages: true,
        projectTechnologies: true,
      },
    });

    res.json({
      success: true,
      data: project,
      message: "Project updated successfully",
    });
  } catch (error) {
    console.error("Error updating project:", error);

    // Handle unique constraint violations
    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        error: "Project with this slug already exists",
      });
    }

    res.status(500).json({
      success: false,
      error: "Failed to update project",
      message: error.message,
    });
  }
};

// SIMPLE DELETE FUNCTION - GUARANTEED TO WORK
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    
    console.log(`🗑️ DELETE REQUEST: ID = ${id}`);
    console.log(`🗑️ REQUEST METHOD: ${req.method}`);
    console.log(`🗑️ REQUEST URL: ${req.url}`);
    console.log(`🗑️ REQUEST HEADERS:`, req.headers);

    // Validate ID
    const projectId = parseInt(id);
    if (isNaN(projectId) || projectId <= 0) {
      console.log(`❌ INVALID ID: ${id}`);
      return res.status(400).json({
        success: false,
        error: "Invalid project ID. Must be a positive number.",
      });
    }

    console.log(`🔍 PARSED ID: ${projectId}`);

    // Check if project exists
    const existingProject = await prisma.project.findUnique({
      where: { id: projectId }
    });

    if (!existingProject) {
      console.log(`❌ PROJECT NOT FOUND: ${projectId}`);
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    console.log(`✅ FOUND PROJECT: "${existingProject.title}"`);

    // DELETE THE PROJECT - SIMPLE AND DIRECT
    const deletedProject = await prisma.project.delete({
      where: { id: projectId }
    });

    console.log(`✅ PROJECT DELETED: "${deletedProject.title}"`);

    res.status(200).json({
      success: true,
      message: "Project permanently deleted successfully",
      data: {
        deletedProject: deletedProject
      }
    });

  } catch (error) {
    console.error("❌ DELETE ERROR:", error);
    console.error("❌ ERROR CODE:", error.code);
    console.error("❌ ERROR MESSAGE:", error.message);

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    res.status(500).json({
      success: false,
      error: "Failed to delete project",
      message: error.message,
    });
  }
};

// Get project categories
const getProjectCategories = async (req, res) => {
  try {
    const categories = await prisma.project.groupBy({
      by: ['category'],
      where: {
        isActive: true,
        status: 'published',
      },
      _count: {
        category: true,
      },
    });

    res.json({
      success: true,
      data: categories,
      message: "Categories retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch categories",
      message: error.message,
    });
  }
};

// Get featured projects
const getFeaturedProjects = async (req, res) => {
  try {
    const { limit = 6 } = req.query;

    const projects = await prisma.project.findMany({
      where: {
        isActive: true,
        status: 'published',
        isFeatured: true,
      },
      include: {
        projectImages: true,
        projectTechnologies: true,
      },
      orderBy: { createdAt: 'desc' },
      take: parseInt(limit),
    });

    res.json({
      success: true,
      data: projects,
      message: "Featured projects retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch featured projects",
      message: error.message,
    });
  }
};

// Like a project
const likeProject = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate project ID
    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({
        success: false,
        error: "Invalid project ID",
      });
    }

    // Check if project exists
    const existingProject = await prisma.project.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingProject) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    // Increment like count
    const project = await prisma.project.update({
      where: { id: parseInt(id) },
      data: { likes: { increment: 1 } },
    });

    res.json({
      success: true,
      data: { likes: project.likes },
      message: "Project liked successfully",
    });
  } catch (error) {
    console.error("Error liking project:", error);
    res.status(500).json({
      success: false,
      error: "Failed to like project",
      message: error.message,
    });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  getProjectBySlug,
  updateProject,
  deleteProject,
  getProjectCategories,
  getFeaturedProjects,
  likeProject,
};