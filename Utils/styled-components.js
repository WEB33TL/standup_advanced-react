import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  
  input[type=text] {
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 0 20px;
    padding: 2px;
    outline: none;
    width: 80%;
    text-align: center;
    letter-spacing: 0.1rem;
    font-size: 15px;
    transition: border-color 300ms linear;

    &:focus {
      border-color: black;
      transition: border-color 300ms linear;
    }
  }

  input[type=submit] {
    background-color:transparent;
    border: 1px solid gray;
    padding: 7px 10px;
    border-radius: 10px;
    font-size: 11px;
  }
`
