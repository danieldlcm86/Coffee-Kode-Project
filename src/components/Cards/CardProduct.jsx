import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '../Button/Button';

export default function CardProduct({ image, title, description, buttonText }) {
    return (
        <Card sx={{
            maxWidth: "280px",
            padding: "10px",
            height: "480px",
            backgroundColor: "#E4E4E4",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",       // 👈 clave
            justifyContent: "space-between"
        }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="208px"
                    width="265px"
                    image={image}
                    alt={title}
                    sx={{
                        borderRadius: "4px",
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"
                        sx={{
                            fontFamily: "montserrat",
                            fontWeight: 700,
                            fontStyle: "normal",
                            fontSize: "18px",
                            textAlign: "center",
                            marginBottom: "10px"
                        }}>
                        {title}
                    </Typography>
                    <Typography variant="body2"
                        sx={{
                            color: 'text.secondary',
                            fontFamily: "montserrat",
                            fontSize: "15px",

                        }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            < Button href="#" text={buttonText} />
        </Card>
    );
}
