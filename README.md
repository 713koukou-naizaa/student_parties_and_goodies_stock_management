# Events and Goodies Stock Management Project with Angular and Laravel

This project ABC

## Project Overview

This application ABC

## Exercise Instructions

### 📌 Contexte

### 🎉 Sujet du Mini Projet - Gestion des Soirées Étudiantes & Stock de Goodies

Un bureau des étudiants (BDE) souhaite développer une application interne pour gérer l’organisation des soirées étudiantes ainsi que la distribution de goodies aux participants.

L’application doit permettre aux membres du BDE de :

- Consulter la liste des soirées étudiantes organisées (thème, lieu, date, prix, etc.).
- Gérer les réservations des étudiants pour ces soirées.
- Gérer un stock de goodies à distribuer aux participants (bracelets, t-shirts, stickers, etc.).

L’application est destinée à une gestion interne, mais pourrait évoluer vers une version accessible aux étudiants pour leurs réservations.

### 🛠️ Technologies imposées

- **Backend API** : Laravel
- **Frontend Web** : Angular

### 📋 Travail demandé

Vous devez développer la partie Angular et Laravel de l’application permettant :

- ✔ L’affichage de la liste des soirées étudiantes prévues (nom, date, lieu, etc.).
- ✔ La consultation et la gestion des réservations enregistrées.
- ✔ L’ajout manuel d’une nouvelle réservation pour un étudiant.
- ✔ La gestion du stock de goodies disponibles (ajout, suppression, mise à jour des quantités).
- ✔ *(Optionnel - Bonus)* : La modification ou l’annulation d’une réservation.

### 🗂️ Structure des données (Fichier JSON)

### 🎊 Soirée Étudiante

- **Nom de l’événement** : (ex. : Soirée Fluo, Bal de Promo, Soirée Années 90)
- **Lieu** : (ex. : Nom du club, salle des fêtes, campus)
- **Date et heure**
- **Prix d’entrée**
- **Capacité maximale**
- **Thème** : (Fluo, Déguisé, Chic, etc.)

### 📝 Réservation

- **Nom de l’étudiant**
- **Email de l’étudiant**
- **Numéro de téléphone**
- **Nom de la soirée réservée**
- **Date de réservation**
- **Statut de la réservation** : (Confirmée, En attente, Annulée)
- **Goodies attribués** : (ex. : 1 bracelet, 1 t-shirt)

### 🎁 Stock de Goodies (Bonus)

- **Nom du goodie** : (ex. : Bracelet, T-shirt, Sticker, Casquette)
- **Quantité disponible**
- **Description**
- **Coût unitaire estimé** : (optionnel)

### 🎨 Contraintes et recommandations

- ✅ Interface ergonomique et intuitive (Bootstrap ou autre framework CSS facultatif).
- ✅ Recherche et filtrage des soirées, réservations et goodies.
- ✅ Gestion simple et fluide du stock (ajout, mise à jour, suppression).

### 📅 Livraison du projet

Le projet doit être soumis sous la forme d’une archive zip (*sans `node_modules` et après `ng cache clean`*).

**Date limite de rendu** : Vendredi 4 avril 2025 en fin de séance.

## Project Structure

The project is organized as follows:

```bash
student_parties_and_goodies_stock_management/
├── backend/                          # Laravel backend
│   ├── app/                          # Application logic
│   │   ├── Http/                     # Controllers, Middleware, etc.
│   │   ├── Models/                   # Eloquent models
│   │   ├── Services/                 # Business logic services
│   ├── database/                     # Database migrations and seeders
│   ├── routes/                       # API and web routes
│   │   ├── api.php                   # API routes
│   │   ├── web.php                   # Web routes (if needed)
│   ├── public/                       # Publicly accessible files
│   ├── resources/                    # Blade templates (if needed)
│   ├── storage/                      # File storage
│   ├── .env                          # Environment configuration
│   ├── composer.json                 # PHP dependencies
│   ├── artisan                       # Laravel CLI
│   └── server.php                    # Laravel server entry point
├── frontend/                         # Angular frontend
│   ├── src/                          # Source code for the Angular application
│   │   ├── app/                      # Angular application logic
│   │   │   ├── components/           # Angular components
│   │   │   │   ├── events/           # Events component
│   │   │   │   ├── reservations/     # Reservations component
│   │   │   │   └── goodies-stock/    # Goodies stock component
│   │   │   │   └── navbar/           # Navbar component
│   │   │   │   └── home/             # Home component
│   │   ├── services/                 # Angular services for API calls
│   │   ├── models/                   # Data models for the application
│   │   ├── app-routing.module.ts     # Application routing module
│   │   ├── app.module.ts             # Root Angular module
│   │   └── app.component.ts          # Root Angular component
│   ├── assets/                       # Static assets (e.g., JSON data)
│   │   └── data/                     # Directory for data files
│   │       ├── events.json           # JSON file for events data
│   │       ├── reservations.json     # JSON file for reservations data
│   │       └── goodies.json          # JSON file for goodies data
│   ├── environments/                 # Environment-specific configurations
│   ├── index.html                    # Main HTML file
│   ├── main.ts                       # Main entry point for Angular
│   ├── styles.scss                   # Global styles
│   ├── angular.json                  # Angular CLI configuration
│   ├── package.json                  # Node.js dependencies
│   └── tsconfig.json                 # TypeScript configuration
├── README.md                         # Project documentation
├── .gitignore                        # Git ignore file
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (vx or later)
- **Angular CLI** (vx or later)
- **npm** (vx or later)
- **Composer** (vx or later)
- **PHP** (vx or later)
- **MySQL** (vx or later)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/713koukou-naizaa/student_parties_and_goodies_stock_management.git
   cd student_parties_and_goodies_stock_management
   ```

2. **Set up the backend (Laravel):**

   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan serve
   ```

   Don't forget to update the `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` values in the `.env` file.

   The Laravel backend will be accessible at `http://localhost:8000`

3. **Set up the frontend (Angular):**

   ```bash
   cd ../frontend
   npm install
   ng serve
   ```

   The Angular frontend will be accessible at `http://localhost:4200/`.

4. **Build for production:**

   ```bash
   ng build --prod
   ```

5. **Copy build artifacts to backend:**

   ```bash
   cp -r dist/frontend/* ../backend/public/
   ```

6. **Access the application:**

   Open your web browser and navigate to `http://localhost:4200/` to access the application.
