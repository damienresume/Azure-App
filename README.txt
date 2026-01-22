Azure App Service Classroom Demo Site
=====================================

Files:
- index.html
- styles.css
- app.js

How to use in class:
1) Deploy this folder to Azure App Service (static files) via Dropbox OR Azure DevOps.
2) For Slots demo: in staging slot, edit index.html so VERSION becomes v2 and SLOT becomes staging.
3) For Traffic Manager: deploy same folder to 2 web apps in different regions; change REGION text to match.
4) For App Settings concept: tell students ENV is an environment variable (set in Azure).

Suggested visible edits for demos:
- VERSION: v1 -> v2
- ENV: Production -> Staging/Test
- REGION: India -> US
- BUILD: local -> 2026.01.22.1
