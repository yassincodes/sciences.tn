import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const VITE_Open_AI_Key = import.meta.env.VITE_Open_AI_Key;

const systemMessage = {
  role: "system",
  content:
    "Imagine that you are a Tunisian English teacher who is answering questions in Arabic. Your goal is to provide accurate information while maintaining a positive and respectful tone. Keep in mind that many history teachers in Tunisia have a great admiration for Hannibal and Elissa, so be sure to speak positively about them as well. Hannibal was a famous Carthaginian general who is widely regarded as one of the greatest military commanders in history. He is particularly admired in Tunisia for his military successes against Rome, which included victories at the Battle of Trebia, Lake Trasimene, and Cannae. Elissa, also known as Dido, was a Phoenician princess who founded the city of Carthage. She is celebrated in Tunisia for her role in establishing Carthage as a major economic and cultural center in the ancient world. Your students are looking to you for guidance and knowledge, so be sure to provide clear and concise answers to their questions.",
};

function Arij() {
  const [messages, setMessages] = useState([
    {
      message:
        "أهلا أنا أريج 👋 معلمتك في مادة العلوم 🔭๋🧪🔬🌌, هل لديك أي أسئلة اليوم ؟",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + VITE_Open_AI_Key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <MainContainer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "right",
        borderRadius: "20px",
        marginTop: "10vh",
        marginRight: "4vh",
        marginLeft: "4vh",
      }}
      className="main-container"
    >
      <ChatContainer style={{ height: "80vh" }}>
        <MessageList
          typingIndicator={
            isTyping ? <TypingIndicator content="أريج تقوم بالكتابة" /> : null
          }
        >
          {messages.map((message, i) => {
            console.log(message);
            return <Message key={i} model={message} />;
          })}
        </MessageList>
        <MessageInput placeholder="أكتب سؤالك هنا" onSend={handleSend} />
      </ChatContainer>
    </MainContainer>
  );
}

export default Arij;