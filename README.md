# Secure Management of Competitive Examination Question Papers

## 1. Project Title
**Secure Management of Competitive Examination Question Papers**
---
## 2. Brief Description of the Project
The **Secure Management of Competitive Examination Question Papers** is a web-based security system designed to protect competitive examination question papers from unauthorized access, modification, and leakage.
The system provides secure login and OTP verification, role-based access control, encryption, integrity verification, audit logging, and scheduled question-paper release.
Different users such as **Question Setter, Administrator, Exam Authority, and Examination Centre** are given different permissions.
The question paper is protected using **AES encryption**, while **SHA-256 hashing** is used to verify the integrity of the question paper.
Audit logs record important activities performed by users. The scheduled-release mechanism ensures that the question paper can be accessed only at the permitted examination time.
The project is implemented as a **frontend academic prototype using HTML, CSS, and JavaScript**. It demonstrates the major security mechanisms required for secure question-paper management.
---
## 3. Technologies / Tools Used
### Technologies
 Technology          Purpose                                          
 **HTML5**           Creates the structure of the web pages                
 **CSS3**            Provides the design and layout                       
 **JavaScript**      Implements system functionality and security features 
 **Web Crypto API**  Used for AES encryption and SHA-256 hashing           
 **LocalStorage**    Stores demo application data                         
 **SessionStorage**  Maintains user session information                    
### Tools
 Tool                    Purpose                                 
 **Visual Studio Code**  Development and coding                  
 **Google Chrome**       Testing and running the web application 
 **GitHub**              Source-code management                  
 **GitHub Pages**        Hosting the frontend prototype          
### Security Mechanisms
* Username and Password Authentication
* OTP / Multi-Factor Authentication
* Role-Based Access Control (RBAC)
* AES Encryption
* SHA-256 Hashing
* Audit Logs
* Time-Based / Scheduled Release
---
## 4. Steps to Install Dependencies and Run the Project
### Step 1 — Install Visual Studio Code
Install **Visual Studio Code** on the computer.
No additional programming language installation is required for the basic frontend prototype.
### Step 2 — Create the Project Folder
Create a folder named:
```text
```
### Step 3 — Create the Project Files
```text
```
### Step 4 — Add the Source Code
Write the HTML code in the `.html` files, CSS code in `style.css`, and JavaScript code in `app.js`.
### Step 5 — Save the Files
Make sure the files are saved with the correct extensions:
```text
.html
.css
.js
```
The files should not be saved as:
```text
.html.txt
.css.txt
.js.txt
```
### Step 6 — Run the Project
Open the project folder and double-click:
```text
index.html
```
The application will open in **Google Chrome**.
Alternatively, the project can be run using the **Live Server extension in VS Code**.
### Step 7 — Test the Application
From the home page, click:
```text
Open System / Login
```
Then test the authentication, role-based access, question-paper functions, encryption, integrity verification, and audit logs.
### Dependencies
For the current frontend prototype:
> No external npm packages or database installation is required.
The project uses the browser's built-in **Web Crypto API** for cryptographic operations.
---
## 5. Project Structure / Modules and Their Purpose
```text
SecureQuestionPaper
 index.html
 login.html
 dashboard.html
 css
 style.css
 js
 app.js
```
### 1. index.html — Home Module
This is the main page of the system.
It provides:
* Project title
* Project description
* Security features
* Login button
* Navigation
### 2. login.html — Authentication Module
This module handles user authentication.
It provides:
* Username
* Password
* OTP verification
* User-role identification
* Login validation
The purpose is to prevent unauthorized users from accessing the system.
### 3. dashboard.html — User Dashboard Module
After successful authentication, the user is taken to the dashboard.
The dashboard displays different functions depending on the user's role.
For example:
```text
Question Setter
      |
      v
Upload Question Paper
      |
      v
Encrypt Question Paper
      |
      v
Submit for Approval
```
An administrator can perform administrative functions, while the examination centre can access the paper only when it is released.
### 4. style.css — User Interface Module
This file controls the appearance of the application.
It contains:
* Colors
* Fonts
* Buttons
* Navigation bar
* Cards
* Forms
* Dashboard layout
* Responsive design
### 5. app.js — Security and Application Logic Module
This is the main JavaScript file.
It handles:
* Login authentication
* OTP generation and verification
* Role-Based Access Control
* AES encryption
* SHA-256 hashing
* Question-paper management
* Scheduled release
* Audit logging
* Session management
---
## 6. Sample Input and Output
### Sample Screenshots
![Sample Output 1](https://github.com/user-attachments/assets/d1254131-fce3-4ebc-8081-0f7cb04013cf)

![Sample Output 2](https://github.com/user-attachments/assets/cdd9889e-cb87-4477-a3c3-e43a74746df5)

![Sample Output 3](https://github.com/user-attachments/assets/4f92f9b9-e9fe-4e59-b0dc-c4cd87729dff)

![Sample Output 4](https://github.com/user-attachments/assets/98ff00ad-15bd-4c22-9680-d3df95db46d2)

![Sample Output 5](https://github.com/user-attachments/assets/53dfffa5-e95e-472f-ac7a-1da7dcce2391)

![Sample Output 6](https://github.com/user-attachments/assets/aca9536c-28d7-4d62-9449-053b566bf6f9)

![Sample Output 7](https://github.com/user-attachments/assets/8ff6bc9d-2cd4-4f62-865a-c4d58a330ccf)

![Sample Output 8](https://github.com/user-attachments/assets/36e967d3-e98e-4ea4-a81e-5f3e69e63d36)

---
### Sample Input — Login
```text
Username: setter1
Password: 1234
```
The system generates an OTP.
Example:
```text
OTP: 583214
```
The user enters:
```text
583214
```
### Sample Output
```text
Login Successful!
Welcome, Question Setter
Role: Question Setter
```
---
### Sample Input — Question Paper
```text
Exam: Government Competitive Examination
Subject: Computer Science
Exam Date: 25-09-2026
Release Time: 09:00 AM
Question Paper: CS_QuestionPaper.pdf
```
### System Processing
```text
Question Paper
      |
      v
AES Encryption
      |
      v
Encrypted Data
      |
      v
SHA-256 Hash Generated
      |
      v
Secure Storage
```
### Sample Output
```text
Question Paper Uploaded Successfully
Status: Encrypted
Integrity Hash: 7a9f3c...e21b
Status: Waiting for Approval
```
---
### Sample Input — Unauthorized Access
If an Examination Centre tries to access the question paper before the scheduled release time:
### Sample Output
```text
ACCESS DENIED
Reason:
Question paper has not been released yet.
Scheduled Release:
09:00 AM
Current Status:
Locked
```
---
### Sample Input — Modified Question Paper
Original SHA-256 hash:
```text
A82F91C7...
```
After modification:
```text
B71D45E2...
```
Since the hashes are different, the system detects a possible modification.\
### Sample Output
```text
INTEGRITY CHECK FAILED
Warning:
The question paper may have been modified.
Original Hash:
A82F91C7...
Current Hash:
B71D45E2...
```
---

6. Sample Input and Output
        <img width="1881" height="871" alt="image" src="https://github.com/user-attachments/assets/d1254131-fce3-4ebc-8081-0f7cb04013cf" />
        <img width="1883" height="865" alt="image" src="https://github.com/user-attachments/assets/cdd9889e-cb87-4477-a3c3-e43a74746df5" />
        <img width="1886" height="857" alt="image" src="https://github.com/user-attachments/assets/4f92f9b9-e9fe-4e59-b0dc-c4cd87729dff" />
        <img width="1682" height="687" alt="image" src="https://github.com/user-attachments/assets/98ff00ad-15bd-4c22-9680-d3df95db46d2" />
        <img width="1691" height="670" alt="image" src="https://github.com/user-attachments/assets/53dfffa5-e95e-472f-ac7a-1da7dcce2391" />
        <img width="1687" height="810" alt="image" src="https://github.com/user-attachments/assets/aca9536c-28d7-4d62-9449-053b566bf6f9" />
        <img width="1671" height="497" alt="image" src="https://github.com/user-attachments/assets/8ff6bc9d-2cd4-4f62-865a-c4d58a330ccf" />
        <img width="1883" height="610" alt="image" src="https://github.com/user-attachments/assets/36e967d3-e98e-4ea4-a81e-5f3e69e63d36" />



        




         
