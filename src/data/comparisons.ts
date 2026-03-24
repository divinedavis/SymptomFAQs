export interface Comparison {
  slug: string
  title: string
  description: string
  symptomA: { name: string; slug: string; keyFeatures: string[]; onset: string; duration: string; reliefFactors: string; whenToWorry: string }
  symptomB: { name: string; slug: string; keyFeatures: string[]; onset: string; duration: string; reliefFactors: string; whenToWorry: string }
  keyDifference: string
  emergencyNote?: string
}

export const comparisons: Comparison[] = [
  {
    slug: 'heartburn-vs-heart-attack',
    title: 'Heartburn vs Heart Attack',
    description: 'Heartburn and heart attacks can feel remarkably similar. Learn the key differences and when to call 911.',
    symptomA: { name: 'Heartburn', slug: 'heartburn', keyFeatures: ['Burning sensation in chest/throat', 'Worse after eating or lying down', 'Sour taste in mouth', 'Relieved by antacids', 'No arm or jaw pain'], onset: 'Usually after meals or when lying down', duration: 'Minutes to hours, improves with antacids or position change', reliefFactors: 'Antacids, sitting upright, water, avoiding trigger foods', whenToWorry: 'Occurs more than twice a week or does not respond to antacids' },
    symptomB: { name: 'Heart Attack', slug: 'chest-pain', keyFeatures: ['Pressure or squeezing feeling', 'Radiates to arm, jaw, or back', 'Accompanied by sweating and nausea', 'Shortness of breath', 'NOT relieved by antacids'], onset: 'Can occur at rest or with exertion, often sudden', duration: 'Does not resolve on its own — persists and worsens', reliefFactors: 'Does not respond to antacids or position changes', whenToWorry: 'Call 911 immediately if you suspect a heart attack' },
    keyDifference: 'Heartburn typically has a burning quality and improves with antacids or sitting up. Heart attack pain is more like pressure or squeezing, does not improve with antacids, and may radiate to the arm or jaw.',
    emergencyNote: 'When in doubt, call 911. It is always better to rule out a heart attack.',
  },
  {
    slug: 'cold-vs-flu',
    title: 'Cold vs Flu',
    description: 'The common cold and flu share many symptoms but differ in severity and onset. Here is how to tell them apart.',
    symptomA: { name: 'Common Cold', slug: 'runny-nose', keyFeatures: ['Gradual onset over 1-2 days', 'Runny/stuffy nose prominent', 'Mild fatigue', 'Rarely causes fever in adults', 'Mild body aches at most'], onset: 'Gradual — symptoms build over a day or two', duration: '7-10 days', reliefFactors: 'Rest, fluids, decongestants, vitamin C', whenToWorry: 'Symptoms lasting more than 10 days or worsening after day 7' },
    symptomB: { name: 'Flu (Influenza)', slug: 'fever', keyFeatures: ['Sudden onset — feel fine then very sick', 'High fever 100-104°F', 'Severe body aches', 'Extreme fatigue', 'Dry cough and chills'], onset: 'Sudden — can go from fine to very sick within hours', duration: '1-2 weeks, fatigue can linger', reliefFactors: 'Rest, fluids, antivirals (Tamiflu) within 48hrs of onset', whenToWorry: 'Difficulty breathing, persistent chest pain, confusion, or worsening after initial improvement' },
    keyDifference: 'The flu hits hard and fast — especially the fever, body aches, and exhaustion. A cold comes on gradually and mostly stays in your nose and throat. If you feel like you were hit by a truck overnight, it is probably flu.',
    emergencyNote: 'People over 65, under 5, pregnant, or immunocompromised should see a doctor early when flu is suspected.',
  },
  {
    slug: 'anxiety-vs-heart-attack',
    title: 'Anxiety Attack vs Heart Attack',
    description: 'Anxiety attacks and heart attacks share alarming symptoms. Learn the differences and when to seek emergency care.',
    symptomA: { name: 'Anxiety / Panic Attack', slug: 'anxiety-symptoms', keyFeatures: ['Peaks within 10 minutes', 'Triggered by stress or out of nowhere', 'Improves with slow breathing', 'Tingling in hands and face', 'Younger patients more common'], onset: 'Peaks within 10 minutes, usually resolves within 20-30 minutes', duration: '20-30 minutes typically', reliefFactors: 'Slow breathing, removing from stressful situation, reassurance', whenToWorry: 'First episode should always be evaluated to rule out cardiac cause' },
    symptomB: { name: 'Heart Attack', slug: 'chest-pain', keyFeatures: ['Does not resolve on its own', 'Pressure/squeezing (not sharp)', 'Radiates to arm, jaw, back', 'Associated with exertion or older age', 'Cold sweats and nausea'], onset: 'Can be sudden or build gradually over minutes', duration: 'Does not resolve — may last hours if untreated', reliefFactors: 'Does not improve with breathing techniques or rest', whenToWorry: 'Call 911 immediately — do not wait to see if it passes' },
    keyDifference: 'Panic attacks typically peak quickly and resolve within 30 minutes. Heart attacks do not resolve on their own. Tingling in the hands and lips is more common with panic. Pain radiating to the arm or jaw is more common with heart attack.',
    emergencyNote: 'Always err on the side of caution with chest pain. Call 911 if you have any doubt.',
  },
  {
    slug: 'migraine-vs-tension-headache',
    title: 'Migraine vs Tension Headache',
    description: 'Migraine and tension headaches are the two most common headache types. Here is how to tell them apart.',
    symptomA: { name: 'Tension Headache', slug: 'headache', keyFeatures: ['Dull pressing band around head', 'Both sides of head', 'Mild to moderate pain', 'Not worsened by activity', 'No nausea typically'], onset: 'Gradual, often related to stress or posture', duration: '30 minutes to several hours', reliefFactors: 'OTC pain relievers, rest, stress reduction, neck stretches', whenToWorry: 'Occurring daily or not responding to OTC medications' },
    symptomB: { name: 'Migraine', slug: 'migraine', keyFeatures: ['Throbbing pain, usually one side', 'Moderate to severe intensity', 'Nausea and vomiting', 'Sensitivity to light and sound', 'Worsened by movement'], onset: 'Often preceded by warning signs (aura, mood changes)', duration: '4-72 hours', reliefFactors: 'Dark quiet room, triptans, rest, avoiding triggers', whenToWorry: 'Sudden worst headache of life, headache with fever and stiff neck, headache after head injury' },
    keyDifference: 'Migraines are usually one-sided, throbbing, and come with nausea and light/sound sensitivity. Tension headaches feel like a tight band around the whole head without nausea.',
  },
  {
    slug: 'ibs-vs-appendicitis',
    title: 'IBS vs Appendicitis',
    description: 'Abdominal pain from IBS vs appendicitis — key differences and emergency warning signs.',
    symptomA: { name: 'IBS', slug: 'stomach-pain', keyFeatures: ['Long history of similar symptoms', 'Pain relieved by bowel movement', 'Bloating and gas', 'Alternating constipation/diarrhea', 'Stress-related flares'], onset: 'Recurrent, chronic pattern', duration: 'Flares come and go over months/years', reliefFactors: 'Bowel movement, dietary changes, stress management', whenToWorry: 'Blood in stool, unintended weight loss, symptoms starting after age 50' },
    symptomB: { name: 'Appendicitis', slug: 'stomach-pain', keyFeatures: ['Pain starts around navel then moves to lower right', 'Steadily worsens over hours', 'Fever', 'Nausea and vomiting', 'Pain is constant not crampy'], onset: 'New onset, steadily worsening over 12-24 hours', duration: 'Worsens continuously — medical emergency', reliefFactors: 'Nothing relieves it — requires surgery', whenToWorry: 'Go to ER immediately if lower right pain with fever' },
    keyDifference: 'IBS pain is crampy, recurrent, and relieved by bowel movements. Appendicitis pain starts around the navel, moves to the lower right, and gets steadily worse over hours.',
    emergencyNote: 'Steady worsening pain in the lower right abdomen with fever — go to the ER immediately.',
  },
  {
    slug: 'uti-vs-kidney-infection',
    title: 'UTI vs Kidney Infection',
    description: 'Urinary tract infection vs kidney infection — symptoms, severity, and when it becomes an emergency.',
    symptomA: { name: 'UTI (Bladder Infection)', slug: 'frequent-urination', keyFeatures: ['Burning with urination', 'Frequent urge to urinate', 'Pelvic pressure', 'Cloudy or strong-smelling urine', 'No fever usually'], onset: 'Gradual over 1-2 days', duration: 'Resolves with antibiotics in 3-7 days', reliefFactors: 'Antibiotics, hydration, urinary analgesics', whenToWorry: 'If symptoms include back pain, fever, or chills — may have progressed to kidney infection' },
    symptomB: { name: 'Kidney Infection', slug: 'frequent-urination', keyFeatures: ['Fever and chills', 'Flank/back pain one or both sides', 'UTI symptoms plus systemic illness', 'Nausea and vomiting', 'Feeling very unwell'], onset: 'Can develop quickly from untreated UTI', duration: 'Requires antibiotics 10-14 days, possibly IV', reliefFactors: 'Prescription antibiotics, possibly IV fluids in hospital', whenToWorry: 'Kidney infections require prompt treatment — see a doctor same day' },
    keyDifference: 'A UTI stays in the bladder — burning and urgency but usually no fever. When infection travels to the kidneys, you develop fever, chills, and back/flank pain.',
    emergencyNote: 'High fever with back pain and urinary symptoms — go to urgent care or ER same day.',
  },
  {
    slug: 'food-poisoning-vs-stomach-bug',
    title: 'Food Poisoning vs Stomach Bug',
    description: 'How to tell if your illness is from contaminated food or a viral stomach bug.',
    symptomA: { name: 'Food Poisoning', slug: 'nausea', keyFeatures: ['Rapid onset 1-6 hours after eating', 'Vomiting more prominent', 'Can affect others who ate same food', 'Usually shorter duration', 'Caused by bacteria or toxins'], onset: '1-6 hours after eating contaminated food', duration: 'Often resolves within 24-48 hours', reliefFactors: 'Rest, fluids, time', whenToWorry: 'Blood in stool, high fever, signs of dehydration, neurological symptoms' },
    symptomB: { name: 'Stomach Bug (Viral Gastroenteritis)', slug: 'nausea', keyFeatures: ['Slower onset 24-48 hrs after exposure', 'Diarrhea more prominent', 'Spreads person to person', 'Usually lasts 1-3 days', 'Caused by norovirus or rotavirus'], onset: '24-48 hours after exposure to virus', duration: '1-3 days typically', reliefFactors: 'Rest, fluids, BRAT diet, time', whenToWorry: 'Dehydration signs, blood in stool, fever above 104°F, symptoms lasting more than 3 days' },
    keyDifference: 'Food poisoning comes on fast (within hours of eating) and vomiting is often the main symptom. Stomach bugs take 1-2 days to develop after exposure and tend to cause more diarrhea.',
  },
  {
    slug: 'allergies-vs-cold',
    title: 'Allergies vs Cold',
    description: 'Seasonal allergies and the common cold share many symptoms. Here is how to tell them apart.',
    symptomA: { name: 'Allergies', slug: 'runny-nose', keyFeatures: ['No fever', 'Itchy eyes, nose, throat', 'Clear thin discharge', 'Seasonal or triggered by exposure', 'Symptoms persist weeks or months'], onset: 'Immediate after allergen exposure', duration: 'As long as exposed to allergen', reliefFactors: 'Antihistamines, avoiding allergens, nasal corticosteroids', whenToWorry: 'Asthma symptoms or severe allergic reaction (anaphylaxis)' },
    symptomB: { name: 'Common Cold', slug: 'runny-nose', keyFeatures: ['May have mild fever', 'Sore throat common', 'Thick colored discharge as it progresses', 'Contact with sick person', 'Resolves in 7-10 days'], onset: 'Gradual over 1-3 days after viral exposure', duration: '7-10 days', reliefFactors: 'Rest, fluids, OTC cold medications', whenToWorry: 'Symptoms lasting more than 10 days, high fever, ear pain' },
    keyDifference: 'The biggest tell: allergies cause itchy eyes and nose — colds do not. Allergies never cause fever. A cold resolves in 10 days; allergies persist as long as you are exposed to the trigger.',
  },
]

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find(c => c.slug === slug)
}
