import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import GamepadIcon from "@material-ui/icons/Gamepad";
import StarIcon from "@material-ui/icons/Star";

interface interests {
  title: string;
  icon: any;
  content: string[];
}

export const interests: interests[] = [
  {
    title: "Likes",
    icon: <ThumbUpIcon color="primary" fontSize="small" />,
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
    icon: <ThumbDownIcon color="primary" fontSize="small" />,
    content: [
      "New Brazilian Country Music",
      "DMing TTRPG",
      "Insects",
      "Crowded gyms",
      "Living in a small town",
    ],
  },
  {
    title: "Hobbies",
    icon: <GamepadIcon color="primary" fontSize="small" />,
    content: [
      "Looking through my room's window",
      "Going for a walk (mainly with my dog, Akali)",
      "Playing League of Legends and TTPRGs (and other games)",
      "Gathering useless knowledge",
      "Going to the gym",
    ],
  },
  {
    title: "Favourite Media",
    icon: <StarIcon color="primary" fontSize="small" />,
    content: [
      "Pokémon Games",
      "One Piece",
      "Hades",
      "LoL lore",
      "Scott Pilgrim VS. The World (the books)",
    ],
  },
];
