# P-8-ChaBot
Collaborations and Flow:

1. User Registration:
Users interact with a registration interface to provide their information.
The registration data is stored in the users table.

2. Chatbot Interaction:
Users interact with the chatbot interface, triggering the retrieval of questions from the questions table.
The user selects a question, and the chatbot retrieves the corresponding answer from the answers table.
After presenting the answer, the chatbot asks for satisfaction feedback, and the user's response is recorded in the user_feedback table.
If the user is not satisfied, the chatbot checks the availability of support agents in the support_agents table.

3. One-to-One Chat Initiation:
If a support agent is available, a one-to-one chat session is initiated.
A chat session entry is created in the chat_messages table to store messages between the user and the support agent.

4. User Satisfaction Check in Chat:
The chatbot or support agent may inquire about user satisfaction during the one-to-one chat.
If the user is satisfied, the chat session may end, or the chatbot can inquire if the user has additional questions.

5. Continued Interaction or Resolution:
If the user is not satisfied, the chat continues until the issue is resolved or the user is satisfied.
Messages exchanged during the one-to-one chat are stored in the chat_messages table.
If resolved, the chat session ends.

6. Repeat Interaction (if necessary):
If the user has additional questions or issues, the chatbot can proceed to the next set of questions from the questions table.
The user selects a question, and the chatbot retrieves the answer from the answers table.
The chatbot asks for satisfaction feedback, and the response is recorded in the user_feedback table.

7. Data Flow:
Data flows between the users, questions, answers, user_feedback, support_agents, and chat_messages tables based on interactions and feedback.
Foreign keys establish relationships between tables.
