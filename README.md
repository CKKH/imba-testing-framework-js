Imba Testing Framework
=====================
A custom testing framework built in the style of Jasmine for Javascript TDD

## Examples
-----------
Cloning this repository and viewing the example setup/tests is recommended.
Form your project directory execute the following commands:

```
git clone git@github.com:CKKH/imba-testing-framework-js.git
cd imba-testing-framework
```
To run the example tests:
- execute  `open -a "Google Chrome" index.html` in the root of the directory.
- Replace "Google Chrome" with your chosen broswer.
- Once your browser loads, open its DevTools and navigate to the console tab to see
the example tests running.

Try changing the expectations in SquareSpec.js and see what happens to the test
results in your browser to gain a better understanding of functionality.

## Setup
--------
The directory and file structure is as follows:

```
.
|
|___README.md
|
|___SpecRunner.html
|
|___lib
|   |
|   |__ImbaTestingFramework.js
|
|___spec
|   |
|   |___SquareSpec.js
|
|___src
    |
    |___Square.js
```

Your file structure should be the same, otherwise you will need to customise
the paths to directories/folders in SpecRunnerHtml.

When using your own files, update the following sections of SpecRunnerHTML
accordingly with the paths and names of specs and scripts files:

```
  <!-- production code to be tested -->
  <script type="text/javascript" src="src/Square.js"></script>

  <!-- Include paths your spec files below  -->
  <script type="text/javascript" src="spec/SquareSpec.js"></script>
```

## Matcher
----------
The following matchers are included:
- ToEqual
- ToThrowError
- ToContain

Examples of how to implement each are in `SquareSpec.js`

## Further Development
----------------------
The following features are to be developed:
- BeforeEach
- InstanceOf
- toBeTruthy

## Support
----------
- Contact CKKH for support
