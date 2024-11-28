import React, { useState, ChangeEvent } from 'react';
import { Button, Form, Container, Row, Col, ListGroup, Alert } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Chat.css';

const Chat: React.FC = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ text: string, from: string }[]>([]);
    const [isSending, setIsSending] = useState(false);

    const [isTyping, setIsTyping] = useState(false);
    const [currentTypingText, setCurrentTypingText] = useState('');

    const simulateTyping = async (fullResponse: string) => {
        setIsTyping(true);
        const words = fullResponse.split(' ');
        let currentText = '';

        for (let word of words) {
            currentText += (currentText ? ' ' : '') + word;
            setCurrentTypingText(currentText);
            // Random delay between 100-300ms for more natural typing feel
            await new Promise(resolve => setTimeout(resolve, Math.random() * 200 + 100));
        }

        setMessages(prev => [...prev, { text: fullResponse, from: 'chatbot' }]);
        setCurrentTypingText('');
        setIsTyping(false);
    };

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            setMessages(prev => [...prev, { text: message, from: 'user' }]);
            setMessage('');
            setIsSending(true);

            const chatbotResponse = "Hey there! uOttaChat is currently offline for maintenance.";
            await new Promise(resolve => setTimeout(resolve, 500));
            await simulateTyping(chatbotResponse);
            setIsSending(false);
        }
    };

    return (
        <Container fluid className="p-0">
            <Row className="m-0 h-100">
                <Col xs={12} className="d-flex flex-column h-100">
                    <div className="text-center">
                        <h1 className="text-gradient font-weight-bold my-2 mb-4">
                            uOttaChat <sup style={{ fontSize: '0.6em', fontWeight: 'normal' }}>beta</sup>
                        </h1>
                        <p className="text-left mb-4" style={{ fontSize: '0.9rem' }}>
                            Hey hackers, sponsors, volunteers, and mentors! Meet uOttaChat – your go-to event chatbot! Whether you have questions about the hackathon, need specific details about challenges, event logistics (like room assignments), food options, the full event schedule, or anything else – uOttaChat has got you covered!
                        </p>
                        <Alert className="text-left py-2 mb-4" variant="warning" style={{ fontSize: '0.8rem' }}>
                            <b>Disclaimer:</b> uOttaChat can make mistakes. Check important info.
                        </Alert>
                    </div>

                    <div className="chat-box p-4 mx-auto" style={{
                        borderRadius: '15px',
                        border: '1px solid #D8D8D8',
                        backgroundColor: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '60vh',
                        width: '100%',
                        marginBottom: '20px'
                    }}>
                        <div style={{
                            width: '100%',
                            margin: '0 auto',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <ListGroup style={{
                                flex: 1,
                                overflowY: 'auto',
                                marginBottom: '30px',
                                borderRadius: '15px',
                                padding: '10px',
                                backgroundColor: '#ffffff'
                            }}>
                                {messages.map((msg, index) => (
                                    <ListGroup.Item
                                        key={index}
                                        style={{
                                            border: 'none',
                                            backgroundColor: msg.from === 'chatbot' ? '#ffffff' : '#F2F2F2',
                                            marginBottom: '16px',
                                            padding: '12px 16px',
                                            display: 'inline-block',
                                            maxWidth: '80%',
                                            width: 'auto',
                                            marginLeft: msg.from === 'chatbot' ? '0' : 'auto',
                                            marginRight: msg.from === 'chatbot' ? 'auto' : '0',
                                            fontSize: '13px',
                                            borderRadius: '10px',
                                            textAlign: 'left',
                                            alignSelf: msg.from === 'chatbot' ? 'flex-start' : 'flex-end',
                                            wordBreak: 'break-word',
                                            whiteSpace: 'pre-wrap',
                                            position: 'relative',
                                            paddingLeft: msg.from === 'chatbot' ? '40px' : '16px',
                                        }}
                                    >
                                        {msg.from === 'chatbot' && (
                                            <div style={{
                                                border: 'none',
                                                position: 'absolute',
                                                left: '12px',
                                                top: '12px',
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                backgroundColor: '#58A4DC',
                                            }} />
                                        )}
                                        {msg.text}
                                    </ListGroup.Item>
                                ))}
                                {isTyping && (
                                    <ListGroup.Item
                                        style={{
                                            border: 'none',
                                            backgroundColor: '#ffffff',
                                            marginBottom: '16px',
                                            padding: '12px 16px',
                                            display: 'inline-block',
                                            maxWidth: '80%',
                                            width: 'auto',
                                            marginLeft: '0',
                                            marginRight: 'auto',
                                            fontSize: '13px',
                                            borderRadius: '10px',
                                            textAlign: 'left',
                                            alignSelf: 'flex-start',
                                            wordBreak: 'break-word',
                                            whiteSpace: 'pre-wrap',
                                            position: 'relative',
                                            paddingLeft: '40px',
                                        }}
                                    >
                                        <div style={{
                                            position: 'absolute',
                                            left: '12px',
                                            top: '12px',
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            backgroundColor: '#58A4DC',
                                        }} />
                                        {currentTypingText}
                                    </ListGroup.Item>
                                )}
                            </ListGroup>

                            <Form onSubmit={sendMessage} style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '5px',
                                position: 'relative',
                                width: '100%',
                            }}>
                                <Form.Group controlId="messageInput" style={{ flex: 1, marginBottom: 0 }}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Message uOttaChat"
                                        value={message}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                                        style={{
                                            borderRadius: '8px',
                                            border: '0px',
                                            paddingLeft: '20px',
                                            paddingRight: '20px',
                                            height: '40px',
                                            backgroundColor: '#F2F2F2',
                                            fontSize: '13px'
                                        }}
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    style={{
                                        borderRadius: '8px',
                                        border: 'none',
                                        width: '40px',
                                        height: '40px',
                                        padding: '0px',
                                        marginLeft: '10px',
                                        backgroundColor: isSending ? '#B0B0B0' : '#58A4DC',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    disabled={isSending}
                                >
                                    <i className="bi bi-arrow-up-short" style={{
                                        fontSize: '25px',
                                        fontWeight: 'bold',
                                        color: '#fff'
                                    }}></i>

                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Chat;
