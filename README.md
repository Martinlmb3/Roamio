<div align="center">
  <img src="frontend/public/Roamio-logo.svg" alt="Roamio Logo" width="400">
</div>

<p align="center">A modern travel booking platform offering seamless flight and accommodation booking experiences.</p>

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Google OAuth](https://img.shields.io/badge/Google_OAuth-DB4437?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/identity)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/)
[![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

</div>

---

## Features

- **Flight Search**: Search and compare flights
- **Accommodation Booking**: Find and book hotels and unique stays
- **Multiple Payment Options**: Secure payments via PayPal and Stripe
- **Secure Authentication**: JWT-based auth with OAuth 2.0 (Google)
- **Responsive Design**: Mobile-first approach with modern UI
- **Booking Management**: Track and manage your travel bookings
- **Deals**: Browse curated travel deals and discounts

## Tech Stack

### Frontend
- **Framework**: Angular 20
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build**: Angular CLI

### Backend
- **Framework**: Spring Boot 4.0.6
- **Language**: Java 25
- **Authentication**: JWT + OAuth 2.0
- **Security**: Spring Security
- **ORM**: Spring Data JPA + Hibernate
- **Migrations**: Flyway
- **Build Tool**: Gradle

### Database
- **PostgreSQL**

### External Services
- Skyscanner API — flight search
- PayPal & Stripe — payment processing
- Google OAuth 2.0 — authentication

## Project Structure

```
Roamio/
├── frontend/                        # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── pages/               # Route-level components
│   │   │   │   ├── home/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── flight-search-results/
│   │   │   │   ├── flight-booking-step1/
│   │   │   │   ├── flight-booking-step2/
│   │   │   │   ├── hotel-search-results/
│   │   │   │   ├── hotel-booking/
│   │   │   │   ├── payment/
│   │   │   │   ├── my-trips/
│   │   │   │   ├── deals/
│   │   │   │   ├── profile/
│   │   │   │   ├── login/
│   │   │   │   └── sign-up/
│   │   │   ├── shared/
│   │   │   │   ├── header/
│   │   │   │   └── footer/
│   │   │   ├── app.routes.ts
│   │   │   └── app.config.ts
│   │   ├── styles.css
│   │   └── main.ts
│   ├── public/
│   ├── angular.json
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                         # Spring Boot API
│   ├── src/
│   │   └── main/
│   │       ├── java/com/roamio/api/
│   │       │   ├── user/
│   │       │   ├── booking/
│   │       │   ├── flight/
│   │       │   ├── flightbooking/
│   │       │   ├── fareoption/
│   │       │   ├── farefeature/
│   │       │   ├── passenger/
│   │       │   ├── hotel/
│   │       │   ├── hotelbooking/
│   │       │   ├── hotelamenity/
│   │       │   ├── room/
│   │       │   ├── deal/
│   │       │   ├── destination/
│   │       │   └── exception/
│   │       └── resources/
│   │           └── application.properties
│   ├── build.gradle
│   └── gradlew
│
└── Roami_relations_table.drawio     # Database ERD
```

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Java 25
- PostgreSQL
- Gradle

### Frontend

```bash
cd frontend
npm install
ng serve
```

Available at `http://localhost:4200`

### Backend

```bash
cd backend
./gradlew bootRun
```

Available at `http://localhost:8080`

### Environment Variables

Create a `.env` file inside `backend/`:

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=roamio
DB_USERNAME=postgres
DB_PASSWORD=your_password
JWT_SECRET_KEY=your_jwt_secret
JWT_EXPIRATION_TIME=3600000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## API Endpoints

### Authentication
- `POST /api/auth/register` — Register
- `POST /api/auth/login` — Login
- `POST /api/auth/verify` — Verify email
- `GET /api/auth/oauth2/google` — Google OAuth

### Flights
- `GET /api/flights/search` — Search flights
- `GET /api/flights/{id}` — Flight details
- `POST /api/flights/book` — Book a flight

### Hotels
- `GET /api/hotels/search` — Search hotels
- `GET /api/hotels/{id}` — Hotel details
- `POST /api/hotels/book` — Book a hotel

### Bookings
- `GET /api/bookings` — User bookings
- `GET /api/bookings/{id}` — Booking details
- `DELETE /api/bookings/{id}` — Cancel booking

### Payments
- `POST /api/payments/paypal/create` — Create PayPal payment
- `POST /api/payments/stripe/create` — Create Stripe payment intent

## Database Schema

See `Roami_relations_table.drawio` for the full ERD. Key entities:

| Table | Description |
|---|---|
| `users` | User profiles and credentials |
| `booking` | Master booking record |
| `flight` | Flight listings |
| `flight_booking` | Flight-specific booking details |
| `passenger` | Passengers per flight booking |
| `fare_option` | Fare tiers per flight |
| `fare_feature` | Features included in each fare |
| `hotel` | Hotel listings |
| `hotel_booking` | Hotel-specific booking details |
| `room` | Rooms per hotel |
| `hotel_amenity` | Amenities per hotel |
| `destination` | Travel destinations |
| `deal` | Promotional deals |
| `user_preferences` | Notification preferences |

## Development

### Frontend
```bash
cd frontend
ng serve          # Dev server
ng build          # Production build
ng test           # Unit tests
ng lint           # Linting
```

### Backend
```bash
cd backend
./gradlew bootRun          # Start with hot reload
./gradlew test             # Run tests
./gradlew clean build      # Build JAR
```

---

## Author

**Martin Lumumba**
- GitHub: [@Martinlmb3](https://github.com/Martinlmb3)

---

*Roamio — Your journey begins here.*
