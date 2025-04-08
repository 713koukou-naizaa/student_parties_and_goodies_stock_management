#!/bin/bash

# Script Name: submit.sh
# Description:
# Prepares project for submission by:
# - Cleaning Angular cache
# - Removing node_modules and vendor directories
# - Building Angular project
# - Copying Angular build artifacts to Laravel's public directory
# - Creating zip archive of project (excluding unnecessary files)
# Author: 713koukou-naizaa
# Date: March 26, 2025

# Clean Angular cache
echo "Cleaning Angular cache..."
cd frontend
ng cache clean
cd ..

# Remove node_modules directory
echo "Removing node_modules and vendor directories..."
rm -rf frontend/node_modules
rm -rf backend/vendor

# Build Angular project
echo "Building Angular project..."
cd frontend
ng build
cd ..

# Copy Angular build artifacts to Laravel's public directory
echo "Copying Angular build artifacts to Laravel's public directory..."
rm -rf backend/public/*
cp -r frontend/dist/* backend/public

# Create zip archive of the project (excluding unnecessary files)
echo "Creating zip archive of project..."
zip -r student_parties_and_goodies_stock_management.zip . \
    -x "frontend/node_modules/*" \
    -x "backend/vendor/*" \
    -x "*.zip" \
    -x "frontend/dist/*" \
    -x "backend/storage/logs/*" \
    -x "backend/storage/framework/*"

echo "Project prepared for submission"