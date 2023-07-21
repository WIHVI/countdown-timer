# Countdown Timer

This JavaScript code provides a simple countdown timer that displays the remaining time until a target hour within a specified timezone. The code calculates the countdown in hours, minutes, and seconds and updates the countdown display every second.

## Prerequisites

This code requires a browser environment to run as it uses the document object to update the countdown display.

## How it works

The countdown timer is based on the following constants and functions:

### Constants

1. 'COUNTDOWN_START_HOUR': The starting hour of the countdown. In this code, it is set to 9 (9 AM).
2. 'COUNTDOWN_END_HOUR': The ending hour of the countdown. In this code, it is set to 16 (4 PM).
3. 'MILLISECONDS_IN_HOUR': The number of milliseconds in one hour (60 minutes x 60 seconds x 1000 milliseconds).
4. 'MILLISECONDS_IN_MINUTE': The number of milliseconds in one minute (60 seconds x 1000 milliseconds).

### Functions

1. 'getLocalTime(timezone)': This function retrieves the current local time in the specified timezone. It creates a new Date object and sets its timezone using the toLocaleString method.
2. 'calculateCountdown()': This function calculates the remaining time until the target hour within the "Europe/Bucharest" timezone. It determines the target hour based on the current time and updates it accordingly. The remaining time is then calculated in hours, minutes, and seconds.
3. 'updateCountdown()': This function updates the countdown display in the HTML. It calls calculateCountdown() to get the remaining time, and then formats and updates the countdown display.

## Usage

The countdown timer will automatically start when the page is loaded. The countdown display will update every second until it reaches the target hour. The countdown will reset daily at the specified 'COUNTDOWN_START_HOUR' (9 AM) and 'COUNTDOWN_END_HOUR' (4 PM) in the "Europe/Bucharest" timezone.

## Customization

You can customize the countdown timer by modifying the following constants:

 - 'COUNTDOWN_START_HOUR': Set the starting hour for the countdown.
 - 'COUNTDOWN_END_HOUR': Set the ending hour for the countdown.

You can also modify the timezone used in the 'getLocalTime()' function to calculate the countdown for a different timezone. Simply replace "Europe/Bucharest" with the desired timezone identifier from the IANA Time Zone Database.