<div align="center">
  <img src="public/Roamio-logo.svg" alt="Roamio Logo" width="400" style="vertical-align: middle; margin-right: 15px;">

</div>

<p align="center">A modern travel booking platform that combines offer seamless flight and accommodation booking experiences.</p>

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Google OAuth](https://img.shields.io/badge/Google_OAuth-DB4437?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/identity)
[![Facebook OAuth](https://img.shields.io/badge/Facebook_OAuth-0866FF?style=for-the-badge&logo=facebook&logoColor=white)](https://developers.facebook.com/)
[![Skyscanner](https://img.shields.io/badge/Skyscanner-0770E3?style=for-the-badge&logo=skyscanner&logoColor=white)](https://www.skyscanner.com/)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/)
[![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)

</div>

---

## ✨ Features

- **✈️ Flight Search**: Search and compare flights using Skyscanner Travel API
- **🏨 Accommodation Booking**: Find and book hotels, apartments, and unique stays
- **💳 Multiple Payment Options**: Secure payments via PayPal and Stripe
- **🔐 Secure Authentication**: JWT-based auth with OAuth 2.0 (Google & Facebook)
- **📱 Responsive Design**: Mobile-first approach with modern UI components
- **🎨 Theme Support**: Dark/light mode toggle for comfortable browsing
- **💼 Booking Management**: Track and manage your travel bookings
- **⭐ Favorites**: Save your favorite destinations and properties
- **🌍 Multi-destination Search**: Plan complex trips with ease

## 🚀 Tech Stack

### Frontend
- **Framework**: Angular 20.1.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Angular Material + Custom Components
- **State Management**: Angular Services
- **Theme**: Dark/light mode support

### Backend
- **Framework**: Spring Boot 3.x
- **Language**: Java
- **Authentication**: JWT Bearer tokens + OAuth 2.0 (Google & Facebook)
- **Security**: Spring Security
- **API Documentation**: Swagger/OpenAPI
- **Build Tool**: Maven/Gradle

### External APIs & Services
- **Flight API**: Skyscanner Travel API
- **Payment Processing**:
  - PayPal Integration
  - Stripe Payment Gateway
- **Authentication**: Google & Facebook OAuth 2.0

## 📁 Project Structure

```
Romio/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── landing/           # Landing page
│   │   │   ├── search/            # Flight & hotel search
│   │   │   ├── booking/           # Booking flow
│   │   │   ├── login/             # Authentication
│   │   │   └── signup/            # User registration
│   │   ├── shared/
│   │   │   ├── components/        # Reusable UI components
│   │   │   ├── services/          # Angular services
│   │   │   └── guards/            # Route guards
│   │   ├── app.routes.ts          # App routing
│   │   └── app.html               # Root template
│   └── styles.css                 # Global styles
├── public/
│   ├── Roamio-logo.svg
│   ├── login.jpg
│   └── signup.jpg
├── backend/                       # Spring Boot API (to be added)
│   └── src/
│       ├── main/
│       │   ├── java/
│       │   │   └── com/roamio/
│       │   │       ├── controllers/    # REST controllers
│       │   │       ├── models/        # Entity classes
│       │   │       ├── repositories/  # Data repositories
│       │   │       ├── services/      # Business logic
│       │   │       ├── dto/          # Data transfer objects
│       │   │       └── config/       # Configuration
│       │   └── resources/
│       │       └── application.properties
│       └── test/
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Java 17+ (for Spring Boot)
- Maven or Gradle
- Skyscanner API Key
- PayPal Developer Account
- Stripe Account

### Frontend Setup
```bash
npm install
ng serve
```

The frontend will be available at `http://localhost:4200`

### Backend Setup
```bash
cd backend
./mvnw spring-boot:run
# OR with Gradle
./gradlew bootRun
```

The API will be available at `http://localhost:8080`

### Environment Variables
Create a `.env` file in the root directory:
```
SKYSCANNER_API_KEY=your_api_key
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/login` - User login with email/password
- `POST /api/auth/register` - User registration
- `POST /api/auth/refresh` - Refresh JWT token
- `GET /api/auth/oauth2/google` - Google OAuth login
- `GET /api/auth/oauth2/facebook` - Facebook OAuth login
- `GET /api/auth/oauth2/callback` - OAuth callback handler
- `POST /api/auth/logout` - User logout

### Flights
- `GET /api/flights/search` - Search flights
- `GET /api/flights/{id}` - Get flight details
- `POST /api/flights/book` - Book a flight

### Hotels
- `GET /api/hotels/search` - Search accommodations
- `GET /api/hotels/{id}` - Get hotel details
- `POST /api/hotels/book` - Book accommodation

### Bookings
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/{id}` - Get booking details
- `PUT /api/bookings/{id}` - Update booking
- `DELETE /api/bookings/{id}` - Cancel booking

### Payments
- `POST /api/payments/paypal/create` - Create PayPal payment
- `POST /api/payments/paypal/execute` - Execute PayPal payment
- `POST /api/payments/stripe/create` - Create Stripe payment intent
- `POST /api/payments/stripe/confirm` - Confirm Stripe payment

### Users
- `GET /api/users/{id}` - Get user profile
- `PUT /api/users/{id}` - Update user profile
- `GET /api/users/{id}/favorites` - Get saved favorites
- `POST /api/users/{id}/favorites` - Add to favorites

## 🗄️ Database Schema

Key entities include:
- **Users**: User profiles and authentication
- **Flights**: Flight information and availability
- **Hotels**: Accommodation listings
- **Bookings**: User reservations
- **Payments**: Payment transactions and history
- **Favorites**: User saved items

## 🎨 UI Components

Built with modern, accessible components:
- Navigation with responsive design
- Theme toggle (dark/light mode)
- Cards, buttons, forms with consistent styling
- Modal dialogs and dropdowns
- Image galleries and carousels
- Form validation with Angular Reactive Forms

## 📝 Pages

- `/` - Landing page with search functionality
- `/search` - Search results for flights and hotels
- `/booking` - Booking flow and confirmation
- `/my-bookings` - User's booking history
- `/favorites` - Saved flights and hotels
- `/profile` - User profile page
- `/login` - User authentication
- `/signup` - User registration

## 🔧 Development

### Frontend Development
```bash
ng serve                # Start development server
ng build               # Build for production
ng test                # Run unit tests
ng e2e                 # Run end-to-end tests
ng lint                # Run linting
```

### Backend Development
```bash
./mvnw spring-boot:run              # Start with hot reload
./mvnw test                         # Run tests
./mvnw clean package                # Build JAR
./mvnw spring-boot:build-image      # Build Docker image
```

## 🚀 Deployment

### Frontend
1. Build the production bundle: `ng build --configuration production`
2. Deploy to hosting provider (Vercel, Netlify, etc.)
3. Set environment variables
4. Configure CI/CD pipeline

### Backend
1. Configure database connection in `application.properties`
2. Set JWT secret and API keys as environment variables
3. Build JAR: `./mvnw clean package`
4. Deploy to cloud provider (AWS, Heroku, Railway, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Martin Lumumba**
- GitHub: [@Martinlmb3](https://github.com/Martinlmb3)
- Project: [Roamio](https://github.com/Martinlmb3/Romio)

## 🙏 Acknowledgments

- [Skyscanner](https://www.partners.skyscanner.net/) for travel API
- [PayPal](https://developer.paypal.com/) for payment integration
- [Stripe](https://stripe.com/docs) for payment processing
- [Angular](https://angular.dev/) for the frontend framework
- [Spring Boot](https://spring.io/projects/spring-boot) for robust backend framework
- [Tailwind CSS](https://tailwindcss.com) for styling

---

**Roamio** - Your journey begins here. ✈️🌍
