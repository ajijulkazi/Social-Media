import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return(
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h4" fontWeight="500">
                    Sponsored
                </Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="http://localhost:5000/assets/info5.jpg"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0"}}
            />
            <FlexBetween>
                <Typography color={main}>bKash limited</Typography>
                <Typography color={medium}>bkash.com</Typography>
            </FlexBetween>
            <Typography color={medium} m=".5rem 0">
                CashBack!! OFFER!! Great Opportunity to get Upto 40% cash back for bKash payment of any Outlet.
            </Typography>
        </WidgetWrapper>
    )
}

export default AdvertWidget;