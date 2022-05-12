
import layer2 from "../assets/layer2.png";
import layer5 from "../assets/layer5.jpg";
//import layer4 from "../assets/layer4.mp4":

export enum StageType {
  RIDDLE,
  CHALLENGE,
  PHOTO,
  AUDIO,
  VIDEO,
}

export type Stage = {
  type: StageType;
  riddle?: Riddle;
  challenge?: Challenge;
  photo?: Photo;
  audio?: Audio;
  video?: Video;
};

export type Riddle = {
  location: string;
  clue: string;
  hint: string;
  code: string;
};

export type Challenge = {
  group: boolean;
  task: string;
};

export type Photo = {
  location: string;
  image: string;
  hint: string;
  code: string;
};

export type Audio = {
  location: string;
  sound: HTMLAudioElement;
  hint: string;
  code: string;
};
export type Video = {
  location: string;
  videos: string;
  hint: string;
  code: string;
};
export const stages: Stage[] = [
  {
    type: StageType.RIDDLE,
    riddle: {
      location: "Farook",
      clue: "Enter the code below..",
      hint: "",
      code: "2438",
    },
  },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task: "Get a photo of a stranger posing with the owl",
  //   },
  // },
  {
    type: StageType.PHOTO,
    photo: {
      location: "Arrow",
      image: layer2,
      hint: "",
      code: "Moulavi Abussabah Ahmed Ali",
    },
  },
  // {
  //   type: StageType.AUDIO,
  //   audio: {
  //     location: "The Elephant Wrestler",
  //     sound: new Audio(
  //       "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-audio-hero/audio_hero_ElephantsTrumpetAn_TE016001_344.mp3?_=2"
  //     ),
  //     hint:
  //       "Ha ha ha It's an Elephant, bet you wrestled with that one for a while!",
  //     code: "1234",
  //   },
  // },
  {
    type: StageType.VIDEO,
    video: {
      location: "The Elephant Wrestler",
      videos:"https://firebasestorage.googleapis.com/v0/b/treasure-hunt-ffb42.appspot.com/o/layer3.mp4?alt=media&token=60cf76bf-1625-4b2a-9168-ab8cddbbc599",
      hint:
        "",
      code: "11040",
    },
  },
  {
    type: StageType.VIDEO,
    video: {
      location: "The Elephant Wrestler",
      videos:"https://firebasestorage.googleapis.com/v0/b/treasure-hunt-ffb42.appspot.com/o/layer4.mp4?alt=media&token=96eb5233-0f42-436f-bae3-9101c67b30c2",
      hint:
        "",
      code:"NEARBY",
    },
  },
  {
    type: StageType.PHOTO,
    photo: {
      location: "frk",
      image: layer5,
      hint: "",
      code: "115",
    },
  },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task: "Crawl through one letter and jump over one letter",
  //   },
  // },
  // {
  //   type: StageType.PHOTO,
  //   photo: {
  //     location: "Man Statue",
  //     image: dude,
  //     hint: "Servilles",
  //     code: "9823",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: true,
  //     task: "Sit on the ground in a circle and meditate",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Park Tunnel",
  //     clue: "Become a Mole",
  //     hint: "Moles tunnel into the ground and make holes, there's one nearby",
  //     code: "6932",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: true,
  //     task: "Fit all people on one swing and swing it",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Lake Pupuke Jetty",
  //     clue: "-36.7853104, 174.7672319",
  //     hint: "Jetty",
  //     code: "3456",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task: "Dunk your head underwater",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Sink",
  //     clue: "I have a plug with no electricity",
  //     hint: "Outdoor Sink nearby",
  //     code: "2979",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task: "Do a hand stand for 4 seconds",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Above Rope Swing",
  //     clue: "a+💑(l=b) 🌹(s=p) s+💍(r=w)",
  //     hint: "Love, Rose & Ring. a+💑(l=b) is above",
  //     code: "5003",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task: "Climb half way up the tallest rope",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Chimney",
  //     clue: "I'm a heavy smoker so they said. I stand tall, big and red.",
  //     hint: "Santa might come down me, nearby",
  //     code: "4799",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task: "Make an Instagram Story Post and get 20 views",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Thirsty Liquor",
  //     clue:
  //       "I am a dangerous place, filled with aggresive bears. I am a haunted place, home to many spirits. My thirst is insatiable.",
  //     hint: "Bears and Spirits have two meanings. Thirsty ______",
  //     code: "9012",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: true,
  //     task:
  //       "Buy a bottle of rum and finish it between you. (180-200 ml bottle)",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Library",
  //     clue: "The smallest building with the most stories",
  //     hint: "Stories has two meanings",
  //     code: "8872",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task: "Earn money from a stranger for busking",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Tennis Court",
  //     clue: "796.342 GIFF",
  //     hint: "Melvil Dewey, they have a searchable website",
  //     code: "8849",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task: "Serve a tennis ball",
  //   },
  // },

  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: true,
  //     task:
  //       "Buy the person taller than you a drink, tallest buys shortest, could be time for payback?",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Takapuna Boat Club",
  //     clue: "A Catnap About Bulk",
  //     hint: "Takapuna Anagram",
  //     code: "1234",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task:
  //       "Stand at the front of the biggest boat and reinact the 'I'm Flying' Titanic Scene",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Hamster Wheel",
  //     clue: "Roue de Hamster",
  //     hint: "French, near where you started",
  //     code: "2938",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task: "Do a full 360 including going upside down",
  //   },
  // },
  // {
  //   type: StageType.AUDIO,
  //   audio: {
  //     location: "Tree Stump",
  //     sound: new Audio(
  //       "https://www.soundjay.com/mechanical/sounds/chainsaw-03.mp3"
  //     ),
  //     hint: "Tree Stump nearby",
  //     code: "9149",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: true,
  //     task: "Go down the biggest slide at the park",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Shower",
  //     clue: "... .... --- .-- . .-.",
  //     hint: "Morse, nearby",
  //     code: "1034",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: true,
  //     task:
  //       "Make a sandcastle taller than the waist of your shortest team member",
  //   },
  // },
  // {
  //   type: StageType.RIDDLE,
  //   riddle: {
  //     location: "Defibrillator",
  //     clue: "N3 W20",
  //     hint: "Shower => Direction => Steps, the answer is shocking!!",
  //     code: "8710",
  //   },
  // },
  // {
  //   type: StageType.CHALLENGE,
  //   challenge: {
  //     group: false,
  //     task: "Do a backflip off a swing",
  //   },
  // },
  // {
  //   type: StageType.PHOTO,
  //   photo: {
  //     location: "Mens Bathroom",
  //     image: treasureMap,
  //     hint: "Wheeee!!!!",
  //     code: "4733",
  //   },
  // },
];
