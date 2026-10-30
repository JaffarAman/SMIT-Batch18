import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import Button from '@mui/material/Button'
import { Autocomplete, Box, Divider, Stack, TextField } from '@mui/material'
import top100Films from './top100movies'
import ResponsiveAppBar from './components/navbar'

function App () {
  const [error, setError] = useState(false)

  return (
    <>
      {/* <Box
        component={'div'}
        sx={{
          background: 'red',
          width: '800px',
          mt: '120px',
          display: 'flex',
          justifyContent: 'center',
          transition: 'all 0.6s ease',
          ':hover': {
            background: 'green'
          },
          button: {
            background: 'orange'
          }
        }}
      >
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Box> */}

      {/* <Stack direction={"row"}   >
        <h1>Hello world</h1>
        <h1>Hello Saylani</h1>
      </Stack> */}

      {/* <Stack sx={{ justifyContent: 'center', gap: 3 }}>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <TextField id='filled-basic' label='Filled' variant='filled' />
        <TextField id='standard-basic' label='Standard' variant='standard' />
      </Stack>

      <TextField
        variant='outlined'
        label='Enter your name'
        placeholder='Enter name'
      />
      <TextField
        variant='filled'
        label='Enter your name'
        placeholder='Enter name'
      />
      <TextField
        variant='standard'
        label='Enter your name'
        placeholder='Enter name'
      />

      <Stack
        direction={'row'}
        divider={<Divider orientation='vertical' flexItem />}
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack> */}

      {/* <TextField
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        // slotProps={{
        //   fieldset: {
        //     sx: {
        //       border: '1px solid red !important'
        //     }
        //   }
        // }}
        sx={{
          width: '300px',
          // border : "1px solid red"
          // fieldSet
          // '.css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline ': {
          //   borderColor: 'black !important'
          // }

          '&.MuiFormControl-root  fieldset': {
            borderColor: 'black !important'
          }
        }}
      /> */}

      <Button
        sx={{
          background: {
            xs: 'red',
            sm: 'blue',
            md : "orange"
          }
        }}
      >
        CLICK
      </Button>

      {/* <ResponsiveAppBar />


      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300 }}
        getOptionLabel={options => options.value}
        getOptionValue={options => options.value}
        renderInput={params => <TextField {...params} label='Movie' />}
      />

      <TextField
        label='Enter your email'
        variant='outlined'
        error={error}
        helperText={error ? 'Please enter your email...' : ''}
        color='warning'
        multiline
        rows={4}
      />

      <button onClick={() => setError(!error)}>
        {error ? 'Clear Error' : 'Generate Error'}
      </button> */}
    </>
  )
}

export default App
