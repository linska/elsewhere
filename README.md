# Elsewhere

A file-sharing application built with Next.js.

Users can upload and organize files and folders, generate sharing links, and manage their uploaded files. Anonymous file uploads are supported through guest sessions.

## Tech Stack

- Next.js
- React
- TypeScript
- SCSS Modules
- PostgreSQL
- Prisma

## Getting Started

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER@localhost:5432/elsewhere"
```

### Database setup

Generate Prisma Client:

```bash
npm run db:generate
```

Apply database migrations:

```bash
npm run db:migrate
```

### Run the application

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Database

The application uses PostgreSQL with Prisma ORM.

Current core entities:

- `User` — registered or anonymous user
- `Folder` — user-owned collection of files
- `File` — metadata for an uploaded file

Uploaded file contents are not stored directly in PostgreSQL. The database stores file metadata and references to external file storage.

## Status

Work in progress.

### [Figma design](https://www.figma.com/design/1Gjt6RBliMQ2RlPJHv7rbT/Anna-Sorotiuk---Transfer-Service---Elsewhere?node-id=822-12471&t=tUgC2hTQeWQv2HkD-1)