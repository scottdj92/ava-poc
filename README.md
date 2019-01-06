# ava-poc
a POC for writing tests with AVA

## Reasoning
I wanted to find a test runner that could run tests concurrently and enable parallelism (multiple functions running in parallel)

## Thoughts
* Ava.js works pretty well with TS, some configuration required, but no compilation needed. This is a plus.
* Writing tests is pretty simple after reading the docs. I like the `.is` assertion
* Errors are clean and obvious in the terminal on both windows and OS X
* Ava.js is useful for large amounts of tests that can be cut down on time by running concurrently

