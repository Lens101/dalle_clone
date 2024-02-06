### Project Overview

Okay, hello. This is a dalle clone, obviously.

This readMe is going to be 1/2 a blog, 1/2 a description of the tools used and insights gained.
There's a short rundoc at the bottom, so if that's what you're after, head there. Otherwise, enjoy the read.

The front end consists of Tailwind CSS + React, utilizing Vite as the bundler and deployed on Vercel.
The backend is hosted on OnRender and built with Express.js, Node.js, and MongoDB. Images are stored on MongoDB and hosted on Cloudinary.
Additionally, images are gathered using the OpenAI API, with an investment of $10 providing 500 images.

### Acknowledgements

It's pretty sweet that these companies offer everything used in this project for free: Vercel (FE hosting), OnRender(BE hosting), MongoDB(db), Cloudinary (Image hosting).

### Project Aims

- **Exploration of Vite**: Vite was chosen to evaluate its touted performance advantages over Create React App. It build super fast on Vercel. 20 seconds fast, really enjoyable dev experience. I will be back Vite.
  
- **React Router DOM Integration**: Basically as a developer we've been spoiled over the last few years with NextJS, so I wanted to remind myself, there are alternatives, and to flex those muscles again.

- **MongoDB Integration**:  I wanted to use MongoDB in a side project environment. It's usually been setup for me at my current role, so just getting used to using it from start to finish rather than just GET / POST requests.
- **UX Analysis**: Now, I hesitate to think openai is known as a design company, but they do a  good job. And millions flock to their products every day so they must have a wonderful UX, even if their UI leaves more to be desired.
So a big aim was to check this out, replicate it and see what I could learn. Basically keep it simple, 1/2 CTA's per viewport, user interaction drives the experience, good reminders.

### Reflections and Insights

- **Vite Experience**: Vite offers improved build performance, but I had mixed feelings regarding its default linting config. Vite may be more tailored towards TypeScript-first applications, so I will return to verify this in another project soon.

- **Express.js Evaluation**: Limited usage of Express.js hindered an evaluation of its 'light' backend nature. However, perhaps this is how it got it's reputation?

- **Vite's Advantages**: Vite's seamless hot reloading and clean console output were serious boon's. Next13 is rubbish in comparison (What i've used most), although that could be babel spitting out untold lines of garbage on every re-render. I may be too quick to judge sometimes.

Okay here's the rundoc:

- **Installation**:
  - Navigate to the `client` and `server` folders in separate terminal windows.
  - Run `npm install` in both folders to install dependencies.

- **Run Servers**:
  - In one terminal, run `nodemon` for the backend with `npm run start`.
  - In another terminal, start the Vite client with `npm run start`.

- **Requirements**:
  - Ensure you have:
    - A MongoDB cluster.
    - An OpenAI API key.
    - A Cloudinary key.

- **Testing**:
  - Utilize provided Jest files and MongoDB test pings to verify functionality.

- **Development Strategy**:
  - Begin by ensuring DALL-E images are successfully retrieved.
  - Implement functionality to post images to MongoDB and retrieve them for display on the homepage.

- **Hosting Consideration**:
  - If using OnRender for backend hosting, note that the service may spin down if there are no visitors, resulting in a brief downtime before restarting. Consider upgrading if expecting consistent traffic.


