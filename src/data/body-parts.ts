export interface BodyPartGroup {
  name: string
  emoji: string
  slugs: string[]
}

export const bodyParts: BodyPartGroup[] = [
  {
    name: 'Head & Brain',
    emoji: '🧠',
    slugs: ['headache', 'migraine', 'cluster-headache', 'frequent-headaches', 'memory-problems', 'difficulty-concentrating'],
  },
  {
    name: 'Eyes',
    emoji: '👁️',
    slugs: ['eye-twitching', 'eye-redness', 'eye-pain', 'vision-blurry'],
  },
  {
    name: 'Ears, Nose & Throat',
    emoji: '👂',
    slugs: ['ear-pain', 'ringing-in-ears', 'hearing-loss', 'runny-nose', 'stuffy-nose', 'sneezing', 'loss-of-smell', 'loss-of-taste', 'sore-throat', 'throat-pain', 'sinus-pressure'],
  },
  {
    name: 'Mouth & Jaw',
    emoji: '🦷',
    slugs: ['tooth-pain', 'jaw-pain', 'dry-mouth', 'bad-breath', 'bleeding-gums', 'mouth-sores'],
  },
  {
    name: 'Chest & Heart',
    emoji: '❤️',
    slugs: ['chest-pain', 'chest-tightness', 'heart-racing', 'irregular-heartbeat', 'shortness-of-breath', 'rib-pain'],
  },
  {
    name: 'Stomach & Digestion',
    emoji: '🫃',
    slugs: ['stomach-pain', 'nausea', 'bloating', 'constipation', 'acid-reflux', 'heartburn', 'stomach-cramps', 'upper-abdominal-pain', 'lower-abdominal-pain', 'frequent-burping', 'excessive-gas', 'difficulty-swallowing', 'green-poop', 'hemorrhoids'],
  },
  {
    name: 'Back & Spine',
    emoji: '🦴',
    slugs: ['back-pain', 'neck-pain', 'tailbone-pain'],
  },
  {
    name: 'Arms, Legs & Joints',
    emoji: '💪',
    slugs: ['joint-pain', 'muscle-cramps', 'muscle-weakness', 'shoulder-pain', 'knee-pain', 'hip-pain', 'ankle-pain', 'foot-pain', 'wrist-pain', 'elbow-pain', 'numbness-tingling', 'swollen-legs', 'varicose-veins'],
  },
  {
    name: 'Skin & Hair',
    emoji: '🧴',
    slugs: ['skin-rash', 'itchy-skin', 'dry-skin', 'bruising-easily', 'hair-loss', 'brittle-nails', 'excessive-sweating'],
  },
  {
    name: 'Energy & Sleep',
    emoji: '😴',
    slugs: ['fatigue', 'tired-all-the-time', 'cant-sleep', 'night-sweats'],
  },
  {
    name: 'Mental Health & Mood',
    emoji: '🧘',
    slugs: ['anxiety-symptoms', 'depression-symptoms', 'mood-swings', 'irritability', 'difficulty-concentrating', 'memory-problems'],
  },
  {
    name: 'Whole Body & General',
    emoji: '🌡️',
    slugs: ['fever', 'chills', 'fatigue', 'weight-loss-unexplained', 'weight-gain', 'loss-of-appetite', 'swollen-lymph-nodes', 'cold-hands-feet', 'hot-flashes'],
  },
  {
    name: 'Urinary & Reproductive',
    emoji: '🫀',
    slugs: ['frequent-urination', 'painful-urination', 'blood-in-urine', 'missed-period', 'painful-periods', 'vaginal-discharge', 'erectile-dysfunction'],
  },
  {
    name: 'Blood Pressure & Circulation',
    emoji: '💉',
    slugs: ['high-blood-pressure', 'low-blood-pressure'],
  },
]
