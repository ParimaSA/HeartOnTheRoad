from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import paho.mqtt.client as mqtt
import json

# MQTT Broker details
MQTT_BROKER = "YOUR BROKER"
MQTT_PORT = 1883
MQTT_TOPIC = "YOUR TOPIC"
MQTT_USERNAME = "YOUR USERNAME"
MQTT_PASSWORD = "YOUR PASSWORD"

# Set up WebDriver (reuse the instance)
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Run in headless mode
driver = webdriver.Chrome(options=options)

# MQTT Client Setup (Persistent Connection)
client = mqtt.Client()
client.username_pw_set(MQTT_USERNAME, MQTT_PASSWORD)


def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected to MQTT Broker!")
    else:
        print(f"Failed to connect, return code {rc}")


client.on_connect = on_connect
client.connect(MQTT_BROKER, MQTT_PORT, 60)
client.loop_start()  # Keep the connection active


def get_location():
    """Retrieve latitude and longitude using Selenium."""
    driver.get("https://www.maps.ie/coordinates.html")

    try:
        wait = WebDriverWait(driver, 10)
        find_button = wait.until(EC.element_to_be_clickable((By.ID, "find-loc")))
        driver.execute_script("arguments[0].click();", find_button)  # Click button

        time.sleep(5)  # Wait for location update

        lat_input = driver.find_element(By.ID, "marker-lat")
        lon_input = driver.find_element(By.ID, "marker-lng")

        latitude = lat_input.get_attribute("value")
        longitude = lon_input.get_attribute("value")

        print(f"Latitude: {latitude}, Longitude: {longitude}")
        return latitude, longitude

    except Exception as e:
        print(f"Error fetching location: {e}")
        return None, None


def publish_location():
    """Publish location to MQTT broker."""
    latitude, longitude = get_location()

    if latitude and longitude and str(latitude)[0:10]!="13.7658368":
        payload = json.dumps({"lat": latitude, "lon": longitude})
        result = client.publish(MQTT_TOPIC, payload)

        if result.rc == 0:
            print("Location published successfully!")
        else:
            print(f"Failed to publish, return code {result.rc}")
    else:
        print("Skipping publish due to missing location.")


# Run loop
try:
    while True:
        publish_location()
        time.sleep(60)  # Update every minute
except KeyboardInterrupt:
    print("Stopping...")
finally:
    client.loop_stop()
    client.disconnect()
    driver.quit()  # Close WebDriver when done