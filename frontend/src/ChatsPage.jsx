import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic('1403a4a1-f2af-4701-9c96-4d347d453891', props.user.username, props.user.secret);

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='1403a4a1-f2af-4701-9c96-4d347d453891'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
};
export default ChatsPage;