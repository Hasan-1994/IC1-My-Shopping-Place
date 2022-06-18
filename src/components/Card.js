import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Cards(props) {
    const { product, onAdd } = props;
    return (
        <div className="Card">
            <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    height={'auto'}
                    component="img"
                    image={product.img}
                    alt={product.des}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.des}
                    </Typography>
                    <Typography variant="body3" color="text.primary">
                        {product.price},00 €
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className="addToCardBtn" onClick={() => onAdd(product)}>Add to Card<AddShoppingCartIcon/></Button>
                </CardActions>
            </Card>
        </div>

    );
}
export default Cards;