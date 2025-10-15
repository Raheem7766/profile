# Portfolio Project Management Backend

A Node.js backend API for managing portfolio projects with Prisma ORM, featuring a RESTful API for project management, CRUD operations, and advanced filtering capabilities.

## Features

- **Project Management**: Complete CRUD operations for portfolio projects
- **Advanced Filtering**: Search, category filtering, and pagination
- **Featured Projects**: Special highlighting for showcase projects
- **Technology Tracking**: Detailed technology stack management
- **Image Management**: Support for project images and thumbnails
- **Analytics**: View counts and like functionality
- **API Security**: API key authentication for protected endpoints
- **Database Management**: MySQL with Prisma migrations and seeding
- **Error Handling**: Comprehensive logging and error management

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server (v5.7 or higher)

## Installation

1. Navigate to the project directory:
```bash
cd project-backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up MySQL database:
   - Start your MySQL server
   - Create a database (e.g., `portfolio_projects`)

4. Configure environment variables:
   - Copy `env.example` to `.env`:
   ```bash
   cp env.example .env
   ```
   - Update the `.env` file with your database credentials:
   ```
   DATABASE_URL="mysql://user:password@localhost:3306/portfolio_projects"
   PORT=3001
   API_KEYS="your-api-key-here"
   ```

5. Run Prisma migrations:
```bash
npm run db:migrate
```

6. Seed the database with sample projects:
```bash
npm run db:seed
```

## Running the Application

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:3001` (or the PORT specified in .env)

## API Endpoints

### Public Endpoints (No API Key Required)

#### Get All Projects
```
GET /api/projects
```
Query Parameters:
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `category` - Filter by category
- `status` - Filter by status (default: published)
- `featured` - Filter featured projects (true/false)
- `search` - Search in title, description, and category

#### Get Featured Projects
```
GET /api/projects/featured?limit=6
```

#### Get Project Categories
```
GET /api/projects/categories
```

#### Get Project by ID
```
GET /api/projects/:id
```

#### Get Project by Slug
```
GET /api/projects/slug/:slug
```

#### Like a Project
```
POST /api/projects/:id/like
```

### Protected Endpoints (API Key Required)

#### Create New Project
```
POST /api/projects
Headers: x-api-key: your-api-key
```

#### Update Project
```
PUT /api/projects/:id
Headers: x-api-key: your-api-key
```

#### Delete Project (Soft Delete)
```
DELETE /api/projects/:id
Headers: x-api-key: your-api-key
```

### Utility Endpoints

#### Health Check
```
GET /health
```

## Project Data Structure

### Project Object
```json
{
  "id": 1,
  "title": "Project Title",
  "slug": "project-title",
  "description": "Short description",
  "longDescription": "Detailed description",
  "category": "Web Development",
  "technologies": [
    {
      "name": "React",
      "category": "Frontend",
      "icon": "fab fa-react",
      "color": "#61DAFB"
    }
  ],
  "features": ["Feature 1", "Feature 2"],
  "challenges": ["Challenge 1", "Challenge 2"],
  "solutions": ["Solution 1", "Solution 2"],
  "images": ["image1.jpg", "image2.jpg"],
  "thumbnail": "thumbnail.jpg",
  "liveUrl": "https://project.com",
  "githubUrl": "https://github.com/user/project",
  "demoUrl": "https://demo.com",
  "duration": "3 months",
  "teamSize": "Solo Project",
  "status": "published",
  "isFeatured": true,
  "isActive": true,
  "views": 100,
  "likes": 15,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## Database Schema

### Models

- **Project** - Main project entity with all project details
- **ProjectImage** - Individual project images with ordering
- **ProjectTechnology** - Technology stack for each project
- **Admin** - Simple admin model for future authentication

### Project Categories

- Web Development
- Mobile Development
- Blockchain Development
- AI/ML Development
- Desktop Development
- DevOps/Infrastructure

## Prisma Commands

### Generate Prisma Client
```bash
npm run db:generate
```

### Run migrations
```bash
npm run db:migrate
```

### Reset database
```bash
npm run db:reset
```

### Seed database
```bash
npm run db:seed
```

## Project Structure

```
project-backend/
├── config/
│   └── prisma.js           # Prisma client configuration
├── controllers/
│   └── projectController.js # Project business logic
├── middleware/
│   ├── auth.js             # API key authentication
│   └── logger.js           # Request/response logging
├── routes/
│   └── projectRoutes.js    # API route definitions
├── prisma/
│   ├── schema.prisma       # Database schema
│   ├── seed.js             # Database seeding script
│   └── migrations/         # Migration history
├── server.js               # Main application file
├── package.json            # Dependencies and scripts
├── env.example             # Environment variables template
├── error.log               # Application error logs
└── README.md               # This file
```

## Testing the API

### Example with curl:

```bash
# Health check
curl http://localhost:3001/health

# Get all projects
curl http://localhost:3001/api/projects

# Get featured projects
curl http://localhost:3001/api/projects/featured

# Get projects by category
curl http://localhost:3001/api/projects?category=Web%20Development

# Search projects
curl http://localhost:3001/api/projects?search=react

# Create new project (requires API key)
curl -X POST http://localhost:3001/api/projects \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-api-key" \
  -d '{
    "title": "New Project",
    "slug": "new-project",
    "description": "Project description",
    "category": "Web Development"
  }'
```

## Frontend Integration

This backend is designed to work seamlessly with your React portfolio frontend. You can:

1. **Replace dummy data** in your frontend components with API calls
2. **Add project management** capabilities to your admin panel
3. **Implement dynamic project filtering** and search
4. **Show real-time project statistics** (views, likes)

### Example Frontend Integration

```javascript
// Fetch all projects
const fetchProjects = async () => {
  const response = await fetch('http://localhost:3001/api/projects');
  const data = await response.json();
  return data.data.projects;
};

// Fetch featured projects
const fetchFeaturedProjects = async () => {
  const response = await fetch('http://localhost:3001/api/projects/featured');
  const data = await response.json();
  return data.data;
};
```

## Error Logging

Application startup and critical errors are logged to `error.log` file in the root directory.

## License

ISC
