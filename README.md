
# 📰 Personal Blog Application

## 🌟 Overview

This is the backend for the Blog App built with Node.js and Express. It provides API endpoints to handle the CRUD operations for managing blog posts. MongoDB is used as the database with Mongoose for schema definition.






## ✨ Features

- **📝 Create Post**: Add a new blog post with a title and content.
- **📖 Read Posts**: Fetch all posts or a single post by ID.
- **✏️ Update Post**: Modify the title or content of an existing post.
- **🗑️ Delete Post**: Remove a post from the database.
- **⏰ Timestamps**: Automatically track the creation and update times of posts.



## 🛠️ Technologies Used

- **🔙 Backend:** Node.js, Express
- **💾 Database:** MongoDB
- **🔑 Authentication:** JSON Web Tokens (JWT)
- **📧 Email Service:** Nodemailer
- **🛡️ Password Encryption:** Bcrypt.js
- **🌐 Cross-Origin Requests:** CORS
- **🗂️ File Uploads:** Multer
- **🔄 Auto-restart in Development:** Nodemon
- **🔧 Configuration Management:** Dotenv
- **🍪 Cookie Handling:** Cookie-parser

## 📦 Dependencies

Here’s a list of all the dependencies used in this project along with their versions:

```bash{
  "bcryptjs": "^2.4.3",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.21.1",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.7.1",
  "multer": "^1.4.5-lts.1",
  "nodemailer": "^6.9.15",
  "nodemon": "^3.1.7"
  ```


## 🚀 Setup and Installation

Clone the project

```bash
  git clone https://github.com/MaulikPatel63/Personal_Blog_App
```

Go to the project directory

```bash
  cd Personal_Blog_App/backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

API will be available at:

```bash
  http://localhost:5000
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`=`<MONGO_URI>`

`PORT`=`<Your_Port`

`JWT_SECRET`=`<Your_Secret>`


## API Reference

#### User Signup

```http
  POST /api/v1/auth/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your username |
| `email` | `string` | **Required**. Your email |
| `password` | `string` | **Required**. Your password |

#### User Signup

```http
  POST /api/v1/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email |
| `password` | `string` | **Required**. Your password |

#### Create Blog

```http
  POST /api/v1/blog/blog-add
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Your title |
| `content` | `string` | **Required**. Your content |
| `cat` | `string` | **Required**. Your cat |
| `user` | `string` | **Required**. user id |

#### Get All Blog

```http
  GET /api/v1/blog/blog-get
```

| Parameter | Description |
| :-------- ||:-------------------------------- |
| `token` | **Required**. token from cookies |

#### Get All Blog

```http
  GET /api/v1/blog/blog-get-cat/${cat}
```

| Parameter | Description |
| :-------- ||:-------------------------------- |
| `car` | **Required**. cat to fetch specific categories data |
| `token` | **Required**. token from cookies |

#### Get Blog By ID

```http
  GET /api/v1/blog/blog-get/${id}
```

| Parameter | Description |
| :-------- ||:-------------------------------- |
| `id` | **Required**. id to fetch specific Blog data |
| `token` | **Required**. token from cookies |


#### Delete Blog By ID

```http
  GET /api/v1/blog/blog-delete/${id}
```

| Parameter | Description |
| :-------- ||:-------------------------------- |
| `id` | **Required**. id to delete specific Blog data |
| `token` | **Required**. token from cookies |


## 🌐 Deployment

The backend is deployed on Vercel.

- **Live Backend URL :** [https://personal-blog-app-backend-mauve.vercel.app/](https://personal-blog-app-backend-mauve.vercel.app/)

