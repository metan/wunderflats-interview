# wrap

Write a wrap function that takes a function `execute` as an argument and returns a modified function so that the following requirements are met:

-   Any result returned by the function `execute` should be returned from the modified function unchanged.
-   If the function execute throws an error, the modified function should return `null`.
-   After the function execute has thrown an error, its future invocations should be prevented and `null` should be returned.
-   Multiple wrapped functions can coexist.

## Example:

```js
const errorExec = wrap(function () {
	throw new Error('Error')
})
const resultExec = wrap(function () {
	return 'Result'
})
console.log(errorExec && errorExec()) // Outputs null
console.log(resultExec && resultExec()) // Outputs "Result"
```
