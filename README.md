# InterviewSimulator Project

Welcome to the InterviewSimulator project! This project consists of both frontend and backend applications designed to provide lifelike interview simulations and personalized feedback for job seekers.

## Video Overview

[Watch the InterviewSimulator Overview Video](https://vimeo.com/942150733?share=copy)

Click the link above to watch the InterviewSimulator overview video.

## Overview

InterviewSimulator bridges the gap between traditional interview preparation methods and the dynamic demands of today's job market. The platform offers realistic interview simulations powered by AI technology, tailored to users' desired roles. After each simulation, users receive personalized feedback reports to enhance their interview skills and confidence.

## Frontend (Next.js)

The frontend of InterviewSimulator is built using Next.js, a React framework, to deliver an intuitive and efficient user interface. Users can seamlessly navigate the application, simulate interviews, and receive feedback reports. Additionally, the frontend integrates with the backend to fetch data and interact with the application's features.

### Getting Started

To run the frontend locally:

1. Clone this repository to your local machine.
2. Navigate to the `frontend` directory.
3. Install dependencies:

```bash
npm install
```

4. Set up environment variables by creating a `.env.local` file with the following content:

```
NEXT_PUBLIC_BACK_SERVER_URL=https://api.interviewsimulator.org
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Backend (Flask)

The backend of InterviewSimulator is built using Flask, a Python web framework, to handle data processing, authentication, and integration with external services. It provides various endpoints for functionalities such as health checks, email bookings, user feedback, chat AI, and interview sections.

### Getting Started

To run the backend locally:

1. Navigate to the root directory of the project.
2. Create a virtual environment:

```bash
python3 -m venv venv
```

3. Activate the virtual environment:

```bash
# For Linux/macOS
source venv/bin/activate

# For Windows
venv\Scripts\activate
```

4. Install dependencies:

```bash
pip install -r requirements.txt
```

5. Set up environment variables by creating a `.env` file in the root directory with the necessary variables such as the database URL.

6. Run the Flask server:

```bash
flask run
```

## Contributing

We welcome contributions to enhance the functionality and features of InterviewSimulator. Feel free to submit pull requests or open issues for any improvements or bug fixes.

## URLs

1. Frontend Project URL: https://interviewsimulator.org
2. Backend Project URL: https://api.interviewsimulator.org

---

## License

This project is licensed under the [MIT License](LICENSE).