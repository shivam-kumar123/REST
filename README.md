# Typical Node.js File Structure

project-root/
   node_modules/          // This is where the packages installed are stored
   config/
      db.js                // Database connection and configuration
      credentials.js       // Passwords/API keys for external services used by your app
      config.js            // Environment variables
   models/                 // For mongoose schemas
      books.js
      things.js
   routes/                 // All routes for different entities in different files
      books.js
      things.js
   views/
      index.pug
      404.pug
        ...
   public/                 // All static files
      images/
      css/
      javascript/
   app.js
   routes.js               // Require all routes in this and then require this file in
   app.js
   package.json 
