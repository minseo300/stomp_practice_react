import Axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import axios from 'axios';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const Text = styled.p`
    font-size: 20px;
    line-height: 10px;
    white-space: pre-wrap;
`;

function LoginPage(props){
    const navigate = useNavigate();
    
    const [name,setName]=useState("");
    return(

        <Wrapper>
            <Container>
                <Text>이름</Text>
                <TextInput
                    height={20}
                    value={name}
                    onChange={(event)=>{
                        setName(event.target.value);
                    }}
                />
                <Button
                    title="start"
                    onClick={()=>{
                        if(name.length==0) alert("이름을 입력하세요!");
                        else{
                            var data={
                                name:name
                            }
                            Axios.post('http://localhost:8080/login',data)
                            .then(function(response){
                                console.log(response.data)
                                console.log(response.data.result.memberId)
                                navigate('')
                            });
                        }
                    }}
                />
            </Container>
        </Wrapper>
    )
}

export default LoginPage;