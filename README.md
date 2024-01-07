## Problem: Asynchronous Product Catalogue Transformation

## Background

You are developing a feature for an e-commerce platform that involves transforming product data from multiple suppliers. Each supplier provides their product data in a unique format. Your task is to asynchronously fetch data from each supplier, transform it into a standardized format, and then combine the results.

## Task

**Asynchronous Data Fetch:** Implement functions to simulate fetching data from three different suppliers. Each function should return data in a unique format, representing the diverse data structures used by each supplier.

**Data Transformation Function:** Create a function transformProductData that takes the supplier-specific product data as input and converts it into a standardized format.

**Data Aggregation Function:** Implement a function aggregateProducts that fetches data from all suppliers, transforms it using transformProductData, and then combines it into a single array.

**Error Handling:** Ensure robust error handling in case any supplier data fetch fails.

**Types and Interfaces:** Define types and interfaces for both the supplier-specific and standardized product data formats.

**Testing:** Write test cases to demonstrate that your transformation and aggregation logic works correctly.

## Requirements

- Use an explicitly typed language for the implementation.
- Simulate asynchronous data fetch using async functions with mock data.
- Ensure your code is well-organized and follows best practices for readability and maintainability.