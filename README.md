[![Deployment Pipeline](https://github.com/CesarGarces/crypto-tracker/actions/workflows/pipeline.yml/badge.svg)](https://github.com/CesarGarces/crypto-tracker/actions/workflows/pipeline.yml)

# Cryptocurrency Project

This project focuses on providing information about cryptocurrencies and uses Next.js for its development. It incorporates various practices and technologies, such as FLUX framework, SOLID, singleton hook, Redux, split code, lazy loading, infinite scrolling, atomic design, and testing.

## Featured Features

- **FLUX structure**: The project follows a FLUX architecture pattern to manage the state of the application.

- **SOLID**: Adhere to SOLID principles to write more maintainable and scalable code.

- **Singleton Hook**: Uses singleton hook to share logic between components.

- **Redux**: Redux is used to manage global state.

- **Split code**: The code is divided into small modules that are dynamically loaded as needed, improving loading efficiency and speed.

- **Infinite Scroll**: Implements infinite scroll functionality to load more data as the user scrolls.

- **Atomic Design**: Follows atomic design for efficient organization and utilization of components.

- **Testing**: Tests are included to ensure the quality and reliability of the code.

- **[CI/CD]**: Integrated continuous integration and continuous deployment

vercel url [https://crypto-tracker-weld.vercel.app/](https://crypto-tracker-weld.vercel.app/) to see the result.

## Config

Below are the steps to configure and run the project locally:

1. **Cone repository**:

```bash
git https://github.com/CesarGarces/crypto-tracker.git 
cd crypto-tracker
npm install
# or
pnpm install

```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
pnpm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run test
```bash
npm run test
# or
pnpm run test

```