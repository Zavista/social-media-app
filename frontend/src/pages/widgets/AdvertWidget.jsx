import { Typography, useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBetween.jsx';
import WidgetWrapper from '../../components/WidgetWrapper.jsx';

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;


  return (
    <WidgetWrapper>
        <FlexBetween>
            <Typography color={dark} variant="h5" fontWeight='500'>
                Sponsored
            </Typography>
            <Typography color={medium}>Create Ad</Typography>
        </FlexBetween>
        <img
            width='100%'
            height='auto'
            alt='advert'
            src='http://localhost:3002/assets/info2.jpeg'
            style={{borderRadius: '0.75rem', margin:'0.75rem 0'}}
        >
        </img>
        <FlexBetween>
            <Typography color={main}>KFC</Typography>
            <Typography color={medium}>kfc.com</Typography>
        </FlexBetween>
        <Typography color={medium} m='0.5rem 0'>
            Indulge in KFC&apos;s iconic flavors today! Don&apos;t miss out! Come savor happiness in every bite! Visit us now and treat yourself! 
        </Typography>
    </WidgetWrapper>
  )
}

export default AdvertWidget