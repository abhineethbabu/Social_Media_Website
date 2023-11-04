import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          IIITDM Kurnool
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/iiitdm_logo.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}> </Typography>
        <Typography color={medium}>iiitk.ac.in</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        The Indian Institute of Information Technology Design and Manufacturing,
        Kurnool, is a technical education institute in the field of Information
        Technology established by MHRD, Government of India in 2015
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
