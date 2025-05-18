
## 📚 Automatically Check Your Grades

This project automates the process of checking for new grades on a university portal and sends notifications when updates are detected. It uses **Puppeteer** to simulate browser actions and scrape data from the university website.

---

### 🔧 How It Works

1. **Login Automation**
   - Launches a headless browser.
   - Navigates to the university portal.
   - Logs in using the provided credentials.

2. **Navigation**
   - After login, it navigates to either:
     - `#Check_Grades`
     - `#Transcript`

---

### 🧪 Mode 1: `#Check_Grades`

- Refreshes the page every **N seconds**.
- Monitors a specific number `Y` displayed below a table, which indicates how many grades are currently available.
- If `Y` changes:
  - The new value is stored.
  - A notification is sent via **Telegram** or another configured app.

---

### 📄 Mode 2: `#Transcript`

This mode handles a more complex flow:

1. **Survey Detection**
   - If a new grade is available, the portal prompts a survey before showing grades.
   - The script detects this and automatically fills out the survey by clicking predefined values.

2. **Year Range Selection**
   - After the survey, the script navigates to the transcript view.
   - Loops through available year ranges (e.g., `2020-2021`) to find the desired one.

3. **Grade Extraction**
   - Scrapes the table containing all grades.
   - Compares current grades with a stored array of previously seen grades.
   - Sends a notification only if new grades are found.

---

### 📬 Notifications

- Notifications are sent **only when new grades are detected**.
- This ensures you’re alerted only when there’s something new to see.

---

### 🛠️ Technologies Used

- Puppeteer – Headless browser automation
- Telegram Bot API – For sending notifications

---

### ✅ Features

- Fully automated login and navigation
- Smart detection of new grades
- Handles both simple and complex grade views
- Avoids duplicate notifications






INSTALLING VISUAL STUDIO CODE AND NODE JS AND puppeteer LIBRARY IS REQUIRED.











