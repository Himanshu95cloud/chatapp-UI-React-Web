import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import "./index.scss";

interface ChatBoxProps {
  selectedUser: any;
}

const ChatBox: React.FC<ChatBoxProps> = ({ selectedUser }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage(""); // Clear the input field after sending the message
    }
  };

  const handleDeleteMessage = (index: number) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  // Scroll to the bottom of the messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Check if selectedUser is undefined or null
  const noChatsAvailable = !selectedUser;

  return (
    <>
      {noChatsAvailable && (
        <div className="chat-box no-chats">
          <Typography color={"primary"} variant="h4">
            No Chats Available
          </Typography>
        </div>
      )}

      {!noChatsAvailable && (
        <div className="chat-box">
          <div className="chat-header">
            <div className="user-details">
              <div className="profile-icon">
                <span>{selectedUser?.profileIcon}</span>
              </div>
              <Typography>{selectedUser?.name}</Typography>
            </div>
            <IconButton color="inherit" aria-label="more options">
              <MoreVert />
            </IconButton>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className="message-container">
                <Typography variant="body1" component="p" className="message">
                  {msg}
                </Typography>
                <IconButton
                  color="secondary"
                  aria-label="delete"
                  onClick={() => handleDeleteMessage(index)}
                >
                  <DeleteIcon color="primary" />
                </IconButton>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <Divider />
            <TextField
              fullWidth
              label="Type your message"
              variant="outlined"
              size="small"
              value={message}
              onChange={handleMessageChange}
            />
            <IconButton
              color="primary"
              aria-label="send"
              onClick={handleSendMessage}
            >
              <SendIcon />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
