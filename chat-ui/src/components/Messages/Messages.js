import React from 'react'

const Messages = ({ messages }) => {

    let renderMessage = (message) => {
        const { sender, content, color } = message;
        return (
            <li className={'Messages-message'}>
                <span
                    className="avatar"
                    style={{ backgroundColor: color }}
                />
                <div className="Message-content">
                    <div className="username">
                        {sender}
                    </div>
                    <div className="text">{content}</div>
                </div>
            </li>
        );
    };

    return (
        <ul className="messages-list">
            {messages.map(msg => renderMessage(msg))}
        </ul>
    )
}


export default Messages