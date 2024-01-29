import { Grid, List, ListItem, Typography, makeStyles } from '@material-ui/core';
import personalPicture from "../assets/images/me_skyone.jpg"
import akaliPic from "../assets/images/akali2.jpg"
//* import { Instagram, GitHub, LinkedIn } from '@material-ui/icons';
import { PokeAPICard } from '../components/PokeAPICard/PokeAPICard';

const useStyles = makeStyles((theme) => {
  return {
    page: {
      color: theme.palette.text.primary,
    },
    personalImageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "4rem",
    },
    personalImage: {
      width: "100%",
      flexGrow: 0.5,
      filter: `drop-shadow(2px 2px 3px ${theme.palette.text.primary})`,
      borderRadius: "4px"
    },
    imageContainer: {
      display: "flex",
      gap: "2rem"
    },
    image: {
      width: "50%",
      filter: `drop-shadow(2px 2px 3px ${theme.palette.text.primary})`,
      borderRadius: "4px"
    }
  };
})

export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.page}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1"> About me </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe
            magni quibusdam, amet voluptatibus numquam aliquam illo? Minus iure,
            sapiente ab voluptatum eius impedit ratione perspiciatis quisquam
            velit dolorum eos consequuntur quae sed tempora, omnis quo totam
            magnam dicta voluptas quas necessitatibus vitae possimus aliquid.
            Quod assumenda dolore molestiae officiis.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.personalImageContainer}>
          <img
            className={classes.personalImage}
            src={personalPicture}
            alt="A picture of me"
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.imageContainer}>
          <img className={classes.image} src={akaliPic} alt="Picture of my dog Akali" />
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            soluta asperiores. Voluptate, illum modi? Architecto excepturi
            suscipit quas quibusdam officiis, ipsa est delectus repellendus
            inventore, autem minus magnam dolorum, iure dolore minima! Debitis,
            hic quis!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <PokeAPICard />
        </Grid>
      </Grid>
    </div>
  );
}
