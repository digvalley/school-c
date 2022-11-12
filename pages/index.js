import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Home() {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ]
  return (
    <Container>
      <Head>
        <title>Skole Kalendar</title>
        <meta name='description' content='Julekalender' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          type: 'spring',
          stiffness: 100,
          delay: 0.5,
        }}
      >
        Julekalender 22
      </Header>
      <Calendar
        initial={{ x: 900 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {days.map((day) => (
          <Tile disabled={day === 1} key={'c_' + day}>
            {day}
          </Tile>
        ))}
      </Calendar>

      <footer></footer>
    </Container>
  )
}
const Header = styled(motion.h1)`
  font-family: 'Mountains of Christmas', cursive;
  letter-spacing: 0.1rem;
  font-size: 3.5rem;
  color: crimson;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0rem 0 10rem 0;
`

const Calendar = styled(motion.main)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 900px;
  width: 100%;
`
const Tile = styled.div`
  display: flex;
  font-family: 'Mountains of Christmas', cursive;
  font-size: 3rem;
  flex-basis: 23%;
  min-height: 100px;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid white;
  cursor: pointer;
  color: ${(props) => (props.disabled ? '#00000070' : 'black')};
  background: ${(props) => (props.disabled ? '#ffffff20' : '#ffffffc2')};
  transition: all 0.2s ease-in-out;
  &:hover {
    ${(props) =>
      props.disabled
        ? ''
        : 'background-color:#ff0000c2;color: white;transform: scale(1.1);'}
  }
`
