# HeartOnTheRoad

| **GitHub**                              | **Contributors**    | **Student ID** |
| --------------------------------------- | :------------------ | :------------- |
| [yxzuz](https://github.com/yxzuz)       | Natcha Ranchan      | 6610545260     |
| [ParimaSA](https://github.com/ParimaSA) | Parima Sangsirakoup | 6610545367     |

**Software and Knowledge Engineering, Faculty of Engineering, Kasetsart University**

A web-based platform designed to visualize the data.

This app was created as part of the Data Acquisition and Integration course at [Kasetsart University](https://www.ku.ac.th).

## Overview

This project aims to analyze the impact of traffic conditions on a driver's stress levels using real-time heart rate data combined with traffic data. By collecting heart rate data from a sensor, and traffic data from an external API, we aim to correlate how congestion, speed, and other traffic factors influence physiological responses during a drive.

## Data source

1. Primary Data

   - Heartrate of driver from smart watch
   - Location (latitude, longtitude) of driver

2. Secondary Data
   - Traffic condition from [TomTom Traffic APIs](https://www.tomtom.com/products/traffic-apis/)

## Features

### HeartOnTheRoad UI provides:

1. Trip Dashboard: See trip duration, heart rate stats, traffic time, and map.
2. Traffic Dashboard: View real-time traffic data with heart rate and speed distributions.
3. Time Dashboard: Analyze hourly heart rate and traffic metrics.
4. Analytics: Get overall summaries, traffic breakdowns, heart rate trends with speed.

### HeartOnTheRoad API Endpoints:

**Base URL:** `/heart/v1`



### Analytics

#### GET `/api/analytic`
Retrieve overall analytics data.

#### GET `/api/analytic/relation`
Get relation between heart rate and traffic speed by hour.

---

### Trip

#### GET `/api/trip`
Fetch the number of recorded trips.

#### GET `/api/trip/{trip_id}`
Get specific trip details.
- **Path Parameter:** `trip_id` (number)

---

### Heart Rate

#### GET `/api/heartrate/trip/{trip_id}`
Get timestamped heart rate data for a specific trip.
- **Path Parameter:** `trip_id` (number)

#### GET `/api/heartrate/traffic/{is_traffic_jam}`
Get heart rate data filtered by traffic condition.
- **Path Parameter:** `is_traffic_jam` (boolean)

---

### Location

#### GET `/api/location/trip/{trip_id}`
Get location data and speed for a specific trip.
- **Path Parameter:** `trip_id` (number)

#### GET `/api/speed/traffic/{is_traffic_jam}`
Get current speed data filtered by traffic condition.
- **Path Parameter:** `is_traffic_jam` (boolean)

---

### Traffic

#### GET `/api/traffic/{is_traffic_jam}`
Get heart rate and traffic stats summary by condition.
- **Path Parameter:** `is_traffic_jam` (boolean)

---

### Time-Based Analysis

#### GET `/api/time/{hour}`
Get stats for a specific hour.
- **Path Parameter:** `hour` (integer, 8–23)


## Installation

You can follow this installation guide [here](Installation.md)

## Running the Application

**Run the Backend Development Server**

```commandline
# Navigate to backend directory
> cd backend
```

```commandline
python app.py
```

**Run the Frontend Development Server**

```commandline
# Navigate to frontend directory
> cd frontend
```

```commandline
npm run dev
```
