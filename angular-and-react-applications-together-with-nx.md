---
description: >-
  NX let’s build two applications (one in Angular, and one in React) that will
  use a library of shared web components
---

# Angular & React Applications Together With Nx

## What is Nx

Nx is a set of Angular CLI power-ups for modern development. With Nx, you can:

* Use modern tools like Cypress and Jest
* Build full-stack applications and share code between the backend and the frontend
* Use effective development practices pioneered at Google

### Creating a New Nx Workspace

Let’s start by creating a new Nx workspace. The easiest way to do this is to use npx.

```yaml
npx --ignore-existing create-nx-workspace happynrwl --preset=empty
```

### Creating an Angular Application

 An empty workspace has no application or libraries: nothing to run and nothing to test. Let’s add an Angular application into it by running `ng g app angularapp --framework=angular.`

