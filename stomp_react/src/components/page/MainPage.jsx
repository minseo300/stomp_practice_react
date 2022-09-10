import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

function MainPage(props){
    const navigate=useNavigate();

    const [roomName,setRoomName]=useState("");

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={roomName}
                    onChange={(event)=>{
                        setRoomName(event.target.value);
                    }}
                />
                <Button
                    title="방 개설하기"
                    onClick={()=>{
                        navigate("/create-room");
                    }}
                />
                <TextInput
                    height={20}
                    value={roomName}
                    onChange={(event)=>{
                        setRoomName(event.target.value);
                    }}
                />
                <Button
                    title="방 참여하기"
                    onClick={()=>{
                        navigate("/participate-room");
                    }}
                />
            </Container>
        </Wrapper>
    )
}