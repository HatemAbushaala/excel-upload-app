# excel-upload-mapping

Note: This project is for learning purposes only and is not a complete, production-ready application.

## Problem Statement

Uploading data from an Excel sheet to a database requires writing code to match the attribute names on the Excel sheet with the attribute names as defined in the database.

## Solution

The solution to this problem is an application that maps data from an Excel sheet to a format accepted by a backend server. This application allows users to easily upload an Excel sheet containing data and maps the data to a specific format that the backend server expects. The mapped data can then be sent to the backend server for further processing.

This application simplifies the process of uploading data from an Excel sheet to a database and reduces the time and effort required to do so.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running npm install in the project directory.
3. Run the application by running npm run dev in the project directory.
4. Open your browser and navigate to http://localhost:3000.

## Usage

To use this application, follow these steps:

1. Click the "Choose File" button to select an Excel sheet containing data.
2. The application will ask you to map the attributes in the Excel sheet to the fields in the backend server's format. For example, if your Excel sheet contains name, price, and qty attributes, the application will ask you to map those attributes to name, price, and quantity fields.
3. Click the "Upload" button to upload the Excel sheet.
4. The Server will return the mapped data as json array
