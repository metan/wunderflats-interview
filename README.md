# Wunderflats Frontend Coding Challenge

Welcome to the Wunderflats Coding Challenge for Frontend Developers. Please read the instructions in this README carefully before starting.

You should set aside 4-8 hours to complete this challenge.

## Part 1: Implement 4 JavaScript Functions

In the first part of the coding challenge you should implement 4 JavaScript functions according to the specifications provided in their respective README files.

1.  [Calculate the average height of a set of persons](questions/1-calcAvgHeight/README.md)
2.  [Count occurences of an item in nested arrays](questions/2-numberOfItems/numberOfItems.test.js)
3.  [Modify a function's return behavior](questions/3-wrap/wrap.test.js)
4.  [Fetch data](questions/4-getRepoCreatedAt/README.md)

Each function is provided with set of unit tests. Your solutions should pass all tests.

To run the tests:

```bash
cd questions
yarn test # runs all tests
yarn test 1-calcAvgHeight/calcAvgHeight.test.js # runs test for a specific file
```

### What we're looking for

We want to see you write good code. For us this means: code that works reliably and is easy to understand.

## Part 2: Simple React Application

![A screenshot of the mobile and desktop designs](./design@2x.png)

For the second part of the coding challenge, we would like you to build a simple React app that is similar to our [Search Results Page](https://wunderflats.com/en/furnished-apartments/berlin).

Please build upon the barebones React application which was scaffolded with [create-react-app](https://github.com/facebook/create-react-app). You can find it in the `react-app` folder in this repository.

To query the data for the app, please use the `GET https://wunderflats-api.glitch.me/listings` endpoint. You can find documentation for this endpoint in the [API.md file](./API.md) in case you need it.

🚨 The endpoint will randomly return errors (5% chance), make sure to handle them correctly!

You can find the design and all relevant measurements, assets and notes in the [Figma file](./design.fig). This file can viewed with [Figma](https://www.figma.com/).

### What we're looking for

-   **Good code.** Code that works reliably and is easy to understand.
-   **Correct implementation.** Make sure the [design](./design.fig) is implemented correctly and please follow the sticky note in the design file.
-   **Frontend expertise.** Show us that you know how to use React effectively and don't neglect the HTML/CSS part. Think about different devices, their screen sizes, input methods, network conditions. Think about how impaired users and search engines might find the page accessible.
-   **Build your components from scratch.** Please do not use any third-party components for this project.
-   **Brief documentation.** Please edit `react-app/README.md` and briefly document your approach.

### What we're not looking for

-   **Don't worry about old browsers.** You can use modern features like CSS Grid and native lazy loading.
-   **You don't need to go crazy in terms of componentization.** No need to create so many files. Instead, show us how components and files help you with separation of concerns where it makes sense, and how to keep the codebase sane relative to the size of the project.
-   **Redux skills.** The state for this project is simple. Please don't use any third-party state management libraries like Redux or MobX.

---

Thanks for taking the time to take part in our frontend interview process.

Good luck with the coding challenge. We look forward to seeing your solutions!

---

<small>Downloaded from `https://wunderflatsng.blob.core.windows.net/artefacts/frontend-interview/frontend-interview-master.zip`</small>
