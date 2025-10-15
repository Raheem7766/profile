#!/usr/bin/env node

const axios = require('axios');

const BASE_URL = 'http://localhost:3001';
const API_KEY = 'portfolio-api-key-123'; // Use your actual API key

async function debugDeleteAPI() {
  try {
    console.log('🔍 Debugging Delete API...\n');

    // Step 1: Check server health
    console.log('1. Checking server health...');
    try {
      const healthResponse = await axios.get(`${BASE_URL}/health`);
      console.log('✅ Server is running:', healthResponse.data);
    } catch (error) {
      console.log('❌ Server is not running or not accessible');
      console.log('Please start the server with: npm run dev');
      return;
    }

    // Step 2: Get all projects
    console.log('\n2. Getting all projects...');
    const projectsResponse = await axios.get(`${BASE_URL}/api/projects`);
    
    if (!projectsResponse.data.success) {
      console.log('❌ Failed to get projects:', projectsResponse.data);
      return;
    }

    const projects = projectsResponse.data.data.projects;
    console.log(`✅ Found ${projects.length} projects`);

    if (projects.length === 0) {
      console.log('❌ No projects found. Creating a test project first...');
      
      // Create a test project
      const createResponse = await axios.post(`${BASE_URL}/api/projects`, {
        title: 'Test Project for Deletion',
        slug: 'test-project-deletion',
        description: 'This is a test project',
        category: 'Testing'
      }, {
        headers: {
          'x-api-key': API_KEY,
          'Content-Type': 'application/json'
        }
      });

      if (createResponse.data.success) {
        console.log('✅ Test project created:', createResponse.data.data);
        projects.push(createResponse.data.data);
      } else {
        console.log('❌ Failed to create test project:', createResponse.data);
        return;
      }
    }

    // Step 3: Test delete on first project
    const testProject = projects[0];
    console.log(`\n3. Testing delete on project: "${testProject.title}" (ID: ${testProject.id})`);
    
    console.log(`📋 Delete request details:`);
    console.log(`   URL: DELETE ${BASE_URL}/api/projects/${testProject.id}`);
    console.log(`   Headers: x-api-key: ${API_KEY}`);

    // Make delete request
    const deleteResponse = await axios.delete(`${BASE_URL}/api/projects/${testProject.id}`, {
      headers: {
        'x-api-key': API_KEY
      }
    });

    console.log(`📤 Delete response:`, deleteResponse.data);

    if (deleteResponse.data.success) {
      console.log('✅ Delete request successful!');
      
      // Step 4: Verify deletion
      console.log(`\n4. Verifying deletion...`);
      try {
        const verifyResponse = await axios.get(`${BASE_URL}/api/projects/${testProject.id}`);
        console.log('❌ Project still exists:', verifyResponse.data);
        console.log('🔍 This means the deletion did not work properly');
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log('✅ Project successfully deleted - verification passed!');
        } else {
          console.log('❌ Unexpected error during verification:', error.message);
        }
      }
    } else {
      console.log('❌ Delete request failed:', deleteResponse.data);
    }

    // Step 5: Test with invalid ID
    console.log(`\n5. Testing delete with invalid ID...`);
    try {
      const invalidDeleteResponse = await axios.delete(`${BASE_URL}/api/projects/99999`, {
        headers: {
          'x-api-key': API_KEY
        }
      });
      console.log('📤 Invalid ID response:', invalidDeleteResponse.data);
    } catch (error) {
      if (error.response) {
        console.log('📤 Invalid ID response (expected):', error.response.data);
      } else {
        console.log('❌ Unexpected error:', error.message);
      }
    }

    // Step 6: Test without API key
    console.log(`\n6. Testing delete without API key...`);
    try {
      await axios.delete(`${BASE_URL}/api/projects/1`);
      console.log('❌ Delete should have failed without API key');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('✅ API key validation working correctly');
      } else {
        console.log('❌ Unexpected error:', error.message);
      }
    }

  } catch (error) {
    console.error('❌ Debug failed:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  }
}

// Check if axios is available
try {
  require.resolve('axios');
  debugDeleteAPI();
} catch (error) {
  console.log('📦 Installing axios for debugging...');
  const { exec } = require('child_process');
  exec('npm install axios', (err, stdout, stderr) => {
    if (err) {
      console.error('❌ Failed to install axios:', err);
      return;
    }
    console.log('✅ Axios installed successfully');
    console.log('\n📋 Manual Debug Instructions:');
    console.log('1. Start your server: npm run dev');
    console.log('2. Run this debug script: node debug-delete.js');
    console.log('3. Check the server console for detailed logs');
  });
}
