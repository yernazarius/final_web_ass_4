# PharmacyStore

PharmacyStore is an e-commerce web application tailored for a pharmacy store, offering a seamless online shopping experience for pharmaceutical products.

## Technologies Used

- **Backend**: Express.js
- **Frontend**: React with Vite
- **Database**: MongoDB Atlas
- **Authentication**: Google OAuth API, email & password
- **Email Service**: SMTP API (sandbox.smtp.mailtrap.io)

## Important Note

The Google OAuth API is configured for local development only and is not set up for production due to certain limitations. However, the implementation can be found in the server folder for review or further development.

## Getting Started

Follow these steps to run PharmacyStore on your local machine:

1. **Set up the server**:
    ```bash
    cd server
    npm i
    npm run data:import
    npm start
    ```
2. **Set up the client**:
    ```bash
    cd ..
    cd client
    npm i
    npm run dev
    ```

After completing the above steps, the front-end will be available at [http://localhost:3000](http://localhost:3000).

## Admin Account

To access the admin panel, use the following credentials:

- **Name**: Yernazar
- **Email**: admin@admin.com
- **Password**: admin (Note: This is hashed using bcrypt with a salt of 10 rounds)
- **isAdmin**: true
