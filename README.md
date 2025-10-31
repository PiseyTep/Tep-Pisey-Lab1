# Tep-Pisey-Lab1 - Advanced CI/CD Pipeline

A Node.js Express application with comprehensive CI/CD pipeline featuring automated testing, code coverage, and deployment.

## 🚀 Features

- **Express.js** web server
- **Automated Testing** with Mocha & Chai
- **Code Coverage** with nyc (100% coverage)
- **ESLint** code quality checks
- **GitHub Actions** CI/CD pipeline
- **Vercel** automatic deployment

##  CI/CD Pipeline

### GitHub Actions Workflow

The pipeline includes:

1. **Code Quality Checks**
   - ESLint for code style and quality
   - Automated on every push and PR

2. **Testing & Coverage**
   - Mocha test suite execution
   - Code coverage reporting with nyc
   - Coverage artifacts uploaded to GitHub
   - Minimum 80% coverage threshold

3. **Pull Request Workflow**
   - Runs tests and linting on all PRs
   - Quality gate before merging
   - Coverage reports for review

4. **Automatic Deployment**
   - Deploys to Vercel on main branch
   - Only after all tests pass

## 🔧 Setup Instructions

### Local Development

```bash
# Install dependencies
yarn install

# Run tests
yarn test

# Run tests with coverage
yarn test:coverage

# Lint code
yarn lint

# Start server
yarn start
```

### Vercel Deployment Setup

To enable automatic deployment to Vercel:

1. **Create Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)
   - Connect your GitHub account

2. **Import Project**
   - Import this repository to Vercel
   - Note your Project ID and Org ID

3. **Get Vercel Token**
   - Go to Vercel Settings → Tokens
   - Create a new token

4. **Set GitHub Secrets**
   Add these secrets to your GitHub repository (Settings → Secrets → Actions):
   
   ```
   VERCEL_TOKEN=your_vercel_token
   ORG_ID=your_vercel_org_id  
   PROJECT_ID=your_vercel_project_id
   ```

5. **Deploy**
   - Push to main branch
   - GitHub Actions will automatically deploy to Vercel

## 📊 Code Coverage

Current coverage: **100%** on all metrics
- Statements: 100%
- Branches: 100% 
- Functions: 100%
- Lines: 100%

Coverage reports are generated as artifacts in GitHub Actions and can be downloaded for detailed analysis.

## 🔗 API Endpoints

- `GET /` - Returns "Hello, CI/CD!" message

## 🛠 Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Mocha** - Test framework
- **Chai** - Assertion library
- **Supertest** - HTTP testing
- **nyc** - Code coverage
- **ESLint** - Code linting
- **GitHub Actions** - CI/CD pipeline
- **Vercel** - Deployment platform

##  Advanced Features

### Code Coverage Reporting
- HTML reports generated in `coverage/` directory
- LCOV format for CI integration
- Configurable coverage thresholds
- Artifact upload to GitHub Actions

### Pull Request Workflow
- Automated quality checks on PRs
- Prevents merging failing code
- Coverage reports for code review
- Quality gate messaging

### Deployment Pipeline
- Automatic deployment on main branch
- Only deploys after all tests pass
- Environment-specific configuration
- Zero-downtime deployments

##  Lab Requirements Completed

* **Basic Node.js app** with automated tests  
* **GitHub Actions CI workflow** with comprehensive pipeline  
* **Linting and test steps** integrated in CI  
***Code coverage reporting** with artifacts  
* **Pull request workflow** with quality gates  
* **Deployment stage** to Vercel with automation  

---

*This project demonstrates advanced CI/CD practices including automated testing, code coverage, quality gates, and deployment automation.*