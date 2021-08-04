import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar, Icon, TextField, InputAdornment, SvgIcon
} from '@material-ui/core';
import MuiArrowRightIcon from '@material-ui/icons/ArrowRight';
import { ArrowRight as ArrowRightIcon, Search as SearchIcon } from 'react-feather';

const products = [
  {
    id: uuid(),
    name: 'Delowar Hossain',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Sabrina',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Shakir Ahmed',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Moni',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'Liza Akhter',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];

const LatestProducts = (props) => (
  <Card {...props}>
    <Box sx={{ maxWidth: 500, padding: 2 }}>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon
                fontSize="small"
                color="action"
              >
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          )
        }}
        placeholder="Search customer"
        variant="outlined"
      />
    </Box>
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          href="/"
          component="a"
          button
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <Avatar
              src={product.imageUrl}
              alt={product.name}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${product.updatedAt.fromNow()}`}
          />
          <Icon
            edge="end"
            size="small"
          >
            <ArrowRightIcon />
          </Icon>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<MuiArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestProducts;
