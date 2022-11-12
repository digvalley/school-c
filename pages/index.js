import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [show, setShow] = useState(false)
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
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          type: 'spring',
          stiffness: 100,
          delay: 0.3,
        }}
      >
        Julekalender{' '}
        <span style={{ color: 'black', fontSize: '5rem' }}>&apos;22</span>
      </Header>
      <Calendar
        initial={{ x: 900 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {days.map((day) => (
          <Tile
            disabled={day === 1}
            onClick={(_) => setShow(true)}
            today={day === 4}
            key={'c_' + day}
          >
            {day}
          </Tile>
        ))}
      </Calendar>

      <footer></footer>
      <Modal show={show} setShow={setShow} />
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
  user-select: none;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid white;
  cursor: pointer;
  color: ${(props) =>
    props.disabled ? '#00000070' : props.today ? 'red' : 'black'};
  background: ${(props) => (props.disabled ? '#ffffff20' : '#ffffffc2')};
  transition: all 0.2s ease-in-out;
  &:hover {
    ${(props) =>
      props.disabled
        ? ''
        : 'background-color:#ff0000c2;color: white;transform: scale(1.1);'}
  }
`
const ModalWrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
  //blur filter
  backdrop-filter: blur(5px);
`
const Modal = styled(({ className, show, setShow }) => {
  if (!show) return null

  useEffect(() => {
    //listen for esc key
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setShow(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])
  return (
    <ModalWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        className={className}
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          type: 'spring',
          stiffness: 100,
          delay: 0.3,
        }}
      >
        <h1>Headline</h1>
        <h2>sub headline</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <CloseModalBtn onClick={(_) => setShow(false)} />
      </motion.div>
    </ModalWrapper>
  )
})`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1rem;
  min-width: 450px;
  min-height: 300px;
  max-width: 700px;
  background-color: white;
  border-radius: 0.5rem;
  background: url('/xmas.jpg');
  background-size: fill;
  & > h1,
  h2 {
    margin: 0;
  }
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
`

const CloseModalBtn = styled(({ className, onClick }) => {
  return <div className={className} onClick={onClick} />
})`
  height: 30px;
  width: 30px;
  background-color: black;
  position: absolute;
  top: -18px;
  right: -15px;
  color: white;
  border-radius: 999rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:after {
    display: inline-block;
    align-self: center;
    content: '\\00d7';
  }

  &:hover {
    font-weight: bold;
  }
`
