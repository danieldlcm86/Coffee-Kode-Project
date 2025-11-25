
import React from "react";
import AccordionReusable from "./Accordion";
import { Container, Typography } from "@mui/material";
import kitBienvenida from "../../assets/kit-bienvenida.jpg"

export default function FaqsAccordion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            < Typography variant="h4" component="h2" gutterBottom
                sx={{textAlign: "center", marginTop: "30px", fontFamily:"'Fraunces', sans-serif"}}
            >
            Preguntas Frecuentes
            </Typography>
            < Container maxWidth="md" sx={{ marginTop: "50px", marginBottom: "50px" }}>
                <AccordionReusable
                    panelKey="panel1"
                    title="¿Existen tiendas físicas de Coffee Kode?"
                    expanded={expanded}
                    onChange={handleChange}
                >
                    Por el momento todos nuestros productos son únicamente vendidos dentro de nuestro sitio web.
                </AccordionReusable>

                <AccordionReusable
                    panelKey="panel2"
                    title="¿Qué incluye nuestro kit de bienvenida a CoffeeKode?"
                    expanded={expanded}
                    onChange={handleChange}
                >
                    Nuestro kit de bienvenida está diseñado para que te enamores de nuestros sabores, dentro encontraras pequeños paquetes de prueba con las diferentes variedades de café para que no te quedes con las ganas de probar todos y cada uno de nuestros cafés de especialidad, y que puedes encontrar dentro de nuestra tienda virtual.
                    <img src={kitBienvenida} alt="Kit de bienvenida CoffeeKode" style={{ width: "50%", marginTop: "10px" }} />
                </AccordionReusable>

                <AccordionReusable
                    panelKey="panel3"
                    title="¿Cómo funcionan los envíos?"
                    expanded={expanded}
                    onChange={handleChange}
                >
                    Se crea un número de orden al momento en el que el cliente hace un pago. La orden es procesada por el equipo interno de Coffee Kode. Una vez que la orden sea aprobada, será enviado por la paquetería correspondiente. La entrega de envíos tardará de 2 a 3 días hábiles para áreas metropolitanas y de 3 a 5 días hábiles para zonas extendidas en México.
                </AccordionReusable>
                <AccordionReusable
                    panelKey="panel4"
                    title="¿Cómo puedo conocer el estado de mi pedido?"
                    expanded={expanded}
                    onChange={handleChange}
                >
                    Recibirás una confirmación vía correo electrónico, incluiremos una guía de rastreo para que sepas con mayor precisión cuando esperar tus productos.
                </AccordionReusable>
                <AccordionReusable
                    panelKey="panel5"
                    title="¿Cuáles son las políticas de envío"
                    expanded={expanded}
                    onChange={handleChange}
                >
                    En compras superiores a $499.00MXN tu envío es gratis para cualquier parte de la República Mexicana.
                </AccordionReusable>
                <AccordionReusable
                    panelKey="panel6"
                    title="¿Cómo solicito factura de mi compra?"
                    expanded={expanded}
                    onChange={handleChange}
                >
                    Envíanos un correo con tu constancia de situación fiscal y tu dirección de correo electrónico a {" "}
                    <a
                        href="mailto:facturacion@coffekode.com"
                        style={{ fontWeight: "bold", textDecoration: "underline" }}
                    >
                        facturacion@coffekode.com
                    </a> y, en un máximo de 5 días hábiles te enviaremos tu factura.
                </AccordionReusable>
                <AccordionReusable
                    panelKey="panel7"
                    title="¿Cómo puedo comunicarme con servicio al cliente?"
                    expanded={expanded}
                    onChange={handleChange}
                >
                    Envíanos un correo electrónico a {" "}
                    <a
                        href="mailto:atnClientes@coffekode.com"
                        style={{ fontWeight: "bold", textDecoration: "underline" }}
                    >
                        atnClientes@coffekode.com
                    </a> indicándonos el problema que tuviste y un número de teléfono al cual podamos contactarte. Nuestro equipo de atención a clientes se comunicará lo antes posible contigo para ayudarte.
                </AccordionReusable>
            </Container>
        </div>
    );
}
