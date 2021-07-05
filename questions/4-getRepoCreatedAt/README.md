# getRepoCreatedAt

Write a function `getRepoCreatedAt` which gets the creation date of a repository on GitHub. The function takes two arguments, `owner` and `repo`, and returns a promise which resolves to the creation date of the repo as a string, in `YYYY-MM-DD` format.

## Example:

```js
getRepoCreatedAt('facebook', 'react').then(console.log)
// Outputs "2013-05-24"
```

Helpful resources:

-   [fetch on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
-   [`node-fetch`](https://github.com/node-fetch/node-fetch), which we are using in this exercise.
-   [GitHub API](https://docs.github.com/en/rest/reference/repos#get): docs for getting info on a repo
