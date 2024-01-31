import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import personalPicture from "../assets/images/me_skyone.jpg";
import dogPic from "../assets/images/me-and-dog.jpg";
import fiapLogo from "../assets/images/fiap.png";
import cinepolisLogo from "../assets/images/cinepolis.png";
import languagesLogos from "../assets/images/programming.jpg";
import { useState } from "react";
import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      color: theme.palette.text.primary,
      margin: "1rem 6rem",
      overflowY: "visible"
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
      color: "transparent",
    },
    fontGradientEffect: {
      background: `linear-gradient(120deg, ${theme.palette.text.primary}, ${theme.palette.text.secondary})`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    cardHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "1rem",
    },
    interestList: {
      padding: "0 1.5rem",
    },
    interestListItem: {
      borderTop: `solid 1px ${theme.palette.primary.main}`,
    },
    workList: {
      padding: "0 .8rem",
    },
    workCard: {
      margin: ".25rem 0",
      borderTop: `solid 1px ${theme.palette.primary.main}`,
    },
  };
});

export default function Home() {
  const classes = useStyles();
  const [expandedInterests, setExpandedInterests] = useState(false);
  const [expandedWork, setExpandedWork] = useState(false);

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
        "New Brazilian Country Music",
        "DMing TTRPG",
        "Insects",
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

  const work = [
    {
      name: "FIAP",
      title: "Graduation",
      description:
        "I'm in the second year of college, studying Systems Analysis and Development. Fun fact: I didn't initially plan to pursue a degree, but I decided to when I realized that certain things would be easier, such as landing a job in the field I enjoy.",
      image: `${fiapLogo}`,
    },
    {
      name: "Cinépolis",
      title: "Intern",
      description:
        "In the second semester of 2022, I worked as an intern in the HR department at Cinépolis. It was enjoyable, especially because I could go to the movies EVERY day without paying anything. However, it wasn't what I wanted, among other reasons, so I ended up leaving and decided to start college.",
      image: `${cinepolisLogo}`,
    },
    {
      name: "Other knowledges",
      title: "Languages, programming and other abilities.",
      description: `I have advanced English skills and knowledge in Python3, HTML5, CSS3, JavaScript, TypeScript, ReactJS, and a basic understanding of NextJS and quickly learn new things. Also pretty good at math!`,
      image: `${languagesLogos}`,
    },
  ];

  const handleExpandInterestsClick = () => {
    setExpandedInterests(!expandedInterests);
  };

  const handleExpandWorkClick = () => {
    setExpandedWork(!expandedWork);
  };

  return (
    <div className={classes.page}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">
            <span className={classes.fontGradientEffect}>About me</span>
          </Typography>
          <Typography variant="body1">
            I'm Matheus (Theus for short) - he/him - a 19-year-old beginner Web
            Developer who's always been passionate about technology, arts,
            crafting, and video games. When I was younger, my dad was a car
            mechanic, and my older brother was an electronic engineer. With
            that, I always had the presence of this kind of prefessionals in my
            life, which is why I chose the job I do.
          </Typography>
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
                  onClick={handleExpandInterestsClick}
                >
                  {!expandedInterests ? <ArrowCircleDown /> : <ArrowCircleUp />}
                </IconButton>
              }
            />
            <Collapse in={expandedInterests} timeout="auto" unmountOnExit>
              {interests.map((thing) => (
                <List key={thing.title} className={classes.interestList}>
                  <ListItem className={classes.interestListItem}>
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
          <Card variant="outlined" className={classes.workList}>
            <CardHeader
              className={classes.cardHeader}
              title="Work and other knowledges"
              subheader="Graduation, past experiences, and other abilities"
              action={
                <IconButton color="primary" onClick={handleExpandWorkClick}>
                  {!expandedWork ? <ArrowCircleDown /> : <ArrowCircleUp />}
                </IconButton>
              }
            />
            <Collapse in={expandedWork} timeout="auto" unmountOnExit>
              {work.map((item) => (
                <Paper
                  square
                  elevation={0}
                  key={item.name}
                  className={classes.workCard}
                >
                  <CardHeader
                    className={classes.cardHeader}
                    title={item.name}
                    subheader={item.title}
                  />
                  <CardMedia>
                    <ImageList rowHeight={250} cols={12}>
                      <ImageListItem cols={12}>
                        <img src={item.image} alt="A picture of me" />
                      </ImageListItem>
                    </ImageList>
                  </CardMedia>
                  <CardContent>
                    <Typography variant="body1" gutterBottom>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Paper>
              ))}
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
