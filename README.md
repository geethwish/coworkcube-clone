# Next.js Project Installation Guide

## Using Yarn

### 1. Install Yarn (if not already installed)

First, you need to install Yarn. If you already have Yarn installed, you can skip this step. You can install Yarn by following the instructions on the [official Yarn installation page](https://classic.yarnpkg.com/en/docs/install).

For macOS:

```bash
brew install yarn
```

For Windows, you can download the installer from the [Yarn website](https://classic.yarnpkg.com/en/docs/install#windows-stable).

### 2. Create a new Next.js project

Open your terminal and run the following command to create a new Next.js project using Yarn:

```bash
yarn create next-app my-next-app
```

This will create a new directory called `my-next-app` with a basic Next.js project structure.

### 3. Navigate to the project directory

```bash
cd my-next-app
```

### 4. Start the development server

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see your new Next.js app in action.

## Using npm

### 1. Install Node.js and npm

Next.js requires Node.js and npm. If you don't have them installed, you can download and install them from the [official Node.js website](https://nodejs.org/).

To check if you have Node.js and npm installed, you can run:

```bash
node -v
npm -v
```

### 2. Create a new Next.js project

Open your terminal and run the following command to create a new Next.js project using npm:

```bash
npx create-next-app@latest my-next-app
```

This will create a new directory called `my-next-app` with a basic Next.js project structure.

### 3. Navigate to the project directory

```bash
cd my-next-app
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see your new Next.js app in action.

## Summary

- To create a Next.js project using Yarn:

  1. Install Yarn.
  2. Run `yarn create next-app my-next-app`.
  3. Navigate to the project directory: `cd my-next-app`.
  4. Start the development server: `yarn dev`.

- To create a Next.js project using npm:
  1. Ensure Node.js and npm are installed.
  2. Run `npx create-next-app@latest my-next-app`.
  3. Navigate to the project directory: `cd my-next-app`.
  4. Start the development server: `npm run dev`.

Both methods will set up a new Next.js project and start a development server on `http://localhost:3000`.

<h6>
    Author : Geeth Wishkamal
</h6>
