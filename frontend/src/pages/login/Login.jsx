import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'


const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(mind-width: 1000px');



  return (
    <Box>
      <Box width='100%' backgroundColor={theme.palette.background.alt}>
        <Typography
            fontWeight="bold"
            fontSize="32px"
            color="primary">
            Fakebook
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p='2rem'
        m='2rem auto'
        borderRadius='1.5rem'
        backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight='500' variant='h5' sx={{mb: '1.5rem'}}>
            Welcome to Fakebook, a Facebook clone!
          </Typography>
      </Box>
    </Box>
  )
}

export default Login