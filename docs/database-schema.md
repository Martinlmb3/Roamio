# Roamio — Database Schema (ERD)

```mermaid
erDiagram

    USER {
        int         id              PK
        string      first_name
        string      last_name
        string      email
        string      password_hash
        date        date_of_birth
        string      gender
        string      nationality
        string      membership_level
        timestamp   joined_at
        timestamp   created_at
        timestamp   updated_at
    }

    USER_PREFERENCES {
        int     id                  PK
        int     user_id             FK
        boolean promotional_emails
        boolean booking_alerts
        boolean partner_offers
    }

    DESTINATION {
        int     id          PK
        string  name
        string  country
        string  image_url
    }

    FLIGHT {
        int       id                  PK
        string    airline
        string    logo_url
        string    departure_airport
        timestamp departure_time
        string    arrival_airport
        timestamp arrival_time
        string    duration
        int       stops
        decimal   base_price
        timestamp created_at
    }

    FARE_OPTION {
        int     id          PK
        int     flight_id   FK
        string  name
        decimal price
    }

    FARE_FEATURE {
        int     id              PK
        int     fare_option_id  FK
        string  text
        boolean included
    }

    HOTEL {
        int       id              PK
        string    name
        string    location
        int       stars
        string    image_url
        decimal   rating
        string    rating_text
        int       reviews_count
        decimal   price_per_night
        timestamp created_at
    }

    HOTEL_AMENITY {
        int     id          PK
        int     hotel_id    FK
        string  icon
        string  name
    }

    ROOM {
        int     id              PK
        int     hotel_id        FK
        string  name
        string  size
        string  image_url
        decimal price_per_night
    }

    ROOM_FEATURE {
        int     id          PK
        int     room_id     FK
        string  feature
    }

    DEAL {
        int     id                  PK
        int     destination_id      FK
        string  title
        string  description
        string  image_url
        decimal original_price
        decimal discounted_price
        int     discount_pct
        string  badge
        date    valid_until
        enum    category
    }

    BOOKING {
        int       id          PK
        int       user_id     FK
        enum      status
        enum      type
        timestamp created_at
        timestamp updated_at
    }

    FLIGHT_BOOKING {
        int id               PK
        int booking_id       FK
        int flight_id        FK
        int fare_option_id   FK
    }

    HOTEL_BOOKING {
        int  id           PK
        int  booking_id   FK
        int  hotel_id     FK
        int  room_id      FK
        date check_in
        date check_out
        int  nights
    }

    PASSENGER {
        int    id                  PK
        int    flight_booking_id   FK
        string first_name
        string last_name
        string email
    }

    %% ── Relationships ──────────────────────────────────────────

    USER            ||--||  USER_PREFERENCES    : "has"
    USER            ||--o{  BOOKING             : "makes"

    BOOKING         ||--o|  FLIGHT_BOOKING      : "contains"
    BOOKING         ||--o|  HOTEL_BOOKING       : "contains"

    FLIGHT          ||--o{  FLIGHT_BOOKING      : "booked via"
    FARE_OPTION     ||--o{  FLIGHT_BOOKING      : "selected in"
    FLIGHT          ||--|{  FARE_OPTION         : "has"
    FARE_OPTION     ||--|{  FARE_FEATURE        : "has"

    HOTEL           ||--o{  HOTEL_BOOKING       : "booked via"
    ROOM            ||--o{  HOTEL_BOOKING       : "selected in"
    HOTEL           ||--|{  ROOM                : "has"
    HOTEL           ||--|{  HOTEL_AMENITY       : "offers"
    ROOM            ||--|{  ROOM_FEATURE        : "has"

    FLIGHT_BOOKING  ||--|{  PASSENGER           : "carries"

    DESTINATION     ||--o{  DEAL               : "featured in"
```

## Enum Values

| Table | Column | Values |
|---|---|---|
| `BOOKING` | `status` | `confirmed`, `pending`, `cancelled` |
| `BOOKING` | `type` | `flight`, `hotel`, `both` |
| `DEAL` | `category` | `flight`, `hotel`, `package` |

## Key Relationships Summary

| Relationship | Cardinality | Description |
|---|---|---|
| User → UserPreferences | 1 : 1 | Each user has one preferences record |
| User → Booking | 1 : N | A user can have many bookings |
| Booking → FlightBooking | 1 : 0..1 | A booking may include a flight leg |
| Booking → HotelBooking | 1 : 0..1 | A booking may include a hotel stay |
| Flight → FareOption | 1 : N | A flight offers multiple fare classes |
| FareOption → FareFeature | 1 : N | Each fare class lists its included features |
| Hotel → Room | 1 : N | A hotel offers multiple room types |
| Hotel → HotelAmenity | 1 : N | A hotel lists its amenities |
| Room → RoomFeature | 1 : N | Each room type lists its features |
| FlightBooking → Passenger | 1 : N | A flight booking covers N passengers |
| Destination → Deal | 1 : N | A destination can have multiple deals |
