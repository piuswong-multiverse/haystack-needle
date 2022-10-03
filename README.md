# haystack-needle
A small project to demonstrate loops and test-driven development with Jest.
## Running
* Run with ``npm start``
* Uses ``nodemon`` to continuously monitor dev changes.
## Testing
* Test with ``npm test``
* Shortcut for ``jest --watchAll`` to continuously monitor dev changes and test results.
## Purpose:
1. Practice using loops in JS, Bootcamp Month 1, Week 2, Activate work: https://app.codingrooms.com/app/course/bootcamp-part-1-%255Bswe-open-us-april-22%255D-VTZwoCN/b/b5512ef6-270b-4524-8123-996de41fa4e0
2. Demonstrate development using test-driven development (TDD) strategies and best-practices for the Jest test framework: https://jestjs.io/
    * Check the commit history of this repo to track development of the project according to the test-driven development (TDD) general strategy of writing one (or a few) key tests first corresponding to a specific prioritized design spec/requirement/constraint (a **unit test**), and then developing the code to pass that test.  You can go through commits to go on to the next spec/requirement/constraint, corresponding test, and corresponding code to pass the test.  All old tests should still pass (performing **regression testing**). If new code breaks any previous code, all tests should pass again before continuing new development.
    * Include expected failure cases as well as success cases.
    * Separate tests for different components into different files, if applicable.
    * Group related tests together with ``describe``; use ``beforeAll``, ``beforeEach``, ``afterAll``, and ``afterEach`` to account for common code before or after these groups of tests or individual tests.
    * Write your tests using readable English, e.g.:
        * ``test('if this thing works', () => {...})``
        * ``it('should find more than one matching character', () => {...})``
    * Include "negative testing" cases, or cases where inputs are outside the scope of what's expected, but which are still possible, e.g. searching for numbers and special characters in this project, or searching for longer strings in a smaller string.
    * Test outputs given inputs (A gives B), not implementation logic (how A gives B).