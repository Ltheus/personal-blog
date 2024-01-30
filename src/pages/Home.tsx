import {
  Card,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import personalPicture from "../assets/images/me_skyone.jpg";
import dogPic from "../assets/images/me-and-dog.jpg";
import { PokeAPICard } from "../components/PokeAPICard/PokeAPICard";
import { useState } from "react";
import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      color: theme.palette.text.primary,
    },
    personalImageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    fontHollowEffect: {
      fontStyle: "italic",
      WebkitTextStrokeWidth: "2px",
      WebkitTextStrokeColor: `${theme.palette.text.primary}`,
      color: `${theme.palette.background.default}`,
    },
    cardHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "1rem"
    },
  };
});

export default function Home() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const interests = [
    {
      title: "Likes",
      content: [
        "Heavy Metal",
        "Tabletop RPG",
        "Coding",
        "Elaborate drinks",
        "Pokémon (as you could tell)",
      ],
    },
    {
      title: "Dislikes",
      content: [
        "Brazilian Country Music",
        "Insects",
        "Mastering TTRPG",
        "Crowded gym",
        "Tantrum children",
      ],
    },
    {
      title: "Hobbies",
      content: [
        "Writing fantasy narratives for RPG campaigns",
        "Walking (mainly with my dog, Akali)",
        "Playing League of Legends and D&D (and other games)",
        "Gathering useless knowledge",
        "Going to the gym",
      ],
    },
    {
      title: "Favourite Media",
      content: [
        "Pokémon Games",
        "One Piece",
        "Hades",
        "LoL lore",
        "Scott Pilgrim VS. The World",
      ],
    },
  ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.page}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} direction="row">
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Typography variant="h1">
                About <span className={classes.fontHollowEffect}>me</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                I'm Matheus (Theus for short) - he/him - a 19-year-old beginner
                Web Developer who's always been passionate about technology,
                arts, crafting, and video games. When I was younger, my dad was
                a car mechanic, and my older brother was an electronic engineer.
                With that, I always had the presence of this kind of
                prefessionals in my life, which is why I chose the job I do.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.personalImageContainer}>
          <ImageList rowHeight={300} cols={12}>
            <ImageListItem cols={5}>
              <img src={personalPicture} alt="A picture of me" />
            </ImageListItem>
            <ImageListItem cols={7}>
              <img src={dogPic} alt="A picture of me and my dog" />
            </ImageListItem>
          </ImageList>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardHeader
            className={classes.cardHeader}
              title="Interests"
              subheader="Likes, Dislikes, Hobbies and Favorite Media"
              action={
                <IconButton
                  color="primary"
                  onClick={handleExpandClick}
                >
                  {!expanded ? <ArrowCircleDown /> : <ArrowCircleUp/>}
                </IconButton>
              }
            />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                {interests.map((thing) => (
                  <List key={thing.title}>
                    <ListItem divider>
                      <ListItemText
                        primary={thing.title}
                        primaryTypographyProps={{ variant: "h6" }}
                      />
                    </ListItem>
                    {thing.content.map((item) => (
                      <ListItem>
                        <ListItemText>{item}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                ))}
              </Collapse>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <PokeAPICard />
        </Grid>
      </Grid>
    </div>
  );
}
