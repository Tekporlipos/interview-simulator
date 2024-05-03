# InterviewSimulator Flask Backend Documentation

Welcome to the InterviewSimulator Flask backend documentation. This Flask application serves as the backend for InterviewSimulator, providing various endpoints for handling health checks, email bookings, user feedback, chat AI, and interview sections.

## Endpoints

### Health Check

- **URL**: `/api/v1/health/`
- **Method**: GET
- **Description**: Checks the health status of the application.

### Email Booking

- **URL**: `/api/v1/send-email`
- **Method**: POST
- **Description**: Creates a new email booking.
- **URL**: `/api/v1/send-email/<note_id>`
- **Method**: GET
- **Description**: Retrieves an email booking by its ID.

### User Feedback

- **URL**: `/api/v1/feedback`
- **Method**: POST
- **Description**: Creates new user feedback.

### Speaker Service

- **URL**: `/api/v1/speaker`
- **Method**: GET
- **Description**: Generates speech for the given word using Google Text-to-Speech.

### Chat AI

- **URL**: `/api/v1/chatAI`
- **Method**: WebSocket
- **Description**: Handles chat AI functionality for real-time conversation.

### Interview Section

- **URL**: `/api/v1/interview-section/<interview_id>`
- **Method**: GET
- **Description**: Retrieves interview sections by ID.
- **URL**: `/api/v1/interview-section/<interview_id>`
- **Method**: PATCH
- **Description**: Updates interview sections by ID.

## Getting Started

To set up the backend locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Create a virtual environment:

```bash
python3 -m venv venv
```

4. Activate the virtual environment:

```bash
# For Linux/macOS
source venv/bin/activate

# For Windows
venv\Scripts\activate
```

5. Install the required dependencies:

```bash
pip install -r requirements.txt
```

6. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the necessary environment variables such as database URL.

7. Run the Flask server:

```bash
flask run
```

## Contributing

We welcome contributions to enhance the functionality and features of InterviewSimulator. Feel free to submit pull requests or open issues for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

---