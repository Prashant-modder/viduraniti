export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Arrange the worldwide means of communication given below in the timeline provided (old to new). Share your answers with your classmates and teacher.",
    items: [
      {
        n: 1, type: "order",
        figure: { src: "images/communication-means.png", alt: "Six means of communication: 1 telephone, 2 email, 3 postcard, 4 telegraph, 5 mobile phone, 6 carrier pigeons" },
        question: "Arrange the means of communication from the oldest to the newest.",
        items: ["telephone", "email", "postcard", "telegraph", "mobile phone", "carrier pigeons"],
        answer: [6, 4, 3, 1, 5, 2]
      },
      {
        n: 2, type: "short",
        question: "Is this the only possible order?",
        answer: "Not exactly. Carrier pigeons are the oldest and the telegraph, postcard and telephone follow in that order. Email and the mobile phone were both invented in the 1970s and came into everyday use around the same time, so the order of the last two can be debated."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Work in pairs and discuss the following things. Share your answers with your classmates and teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "The reasons for change in the means of communication over the years.",
        answer: "*(Discussion - sample answer.)* People wanted messages to travel faster, farther and more cheaply, and to be clearer. New inventions such as electricity, the telephone and the internet made this possible, and cheaper devices and networks made them available to everyone."
      },
      {
        n: 2, type: "activity",
        question: "The means of communication that you prefer to use and the reason for your choice.",
        answer: "*(Personal answer - sample.)* I prefer video calls with my grandparents because I can see their faces and hear their voices, and it feels like they are with me."
      },
      {
        n: 3, type: "activity",
        question: "Communication through social media: its benefits and precautions that one should take against its misuse.",
        answer: [
          "*(Discussion - sample answer.)*",
          "- **Benefits:** quick contact with family and friends, sharing of ideas and news, learning and awareness campaigns.",
          "- **Precautions:** never share passwords or private information, do not talk to strangers, verify news before forwarding it, be polite and never bully, and limit screen time."
        ]
      }
    ]
  }
];
