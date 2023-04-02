# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### Let me explain why I made these changes:

- I moved the constants outside the function to make them easier to read and understand.

- I created two new functions (`hash` and `stringify`) to break down the logic into smaller, more manageable pieces. This makes it easier to reason about what the function is doing and helps prevent bugs caused by nested if statements.

- I used default function parameters to set a default value for event in case it is not provided.

- I used the `||` operator to simplify the logic. If `event.partitionKey` exists, it will be used as the candidate. Otherwise, the `hash(stringify(event))` will be used as the candidate. If both are falsy, the      `TRIVIAL_PARTITION_KEY` will be used as the candidate.

- Finally, I used the `slice` method to ensure that the candidate is no longer than `MAX_PARTITION_KEY_LENGTH` characters.

I believe this version is more readable because it breaks down the logic into smaller, more manageable pieces, uses default function parameters, and simplifies the logic with the `||` operator. It also makes it clear what the function is doing at each step, and makes it easier to reason about the code.
