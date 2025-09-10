@echo off
echo Initializing Git repository...
git init

echo Adding all files...
git add .

echo Configuring Git user...
git config user.name "Jit Banerjee"
git config user.email "jit@cehpoint.co.in"

echo Creating initial commit...
git commit -m "Initial commit: Complete Apptechvisa Solutions website with cost calculator, WhatsApp integration, and professional design"

echo Adding remote repository...
git remote add origin https://github.com/colourfulhacker/apptechvisa-solutions.git

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo Done! Your project has been committed to GitHub.
pause
