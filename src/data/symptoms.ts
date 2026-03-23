export type Likelihood = 'very-common' | 'common' | 'less-common' | 'rare';
export type Severity = 'low' | 'medium' | 'high' | 'emergency';

export interface SymptomCause {
  name: string;
  likelihood: Likelihood;
  description: string;
  severity: Severity;
  whatToDo: string;
}

export interface Symptom {
  slug: string;
  name: string;
  commonName: string;
  summary: string;
  causes: SymptomCause[];
  seeDoctorIf: string[];
  emergencyIf: string[];
  relatedSymptoms: string[];
  tags: string[];
}

export const symptoms: Symptom[] = [
  {
    slug: 'stomach-pain',
    name: 'Stomach Pain',
    commonName: 'Stomach ache / abdominal pain',
    summary:
      'Stomach pain (abdominal pain) is one of the most common symptoms people experience. It ranges from mild discomfort to severe pain, and its location, character, and associated symptoms help identify the cause.',
    causes: [
      {
        name: 'Gas & Indigestion',
        likelihood: 'very-common',
        description:
          'Trapped gas or slow digestion causes bloating, pressure, and cramping pain. Often worsens after eating fatty or spicy foods.',
        severity: 'low',
        whatToDo:
          'Try simethicone (Gas-X), avoid carbonated drinks, and take a gentle walk. Symptoms usually resolve within an hour.',
      },
      {
        name: 'Irritable Bowel Syndrome (IBS)',
        likelihood: 'common',
        description:
          'A chronic gut condition causing recurring cramping, bloating, and changes in bowel habits. Stress and certain foods are common triggers.',
        severity: 'medium',
        whatToDo:
          'Identify and avoid trigger foods, manage stress, and consider a low-FODMAP diet. See a doctor for a proper diagnosis.',
      },
      {
        name: 'Food Poisoning',
        likelihood: 'common',
        description:
          'Bacteria or toxins in contaminated food cause cramping, nausea, vomiting, and diarrhea — usually within hours of eating.',
        severity: 'medium',
        whatToDo:
          'Stay hydrated with clear fluids. Most cases resolve in 24–48 hours. See a doctor if symptoms are severe or last more than 2 days.',
      },
      {
        name: 'Gastric Ulcer',
        likelihood: 'less-common',
        description:
          'A sore in the stomach lining causing a burning or gnawing pain, often between meals or at night. H. pylori bacteria or NSAIDs are common causes.',
        severity: 'medium',
        whatToDo:
          'See a doctor — ulcers require prescription treatment. Avoid NSAIDs (ibuprofen, aspirin) and alcohol. Antacids offer temporary relief.',
      },
      {
        name: 'Appendicitis',
        likelihood: 'less-common',
        description:
          'Inflammation of the appendix — typically starts as pain around the navel that migrates to the lower right abdomen. Often accompanied by fever and nausea.',
        severity: 'high',
        whatToDo:
          'Seek emergency care immediately. Appendicitis requires surgery. Do not eat, drink, or use laxatives while seeking care.',
      },
      {
        name: 'Kidney Stones',
        likelihood: 'rare',
        description:
          'Hard mineral deposits in the kidneys cause severe, wave-like pain in the side and back, often radiating to the groin. Pain can be excruciating.',
        severity: 'high',
        whatToDo:
          'Go to urgent care or the ER for pain management and imaging. Drink lots of water. Small stones may pass naturally; larger ones may need intervention.',
      },
    ],
    seeDoctorIf: [
      'Pain is severe or getting progressively worse',
      'Fever above 101°F (38.3°C) with abdominal pain',
      'Pain wakes you from sleep',
      'Vomiting blood or blood in stool',
      'Pain lasting more than a few days',
      'Abdomen feels hard or rigid',
    ],
    emergencyIf: [
      'Sudden, severe abdominal pain that feels like the worst of your life',
      'Pain with a rigid, board-like abdomen',
      'Signs of shock: sweating, rapid heart rate, pale skin, fainting',
    ],
    relatedSymptoms: ['nausea', 'bloating', 'constipation', 'frequent-urination'],
    tags: [
      'stomach pain', 'stomach ache', 'abdominal pain', 'belly pain', 'stomach hurts',
      'cramps', 'gas', 'indigestion', 'gut pain', 'lower abdominal pain', 'upper abdominal pain',
    ],
  },
  {
    slug: 'headache',
    name: 'Headache',
    commonName: 'Head pain / head pressure',
    summary:
      'Headaches affect almost everyone at some point. Most are not serious, but certain types of headaches can indicate underlying conditions that require prompt medical attention.',
    causes: [
      {
        name: 'Tension Headache',
        likelihood: 'very-common',
        description:
          'The most common headache type — a dull, aching pressure around the head, often described as a tight band. Caused by muscle tension, stress, or poor posture.',
        severity: 'low',
        whatToDo:
          'Over-the-counter pain relievers (acetaminophen, ibuprofen), rest, and stress reduction. Stretching the neck and shoulders can help.',
      },
      {
        name: 'Dehydration',
        likelihood: 'very-common',
        description:
          'Not drinking enough fluids causes a throbbing headache, often accompanied by fatigue and dark urine. Very common in hot weather or after exercise.',
        severity: 'low',
        whatToDo:
          'Drink water or an electrolyte drink. Most dehydration headaches resolve within 30 minutes of rehydrating.',
      },
      {
        name: 'Migraine',
        likelihood: 'common',
        description:
          'Moderate to severe throbbing pain — often on one side — with nausea, light and sound sensitivity, and sometimes visual aura. Can last 4–72 hours.',
        severity: 'medium',
        whatToDo:
          'Rest in a dark, quiet room. Triptans (prescription) are effective if taken early. OTC options: ibuprofen or acetaminophen. See a doctor for recurring migraines.',
      },
      {
        name: 'Sinus Headache',
        likelihood: 'common',
        description:
          'Pressure and pain behind the forehead, cheeks, and eyes due to sinus congestion or infection. Worsens when bending forward.',
        severity: 'low',
        whatToDo:
          'Decongestants, saline nasal rinse, and steam inhalation. If caused by a sinus infection, a doctor may prescribe antibiotics.',
      },
      {
        name: 'Hypertension Headache',
        likelihood: 'less-common',
        description:
          'Very high blood pressure can cause a pulsating headache, typically at the back of the head — usually present in the morning.',
        severity: 'high',
        whatToDo:
          'Seek medical evaluation. If you have a blood pressure cuff, check your reading. Severely elevated BP (over 180/120) is a medical emergency.',
      },
      {
        name: 'Cluster Headache',
        likelihood: 'rare',
        description:
          'Severe, stabbing pain behind or around one eye, occurring in clusters over weeks or months. One of the most painful headache types known.',
        severity: 'high',
        whatToDo:
          'See a neurologist. High-flow oxygen and triptans are the most effective acute treatments. Preventive medications can reduce cluster frequency.',
      },
    ],
    seeDoctorIf: [
      'Headaches that are new or different from your usual pattern',
      'Progressively worsening headaches over days or weeks',
      'Headaches requiring pain medication more than twice a week',
      'Headaches accompanied by fever, stiff neck, or skin rash',
      'Headaches following a head injury',
    ],
    emergencyIf: [
      'Sudden, extremely severe headache ("thunderclap") — the worst headache of your life',
      'Headache with confusion, weakness, or speech problems (possible stroke)',
      'Headache with vision changes, fever, and stiff neck (possible meningitis)',
    ],
    relatedSymptoms: ['dizziness', 'nausea', 'high-blood-pressure', 'fatigue'],
    tags: [
      'headache', 'head pain', 'head hurts', 'migraine', 'head pressure', 'temple pain',
      'forehead pain', 'cluster headache', 'tension headache', 'sinus headache', 'head throbbing',
    ],
  },
  {
    slug: 'fatigue',
    name: 'Fatigue',
    commonName: 'Tiredness / low energy / exhaustion',
    summary:
      'Fatigue is more than just feeling sleepy — it is a persistent lack of energy that does not improve with rest. It can have many causes ranging from simple lifestyle factors to underlying medical conditions.',
    causes: [
      {
        name: 'Poor Sleep Quality',
        likelihood: 'very-common',
        description:
          'Not getting enough restful sleep due to insomnia, disruptions, inconsistent schedule, or poor sleep hygiene leaves you exhausted throughout the day.',
        severity: 'low',
        whatToDo:
          'Establish a consistent sleep schedule, limit screens before bed, avoid caffeine after noon, and keep your bedroom cool and dark.',
      },
      {
        name: 'Iron Deficiency / Anemia',
        likelihood: 'common',
        description:
          'Low iron means fewer red blood cells to carry oxygen, causing persistent fatigue, weakness, pale skin, and shortness of breath on exertion.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a blood test. Iron supplements and dietary changes (red meat, leafy greens, legumes) can correct deficiency.',
      },
      {
        name: 'Hypothyroidism',
        likelihood: 'common',
        description:
          'An underactive thyroid produces insufficient hormones, slowing down metabolism and causing fatigue, weight gain, cold intolerance, and brain fog.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a TSH blood test. Hypothyroidism is treated with a daily thyroid hormone medication (levothyroxine).',
      },
      {
        name: 'Depression',
        likelihood: 'common',
        description:
          'Depression causes persistent low energy, loss of motivation, and feelings of hopelessness — often misattributed to physical causes.',
        severity: 'medium',
        whatToDo:
          'Speak with a doctor or mental health professional. Therapy and/or medication are effective. Regular exercise also significantly helps.',
      },
      {
        name: 'Type 2 Diabetes',
        likelihood: 'less-common',
        description:
          'High blood sugar impairs the body\'s ability to use glucose for energy, causing fatigue, frequent urination, increased thirst, and blurred vision.',
        severity: 'medium',
        whatToDo:
          'See a doctor for blood glucose testing. Lifestyle changes (diet, exercise) and medication can manage diabetes effectively.',
      },
      {
        name: 'Sleep Apnea',
        likelihood: 'less-common',
        description:
          'Repeated breathing pauses during sleep fragment your rest without you knowing it, causing severe daytime fatigue even after a full night in bed.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a sleep study. CPAP therapy is highly effective. Losing weight can also significantly reduce apnea severity.',
      },
    ],
    seeDoctorIf: [
      'Fatigue lasting more than two to three weeks',
      'Fatigue that interferes with daily activities',
      'Fatigue with unexplained weight loss',
      'Fatigue with shortness of breath or chest pain',
      'Fatigue with swollen lymph nodes or night sweats',
    ],
    emergencyIf: [
      'Sudden extreme fatigue accompanied by chest pain or shortness of breath',
      'Fatigue with confusion or inability to stay awake',
    ],
    relatedSymptoms: ['cant-sleep', 'tired-all-the-time', 'dizziness', 'anxiety-symptoms'],
    tags: [
      'fatigue', 'tired', 'exhausted', 'low energy', 'always tired', 'no energy',
      'run down', 'sleepy all the time', 'constantly tired', 'chronic fatigue',
    ],
  },
  {
    slug: 'eye-twitching',
    name: 'Eye Twitching',
    commonName: 'Eyelid spasm / myokymia',
    summary:
      'Eye twitching (myokymia) is an involuntary eyelid spasm that most people experience occasionally. It is usually harmless and resolves on its own, though persistent or severe twitching may need medical evaluation.',
    causes: [
      {
        name: 'Stress',
        likelihood: 'very-common',
        description:
          'Physical or emotional stress is one of the top triggers for eye twitching. It causes muscle tension and nerve hypersensitivity throughout the body.',
        severity: 'low',
        whatToDo:
          'Reduce stress through exercise, deep breathing, or mindfulness. The twitch typically resolves once your stress level drops.',
      },
      {
        name: 'Caffeine',
        likelihood: 'very-common',
        description:
          'High caffeine intake increases nerve excitability and can directly trigger eyelid spasms. Energy drinks, coffee, and tea all contribute.',
        severity: 'low',
        whatToDo:
          'Cut back on caffeine or switch to decaf. Twitching usually stops within a few days of reducing intake.',
      },
      {
        name: 'Fatigue & Sleep Deprivation',
        likelihood: 'common',
        description:
          'Tired muscles and overstimulated nerves are far more prone to spasms. Even one night of poor sleep can trigger eyelid twitching.',
        severity: 'low',
        whatToDo:
          'Prioritize getting 7–9 hours of quality sleep. The twitch usually disappears after proper rest.',
      },
      {
        name: 'Dry Eyes',
        likelihood: 'common',
        description:
          'Irritated or dry eyes cause strain that can trigger twitching. Common in people who spend long hours looking at screens.',
        severity: 'low',
        whatToDo:
          'Use lubricating eye drops (artificial tears). Take regular screen breaks using the 20-20-20 rule (every 20 min, look 20 feet away for 20 seconds).',
      },
      {
        name: 'Magnesium Deficiency',
        likelihood: 'less-common',
        description:
          'Magnesium plays a key role in muscle and nerve function. A deficiency can cause muscle twitching throughout the body, including the eyelids.',
        severity: 'low',
        whatToDo:
          'Eat magnesium-rich foods (nuts, seeds, leafy greens, dark chocolate) or discuss supplementation with a doctor.',
      },
      {
        name: 'Benign Essential Blepharospasm',
        likelihood: 'rare',
        description:
          'A neurological condition causing more forceful, frequent, and involuntary eyelid spasms that can affect both eyes and significantly impact daily life.',
        severity: 'medium',
        whatToDo:
          'See a neurologist or ophthalmologist. Botulinum toxin (Botox) injections are the most effective treatment for blepharospasm.',
      },
    ],
    seeDoctorIf: [
      'Twitching that persists for more than three to four weeks',
      'Twitching that spreads to the face, neck, or other muscles',
      'Eyelid drooping (ptosis) accompanying the twitch',
      'Both eyes twitching simultaneously',
      'Eye redness, discharge, or vision changes along with twitching',
    ],
    emergencyIf: [
      'Twitching accompanied by sudden facial drooping, arm weakness, or speech difficulty (possible stroke)',
    ],
    relatedSymptoms: ['fatigue', 'anxiety-symptoms', 'cant-sleep'],
    tags: [
      'eye twitching', 'eyelid twitch', 'eye spasm', 'eye flicker', 'twitching eye',
      'eye jumping', 'myokymia', 'eyelid spasm', 'eye keeps twitching',
    ],
  },
  {
    slug: 'green-poop',
    name: 'Green Stool',
    commonName: 'Green poop',
    summary:
      'Seeing green stool can be alarming, but it is usually harmless and caused by what you ate or how quickly food moved through your digestive system.',
    causes: [
      {
        name: 'Diet (Leafy Greens / Food Dye)',
        likelihood: 'very-common',
        description:
          'Eating large amounts of spinach, kale, or other leafy greens, or consuming foods with green or blue food dye, is the most common cause of green stool.',
        severity: 'low',
        whatToDo:
          'No action needed. The color will return to normal within a day or two without dietary changes.',
      },
      {
        name: 'Fast Intestinal Transit / Bile',
        likelihood: 'very-common',
        description:
          'Bile starts out green and turns brown as bacteria break it down during digestion. When food moves too quickly, bile does not have time to change color.',
        severity: 'low',
        whatToDo:
          'Usually resolves on its own. If caused by diarrhea, stay hydrated and allow your digestive system to settle.',
      },
      {
        name: 'Antibiotics',
        likelihood: 'common',
        description:
          'Antibiotics alter the balance of gut bacteria, affecting how bile is processed and potentially causing green or unusually colored stool.',
        severity: 'low',
        whatToDo:
          'This is a normal side effect. Taking probiotics while on antibiotics can help restore gut flora faster.',
      },
      {
        name: 'IBS (Irritable Bowel Syndrome)',
        likelihood: 'common',
        description:
          'IBS causes changes in bowel transit speed and can lead to inconsistently colored stool, including green, especially during flare-ups.',
        severity: 'medium',
        whatToDo:
          'Manage IBS through diet, stress reduction, and guidance from a gastroenterologist.',
      },
      {
        name: 'Gastrointestinal Infection',
        likelihood: 'less-common',
        description:
          'Bacterial infections (like Salmonella or C. diff) disrupt normal digestion and can cause green, watery diarrhea along with cramping and fever.',
        severity: 'medium',
        whatToDo:
          'Stay hydrated. See a doctor if you also have fever, severe cramping, or symptoms lasting more than 48 hours.',
      },
      {
        name: 'Celiac Disease or Malabsorption',
        likelihood: 'rare',
        description:
          'Conditions that impair nutrient absorption can alter stool color and consistency. Green, foul-smelling stool can indicate fat malabsorption.',
        severity: 'medium',
        whatToDo:
          'See a gastroenterologist. Celiac disease requires a strict gluten-free diet. Other malabsorption conditions have specific treatments.',
      },
    ],
    seeDoctorIf: [
      'Green stool persisting more than a few days with no dietary explanation',
      'Accompanied by persistent diarrhea, cramping, or fever',
      'Mucus visible in the stool',
      'Unexplained weight loss alongside stool color changes',
    ],
    emergencyIf: [
      'Black, tarry stool (possible internal bleeding — call 911 or go to the ER)',
      'Bright red blood in or on your stool',
      'Severe abdominal pain alongside stool changes',
    ],
    relatedSymptoms: ['stomach-pain', 'bloating', 'constipation', 'nausea'],
    tags: [
      'green poop', 'green stool', 'green bowel movement', 'poop is green', 'stool color',
      'weird poop color', 'greenish stool',
    ],
  },
  {
    slug: 'cant-sleep',
    name: 'Trouble Sleeping',
    commonName: "Can't sleep / insomnia",
    summary:
      'Difficulty falling asleep or staying asleep affects millions of people. It can be caused by stress, lifestyle habits, medical conditions, or sleep disorders — all of which respond to different treatments.',
    causes: [
      {
        name: 'Stress & Anxiety',
        likelihood: 'very-common',
        description:
          'Racing thoughts, worry, and an overactive mind are the most common reasons people cannot fall asleep. The brain remains in a state of alert instead of winding down.',
        severity: 'low',
        whatToDo:
          'Try a wind-down routine: journaling to clear your mind, progressive muscle relaxation, or deep breathing exercises. Limit news and social media before bed.',
      },
      {
        name: 'Poor Sleep Hygiene',
        likelihood: 'very-common',
        description:
          'Irregular sleep schedules, napping late in the day, caffeine or alcohol in the evening, or a bedroom that is too warm or bright all disrupt sleep quality.',
        severity: 'low',
        whatToDo:
          'Set a consistent wake time (even on weekends), keep the bedroom cool and dark, and avoid caffeine after 2 PM.',
      },
      {
        name: 'Blue Light / Screen Time',
        likelihood: 'common',
        description:
          'Screens emit blue light that suppresses melatonin production, signaling to your brain that it is still daytime and making it harder to feel sleepy.',
        severity: 'low',
        whatToDo:
          'Stop screen use 60–90 minutes before bed. Use night mode or blue-light-blocking glasses in the evenings.',
      },
      {
        name: 'Sleep Apnea',
        likelihood: 'common',
        description:
          'Breathing pauses during sleep cause frequent micro-awakenings. You may not realize you are waking up but will feel unrested and struggle to feel alert.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a sleep study. CPAP therapy is the gold-standard treatment and dramatically improves sleep quality.',
      },
      {
        name: 'Restless Legs Syndrome (RLS)',
        likelihood: 'less-common',
        description:
          'An uncomfortable urge to move the legs — typically worse at night and relieved by movement — makes it very difficult to fall or stay asleep.',
        severity: 'medium',
        whatToDo:
          'See a doctor. Iron deficiency can cause RLS — a blood test can check your levels. Medications are also available for moderate to severe cases.',
      },
      {
        name: 'Caffeine Overconsumption',
        likelihood: 'common',
        description:
          'Caffeine has a half-life of about 5–6 hours. An afternoon coffee can still be significantly active in your system at bedtime, blocking sleep onset.',
        severity: 'low',
        whatToDo:
          'Switch to decaf after noon. Remember that tea, energy drinks, chocolate, and some medications also contain caffeine.',
      },
    ],
    seeDoctorIf: [
      'Difficulty sleeping three or more nights per week for several weeks',
      'Daytime fatigue that affects work, driving, or daily life',
      'Loud snoring or gasping during sleep (ask a partner)',
      'Sleep problems combined with mood changes or depression',
      'Leg discomfort that worsens at night and feels relieved by moving',
    ],
    emergencyIf: [
      'New, severe inability to sleep after a head injury or trauma',
      'Sleep disruption accompanied by chest pain or difficulty breathing',
    ],
    relatedSymptoms: ['fatigue', 'anxiety-symptoms', 'tired-all-the-time', 'heart-racing'],
    tags: [
      "can't sleep", 'insomnia', 'trouble sleeping', 'sleep problems', 'poor sleep',
      'lying awake', 'wake up at night', 'sleep issues', 'cant fall asleep', 'unable to sleep',
    ],
  },
  {
    slug: 'back-pain',
    name: 'Back Pain',
    commonName: 'Back ache / lower back pain',
    summary:
      'Back pain affects most people at some point in their lives. It can be acute (short-term) or chronic, and ranges from a dull ache to sharp, debilitating pain. Most cases improve with self-care.',
    causes: [
      {
        name: 'Muscle Strain',
        likelihood: 'very-common',
        description:
          'The most common cause — lifting something improperly, sudden awkward movement, or overexertion can strain the muscles and ligaments supporting the spine.',
        severity: 'low',
        whatToDo:
          'Rest for 1–2 days (not more — prolonged bed rest worsens back pain). Apply ice for the first 48 hours, then heat. OTC pain relievers help.',
      },
      {
        name: 'Poor Posture',
        likelihood: 'very-common',
        description:
          'Prolonged sitting or standing with poor alignment puts chronic stress on the spine and back muscles, causing a dull ache that builds over time.',
        severity: 'low',
        whatToDo:
          'Adjust your workstation ergonomics. Take standing breaks every 30–45 minutes. Core-strengthening exercises and stretching help long-term.',
      },
      {
        name: 'Herniated Disc',
        likelihood: 'common',
        description:
          'When a spinal disc bulges out and presses on a nearby nerve, it causes back pain that often radiates down the leg (sciatica) with numbness or tingling.',
        severity: 'medium',
        whatToDo:
          'See a doctor. Physical therapy is the first-line treatment. Avoid heavy lifting. Most herniated discs heal within 6 weeks without surgery.',
      },
      {
        name: 'Sciatica',
        likelihood: 'common',
        description:
          'Compression of the sciatic nerve causes shooting pain, numbness, or tingling that runs from the lower back through the buttock and down the leg.',
        severity: 'medium',
        whatToDo:
          'Physical therapy, gentle stretching, and anti-inflammatory medications. See a doctor if symptoms are severe or persist beyond a few weeks.',
      },
      {
        name: 'Kidney Stones or Infection',
        likelihood: 'less-common',
        description:
          'Kidney issues cause flank pain (below the ribs, above the hips, usually one-sided). A kidney infection also causes fever, chills, and painful urination.',
        severity: 'high',
        whatToDo:
          'See a doctor promptly. Kidney infections require antibiotics. Kidney stones may need imaging and sometimes medical procedures.',
      },
      {
        name: 'Arthritis / Spinal Stenosis',
        likelihood: 'less-common',
        description:
          'Osteoarthritis causes the cartilage between vertebrae to wear down, leading to chronic pain and stiffness. Stenosis (narrowing of the spinal canal) can compress nerves.',
        severity: 'medium',
        whatToDo:
          'See a doctor for imaging. Physical therapy, weight management, and anti-inflammatory medications help. Severe cases may warrant injections or surgery.',
      },
    ],
    seeDoctorIf: [
      'Back pain lasting more than a few weeks',
      'Pain that radiates down the leg below the knee',
      'Back pain accompanied by fever or chills',
      'Back pain with bladder or bowel changes',
      'Pain that started after a fall or accident',
    ],
    emergencyIf: [
      'Sudden loss of bladder or bowel control with back pain (possible cauda equina syndrome)',
      'Back pain with numbness in the groin or inner thighs',
      'Severe back pain after significant trauma (possible fracture)',
    ],
    relatedSymptoms: ['fatigue', 'joint-pain', 'frequent-urination'],
    tags: [
      'back pain', 'lower back pain', 'back ache', 'spine pain', 'lumbar pain',
      'back hurts', 'upper back pain', 'mid back pain', 'sciatica', 'back spasm',
    ],
  },
  {
    slug: 'nausea',
    name: 'Nausea',
    commonName: 'Feeling sick / upset stomach',
    summary:
      'Nausea is the uncomfortable feeling that you might vomit. It can occur on its own or with vomiting and has many potential causes ranging from mild and temporary to more serious conditions.',
    causes: [
      {
        name: 'Motion Sickness',
        likelihood: 'very-common',
        description:
          'A conflict between visual input and your inner ear\'s sense of motion when traveling by car, boat, or plane causes nausea and dizziness.',
        severity: 'low',
        whatToDo:
          'Over-the-counter remedies: dimenhydrinate (Dramamine) or meclizine. Sit facing forward, focus on the horizon, and get fresh air.',
      },
      {
        name: 'Food Poisoning',
        likelihood: 'very-common',
        description:
          'Nausea, vomiting, and stomach cramps from eating contaminated food. Symptoms typically begin within hours of eating the offending food.',
        severity: 'medium',
        whatToDo:
          'Rest your stomach — start with clear fluids, then bland foods (BRAT diet). Most cases resolve in 24–48 hours without treatment.',
      },
      {
        name: 'Pregnancy (Morning Sickness)',
        likelihood: 'common',
        description:
          'Nausea affects up to 80% of pregnant people, typically in the first trimester. Despite the name, it can occur at any time of day.',
        severity: 'low',
        whatToDo:
          'Eat small, frequent meals. Avoid strong smells. Ginger (tea, candies) can help. See your OB/GYN if you cannot keep any food or liquid down.',
      },
      {
        name: 'Anxiety',
        likelihood: 'common',
        description:
          'The gut-brain connection means anxiety and stress can directly trigger nausea, often before stressful events or during periods of high anxiety.',
        severity: 'low',
        whatToDo:
          'Deep breathing, grounding techniques, and addressing the underlying anxiety help. If nausea from anxiety is frequent, talk to a doctor.',
      },
      {
        name: 'Medication Side Effect',
        likelihood: 'common',
        description:
          'Many medications — including antibiotics, NSAIDs, opioids, and chemotherapy drugs — commonly cause nausea, especially on an empty stomach.',
        severity: 'low',
        whatToDo:
          'Take medications with food unless directed otherwise. Talk to your prescribing doctor if the nausea is severe — alternatives may be available.',
      },
      {
        name: 'Vertigo (Inner Ear)',
        likelihood: 'less-common',
        description:
          'Inner ear disorders like BPPV or vestibular neuritis cause the sensation of spinning, often with intense nausea, triggered by changes in head position.',
        severity: 'medium',
        whatToDo:
          'See a doctor or physical therapist. The Epley maneuver can resolve BPPV rapidly. Anti-nausea medications help during acute episodes.',
      },
    ],
    seeDoctorIf: [
      'Nausea lasting more than a few days',
      'Inability to keep any fluids down for more than 24 hours',
      'Signs of dehydration: dry mouth, dark urine, extreme thirst, dizziness',
      'Nausea with severe abdominal pain',
      'Nausea following a head injury',
    ],
    emergencyIf: [
      'Vomiting blood or material that looks like coffee grounds',
      'Nausea with severe chest pain or shortness of breath',
      'Nausea with signs of severe dehydration or altered consciousness',
    ],
    relatedSymptoms: ['stomach-pain', 'dizziness', 'headache', 'bloating'],
    tags: [
      'nausea', 'feeling sick', 'upset stomach', 'queasy', 'want to vomit',
      'nauseous', 'sick to stomach', 'morning sickness', 'vomiting', 'feel like throwing up',
    ],
  },
  {
    slug: 'dizziness',
    name: 'Dizziness',
    commonName: 'Feeling dizzy / lightheadedness / vertigo',
    summary:
      'Dizziness describes sensations like feeling faint, woozy, or unsteady. Vertigo — the sensation that the room is spinning — is a specific type. Most causes are treatable and not life-threatening.',
    causes: [
      {
        name: 'Dehydration',
        likelihood: 'very-common',
        description:
          'Low fluid levels reduce blood volume, causing blood pressure to drop and leading to lightheadedness — especially when standing up quickly.',
        severity: 'low',
        whatToDo:
          'Drink water or an electrolyte drink. Sit or lie down until the dizziness passes. Rise slowly from sitting or lying positions.',
      },
      {
        name: 'BPPV (Inner Ear Crystals)',
        likelihood: 'very-common',
        description:
          'Benign Paroxysmal Positional Vertigo — tiny calcium crystals in the inner ear become dislodged, causing brief but intense spinning triggered by head movements.',
        severity: 'low',
        whatToDo:
          'See a doctor or physical therapist who can perform the Epley maneuver — a series of head movements that rapidly resolves BPPV in most cases.',
      },
      {
        name: 'Low Blood Pressure (Orthostatic Hypotension)',
        likelihood: 'common',
        description:
          'A sudden drop in blood pressure when standing up causes brief lightheadedness or dizziness. More common in older adults and those on blood pressure medications.',
        severity: 'low',
        whatToDo:
          'Rise slowly from sitting or lying positions. Increase fluid and salt intake (if appropriate). Talk to a doctor if medications may be contributing.',
      },
      {
        name: 'Inner Ear Infection',
        likelihood: 'common',
        description:
          'Labyrinthitis or vestibular neuritis (inflammation of the inner ear) causes prolonged vertigo, nausea, and sometimes temporary hearing loss.',
        severity: 'medium',
        whatToDo:
          'See a doctor. Most cases resolve in days to weeks. Corticosteroids may speed recovery. Vestibular rehabilitation exercises can help.',
      },
      {
        name: 'Anemia',
        likelihood: 'common',
        description:
          'Low red blood cell count means less oxygen reaches the brain, causing lightheadedness, fatigue, and shortness of breath on exertion.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a blood count test. Iron supplements and dietary changes address iron-deficiency anemia.',
      },
      {
        name: 'Anxiety / Panic Attacks',
        likelihood: 'common',
        description:
          'Hyperventilation during anxiety or panic attacks lowers carbon dioxide levels in the blood, causing dizziness, numbness, and tingling.',
        severity: 'medium',
        whatToDo:
          'Slow your breathing. Breathe in through the nose for 4 counts, hold for 4, out for 6. Treat the underlying anxiety for long-term relief.',
      },
    ],
    seeDoctorIf: [
      'Dizziness that is new, worsening, or recurring',
      'Dizziness lasting more than a few days',
      'Dizziness with hearing loss or ringing in the ears (tinnitus)',
      'Dizziness after a head injury',
      'Dizziness that is affecting your ability to walk or drive safely',
    ],
    emergencyIf: [
      'Sudden severe dizziness with chest pain, shortness of breath, or heart palpitations',
      'Dizziness with weakness on one side, facial drooping, slurred speech, or vision changes (possible stroke)',
      'Dizziness with fainting',
    ],
    relatedSymptoms: ['nausea', 'headache', 'heart-racing', 'fatigue'],
    tags: [
      'dizziness', 'dizzy', 'lightheaded', 'vertigo', 'spinning', 'off balance',
      'room spinning', 'feel faint', 'unsteady', 'woozy', 'lightheadedness',
    ],
  },
  {
    slug: 'chest-pain',
    name: 'Chest Pain',
    commonName: 'Chest pain / chest tightness',
    summary:
      'Chest pain should always be taken seriously. While it often has benign causes like muscle strain or acid reflux, it can also signal serious heart or lung conditions requiring immediate attention.',
    causes: [
      {
        name: 'Muscle Strain / Costochondritis',
        likelihood: 'very-common',
        description:
          'Chest wall muscle or rib cartilage pain that worsens when pressing on the chest, moving, or breathing deeply. Often follows exercise or injury.',
        severity: 'low',
        whatToDo:
          'Rest, ice, and OTC anti-inflammatory medications (ibuprofen). Pain should improve within a few days. Avoid strenuous activity.',
      },
      {
        name: 'Acid Reflux (GERD)',
        likelihood: 'very-common',
        description:
          'Stomach acid rising into the esophagus causes a burning sensation in the center of the chest (heartburn), often worse after eating, lying down, or bending.',
        severity: 'low',
        whatToDo:
          'Antacids or H2 blockers (Pepcid) for relief. Avoid trigger foods, eat smaller meals, and don\'t lie down for 2 hours after eating. See a doctor for chronic GERD.',
      },
      {
        name: 'Anxiety / Panic Attack',
        likelihood: 'common',
        description:
          'Anxiety and panic attacks can cause chest tightness, rapid heartbeat, shortness of breath, and dizziness that closely mimic a heart attack.',
        severity: 'medium',
        whatToDo:
          'Slow, controlled breathing can interrupt a panic attack. If this is your first episode or you are unsure, seek medical evaluation to rule out cardiac causes.',
      },
      {
        name: 'Pneumonia or Pleuritis',
        likelihood: 'less-common',
        description:
          'Lung infection or inflammation of the lining around the lungs causes sharp chest pain that worsens with breathing or coughing, along with fever and cough.',
        severity: 'high',
        whatToDo:
          'See a doctor. Pneumonia requires antibiotics or antiviral medications. Do not delay if you have fever, difficulty breathing, or your symptoms are worsening.',
      },
      {
        name: 'Heart Attack (Myocardial Infarction)',
        likelihood: 'less-common',
        description:
          'Blockage of a coronary artery causes sustained chest pressure, tightness, or crushing pain — often radiating to the arm, jaw, neck, or back, with sweating and nausea.',
        severity: 'emergency',
        whatToDo:
          'Call 911 immediately. Chew a regular aspirin (325 mg) if you are not allergic and have it available. Do not drive yourself to the hospital.',
      },
      {
        name: 'Pulmonary Embolism',
        likelihood: 'rare',
        description:
          'A blood clot in the lungs causes sudden, sharp chest pain that worsens with breathing, along with severe shortness of breath and sometimes coughing up blood.',
        severity: 'emergency',
        whatToDo:
          'Call 911 immediately. This is a life-threatening emergency requiring immediate anticoagulant treatment.',
      },
    ],
    seeDoctorIf: [
      'Any new or unexplained chest pain — even if mild',
      'Chest pain that comes and goes, especially with exertion',
      'Chest pain lasting more than a few minutes',
      'Chest pain in anyone with heart disease risk factors (smoking, family history, diabetes, hypertension)',
    ],
    emergencyIf: [
      'Crushing, squeezing, or pressure-like chest pain',
      'Chest pain spreading to the arm, jaw, neck, shoulder, or back',
      'Chest pain with sweating, nausea, or lightheadedness',
      'Sudden severe chest pain with shortness of breath (possible pulmonary embolism)',
    ],
    relatedSymptoms: ['shortness-of-breath', 'heart-racing', 'anxiety-symptoms', 'nausea'],
    tags: [
      'chest pain', 'chest tightness', 'chest pressure', 'chest hurts', 'heart pain',
      'pain in chest', 'tight chest', 'chest discomfort', 'sternum pain', 'rib pain',
    ],
  },
  {
    slug: 'high-blood-pressure',
    name: 'High Blood Pressure',
    commonName: 'Hypertension / high BP',
    summary:
      'High blood pressure (hypertension) often has no obvious symptoms, earning it the nickname "the silent killer." Over time, untreated hypertension significantly raises the risk of heart attack, stroke, and kidney disease.',
    causes: [
      {
        name: 'Stress',
        likelihood: 'very-common',
        description:
          'Acute stress triggers the "fight or flight" response, temporarily raising blood pressure. Chronic stress can lead to sustained hypertension over time.',
        severity: 'medium',
        whatToDo:
          'Incorporate regular stress-reduction practices: exercise, meditation, adequate sleep, and social connection. Monitor your blood pressure at home.',
      },
      {
        name: 'Poor Diet (Sodium, Processed Foods)',
        likelihood: 'very-common',
        description:
          'High sodium intake causes the body to retain water, increasing blood volume and pressure. A diet high in processed foods, red meat, and alcohol also raises BP.',
        severity: 'medium',
        whatToDo:
          'Reduce sodium to under 2,300 mg/day. Follow the DASH diet (rich in fruits, vegetables, whole grains, and low-fat dairy). Limit alcohol.',
      },
      {
        name: 'Obesity / Physical Inactivity',
        likelihood: 'common',
        description:
          'Excess weight makes the heart work harder. Physical inactivity weakens the cardiovascular system. Both are leading risk factors for hypertension.',
        severity: 'medium',
        whatToDo:
          'Aim for 150 minutes of moderate exercise per week. Even a 5–10% reduction in body weight can meaningfully lower blood pressure.',
      },
      {
        name: 'Sleep Apnea',
        likelihood: 'common',
        description:
          'Repeated oxygen drops during sleep activate the sympathetic nervous system and are a significant, underdiagnosed cause of treatment-resistant hypertension.',
        severity: 'medium',
        whatToDo:
          'Get a sleep study if you snore heavily or feel unrested. Treating sleep apnea with CPAP can substantially lower blood pressure.',
      },
      {
        name: 'Kidney Disease',
        likelihood: 'less-common',
        description:
          'The kidneys regulate blood pressure through fluid balance and hormone release. Kidney damage disrupts this regulation and leads to hypertension.',
        severity: 'high',
        whatToDo:
          'See a doctor for kidney function testing (creatinine, eGFR). Treating the underlying kidney disease is essential to controlling BP.',
      },
      {
        name: 'Genetics / Family History',
        likelihood: 'common',
        description:
          'Primary (essential) hypertension has a strong genetic component. If your parents had high blood pressure, your risk is significantly elevated.',
        severity: 'medium',
        whatToDo:
          'If you have a family history, monitor your blood pressure regularly and be proactive about lifestyle modifications and screening.',
      },
    ],
    seeDoctorIf: [
      'Blood pressure readings consistently above 130/80 mmHg',
      'Frequent headaches, especially at the back of the head',
      'Nosebleeds without obvious cause',
      'Vision changes or floaters',
      'Chest pain or shortness of breath',
    ],
    emergencyIf: [
      'Blood pressure reading above 180/120 mmHg (hypertensive crisis)',
      'Severe headache, chest pain, or vision changes with very high BP',
      'Shortness of breath or confusion alongside elevated blood pressure',
    ],
    relatedSymptoms: ['headache', 'heart-racing', 'shortness-of-breath', 'fatigue'],
    tags: [
      'high blood pressure', 'hypertension', 'blood pressure', 'elevated blood pressure',
      'high BP', 'blood pressure high', 'hypertensive',
    ],
  },
  {
    slug: 'tired-all-the-time',
    name: 'Tired All the Time',
    commonName: 'Chronic tiredness / always exhausted',
    summary:
      'Feeling tired all the time despite adequate sleep is often a sign of an underlying issue. From nutritional deficiencies to thyroid disorders, many treatable conditions cause persistent fatigue.',
    causes: [
      {
        name: 'Iron Deficiency (Anemia)',
        likelihood: 'very-common',
        description:
          'Iron deficiency is the most common cause of chronic tiredness — especially in women of childbearing age. Low iron means less oxygen reaches your cells and muscles.',
        severity: 'medium',
        whatToDo:
          'Ask your doctor for a full blood count and ferritin test. Iron supplements and eating iron-rich foods can reverse deficiency within a few months.',
      },
      {
        name: 'Hypothyroidism',
        likelihood: 'common',
        description:
          'An underactive thyroid slows down nearly every system in the body — causing profound tiredness, weight gain, cold sensitivity, depression, and dry skin.',
        severity: 'medium',
        whatToDo:
          'A simple TSH blood test diagnoses hypothyroidism. Daily levothyroxine medication is the standard treatment and is highly effective.',
      },
      {
        name: 'Vitamin D Deficiency',
        likelihood: 'common',
        description:
          'Vitamin D deficiency is extremely prevalent, especially in people who spend little time outdoors. Low vitamin D causes fatigue, muscle weakness, and low mood.',
        severity: 'low',
        whatToDo:
          'Get your vitamin D level tested. Supplementation (1,000–2,000 IU/day) combined with sun exposure corrects deficiency in most people.',
      },
      {
        name: 'Depression',
        likelihood: 'common',
        description:
          'Chronic tiredness is a hallmark symptom of depression — often manifesting as physical exhaustion, mental fog, and loss of motivation rather than sadness.',
        severity: 'medium',
        whatToDo:
          'Speak with your doctor or a mental health professional. A combination of therapy (CBT) and medication is highly effective for depression.',
      },
      {
        name: 'Sleep Disorder (Sleep Apnea / Insomnia)',
        likelihood: 'common',
        description:
          'Poor sleep quality from apnea, insomnia, or chronic disruptions prevents restorative sleep, leaving you exhausted no matter how many hours you spend in bed.',
        severity: 'medium',
        whatToDo:
          'Track your sleep patterns and discuss them with a doctor. A sleep study can diagnose sleep apnea. CBT for insomnia is the most effective long-term treatment.',
      },
      {
        name: 'Chronic Fatigue Syndrome (ME/CFS)',
        likelihood: 'rare',
        description:
          'A complex, poorly understood condition causing extreme fatigue that is not relieved by rest and worsens with physical or mental activity.',
        severity: 'high',
        whatToDo:
          'See a doctor — ME/CFS requires ruling out other causes. Pacing (avoiding overexertion), sleep management, and specialist support are the main strategies.',
      },
    ],
    seeDoctorIf: [
      'Tiredness persisting for more than 2–3 weeks',
      'Feeling tired even after a full night of sleep',
      'Tiredness accompanied by weight changes, cold intolerance, or hair loss',
      'Fatigue that worsens with activity and requires long recovery periods',
      'Fatigue affecting your ability to work or perform daily tasks',
    ],
    emergencyIf: [
      'Sudden extreme fatigue with chest pain, shortness of breath, or confusion',
    ],
    relatedSymptoms: ['fatigue', 'cant-sleep', 'dizziness', 'anxiety-symptoms'],
    tags: [
      'tired all the time', 'always tired', 'constantly fatigued', 'chronic fatigue',
      'always exhausted', 'no energy', 'worn out', 'bone tired', 'perpetually tired',
    ],
  },
  {
    slug: 'bloating',
    name: 'Bloating',
    commonName: 'Bloated stomach / belly bloating',
    summary:
      'Bloating is the feeling of a full, swollen, or tight belly, often accompanied by visible distension. It is usually related to gas or digestive issues and is rarely serious, but chronic bloating deserves investigation.',
    causes: [
      {
        name: 'Gas & Overeating',
        likelihood: 'very-common',
        description:
          'Eating too quickly, swallowing air, or consuming gas-producing foods (beans, cruciferous vegetables, carbonated drinks) causes bloating and discomfort.',
        severity: 'low',
        whatToDo:
          'Eat slowly, avoid carbonated drinks, and try an OTC simethicone product (Gas-X). Walking after meals can help move trapped gas.',
      },
      {
        name: 'IBS (Irritable Bowel Syndrome)',
        likelihood: 'very-common',
        description:
          'IBS is a leading cause of chronic bloating — the gut is hypersensitive and produces more gas. Bloating often accompanies pain, diarrhea, or constipation.',
        severity: 'medium',
        whatToDo:
          'Try a low-FODMAP diet to identify trigger foods. Manage stress, as IBS flares are often stress-related. See a gastroenterologist for diagnosis.',
      },
      {
        name: 'Food Intolerance (Lactose / Gluten)',
        likelihood: 'common',
        description:
          'Lactose intolerance or non-celiac gluten sensitivity causes bloating, gas, and diarrhea after eating the offending food. Symptoms occur within hours of eating.',
        severity: 'low',
        whatToDo:
          'Try an elimination diet — remove dairy or gluten for 2–4 weeks to see if symptoms improve. Lactase supplements can help with lactose intolerance.',
      },
      {
        name: 'Constipation',
        likelihood: 'common',
        description:
          'Backed-up stool in the colon causes the abdomen to feel full, heavy, and bloated. Straining and infrequent bowel movements confirm constipation.',
        severity: 'low',
        whatToDo:
          'Increase fiber and water intake. Regular physical activity helps. OTC laxatives (osmotic) can provide relief if dietary changes do not help.',
      },
      {
        name: 'Celiac Disease',
        likelihood: 'less-common',
        description:
          'An autoimmune reaction to gluten damages the small intestine lining, causing severe bloating, diarrhea, fatigue, and malnutrition.',
        severity: 'medium',
        whatToDo:
          'See a gastroenterologist for antibody testing and potentially a biopsy. A strict, lifelong gluten-free diet is the only effective treatment.',
      },
      {
        name: 'SIBO (Small Intestinal Bacterial Overgrowth)',
        likelihood: 'less-common',
        description:
          'An overgrowth of bacteria in the small intestine causes excessive gas, bloating, diarrhea, and malabsorption after nearly every meal.',
        severity: 'medium',
        whatToDo:
          'See a gastroenterologist for a breath test. SIBO is treated with specific antibiotics and dietary changes. Probiotics may also help.',
      },
    ],
    seeDoctorIf: [
      'Bloating that is persistent and does not respond to dietary changes',
      'Bloating accompanied by unexplained weight loss',
      'Blood in stool or significant changes in bowel habits',
      'Severe abdominal pain alongside bloating',
      'Bloating that progressively worsens over weeks',
    ],
    emergencyIf: [
      'Sudden, severe abdominal distension with pain and inability to pass gas or stool (possible obstruction)',
      'Bloating with vomiting blood or black, tarry stools',
    ],
    relatedSymptoms: ['stomach-pain', 'constipation', 'nausea', 'green-poop'],
    tags: [
      'bloating', 'bloated', 'bloated stomach', 'belly bloat', 'gassy', 'abdominal bloating',
      'distended stomach', 'puffy stomach', 'belly feels full', 'stomach bloat',
    ],
  },
  {
    slug: 'joint-pain',
    name: 'Joint Pain',
    commonName: 'Achy joints / joint inflammation',
    summary:
      'Joint pain (arthralgia) can affect any joint in the body. It ranges from a mild ache to severe, disabling pain. Identifying whether only one or multiple joints are affected, and whether there is swelling, helps narrow the cause.',
    causes: [
      {
        name: 'Osteoarthritis',
        likelihood: 'very-common',
        description:
          'The most common form of arthritis — cartilage between joints wears down over time, causing pain, stiffness, and reduced range of motion. Worsens with activity.',
        severity: 'medium',
        whatToDo:
          'Low-impact exercise (swimming, cycling), weight management, and OTC anti-inflammatories. Physical therapy helps maintain function. A doctor can advise on injections.',
      },
      {
        name: 'Injury / Sprain',
        likelihood: 'very-common',
        description:
          'Acute joint pain following trauma — a sprained ankle, twisted knee, or overuse injury. Typically affects a single joint with localized swelling and bruising.',
        severity: 'medium',
        whatToDo:
          'RICE: Rest, Ice (20 min on/off), Compression bandage, Elevate the joint. See a doctor if you suspect a fracture or cannot bear weight.',
      },
      {
        name: 'Gout',
        likelihood: 'common',
        description:
          'Uric acid crystals deposit in a joint (most often the big toe) causing sudden, severe pain, redness, and swelling. Episodes can last days to weeks.',
        severity: 'medium',
        whatToDo:
          'See a doctor for confirmation and treatment. NSAIDs or colchicine are used during flares. Reduce purine-rich foods (red meat, shellfish, alcohol) and stay hydrated.',
      },
      {
        name: 'Rheumatoid Arthritis',
        likelihood: 'less-common',
        description:
          'An autoimmune condition causing symmetrical joint inflammation, morning stiffness lasting over an hour, and fatigue. Can damage joints permanently if untreated.',
        severity: 'high',
        whatToDo:
          'See a rheumatologist. Early, aggressive treatment with DMARDs (disease-modifying drugs) prevents joint damage. Do not delay diagnosis.',
      },
      {
        name: 'Bursitis',
        likelihood: 'less-common',
        description:
          'Inflammation of the fluid-filled sac (bursa) around a joint causes localized pain, swelling, and tenderness, often from repetitive motion or prolonged pressure.',
        severity: 'medium',
        whatToDo:
          'Rest the affected joint, apply ice, and use NSAIDs. A doctor may recommend corticosteroid injections for persistent cases.',
      },
      {
        name: "Lyme Disease",
        likelihood: 'rare',
        description:
          'A tick-borne bacterial infection that, if untreated, spreads to the joints and causes migratory joint pain and swelling, particularly in the knees.',
        severity: 'high',
        whatToDo:
          'See a doctor and mention any recent tick exposure or outdoor activities. A blood test can confirm Lyme disease. Antibiotics are effective when treated early.',
      },
    ],
    seeDoctorIf: [
      'Joint pain lasting more than a few days without a clear injury',
      'Significant joint swelling, redness, or warmth',
      'Morning stiffness lasting more than an hour',
      'Joint pain affecting multiple joints at the same time',
      'Fever accompanying joint pain',
    ],
    emergencyIf: [
      'Sudden, extremely swollen joint with high fever (possible septic arthritis — a medical emergency)',
      'Joint pain after a significant injury — possible fracture or dislocation',
    ],
    relatedSymptoms: ['back-pain', 'fatigue', 'skin-rash'],
    tags: [
      'joint pain', 'achy joints', 'joint inflammation', 'sore joints', 'stiff joints',
      'arthritis pain', 'knee pain', 'hip pain', 'shoulder pain', 'wrist pain', 'joint swelling',
    ],
  },
  {
    slug: 'skin-rash',
    name: 'Skin Rash',
    commonName: 'Skin rash / skin irritation',
    summary:
      'A skin rash is any change in the skin\'s color, texture, or appearance. Most rashes are not dangerous and resolve on their own, but some may require medical treatment depending on the cause.',
    causes: [
      {
        name: 'Allergic Reaction (Contact Dermatitis)',
        likelihood: 'very-common',
        description:
          'Direct contact with an allergen (soap, lotion, detergent, metal, plants like poison ivy) triggers a red, itchy, sometimes blistering rash at the contact site.',
        severity: 'low',
        whatToDo:
          'Identify and remove the trigger. Apply hydrocortisone cream and take antihistamines (Benadryl, Zyrtec) for itch relief. Cool compresses soothe the skin.',
      },
      {
        name: 'Eczema (Atopic Dermatitis)',
        likelihood: 'very-common',
        description:
          'A chronic inflammatory skin condition causing dry, red, intensely itchy patches — commonly on the arms, behind the knees, and on the face.',
        severity: 'low',
        whatToDo:
          'Moisturize frequently with fragrance-free creams. Topical corticosteroids treat flares. Identify personal triggers (stress, certain fabrics, soaps, dry air).',
      },
      {
        name: 'Psoriasis',
        likelihood: 'common',
        description:
          'An autoimmune condition causing thick, silvery-scaled plaques — most commonly on the scalp, elbows, and knees. Not contagious.',
        severity: 'medium',
        whatToDo:
          'See a dermatologist. Topical treatments, light therapy, and systemic medications (including biologics) are effective. Avoid known triggers like stress and skin injury.',
      },
      {
        name: 'Heat Rash',
        likelihood: 'common',
        description:
          'Small, red, prickly bumps from blocked sweat glands in hot, humid conditions. Most common in skin folds and under clothing.',
        severity: 'low',
        whatToDo:
          'Move to a cool environment, wear loose-fitting cotton clothing, and keep the affected area dry. Resolves quickly without treatment.',
      },
      {
        name: 'Ringworm (Fungal Infection)',
        likelihood: 'common',
        description:
          'A fungal infection (not an actual worm) causing a ring-shaped, scaly, itchy rash. Highly contagious via direct contact or shared objects.',
        severity: 'low',
        whatToDo:
          'Apply OTC antifungal cream (clotrimazole, terbinafine) twice daily for 2–4 weeks. Avoid sharing towels or clothing. See a doctor if it doesn\'t respond.',
      },
      {
        name: 'Shingles (Herpes Zoster)',
        likelihood: 'less-common',
        description:
          'Reactivation of the chickenpox virus causes a painful, blistering rash on one side of the body, often with burning pain before the rash appears.',
        severity: 'high',
        whatToDo:
          'See a doctor within 72 hours of rash onset — antiviral medications (valacyclovir) are most effective when started early. A vaccine prevents shingles.',
      },
    ],
    seeDoctorIf: [
      'Rash covering a large area of the body',
      'Rash accompanied by fever',
      'Rash that is spreading rapidly',
      'Rash with open sores, crusting, or signs of infection',
      'Rash that is not improving after a week of home treatment',
    ],
    emergencyIf: [
      'Rash spreading with high fever and stiff neck (possible meningitis)',
      'Non-blanching purple or red spots (petechiae) — possible serious infection',
      'Rash with severe difficulty breathing or throat swelling (anaphylaxis)',
    ],
    relatedSymptoms: ['joint-pain', 'fatigue', 'anxiety-symptoms'],
    tags: [
      'skin rash', 'rash', 'itchy skin', 'skin irritation', 'red spots', 'hives',
      'eczema', 'psoriasis', 'skin bumps', 'skin redness', 'itchy rash', 'allergic rash',
    ],
  },
  {
    slug: 'heart-racing',
    name: 'Heart Racing',
    commonName: 'Heart palpitations / rapid heartbeat',
    summary:
      'A racing, fluttering, or pounding heart (palpitations) is usually harmless, often triggered by stress, caffeine, or dehydration. However, certain patterns warrant prompt medical evaluation.',
    causes: [
      {
        name: 'Anxiety / Stress',
        likelihood: 'very-common',
        description:
          'The fight-or-flight response releases adrenaline, directly increasing heart rate. Anxiety is the most common cause of palpitations in young, otherwise healthy people.',
        severity: 'low',
        whatToDo:
          'Practice slow, controlled breathing to activate the vagus nerve and slow your heart rate. Address the root anxiety with therapy, exercise, and lifestyle changes.',
      },
      {
        name: 'Caffeine',
        likelihood: 'very-common',
        description:
          'Caffeine stimulates the heart and nervous system. High doses — from coffee, energy drinks, or even some medications — can cause noticeable palpitations.',
        severity: 'low',
        whatToDo:
          'Reduce or eliminate caffeine consumption. Palpitations typically resolve within hours of cutting back.',
      },
      {
        name: 'Dehydration',
        likelihood: 'common',
        description:
          'Low blood volume from dehydration forces the heart to beat faster to maintain adequate circulation throughout the body.',
        severity: 'low',
        whatToDo:
          'Drink water. Electrolyte drinks are helpful if you have been sweating heavily. Heart rate typically normalizes quickly with rehydration.',
      },
      {
        name: 'Anemia',
        likelihood: 'common',
        description:
          'With fewer red blood cells to carry oxygen, the heart compensates by beating faster — causing a persistent rapid heart rate, especially with exertion.',
        severity: 'medium',
        whatToDo:
          'See a doctor for blood work. Treating the underlying anemia (often with iron supplements) resolves the palpitations.',
      },
      {
        name: 'Hyperthyroidism',
        likelihood: 'less-common',
        description:
          'An overactive thyroid produces excess hormones that dramatically speed up metabolism, causing a rapid heart rate, weight loss, anxiety, and heat intolerance.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a TSH blood test. Hyperthyroidism is treatable with medication, radioactive iodine, or surgery depending on the cause.',
      },
      {
        name: 'Cardiac Arrhythmia',
        likelihood: 'less-common',
        description:
          'An abnormal heart rhythm — such as atrial fibrillation, SVT, or others — can cause a sudden rapid, irregular heartbeat that may last seconds to hours.',
        severity: 'high',
        whatToDo:
          'See a doctor. Wear a heart monitor (Holter) to capture the rhythm. Some arrhythmias require medication, cardioversion, or ablation procedures.',
      },
    ],
    seeDoctorIf: [
      'Palpitations lasting more than a few minutes',
      'Palpitations that feel irregular or like a skipped beat',
      'Palpitations with shortness of breath, chest pain, or lightheadedness',
      'Palpitations that occur during exercise',
      'Palpitations in someone with a history of heart disease',
    ],
    emergencyIf: [
      'Rapid heartbeat with chest pain, shortness of breath, or fainting',
      'Heart rate above 150 BPM at rest without an obvious cause',
      'Palpitations with fainting or near-fainting',
    ],
    relatedSymptoms: ['chest-pain', 'shortness-of-breath', 'anxiety-symptoms', 'dizziness'],
    tags: [
      'heart racing', 'palpitations', 'rapid heartbeat', 'fast heart rate', 'heart pounding',
      'heart fluttering', 'heart skipping', 'tachycardia', 'heart beating fast', 'heart palpitations',
    ],
  },
  {
    slug: 'shortness-of-breath',
    name: 'Shortness of Breath',
    commonName: 'Difficulty breathing / breathlessness',
    summary:
      'Shortness of breath (dyspnea) is the sensation of not being able to breathe comfortably. It can range from a mild feeling of breathlessness to a life-threatening emergency requiring immediate care.',
    causes: [
      {
        name: 'Anxiety / Panic Attack',
        likelihood: 'very-common',
        description:
          'Anxiety triggers rapid, shallow breathing (hyperventilation), which paradoxically makes you feel more breathless despite getting enough oxygen.',
        severity: 'medium',
        whatToDo:
          'Try slow, deliberate breathing — inhale for 4 counts, hold for 2, exhale for 6. Diaphragmatic breathing exercises and therapy address the root cause.',
      },
      {
        name: 'Asthma',
        likelihood: 'very-common',
        description:
          'Inflammation and narrowing of the airways causes episodic breathlessness, wheezing, and chest tightness — often triggered by allergens, exercise, or cold air.',
        severity: 'medium',
        whatToDo:
          'Use a rescue inhaler (albuterol) during an attack. See a doctor for a management plan. Controller medications can prevent future episodes.',
      },
      {
        name: 'Allergies / Hay Fever',
        likelihood: 'common',
        description:
          'Severe allergic responses can cause nasal congestion and, in some cases, bronchospasm — making breathing feel labored, especially during high pollen seasons.',
        severity: 'low',
        whatToDo:
          'Antihistamines, nasal corticosteroid sprays, and avoiding triggers. See an allergist for testing and immunotherapy if allergies are severe.',
      },
      {
        name: 'Pneumonia',
        likelihood: 'less-common',
        description:
          'Infection fills the air sacs in the lungs with fluid, reducing oxygenation — causing breathlessness, fever, productive cough, and chest pain.',
        severity: 'high',
        whatToDo:
          'See a doctor promptly. Pneumonia requires antibiotics (bacterial) or antiviral medications. Severe cases need hospitalization.',
      },
      {
        name: 'Heart Failure',
        likelihood: 'less-common',
        description:
          'When the heart cannot pump efficiently, fluid backs up into the lungs — causing breathlessness that is worse when lying flat and during minimal exertion.',
        severity: 'emergency',
        whatToDo:
          'Seek emergency medical care immediately. This is a serious condition requiring hospitalization and ongoing cardiac management.',
      },
      {
        name: 'Pulmonary Embolism',
        likelihood: 'rare',
        description:
          'A blood clot in the pulmonary arteries causes sudden, severe shortness of breath, sharp chest pain, and sometimes coughing up blood.',
        severity: 'emergency',
        whatToDo:
          'Call 911 immediately. Pulmonary embolism is a life-threatening emergency requiring immediate anticoagulation treatment.',
      },
    ],
    seeDoctorIf: [
      'Shortness of breath that is new or worsening',
      'Breathlessness during activities that previously didn\'t cause problems',
      'Shortness of breath with wheezing',
      'Breathlessness worse when lying flat',
      'Any unexplained shortness of breath in someone over 50',
    ],
    emergencyIf: [
      'Sudden severe shortness of breath at rest',
      'Shortness of breath with chest pain, rapid heart rate, or fainting',
      'Lips or fingertips turning blue (cyanosis)',
      'Inability to complete a sentence due to breathlessness',
    ],
    relatedSymptoms: ['chest-pain', 'heart-racing', 'anxiety-symptoms', 'fatigue'],
    tags: [
      'shortness of breath', 'difficulty breathing', 'breathlessness', 'cant breathe',
      'hard to breathe', 'trouble breathing', 'breathing difficulty', 'out of breath', 'dyspnea',
    ],
  },
  {
    slug: 'frequent-urination',
    name: 'Frequent Urination',
    commonName: 'Peeing a lot / overactive bladder',
    summary:
      'Needing to urinate more than 8 times per day or waking at night to urinate can have many causes. Some are easily addressed with lifestyle changes; others require medical evaluation.',
    causes: [
      {
        name: 'Urinary Tract Infection (UTI)',
        likelihood: 'very-common',
        description:
          'Bacterial infection of the bladder or urethra causes a strong, frequent urge to urinate, often with burning, cloudy urine, or pelvic discomfort.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a urine test. UTIs are treated with a short course of antibiotics. Drink plenty of water. Cranberry supplements may help prevent recurrence.',
      },
      {
        name: 'Diabetes (High Blood Sugar)',
        likelihood: 'very-common',
        description:
          'High blood glucose pulls water from tissues and forces the kidneys to work overtime, causing frequent, large-volume urination and excessive thirst.',
        severity: 'medium',
        whatToDo:
          'See a doctor for blood glucose testing. Diabetes requires medical management through lifestyle changes, oral medications, or insulin.',
      },
      {
        name: 'High Fluid / Caffeine Intake',
        likelihood: 'common',
        description:
          'Drinking large volumes of fluids, especially caffeinated beverages (coffee, tea, energy drinks), directly increases urinary frequency — caffeine is also a diuretic.',
        severity: 'low',
        whatToDo:
          'Reduce caffeine and track your fluid intake. Most people find urinary frequency improves quickly once caffeine is reduced.',
      },
      {
        name: 'Overactive Bladder (OAB)',
        likelihood: 'common',
        description:
          'The bladder muscle (detrusor) contracts involuntarily, creating urgent and frequent urges to urinate even when the bladder is not full.',
        severity: 'low',
        whatToDo:
          'Bladder training exercises and pelvic floor physical therapy are first-line. A urologist or urogynecologist can prescribe medications if needed.',
      },
      {
        name: 'Anxiety',
        likelihood: 'common',
        description:
          'Anxiety activates the nervous system and can cause the bladder to feel urgently full even when it is not. Frequent urination during stressful periods is common.',
        severity: 'low',
        whatToDo:
          'Addressing the underlying anxiety through therapy, exercise, and stress management can resolve bladder urgency.',
      },
      {
        name: 'Prostate Issues (BPH)',
        likelihood: 'less-common',
        description:
          'An enlarged prostate (benign prostatic hyperplasia) presses on the urethra in men — causing frequent urination, weak stream, and incomplete bladder emptying.',
        severity: 'medium',
        whatToDo:
          'See a urologist for evaluation. Medications (alpha-blockers, 5-alpha reductase inhibitors) are effective. Minimally invasive procedures are available for severe cases.',
      },
    ],
    seeDoctorIf: [
      'Frequent urination with burning, pain, or blood in urine',
      'Urinating more than 8 times per day without drinking excess fluids',
      'Waking up more than twice per night to urinate',
      'Frequency accompanied by extreme thirst and weight loss',
      'Weak or interrupted urine stream with frequent urination',
    ],
    emergencyIf: [
      'Blood in urine with severe pain in the back or side (possible kidney stone)',
      'Inability to urinate at all — urinary retention',
    ],
    relatedSymptoms: ['back-pain', 'anxiety-symptoms', 'bloating'],
    tags: [
      'frequent urination', 'peeing a lot', 'urinating frequently', 'overactive bladder',
      'need to pee often', 'urinary frequency', 'UTI', 'bladder problems', 'pee a lot',
    ],
  },
  {
    slug: 'constipation',
    name: 'Constipation',
    commonName: 'Trouble pooping / infrequent bowel movements',
    summary:
      'Constipation is having fewer than three bowel movements per week, or passing hard, dry stools that are difficult to pass. It is very common and usually caused by diet and lifestyle factors.',
    causes: [
      {
        name: 'Low Fiber Diet',
        likelihood: 'very-common',
        description:
          'Not eating enough fruits, vegetables, and whole grains means insufficient fiber to add bulk to stool and stimulate bowel movements.',
        severity: 'low',
        whatToDo:
          'Gradually increase fiber to 25–35 grams/day from fruits, vegetables, whole grains, and legumes. Add fiber slowly to avoid gas and bloating.',
      },
      {
        name: 'Dehydration',
        likelihood: 'very-common',
        description:
          'Insufficient fluid intake causes the colon to absorb more water from waste, resulting in hard, dry stools that are difficult to pass.',
        severity: 'low',
        whatToDo:
          'Aim for at least 8 glasses of water per day. Warm water or prune juice first thing in the morning can also stimulate bowel movements.',
      },
      {
        name: 'Sedentary Lifestyle',
        likelihood: 'common',
        description:
          'Physical activity stimulates bowel contractions. A sedentary lifestyle slows gut motility, making constipation more likely.',
        severity: 'low',
        whatToDo:
          'Aim for at least 30 minutes of moderate exercise most days. Even a 20-minute walk can significantly help bowel regularity.',
      },
      {
        name: 'IBS-C (IBS with Constipation)',
        likelihood: 'common',
        description:
          'IBS with predominant constipation causes chronic difficulty with bowel movements, bloating, and abdominal discomfort, even with adequate diet.',
        severity: 'medium',
        whatToDo:
          'See a gastroenterologist. Dietary changes, laxatives, and prescription medications specifically for IBS-C are available.',
      },
      {
        name: 'Hypothyroidism',
        likelihood: 'less-common',
        description:
          'An underactive thyroid slows all body processes — including gut motility — leading to constipation, fatigue, weight gain, and cold intolerance.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a TSH blood test. Treating hypothyroidism with levothyroxine typically resolves constipation.',
      },
      {
        name: 'Medication Side Effect',
        likelihood: 'common',
        description:
          'Opioid pain medications, iron supplements, antacids containing aluminum or calcium, and some antidepressants are common causes of constipation.',
        severity: 'low',
        whatToDo:
          'Talk to your doctor or pharmacist. Do not stop prescribed medications without guidance. Stool softeners (docusate) can counteract medication-induced constipation.',
      },
    ],
    seeDoctorIf: [
      'Constipation lasting more than three weeks',
      'New constipation without an obvious dietary cause, especially after age 50',
      'Constipation with blood in the stool',
      'Severe abdominal pain alongside constipation',
      'Unexplained weight loss with a change in bowel habits',
    ],
    emergencyIf: [
      'Complete inability to pass stool or gas with a severely distended abdomen (possible obstruction)',
      'Constipation with vomiting and severe abdominal pain',
    ],
    relatedSymptoms: ['bloating', 'stomach-pain', 'fatigue', 'green-poop'],
    tags: [
      'constipation', 'cant poop', 'hard to poop', 'infrequent bowel movements', 'straining',
      'hard stools', 'not pooping', 'irregular bowel movements', 'bowel issues',
    ],
  },
  {
    slug: 'anxiety-symptoms',
    name: 'Anxiety',
    commonName: 'Anxiety symptoms / feeling anxious',
    summary:
      'Anxiety causes both mental and physical symptoms — from racing thoughts and worry to a racing heart, chest tightness, and shortness of breath. It is the most common mental health condition and is highly treatable.',
    causes: [
      {
        name: 'Generalized Anxiety Disorder (GAD)',
        likelihood: 'very-common',
        description:
          'Persistent, excessive worry about everyday concerns — work, health, family — that is difficult to control and accompanied by physical symptoms like muscle tension and sleep problems.',
        severity: 'medium',
        whatToDo:
          'Cognitive behavioral therapy (CBT) is the most effective treatment. Medications (SSRIs, SNRIs) are also effective. Regular exercise significantly reduces anxiety.',
      },
      {
        name: 'Panic Disorder',
        likelihood: 'common',
        description:
          'Recurrent unexpected panic attacks — sudden surges of intense fear with physical symptoms like racing heart, chest pain, dizziness, and shortness of breath.',
        severity: 'medium',
        whatToDo:
          'CBT with panic-focused techniques is highly effective. Medications can reduce attack frequency. Understanding that panic attacks are not dangerous helps reduce their impact.',
      },
      {
        name: 'Stress (Situational Anxiety)',
        likelihood: 'very-common',
        description:
          'Temporary anxiety in response to a specific stressor — a work deadline, relationship issue, financial pressure. Usually resolves when the stressor is removed.',
        severity: 'low',
        whatToDo:
          'Identify and address the stressor. Stress management techniques: exercise, journaling, talking to a trusted person, and mindfulness meditation.',
      },
      {
        name: 'Caffeine Overconsumption',
        likelihood: 'common',
        description:
          'High caffeine intake stimulates the nervous system in ways that closely mimic or worsen anxiety — causing jitteriness, racing heart, and heightened worry.',
        severity: 'low',
        whatToDo:
          'Reduce caffeine intake gradually to avoid withdrawal headaches. Many people see significant anxiety improvement within a week of cutting caffeine.',
      },
      {
        name: 'Thyroid Disorder (Hyperthyroidism)',
        likelihood: 'less-common',
        description:
          'An overactive thyroid can cause anxiety-like symptoms including nervousness, rapid heartbeat, sweating, and irritability — mimicking or worsening anxiety.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a TSH blood test. Treating the underlying thyroid condition resolves these symptoms.',
      },
      {
        name: 'PTSD (Post-Traumatic Stress Disorder)',
        likelihood: 'less-common',
        description:
          'Following trauma, persistent anxiety, hypervigilance, flashbacks, and avoidance behaviors can significantly impair daily life.',
        severity: 'high',
        whatToDo:
          'Seek a mental health professional who specializes in trauma. Evidence-based treatments — EMDR and trauma-focused CBT — are highly effective for PTSD.',
      },
    ],
    seeDoctorIf: [
      'Anxiety that interferes with work, relationships, or daily functioning',
      'Anxiety accompanied by depression or thoughts of self-harm',
      'Physical symptoms (heart racing, chest pain) that you want to rule out as cardiac',
      'Anxiety that has not improved after self-help strategies',
      'Frequent panic attacks',
    ],
    emergencyIf: [
      'Thoughts of harming yourself — call 988 (Suicide & Crisis Lifeline) or go to the nearest ER',
      'First episode of chest pain or difficulty breathing — seek medical evaluation to rule out cardiac causes before attributing to anxiety',
    ],
    relatedSymptoms: ['heart-racing', 'shortness-of-breath', 'cant-sleep', 'fatigue'],
    tags: [
      'anxiety', 'anxious', 'anxiety symptoms', 'feeling anxious', 'worry', 'nervous',
      'panic attack', 'panic', 'overthinking', 'stress symptoms', 'anxiety attack',
      'generalized anxiety', 'nervous system', 'on edge',
    ],
  },
];

export function getSymptomBySlug(slug: string): Symptom | undefined {
  return symptoms.find((s) => s.slug === slug);
}
