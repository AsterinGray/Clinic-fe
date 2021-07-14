import styled from 'styled-components'
import { blue, yellow } from '../../../styles/colors'

export const Section = styled.section`
  padding: 2rem 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 6px rgba(50, 50, 93, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 50%;
  min-height: 50vh;
`

export const Title = styled.h1`
  color: ${blue};
  font-size: 5rem;
  margin: 0 0 2rem 0;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  flex-direction: column;

  label,
  input {
    font-size: 2rem;
  }
`

export const Button = styled.div`
  button {
    background-color: ${yellow};
    border-radius: 8px;
    padding: 0.5rem 2rem;
    font-size: 2rem;
    cursor: pointer;
  }
`
