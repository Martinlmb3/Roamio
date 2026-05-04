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
[![Amadeus](https://img.shields.io/badge/Amadeus-003580?style=for-the-badge&logo=amadeus&logoColor=white)](https://developers.amadeus.com/)

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

- **Framework**: Spring Boot 3.4.5
- **Language**: Java 21
- **Authentication**: JWT + OAuth 2.0
- **Security**: Spring Security
- **ORM**: Spring Data JPA + Hibernate
- **Migrations**: Flyway
- **Build Tool**: Gradle

### Database

- **PostgreSQL**

### External Services

- **Amadeus API** — real-time flight search & pricing
- **PayPal & Stripe** — payment processing
- **Google OAuth 2.0** — authentication

## Amadeus API Integration

Roamio uses the [Amadeus Self-Service API](https://developers.amadeus.com/) for real-time flight data. All calls are made server-side (Spring Boot) — the API key is never exposed to the frontend.

> **Sandbox base URL**: `https://test.api.amadeus.com`  
> **Production base URL**: `https://api.amadeus.com`

### Authentication

Amadeus uses OAuth 2.0 client credentials. The backend fetches and refreshes the token automatically.

```
POST /v1/security/oauth2/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id={AMADEUS_CLIENT_ID}
&client_secret={AMADEUS_CLIENT_SECRET}
```

Returns a `Bearer` token to include in all subsequent requests.

### Endpoints Used

| Method | Endpoint                             | Description                                        |
| ------ | ------------------------------------ | -------------------------------------------------- |
| `GET`  | `/v2/shopping/flight-offers`         | Search available flights with real-time prices     |
| `POST` | `/v1/shopping/flight-offers/pricing` | Confirm and lock the price before booking          |
| `GET`  | `/v1/reference-data/locations`       | Airport/city autocomplete (used in the search bar) |

#### Flight Search — key parameters

| Parameter                 | Example      | Description                    |
| ------------------------- | ------------ | ------------------------------ |
| `originLocationCode`      | `BRU`        | IATA code of departure airport |
| `destinationLocationCode` | `CDG`        | IATA code of arrival airport   |
| `departureDate`           | `2026-06-01` | Departure date (YYYY-MM-DD)    |
| `adults`                  | `1`          | Number of adult passengers     |
| `currencyCode`            | `EUR`        | Currency for returned prices   |
| `max`                     | `20`         | Max number of offers returned  |

#### Flow

```
Angular search form
  → GET /api/flights/search (Spring Boot)
      → GET /v2/shopping/flight-offers (Amadeus)
  → User selects a flight
  → POST /api/flights/price (Spring Boot)
      → POST /v1/shopping/flight-offers/pricing (Amadeus)
  → Proceed to booking
```

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
│   │   ├── main/
│   │   │   ├── java/com/roamio/api/
│   │   │   │   ├── user/
│   │   │   │   ├── userpreferences/
│   │   │   │   ├── booking/
│   │   │   │   ├── flight/
│   │   │   │   ├── flightbooking/
│   │   │   │   ├── fareoption/
│   │   │   │   ├── farefeature/
│   │   │   │   ├── passenger/
│   │   │   │   ├── hotel/
│   │   │   │   ├── hotelbooking/
│   │   │   │   ├── hotelamenity/
│   │   │   │   ├── room/
│   │   │   │   ├── deal/
│   │   │   │   ├── destination/
│   │   │   │   ├── country/
│   │   │   │   ├── airport/
│   │   │   │   ├── amadeustoken/
│   │   │   │   ├── flightsearchcache/
│   │   │   │   ├── jwtrefreshtoken/
│   │   │   │   ├── oauthaccount/
│   │   │   │   └── exception/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   │       └── java/com/roamio/api/
│   │           ├── fareoption/
│   │           ├── flight/
│   │           ├── flightbooking/
│   │           ├── flightsearchcache/
│   │           ├── hotel/
│   │           ├── hotelamenity/
│   │           ├── hotelbooking/
│   │           ├── jwtrefreshtoken/
│   │           ├── oauthaccount/
│   │           ├── passenger/
│   │           ├── room/
│   │           ├── security/
│   │           ├── user/
│   │           ├── userpreferences/
│   │           └── integration/
│   ├── build.gradle
│   └── gradlew
│
└── Roamio_relations_table.drawio     # Database ERD
```

## Installation & Setup

### Prerequisites

- Node.js 18+ and npm
- Java 21
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
AMADEUS_CLIENT_ID=your_amadeus_client_id
AMADEUS_CLIENT_SECRET=your_amadeus_client_secret
AMADEUS_BASE_URL=https://test.api.amadeus.com
```

> Get your Amadeus credentials at [developers.amadeus.com](https://developers.amadeus.com/). The sandbox is free and doesn't require a credit card.

## API Endpoints

### Authentication

- `POST /api/auth/register` — Register
- `POST /api/auth/login` — Login
- `POST /api/auth/verify` — Verify email
- `GET /api/auth/oauth2/google` — Google OAuth

### Flights

- `GET /api/flights/search` — Search flights (proxies Amadeus flight-offers)
- `POST /api/flights/price` — Confirm flight price (proxies Amadeus pricing)
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

See `Roamio_relations_table.drawio` for the full ERD. Key entities:

| Table                 | Description                                        |
| --------------------- | -------------------------------------------------- |
| `users`               | User profiles, roles and auth credentials          |
| `user_preferences`    | Notification preferences per user                  |
| `booking`             | Master booking record                              |
| `flight`              | Flight listings with Amadeus integration fields    |
| `flight_booking`      | Flight-specific booking details (cost/eco scores)  |
| `passenger`           | Passengers per flight booking                      |
| `fare_option`         | Fare tiers per flight                              |
| `fare_feature`        | Features included in each fare                     |
| `hotel`               | Hotel listings                                     |
| `hotel_booking`       | Hotel-specific booking details                     |
| `room`                | Rooms per hotel                                    |
| `hotel_amenity`       | Amenities per hotel                                |
| `destination`         | Travel destinations                                |
| `deal`                | Promotional deals                                  |
| `country`             | Country reference data (ISO code, region, flag)    |
| `airport`             | Airport reference data (IATA code, city, timezone) |
| `amadeus_token`       | Cached Amadeus OAuth2 access tokens                |
| `flight_search_cache` | Cached Amadeus flight search results               |
| `jwt_refresh_token`   | JWT refresh tokens with revocation support         |
| `oauth_account`       | Linked OAuth provider accounts (Google)            |

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

_Roamio — Your journey begins here._
