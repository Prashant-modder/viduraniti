// SAMPLE generation chart (verify years). Copy to .../chapter-X/charts/mauryan-dynasty.js
export const meta = { title: "Mauryan rulers", status: "draft" };

export const chart = {
  type: "dynasty",
  rulers: [
    {
      name: "Chandragupta Maurya", years: "c. 321–297 BCE", note: "Founder of the empire.",
      children: [
        {
          name: "Bindusara", years: "c. 297–273 BCE",
          children: [{ name: "Ashoka", years: "c. 268–232 BCE", note: "Known for his edicts." }]
        }
      ]
    }
  ]
};