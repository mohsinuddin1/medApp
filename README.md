# 🌿 Indigenous Medicine - Leaf Detection Web App

## 🌐 Live Demo
[Try it here!](https://ancestormedicine.onrender.com/)

## 📌 Overview
Indigenous Medicine is a **Leaf Detection Web App** that allows users to upload an image of a leaf, detects its name using a **deep learning model**, and provides its **medicinal properties** using the Gemini AI API.

The project consists of:
- A **React.js frontend** for image upload and displaying results.
- A **FastAPI backend** for image processing and inference.
- A **TensorFlow model** trained for leaf classification.
- **Google Gemini AI** for fetching medicinal properties.

## 🛠 Tech Stack
### **Frontend:**
- React.js
- HTML, CSS, Tailwind CSS
- Axios (for API requests)

### **Backend:**
- FastAPI (Python)
- TensorFlow (Deep Learning Model)
- OpenCV, PIL (Image Processing)
- Google Gemini AI API (Medicinal Properties)
- CORS Middleware (for cross-origin requests)

---

## 🚀 Features
- 📷 **Upload an image** of a leaf.
- 🏷 **Get the leaf's name** using a trained **CNN model**.
- 💊 **Retrieve medicinal properties** using **Google Gemini AI**.
- 🔍 **Easy-to-use UI** with responsive design.

---

## 📥 Installation & Setup

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/mohsinuddin1/medApp
cd leaf-detection
```

### **2️⃣ Set up the backend**
```sh
cd backend
pip install -r requirements.txt
```
Create a `.env` file and add your **Gemini API Key**:
```
GEMINI_API_KEY=your-api-key
```
Start the backend server:
```sh
uvicorn main:app --host 0.0.0.0 --port 8000
```

### **3️⃣ Set up the frontend**
```sh
cd ../frontend
npm install
npm start
```
The React app will be live at `http://localhost:3000/`.

---

## 🔥 API Endpoints

### **1️⃣ Predict Leaf Name & Properties**
**Endpoint:**
```http
POST /predict/
```
**Request:**
- Form-data with key **"file"** (image file)

**Response:**
```json
{
  "leaf_name": "Neem",
  "confidence": 0.98,
  "medicinal_properties": "- Boosts immunity\n- Treats skin infections\n- Controls diabetes"
}
```

---

## 📸 Screenshots
**Home Page**
![Home Page](https://your-image-link.com/homepage.png)

**Prediction Result**
![Result](https://your-image-link.com/result.png)

---

## 🤝 Contributing
Feel free to open **issues** and **pull requests**. Your contributions are welcome!

---

## 📜 License
This project is **open-source** under the **MIT License**.

---

### ⭐ **If you like this project, give it a star!** ⭐

