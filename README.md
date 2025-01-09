# Unexpected String Concatenation in JavaScript Function Arguments

This repository demonstrates a common JavaScript bug related to unexpected string concatenation when using the + operator with function arguments.  The `bug.js` file contains the buggy code, while `bugSolution.js` offers a solution.

## Bug Description

The bug arises from the implicit type coercion in JavaScript. If the function `foo` receives non-numeric arguments, the + operator will perform string concatenation rather than numerical addition.  This can result in incorrect output and hard-to-debug errors.

## Solution

The solution involves explicitly checking the type of the function arguments and handling non-numeric inputs appropriately (e.g., by converting them to numbers or throwing an error).