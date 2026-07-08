# DevFolio - Data-Driven Portfolio Template

A beautiful, modern, and highly customizable personal portfolio template built with Next.js, Tailwind CSS, and HeroUI.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fdevfolio)

## 🚀 Getting Started (For Non-Techy Users)

The easiest way to get your portfolio live on the internet is by clicking the **Deploy with Vercel** button above. 

1. Click the button.
2. Log in with your GitHub account.
3. Vercel will automatically copy this code to your GitHub and launch a live website for you!
4. Once your site is live, you can edit the content on your own GitHub account and it will automatically update your live website.

## 🛠 How to Customize Your Information

You don't need to know how to code to update your portfolio! All of your personal information is stored in a single configuration file.

1. Open the file located at `data/portfolio.ts`
2. Update the text to match your own details. You can change your:
   - Name and Job Title
   - Professional Summary
   - Social Media Links
   - Work Experience
   - Education & Certifications
   - Hackathons
   - Skills
   - Featured Projects
3. Save the file. If you are doing this on GitHub, simply commit the changes and Vercel will automatically refresh your live website within a minute!

## 📄 Adding Your Resume

A "Download Resume" button will automatically appear in your portfolio header. 
To link your actual resume:
1. Drag and drop your real PDF resume into the `public/` folder.
2. Make sure it is named `resume.pdf` (replacing the placeholder file).
*(Alternatively, you can edit `resumeUrl` in the `data/portfolio.ts` file to point to an external Google Drive or Dropbox link).*

## 💻 Local Development

If you want to run this project on your own computer:

```bash
# Clone the repository
git clone https://github.com/dev-reymark/devfolio.git

# Navigate into the project directory
cd devfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
