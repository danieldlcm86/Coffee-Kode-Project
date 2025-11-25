
import React from "react";
import AccordionReusable from "./Accordion";

export default function FaqsAccordion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <AccordionReusable
                panelKey="panel1"
                title="Personal Data"
                expanded={expanded}
                onChange={handleChange}
            >
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            </AccordionReusable>

            <AccordionReusable
                panelKey="panel2"
                title="Configuration"
                expanded={expanded}
                onChange={handleChange}
            >
                Configuración interna del usuario.
            </AccordionReusable>

            <AccordionReusable
                panelKey="panel3"
                title="Billing"
                expanded={expanded}
                onChange={handleChange}
            >
                Detalles de facturación y pagos.
            </AccordionReusable>
        </div>
    );
}
