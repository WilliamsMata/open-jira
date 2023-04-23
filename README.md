# Next.js OpenJira App

To run locally, the database is needed

```
docker-compose up -d
```

- The -d means **detached**

Local MongoDB URL:

```
mongodb://localhost:27017/entriesdb
```

## **Rebuild Node modules and start Next**

```
yarn install
yarn dev
```

## **Set environment variables**

Rename the file **.env.template** to: **.env**

## **Rename the file .env.template to: .env**

**Call:**

```
http://localhost:3000/api/seed
```

This will populate the database with some sample projects, users and entries.

The app runs on:

```
http://localhost:3000
```

And the API endpoints are on:

```
http://localhost:3000/api/***
```
