# vs-code-bug-45152-mocha-require
Update to 1.21 breaks mocha require

# Reproduction Steps
Follow these steps to reproduce the problem:

1. Install application dependencies with `npm i`
2. In VS Code version 1.21.0, Navigate to and open the `test/spec/index.spec.js` file
3. From the debug perspective, choose the `Test Spec` launch configuration
4. Press F5 to launch with the `test/spec/index.spec.js` file open
5. Observe the error: `Error: Invalid Chai property: calledOnce`
6. Downgrade to version 1.19.1 and replay same steps and observe the error does not occur
