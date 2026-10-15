// Draft family tree built from the chapter text. Add years only after checking the textbook.
export const meta = { title: "Chhatrapatis and Peshwas", status: "draft" };
export const intro = `Two lines of leaders: the Chhatrapatis of Shivaji's family, and the Peshwas who rose to great influence.`;

export const chart = {
  type: "dynasty",
  rulers: [
    {
      name: "Shahji Bhonsle", note: "Served the Deccan sultanates; father of Shivaji.",
      children: [
        {
          name: "Chhatrapati Shivaji", years: "1630–1680", note: "Founded the Maratha kingdom.",
          children: [
            {
              name: "Sambhaji", note: "Became Chhatrapati after Shivaji; captured and executed by Aurangzeb.",
              children: [
                { name: "Chhatrapati Shahu Maharaj", note: "Sambhaji's son; shown in counsel with Nanasaheb Peshwa." }
              ]
            },
            { name: "Rajaram", note: "Fled to Gingee. His queen Tarabai led the Marathas after his death." }
          ]
        },
        { name: "Ekoji", note: "Shivaji's half-brother; conquered the Thanjavur region." }
      ]
    },
    {
      name: "The Peshwas (prime ministers)", note: "Wielded great influence, even over the Chhatrapati.",
      children: [
        { name: "Peshwa Bajirao I", note: "Key to the all-India expansion.",
          children: [{ name: "Nanasaheb Peshwa", note: "His son, also key to the expansion." }] },
        { name: "Peshwa Madhavrao I", note: "Under him the Marathas recovered after Panipat." }
      ]
    }
  ]
};