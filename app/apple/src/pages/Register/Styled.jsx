import styled from 'styled-components'

export const InputText=styled.input`
    border: 1px solid rgb(180,180,180);
    border-radius:0.2rem;
    padding:1rem;
    outline: none;
    display: block;
    &:focus {
        box-shadow: 0px 0px 4px 1px rgb(100,191,255);
        border: 1px solid rgb(0,121,255);
    }
    
`
export const Select=styled.select`
    border: 1px solid rgb(180,180,180);
    border-radius:0.2rem;
    padding:1rem;
    outline: none;
    display: block;
    &:focus {
        box-shadow: 0px 0px 4px 1px rgb(100,191,255);
        border: 1px solid rgb(0,121,255);
    }
`
export const RegisterBtn=styled.button`
border:none;
padding: 0.5rem 1rem;
background-color: rgb(30,144,255);
color:white;
border-radius: 3rem;
`