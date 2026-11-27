export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Letter"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const cover = {
  image: "image.png",
  alt: "Assorted traditional Indian kitchen spices including turmeric, fenugreek, cumin, cinnamon, cloves, ginger, black pepper, fennel, and cardamom",
  caption: "Everyday spices from an Indian kitchen"
};

export const intro = `A guided reading of "Spices that Heal Us", presented as an affectionate letter from Daadi to her grandchildren Vikram and Vaibhavi. The letter is explained part by part in simple words.`;

export const parts = [
  {
    heading: "Traditional Wisdom Passed Down",
    explain: `Daadi writes warmly to Vikram and Vaibhavi, happy to hear that the natural home remedies she suggested helped them recover. She encourages them to remember these cures and share them with friends, recalling how she learnt them as a child from her own grandmother, who treated common seasonal ailments using everyday kitchen spices.`,
    glossary: [
      { word: "home remedies", meaning: "traditional natural cures made at home for minor common ailments" }
    ]
  },
  {
    heading: "Turmeric, Fenugreek, Cumin, and Asafoetida",
    explain: `Daadi begins with *haldi* (turmeric), explaining that it boosts energy, improves digestion, and relieves body pain. Next, she mentions *methi* (fenugreek): soaking its seeds overnight and drinking the water in the morning helps her keep her blood sugar and body weight under control. Similarly, overnight-soaked *jeera* (cumin) water supports digestion and helps relieve sleeplessness. She fondly remembers applying *heeng* (asafoetida) water to Vikram and Vaibhavi's tummies for gas when they were babies, adding that *heeng* also helps ease cough and cold.`,
    glossary: [
      { word: "haldi", meaning: "turmeric" },
      { word: "methi", meaning: "fenugreek" },
      { word: "jeera", meaning: "cumin seeds" },
      { word: "heeng", meaning: "asafoetida" }
    ]
  },
  {
    heading: "Cinnamon, Clove, Ginger, Pepper, Fennel, Carom, and Cardamom",
    explain: `Daadi explains that *dalchini* (cinnamon) and *laung* (clove) ease toothache temporarily until one can see a dentist. *Adrak* (ginger)—used in Indian cooking for over four millennia—soothes cough, cold, and pain. *Kali mirch* (black pepper) aids digestion and relieves body aches. After meals, *saunf* (fennel seeds) and *ajwain* (carom seeds) are commonly offered to help digest food, while *elaichi* (cardamom) helps digestion, breathing troubles, and bad breath. Closing with love and blessings (*aashirwaad*), Daadi invites the children to identify these spices in their kitchen—while firmly reminding them never to use any remedy without asking an elder first.`,
    glossary: [
      { word: "dalchini", meaning: "cinnamon" },
      { word: "laung", meaning: "clove" },
      { word: "adrak", meaning: "ginger" },
      { word: "kali mirch", meaning: "black pepper" },
      { word: "saunf", meaning: "fennel seeds" },
      { word: "ajwain", meaning: "carom seeds" },
      { word: "elaichi", meaning: "cardamom" },
      { word: "aashirwaad", meaning: "blessings" }
    ]
  }
];

export const characters = [
  { name: "Daadi (Grandmother)", traits: ["affectionate", "wise", "caring", "safety-conscious"] },
  { name: "Vikram and Vaibhavi", traits: ["curious grandchildren", "eager to learn traditional kitchen wisdom"] }
];

export const themes = [
  "Indian kitchen spices offer rich traditional health benefits alongside flavour.",
  "Valuable knowledge passes lovingly from one generation to the next.",
  "Always consult an elder before using any natural home remedy."
];
