export interface Book { slug: string; title: string }
export type BookMap = Record<string, Book>;

const b = (slug: string, title: string): Book => ({ slug, title });

export const SUBJECT_LABELS: Record<string, string> = {
  english: 'English',
  mathematics: 'Mathematics',
  hindi: 'Hindi',
  urdu: 'Urdu',
  'physical-education': 'Physical Education',
  arts: 'Arts',
  twau: 'Our Wondrous World (TWAU)',
  'social-science': 'Social Science',
  sanskrit: 'Sanskrit',
  science: 'Science',
  'vocational-education': 'Vocational Education',
  'skill-education': 'Skill Education',
};

const CLASS_1_2: BookMap = {
  english: b('mridang', 'Mridang'),
  mathematics: b('santoor', 'Santoor'),
  hindi: b('sarangi', 'Sarangi'),
  urdu: b('shahnai', 'Shahnai'),
};

const CLASS_3_5: BookMap = {
  english: b('santoor', 'Santoor'),
  mathematics: b('math-mela', 'Math Mela'),
  hindi: b('veena', 'Veena'),
  urdu: b('sitaar', 'Sitaar'),
  'physical-education': b('khela-yoga', 'Khela Yoga'),
  arts: b('bansuri-i', 'Bansuri-I'),
  twau: b('our-wondrous-world', 'Our Wondrous World'),
};

const CLASS_6_8: BookMap = {
  english: b('poorvi', 'Poorvi'),
  mathematics: b('ganit-prakash', 'Ganit Prakash'),
  hindi: b('malhar', 'Malhar'),
  urdu: b('khayal', 'Khayal'),
  'physical-education': b('khela-yoga', 'Khela Yoga'),
  arts: b('kriti', 'Kriti'),
  'social-science': b('exploring-society', 'Exploring Society: India and Beyond'),
  sanskrit: b('deepkam', 'Deepkam'),
  science: b('curiosity', 'Curiosity'),
  'vocational-education': b('kaushal-bodh', 'Kaushal Bodh'),
};

const CLASS_9_10: BookMap = {
  english: b('kaveri', 'Kaveri'),
  mathematics: b('ganita-manjari', 'Ganita Manjari'),
  hindi: b('ganga', 'Ganga'),
  urdu: b('jamuna', 'Jamuna'),
  'physical-education': b('khel-praveen', 'Khel Praveen'),
  arts: b('madhurima', 'Madhurima'),
  'social-science': b('understanding-society', 'Understanding Society: India and Beyond'),
  sanskrit: b('sharda', 'Sharda'),
  science: b('exploration', 'Exploration'),
  'skill-education': b('kaushal-vikas', 'Kaushal Vikas'),
};

export const BOOKS: Record<string, BookMap> = {
  '1': CLASS_1_2, '2': CLASS_1_2,
  '3': CLASS_3_5, '4': CLASS_3_5, '5': CLASS_3_5,
  '6': CLASS_6_8, '7': CLASS_6_8, '8': CLASS_6_8,
  '9': CLASS_9_10, '10': CLASS_9_10,
};

export const CLASSES = Object.keys(BOOKS).map(Number);