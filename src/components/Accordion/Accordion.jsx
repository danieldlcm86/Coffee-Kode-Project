import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionReusable({
    panelKey,
    title,
    children,
    expanded,
    onChange,
    summarySx = {},
    accordionSx = {},
}) {
    return (
        <Accordion
            expanded={expanded === panelKey}
            onChange={onChange(panelKey)}
            sx={accordionSx}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panelKey}-content`}
                id={`${panelKey}-header`}
                
            >
                <Typography component="span" sx={{...summarySx, fontFamily:"'Fraunces', sans-serif" }}>
                    {title}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
}
