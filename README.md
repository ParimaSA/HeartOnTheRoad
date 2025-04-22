# HeartOnTheRoad

| **GitHub**                              | **Contributors**    | **Student ID** |
| --------------------------------------- | :------------------ | :------------- |
| [yxzuz](https://github.com/yxzuz)       | Natcha Ranchan      | 6610545260     |
| [ParimaSA](https://github.com/ParimaSA) | Parima Sangsirakoup | 6610545367     |

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
