// Draft map data for the later vector map engine. Kinds follow the textbook's legend.
// Coordinates are approximate (degrees N, E): check them before building the map.
export const meta = { title: "Shivaji's kingdom, about 1680", status: "draft" };
export const description = "Shivaji's territory along the west coast and in the South, with his forts, ports and cities, and the nearby territory of his half-brother Ekoji.";

export const places = [
  { name: "Territory under Chhatrapati Shivaji", kind: "region", note: "a strip along the west coast, a block around Gingee and Vellore, and a patch near Koppal" },
  { name: "Territory under Ekoji", kind: "region", note: "around Thanjavur" },

  { name: "Raigad", kind: "hill-fort", lat: 18.23, lng: 73.44 },
  { name: "Pratapgad", kind: "hill-fort", lat: 17.93, lng: 73.58 },
  { name: "Koppal", kind: "hill-fort", lat: 15.35, lng: 76.15 },
  { name: "Gingee", kind: "hill-fort", lat: 12.25, lng: 79.42 },

  { name: "Vijaydurg", kind: "coastal-fort", lat: 16.56, lng: 73.33 },
  { name: "Sindhudurg", kind: "coastal-fort", lat: 16.04, lng: 73.46 },

  { name: "Vellore", kind: "land-fort", lat: 12.92, lng: 79.13 },

  { name: "Dabhol", kind: "port", lat: 17.59, lng: 73.17 },
  { name: "Rajapur", kind: "port", lat: 16.66, lng: 73.52 },
  { name: "Malwan", kind: "port", lat: 16.06, lng: 73.47 },
  { name: "Vengurla", kind: "port", lat: 15.86, lng: 73.63 },
  { name: "Porto Novo", kind: "port", lat: 11.50, lng: 79.77 },

  { name: "Mumbai", kind: "city", lat: 18.97, lng: 72.82 },
  { name: "Pune", kind: "city", lat: 18.52, lng: 73.86 },
  { name: "Kolhapur", kind: "city", lat: 16.70, lng: 74.24 },
  { name: "Thanjavur", kind: "city", lat: 10.79, lng: 79.14 },

  { name: "Goa", kind: "foreign", note: "foreign power" },
  { name: "Puducherry", kind: "foreign", note: "foreign power" }
];