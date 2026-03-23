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
  {
    slug: 'neck-pain',
    name: 'Neck Pain',
    commonName: 'Neck ache / stiff neck',
    summary:
      'Neck pain is extremely common and usually stems from muscle strain or poor posture. Most cases resolve on their own, but certain causes like meningitis or a herniated disc require prompt medical attention.',
    causes: [
      {
        name: 'Muscle Strain',
        likelihood: 'very-common',
        description:
          'Overuse, sleeping in an awkward position, or sudden movement can strain neck muscles, causing stiffness and aching pain that worsens with movement.',
        severity: 'low',
        whatToDo:
          'Apply ice for the first 48 hours, then switch to heat. Take OTC pain relievers like ibuprofen. Gentle stretching and rest usually resolve it within a few days.',
      },
      {
        name: 'Poor Posture',
        likelihood: 'very-common',
        description:
          'Prolonged forward head posture from hunching over a phone or computer places excessive strain on neck muscles and ligaments.',
        severity: 'low',
        whatToDo:
          'Adjust your workstation ergonomics, take regular movement breaks, and practice chin tucks. Physical therapy can help with chronic postural issues.',
      },
      {
        name: 'Herniated Disc',
        likelihood: 'common',
        description:
          'A ruptured disc in the cervical spine can press on nearby nerves, causing neck pain that radiates into the arm along with numbness or weakness.',
        severity: 'medium',
        whatToDo:
          'See a doctor for imaging. Treatment may include physical therapy, anti-inflammatory medications, or steroid injections. Surgery is rarely needed.',
      },
      {
        name: 'Cervical Spondylosis',
        likelihood: 'common',
        description:
          'Age-related wear on the cervical spine causes bone spurs and disc degeneration, leading to chronic neck stiffness, pain, and sometimes nerve compression.',
        severity: 'medium',
        whatToDo:
          'Physical therapy, NSAIDs, and heat or ice can manage symptoms. See a doctor for persistent symptoms to confirm diagnosis and rule out nerve involvement.',
      },
      {
        name: 'Meningitis',
        likelihood: 'rare',
        description:
          'Inflammation of the membranes surrounding the brain and spinal cord causes severe neck stiffness, high fever, and headache. This is a life-threatening emergency.',
        severity: 'emergency',
        whatToDo:
          'Call 911 or go to the ER immediately. Bacterial meningitis is fatal without rapid antibiotic treatment.',
      },
    ],
    seeDoctorIf: [
      'Neck pain following a car accident or fall',
      'Pain radiates down your arm with numbness or weakness',
      'Pain persists more than one week without improvement',
      'Neck pain with fever or severe headache',
    ],
    emergencyIf: [
      'Severe neck stiffness with high fever and headache (possible meningitis)',
      'Neck pain after significant trauma with weakness or paralysis in any limb',
    ],
    relatedSymptoms: [
      'headache',
      'shoulder-pain',
      'numbness-tingling',
    ],
    tags: [
      'neck pain',
      'stiff neck',
      'neck ache',
      'neck stiffness',
      'cervical pain',
      'neck strain',
      'sore neck',
    ],
  },
  {
    slug: 'shoulder-pain',
    name: 'Shoulder Pain',
    commonName: 'Shoulder ache / shoulder injury',
    summary:
      'Shoulder pain is one of the most common musculoskeletal complaints, often related to the rotator cuff or surrounding structures. In rare cases, shoulder pain can be referred from the heart and requires emergency evaluation.',
    causes: [
      {
        name: 'Rotator Cuff Injury',
        likelihood: 'very-common',
        description:
          'Tears or inflammation in the rotator cuff tendons cause pain with overhead movements, weakness, and sometimes a catching sensation. Common in athletes and older adults.',
        severity: 'medium',
        whatToDo:
          'Rest, ice, and NSAIDs initially. Physical therapy is the cornerstone of recovery. Partial tears often heal conservatively; full tears may need surgery.',
      },
      {
        name: 'Frozen Shoulder',
        likelihood: 'common',
        description:
          'Progressive stiffening of the shoulder joint capsule causes pain and severely restricted range of motion. More common in people with diabetes or after prolonged immobility.',
        severity: 'medium',
        whatToDo:
          'Physical therapy and stretching exercises are essential. NSAIDs and corticosteroid injections can help. Full recovery can take 1-3 years.',
      },
      {
        name: 'Shoulder Bursitis',
        likelihood: 'common',
        description:
          'Inflammation of the bursa sac in the shoulder causes pain with arm elevation and lying on the affected side. Often associated with overuse or repetitive overhead work.',
        severity: 'medium',
        whatToDo:
          'Rest, ice, and NSAIDs. Avoid aggravating activities. Corticosteroid injection may be recommended if conservative measures fail.',
      },
      {
        name: 'Osteoarthritis',
        likelihood: 'less-common',
        description:
          'Cartilage breakdown in the shoulder joint causes aching pain, stiffness, and grinding with movement. More common in older adults or those with prior injuries.',
        severity: 'medium',
        whatToDo:
          'Physical therapy, NSAIDs, and activity modification. Severe cases may require joint replacement surgery.',
      },
      {
        name: 'Heart Attack (Referred Pain)',
        likelihood: 'rare',
        description:
          'Left shoulder pain can be a referred symptom of a heart attack, especially when accompanied by chest pain, jaw pain, sweating, or shortness of breath.',
        severity: 'emergency',
        whatToDo:
          'Call 911 immediately if shoulder pain accompanies chest pressure, shortness of breath, or sweating. Chew aspirin 325mg if not allergic while waiting for help.',
      },
    ],
    seeDoctorIf: [
      'Pain persists more than 2 weeks without improvement',
      'Significant weakness when lifting the arm',
      'Visible deformity of the shoulder',
      'Pain disrupts sleep consistently',
    ],
    emergencyIf: [
      'Left shoulder pain with chest tightness, shortness of breath, or sweating',
      'Shoulder dislocation after trauma',
    ],
    relatedSymptoms: [
      'neck-pain',
      'elbow-pain',
      'chest-tightness',
    ],
    tags: [
      'shoulder pain',
      'shoulder ache',
      'rotator cuff',
      'shoulder injury',
      'frozen shoulder',
      'shoulder stiffness',
    ],
  },
  {
    slug: 'knee-pain',
    name: 'Knee Pain',
    commonName: 'Knee ache / sore knee',
    summary:
      'Knee pain affects people of all ages and can stem from injuries, overuse, or degenerative conditions. The knee is one of the most complex joints in the body and is prone to both acute injuries and chronic wear.',
    causes: [
      {
        name: 'Runner\'s Knee',
        likelihood: 'very-common',
        description:
          'Pain around or behind the kneecap worsened by running, squatting, or prolonged sitting. Caused by poor patellar tracking due to muscle imbalances or overuse.',
        severity: 'low',
        whatToDo:
          'Rest, ice, and NSAIDs. Strengthen hip and quadriceps muscles. Avoid aggravating activities. A physical therapist can provide a targeted rehab program.',
      },
      {
        name: 'Osteoarthritis',
        likelihood: 'common',
        description:
          'Gradual cartilage breakdown causes knee pain, morning stiffness, swelling, and a grinding sensation with movement. Most common in people over 50.',
        severity: 'medium',
        whatToDo:
          'Weight management, low-impact exercise, and NSAIDs. Physical therapy helps maintain strength. Severe cases may require joint injections or replacement.',
      },
      {
        name: 'Ligament Tear (ACL/MCL)',
        likelihood: 'common',
        description:
          'Sudden pivoting, landing awkwardly, or direct impact can tear knee ligaments, causing immediate severe pain, swelling, and instability.',
        severity: 'high',
        whatToDo:
          'Apply RICE (rest, ice, compression, elevation) and see a doctor promptly. ACL tears often require surgery for athletes. MRI confirms the diagnosis.',
      },
      {
        name: 'Knee Bursitis',
        likelihood: 'less-common',
        description:
          'Inflammation of bursae around the knee joint causes localized swelling, warmth, and tenderness. Common in people who kneel frequently.',
        severity: 'low',
        whatToDo:
          'Rest, ice, and NSAIDs. Avoid kneeling. A doctor may drain the bursa and inject corticosteroids for persistent cases.',
      },
      {
        name: 'Gout',
        likelihood: 'less-common',
        description:
          'Uric acid crystal deposits in the knee joint cause sudden, severe pain, swelling, and redness. Attacks often occur at night and can be triggered by diet or dehydration.',
        severity: 'medium',
        whatToDo:
          'See a doctor for diagnosis and treatment. NSAIDs or colchicine help acute attacks. Long-term management includes dietary changes and urate-lowering medication.',
      },
    ],
    seeDoctorIf: [
      'Knee is visibly swollen or deformed',
      'Unable to bear weight on the knee',
      'Pain persists more than a few weeks',
      'Knee locks up or gives way during walking',
    ],
    emergencyIf: [
      'Knee injury with significant deformity or inability to straighten the leg',
      'Knee severely swollen and hot with fever (possible septic joint)',
    ],
    relatedSymptoms: [
      'foot-pain',
      'hip-pain',
      'ankle-pain',
    ],
    tags: [
      'knee pain',
      'sore knee',
      'knee ache',
      'knee injury',
      'knee swelling',
      'knee arthritis',
      'knee stiffness',
    ],
  },
  {
    slug: 'foot-pain',
    name: 'Foot Pain',
    commonName: 'Sore feet / foot ache',
    summary:
      'Foot pain is very common and can affect the heel, arch, ball, or toes. Most causes are related to mechanical stress, footwear, or overuse, though systemic conditions like gout or arthritis can also affect the feet.',
    causes: [
      {
        name: 'Plantar Fasciitis',
        likelihood: 'very-common',
        description:
          'Inflammation of the thick band of tissue on the bottom of the foot causes sharp heel pain, typically worst with the first steps in the morning.',
        severity: 'medium',
        whatToDo:
          'Stretch the calf and plantar fascia daily. Use supportive footwear or orthotics. Rest, ice, and NSAIDs help. Most cases resolve in months with consistent treatment.',
      },
      {
        name: 'Bunion',
        likelihood: 'common',
        description:
          'A bony bump at the base of the big toe develops from structural misalignment, causing pain, redness, and difficulty fitting shoes.',
        severity: 'low',
        whatToDo:
          'Wear wide, comfortable shoes with good support. Padding and orthotics can reduce pressure. Severe cases may require surgical correction.',
      },
      {
        name: 'Stress Fracture',
        likelihood: 'common',
        description:
          'A small crack in a foot bone from repetitive stress causes localized pain that worsens with activity and improves with rest. Common in runners and military recruits.',
        severity: 'medium',
        whatToDo:
          'See a doctor for X-ray or MRI. Rest is essential. A walking boot or cast may be needed. Return to activity should be gradual.',
      },
      {
        name: 'Flat Feet (Fallen Arches)',
        likelihood: 'common',
        description:
          'Lack of arch support places abnormal stress on the foot and ankle, causing arch or heel pain, especially during prolonged standing or walking.',
        severity: 'low',
        whatToDo:
          'Supportive footwear and custom orthotics. Arch-strengthening exercises can help. Severe cases may benefit from podiatry referral.',
      },
      {
        name: 'Gout',
        likelihood: 'less-common',
        description:
          'Uric acid crystals most commonly deposit in the big toe joint, causing sudden, excruciating pain, swelling, and redness, often at night.',
        severity: 'medium',
        whatToDo:
          'See a doctor. NSAIDs or colchicine treat acute attacks. Dietary changes (reduce red meat, alcohol) and medication prevent recurrence.',
      },
    ],
    seeDoctorIf: [
      'Foot pain persists more than 2 weeks despite rest',
      'Swelling, bruising, or inability to bear weight after an injury',
      'Numbness or tingling in the feet',
      'Foot pain with diabetes (any wound or ulcer warrants prompt care)',
    ],
    emergencyIf: [
      'Open wound on the foot with signs of infection and fever (especially if diabetic)',
    ],
    relatedSymptoms: [
      'ankle-pain',
      'knee-pain',
      'numbness-tingling',
    ],
    tags: [
      'foot pain',
      'sore feet',
      'heel pain',
      'plantar fasciitis',
      'arch pain',
      'foot ache',
      'toe pain',
      'foot injury',
    ],
  },
  {
    slug: 'ankle-pain',
    name: 'Ankle Pain',
    commonName: 'Sore ankle / twisted ankle',
    summary:
      'Ankle pain most often results from sprains, which are among the most common musculoskeletal injuries. The ankle can also be affected by tendinitis, arthritis, and gout.',
    causes: [
      {
        name: 'Ankle Sprain',
        likelihood: 'very-common',
        description:
          'Twisting or rolling the ankle stretches or tears the ligaments, causing immediate pain, swelling, bruising, and difficulty walking.',
        severity: 'medium',
        whatToDo:
          'RICE: rest, ice (20 min on/off), compression bandage, and elevate the foot. Most sprains heal in 2-6 weeks. See a doctor if you cannot bear weight.',
      },
      {
        name: 'Achilles Tendinitis',
        likelihood: 'common',
        description:
          'Overuse inflammation of the Achilles tendon causes pain and stiffness at the back of the ankle, especially with the first steps in the morning or after exercise.',
        severity: 'medium',
        whatToDo:
          'Rest, eccentric calf exercises, and NSAIDs. Avoid sudden increases in activity. Physical therapy is highly effective. Avoid corticosteroid injections into the tendon.',
      },
      {
        name: 'Ankle Fracture',
        likelihood: 'common',
        description:
          'A broken ankle bone from a fall, twist, or direct impact causes severe pain, significant swelling, bruising, and inability to bear weight.',
        severity: 'high',
        whatToDo:
          'Seek emergency care. Immobilize the ankle and apply ice while getting to the ER. Most fractures require a cast or boot; some need surgery.',
      },
      {
        name: 'Arthritis',
        likelihood: 'less-common',
        description:
          'Osteoarthritis or rheumatoid arthritis in the ankle joint causes chronic pain, stiffness, and swelling, often worsening with activity.',
        severity: 'medium',
        whatToDo:
          'NSAIDs, physical therapy, and supportive footwear. A rheumatologist or orthopedic specialist can manage severe or inflammatory arthritis.',
      },
      {
        name: 'Gout',
        likelihood: 'less-common',
        description:
          'Uric acid crystal deposits can occur in the ankle, causing sudden, intense pain and swelling, often mistaken for a sprain.',
        severity: 'medium',
        whatToDo:
          'See a doctor for blood tests and joint aspiration. NSAIDs or colchicine for acute attacks. Dietary changes and medication prevent recurrence.',
      },
    ],
    seeDoctorIf: [
      'Inability to bear weight on the ankle',
      'Significant swelling or bruising that does not improve after 48 hours',
      'Ankle giving way repeatedly (chronic instability)',
      'Persistent pain more than 2 weeks after an injury',
    ],
    emergencyIf: [
      'Visible bone deformity or bone protruding through the skin',
      'Complete loss of sensation in the foot after injury',
    ],
    relatedSymptoms: [
      'foot-pain',
      'knee-pain',
      'swollen-legs',
    ],
    tags: [
      'ankle pain',
      'twisted ankle',
      'ankle sprain',
      'sore ankle',
      'ankle swelling',
      'ankle injury',
      'ankle ache',
    ],
  },
  {
    slug: 'hip-pain',
    name: 'Hip Pain',
    commonName: 'Hip ache / sore hip',
    summary:
      'Hip pain can originate from the joint itself or from surrounding structures like bursae, muscles, and nerves. The location of the pain often points to the cause — groin pain typically suggests the joint, while outer hip pain suggests bursitis.',
    causes: [
      {
        name: 'Hip Bursitis',
        likelihood: 'very-common',
        description:
          'Inflammation of the trochanteric bursa causes pain on the outer hip that may radiate down the thigh. Worsened by lying on the affected side or climbing stairs.',
        severity: 'medium',
        whatToDo:
          'Rest, ice, NSAIDs, and avoid lying on the painful side. Physical therapy and corticosteroid injections are effective for persistent cases.',
      },
      {
        name: 'Osteoarthritis',
        likelihood: 'common',
        description:
          'Cartilage wear in the hip joint causes groin pain, stiffness, and a reduced range of motion. Pain often worsens with activity and improves with rest.',
        severity: 'medium',
        whatToDo:
          'Low-impact exercise, weight management, NSAIDs, and physical therapy. Severe joint destruction may require hip replacement surgery.',
      },
      {
        name: 'Sciatica',
        likelihood: 'common',
        description:
          'Compression of the sciatic nerve causes pain radiating from the lower back through the hip and down the leg, sometimes with numbness or tingling.',
        severity: 'medium',
        whatToDo:
          'NSAIDs, gentle stretching, and physical therapy. Most cases improve in 4-6 weeks. See a doctor if there is bowel or bladder involvement.',
      },
      {
        name: 'Hip Fracture',
        likelihood: 'less-common',
        description:
          'A broken hip — typically from a fall in older adults — causes severe groin pain and inability to walk or bear weight. Can be life-threatening in elderly patients.',
        severity: 'emergency',
        whatToDo:
          'Call 911 or go to the ER immediately. Hip fractures require surgical repair. Do not attempt to move someone with a suspected hip fracture without medical help.',
      },
      {
        name: 'Labral Tear',
        likelihood: 'less-common',
        description:
          'A tear in the cartilage ring around the hip socket causes groin pain, clicking, and a catching sensation. Common in athletes and people with structural hip abnormalities.',
        severity: 'medium',
        whatToDo:
          'See an orthopedic specialist. Physical therapy can help mild tears. Arthroscopic surgery may be needed for significant tears that do not respond to conservative care.',
      },
    ],
    seeDoctorIf: [
      'Hip pain after a fall, especially in older adults',
      'Pain with groin aching that limits walking',
      'Hip pain with fever (possible joint infection)',
      'Pain persists more than 2 weeks without improvement',
    ],
    emergencyIf: [
      'Hip pain after a fall with inability to bear weight (possible fracture)',
      'Sudden severe hip pain with fever and chills (possible septic arthritis)',
    ],
    relatedSymptoms: [
      'knee-pain',
      'lower-abdominal-pain',
      'numbness-tingling',
    ],
    tags: [
      'hip pain',
      'sore hip',
      'hip ache',
      'groin pain',
      'hip bursitis',
      'hip arthritis',
      'hip injury',
    ],
  },
  {
    slug: 'wrist-pain',
    name: 'Wrist Pain',
    commonName: 'Sore wrist / wrist ache',
    summary:
      'Wrist pain is common and often related to repetitive use, injury, or nerve compression. Carpal tunnel syndrome is the most prevalent cause, but sprains and arthritis are also frequent culprits.',
    causes: [
      {
        name: 'Carpal Tunnel Syndrome',
        likelihood: 'very-common',
        description:
          'Compression of the median nerve in the wrist causes numbness, tingling, and pain in the hand and wrist, often worse at night or with repetitive hand use.',
        severity: 'medium',
        whatToDo:
          'Wrist splints (especially at night), NSAIDs, and ergonomic modifications. Corticosteroid injections provide temporary relief. Carpal tunnel release surgery is highly effective.',
      },
      {
        name: 'Wrist Sprain',
        likelihood: 'common',
        description:
          'Falling on an outstretched hand stretches or tears wrist ligaments, causing pain, swelling, and weakness.',
        severity: 'medium',
        whatToDo:
          'RICE protocol for the first 48 hours. Splint for support. Most mild sprains heal in 2-4 weeks. See a doctor if pain or instability persists.',
      },
      {
        name: 'Tendinitis (De Quervain)',
        likelihood: 'common',
        description:
          'Inflammation of tendons on the thumb side of the wrist causes pain and swelling at the base of the thumb, worsened by gripping or pinching.',
        severity: 'low',
        whatToDo:
          'Rest, thumb-spica splint, and NSAIDs. Corticosteroid injection is very effective. Avoid repetitive pinching motions during recovery.',
      },
      {
        name: 'Rheumatoid Arthritis',
        likelihood: 'less-common',
        description:
          'Autoimmune inflammation of the wrist joints causes bilateral pain, swelling, and morning stiffness. Can lead to permanent joint damage if untreated.',
        severity: 'medium',
        whatToDo:
          'See a rheumatologist. Disease-modifying drugs (DMARDs) are essential to prevent joint destruction. NSAIDs and splints help symptoms.',
      },
      {
        name: 'Repetitive Strain Injury',
        likelihood: 'common',
        description:
          'Sustained repetitive motions from typing, gaming, or assembly work lead to chronic wrist pain, fatigue, and weakness without a single identifiable injury.',
        severity: 'low',
        whatToDo:
          'Ergonomic changes, regular breaks, and wrist exercises. NSAIDs and wrist braces help during flare-ups. Occupational therapy can assess workstation setup.',
      },
    ],
    seeDoctorIf: [
      'Numbness or tingling that persists or wakes you at night',
      'Wrist pain after a fall (possible fracture)',
      'Visible deformity or severe swelling',
      'Weakness in grip strength affecting daily activities',
    ],
    emergencyIf: [
      'Wrist deformity or suspected fracture after trauma',
    ],
    relatedSymptoms: [
      'elbow-pain',
      'numbness-tingling',
      'neck-pain',
    ],
    tags: [
      'wrist pain',
      'carpal tunnel',
      'wrist ache',
      'sore wrist',
      'wrist injury',
      'hand pain',
      'wrist strain',
      'repetitive strain',
    ],
  },
  {
    slug: 'elbow-pain',
    name: 'Elbow Pain',
    commonName: 'Sore elbow / tennis elbow',
    summary:
      'Elbow pain commonly results from overuse injuries affecting the tendons around the joint. Tennis elbow and golfer\'s elbow are the most common diagnoses, though nerve issues and bursitis also affect this area.',
    causes: [
      {
        name: 'Tennis Elbow (Lateral Epicondylitis)',
        likelihood: 'very-common',
        description:
          'Overuse of the forearm extensors causes pain on the outer elbow, worsened by gripping, lifting, or extending the wrist. Despite the name, most cases occur in non-tennis players.',
        severity: 'medium',
        whatToDo:
          'Rest, ice, and NSAIDs. Forearm stretching and strengthening exercises are key. A counterforce brace can reduce tendon strain. Most cases resolve in 6-12 months.',
      },
      {
        name: 'Golfer\'s Elbow (Medial Epicondylitis)',
        likelihood: 'common',
        description:
          'Pain on the inner elbow from overuse of wrist flexors and forearm pronators. Worsened by gripping, wrist flexion, or throwing motions.',
        severity: 'medium',
        whatToDo:
          'Same approach as tennis elbow: rest, ice, NSAIDs, and progressive stretching and strengthening. Corticosteroid injections may help persistent cases.',
      },
      {
        name: 'Elbow Bursitis',
        likelihood: 'common',
        description:
          'Inflammation of the olecranon bursa at the tip of the elbow causes a noticeable fluid-filled lump, tenderness, and swelling.',
        severity: 'low',
        whatToDo:
          'Protect the elbow from pressure, apply ice, and take NSAIDs. A doctor may need to drain the bursa if very large. Antibiotics if infected.',
      },
      {
        name: 'Cubital Tunnel Syndrome',
        likelihood: 'less-common',
        description:
          'Compression of the ulnar nerve at the elbow causes pain on the inner elbow, numbness and tingling in the ring and pinky fingers, and weakness with gripping.',
        severity: 'medium',
        whatToDo:
          'Avoid bending the elbow for prolonged periods. Elbow pads and splinting at night can help. Surgery may be needed for severe or persistent nerve compression.',
      },
      {
        name: 'Osteoarthritis',
        likelihood: 'less-common',
        description:
          'Cartilage wear in the elbow joint causes pain, stiffness, and a grating sensation, particularly with full extension. More common after previous elbow injuries.',
        severity: 'medium',
        whatToDo:
          'NSAIDs, activity modification, and physical therapy. Joint injections or surgery for severe cases.',
      },
    ],
    seeDoctorIf: [
      'Elbow pain with numbness or tingling in the fingers',
      'Inability to fully extend or flex the elbow',
      'Pain persists more than 6 weeks despite rest',
      'Elbow is visibly swollen, red, and warm (possible infection)',
    ],
    emergencyIf: [
      'Significant elbow deformity or suspected dislocation after trauma',
    ],
    relatedSymptoms: [
      'wrist-pain',
      'shoulder-pain',
      'numbness-tingling',
    ],
    tags: [
      'elbow pain',
      'tennis elbow',
      'golfer elbow',
      'sore elbow',
      'elbow ache',
      'elbow injury',
      'lateral epicondylitis',
    ],
  },
  {
    slug: 'tooth-pain',
    name: 'Tooth Pain',
    commonName: 'Toothache / dental pain',
    summary:
      'Tooth pain ranges from mild sensitivity to severe throbbing agony and almost always signals a dental problem that needs professional attention. Ignoring tooth pain can lead to spreading infection and serious complications.',
    causes: [
      {
        name: 'Tooth Cavity (Dental Caries)',
        likelihood: 'very-common',
        description:
          'Bacterial acid erodes the tooth enamel and dentin, causing sensitivity to sweets, cold, or heat. Pain worsens as the cavity progresses toward the nerve.',
        severity: 'medium',
        whatToDo:
          'See a dentist as soon as possible. Small cavities require fillings; larger ones may need a crown or root canal. Good oral hygiene prevents future cavities.',
      },
      {
        name: 'Dental Abscess',
        likelihood: 'common',
        description:
          'A bacterial infection at the root tip or gum creates a pus-filled pocket, causing severe, throbbing, constant pain, swelling, and sometimes fever.',
        severity: 'high',
        whatToDo:
          'See a dentist urgently. Treatment involves draining the abscess, root canal, or extraction. Antibiotics are often prescribed. Do not ignore this — infection can spread.',
      },
      {
        name: 'Cracked Tooth',
        likelihood: 'common',
        description:
          'A crack in the tooth causes sharp pain when biting, sensitivity to temperature, and intermittent discomfort. Cracks are often invisible on X-rays.',
        severity: 'medium',
        whatToDo:
          'See a dentist promptly. Treatment depends on severity: bonding, crown, or extraction for severely cracked teeth. Avoid chewing on the affected side.',
      },
      {
        name: 'Gum Disease (Periodontitis)',
        likelihood: 'common',
        description:
          'Advanced gum disease causes gum recession, bone loss, and tooth pain. Teeth may feel loose or painful when chewing.',
        severity: 'medium',
        whatToDo:
          'Professional dental cleaning (scaling and root planing) is essential. Improved brushing and flossing habits. Severe cases may need periodontal surgery.',
      },
      {
        name: 'Tooth Sensitivity',
        likelihood: 'very-common',
        description:
          'Worn enamel or exposed roots cause sharp, short-lived pain triggered by hot, cold, sweet, or acidic foods and drinks.',
        severity: 'low',
        whatToDo:
          'Use desensitizing toothpaste. Avoid acidic foods. See a dentist to identify the underlying cause and protect exposed surfaces.',
      },
    ],
    seeDoctorIf: [
      'Toothache lasting more than 1-2 days',
      'Pain severe enough to disrupt sleep or daily activities',
      'Swelling in the jaw, cheek, or gum',
      'Fever accompanying dental pain',
    ],
    emergencyIf: [
      'Swelling spreading to the jaw, neck, or floor of the mouth (Ludwig angina — can obstruct airway)',
      'Difficulty swallowing or breathing with dental pain',
    ],
    relatedSymptoms: [
      'jaw-pain',
      'swollen-face',
      'bad-breath',
    ],
    tags: [
      'toothache',
      'tooth pain',
      'dental pain',
      'tooth ache',
      'tooth hurt',
      'cavity pain',
      'abscess',
      'sensitive teeth',
    ],
  },
  {
    slug: 'ear-pain',
    name: 'Ear Pain',
    commonName: 'Earache / ear infection',
    summary:
      'Ear pain (otalgia) is a common symptom, particularly in children. It may originate within the ear itself or be referred from nearby structures like the jaw, teeth, or throat.',
    causes: [
      {
        name: 'Middle Ear Infection (Otitis Media)',
        likelihood: 'very-common',
        description:
          'Bacterial or viral infection behind the eardrum causes significant ear pain, fullness, muffled hearing, and sometimes fever. Very common in young children.',
        severity: 'medium',
        whatToDo:
          'See a doctor. Viral cases resolve on their own; bacterial infections may need antibiotics. Pain relievers help. Children with recurrent infections may need ear tubes.',
      },
      {
        name: 'Swimmer\'s Ear (Otitis Externa)',
        likelihood: 'common',
        description:
          'Infection of the ear canal, typically from water exposure, causes pain (worsened by pulling on the ear), itching, drainage, and redness.',
        severity: 'medium',
        whatToDo:
          'See a doctor for antibiotic ear drops. Keep the ear dry. Avoid cotton swabs. A wick may be placed in the canal for severe swelling.',
      },
      {
        name: 'Earwax Buildup',
        likelihood: 'common',
        description:
          'Impacted earwax blocks the ear canal, causing ear pressure, fullness, muffled hearing, and sometimes pain.',
        severity: 'low',
        whatToDo:
          'Use over-the-counter ear drops to soften wax. A doctor or nurse can irrigate the ear canal to remove blockage. Do not insert cotton swabs — they push wax deeper.',
      },
      {
        name: 'TMJ Disorder',
        likelihood: 'common',
        description:
          'Dysfunction of the temporomandibular joint causes ear pain and jaw pain, often with clicking and difficulty opening the mouth wide.',
        severity: 'low',
        whatToDo:
          'Soft diet, jaw exercises, and NSAIDs. A dentist or oral specialist can provide a night guard to reduce jaw clenching.',
      },
      {
        name: 'Referred Pain',
        likelihood: 'less-common',
        description:
          'Pain from the throat, teeth, jaw, or cervical spine can be referred to the ear via shared nerve pathways, mimicking ear disease.',
        severity: 'medium',
        whatToDo:
          'See a doctor to identify the source. Treating the underlying condition (dental issue, pharyngitis) will resolve the ear pain.',
      },
    ],
    seeDoctorIf: [
      'Ear pain with fever',
      'Discharge or fluid draining from the ear',
      'Hearing loss with ear pain',
      'Ear pain that persists more than a few days',
    ],
    emergencyIf: [
      'Severe ear pain with sudden hearing loss and dizziness',
      'Ear pain with redness and swelling behind the ear (possible mastoiditis)',
    ],
    relatedSymptoms: [
      'throat-pain',
      'hearing-loss',
      'jaw-pain',
    ],
    tags: [
      'ear pain',
      'earache',
      'ear infection',
      'ear ache',
      'ear hurts',
      'ear pressure',
      'swimmers ear',
      'otitis',
    ],
  },
  {
    slug: 'throat-pain',
    name: 'Throat Pain',
    commonName: 'Sore throat / throat ache',
    summary:
      'Throat pain is one of the most frequent reasons people visit a doctor. The vast majority of cases are caused by viral infections and resolve on their own, but strep throat requires antibiotic treatment.',
    causes: [
      {
        name: 'Strep Throat',
        likelihood: 'common',
        description:
          'Group A Streptococcus bacteria cause sudden severe throat pain, high fever, swollen tonsils with white patches, and swollen lymph nodes — but notably no cough.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a rapid strep test. Strep requires antibiotics to prevent complications like rheumatic fever. Complete the full antibiotic course.',
      },
      {
        name: 'Viral Pharyngitis',
        likelihood: 'very-common',
        description:
          'The most common cause of sore throat — viruses like rhinovirus, adenovirus, or flu cause throat pain, scratchy feeling, and often runny nose and cough.',
        severity: 'low',
        whatToDo:
          'Rest, fluids, and OTC throat lozenges or sprays. Gargle warm salt water. Acetaminophen or ibuprofen for pain and fever. Resolves in 5-7 days.',
      },
      {
        name: 'Tonsillitis',
        likelihood: 'common',
        description:
          'Inflammation of the tonsils causes severe throat pain, difficulty swallowing, fever, and visibly red or swollen tonsils. Can be viral or bacterial.',
        severity: 'medium',
        whatToDo:
          'See a doctor to determine if antibiotics are needed. OTC pain relievers, cold drinks, and rest. Recurrent tonsillitis may require tonsillectomy.',
      },
      {
        name: 'Acid Reflux (GERD)',
        likelihood: 'common',
        description:
          'Stomach acid rising into the throat causes a chronic burning sensation, hoarseness, and mild throat discomfort — especially in the morning.',
        severity: 'low',
        whatToDo:
          'Avoid eating 3 hours before bed, reduce spicy and fatty foods, and elevate the head of your bed. Antacids and PPIs can help. See a doctor if symptoms persist.',
      },
      {
        name: 'Allergies',
        likelihood: 'common',
        description:
          'Post-nasal drip from allergic rhinitis causes throat irritation, mild soreness, and the sensation of mucus dripping down the back of the throat.',
        severity: 'low',
        whatToDo:
          'Antihistamines, nasal steroid sprays, and avoiding allergens. Saline nasal rinses help clear mucus and reduce irritation.',
      },
    ],
    seeDoctorIf: [
      'Throat pain severe enough to prevent swallowing',
      'Fever above 101°F (38.3°C) with throat pain',
      'Throat pain persisting more than a week',
      'White patches or pus on the tonsils',
    ],
    emergencyIf: [
      'Difficulty breathing or severe difficulty swallowing (possible epiglottitis or abscess)',
      'Muffled voice, drooling, and inability to open the mouth (possible peritonsillar abscess)',
    ],
    relatedSymptoms: [
      'sore-throat',
      'ear-pain',
      'swollen-lymph-nodes',
    ],
    tags: [
      'throat pain',
      'sore throat',
      'throat ache',
      'strep throat',
      'throat hurts',
      'swollen tonsils',
      'pharyngitis',
    ],
  },
  {
    slug: 'sore-throat',
    name: 'Sore Throat',
    commonName: 'Scratchy throat / throat irritation',
    summary:
      'A sore throat refers to pain, scratchiness, or irritation in the throat that often worsens with swallowing. It is one of the most common symptoms seen in primary care and is usually caused by viral infections.',
    causes: [
      {
        name: 'Viral Infection',
        likelihood: 'very-common',
        description:
          'Rhinovirus, coronavirus, and adenovirus are the most common culprits. Along with a scratchy throat, expect runny nose, cough, and mild fever.',
        severity: 'low',
        whatToDo:
          'Rest and fluids. OTC pain relievers, throat sprays, or honey in warm tea. Most viral sore throats resolve within 7 days without treatment.',
      },
      {
        name: 'Strep Throat (Group A Strep)',
        likelihood: 'common',
        description:
          'Bacterial infection causing sudden, severe sore throat, high fever, swollen glands, and tonsillar exudate. Absence of cough is a distinguishing feature.',
        severity: 'medium',
        whatToDo:
          'A rapid strep test or throat culture is needed. Antibiotics are required to clear the infection and prevent complications. Finish the full course.',
      },
      {
        name: 'Allergies and Post-Nasal Drip',
        likelihood: 'common',
        description:
          'Allergen-triggered mucus dripping down the back of the throat causes irritation, throat clearing, and a chronic mild sore throat.',
        severity: 'low',
        whatToDo:
          'Antihistamines and nasal steroid sprays reduce post-nasal drip. Saline rinses can wash away allergens and mucus.',
      },
      {
        name: 'Dry Air',
        likelihood: 'common',
        description:
          'Low humidity environments dry out the throat mucous membranes, leading to morning soreness and scratchiness that typically improves through the day.',
        severity: 'low',
        whatToDo:
          'Use a humidifier in your bedroom. Stay well-hydrated. Breathe through your nose when possible to warm and humidify incoming air.',
      },
      {
        name: 'Infectious Mononucleosis (Mono)',
        likelihood: 'less-common',
        description:
          'Epstein-Barr virus causes severe sore throat, extreme fatigue, fever, swollen lymph nodes, and significantly enlarged tonsils — most common in teenagers.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a mono test. Rest is essential. Avoid contact sports for at least 3-4 weeks due to risk of spleen rupture. Antibiotics do not help viral mono.',
      },
    ],
    seeDoctorIf: [
      'Sore throat lasting more than a week',
      'Sore throat with high fever and swollen glands',
      'Difficulty swallowing or opening the mouth',
      'Recurring sore throats throughout the year',
    ],
    emergencyIf: [
      'Difficulty breathing associated with throat swelling',
      'Drooling and inability to swallow saliva',
    ],
    relatedSymptoms: [
      'throat-pain',
      'runny-nose',
      'swollen-lymph-nodes',
    ],
    tags: [
      'sore throat',
      'scratchy throat',
      'throat irritation',
      'strep',
      'throat pain',
      'throat infection',
      'mono',
    ],
  },
  {
    slug: 'runny-nose',
    name: 'Runny Nose',
    commonName: 'Runny nose / nasal drip',
    summary:
      'A runny nose (rhinorrhea) occurs when the nasal membranes produce excess mucus. It is one of the most common symptoms worldwide and is usually caused by a cold or allergies.',
    causes: [
      {
        name: 'Common Cold',
        likelihood: 'very-common',
        description:
          'Rhinovirus and other viruses infect the nasal mucosa, triggering inflammation and excess mucus production. Often starts clear, then turns yellow or green.',
        severity: 'low',
        whatToDo:
          'Rest, fluids, and saline nasal rinse. Decongestants and antihistamines can reduce discharge. Most colds resolve in 7-10 days.',
      },
      {
        name: 'Allergic Rhinitis',
        likelihood: 'very-common',
        description:
          'Exposure to allergens like pollen, dust mites, or pet dander triggers nasal inflammation, clear runny nose, sneezing, and itchy eyes.',
        severity: 'low',
        whatToDo:
          'Avoid known triggers. Antihistamines and intranasal steroid sprays are highly effective. Allergy immunotherapy for persistent cases.',
      },
      {
        name: 'Sinusitis',
        likelihood: 'common',
        description:
          'Sinus inflammation causes thick nasal discharge (often colored), facial pressure, and congestion. Can be viral, bacterial, or allergic.',
        severity: 'medium',
        whatToDo:
          'Saline rinse, decongestants, and rest. Bacterial sinusitis lasting more than 10 days may need antibiotics. See a doctor if symptoms are severe or prolonged.',
      },
      {
        name: 'Influenza',
        likelihood: 'common',
        description:
          'Flu infection causes a runny nose along with high fever, body aches, fatigue, and sometimes GI symptoms. Onset is typically sudden.',
        severity: 'medium',
        whatToDo:
          'Rest, fluids, and OTC symptom relief. Antiviral medications (oseltamivir) are most effective if started within 48 hours of symptom onset.',
      },
      {
        name: 'Deviated Septum',
        likelihood: 'less-common',
        description:
          'A structural bend in the nasal partition can cause chronic one-sided congestion and nasal drip, as airflow disruption triggers excess mucus.',
        severity: 'low',
        whatToDo:
          'Saline rinse and nasal steroids help symptoms. Septoplasty surgery can correct the deviation for those with significant obstruction.',
      },
    ],
    seeDoctorIf: [
      'Runny nose with fever persisting more than 10 days',
      'Thick, colored nasal discharge with facial pain',
      'Runny nose with blood in the discharge',
      'Symptoms significantly affecting sleep or quality of life',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'stuffy-nose',
      'sneezing',
      'sore-throat',
    ],
    tags: [
      'runny nose',
      'nasal drip',
      'nose running',
      'rhinorrhea',
      'cold symptoms',
      'allergy symptoms',
      'stuffy nose',
      'sneezing',
    ],
  },
  {
    slug: 'stuffy-nose',
    name: 'Stuffy Nose',
    commonName: 'Nasal congestion / blocked nose',
    summary:
      'Nasal congestion occurs when blood vessels and tissues in the nasal passages swell with excess fluid. It can be caused by many conditions ranging from a common cold to chronic structural problems.',
    causes: [
      {
        name: 'Allergic Rhinitis',
        likelihood: 'very-common',
        description:
          'Exposure to allergens causes the nasal lining to swell, leading to blockage, runny nose, and sneezing. Seasonal or year-round depending on the trigger.',
        severity: 'low',
        whatToDo:
          'Antihistamines and intranasal corticosteroids are first-line treatments. Identify and avoid allergens. Regular saline irrigation helps reduce inflammation.',
      },
      {
        name: 'Common Cold',
        likelihood: 'very-common',
        description:
          'Viral infection causes nasal lining swelling and mucus production. Congestion typically peaks around day 2-3 of illness.',
        severity: 'low',
        whatToDo:
          'Saline nasal spray, decongestants (oral or nasal), and steam inhalation. Nasal decongestant sprays should not be used more than 3 days to avoid rebound congestion.',
      },
      {
        name: 'Sinusitis',
        likelihood: 'common',
        description:
          'Inflamed sinuses block drainage, causing persistent congestion, facial pressure, and thick nasal secretions. Can follow a cold or occur independently.',
        severity: 'medium',
        whatToDo:
          'Saline irrigation, steam, and decongestants. Nasal steroid sprays help chronic sinusitis. Antibiotics only for confirmed bacterial sinusitis.',
      },
      {
        name: 'Nasal Polyps',
        likelihood: 'less-common',
        description:
          'Soft, non-cancerous growths in the nasal passages cause persistent chronic congestion, loss of smell, and reduced airflow.',
        severity: 'medium',
        whatToDo:
          'Nasal corticosteroid sprays can shrink polyps. Biologics are newer options for severe cases. Surgical removal (polypectomy) may be needed.',
      },
      {
        name: 'Deviated Septum',
        likelihood: 'less-common',
        description:
          'A crooked nasal septum causes chronic one-sided or alternating nasal congestion that does not respond well to medication.',
        severity: 'low',
        whatToDo:
          'Medical management with sprays and saline provides partial relief. Septoplasty surgery corrects the structural problem.',
      },
    ],
    seeDoctorIf: [
      'Congestion lasting more than 10 days without improvement',
      'Facial pain and pressure with colored discharge',
      'Nasal congestion with loss of smell',
      'Congestion disrupting sleep quality',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'runny-nose',
      'sinus-pressure',
      'loss-of-smell',
    ],
    tags: [
      'stuffy nose',
      'nasal congestion',
      'blocked nose',
      'can not breathe through nose',
      'sinus congestion',
      'nose blocked',
      'stuffed up',
    ],
  },
  {
    slug: 'sneezing',
    name: 'Sneezing',
    commonName: 'Sneezing fits / frequent sneezing',
    summary:
      'Sneezing is a protective reflex that forcefully expels irritants from the nasal passages. While usually harmless, persistent sneezing often points to allergies or a respiratory infection.',
    causes: [
      {
        name: 'Allergic Rhinitis',
        likelihood: 'very-common',
        description:
          'Sneezing is a hallmark of allergies — the body attempts to expel inhaled allergens like pollen, dust, or pet dander. Often occurs in repetitive bursts.',
        severity: 'low',
        whatToDo:
          'Antihistamines are very effective for allergy sneezing. Intranasal steroids prevent symptoms long-term. Avoid known triggers.',
      },
      {
        name: 'Common Cold',
        likelihood: 'very-common',
        description:
          'Viral infection of the upper respiratory tract triggers sneezing, especially in the early stages of illness when the virus is most active.',
        severity: 'low',
        whatToDo:
          'Rest and fluids. Antihistamines and decongestants can reduce sneezing. The illness typically resolves in 7-10 days.',
      },
      {
        name: 'Irritants',
        likelihood: 'common',
        description:
          'Non-allergic triggers like perfume, smoke, spicy food, or sudden cold air can trigger sneezing without an immune response.',
        severity: 'low',
        whatToDo:
          'Identify and avoid triggers. Intranasal ipratropium spray can help with non-allergic rhinitis. There is no specific treatment needed if the cause is benign.',
      },
      {
        name: 'Sinusitis',
        likelihood: 'common',
        description:
          'Inflamed sinus and nasal passages increase nasal sensitivity, leading to sneezing along with congestion and facial pressure.',
        severity: 'medium',
        whatToDo:
          'Treat the underlying sinusitis. Saline irrigation, decongestants, and nasal steroids are the main tools.',
      },
      {
        name: 'Dry Air',
        likelihood: 'less-common',
        description:
          'Very dry indoor air irritates and dries out the nasal mucosa, increasing sensitivity and triggering sneezing, especially in heated winter air.',
        severity: 'low',
        whatToDo:
          'Use a humidifier to keep indoor humidity between 40-50%. Saline nasal spray keeps nasal membranes moist.',
      },
    ],
    seeDoctorIf: [
      'Sneezing accompanied by significant nasal discharge and congestion persisting more than 10 days',
      'Sneezing with eye redness, skin rashes, or wheezing (possible allergic disease)',
      'Persistent sneezing not responding to antihistamines',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'runny-nose',
      'stuffy-nose',
      'eye-redness',
    ],
    tags: [
      'sneezing',
      'sneezing fits',
      'frequent sneezing',
      'allergy sneezing',
      'cold sneezing',
      'nose sneezing',
      'rhinitis',
    ],
  },
  {
    slug: 'cough',
    name: 'Cough',
    commonName: 'Coughing / persistent cough',
    summary:
      'Coughing is one of the most common reasons people seek medical care. It is usually a protective reflex to clear the airways, but a persistent cough can indicate an underlying condition requiring treatment.',
    causes: [
      {
        name: 'Common Cold',
        likelihood: 'very-common',
        description:
          'Viral upper respiratory infections irritate the airways, causing a cough that may be dry initially and become productive as the infection progresses.',
        severity: 'low',
        whatToDo:
          'Rest, fluids, and honey (for adults). OTC cough suppressants and expectorants provide symptomatic relief. Most colds resolve in 7-10 days.',
      },
      {
        name: 'Allergies / Post-Nasal Drip',
        likelihood: 'very-common',
        description:
          'Mucus dripping from the nasal passages down the throat chronically irritates the airway, causing a persistent cough — often worse at night or in the morning.',
        severity: 'low',
        whatToDo:
          'Antihistamines, nasal steroid sprays, and saline irrigation treat post-nasal drip effectively. Identifying allergens helps prevent recurrence.',
      },
      {
        name: 'Asthma',
        likelihood: 'common',
        description:
          'Asthma causes airway inflammation and constriction, resulting in cough (especially at night or with exercise), wheezing, and shortness of breath.',
        severity: 'medium',
        whatToDo:
          'See a doctor for diagnosis. Inhaled bronchodilators (rescue inhalers) and inhaled corticosteroids are first-line treatments. Avoid known triggers.',
      },
      {
        name: 'GERD',
        likelihood: 'common',
        description:
          'Stomach acid reflux into the esophagus and throat causes a chronic, dry cough that may be worse after meals or when lying down — often without typical heartburn.',
        severity: 'low',
        whatToDo:
          'Lifestyle changes: elevate head of bed, avoid eating before sleep, limit acidic foods. Antacids or PPIs prescribed by a doctor can resolve GERD cough.',
      },
      {
        name: 'Bronchitis',
        likelihood: 'common',
        description:
          'Inflammation of the bronchial tubes causes a persistent cough with mucus production, chest discomfort, and sometimes a low-grade fever.',
        severity: 'medium',
        whatToDo:
          'Most bronchitis is viral and resolves in 1-3 weeks with rest and fluids. Antibiotics are not usually needed. See a doctor if fever is high or symptoms worsen.',
      },
    ],
    seeDoctorIf: [
      'Cough persists more than 3 weeks',
      'Coughing up blood',
      'Cough with high fever, shortness of breath, or chest pain',
      'Night sweats or unintended weight loss with cough',
    ],
    emergencyIf: [
      'Coughing up significant amounts of blood',
      'Sudden severe difficulty breathing with cough',
    ],
    relatedSymptoms: [
      'dry-cough',
      'sore-throat',
      'shortness-of-breath',
    ],
    tags: [
      'cough',
      'coughing',
      'persistent cough',
      'chronic cough',
      'dry cough',
      'wet cough',
      'hacking cough',
      'productive cough',
    ],
  },
  {
    slug: 'dry-cough',
    name: 'Dry Cough',
    commonName: 'Tickly cough / non-productive cough',
    summary:
      'A dry cough produces no mucus and is often described as a tickling or irritating sensation in the throat or chest. It can persist long after an illness and is a common side effect of certain medications.',
    causes: [
      {
        name: 'Allergies',
        likelihood: 'very-common',
        description:
          'Allergic irritation of the airways causes a dry, tickly cough often associated with itchy eyes, sneezing, and nasal symptoms.',
        severity: 'low',
        whatToDo:
          'Antihistamines and avoiding allergens are the primary treatment. Intranasal steroids reduce airway inflammation.',
      },
      {
        name: 'GERD (Acid Reflux)',
        likelihood: 'very-common',
        description:
          'Acid micro-aspiration or vagal nerve stimulation from acid in the esophagus causes a chronic dry cough that worsens lying down or after meals.',
        severity: 'low',
        whatToDo:
          'Dietary modifications, eating smaller meals, and elevating the head of the bed. A doctor may prescribe PPIs or H2 blockers.',
      },
      {
        name: 'Asthma (Cough-Variant)',
        likelihood: 'common',
        description:
          'In cough-variant asthma, a dry cough — especially at night — is the primary symptom without the typical wheezing.',
        severity: 'medium',
        whatToDo:
          'See a doctor for pulmonary function testing. Inhaled bronchodilators and corticosteroids treat cough-variant asthma effectively.',
      },
      {
        name: 'ACE Inhibitor Medication',
        likelihood: 'common',
        description:
          'ACE inhibitor blood pressure medications (e.g., lisinopril, enalapril) commonly cause a persistent dry cough in up to 20% of users.',
        severity: 'low',
        whatToDo:
          'Speak with your prescribing doctor. Switching to an ARB medication (same class, different mechanism) eliminates this side effect. Do not stop BP medication without guidance.',
      },
      {
        name: 'Post-Nasal Drip',
        likelihood: 'common',
        description:
          'Mucus from sinuses or the back of the nose drips down the throat, stimulating a dry, tickly cough that is often worse at night.',
        severity: 'low',
        whatToDo:
          'Saline nasal rinse, antihistamines, and nasal steroid spray address the root cause. Sleeping with an extra pillow can reduce nighttime symptoms.',
      },
    ],
    seeDoctorIf: [
      'Dry cough persists more than 3-4 weeks',
      'Cough with shortness of breath or wheezing',
      'Cough associated with starting a new blood pressure medication',
      'Cough with weight loss or night sweats',
    ],
    emergencyIf: [
      'Sudden severe difficulty breathing along with dry cough',
    ],
    relatedSymptoms: [
      'cough',
      'acid-reflux',
      'sinus-pressure',
    ],
    tags: [
      'dry cough',
      'tickly cough',
      'non-productive cough',
      'persistent dry cough',
      'tickle in throat',
      'irritating cough',
    ],
  },
  {
    slug: 'fever',
    name: 'Fever',
    commonName: 'High temperature / running a fever',
    summary:
      'A fever is a temporary rise in body temperature above 100.4°F (38°C) and is usually a sign that the body is fighting an infection. While uncomfortable, a moderate fever is a natural immune response — but very high fevers require prompt attention.',
    causes: [
      {
        name: 'Viral Infection',
        likelihood: 'very-common',
        description:
          'The flu, COVID-19, common cold, and many other viruses trigger the immune system to raise body temperature as a defense mechanism.',
        severity: 'medium',
        whatToDo:
          'Rest, fluids, and fever reducers (acetaminophen or ibuprofen). Monitor temperature. See a doctor if fever exceeds 103°F or lasts more than 3 days.',
      },
      {
        name: 'Bacterial Infection',
        likelihood: 'common',
        description:
          'Bacterial infections (pneumonia, urinary tract infection, strep throat) can cause significant fevers. These may require antibiotics to resolve.',
        severity: 'medium',
        whatToDo:
          'See a doctor for evaluation and possible antibiotics. Do not take antibiotics without a prescription. Rest and fluids while awaiting care.',
      },
      {
        name: 'Influenza',
        likelihood: 'common',
        description:
          'The flu causes a rapid-onset high fever (often 102-104°F), severe body aches, headache, and fatigue — more severe than a common cold.',
        severity: 'medium',
        whatToDo:
          'Rest, fluids, and OTC fever reducers. Antivirals (oseltamivir) are most effective within 48 hours of onset. High-risk individuals should seek care promptly.',
      },
      {
        name: 'Heat Exhaustion / Heatstroke',
        likelihood: 'less-common',
        description:
          'Prolonged exposure to high temperatures can raise core body temperature dangerously, causing confusion, hot skin, and organ damage.',
        severity: 'emergency',
        whatToDo:
          'Move to a cool area immediately, apply cool wet cloths, and hydrate. Heatstroke (above 104°F with confusion) requires emergency medical care — call 911.',
      },
      {
        name: 'Medication Reaction',
        likelihood: 'less-common',
        description:
          'Drug fever is an adverse reaction to certain medications (antibiotics, anti-seizure drugs) causing a persistent fever without another clear cause.',
        severity: 'medium',
        whatToDo:
          'If you suspect a medication reaction, contact your prescribing doctor. Do not stop prescription medication without medical guidance.',
      },
    ],
    seeDoctorIf: [
      'Fever above 103°F (39.4°C) in adults',
      'Fever lasting more than 3 days',
      'Fever with rash, stiff neck, or severe headache',
      'Fever in an infant under 3 months (any fever)',
    ],
    emergencyIf: [
      'Fever above 104°F (40°C) with confusion, seizures, or difficulty breathing',
      'Any fever in a newborn or infant under 3 months',
      'Fever with a spreading rash (possible meningococcemia)',
    ],
    relatedSymptoms: [
      'chills',
      'headache',
      'fatigue',
    ],
    tags: [
      'fever',
      'high temperature',
      'running a fever',
      'temperature',
      'febrile',
      'fever symptoms',
      'fever 103',
      'fever 104',
    ],
  },
  {
    slug: 'chills',
    name: 'Chills',
    commonName: 'Shivering / feeling cold',
    summary:
      'Chills — episodes of shivering and feeling cold — usually accompany a fever as the body generates heat to fight infection. They can also occur with other medical conditions affecting temperature regulation.',
    causes: [
      {
        name: 'Fever and Infection',
        likelihood: 'very-common',
        description:
          'Chills are the body\'s mechanism for raising its temperature when fighting a virus or bacterial infection. The muscles shiver rapidly to generate heat.',
        severity: 'medium',
        whatToDo:
          'Treat the underlying infection. Stay warm and hydrated. Acetaminophen or ibuprofen reduce fever and associated chills. Monitor for worsening symptoms.',
      },
      {
        name: 'Influenza',
        likelihood: 'common',
        description:
          'Flu classically causes intense chills with sudden high fever, severe body aches, and fatigue — often described as being "hit by a truck."',
        severity: 'medium',
        whatToDo:
          'Rest, fluids, and fever reducers. Antiviral medications within 48 hours can shorten illness. High-risk patients should see a doctor promptly.',
      },
      {
        name: 'Hypothyroidism',
        likelihood: 'common',
        description:
          'An underactive thyroid lowers metabolic rate, making the body less efficient at generating heat. Chronic cold sensitivity and feeling chilly are classic symptoms.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a TSH blood test. Thyroid hormone replacement therapy effectively resolves symptoms.',
      },
      {
        name: 'Anemia',
        likelihood: 'common',
        description:
          'Low red blood cell count reduces the oxygen carried to tissues, impairing heat production and causing persistent cold sensitivity, pallor, and fatigue.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a blood count. Treatment depends on the cause: iron, B12, or folate supplements, or addressing an underlying condition.',
      },
      {
        name: 'Malaria',
        likelihood: 'rare',
        description:
          'Malaria causes cyclical episodes of severe chills, high fever, and sweating. Suspect if recently traveled to a tropical or subtropical region.',
        severity: 'emergency',
        whatToDo:
          'Seek medical care immediately. Malaria requires urgent diagnosis and prescription antimalarial treatment. Delay can be life-threatening.',
      },
    ],
    seeDoctorIf: [
      'Chills with fever above 103°F',
      'Chills without fever that persist or recur',
      'Chills after travel to tropical regions',
      'Chills with rapid heart rate, confusion, or severe pain',
    ],
    emergencyIf: [
      'Severe chills with fever, confusion, and rapid breathing (possible sepsis)',
      'Chills after return from tropical travel (possible malaria)',
    ],
    relatedSymptoms: [
      'fever',
      'night-sweats',
      'fatigue',
    ],
    tags: [
      'chills',
      'shivering',
      'feeling cold',
      'cold chills',
      'chills and fever',
      'rigor',
      'fever chills',
      'shaking chills',
    ],
  },
  {
    slug: 'night-sweats',
    name: 'Night Sweats',
    commonName: 'Sweating at night / waking up drenched',
    summary:
      'Night sweats are episodes of excessive sweating during sleep that soak your clothing or bedding. While sometimes caused by a warm bedroom, true night sweats can signal hormonal changes, infection, or in rare cases, malignancy.',
    causes: [
      {
        name: 'Menopause / Perimenopause',
        likelihood: 'very-common',
        description:
          'Fluctuating estrogen levels disrupt the body\'s temperature regulation, causing hot flashes and intense night sweats that wake women from sleep.',
        severity: 'low',
        whatToDo:
          'Cool sleeping environment, moisture-wicking bedding, and loose clothing. Hormone replacement therapy or non-hormonal medications can significantly help. Discuss options with your doctor.',
      },
      {
        name: 'Infection',
        likelihood: 'common',
        description:
          'Tuberculosis is the classic infection associated with night sweats, but many infections (HIV, bacterial endocarditis, abscess) cause drenching sweats.',
        severity: 'high',
        whatToDo:
          'See a doctor, especially if sweats are associated with weight loss, cough, or fatigue. Tests for TB, HIV, or other infections will be ordered.',
      },
      {
        name: 'Anxiety Disorder',
        likelihood: 'common',
        description:
          'Anxiety activates the stress response, which can cause sweating during sleep, especially during vivid or stressful dreams.',
        severity: 'medium',
        whatToDo:
          'Addressing anxiety through therapy (CBT), medication, or lifestyle changes can reduce nocturnal sweating. Avoiding alcohol and caffeine before bed also helps.',
      },
      {
        name: 'Lymphoma',
        likelihood: 'rare',
        description:
          'Hodgkin\'s and non-Hodgkin\'s lymphoma classically present with drenching night sweats, along with unexplained weight loss and enlarged lymph nodes.',
        severity: 'high',
        whatToDo:
          'See a doctor if night sweats are associated with unexplained weight loss or swollen lymph nodes. Lymphoma is very treatable, especially when caught early.',
      },
      {
        name: 'Medication Side Effects',
        likelihood: 'common',
        description:
          'Antidepressants (SSRIs), hormone therapies, and diabetes medications can all cause night sweats as a side effect.',
        severity: 'low',
        whatToDo:
          'Speak with your prescribing doctor. Adjusting the dose or switching medications can resolve medication-induced night sweats.',
      },
    ],
    seeDoctorIf: [
      'Night sweats occurring more than twice a week',
      'Associated with unexplained weight loss or fatigue',
      'Night sweats with swollen lymph nodes',
      'Night sweats in men or post-menopausal women',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'chills',
      'fever',
      'excessive-sweating',
    ],
    tags: [
      'night sweats',
      'sweating at night',
      'waking up sweating',
      'nocturnal sweating',
      'hot flashes night',
      'drenched at night',
    ],
  },
  {
    slug: 'loss-of-appetite',
    name: 'Loss of Appetite',
    commonName: 'Not hungry / reduced appetite',
    summary:
      'A temporary loss of appetite is extremely common and usually linked to illness, stress, or medication. Persistent appetite loss, especially with weight loss, requires medical evaluation to rule out underlying conditions.',
    causes: [
      {
        name: 'Stress and Anxiety',
        likelihood: 'very-common',
        description:
          'Psychological stress activates the fight-or-flight response, suppressing hunger hormones and the desire to eat.',
        severity: 'low',
        whatToDo:
          'Address the underlying stress. Relaxation techniques, regular exercise, and talking to someone can help. If appetite does not return, see a doctor.',
      },
      {
        name: 'Acute Infection',
        likelihood: 'very-common',
        description:
          'The immune response to any infection (cold, flu, COVID) redirects energy away from digestion, suppressing appetite. This is temporary and expected.',
        severity: 'low',
        whatToDo:
          'Focus on staying hydrated. Appetite typically returns as the illness resolves. Light, easy-to-digest foods are best during illness.',
      },
      {
        name: 'Depression',
        likelihood: 'common',
        description:
          'Major depression disrupts hunger signals, leading to prolonged loss of appetite and unintentional weight loss. Often accompanied by fatigue and loss of interest.',
        severity: 'high',
        whatToDo:
          'See a doctor or mental health professional. Antidepressants and therapy can restore normal appetite as mood improves.',
      },
      {
        name: 'Medication Side Effects',
        likelihood: 'common',
        description:
          'Many medications — including antibiotics, stimulants, pain medications, and chemotherapy — can suppress appetite.',
        severity: 'medium',
        whatToDo:
          'Speak with your prescribing doctor. Eating small, frequent meals and scheduling eating times can help maintain nutrition despite reduced appetite.',
      },
      {
        name: 'Gastritis',
        likelihood: 'common',
        description:
          'Inflammation of the stomach lining causes nausea, stomach discomfort, and reduced appetite. Caused by H. pylori, NSAIDs, or excessive alcohol.',
        severity: 'medium',
        whatToDo:
          'Avoid NSAIDs and alcohol. Antacids and PPIs can help. See a doctor for H. pylori testing and treatment.',
      },
    ],
    seeDoctorIf: [
      'Appetite loss lasting more than 2 weeks',
      'Significant unintentional weight loss with reduced appetite',
      'Appetite loss with nausea, vomiting, or abdominal pain',
      'Loss of appetite in the elderly (can lead to dangerous malnutrition)',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'weight-loss-unexplained',
      'depression-symptoms',
      'fatigue',
    ],
    tags: [
      'loss of appetite',
      'not hungry',
      'no appetite',
      'reduced appetite',
      'anorexia',
      'not eating',
      'appetite loss',
    ],
  },
  {
    slug: 'weight-loss-unexplained',
    name: 'Unexplained Weight Loss',
    commonName: 'Losing weight without trying',
    summary:
      'Losing more than 5% of body weight over 6-12 months without intentional dieting or increased exercise is considered unexplained and warrants medical evaluation. It can be a sign of serious underlying disease.',
    causes: [
      {
        name: 'Hyperthyroidism',
        likelihood: 'common',
        description:
          'An overactive thyroid increases metabolism, causing rapid weight loss despite normal or increased appetite, along with heart palpitations and anxiety.',
        severity: 'medium',
        whatToDo:
          'See a doctor for TSH blood test. Antithyroid medications, radioactive iodine, or surgery can treat hyperthyroidism.',
      },
      {
        name: 'Diabetes (Type 1 or Uncontrolled Type 2)',
        likelihood: 'common',
        description:
          'Without adequate insulin, cells cannot use glucose, so the body breaks down fat and muscle for energy — causing weight loss despite eating normally.',
        severity: 'high',
        whatToDo:
          'See a doctor urgently for blood glucose testing. Diabetes is very manageable once diagnosed. Do not delay evaluation.',
      },
      {
        name: 'Depression',
        likelihood: 'common',
        description:
          'Severe depression suppresses appetite and motivation to eat, leading to significant weight loss over weeks to months.',
        severity: 'high',
        whatToDo:
          'See a mental health professional. Treatment with therapy and medication improves appetite and weight.',
      },
      {
        name: 'Malabsorption (Celiac, Crohn\'s)',
        likelihood: 'less-common',
        description:
          'Conditions that impair nutrient absorption from the gut cause weight loss despite adequate food intake, along with diarrhea, bloating, and fatigue.',
        severity: 'medium',
        whatToDo:
          'See a gastroenterologist for testing. Blood tests, stool tests, and endoscopy help diagnose malabsorption syndromes.',
      },
      {
        name: 'Cancer',
        likelihood: 'rare',
        description:
          'Many cancers — particularly GI, lung, and lymphoma — cause unexplained weight loss as cancer cells alter metabolism and reduce appetite.',
        severity: 'high',
        whatToDo:
          'See a doctor promptly for a full workup. Unexplained weight loss with fatigue is a red flag warranting investigation. Early detection improves outcomes significantly.',
      },
    ],
    seeDoctorIf: [
      'Lost more than 5% body weight without trying over 6 months',
      'Weight loss with fatigue, night sweats, or swollen lymph nodes',
      'Weight loss with change in bowel habits',
      'Weight loss in the elderly or in those with chronic illness',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'loss-of-appetite',
      'fatigue',
      'night-sweats',
    ],
    tags: [
      'unexplained weight loss',
      'losing weight',
      'weight loss',
      'unintentional weight loss',
      'losing weight without trying',
      'weight dropping',
    ],
  },
  {
    slug: 'weight-gain',
    name: 'Unexplained Weight Gain',
    commonName: 'Gaining weight / sudden weight gain',
    summary:
      'Weight gain can result from lifestyle factors, but when it occurs rapidly or without clear cause, it may indicate a hormonal, metabolic, or medication-related problem that deserves attention.',
    causes: [
      {
        name: 'Hypothyroidism',
        likelihood: 'common',
        description:
          'An underactive thyroid slows metabolism, causing weight gain, fatigue, constipation, and feeling cold despite normal eating habits.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a TSH blood test. Thyroid hormone replacement therapy is highly effective and resolves weight gain caused by hypothyroidism.',
      },
      {
        name: 'Chronic Stress and High Cortisol',
        likelihood: 'common',
        description:
          'Prolonged stress elevates cortisol, which promotes fat storage — particularly around the abdomen — and increases appetite and cravings.',
        severity: 'medium',
        whatToDo:
          'Stress management: regular exercise, adequate sleep, mindfulness, and addressing the source of stress. Consider talking to a therapist.',
      },
      {
        name: 'Medication Side Effects',
        likelihood: 'common',
        description:
          'Corticosteroids, antidepressants, antipsychotics, diabetes medications, and birth control can all contribute to weight gain.',
        severity: 'medium',
        whatToDo:
          'Discuss with your prescribing doctor. Switching medications or adjusting doses may help. Do not stop medication without guidance.',
      },
      {
        name: 'PCOS (Polycystic Ovary Syndrome)',
        likelihood: 'common',
        description:
          'PCOS causes hormonal imbalances that increase insulin resistance and promote weight gain, particularly around the abdomen, along with irregular periods and excess body hair.',
        severity: 'medium',
        whatToDo:
          'See a gynecologist or endocrinologist. Treatment includes lifestyle changes, metformin, and hormonal therapy tailored to the individual.',
      },
      {
        name: 'Caloric Surplus and Sedentary Lifestyle',
        likelihood: 'very-common',
        description:
          'The most common cause of weight gain is consuming more calories than expended, compounded by insufficient physical activity.',
        severity: 'medium',
        whatToDo:
          'Track food intake, reduce processed and high-calorie foods, and increase physical activity gradually. A registered dietitian can help create a sustainable plan.',
      },
    ],
    seeDoctorIf: [
      'Gained more than 10 lbs in a short period without dietary changes',
      'Weight gain with fatigue, constipation, and feeling cold',
      'Weight gain with irregular periods or hair changes',
      'Weight gain with significant fluid retention or swelling',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'fatigue',
      'cold-hands-feet',
      'irregular-heartbeat',
    ],
    tags: [
      'weight gain',
      'gaining weight',
      'sudden weight gain',
      'unexplained weight gain',
      'putting on weight',
      'belly fat',
    ],
  },
  {
    slug: 'hair-loss',
    name: 'Hair Loss',
    commonName: 'Losing hair / thinning hair / balding',
    summary:
      'Some hair shedding is normal — losing 50-100 hairs daily is typical. Noticeable hair loss, thinning, or bald patches beyond this normal range can signal nutritional deficiencies, hormonal issues, or autoimmune conditions.',
    causes: [
      {
        name: 'Telogen Effluvium (Stress-Related)',
        likelihood: 'very-common',
        description:
          'Physical or emotional stress (illness, surgery, childbirth, emotional trauma) pushes large numbers of hair follicles into the shedding phase simultaneously, causing diffuse hair loss 2-3 months later.',
        severity: 'medium',
        whatToDo:
          'Address the underlying trigger. Hair regrowth typically occurs naturally over 3-6 months once the stressor has passed. Good nutrition supports recovery.',
      },
      {
        name: 'Androgenetic Alopecia (Genetic)',
        likelihood: 'very-common',
        description:
          'The most common form of hair loss in both men and women, caused by hormonal and genetic factors. Men experience recession and crown thinning; women get diffuse thinning at the part.',
        severity: 'low',
        whatToDo:
          'Minoxidil (Rogaine) applied topically is FDA-approved for both sexes. Finasteride is for men. Results require consistent use and take months to see.',
      },
      {
        name: 'Thyroid Disorder',
        likelihood: 'common',
        description:
          'Both hypothyroidism and hyperthyroidism can cause diffuse hair thinning and loss throughout the scalp.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a TSH test. Hair regrowth generally occurs after the thyroid condition is treated.',
      },
      {
        name: 'Iron Deficiency',
        likelihood: 'common',
        description:
          'Low iron stores impair hair follicle function, causing diffuse hair shedding. Often accompanied by fatigue and pallor.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a ferritin blood test. Iron supplementation resolves hair loss when iron deficiency is confirmed. Eat iron-rich foods.',
      },
      {
        name: 'Alopecia Areata',
        likelihood: 'less-common',
        description:
          'An autoimmune condition causing distinct round bald patches on the scalp or body. The immune system mistakenly attacks hair follicles.',
        severity: 'medium',
        whatToDo:
          'See a dermatologist. Corticosteroid injections, topical immunotherapy, and newer JAK inhibitor drugs have shown good results. Many cases recover spontaneously.',
      },
    ],
    seeDoctorIf: [
      'Hair loss is rapid or patchy',
      'Scalp is red, scaly, or itchy alongside hair loss',
      'Hair loss with fatigue, weight changes, or other systemic symptoms',
      'Significant emotional distress from hair loss',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'brittle-nails',
      'fatigue',
      'dry-skin',
    ],
    tags: [
      'hair loss',
      'losing hair',
      'thinning hair',
      'balding',
      'alopecia',
      'hair shedding',
      'bald patches',
      'hair falling out',
    ],
  },
  {
    slug: 'brittle-nails',
    name: 'Brittle Nails',
    commonName: 'Weak nails / nails breaking / nails peeling',
    summary:
      'Brittle nails that crack, peel, or break easily are a common complaint. Most cases are caused by external factors like frequent water exposure or nutritional deficiencies, but brittle nails can also reflect underlying health conditions.',
    causes: [
      {
        name: 'Iron Deficiency Anemia',
        likelihood: 'common',
        description:
          'Low iron levels impair nail matrix function, causing thin, brittle, or spoon-shaped nails (koilonychia) along with fatigue and pallor.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a blood test. Iron supplementation and dietary changes resolve nail changes once iron stores are replenished.',
      },
      {
        name: 'Hypothyroidism',
        likelihood: 'common',
        description:
          'Underactive thyroid reduces nail growth rate and causes brittle, thickened nails along with dry skin and hair loss.',
        severity: 'medium',
        whatToDo:
          'See a doctor for TSH testing. Thyroid hormone replacement therapy improves nail and skin symptoms.',
      },
      {
        name: 'Fungal Nail Infection (Onychomycosis)',
        likelihood: 'common',
        description:
          'Fungal infection causes nails to become thick, brittle, discolored (yellow-white), and crumbly. Toenails are most commonly affected.',
        severity: 'low',
        whatToDo:
          'See a doctor or podiatrist for confirmation. Oral antifungal medications are most effective but require weeks of treatment. Keep feet dry.',
      },
      {
        name: 'Dehydration and Low Water Intake',
        likelihood: 'very-common',
        description:
          'Chronically low water intake leads to reduced nail plate hydration, causing brittleness, peeling, and horizontal cracks.',
        severity: 'low',
        whatToDo:
          'Increase water intake and use moisturizing hand cream after washing hands. Wearing gloves during wet work protects nails.',
      },
      {
        name: 'Nutritional Deficiencies',
        likelihood: 'common',
        description:
          'Deficiencies in biotin, zinc, or protein impair nail production. Poor diet, eating disorders, and malabsorption can all cause weak, brittle nails.',
        severity: 'medium',
        whatToDo:
          'Eat a balanced diet rich in protein, zinc, and biotin. Biotin supplements may help in confirmed deficiency but are not universally effective.',
      },
    ],
    seeDoctorIf: [
      'Nail changes accompanied by fatigue, hair loss, or weight changes',
      'Nails that are discolored, thickened, or separating from the nail bed',
      'Nail changes in multiple nails with no clear cause',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'hair-loss',
      'dry-skin',
      'fatigue',
    ],
    tags: [
      'brittle nails',
      'weak nails',
      'nails breaking',
      'nails peeling',
      'nail problems',
      'soft nails',
      'nail health',
    ],
  },
  {
    slug: 'dry-skin',
    name: 'Dry Skin',
    commonName: 'Flaky skin / itchy dry skin',
    summary:
      'Dry skin (xerosis) is a very common condition that makes skin feel tight, rough, and itchy. It is usually caused by environmental factors but can also reflect underlying medical conditions.',
    causes: [
      {
        name: 'Dehydration',
        likelihood: 'very-common',
        description:
          'Insufficient water intake reduces skin moisture from within, causing dull, tight, and flaky skin particularly on the arms and legs.',
        severity: 'low',
        whatToDo:
          'Drink at least 8 cups of water daily. Apply moisturizer to damp skin after bathing to seal in moisture. Use a humidifier in dry environments.',
      },
      {
        name: 'Eczema (Atopic Dermatitis)',
        likelihood: 'common',
        description:
          'A chronic inflammatory skin condition causing patches of extremely dry, itchy, red, and sometimes blistered skin. Flares triggered by irritants or allergens.',
        severity: 'medium',
        whatToDo:
          'Gentle, fragrance-free moisturizers applied frequently. Avoid harsh soaps. Topical corticosteroids or newer non-steroidal treatments for flares. See a dermatologist.',
      },
      {
        name: 'Hypothyroidism',
        likelihood: 'common',
        description:
          'Low thyroid hormone reduces skin cell turnover and oil production, resulting in persistently dry, rough, and pale skin.',
        severity: 'medium',
        whatToDo:
          'See a doctor for TSH testing. Thyroid hormone replacement resolves skin changes along with other symptoms.',
      },
      {
        name: 'Cold Weather and Low Humidity',
        likelihood: 'very-common',
        description:
          'Cold air and indoor heating remove moisture from the air and skin, causing seasonal dry skin that worsens in winter months.',
        severity: 'low',
        whatToDo:
          'Use a humidifier, moisturize after bathing, and use gentle cleansers. Protective clothing and petroleum-based creams offer the best barrier.',
      },
      {
        name: 'Aging',
        likelihood: 'common',
        description:
          'Skin produces less oil with age, reducing natural moisture. People over 65 are particularly prone to xerosis.',
        severity: 'low',
        whatToDo:
          'Regular moisturizing with thick creams or ointments. Avoid long hot showers. Stay hydrated. Omega-3 fatty acids in diet support skin health.',
      },
    ],
    seeDoctorIf: [
      'Dry skin with intense itching that disrupts sleep',
      'Skin that is cracked and bleeding',
      'Dry skin with other systemic symptoms like fatigue or hair loss',
      'Dry skin not improving with moisturizing',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'itchy-skin',
      'brittle-nails',
      'hair-loss',
    ],
    tags: [
      'dry skin',
      'flaky skin',
      'itchy dry skin',
      'skin dryness',
      'xerosis',
      'rough skin',
      'skin peeling',
      'dry patches',
    ],
  },
  {
    slug: 'itchy-skin',
    name: 'Itchy Skin',
    commonName: 'Skin itching / pruritus',
    summary:
      'Itchy skin (pruritus) can occur with or without a visible rash. While often caused by dry skin or allergies, widespread itching without rash can sometimes signal internal conditions affecting the liver, kidneys, or thyroid.',
    causes: [
      {
        name: 'Dry Skin',
        likelihood: 'very-common',
        description:
          'Dehydrated skin lacks sufficient moisture, causing the itch-scratch cycle that often worsens with hot baths, low humidity, or harsh soaps.',
        severity: 'low',
        whatToDo:
          'Moisturize daily with thick creams. Use gentle, fragrance-free soap. Cool or lukewarm showers. Antihistamines can relieve acute itching.',
      },
      {
        name: 'Allergic Reaction',
        likelihood: 'very-common',
        description:
          'Contact with allergens (nickel, latex, fragrances, plants) or ingested allergens trigger localized or widespread itching, sometimes with hives.',
        severity: 'medium',
        whatToDo:
          'Identify and avoid the trigger. Antihistamines and topical hydrocortisone cream relieve symptoms. Severe allergic reactions require emergency care.',
      },
      {
        name: 'Eczema or Psoriasis',
        likelihood: 'common',
        description:
          'Chronic inflammatory skin conditions cause persistent itchy patches. Eczema is more weeping and red; psoriasis has thick, silvery scales.',
        severity: 'medium',
        whatToDo:
          'See a dermatologist for diagnosis and a tailored treatment plan including topical steroids, biologics, or phototherapy.',
      },
      {
        name: 'Liver Disease',
        likelihood: 'less-common',
        description:
          'Bile salt accumulation from liver or bile duct problems causes severe, widespread itching — often without a rash — especially on the palms and soles.',
        severity: 'high',
        whatToDo:
          'See a doctor. Liver function tests and imaging are needed. Treatment addresses the underlying liver condition. Cholestyramine and other medications can relieve itching.',
      },
      {
        name: 'Scabies',
        likelihood: 'less-common',
        description:
          'Tiny mites burrowing into the skin cause intense itching — especially at night — with small raised tracks or bumps between fingers and in skin folds.',
        severity: 'medium',
        whatToDo:
          'See a doctor for prescription permethrin or ivermectin. All household members and close contacts need treatment simultaneously.',
      },
    ],
    seeDoctorIf: [
      'Itching persists more than 2 weeks without an obvious cause',
      'Itching is widespread and severe, affecting sleep',
      'Itching without any visible rash',
      'Itching with jaundice, weight loss, or fatigue',
    ],
    emergencyIf: [
      'Severe itching with difficulty breathing or throat swelling (anaphylaxis)',
    ],
    relatedSymptoms: [
      'dry-skin',
      'swollen-face',
      'bruising-easily',
    ],
    tags: [
      'itchy skin',
      'skin itching',
      'pruritus',
      'itching',
      'hives',
      'skin irritation',
      'rash itch',
      'body itching',
    ],
  },
  {
    slug: 'bruising-easily',
    name: 'Bruising Easily',
    commonName: 'Easy bruising / unexplained bruises',
    summary:
      'Bruising easily — developing bruises from minor bumps or finding unexplained bruises — can be caused by nutritional deficiencies, blood thinners, or, rarely, blood disorders. It becomes more common with age.',
    causes: [
      {
        name: 'Vitamin or Iron Deficiency',
        likelihood: 'common',
        description:
          'Vitamin C is essential for collagen that supports blood vessel walls. Vitamin K is needed for clotting. Iron deficiency weakens capillaries. Deficiencies in any of these increase bruising.',
        severity: 'medium',
        whatToDo:
          'Eat a diet rich in fruits, vegetables, and leafy greens. See a doctor for blood tests to identify specific deficiencies.',
      },
      {
        name: 'Blood-Thinning Medications',
        likelihood: 'common',
        description:
          'Warfarin, aspirin, clopidogrel, and newer anticoagulants impair the blood clotting process, making bruises appear more easily and take longer to fade.',
        severity: 'medium',
        whatToDo:
          'Protect skin from bumps. Inform your doctor about easy bruising at your next visit — dose adjustment may be possible. Do not stop blood thinners without guidance.',
      },
      {
        name: 'Aging',
        likelihood: 'very-common',
        description:
          'Older adults develop thinner skin and less subcutaneous fat, which normally protects blood vessels from trauma. Blood vessels also become more fragile.',
        severity: 'low',
        whatToDo:
          'Protect skin from trauma with protective clothing. Ensure adequate vitamin C and protein intake.',
      },
      {
        name: 'Liver Disease',
        likelihood: 'less-common',
        description:
          'The liver produces clotting factors. When liver function is impaired, clotting is reduced, causing easy bruising and prolonged bleeding.',
        severity: 'high',
        whatToDo:
          'See a doctor for liver function tests if easy bruising is combined with fatigue, jaundice, or abdominal swelling.',
      },
      {
        name: 'Leukemia',
        likelihood: 'rare',
        description:
          'Blood cancers can reduce platelet levels (thrombocytopenia), leading to easy bruising, prolonged bleeding from cuts, and petechiae (tiny red spots).',
        severity: 'high',
        whatToDo:
          'See a doctor promptly if easy bruising is accompanied by fatigue, unexplained weight loss, frequent infections, or petechiae.',
      },
    ],
    seeDoctorIf: [
      'Unexplained bruises appearing regularly without injury',
      'Bruises that are very large or take more than 2 weeks to heal',
      'Easy bruising with prolonged bleeding from cuts',
      'Easy bruising with fatigue, weight loss, or pallor',
    ],
    emergencyIf: [
      'Sudden large bruises over vital areas with signs of internal bleeding',
    ],
    relatedSymptoms: [
      'fatigue',
      'swollen-legs',
      'bleeding-gums',
    ],
    tags: [
      'bruising easily',
      'easy bruising',
      'unexplained bruises',
      'bruise a lot',
      'black and blue',
      'bruising',
      'blood disorder',
    ],
  },
  {
    slug: 'swollen-legs',
    name: 'Swollen Legs',
    commonName: 'Leg swelling / puffy legs / edema',
    summary:
      'Swollen legs occur when fluid accumulates in the tissues — a condition called edema. Mild swelling after prolonged sitting is common and benign, but swelling in both legs may point to heart, kidney, or venous problems.',
    causes: [
      {
        name: 'Prolonged Sitting or Standing',
        likelihood: 'very-common',
        description:
          'Gravity pulls fluid into the lower legs when not moving. This is very common after long flights, desk work, or standing jobs.',
        severity: 'low',
        whatToDo:
          'Elevate legs above heart level when resting. Take walking breaks every hour. Compression stockings help. Stay hydrated.',
      },
      {
        name: 'Chronic Venous Insufficiency',
        likelihood: 'common',
        description:
          'Weakened valves in leg veins allow blood to pool, causing aching, heaviness, and swelling that worsens through the day and improves overnight.',
        severity: 'medium',
        whatToDo:
          'Compression stockings, leg elevation, and regular exercise. See a vascular specialist for evaluation. Procedures may help severe cases.',
      },
      {
        name: 'Heart Failure',
        likelihood: 'less-common',
        description:
          'When the heart cannot pump efficiently, fluid backs up and accumulates in the legs and ankles. Bilateral leg swelling with shortness of breath is a key sign.',
        severity: 'high',
        whatToDo:
          'See a doctor promptly. Heart failure requires specialist management with medications (diuretics, ACE inhibitors) and lifestyle modification.',
      },
      {
        name: 'Kidney Disease',
        likelihood: 'less-common',
        description:
          'Impaired kidney function reduces albumin production and fluid elimination, causing fluid retention and leg swelling, especially around the ankles.',
        severity: 'high',
        whatToDo:
          'See a doctor for kidney function tests (creatinine, eGFR, urine protein). Treatment depends on the underlying kidney condition.',
      },
      {
        name: 'Deep Vein Thrombosis (DVT)',
        likelihood: 'less-common',
        description:
          'A blood clot in a deep leg vein causes sudden one-sided leg swelling, warmth, redness, and pain. A clot can break off and travel to the lungs (pulmonary embolism).',
        severity: 'emergency',
        whatToDo:
          'Seek emergency care immediately. DVT requires anticoagulation therapy. Do not massage the leg. Go to the ER or call 911.',
      },
    ],
    seeDoctorIf: [
      'Swelling in both legs that does not improve with elevation',
      'New leg swelling with shortness of breath',
      'Swelling with skin changes, ulcers, or wounds',
      'Progressive worsening of leg swelling over days to weeks',
    ],
    emergencyIf: [
      'Sudden one-sided leg swelling with pain and redness (possible DVT)',
      'Leg swelling with sudden shortness of breath or chest pain (possible pulmonary embolism)',
    ],
    relatedSymptoms: [
      'swollen-face',
      'shortness-of-breath',
      'varicose-veins',
    ],
    tags: [
      'swollen legs',
      'leg swelling',
      'puffy legs',
      'edema',
      'ankle swelling',
      'water retention',
      'fluid retention legs',
    ],
  },
  {
    slug: 'swollen-face',
    name: 'Swollen Face',
    commonName: 'Facial swelling / puffy face',
    summary:
      'Facial swelling can range from mild morning puffiness to a medical emergency. The cause determines urgency — allergic reactions causing throat swelling require immediate emergency care.',
    causes: [
      {
        name: 'Allergic Reaction',
        likelihood: 'very-common',
        description:
          'Exposure to allergens (food, medication, insect stings) can cause rapid facial swelling, hives, and itching. Severe reactions include throat swelling and airway compromise.',
        severity: 'emergency',
        whatToDo:
          'Use epinephrine auto-injector (EpiPen) if available and call 911 for severe reactions. Antihistamines for mild facial swelling without breathing difficulty.',
      },
      {
        name: 'Sinusitis',
        likelihood: 'common',
        description:
          'Inflammation and fluid accumulation in the sinuses can cause facial puffiness around the eyes and cheeks, typically with facial pressure and nasal congestion.',
        severity: 'low',
        whatToDo:
          'Saline nasal rinse, steam, and decongestants. See a doctor for prolonged sinusitis that may need antibiotic treatment.',
      },
      {
        name: 'Dental Abscess',
        likelihood: 'common',
        description:
          'An untreated dental infection can spread, causing significant swelling of the cheek or jaw, fever, and severe tooth pain.',
        severity: 'high',
        whatToDo:
          'See a dentist urgently for drainage and antibiotics. If swelling extends to the neck or affects swallowing, seek emergency care immediately.',
      },
      {
        name: 'Angioedema',
        likelihood: 'less-common',
        description:
          'Deeper tissue swelling of the lips, eyelids, and face that may or may not involve hives. Can be allergic, hereditary, or medication-induced (ACE inhibitors).',
        severity: 'emergency',
        whatToDo:
          'Seek emergency care if the throat or tongue is swelling. Mild ACE inhibitor-induced angioedema requires stopping the medication under medical supervision.',
      },
      {
        name: 'Kidney Disease',
        likelihood: 'less-common',
        description:
          'Impaired kidney filtration leads to protein loss and fluid retention, causing puffy face and eyes (periorbital edema) — classically worse in the morning.',
        severity: 'high',
        whatToDo:
          'See a doctor for kidney function and urine protein tests. Treatment addresses the underlying kidney problem.',
      },
    ],
    seeDoctorIf: [
      'Facial swelling persisting more than a few days',
      'Swelling limited to one side of the face',
      'Facial swelling with dental pain or fever',
      'Swelling after starting a new medication',
    ],
    emergencyIf: [
      'Facial swelling with tongue or throat swelling causing difficulty breathing (anaphylaxis)',
      'Rapid facial swelling with hives and breathing difficulty',
    ],
    relatedSymptoms: [
      'swollen-legs',
      'tooth-pain',
      'itchy-skin',
    ],
    tags: [
      'swollen face',
      'facial swelling',
      'puffy face',
      'puffy eyes',
      'face swelling',
      'cheek swelling',
      'allergic swelling',
    ],
  },
  {
    slug: 'swollen-lymph-nodes',
    name: 'Swollen Lymph Nodes',
    commonName: 'Swollen glands / lumps in neck or armpit',
    summary:
      'Swollen lymph nodes (lymphadenopathy) are most often a sign that the immune system is fighting a nearby infection. They usually resolve on their own, but persistent or widespread swelling deserves medical evaluation.',
    causes: [
      {
        name: 'Common Cold or Flu',
        likelihood: 'very-common',
        description:
          'Viral upper respiratory infections cause lymph nodes in the neck to enlarge as they work to filter the virus. Tenderness is common.',
        severity: 'low',
        whatToDo:
          'No specific treatment needed. Lymph nodes shrink back to normal within 2-4 weeks as the infection resolves. OTC pain relievers help discomfort.',
      },
      {
        name: 'Infectious Mononucleosis',
        likelihood: 'common',
        description:
          'Epstein-Barr virus causes notably swollen lymph nodes throughout the neck and armpits, along with extreme fatigue, sore throat, and fever.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a mono test. Rest is essential. Avoid contact sports for 3-4 weeks due to spleen rupture risk. Avoid alcohol and NSAIDs.',
      },
      {
        name: 'Tooth or Skin Infection',
        likelihood: 'common',
        description:
          'Localized infections cause nearby lymph nodes to swell as they battle bacteria. Jaw, neck, or armpit nodes enlarge depending on infection location.',
        severity: 'medium',
        whatToDo:
          'Treat the underlying infection (antibiotics, dental care). Lymph nodes should resolve once the infection clears.',
      },
      {
        name: 'Lymphoma',
        likelihood: 'rare',
        description:
          'Hodgkin\'s and non-Hodgkin\'s lymphoma present with painless, firm, persistently swollen lymph nodes, often with night sweats, fever, and weight loss.',
        severity: 'high',
        whatToDo:
          'See a doctor promptly if nodes have been enlarged for more than 4 weeks, are painless, or are accompanied by B-symptoms (night sweats, weight loss, fever).',
      },
      {
        name: 'Autoimmune Disease',
        likelihood: 'less-common',
        description:
          'Lupus and rheumatoid arthritis can cause generalized lymph node enlargement as part of widespread immune system activation.',
        severity: 'medium',
        whatToDo:
          'See a rheumatologist for evaluation and autoimmune workup. Disease management reduces lymphadenopathy.',
      },
    ],
    seeDoctorIf: [
      'Lymph nodes still enlarged after 4 weeks',
      'Nodes are growing, firm, or rubbery',
      'Swollen nodes with unexplained weight loss or night sweats',
      'Multiple locations swollen simultaneously',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'sore-throat',
      'fever',
      'night-sweats',
    ],
    tags: [
      'swollen lymph nodes',
      'swollen glands',
      'lumps in neck',
      'neck lumps',
      'armpit lump',
      'glands',
      'lymph nodes',
    ],
  },
  {
    slug: 'muscle-cramps',
    name: 'Muscle Cramps',
    commonName: 'Muscle spasms / charley horse / cramps',
    summary:
      'Muscle cramps are sudden, involuntary contractions that cause intense pain, most commonly in the legs. They are usually harmless and brief but can be debilitating when severe.',
    causes: [
      {
        name: 'Dehydration',
        likelihood: 'very-common',
        description:
          'Inadequate fluid intake impairs muscle cell function and nerve signaling, making cramps more likely — especially during exercise or in hot weather.',
        severity: 'low',
        whatToDo:
          'Drink water or a sports drink with electrolytes. Stretch and gently massage the cramping muscle. Prevent future cramps by staying well-hydrated.',
      },
      {
        name: 'Electrolyte Imbalance',
        likelihood: 'very-common',
        description:
          'Low levels of potassium, magnesium, or calcium disrupt the electrical signals that control muscle contraction, triggering cramps.',
        severity: 'medium',
        whatToDo:
          'Eat potassium-rich foods (bananas, oranges), magnesium-rich foods (nuts, leafy greens), and calcium-rich foods. Consider a sports electrolyte supplement.',
      },
      {
        name: 'Overuse and Muscle Fatigue',
        likelihood: 'very-common',
        description:
          'Extended or unusually intense physical activity depletes energy stores and fatigues muscles, making them prone to cramping — especially in the calves.',
        severity: 'low',
        whatToDo:
          'Stretch before and after exercise. Gradually increase workout intensity. Allow adequate recovery time.',
      },
      {
        name: 'Poor Circulation',
        likelihood: 'less-common',
        description:
          'Reduced blood flow to leg muscles causes cramping pain during activity (claudication) that eases with rest. Common in people with arterial disease.',
        severity: 'medium',
        whatToDo:
          'See a doctor. Circulatory issues may need medical management, lifestyle changes, or procedures to improve blood flow.',
      },
      {
        name: 'Medication Side Effects',
        likelihood: 'common',
        description:
          'Diuretics deplete electrolytes. Statins can cause muscle pain and cramping. Many blood pressure medications also increase cramp risk.',
        severity: 'medium',
        whatToDo:
          'Speak with your doctor about side effects. Dose adjustment or medication change may reduce cramping.',
      },
    ],
    seeDoctorIf: [
      'Severe cramps that occur frequently and disrupt sleep',
      'Cramps with muscle weakness or wasting',
      'Leg cramps that occur during walking (not just at rest)',
      'Cramps that do not respond to hydration and stretching',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'muscle-weakness',
      'swollen-legs',
      'numbness-tingling',
    ],
    tags: [
      'muscle cramps',
      'leg cramps',
      'charley horse',
      'muscle spasm',
      'calf cramp',
      'night cramps',
      'leg spasm',
    ],
  },
  {
    slug: 'muscle-weakness',
    name: 'Muscle Weakness',
    commonName: 'Weak muscles / feeling weak',
    summary:
      'True muscle weakness — reduced strength that is not just fatigue — can range from mild to severe. It may be localized to one area or generalized, and distinguishing fatigue from true weakness helps narrow the cause.',
    causes: [
      {
        name: 'Dehydration',
        likelihood: 'very-common',
        description:
          'Even mild dehydration reduces muscular endurance and strength. Combined with electrolyte loss, it can cause generalized weakness and fatigue.',
        severity: 'low',
        whatToDo:
          'Rehydrate with water and electrolytes. Weakness should resolve within hours of adequate fluid intake.',
      },
      {
        name: 'Anemia',
        likelihood: 'common',
        description:
          'Low red blood cell count reduces oxygen delivery to muscles, causing weakness, fatigue, and shortness of breath on exertion.',
        severity: 'medium',
        whatToDo:
          'See a doctor for a CBC blood test. Treatment depends on the cause — iron, B12, folate supplementation, or addressing underlying disease.',
      },
      {
        name: 'Hypothyroidism',
        likelihood: 'common',
        description:
          'Low thyroid hormone slows metabolic processes in muscle tissue, causing aching, weakness, and easy fatigue.',
        severity: 'medium',
        whatToDo:
          'TSH blood test will diagnose hypothyroidism. Thyroid hormone replacement therapy resolves muscular symptoms.',
      },
      {
        name: 'Multiple Sclerosis',
        likelihood: 'less-common',
        description:
          'MS damages the nerve pathways controlling muscle movement, causing focal weakness, spasticity, and coordination problems.',
        severity: 'high',
        whatToDo:
          'See a neurologist. MRI and lumbar puncture help diagnose MS. Disease-modifying therapies reduce relapse rate.',
      },
      {
        name: 'Myasthenia Gravis',
        likelihood: 'rare',
        description:
          'An autoimmune condition at the neuromuscular junction causes fluctuating weakness — worsening with activity, improving with rest — particularly affecting the eyes, face, and limbs.',
        severity: 'high',
        whatToDo:
          'See a neurologist. Acetylcholinesterase inhibitors and immunosuppressive drugs are effective treatments.',
      },
    ],
    seeDoctorIf: [
      'Muscle weakness that is progressive or worsening',
      'Weakness in one side of the body or specific muscle group',
      'Weakness with difficulty swallowing or breathing',
      'Weakness accompanied by sensory changes (numbness, tingling)',
    ],
    emergencyIf: [
      'Sudden one-sided weakness (possible stroke)',
      'Rapidly progressing weakness spreading upward from legs (possible Guillain-Barre)',
    ],
    relatedSymptoms: [
      'fatigue',
      'numbness-tingling',
      'muscle-cramps',
    ],
    tags: [
      'muscle weakness',
      'weak muscles',
      'feeling weak',
      'weakness',
      'muscle fatigue',
      'limb weakness',
      'generalized weakness',
    ],
  },
  {
    slug: 'numbness-tingling',
    name: 'Numbness and Tingling',
    commonName: 'Pins and needles / numb limbs',
    summary:
      'Numbness and tingling (paresthesia) occur when nerves are compressed or damaged. Temporary pins and needles from a positional nerve compression are harmless, but persistent numbness warrants evaluation.',
    causes: [
      {
        name: 'Carpal Tunnel Syndrome',
        likelihood: 'very-common',
        description:
          'Compression of the median nerve at the wrist causes numbness and tingling in the thumb, index, and middle fingers — often worse at night or with typing.',
        severity: 'medium',
        whatToDo:
          'Wrist splints at night, ergonomic adjustments, and NSAIDs. Corticosteroid injections and surgical release are effective for severe cases.',
      },
      {
        name: 'Sciatica',
        likelihood: 'common',
        description:
          'Compression of the sciatic nerve in the lower back causes radiating pain, numbness, and tingling from the buttock down the back of the leg.',
        severity: 'medium',
        whatToDo:
          'NSAIDs, heat, and physical therapy are first-line. Most cases improve in 4-6 weeks. Epidural steroid injections help persistent cases.',
      },
      {
        name: 'Vitamin B12 Deficiency',
        likelihood: 'common',
        description:
          'B12 is essential for myelin sheath formation around nerves. Deficiency causes symmetric numbness and tingling — typically starting in the feet and hands.',
        severity: 'medium',
        whatToDo:
          'See a doctor for B12 blood levels. Oral or injectable B12 supplementation reverses symptoms if caught early.',
      },
      {
        name: 'Multiple Sclerosis',
        likelihood: 'less-common',
        description:
          'MS lesions in the central nervous system disrupt nerve signal transmission, causing patchy numbness, tingling, and other neurological symptoms.',
        severity: 'high',
        whatToDo:
          'See a neurologist. MRI of the brain and spinal cord is the primary diagnostic tool. Early treatment can slow disease progression.',
      },
      {
        name: 'Diabetes (Peripheral Neuropathy)',
        likelihood: 'common',
        description:
          'Chronically elevated blood sugar damages peripheral nerves, causing symmetric burning, numbness, and tingling — typically starting in the feet.',
        severity: 'high',
        whatToDo:
          'See a doctor for blood glucose control. Good diabetes management slows nerve damage. Pain medications and physical therapy address symptoms.',
      },
    ],
    seeDoctorIf: [
      'Numbness or tingling that persists more than a few days',
      'Numbness affecting a specific dermatome or following a nerve distribution',
      'Tingling spreading progressively from feet upward',
      'Numbness with weakness, vision changes, or coordination problems',
    ],
    emergencyIf: [
      'Sudden numbness on one side of the face or body (possible stroke)',
      'Rapidly ascending numbness and weakness in both legs (possible Guillain-Barre)',
    ],
    relatedSymptoms: [
      'muscle-weakness',
      'wrist-pain',
      'neck-pain',
    ],
    tags: [
      'numbness',
      'tingling',
      'pins and needles',
      'numb hands',
      'numb feet',
      'paresthesia',
      'numbness and tingling',
      'nerve pain',
    ],
  },
  {
    slug: 'memory-problems',
    name: 'Memory Problems',
    commonName: 'Forgetfulness / memory loss / brain fog',
    summary:
      'Memory lapses are common and usually benign — related to stress, poor sleep, or normal aging. However, progressive memory loss that interferes with daily life requires evaluation to distinguish normal aging from dementia or treatable causes.',
    causes: [
      {
        name: 'Stress and Anxiety',
        likelihood: 'very-common',
        description:
          'High stress levels impair attention and encoding of memories, leading to difficulty recalling information and feeling scattered or forgetful.',
        severity: 'medium',
        whatToDo:
          'Stress management: exercise, sleep, mindfulness. Reducing anxiety through therapy or medication improves cognitive function.',
      },
      {
        name: 'Sleep Deprivation',
        likelihood: 'very-common',
        description:
          'Sleep is essential for memory consolidation. Chronic poor sleep dramatically impairs working memory, attention, and recall.',
        severity: 'medium',
        whatToDo:
          'Prioritize 7-9 hours of quality sleep. Treat underlying sleep disorders like insomnia or sleep apnea.',
      },
      {
        name: 'Depression',
        likelihood: 'common',
        description:
          'Depression impairs concentration and memory — a symptom often called pseudodementia — causing cognitive slowing that improves with treatment.',
        severity: 'medium',
        whatToDo:
          'See a mental health professional. Antidepressants and therapy improve both mood and cognitive function.',
      },
      {
        name: 'Thyroid Disorder',
        likelihood: 'common',
        description:
          'Both hypothyroidism and hyperthyroidism impair cognitive function, causing memory problems, brain fog, and concentration difficulties.',
        severity: 'medium',
        whatToDo:
          'TSH blood test screens for thyroid dysfunction. Treating the thyroid condition typically restores cognitive function.',
      },
      {
        name: 'Early Dementia (Alzheimer\'s)',
        likelihood: 'less-common',
        description:
          'Progressive loss of short-term memory, getting lost in familiar places, and difficulty with complex tasks characterize early Alzheimer\'s disease.',
        severity: 'high',
        whatToDo:
          'See a doctor for cognitive testing and evaluation. While there is no cure, treatments can slow progression and manage symptoms. Early diagnosis helps planning.',
      },
    ],
    seeDoctorIf: [
      'Memory problems are worsening progressively over months',
      'Getting lost in familiar places or forgetting names of close family',
      'Memory issues affecting work or independent daily living',
      'Memory problems associated with personality changes',
    ],
    emergencyIf: [
      'Sudden onset of confusion or memory loss (possible stroke or delirium)',
    ],
    relatedSymptoms: [
      'difficulty-concentrating',
      'fatigue',
      'depression-symptoms',
    ],
    tags: [
      'memory problems',
      'forgetfulness',
      'memory loss',
      'brain fog',
      'memory',
      'cognitive problems',
      'dementia',
      'forgetting things',
    ],
  },
  {
    slug: 'difficulty-concentrating',
    name: 'Difficulty Concentrating',
    commonName: 'Cannot focus / brain fog / concentration problems',
    summary:
      'Difficulty concentrating is a widespread complaint affecting people of all ages. It is most often linked to lifestyle factors like poor sleep or stress, but can also reflect ADHD, depression, or thyroid disease.',
    causes: [
      {
        name: 'ADHD (Attention Deficit Hyperactivity Disorder)',
        likelihood: 'common',
        description:
          'ADHD causes persistent difficulty sustaining attention, impulsivity, and disorganization that impairs work, school, and daily functioning.',
        severity: 'medium',
        whatToDo:
          'See a doctor for evaluation. Behavioral therapy and medication (stimulants, non-stimulants) are highly effective. Organizational strategies and accommodations help.',
      },
      {
        name: 'Anxiety',
        likelihood: 'very-common',
        description:
          'Excessive worry and rumination consume mental bandwidth, making it difficult to focus on tasks. Racing thoughts prevent sustained attention.',
        severity: 'medium',
        whatToDo:
          'CBT (cognitive behavioral therapy) is the gold standard for anxiety. Mindfulness, regular exercise, and reducing caffeine help. Medication is an option for persistent anxiety.',
      },
      {
        name: 'Depression',
        likelihood: 'common',
        description:
          'Depression impairs executive function and attention — people describe thinking through molasses. Difficulty concentrating is a core diagnostic criterion for depression.',
        severity: 'medium',
        whatToDo:
          'Treatment of depression with therapy and antidepressants improves concentration as mood lifts.',
      },
      {
        name: 'Sleep Deprivation',
        likelihood: 'very-common',
        description:
          'The prefrontal cortex — responsible for focus and decision-making — is one of the first brain regions impaired by insufficient sleep.',
        severity: 'medium',
        whatToDo:
          'Prioritize consistent, adequate sleep (7-9 hours). Address underlying sleep disorders. Avoid screens 1 hour before bed.',
      },
      {
        name: 'Thyroid Disorder',
        likelihood: 'common',
        description:
          'Both over- and underactive thyroid can impair concentration and working memory. Hypothyroidism causes mental sluggishness; hyperthyroidism causes anxious distractibility.',
        severity: 'medium',
        whatToDo:
          'TSH blood test. Treating the thyroid condition typically resolves cognitive symptoms.',
      },
    ],
    seeDoctorIf: [
      'Concentration problems significantly affecting work or school performance',
      'New-onset difficulty concentrating without an obvious cause',
      'Concentration issues with mood changes, weight changes, or fatigue',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'memory-problems',
      'fatigue',
      'depression-symptoms',
    ],
    tags: [
      'difficulty concentrating',
      'cannot focus',
      'brain fog',
      'concentration problems',
      'ADHD',
      'focus issues',
      'attention problems',
    ],
  },
  {
    slug: 'mood-swings',
    name: 'Mood Swings',
    commonName: 'Emotional instability / rapid mood changes',
    summary:
      'Mood swings — rapid or extreme shifts in emotional state — can be a normal response to hormonal changes or stress. When severe or persistent, they may reflect a mood disorder, hormonal imbalance, or medication effect.',
    causes: [
      {
        name: 'Hormonal Changes',
        likelihood: 'very-common',
        description:
          'Fluctuating estrogen and progesterone during the menstrual cycle, perimenopause, or pregnancy cause emotional sensitivity and mood variability.',
        severity: 'medium',
        whatToDo:
          'Track the pattern relative to the menstrual cycle. Lifestyle adjustments (exercise, sleep, diet) help significantly. Hormonal therapy or SSRIs may be recommended for severe cases.',
      },
      {
        name: 'Stress',
        likelihood: 'very-common',
        description:
          'Chronic stress depletes emotional regulation resources, making people more reactive and prone to abrupt shifts between anger, sadness, and calm.',
        severity: 'low',
        whatToDo:
          'Stress reduction: regular exercise, adequate sleep, social support, and time management. Therapy can build emotional regulation skills.',
      },
      {
        name: 'Bipolar Disorder',
        likelihood: 'less-common',
        description:
          'Bipolar disorder involves distinct episodes of mania or hypomania (elevated, expansive mood) alternating with depressive episodes. Impairs relationships and functioning.',
        severity: 'high',
        whatToDo:
          'See a psychiatrist for evaluation. Mood stabilizers (lithium, valproate) are the cornerstone of treatment. Regular therapy and routine support stability.',
      },
      {
        name: 'Premenstrual Dysphoric Disorder (PMDD)',
        likelihood: 'common',
        description:
          'A severe form of PMS causing debilitating mood swings, irritability, depression, and anxiety in the week before menstruation that resolves after the period starts.',
        severity: 'medium',
        whatToDo:
          'SSRIs (even taken only in the luteal phase) are highly effective. Hormonal contraceptives can also help. See a gynecologist or psychiatrist.',
      },
      {
        name: 'Medication Side Effects',
        likelihood: 'common',
        description:
          'Corticosteroids, hormonal therapies, some antidepressants, and sleep medications can all cause mood instability as a side effect.',
        severity: 'medium',
        whatToDo:
          'Review medications with your prescribing doctor. Do not stop prescription medications without guidance.',
      },
    ],
    seeDoctorIf: [
      'Mood swings are severe, frequent, or getting worse',
      'Inability to maintain work or relationships due to mood changes',
      'Mood swings with prolonged periods of elevated energy or reduced sleep',
    ],
    emergencyIf: [
      'Thoughts of harming yourself or others — call 988 or go to the ER',
    ],
    relatedSymptoms: [
      'depression-symptoms',
      'irritability',
      'excessive-sweating',
    ],
    tags: [
      'mood swings',
      'mood changes',
      'emotional instability',
      'irritable',
      'bipolar',
      'PMS mood',
      'emotional swings',
      'rapid mood',
    ],
  },
  {
    slug: 'depression-symptoms',
    name: 'Depression Symptoms',
    commonName: 'Feeling depressed / low mood / sadness',
    summary:
      'Depression is more than sadness — it is a persistent state of low mood, loss of interest, and low energy that affects thinking, behavior, and physical health. It is treatable, and seeking help is essential.',
    causes: [
      {
        name: 'Major Depressive Disorder',
        likelihood: 'very-common',
        description:
          'A biological and psychological condition causing persistent sadness, loss of interest, sleep and appetite changes, fatigue, and feelings of worthlessness lasting at least 2 weeks.',
        severity: 'high',
        whatToDo:
          'See a doctor or mental health professional. Combination of therapy (CBT) and antidepressant medication is most effective. Exercise has documented antidepressant effects.',
      },
      {
        name: 'Seasonal Affective Disorder (SAD)',
        likelihood: 'common',
        description:
          'Depression that follows a seasonal pattern, typically worsening in autumn and winter due to reduced light exposure affecting serotonin and melatonin.',
        severity: 'medium',
        whatToDo:
          'Light therapy (10,000 lux lightbox, 30 min each morning) is the primary treatment. Antidepressants and psychotherapy are also effective.',
      },
      {
        name: 'Hypothyroidism',
        likelihood: 'common',
        description:
          'Low thyroid hormone can cause all the symptoms of depression: low mood, fatigue, weight gain, and cognitive slowing.',
        severity: 'medium',
        whatToDo:
          'TSH blood test. Treating hypothyroidism with hormone replacement resolves depression-like symptoms if the thyroid is the cause.',
      },
      {
        name: 'Grief and Life Circumstances',
        likelihood: 'very-common',
        description:
          'Loss of a loved one, relationship breakdown, job loss, or major health diagnosis can trigger depressive symptoms as a natural response to adversity.',
        severity: 'medium',
        whatToDo:
          'Allow yourself to grieve. Seek support from trusted people or a counselor. If symptoms persist more than 2 months, professional treatment may be needed.',
      },
      {
        name: 'Vitamin D Deficiency',
        likelihood: 'common',
        description:
          'Low vitamin D is associated with depressive symptoms, particularly in people with limited sun exposure. The exact causal relationship is still studied.',
        severity: 'medium',
        whatToDo:
          'Get vitamin D blood levels checked. Supplementation (1000-2000 IU daily) and sunlight exposure help. Vitamin D alone rarely fully resolves clinical depression.',
      },
    ],
    seeDoctorIf: [
      'Low mood persisting more than 2 weeks',
      'Loss of interest in activities you previously enjoyed',
      'Significant sleep, appetite, or weight changes with mood',
      'Unable to function at work or in relationships',
    ],
    emergencyIf: [
      'Thoughts of suicide or self-harm — call 988 or go to the nearest emergency room immediately',
    ],
    relatedSymptoms: [
      'fatigue',
      'difficulty-concentrating',
      'mood-swings',
    ],
    tags: [
      'depression',
      'depressed',
      'low mood',
      'sadness',
      'feeling hopeless',
      'depression symptoms',
      'mental health',
      'mood disorder',
    ],
  },
  {
    slug: 'irritability',
    name: 'Irritability',
    commonName: 'Easily irritated / short temper / agitated',
    summary:
      'Feeling irritable is a common experience, but when it is persistent, intense, or out of proportion to circumstances, it may reflect an underlying physical or psychological issue that deserves attention.',
    causes: [
      {
        name: 'Stress',
        likelihood: 'very-common',
        description:
          'Chronic stress depletes coping reserves, causing a shortened fuse, emotional reactivity, and difficulty tolerating minor frustrations.',
        severity: 'low',
        whatToDo:
          'Stress management through exercise, sleep, and relaxation techniques. Setting healthy boundaries and addressing the source of stress directly.',
      },
      {
        name: 'Sleep Deprivation',
        likelihood: 'very-common',
        description:
          'Even one night of poor sleep significantly increases emotional reactivity and irritability. Chronic sleep debt causes persistent mood dysregulation.',
        severity: 'medium',
        whatToDo:
          'Prioritize sleep. Address underlying insomnia or sleep disorders. Aim for 7-9 hours of quality sleep per night.',
      },
      {
        name: 'Low Blood Sugar (Hypoglycemia)',
        likelihood: 'common',
        description:
          'Falling blood glucose triggers the release of stress hormones, causing irritability, shakiness, and difficulty concentrating between meals.',
        severity: 'medium',
        whatToDo:
          'Eat regular meals and balanced snacks to maintain blood sugar. Avoid high-sugar foods that cause spikes and crashes. If hypoglycemia is frequent, see a doctor.',
      },
      {
        name: 'PMS or Hormonal Changes',
        likelihood: 'common',
        description:
          'Hormonal fluctuations in the premenstrual phase cause irritability, emotional sensitivity, and mood changes that resolve after menstruation begins.',
        severity: 'medium',
        whatToDo:
          'Track symptoms relative to the cycle. Regular exercise, reduced caffeine and salt, and good sleep help. SSRIs or hormonal treatment for PMDD.',
      },
      {
        name: 'Depression or Anxiety',
        likelihood: 'common',
        description:
          'Irritability is a core feature of both depression (especially in men and children) and anxiety disorders, often overshadowing sadness.',
        severity: 'medium',
        whatToDo:
          'See a mental health professional if irritability is persistent and affecting quality of life. Therapy and medication are effective.',
      },
    ],
    seeDoctorIf: [
      'Irritability is persistent and affecting relationships or work',
      'Irritability with mood swings, mania-like energy, or reduced sleep need',
      'Irritability accompanied by physical symptoms like weight changes or fatigue',
    ],
    emergencyIf: [
      'Extreme irritability with thoughts of harming others — seek immediate help',
    ],
    relatedSymptoms: [
      'mood-swings',
      'depression-symptoms',
      'difficulty-concentrating',
    ],
    tags: [
      'irritability',
      'irritable',
      'short temper',
      'easily annoyed',
      'agitated',
      'mood',
      'anger',
      'emotional',
    ],
  },
  {
    slug: 'excessive-sweating',
    name: 'Excessive Sweating',
    commonName: 'Hyperhidrosis / sweating too much',
    summary:
      'While sweating is a normal cooling mechanism, excessive sweating beyond what is needed to regulate temperature — whether generalized or localized — can significantly impact daily life and may signal an underlying condition.',
    causes: [
      {
        name: 'Anxiety',
        likelihood: 'very-common',
        description:
          'The stress response activates sweat glands to regulate anticipated body temperature changes. Anxiety causes disproportionate sweating even without physical exertion.',
        severity: 'medium',
        whatToDo:
          'Treating anxiety through CBT, medication, or lifestyle changes reduces anxiety-related sweating. Antiperspirants in affected areas can help.',
      },
      {
        name: 'Primary Hyperhidrosis',
        likelihood: 'common',
        description:
          'A condition where overactive sweat glands produce excess sweat unrelated to heat or exercise — typically affecting the palms, armpits, soles, or face.',
        severity: 'medium',
        whatToDo:
          'Clinical-strength antiperspirants are first-line. Prescription medications, iontophoresis, Botox injections, and microwave therapy (miraDry) are effective options.',
      },
      {
        name: 'Menopause',
        likelihood: 'common',
        description:
          'Hormonal fluctuations during menopause trigger the hypothalamus to initiate sweating inappropriately, causing hot flashes and profuse sweating.',
        severity: 'low',
        whatToDo:
          'Cool environments, layered clothing, and breathable fabrics help. Hormone replacement therapy or non-hormonal medications significantly reduce sweating episodes.',
      },
      {
        name: 'Hyperthyroidism',
        likelihood: 'less-common',
        description:
          'An overactive thyroid speeds up metabolism, generating excess body heat and causing increased sweating, intolerance to heat, and rapid heartbeat.',
        severity: 'medium',
        whatToDo:
          'TSH blood test. Antithyroid medications, radioactive iodine, or surgery treat hyperthyroidism.',
      },
      {
        name: 'Infection or Fever',
        likelihood: 'common',
        description:
          'Elevated body temperature during illness triggers sweating to cool the body. Bacterial infections can also cause sweating through immune activation.',
        severity: 'medium',
        whatToDo:
          'Treat the underlying infection. Fever reducers (acetaminophen) reduce fever-related sweating.',
      },
    ],
    seeDoctorIf: [
      'Sweating disrupts daily activities, work, or social life',
      'New excessive sweating without obvious cause in an adult',
      'Excessive sweating with weight loss, heart palpitations, or night sweats',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'night-sweats',
      'hot-flashes',
      'irregular-heartbeat',
    ],
    tags: [
      'excessive sweating',
      'hyperhidrosis',
      'sweating too much',
      'sweaty palms',
      'sweaty armpits',
      'hot sweats',
      'profuse sweating',
    ],
  },
  {
    slug: 'cold-hands-feet',
    name: 'Cold Hands and Feet',
    commonName: 'Cold extremities / always cold hands',
    summary:
      'Cold hands and feet are common and often benign, resulting from the body prioritizing warmth to core organs. However, persistently cold extremities — especially with color changes — may indicate a circulatory or thyroid problem.',
    causes: [
      {
        name: 'Poor Circulation',
        likelihood: 'very-common',
        description:
          'Reduced blood flow to the extremities from sedentary lifestyle, smoking, or arterial disease causes persistently cold hands and feet.',
        severity: 'medium',
        whatToDo:
          'Regular exercise, stop smoking, and stay warm. A doctor can assess circulation if severe. Warming gloves and socks help symptoms.',
      },
      {
        name: 'Raynaud\'s Phenomenon',
        likelihood: 'common',
        description:
          'An exaggerated vascular response to cold or stress causes fingers and toes to turn white, then blue, then red — with numbness and tingling during attacks.',
        severity: 'medium',
        whatToDo:
          'Keep hands warm, avoid sudden cold exposure, and manage stress. Calcium channel blockers can reduce attack severity. See a doctor to rule out secondary Raynaud\'s.',
      },
      {
        name: 'Anemia',
        likelihood: 'common',
        description:
          'Low hemoglobin reduces the oxygen-carrying capacity of blood, leaving extremities with less warmth and oxygen — causing cold sensitivity.',
        severity: 'medium',
        whatToDo:
          'Blood test to identify anemia type. Iron, B12, or folate supplementation as needed. Treat underlying cause.',
      },
      {
        name: 'Hypothyroidism',
        likelihood: 'common',
        description:
          'Low thyroid hormone slows basal metabolic rate, reducing heat generation and causing persistent cold sensitivity throughout the body.',
        severity: 'medium',
        whatToDo:
          'TSH blood test. Thyroid hormone replacement therapy resolves cold intolerance.',
      },
      {
        name: 'Anxiety',
        likelihood: 'common',
        description:
          'The fight-or-flight response diverts blood to core muscles, causing cold, sweaty extremities during anxious episodes.',
        severity: 'low',
        whatToDo:
          'Treating anxiety through lifestyle, therapy, or medication reduces sympathetic nervous system overactivation and cold extremity episodes.',
      },
    ],
    seeDoctorIf: [
      'Color changes in fingers (white, blue, red) with cold exposure',
      'Cold extremities with numbness or tingling that does not resolve',
      'Cold hands and feet with fatigue, weight gain, or hair loss',
      'Wounds on fingers or toes that are slow to heal',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'numbness-tingling',
      'fatigue',
      'muscle-weakness',
    ],
    tags: [
      'cold hands',
      'cold feet',
      'cold extremities',
      'always cold',
      'Raynauds',
      'poor circulation',
      'cold fingers',
    ],
  },
  {
    slug: 'hot-flashes',
    name: 'Hot Flashes',
    commonName: 'Hot flush / sudden heat wave',
    summary:
      'Hot flashes are sudden waves of heat — often with sweating, flushing, and rapid heartbeat — that are the hallmark symptom of menopause. They can also be caused by medications and thyroid disorders.',
    causes: [
      {
        name: 'Menopause',
        likelihood: 'very-common',
        description:
          'Declining estrogen disrupts the hypothalamus temperature regulation center, triggering sudden perceived heat and sweating. Affects up to 75% of menopausal women.',
        severity: 'medium',
        whatToDo:
          'Hormone replacement therapy is most effective. Non-hormonal options include SSRIs, SNRIs, and gabapentin. Cooling strategies and trigger avoidance help manage episodes.',
      },
      {
        name: 'Perimenopause',
        likelihood: 'very-common',
        description:
          'The transition period before menopause involves erratic estrogen fluctuations that trigger hot flashes, often beginning years before periods stop.',
        severity: 'medium',
        whatToDo:
          'Same treatment options as menopause. Tracking triggers (alcohol, spicy food, hot drinks) helps predict and avoid episodes.',
      },
      {
        name: 'Anxiety Disorder',
        likelihood: 'common',
        description:
          'Anxiety activates the sympathetic nervous system, causing flushing, sweating, and a sensation of heat that closely mimics menopausal hot flashes.',
        severity: 'medium',
        whatToDo:
          'Distinguish from menopause with hormone levels. Anxiety treatment with CBT and medication reduces these episodes.',
      },
      {
        name: 'Medication Side Effects',
        likelihood: 'common',
        description:
          'Tamoxifen, certain antidepressants, opioids, and calcium channel blockers can all trigger hot flashes as a side effect.',
        severity: 'low',
        whatToDo:
          'Speak with your prescribing doctor. Alternative medications may be available.',
      },
      {
        name: 'Hyperthyroidism',
        likelihood: 'less-common',
        description:
          'An overactive thyroid accelerates metabolism, creating excess body heat and causing heat intolerance, flushing, sweating, and rapid heartbeat.',
        severity: 'medium',
        whatToDo:
          'TSH blood test. Treating hyperthyroidism with medication, radioactive iodine, or surgery resolves heat symptoms.',
      },
    ],
    seeDoctorIf: [
      'Hot flashes disrupting sleep or daily activities',
      'Hot flashes in a man (may indicate testosterone deficiency or medication side effect)',
      'Hot flashes with rapid heartbeat, weight loss, or anxiety',
      'Hot flashes not improving despite menopause management strategies',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'night-sweats',
      'excessive-sweating',
      'irregular-heartbeat',
    ],
    tags: [
      'hot flashes',
      'hot flush',
      'menopause symptoms',
      'sweating hot',
      'flushing',
      'heat wave feeling',
      'perimenopausal',
    ],
  },
  {
    slug: 'irregular-heartbeat',
    name: 'Irregular Heartbeat',
    commonName: 'Heart palpitations / fluttering heart / arrhythmia',
    summary:
      'An irregular heartbeat — whether pounding, fluttering, or skipping — is usually benign and related to lifestyle factors. However, certain arrhythmias require medical evaluation and treatment.',
    causes: [
      {
        name: 'Anxiety and Stress',
        likelihood: 'very-common',
        description:
          'Adrenaline released during stress or anxiety causes the heart to beat faster and sometimes irregularly. Palpitations are often the dominant physical symptom of anxiety.',
        severity: 'low',
        whatToDo:
          'Reduce stress and anxiety. Deep breathing, relaxation techniques, and treating underlying anxiety disorder. Reduce caffeine intake.',
      },
      {
        name: 'Caffeine',
        likelihood: 'very-common',
        description:
          'Caffeine stimulates the heart and central nervous system, frequently triggering palpitations, especially with high intake or sensitivity.',
        severity: 'low',
        whatToDo:
          'Reduce or eliminate caffeine. Most caffeine-induced palpitations resolve within hours. If they persist, see a doctor.',
      },
      {
        name: 'Atrial Fibrillation (AFib)',
        likelihood: 'common',
        description:
          'An irregular, often rapid heart rhythm from the upper chambers. Can cause palpitations, fatigue, shortness of breath, and increases stroke risk significantly.',
        severity: 'high',
        whatToDo:
          'See a doctor or cardiologist. AFib requires management with rate-control or rhythm-control medications and anticoagulation to prevent stroke.',
      },
      {
        name: 'Electrolyte Imbalance',
        likelihood: 'common',
        description:
          'Low potassium, magnesium, or calcium disrupts the heart\'s electrical conduction system, causing skipped beats, palpitations, and arrhythmias.',
        severity: 'medium',
        whatToDo:
          'Electrolyte-rich foods and fluids. See a doctor if palpitations are frequent — blood tests will identify imbalances.',
      },
      {
        name: 'Thyroid Disease',
        likelihood: 'less-common',
        description:
          'Both hypothyroidism and hyperthyroidism affect heart rate. Hyperthyroidism is more commonly associated with rapid or irregular heartbeat.',
        severity: 'medium',
        whatToDo:
          'TSH blood test. Treating the thyroid condition restores normal heart rhythm.',
      },
    ],
    seeDoctorIf: [
      'Palpitations that last more than a few minutes',
      'Irregular heartbeat with shortness of breath, dizziness, or chest pain',
      'Palpitations with a known heart condition',
      'Palpitations occurring at rest without obvious trigger',
    ],
    emergencyIf: [
      'Rapid irregular heartbeat with fainting, severe chest pain, or difficulty breathing',
      'Irregular heartbeat with sudden weakness or one-sided numbness (possible stroke)',
    ],
    relatedSymptoms: [
      'chest-tightness',
      'shortness-of-breath',
      'excessive-sweating',
    ],
    tags: [
      'irregular heartbeat',
      'palpitations',
      'heart palpitations',
      'fluttering heart',
      'skipped beats',
      'racing heart',
      'arrhythmia',
    ],
  },
  {
    slug: 'low-blood-pressure',
    name: 'Low Blood Pressure',
    commonName: 'Hypotension / dizzy when standing up',
    summary:
      'Low blood pressure (hypotension) is only a concern when it causes symptoms. Many people naturally run low blood pressure without any problem — but symptomatic hypotension causing dizziness or fainting needs evaluation.',
    causes: [
      {
        name: 'Dehydration',
        likelihood: 'very-common',
        description:
          'Reduced blood volume from inadequate fluid intake or excessive fluid loss causes low blood pressure, particularly upon standing (orthostatic hypotension).',
        severity: 'medium',
        whatToDo:
          'Increase fluid and salt intake. Drink water before standing. If symptoms are severe or persistent, see a doctor.',
      },
      {
        name: 'Orthostatic Hypotension (Prolonged Sitting or Standing)',
        likelihood: 'very-common',
        description:
          'Blood pools in the legs when sitting or lying for extended periods. Standing up rapidly causes a sudden BP drop, triggering dizziness or lightheadedness.',
        severity: 'low',
        whatToDo:
          'Rise slowly from seated or lying positions. Flex legs before standing. Compression stockings help in recurrent cases.',
      },
      {
        name: 'Heart Conditions',
        likelihood: 'less-common',
        description:
          'Heart failure, valve problems, or very slow heart rate (bradycardia) reduce cardiac output, causing chronically low blood pressure.',
        severity: 'high',
        whatToDo:
          'See a cardiologist. Heart conditions causing hypotension require targeted treatment.',
      },
      {
        name: 'Medications',
        likelihood: 'common',
        description:
          'Blood pressure medications, diuretics, and some antidepressants can lower BP too much, especially in older adults or with dehydration.',
        severity: 'medium',
        whatToDo:
          'Review medications with your doctor. Dose adjustment or medication change may be needed.',
      },
      {
        name: 'Blood Loss',
        likelihood: 'less-common',
        description:
          'Significant internal or external blood loss rapidly reduces blood volume, causing dangerously low blood pressure and shock.',
        severity: 'emergency',
        whatToDo:
          'Call 911. Apply pressure to external bleeding. This is a medical emergency requiring urgent care.',
      },
    ],
    seeDoctorIf: [
      'Frequent dizziness or fainting when standing',
      'Blood pressure consistently below 90/60 with symptoms',
      'Low blood pressure with chest pain or shortness of breath',
      'Low BP associated with new medication',
    ],
    emergencyIf: [
      'Very low blood pressure with rapid heartbeat and pale, cold, clammy skin (shock)',
      'Fainting with slow recovery of consciousness',
    ],
    relatedSymptoms: [
      'dizziness',
      'fatigue',
      'irregular-heartbeat',
    ],
    tags: [
      'low blood pressure',
      'hypotension',
      'dizzy standing up',
      'lightheaded',
      'orthostatic',
      'faint',
      'dizzy when standing',
    ],
  },
  {
    slug: 'varicose-veins',
    name: 'Varicose Veins',
    commonName: 'Bulging veins in legs / spider veins',
    summary:
      'Varicose veins are enlarged, twisted veins visible under the skin — most commonly in the legs. They develop when vein valves fail, allowing blood to pool. They are usually harmless but can cause discomfort and complications.',
    causes: [
      {
        name: 'Prolonged Standing',
        likelihood: 'very-common',
        description:
          'Jobs that require standing for hours increase pressure in leg veins, gradually weakening valve function and promoting varicosity.',
        severity: 'low',
        whatToDo:
          'Take regular sitting breaks, wear compression stockings, and elevate legs after work. Regular walking activates the calf muscle pump.',
      },
      {
        name: 'Genetics',
        likelihood: 'very-common',
        description:
          'A family history of varicose veins is one of the strongest risk factors. Inherited weakness of vein walls and valves predisposes people to developing them.',
        severity: 'low',
        whatToDo:
          'Prevention focuses on compression stockings, regular exercise, and leg elevation. If symptomatic, vein treatment is available.',
      },
      {
        name: 'Obesity',
        likelihood: 'common',
        description:
          'Excess weight increases abdominal pressure on leg veins, impeding blood return to the heart and accelerating valve failure.',
        severity: 'medium',
        whatToDo:
          'Weight loss significantly reduces venous pressure. Combined with compression and exercise, can slow varicose vein progression.',
      },
      {
        name: 'Pregnancy',
        likelihood: 'common',
        description:
          'Increased blood volume and uterine pressure on pelvic veins impair leg vein drainage during pregnancy, causing or worsening varicose veins.',
        severity: 'low',
        whatToDo:
          'Compression stockings from the start of pregnancy. Elevate legs when resting. Many pregnancy-related varicose veins improve after delivery.',
      },
      {
        name: 'Aging',
        likelihood: 'common',
        description:
          'Vein walls and valves weaken with age, making varicose veins progressively more common after age 50.',
        severity: 'low',
        whatToDo:
          'Same prevention and management strategies apply. Treatments including sclerotherapy, laser therapy, and surgical stripping are available for symptomatic veins.',
      },
    ],
    seeDoctorIf: [
      'Varicose veins causing significant pain, heaviness, or swelling',
      'Skin changes or ulcers near varicose veins',
      'Sudden worsening of varicose vein symptoms',
    ],
    emergencyIf: [
      'A varicose vein ruptures and bleeds heavily — apply pressure and seek emergency care',
    ],
    relatedSymptoms: [
      'swollen-legs',
      'hemorrhoids',
      'ankle-pain',
    ],
    tags: [
      'varicose veins',
      'spider veins',
      'leg veins',
      'bulging veins',
      'vein problems',
      'venous insufficiency',
      'leg vein',
    ],
  },
  {
    slug: 'hemorrhoids',
    name: 'Hemorrhoids',
    commonName: 'Piles / hemorrhoids / rectal pain',
    summary:
      'Hemorrhoids are swollen veins in the rectum or anus that cause pain, itching, and sometimes bleeding. They are extremely common and usually manageable with dietary changes and topical treatments.',
    causes: [
      {
        name: 'Chronic Constipation and Straining',
        likelihood: 'very-common',
        description:
          'Repeatedly straining to pass hard stools increases pressure in the rectal veins, causing them to swell and form hemorrhoids.',
        severity: 'medium',
        whatToDo:
          'Increase fiber and water intake to soften stools. Avoid straining. OTC creams (hydrocortisone) and sitz baths relieve symptoms. Stool softeners help.',
      },
      {
        name: 'Pregnancy',
        likelihood: 'very-common',
        description:
          'The growing uterus compresses rectal veins, and increased blood volume in pregnancy leads to hemorrhoid development, especially in the third trimester.',
        severity: 'low',
        whatToDo:
          'High-fiber diet, adequate hydration, and sitz baths. Most pregnancy hemorrhoids resolve after delivery. Topical OTC treatments are generally safe.',
      },
      {
        name: 'Low-Fiber Diet',
        likelihood: 'very-common',
        description:
          'Insufficient dietary fiber leads to harder stools and more difficult bowel movements, chronically increasing venous pressure in the anorectal area.',
        severity: 'medium',
        whatToDo:
          'Gradually increase fiber (fruits, vegetables, whole grains, legumes) to 25-35g daily. Fiber supplements (psyllium) are helpful. Drink at least 8 cups of water.',
      },
      {
        name: 'Obesity',
        likelihood: 'common',
        description:
          'Excess weight increases intraabdominal pressure on rectal veins, contributing to hemorrhoid development and worsening existing ones.',
        severity: 'medium',
        whatToDo:
          'Weight management alongside dietary and lifestyle changes. Exercise also improves bowel regularity.',
      },
      {
        name: 'Prolonged Sitting',
        likelihood: 'common',
        description:
          'Extended sitting — particularly on the toilet — increases venous pressure in the anorectal region.',
        severity: 'low',
        whatToDo:
          'Avoid spending extended time on the toilet. Take walking breaks throughout the day. Do not read on the toilet.',
      },
    ],
    seeDoctorIf: [
      'Rectal bleeding even if you suspect hemorrhoids (to rule out other causes)',
      'Hemorrhoid pain that does not improve with OTC treatment after 1 week',
      'A lump at the anus that is very painful, hard, and bluish (thrombosed hemorrhoid)',
    ],
    emergencyIf: [
      'Heavy rectal bleeding with lightheadedness or dizziness',
    ],
    relatedSymptoms: [
      'constipation',
      'lower-abdominal-pain',
      'varicose-veins',
    ],
    tags: [
      'hemorrhoids',
      'piles',
      'rectal pain',
      'anal itching',
      'rectal bleeding',
      'hemorrhoid pain',
      'blood in stool',
    ],
  },
  {
    slug: 'acid-reflux',
    name: 'Acid Reflux',
    commonName: 'GERD / acid coming up / reflux',
    summary:
      'Acid reflux occurs when stomach acid flows back into the esophagus, causing a burning sensation, sour taste, and discomfort. Chronic reflux (GERD) can damage the esophagus and requires ongoing management.',
    causes: [
      {
        name: 'Overeating',
        likelihood: 'very-common',
        description:
          'Eating large meals fills the stomach and increases pressure on the lower esophageal sphincter, causing acid to overflow into the esophagus.',
        severity: 'low',
        whatToDo:
          'Eat smaller, more frequent meals. Avoid eating within 3 hours of lying down. Sit upright for 30 minutes after eating.',
      },
      {
        name: 'Fatty or Spicy Foods',
        likelihood: 'very-common',
        description:
          'High-fat and spicy foods relax the lower esophageal sphincter and slow gastric emptying, increasing reflux episodes.',
        severity: 'low',
        whatToDo:
          'Identify and avoid personal trigger foods. Common triggers: fried food, chocolate, coffee, alcohol, citrus, and tomatoes.',
      },
      {
        name: 'Obesity',
        likelihood: 'common',
        description:
          'Excess abdominal fat increases pressure on the stomach, pushing acid upward into the esophagus. Weight loss consistently improves GERD symptoms.',
        severity: 'medium',
        whatToDo:
          'Weight loss through diet and exercise. Even a 10% weight reduction significantly reduces reflux frequency.',
      },
      {
        name: 'Hiatal Hernia',
        likelihood: 'common',
        description:
          'A portion of the stomach bulging through the diaphragm weakens the barrier between the stomach and esophagus, worsening acid reflux.',
        severity: 'medium',
        whatToDo:
          'Lifestyle modifications and acid-suppressing medications. Severe hiatal hernias may require surgical repair.',
      },
      {
        name: 'Pregnancy',
        likelihood: 'common',
        description:
          'Hormonal relaxation of the esophageal sphincter and uterine pressure on the stomach cause significant reflux in pregnancy, particularly in the third trimester.',
        severity: 'low',
        whatToDo:
          'Small frequent meals, avoiding triggers, and sleeping with the head elevated. Antacids and H2 blockers considered safe in pregnancy.',
      },
    ],
    seeDoctorIf: [
      'Reflux more than twice a week despite lifestyle changes',
      'Difficulty swallowing or pain when swallowing',
      'Unexplained weight loss with reflux symptoms',
      'Waking at night with reflux or coughing',
    ],
    emergencyIf: [
      'Vomiting blood or material that looks like coffee grounds',
      'Black, tarry stools with reflux symptoms',
    ],
    relatedSymptoms: [
      'heartburn',
      'difficulty-swallowing',
      'dry-cough',
    ],
    tags: [
      'acid reflux',
      'GERD',
      'reflux',
      'acid coming up',
      'stomach acid',
      'heartburn',
      'indigestion',
      'burning throat',
    ],
  },
  {
    slug: 'heartburn',
    name: 'Heartburn',
    commonName: 'Burning in chest / indigestion / acid in throat',
    summary:
      'Heartburn is a burning sensation in the chest or throat caused by stomach acid irritating the esophagus. Despite the name, it has nothing to do with the heart — it is a symptom of acid reflux.',
    causes: [
      {
        name: 'Acid Reflux (GERD)',
        likelihood: 'very-common',
        description:
          'The most common cause — stomach acid flows back into the esophagus, creating a burning sensation behind the breastbone and sour taste.',
        severity: 'medium',
        whatToDo:
          'Antacids provide immediate relief. H2 blockers and PPIs reduce acid production. Lifestyle: avoid triggers, eat smaller meals, elevate head of bed.',
      },
      {
        name: 'Hiatal Hernia',
        likelihood: 'common',
        description:
          'Part of the stomach protruding through the diaphragm weakens the acid barrier, causing frequent heartburn especially after meals and when lying down.',
        severity: 'medium',
        whatToDo:
          'Medical management with PPIs and lifestyle modification is usually effective. Large symptomatic hernias may require surgery.',
      },
      {
        name: 'Pregnancy',
        likelihood: 'common',
        description:
          'Progesterone relaxes the lower esophageal sphincter during pregnancy, causing heartburn that affects up to 80% of pregnant women.',
        severity: 'low',
        whatToDo:
          'Small meals, avoiding triggers, elevating the head when sleeping. Safe antacids include calcium carbonate (Tums). Discuss medication options with your OB.',
      },
      {
        name: 'Trigger Foods and Lifestyle',
        likelihood: 'very-common',
        description:
          'Coffee, alcohol, chocolate, citrus, spicy and fatty foods, smoking, and eating late at night are the most common heartburn triggers.',
        severity: 'low',
        whatToDo:
          'Keep a food diary to identify personal triggers. Avoiding them reduces heartburn frequency significantly.',
      },
      {
        name: 'NSAID Use',
        likelihood: 'common',
        description:
          'Aspirin, ibuprofen, and naproxen irritate the esophageal and stomach lining, triggering or worsening heartburn and sometimes causing ulcers.',
        severity: 'medium',
        whatToDo:
          'Take NSAIDs with food or switch to acetaminophen. Use a PPI alongside long-term NSAID therapy. Discuss alternatives with your doctor.',
      },
    ],
    seeDoctorIf: [
      'Heartburn more than twice a week',
      'Heartburn not responding to OTC antacids',
      'Heartburn with difficulty swallowing or food getting stuck',
      'Heartburn in the context of new chest pain — rule out cardiac causes',
    ],
    emergencyIf: [
      'New chest burning or pressure with sweating, jaw pain, or left arm pain (possible heart attack)',
    ],
    relatedSymptoms: [
      'acid-reflux',
      'difficulty-swallowing',
      'stomach-pain',
    ],
    tags: [
      'heartburn',
      'burning chest',
      'acid indigestion',
      'chest burning',
      'indigestion',
      'reflux',
      'sour stomach',
      'burning throat',
    ],
  },
  {
    slug: 'difficulty-swallowing',
    name: 'Difficulty Swallowing',
    commonName: 'Dysphagia / trouble swallowing / food getting stuck',
    summary:
      'Difficulty swallowing (dysphagia) can range from food feeling like it sticks in the throat to complete inability to swallow. It requires medical evaluation as the cause determines urgency and treatment.',
    causes: [
      {
        name: 'Anxiety',
        likelihood: 'very-common',
        description:
          'Anxiety can cause the sensation of a lump in the throat (globus) and tightening of swallowing muscles, making swallowing feel difficult even without structural cause.',
        severity: 'low',
        whatToDo:
          'Relaxation techniques, addressing underlying anxiety. Globus sensation typically improves with anxiety treatment.',
      },
      {
        name: 'GERD / Esophageal Inflammation',
        likelihood: 'common',
        description:
          'Chronic acid reflux damages the esophageal lining, causing inflammation and scarring that narrows the esophagus and makes swallowing difficult.',
        severity: 'medium',
        whatToDo:
          'See a doctor. PPIs treat GERD. Esophageal strictures may need dilation (stretching procedure). Endoscopy confirms the diagnosis.',
      },
      {
        name: 'Esophageal Stricture',
        likelihood: 'less-common',
        description:
          'Narrowing of the esophagus from scarring (post-reflux, post-radiation) or a Schatzki ring causes solid food to catch and stick.',
        severity: 'medium',
        whatToDo:
          'See a gastroenterologist. Endoscopic dilation is a safe and effective procedure that stretches the narrowing.',
      },
      {
        name: 'Throat Infection or Abscess',
        likelihood: 'common',
        description:
          'Severe tonsillitis, peritonsillar abscess, or epiglottitis cause painful swallowing and difficulty managing secretions.',
        severity: 'high',
        whatToDo:
          'See a doctor promptly. Infections require antibiotics or drainage. Epiglottitis is a medical emergency.',
      },
      {
        name: 'Neurological Cause',
        likelihood: 'rare',
        description:
          'Stroke, Parkinson\'s disease, and motor neuron disease can impair the coordinated muscle movements required for swallowing.',
        severity: 'high',
        whatToDo:
          'See a neurologist. Speech and language therapy can improve swallowing function. Dietary modifications may be needed.',
      },
    ],
    seeDoctorIf: [
      'Difficulty swallowing persists or is progressive',
      'Food consistently gets stuck in the throat or chest',
      'Difficulty swallowing with weight loss',
      'Pain with swallowing',
    ],
    emergencyIf: [
      'Complete inability to swallow or swallow saliva',
      'Difficulty swallowing with severe throat swelling and breathing difficulty',
    ],
    relatedSymptoms: [
      'acid-reflux',
      'heartburn',
      'throat-pain',
    ],
    tags: [
      'difficulty swallowing',
      'dysphagia',
      'food stuck',
      'trouble swallowing',
      'lump in throat',
      'swallowing pain',
      'globus',
    ],
  },
  {
    slug: 'dry-mouth',
    name: 'Dry Mouth',
    commonName: 'Xerostomia / mouth feels dry',
    summary:
      'Dry mouth (xerostomia) occurs when the salivary glands do not produce enough saliva to keep the mouth moist. It can cause discomfort, difficulty speaking and swallowing, and increases the risk of tooth decay.',
    causes: [
      {
        name: 'Dehydration',
        likelihood: 'very-common',
        description:
          'Insufficient fluid intake reduces saliva production, causing dry mouth, thick saliva, and bad breath.',
        severity: 'low',
        whatToDo:
          'Increase water intake throughout the day. Sip water frequently. Avoid alcohol and caffeine which are dehydrating.',
      },
      {
        name: 'Medication Side Effects',
        likelihood: 'very-common',
        description:
          'Over 400 medications cause dry mouth as a side effect — including antihistamines, antidepressants, blood pressure medications, and diuretics.',
        severity: 'medium',
        whatToDo:
          'Discuss with your doctor. Salivary substitutes, frequent water sipping, and sugar-free gum can manage symptoms. Do not stop medications without guidance.',
      },
      {
        name: 'Anxiety',
        likelihood: 'common',
        description:
          'The fight-or-flight response inhibits salivary gland activity, causing the classic dry mouth experienced during nervousness or anxiety.',
        severity: 'low',
        whatToDo:
          'Treating anxiety reduces dry mouth episodes. Stay hydrated, especially in stressful situations.',
      },
      {
        name: 'Sjogren\'s Syndrome',
        likelihood: 'less-common',
        description:
          'An autoimmune condition that attacks moisture-producing glands, causing severe dry mouth and dry eyes (sicca symptoms). Associated with joint pain and fatigue.',
        severity: 'medium',
        whatToDo:
          'See a rheumatologist. Prescription medications (pilocarpine) stimulate saliva production. Frequent dental care is essential to prevent tooth decay.',
      },
      {
        name: 'Mouth Breathing',
        likelihood: 'common',
        description:
          'Chronic mouth breathing due to nasal obstruction dries out oral tissues and reduces saliva effectiveness.',
        severity: 'low',
        whatToDo:
          'Address the underlying nasal congestion. Nasal strips and humidifiers help. Dental care to protect teeth from dryness.',
      },
    ],
    seeDoctorIf: [
      'Severe or persistent dry mouth affecting eating, speaking, or swallowing',
      'Dry mouth with dry eyes (possible Sjogren\'s)',
      'Significant tooth decay developing despite good oral hygiene',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'bad-breath',
      'difficulty-swallowing',
      'bleeding-gums',
    ],
    tags: [
      'dry mouth',
      'xerostomia',
      'mouth dry',
      'no saliva',
      'thirsty mouth',
      'oral dryness',
      'parched mouth',
    ],
  },
  {
    slug: 'bad-breath',
    name: 'Bad Breath',
    commonName: 'Halitosis / mouth odor',
    summary:
      'Bad breath (halitosis) is a common and often embarrassing condition. Most cases originate in the mouth from bacteria, but systemic conditions and diet can also cause persistent breath odor.',
    causes: [
      {
        name: 'Poor Oral Hygiene',
        likelihood: 'very-common',
        description:
          'Food particles and bacteria on teeth, tongue, and gums produce sulfur compounds that cause bad breath. Inadequate brushing and flossing are the primary culprits.',
        severity: 'low',
        whatToDo:
          'Brush twice daily, floss daily, and clean the tongue. See a dentist for professional cleaning. An antiseptic mouthwash can help.',
      },
      {
        name: 'Dry Mouth',
        likelihood: 'common',
        description:
          'Saliva cleanses the mouth and neutralizes odors. Reduced saliva allows bacteria to proliferate, causing bad breath — worse in the morning.',
        severity: 'low',
        whatToDo:
          'Stay hydrated, chew sugar-free gum to stimulate saliva, and see a doctor if dry mouth is medication-related or persistent.',
      },
      {
        name: 'Gum Disease (Periodontal Disease)',
        likelihood: 'common',
        description:
          'Bacteria accumulating in deep gum pockets produce volatile sulfur compounds, causing persistent bad breath that does not improve with brushing.',
        severity: 'medium',
        whatToDo:
          'See a dentist for a periodontal evaluation and professional deep cleaning. Ongoing maintenance is essential.',
      },
      {
        name: 'Tonsil Stones (Tonsilloliths)',
        likelihood: 'common',
        description:
          'Calcified debris collecting in tonsillar crypts produces a strong sulfur odor. Often discovered as small white lumps at the back of the throat.',
        severity: 'low',
        whatToDo:
          'Gargle with salt water. Gentle removal with cotton swab or water flosser. Recurrent severe cases may benefit from tonsillectomy.',
      },
      {
        name: 'GERD',
        likelihood: 'less-common',
        description:
          'Stomach acid and partially digested food refluxing into the mouth cause a sour or foul breath odor that persists despite good oral hygiene.',
        severity: 'medium',
        whatToDo:
          'Treat the underlying GERD with lifestyle changes and acid-suppressing medications. The breath odor resolves as reflux is controlled.',
      },
    ],
    seeDoctorIf: [
      'Bad breath persists despite good oral hygiene',
      'Bad breath with gum pain, bleeding, or loose teeth',
      'Bad breath with a fruity or acetone smell (possible diabetic ketoacidosis)',
      'Chronic bad breath despite dental evaluation',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'dry-mouth',
      'bleeding-gums',
      'acid-reflux',
    ],
    tags: [
      'bad breath',
      'halitosis',
      'mouth odor',
      'breath smells',
      'smelly breath',
      'morning breath',
      'oral hygiene',
    ],
  },
  {
    slug: 'bleeding-gums',
    name: 'Bleeding Gums',
    commonName: 'Gums that bleed / bloody gums when brushing',
    summary:
      'Gums that bleed during brushing or flossing are a common early sign of gum disease. While often mild, bleeding gums can also reflect nutritional deficiencies or systemic health conditions.',
    causes: [
      {
        name: 'Gingivitis',
        likelihood: 'very-common',
        description:
          'Plaque buildup at the gumline causes inflammation, leading to red, swollen gums that bleed easily with brushing. The mildest and most reversible form of gum disease.',
        severity: 'medium',
        whatToDo:
          'Improve brushing technique and floss daily. See a dentist for professional cleaning. With good hygiene, gingivitis is fully reversible.',
      },
      {
        name: 'Vitamin C Deficiency',
        likelihood: 'less-common',
        description:
          'Vitamin C is essential for collagen in gum tissue. Deficiency (scurvy in severe cases) causes swollen, bleeding gums and poor wound healing.',
        severity: 'medium',
        whatToDo:
          'Increase citrus fruits, peppers, and strawberries. Vitamin C supplementation. Dental care. True scurvy requires medical treatment.',
      },
      {
        name: 'Blood Thinners',
        likelihood: 'common',
        description:
          'Warfarin, aspirin, and newer anticoagulants impair clotting, causing gums to bleed more easily and for longer.',
        severity: 'medium',
        whatToDo:
          'Inform your dentist about all blood-thinning medications. Gentle brushing with a soft-bristle brush. Discuss with your prescribing doctor if bleeding is excessive.',
      },
      {
        name: 'Aggressive Brushing',
        likelihood: 'very-common',
        description:
          'Using a hard-bristle toothbrush or applying too much pressure damages the gum tissue and causes bleeding even without underlying disease.',
        severity: 'low',
        whatToDo:
          'Switch to a soft-bristle toothbrush. Use gentle circular motions. Electric toothbrushes often provide better technique.',
      },
      {
        name: 'Periodontitis',
        likelihood: 'common',
        description:
          'Advanced gum disease involving bone and tissue destruction causes gum recession, tooth loosening, and easy bleeding. Without treatment, teeth may be lost.',
        severity: 'high',
        whatToDo:
          'See a periodontist for deep cleaning (scaling and root planing). Surgical intervention may be needed in advanced cases. Ongoing maintenance is essential.',
      },
    ],
    seeDoctorIf: [
      'Gums bleed spontaneously (without brushing)',
      'Bleeding does not stop after applying gentle pressure',
      'Gum recession or loose teeth alongside bleeding',
      'Bleeding with easy bruising elsewhere',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'tooth-pain',
      'bad-breath',
      'bruising-easily',
    ],
    tags: [
      'bleeding gums',
      'gums bleed',
      'bloody gums',
      'gum disease',
      'gingivitis',
      'periodontal',
      'gum bleeding',
    ],
  },
  {
    slug: 'mouth-sores',
    name: 'Mouth Sores',
    commonName: 'Canker sores / cold sores / ulcers in mouth',
    summary:
      'Mouth sores are painful but usually harmless and self-limiting. Canker sores are the most common type, while cold sores are caused by herpes simplex virus. Persistent sores warrant evaluation.',
    causes: [
      {
        name: 'Canker Sores (Aphthous Ulcers)',
        likelihood: 'very-common',
        description:
          'Shallow, oval ulcers with a white or yellow center and red border that appear inside the mouth — not contagious. Causes include stress, minor injury, and certain foods.',
        severity: 'low',
        whatToDo:
          'OTC topical anesthetics and antimicrobial mouthwash speed healing. Most resolve in 1-2 weeks. Avoid spicy foods. A doctor can prescribe stronger treatments for severe cases.',
      },
      {
        name: 'Cold Sores (Herpes Simplex Virus)',
        likelihood: 'common',
        description:
          'HSV-1 causes fluid-filled blisters at or around the lips that crust over and heal in 7-10 days. Highly contagious when blisters are present.',
        severity: 'medium',
        whatToDo:
          'Antiviral medications (acyclovir, valacyclovir) reduce duration if started early. Avoid skin-to-skin contact, kissing, and sharing utensils during an outbreak.',
      },
      {
        name: 'Vitamin Deficiency',
        likelihood: 'common',
        description:
          'Deficiencies in B12, folate, iron, or zinc impair mucosal cell turnover, predisposing to recurrent mouth ulcers.',
        severity: 'medium',
        whatToDo:
          'Blood tests for deficiencies. Appropriate supplementation. A nutritious, balanced diet helps prevent recurrence.',
      },
      {
        name: 'Biting the Cheek',
        likelihood: 'very-common',
        description:
          'Accidental trauma from biting the inner cheek, lip, or tongue creates an ulcer that can be tender for several days.',
        severity: 'low',
        whatToDo:
          'Rinse with warm salt water. Avoid further irritation. Heals naturally in 5-7 days.',
      },
      {
        name: 'Crohn\'s Disease',
        likelihood: 'less-common',
        description:
          'Inflammatory bowel disease can cause mouth ulcers as an extraintestinal manifestation, particularly recurrent aphthous ulcers that are larger and take longer to heal.',
        severity: 'medium',
        whatToDo:
          'See a gastroenterologist for evaluation if recurrent mouth sores accompany GI symptoms. Treating Crohn\'s disease reduces oral manifestations.',
      },
    ],
    seeDoctorIf: [
      'Mouth sore persists more than 3 weeks without healing',
      'Sore is larger than 1 cm or painless',
      'Multiple severe simultaneous outbreaks',
      'Recurring mouth sores with fever or GI symptoms',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'tooth-pain',
      'bad-breath',
      'swollen-lymph-nodes',
    ],
    tags: [
      'mouth sores',
      'canker sores',
      'cold sores',
      'mouth ulcers',
      'lip sores',
      'oral ulcers',
      'aphthous ulcers',
    ],
  },
  {
    slug: 'vision-blurry',
    name: 'Blurry Vision',
    commonName: 'Blurred vision / cannot see clearly',
    summary:
      'Blurry vision is a very common symptom with a wide range of causes, from the mundane (needing glasses) to the serious (retinal detachment or stroke). Sudden onset always warrants urgent evaluation.',
    causes: [
      {
        name: 'Refractive Error (Needing Glasses)',
        likelihood: 'very-common',
        description:
          'Uncorrected nearsightedness, farsightedness, or astigmatism are the most common causes of blurry vision — affecting distance, near, or both.',
        severity: 'low',
        whatToDo:
          'See an optometrist for a comprehensive eye exam and prescription. Corrective lenses (glasses or contacts) or laser surgery resolve this.',
      },
      {
        name: 'Dry Eyes',
        likelihood: 'very-common',
        description:
          'Insufficient tear film causes intermittent blurry vision that typically improves with blinking. Worse with screen use, in dry environments, or with contact lens wear.',
        severity: 'low',
        whatToDo:
          'Artificial tear drops, humidifier, regular screen breaks (20-20-20 rule). Prescription medications available for severe dry eye.',
      },
      {
        name: 'Diabetes (Diabetic Retinopathy)',
        likelihood: 'common',
        description:
          'Elevated blood sugar damages retinal blood vessels, causing progressive blurry vision and eventually vision loss if untreated.',
        severity: 'high',
        whatToDo:
          'Control blood sugar and blood pressure. Annual dilated eye exams are essential. Laser treatment and injections can preserve vision.',
      },
      {
        name: 'Migraines with Aura',
        likelihood: 'common',
        description:
          'Visual aura before a migraine causes temporary blurry vision, zigzag lines, or blind spots that last 20-60 minutes before the headache begins.',
        severity: 'medium',
        whatToDo:
          'See a neurologist if migraines are frequent. Acute treatment with triptans. Preventive medications for frequent migraines.',
      },
      {
        name: 'Cataracts',
        likelihood: 'common',
        description:
          'Clouding of the eye lens causes gradually worsening blurry vision, glare, and difficulty with night vision — most common in people over 60.',
        severity: 'medium',
        whatToDo:
          'See an ophthalmologist. Mild cataracts can be managed with updated glasses. Surgical cataract removal with intraocular lens implant is safe and highly effective.',
      },
    ],
    seeDoctorIf: [
      'Blurry vision that is new or worsening',
      'Blurry vision in one eye only',
      'Blurry vision with floaters or flashes of light',
      'Blurry vision with headache, dizziness, or eye pain',
    ],
    emergencyIf: [
      'Sudden loss of vision in one or both eyes',
      'Sudden blurry vision with headache, confusion, or weakness (possible stroke)',
      'Curtain or shadow descending across vision (possible retinal detachment)',
    ],
    relatedSymptoms: [
      'eye-pain',
      'headache',
      'eye-redness',
    ],
    tags: [
      'blurry vision',
      'blurred vision',
      'vision problems',
      'cannot see clearly',
      'fuzzy vision',
      'vision blur',
      'eyesight problems',
    ],
  },
  {
    slug: 'eye-redness',
    name: 'Eye Redness',
    commonName: 'Red eyes / pink eye / bloodshot eyes',
    summary:
      'Red or bloodshot eyes are among the most common eye complaints. Most causes are benign and self-limiting, but certain patterns — particularly with pain or vision changes — warrant prompt evaluation.',
    causes: [
      {
        name: 'Dry Eyes',
        likelihood: 'very-common',
        description:
          'Insufficient tear production or poor tear quality leads to surface inflammation, causing redness, grittiness, and burning, worse with screen time.',
        severity: 'low',
        whatToDo:
          'Artificial tear drops, reduced screen time, and increased blinking. A humidifier helps in dry environments.',
      },
      {
        name: 'Allergic Conjunctivitis',
        likelihood: 'very-common',
        description:
          'Allergens trigger histamine release in the conjunctiva, causing bilateral red, watery, intensely itchy eyes. Seasonal pollen is the most common trigger.',
        severity: 'low',
        whatToDo:
          'Antihistamine eye drops (ketotifen) and oral antihistamines. Avoid allergens. Cold compresses soothe itchy eyes.',
      },
      {
        name: 'Viral Conjunctivitis (Pink Eye)',
        likelihood: 'very-common',
        description:
          'Highly contagious viral infection causing red, watery eyes with discharge. Often accompanies a cold. Spreads easily through hand-to-eye contact.',
        severity: 'medium',
        whatToDo:
          'Warm compresses and artificial tears. Wash hands frequently. Avoid touching eyes. Resolves in 7-14 days. See a doctor if severe or not improving.',
      },
      {
        name: 'Contact Lens Overuse',
        likelihood: 'common',
        description:
          'Overwearing contacts reduces oxygen to the cornea, causing redness, discomfort, and increased infection risk.',
        severity: 'medium',
        whatToDo:
          'Remove contacts and wear glasses. Follow proper wear schedule. See an eye doctor if redness persists after lens removal.',
      },
      {
        name: 'Subconjunctival Hemorrhage',
        likelihood: 'less-common',
        description:
          'A burst blood vessel in the white of the eye creates a bright red patch. Usually harmless, caused by coughing, straining, or minor trauma.',
        severity: 'low',
        whatToDo:
          'No treatment needed — resolves in 1-3 weeks. See a doctor if recurrent or if vision is affected.',
      },
    ],
    seeDoctorIf: [
      'Eye redness with significant eye pain',
      'Vision changes with red eye',
      'Redness not improving after 1 week',
      'Purulent (yellow-green) discharge from the eye',
    ],
    emergencyIf: [
      'Eye redness with sudden severe pain, nausea, and halos around lights (possible acute glaucoma)',
      'Chemical splashed in the eye — irrigate immediately with water and seek emergency care',
    ],
    relatedSymptoms: [
      'eye-pain',
      'vision-blurry',
      'sneezing',
    ],
    tags: [
      'red eyes',
      'eye redness',
      'pink eye',
      'bloodshot eyes',
      'eye irritation',
      'conjunctivitis',
      'eye inflammation',
    ],
  },
  {
    slug: 'eye-pain',
    name: 'Eye Pain',
    commonName: 'Eye ache / pain in or around the eye',
    summary:
      'Eye pain can range from a superficial gritty sensation to deep orbital pain. The character and location of pain, combined with associated symptoms, help determine whether it is a routine issue or a potential emergency.',
    causes: [
      {
        name: 'Dry Eyes',
        likelihood: 'very-common',
        description:
          'Insufficient tear film causes surface irritation and a burning, aching, or gritty sensation. Worse at the end of the day or after prolonged screen use.',
        severity: 'low',
        whatToDo:
          'Artificial tears, reduce screen time (20-20-20 rule), and use a humidifier. Prescription drops for severe dry eye.',
      },
      {
        name: 'Conjunctivitis',
        likelihood: 'common',
        description:
          'Inflammation of the conjunctiva from infection or allergy causes a burning or aching discomfort alongside redness and discharge.',
        severity: 'medium',
        whatToDo:
          'Antibiotic drops for bacterial conjunctivitis. Antihistamine drops for allergic. Viral resolves on its own. Warm compresses help.',
      },
      {
        name: 'Corneal Abrasion',
        likelihood: 'common',
        description:
          'A scratch on the cornea (from a foreign body, contact lens, or fingernail) causes intense sharp pain, tearing, and photosensitivity.',
        severity: 'medium',
        whatToDo:
          'See an eye doctor or urgent care. Antibiotic eye drops prevent infection. Patching is rarely needed. Most heal within 1-3 days.',
      },
      {
        name: 'Acute Angle-Closure Glaucoma',
        likelihood: 'rare',
        description:
          'Sudden increase in intraocular pressure causes severe eye pain, headache, nausea, vomiting, halos around lights, and rapidly blurring vision.',
        severity: 'emergency',
        whatToDo:
          'This is an ophthalmic emergency — call 911 or go to the ER immediately. Untreated acute glaucoma can cause permanent blindness within hours.',
      },
      {
        name: 'Migraines',
        likelihood: 'common',
        description:
          'Migraines commonly cause pain around or behind the eye along with visual disturbances, nausea, and light sensitivity.',
        severity: 'medium',
        whatToDo:
          'Rest in a dark quiet room. Triptans or OTC pain relievers. See a neurologist for frequent migraines.',
      },
    ],
    seeDoctorIf: [
      'Eye pain with vision changes',
      'Pain with photosensitivity not explained by migraine',
      'Pain that persists more than 24-48 hours',
      'Eye pain after any trauma',
    ],
    emergencyIf: [
      'Sudden severe eye pain with nausea, halos around lights, and blurry vision',
      'Eye pain after chemical exposure — irrigate immediately and seek emergency care',
    ],
    relatedSymptoms: [
      'eye-redness',
      'vision-blurry',
      'headache',
    ],
    tags: [
      'eye pain',
      'eye ache',
      'pain in eye',
      'eye hurts',
      'eye discomfort',
      'orbital pain',
      'eye pressure',
    ],
  },
  {
    slug: 'ringing-in-ears',
    name: 'Ringing in the Ears',
    commonName: 'Tinnitus / ears ringing',
    summary:
      'Tinnitus — the perception of sound without an external source — is experienced as ringing, buzzing, hissing, or clicking. It affects millions of people and can significantly impact quality of life, particularly sleep.',
    causes: [
      {
        name: 'Noise-Induced Damage',
        likelihood: 'very-common',
        description:
          'Prolonged or sudden loud noise exposure damages inner ear hair cells, causing permanent tinnitus and often hearing loss. The most preventable cause.',
        severity: 'medium',
        whatToDo:
          'Protect hearing from further damage with earplugs or earmuffs. Avoid loud environments. Treat with sound therapy, CBT, and hearing aids if hearing loss is present.',
      },
      {
        name: 'Earwax Buildup',
        likelihood: 'common',
        description:
          'Impacted earwax presses against the eardrum, causing tinnitus, fullness, and muffled hearing that resolves completely with wax removal.',
        severity: 'low',
        whatToDo:
          'See a doctor for earwax removal. Do not use cotton swabs. OTC ear drops can soften wax before irrigation.',
      },
      {
        name: 'Age-Related Hearing Loss (Presbycusis)',
        likelihood: 'common',
        description:
          'Gradual deterioration of inner ear function with age causes both hearing loss and tinnitus, typically bilateral and high-frequency.',
        severity: 'medium',
        whatToDo:
          'See an audiologist. Hearing aids often reduce tinnitus perception by amplifying external sounds. Sound masking devices help sleep.',
      },
      {
        name: 'Medication (Ototoxic)',
        likelihood: 'common',
        description:
          'High-dose aspirin, some antibiotics (gentamicin), antimalarials, and chemotherapy drugs can cause tinnitus and hearing loss.',
        severity: 'medium',
        whatToDo:
          'Report tinnitus to your prescribing doctor promptly. Dose adjustment or medication change may prevent further damage.',
      },
      {
        name: 'Meniere\'s Disease',
        likelihood: 'less-common',
        description:
          'A disorder of inner ear fluid causing episodic vertigo, tinnitus, hearing loss, and ear fullness — symptoms come in attacks lasting minutes to hours.',
        severity: 'medium',
        whatToDo:
          'See an ENT specialist. Low-sodium diet, diuretics, and vestibular rehabilitation are key management tools.',
      },
    ],
    seeDoctorIf: [
      'Tinnitus in one ear only',
      'Tinnitus with hearing loss',
      'Tinnitus with dizziness or vertigo',
      'Tinnitus significantly disrupting sleep or daily life',
    ],
    emergencyIf: [
      'Sudden onset of tinnitus with sudden hearing loss (call an ENT the same day — may be treatable if caught early)',
    ],
    relatedSymptoms: [
      'hearing-loss',
      'ear-pain',
      'dizziness',
    ],
    tags: [
      'ringing in ears',
      'tinnitus',
      'ears ringing',
      'buzzing in ears',
      'ear noise',
      'hissing ears',
      'ear ringing',
    ],
  },
  {
    slug: 'hearing-loss',
    name: 'Hearing Loss',
    commonName: 'Trouble hearing / hard of hearing',
    summary:
      'Hearing loss affects people of all ages. It may be sudden or gradual, and can be caused by reversible issues like earwax or fluid — or permanent damage from noise exposure and aging.',
    causes: [
      {
        name: 'Earwax Blockage',
        likelihood: 'very-common',
        description:
          'Accumulated earwax in the ear canal blocks sound transmission, causing muffled hearing, tinnitus, and fullness that resolves completely with removal.',
        severity: 'low',
        whatToDo:
          'See a doctor or nurse for safe earwax removal. Softening drops help. Do not use cotton swabs.',
      },
      {
        name: 'Noise-Induced Hearing Loss',
        likelihood: 'very-common',
        description:
          'Repeated exposure to loud noises permanently damages cochlear hair cells, causing progressive high-frequency hearing loss and tinnitus.',
        severity: 'medium',
        whatToDo:
          'Use hearing protection immediately. See an audiologist for hearing testing and potential hearing aids. Damage cannot be reversed.',
      },
      {
        name: 'Age-Related Hearing Loss',
        likelihood: 'common',
        description:
          'Presbycusis is the gradual sensorineural hearing loss that comes with aging. Typically bilateral and symmetric, starting with high-frequency sounds.',
        severity: 'medium',
        whatToDo:
          'See an audiologist. Modern hearing aids are highly effective and discreet. Regular hearing tests for adults over 60 are recommended.',
      },
      {
        name: 'Ear Infection',
        likelihood: 'common',
        description:
          'Acute middle ear infection or fluid behind the eardrum (otitis media with effusion) causes temporary conductive hearing loss that resolves with treatment.',
        severity: 'medium',
        whatToDo:
          'See a doctor. Antibiotics for bacterial infection. Hearing typically returns fully after the infection clears.',
      },
      {
        name: 'Otosclerosis',
        likelihood: 'less-common',
        description:
          'Abnormal bone growth in the middle ear causes progressive conductive hearing loss, often starting in young adults. More common in women and those with family history.',
        severity: 'medium',
        whatToDo:
          'See an ENT specialist. Hearing aids and surgery (stapedectomy) are effective treatments.',
      },
    ],
    seeDoctorIf: [
      'Sudden hearing loss (seek ENT evaluation within 24-48 hours)',
      'Hearing loss in one ear only',
      'Hearing loss with dizziness, tinnitus, or ear pain',
      'Gradual hearing loss affecting communication',
    ],
    emergencyIf: [
      'Sudden complete hearing loss in one or both ears (medical urgency — treat within days for best outcome)',
    ],
    relatedSymptoms: [
      'ringing-in-ears',
      'ear-pain',
      'dizziness',
    ],
    tags: [
      'hearing loss',
      'hard of hearing',
      'cannot hear',
      'hearing problems',
      'deafness',
      'muffled hearing',
      'hearing difficulty',
    ],
  },
  {
    slug: 'loss-of-smell',
    name: 'Loss of Smell',
    commonName: 'Cannot smell / anosmia / reduced smell',
    summary:
      'Loss of smell (anosmia) can be temporary or permanent. COVID-19 brought this symptom into widespread public awareness, but nasal congestion and sinus disease are actually the most common causes.',
    causes: [
      {
        name: 'Nasal Congestion and Sinusitis',
        likelihood: 'very-common',
        description:
          'Inflammation and mucus block airflow to the olfactory receptors at the top of the nasal cavity, causing temporary smell reduction that resolves as congestion clears.',
        severity: 'low',
        whatToDo:
          'Saline rinse, decongestants, and nasal steroids. Smell typically returns as inflammation subsides.',
      },
      {
        name: 'COVID-19',
        likelihood: 'very-common',
        description:
          'SARS-CoV-2 can directly damage olfactory nerve cells, causing sudden loss of smell (and often taste) without nasal congestion. Can persist for months (long COVID).',
        severity: 'medium',
        whatToDo:
          'Rest and monitor. Olfactory training (sniffing essential oils regularly) aids recovery. Most recover within weeks to months, but some have prolonged loss.',
      },
      {
        name: 'Nasal Polyps',
        likelihood: 'common',
        description:
          'Soft growths in the nasal passages physically block airflow to smell receptors and can damage olfactory epithelium with chronic inflammation.',
        severity: 'medium',
        whatToDo:
          'Nasal corticosteroid sprays. Surgical polypectomy for large polyps. Biologic medications for recurrent polyposis.',
      },
      {
        name: 'Aging',
        likelihood: 'common',
        description:
          'Olfactory receptor cells naturally decline with age. Smell loss in the elderly is gradual and can affect food enjoyment and safety (not smelling gas or smoke).',
        severity: 'medium',
        whatToDo:
          'Olfactory training may slow decline. Ensure working smoke and gas detectors. Discuss with a doctor to rule out treatable causes.',
      },
      {
        name: 'Zinc Deficiency',
        likelihood: 'less-common',
        description:
          'Zinc is essential for olfactory receptor function. Deficiency can impair smell and taste, particularly in older adults or those with malabsorption.',
        severity: 'medium',
        whatToDo:
          'Blood test for zinc levels. Supplementation if deficient. Eat zinc-rich foods (meat, seeds, legumes).',
      },
    ],
    seeDoctorIf: [
      'Smell loss persisting more than 4 weeks',
      'Loss of smell without nasal congestion',
      'Loss of smell with headache or facial pain',
      'Smell loss in older adults (possible neurological cause)',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'loss-of-taste',
      'stuffy-nose',
      'sinus-pressure',
    ],
    tags: [
      'loss of smell',
      'anosmia',
      'cannot smell',
      'smell gone',
      'no smell',
      'reduced smell',
      'smell problems',
      'COVID smell',
    ],
  },
  {
    slug: 'loss-of-taste',
    name: 'Loss of Taste',
    commonName: 'Cannot taste / ageusia / taste changes',
    summary:
      'Loss of taste (ageusia) or altered taste (dysgeusia) is often caused by congestion blocking smell receptors — since taste is largely smell. COVID-19 can directly impair taste nerve function.',
    causes: [
      {
        name: 'COVID-19',
        likelihood: 'very-common',
        description:
          'One of the most prominent symptoms of COVID-19 is sudden loss or alteration of taste, often occurring without nasal congestion. Can persist as long COVID.',
        severity: 'medium',
        whatToDo:
          'Olfactory and taste retraining exercises. Most recover within weeks to months. Persistent loss warrants follow-up with an ENT.',
      },
      {
        name: 'Nasal Congestion',
        likelihood: 'very-common',
        description:
          'Since much of what we perceive as taste is actually smell, blocked nasal passages dramatically reduce taste perception even when taste buds are intact.',
        severity: 'low',
        whatToDo:
          'Treat the underlying congestion with saline, decongestants, and nasal steroids. Taste returns as smell improves.',
      },
      {
        name: 'Zinc Deficiency',
        likelihood: 'common',
        description:
          'Zinc supports both taste bud cell renewal and olfactory function. Deficiency causes gradual dulling of taste and smell.',
        severity: 'medium',
        whatToDo:
          'Get zinc levels checked. Supplementation when deficient. Zinc-rich diet.',
      },
      {
        name: 'Medication Side Effects',
        likelihood: 'common',
        description:
          'Many medications — including antibiotics, ACE inhibitors, chemotherapy, and metronidazole — cause metallic taste or taste distortion.',
        severity: 'low',
        whatToDo:
          'Discuss with your prescribing doctor. Most medication-induced taste changes resolve when the medication is stopped.',
      },
      {
        name: 'Nerve Damage',
        likelihood: 'rare',
        description:
          'Damage to the chorda tympani nerve (from ear surgery, head trauma, or dental procedures) can impair taste on the front of the tongue.',
        severity: 'medium',
        whatToDo:
          'See an ENT or neurologist. Some cases recover spontaneously over months.',
      },
    ],
    seeDoctorIf: [
      'Loss of taste persisting more than 4 weeks',
      'Taste loss without nasal congestion',
      'Metallic or foul taste that does not resolve',
      'Taste loss with other neurological symptoms',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'loss-of-smell',
      'dry-mouth',
      'sore-throat',
    ],
    tags: [
      'loss of taste',
      'ageusia',
      'cannot taste',
      'taste gone',
      'no taste',
      'metallic taste',
      'taste problems',
      'food tasteless',
    ],
  },
  {
    slug: 'frequent-headaches',
    name: 'Frequent Headaches',
    commonName: 'Recurring headaches / headaches every day',
    summary:
      'Frequent headaches — occurring 15 or more days per month — are a significant health burden. Identifying the headache type and triggers is key to effective prevention and treatment.',
    causes: [
      {
        name: 'Tension-Type Headache',
        likelihood: 'very-common',
        description:
          'The most common recurring headache — a dull bilateral pressure or tightening pain, often linked to muscle tension, stress, or poor posture.',
        severity: 'low',
        whatToDo:
          'OTC analgesics, stress management, physical therapy, and regular sleep and hydration. Amitriptyline is an effective preventive medication for chronic tension headaches.',
      },
      {
        name: 'Dehydration',
        likelihood: 'very-common',
        description:
          'Even mild chronic dehydration causes regular headaches that respond quickly to adequate fluid intake.',
        severity: 'low',
        whatToDo:
          'Track daily water intake and aim for 8+ cups. A headache diary often reveals dehydration as a consistent trigger.',
      },
      {
        name: 'Caffeine Withdrawal',
        likelihood: 'common',
        description:
          'Regular caffeine use creates physiological dependence — missing the usual dose triggers a throbbing withdrawal headache, often daily.',
        severity: 'low',
        whatToDo:
          'Gradually reduce caffeine intake over 2-4 weeks. Consistent daily consumption at a lower level is better than irregular use.',
      },
      {
        name: 'Sleep Disorders',
        likelihood: 'common',
        description:
          'Poor sleep quality, insomnia, or sleep apnea are strongly linked to frequent headaches, particularly morning headaches.',
        severity: 'medium',
        whatToDo:
          'Address sleep hygiene. A sleep study may be needed for suspected sleep apnea. Treating sleep disorders often dramatically reduces headache frequency.',
      },
      {
        name: 'Hormonal Fluctuations',
        likelihood: 'common',
        description:
          'Estrogen fluctuations around menstruation, ovulation, or with hormonal contraception are among the most consistent headache triggers in women.',
        severity: 'medium',
        whatToDo:
          'Track headaches with the menstrual cycle. NSAIDs taken before expected hormonal headaches can prevent them. Discuss hormonal options with your doctor.',
      },
    ],
    seeDoctorIf: [
      'Headaches occurring more than 3 times per week',
      'Pattern of headaches changing or worsening',
      'Headaches requiring pain medication more than 3 days per week (medication overuse)',
      'Headaches with neurological symptoms',
    ],
    emergencyIf: [
      'Sudden, severe "thunderclap" headache unlike any before',
      'Headache with fever, stiff neck, and rash',
    ],
    relatedSymptoms: [
      'migraine',
      'sinus-pressure',
      'fatigue',
    ],
    tags: [
      'frequent headaches',
      'headaches every day',
      'recurring headaches',
      'daily headache',
      'chronic headache',
      'headache often',
    ],
  },
  {
    slug: 'migraine',
    name: 'Migraine',
    commonName: 'Migraine headache / severe headache',
    summary:
      'Migraines are debilitating headache attacks often accompanied by nausea, light and sound sensitivity, and sometimes visual aura. They are among the most disabling neurological conditions globally.',
    causes: [
      {
        name: 'Hormonal Triggers',
        likelihood: 'very-common',
        description:
          'Estrogen fluctuations are the most consistent migraine trigger in women — causing migraines around menstruation, ovulation, and during perimenopause.',
        severity: 'high',
        whatToDo:
          'Track migraines with your cycle. Hormonal management strategies including extended-cycle contraceptives or estrogen supplements around menstruation can prevent menstrual migraines.',
      },
      {
        name: 'Stress',
        likelihood: 'very-common',
        description:
          'Both ongoing stress and the "letdown" after stress (weekends, post-deadline) trigger migraines through complex cortical and vascular mechanisms.',
        severity: 'high',
        whatToDo:
          'Regular exercise, adequate sleep, and stress management reduce migraine frequency. Biofeedback and CBT are evidence-based preventive therapies.',
      },
      {
        name: 'Dietary Triggers',
        likelihood: 'common',
        description:
          'Aged cheeses, processed meats, red wine, MSG, and skipping meals are well-known dietary migraine triggers in susceptible individuals.',
        severity: 'medium',
        whatToDo:
          'Keep a headache diary to identify personal triggers. Eat regular meals to avoid blood sugar dips. Avoid identified food triggers.',
      },
      {
        name: 'Sleep Disruption',
        likelihood: 'common',
        description:
          'Both too little and too much sleep trigger migraines. Irregular sleep schedules are particularly problematic for migraine-prone individuals.',
        severity: 'medium',
        whatToDo:
          'Maintain a consistent sleep schedule, even on weekends. Avoid oversleeping. Good sleep hygiene is one of the most effective migraine prevention strategies.',
      },
      {
        name: 'Light and Sound Sensitivity',
        likelihood: 'common',
        description:
          'Bright lights, fluorescent lighting, loud sounds, and strong smells can trigger or worsen migraine attacks.',
        severity: 'medium',
        whatToDo:
          'Use tinted lenses (FL-41 tint) in bright environments. Manage the environment during an attack — dark, quiet room. Preventive medication helps reduce sensitivity.',
      },
    ],
    seeDoctorIf: [
      'Migraines occurring more than 4 days per month (preventive therapy indicated)',
      'Migraines not responding to OTC pain relievers',
      'New aura symptoms or change in aura pattern',
      'Migraines with neurological symptoms lasting beyond the attack',
    ],
    emergencyIf: [
      'First-ever severe headache or "worst headache of your life"',
      'Migraine-like headache with fever, stiff neck, or confusion',
      'Aura symptoms (weakness, speech changes) that do not resolve',
    ],
    relatedSymptoms: [
      'frequent-headaches',
      'nausea',
      'vision-blurry',
    ],
    tags: [
      'migraine',
      'migraine headache',
      'severe headache',
      'migraine attack',
      'aura migraine',
      'one sided headache',
      'throbbing headache',
    ],
  },
  {
    slug: 'cluster-headache',
    name: 'Cluster Headache',
    commonName: 'Cluster headaches / eye pain headache',
    summary:
      'Cluster headaches are among the most painful conditions known to medicine. They occur in cyclical patterns ("clusters") and cause excruciating unilateral pain around the eye, with characteristic autonomic features.',
    causes: [
      {
        name: 'Alcohol Consumption',
        likelihood: 'common',
        description:
          'Alcohol is the most reliable trigger during a cluster period — even small amounts can precipitate an attack. This sensitivity disappears between cluster periods.',
        severity: 'high',
        whatToDo:
          'Avoid alcohol completely during a cluster period. This is one of the few modifiable triggers. Triptans and high-flow oxygen are the most effective acute treatments.',
      },
      {
        name: 'Smoking',
        likelihood: 'common',
        description:
          'Cluster headaches are strongly associated with heavy smoking. The exact mechanism is unclear, but nicotine may trigger attacks through hypothalamic pathways.',
        severity: 'high',
        whatToDo:
          'Smoking cessation is strongly recommended. While stopping smoking may not end cluster periods, it reduces overall frequency and severity.',
      },
      {
        name: 'Disrupted Sleep',
        likelihood: 'common',
        description:
          'Cluster attacks frequently occur at the same time daily — often 1-2 hours after falling asleep — suggesting a strong link to circadian rhythms and REM sleep.',
        severity: 'high',
        whatToDo:
          'Maintain consistent sleep times. Preventive medications (verapamil, lithium) reduce attack frequency. Melatonin may help regulate the circadian component.',
      },
      {
        name: 'Seasonal Patterns',
        likelihood: 'common',
        description:
          'Cluster periods often occur at the same time each year, particularly around the spring and autumn equinoxes when daylight duration changes rapidly.',
        severity: 'medium',
        whatToDo:
          'Anticipate seasonal clusters and start preventive medication before the expected start of the cluster period.',
      },
      {
        name: 'Nitrate Exposure',
        likelihood: 'less-common',
        description:
          'Nitrates in processed meats, red wine, and nitroglycerin medications can trigger cluster attacks during an active cluster period.',
        severity: 'medium',
        whatToDo:
          'Avoid nitrate-containing foods and medications during cluster periods. Inform your doctor about cluster headaches when being prescribed nitroglycerin.',
      },
    ],
    seeDoctorIf: [
      'Suspected cluster headaches — specialist diagnosis is essential',
      'Current treatments not adequately controlling attacks',
      'Cluster period lasting more than 3 months',
    ],
    emergencyIf: [
      'Headache described as the worst of your life that is new in character',
    ],
    relatedSymptoms: [
      'migraine',
      'eye-pain',
      'frequent-headaches',
    ],
    tags: [
      'cluster headache',
      'cluster headaches',
      'eye pain headache',
      'severe one sided headache',
      'headache behind eye',
      'trigeminal',
    ],
  },
  {
    slug: 'sinus-pressure',
    name: 'Sinus Pressure',
    commonName: 'Sinus congestion / facial pressure / sinus pain',
    summary:
      'Sinus pressure is a feeling of fullness, pain, or pressure in the forehead, cheeks, and around the eyes caused by inflamed or blocked sinuses. It is one of the most common reasons for medical visits.',
    causes: [
      {
        name: 'Acute Sinusitis',
        likelihood: 'very-common',
        description:
          'Viral or bacterial infection inflames the sinus cavities, causing pressure, pain, colored nasal discharge, and reduced smell. Often follows a cold.',
        severity: 'medium',
        whatToDo:
          'Saline nasal rinse, steam inhalation, decongestants, and pain relievers. Bacterial sinusitis (symptoms persisting 10+ days or worsening) may need antibiotics.',
      },
      {
        name: 'Allergic Rhinitis',
        likelihood: 'very-common',
        description:
          'Nasal inflammation from allergens blocks sinus drainage, causing pressure and congestion that worsens during high pollen seasons.',
        severity: 'low',
        whatToDo:
          'Antihistamines, nasal steroid sprays, and saline rinses. Allergy testing and immunotherapy for persistent allergic sinusitis.',
      },
      {
        name: 'Common Cold',
        likelihood: 'very-common',
        description:
          'Viral upper respiratory infection causes nasal and sinus mucosa swelling, leading to sinus pressure as drainage is impaired.',
        severity: 'low',
        whatToDo:
          'Symptomatic treatment: decongestants, nasal spray, steam. Resolves with the cold, typically in 7-10 days.',
      },
      {
        name: 'Nasal Polyps',
        likelihood: 'less-common',
        description:
          'Soft tissue growths block sinus openings, causing chronic sinus pressure, congestion, and loss of smell that does not respond to typical treatments.',
        severity: 'medium',
        whatToDo:
          'Nasal corticosteroid sprays reduce polyp size. Surgery (functional endoscopic sinus surgery) may be needed for large polyps.',
      },
      {
        name: 'Dry Air',
        likelihood: 'common',
        description:
          'Dry indoor air desiccates nasal mucous membranes, impairing cilia function and sinus drainage, causing pressure and discomfort.',
        severity: 'low',
        whatToDo:
          'Humidifier (40-50% humidity), saline nasal spray, and adequate hydration. Breathe through the nose to warm and humidify air.',
      },
    ],
    seeDoctorIf: [
      'Sinus pressure lasting more than 10 days',
      'Severe facial pain or swelling',
      'High fever with sinus symptoms',
      'Recurrent sinus infections (3+ per year)',
    ],
    emergencyIf: [
      'Severe headache with stiff neck and fever (possible meningitis — sinusitis complication)',
      'Swelling around the eye with vision changes (possible orbital cellulitis)',
    ],
    relatedSymptoms: [
      'stuffy-nose',
      'runny-nose',
      'headache',
    ],
    tags: [
      'sinus pressure',
      'sinus pain',
      'facial pressure',
      'sinusitis',
      'sinus congestion',
      'cheek pain',
      'forehead pressure',
    ],
  },
  {
    slug: 'jaw-pain',
    name: 'Jaw Pain',
    commonName: 'Jaw ache / TMJ pain / sore jaw',
    summary:
      'Jaw pain has many possible causes — from common conditions like TMJ disorder and teeth grinding to referred pain from dental abscesses or even the heart. The pattern and associated symptoms help identify the source.',
    causes: [
      {
        name: 'TMJ Disorder',
        likelihood: 'very-common',
        description:
          'Dysfunction of the temporomandibular joint causes jaw pain, clicking, limited mouth opening, and referred pain to the ear and head. Often related to stress or teeth grinding.',
        severity: 'medium',
        whatToDo:
          'Soft diet, heat therapy, jaw exercises, and NSAIDs. A dentist can provide a night guard. Physical therapy and muscle relaxants help for persistent cases.',
      },
      {
        name: 'Bruxism (Teeth Grinding)',
        likelihood: 'very-common',
        description:
          'Clenching or grinding teeth — often at night — overworks the jaw muscles and TMJ, causing morning jaw pain, headaches, and worn teeth.',
        severity: 'medium',
        whatToDo:
          'Custom night guard from a dentist. Stress management to reduce grinding. Muscle relaxants for acute severe cases.',
      },
      {
        name: 'Dental Abscess',
        likelihood: 'common',
        description:
          'A tooth or gum abscess can cause radiating jaw pain, swelling, and fever. The pain may be severe and constant.',
        severity: 'high',
        whatToDo:
          'See a dentist urgently. Abscesses require drainage and antibiotics. Untreated dental infections can spread to the jaw bone or neck.',
      },
      {
        name: 'Arthritis',
        likelihood: 'less-common',
        description:
          'Osteoarthritis or rheumatoid arthritis affecting the TMJ causes chronic jaw pain, stiffness, and crepitus (grating sound) with movement.',
        severity: 'medium',
        whatToDo:
          'NSAIDs, oral splints, physical therapy, and in severe cases, corticosteroid injections into the joint.',
      },
      {
        name: 'Muscle Tension',
        likelihood: 'very-common',
        description:
          'Chronic stress causes habitual jaw clenching throughout the day, creating muscle fatigue and pain in the jaw, temples, and neck.',
        severity: 'low',
        whatToDo:
          'Stress reduction, jaw awareness (keeping teeth slightly apart when not eating), and relaxation exercises for the jaw muscles.',
      },
    ],
    seeDoctorIf: [
      'Jaw pain with fever and swelling (possible abscess)',
      'Limited mouth opening that is worsening',
      'Jaw pain with chest pain or left arm pain (possible heart — get emergency evaluation)',
      'Jaw pain after trauma',
    ],
    emergencyIf: [
      'Jaw pain with chest tightness and shortness of breath (possible heart attack)',
    ],
    relatedSymptoms: [
      'tooth-pain',
      'ear-pain',
      'neck-pain',
    ],
    tags: [
      'jaw pain',
      'jaw ache',
      'TMJ pain',
      'sore jaw',
      'jaw clicking',
      'jaw stiffness',
      'teeth grinding pain',
    ],
  },
  {
    slug: 'chest-tightness',
    name: 'Chest Tightness',
    commonName: 'Tight chest / chest constriction / chest pressure',
    summary:
      'Chest tightness is a sensation of pressure, squeezing, or constriction in the chest. While anxiety and asthma are common causes, chest tightness can also be a symptom of cardiac disease and requires careful evaluation.',
    causes: [
      {
        name: 'Anxiety and Panic',
        likelihood: 'very-common',
        description:
          'Anxiety causes physical chest tightening from muscle tension and hyperventilation. Panic attacks produce intense chest tightness, shortness of breath, and fear — mimicking cardiac events.',
        severity: 'medium',
        whatToDo:
          'Slow, diaphragmatic breathing. If the first episode of chest tightness, seek medical evaluation to rule out cardiac causes. Treat underlying anxiety.',
      },
      {
        name: 'Asthma',
        likelihood: 'common',
        description:
          'Bronchoconstriction in asthma causes chest tightness along with wheezing, cough, and shortness of breath — typically triggered by exercise, allergens, or cold air.',
        severity: 'medium',
        whatToDo:
          'Use a rescue inhaler (salbutamol). See a doctor for diagnosis and a long-term management plan including inhaled corticosteroids.',
      },
      {
        name: 'GERD',
        likelihood: 'common',
        description:
          'Acid reflux can cause a burning pressure sensation in the chest that is difficult to distinguish from cardiac pain — especially in the middle of the night.',
        severity: 'medium',
        whatToDo:
          'Antacids and lifestyle modification. If chest tightness is new or severe, cardiac causes must be ruled out before attributing to reflux.',
      },
      {
        name: 'Costochondritis',
        likelihood: 'common',
        description:
          'Inflammation of the cartilage connecting ribs to the breastbone causes localized chest tightness and tenderness that worsens with pressing on the sternum or ribs.',
        severity: 'low',
        whatToDo:
          'NSAIDs and rest. Reassurance that it is benign. Resolves in days to weeks. Ice or heat for comfort.',
      },
      {
        name: 'Angina',
        likelihood: 'less-common',
        description:
          'Reduced blood flow to the heart muscle causes chest tightness, pressure, or squeezing — typically with exertion — that radiates to the jaw or left arm and resolves with rest.',
        severity: 'high',
        whatToDo:
          'See a cardiologist. Angina requires evaluation and management with medications, lifestyle changes, and possibly cardiac intervention.',
      },
    ],
    seeDoctorIf: [
      'New chest tightness — cardiac causes must be ruled out',
      'Chest tightness that occurs with exertion',
      'Chest tightness with shortness of breath or dizziness',
      'Any chest tightness that is worsening or changing',
    ],
    emergencyIf: [
      'Chest tightness with sweating, jaw pain, left arm pain, or shortness of breath (possible heart attack)',
      'Severe chest tightness with sudden onset at rest',
    ],
    relatedSymptoms: [
      'shortness-of-breath',
      'irregular-heartbeat',
      'acid-reflux',
    ],
    tags: [
      'chest tightness',
      'tight chest',
      'chest pressure',
      'chest constriction',
      'chest squeezing',
      'chest discomfort',
    ],
  },
  {
    slug: 'rib-pain',
    name: 'Rib Pain',
    commonName: 'Rib ache / pain along ribs / side pain',
    summary:
      'Rib pain can result from injury, inflammation, or problems with the organs beneath — including the lungs, liver, or kidneys. The exact location and whether it worsens with breathing helps identify the cause.',
    causes: [
      {
        name: 'Muscle Strain',
        likelihood: 'very-common',
        description:
          'Intercostal muscle strain from coughing, sneezing, exercise, or lifting causes localized rib pain that worsens with movement and deep breathing.',
        severity: 'low',
        whatToDo:
          'Rest, ice, and NSAIDs. Avoid activities that worsen the pain. Most strains heal within 2-4 weeks.',
      },
      {
        name: 'Costochondritis',
        likelihood: 'common',
        description:
          'Inflammation of the costochondral cartilage causes chest and rib pain reproduced by pressing on the affected ribs — sharp pain with movement or deep breaths.',
        severity: 'low',
        whatToDo:
          'NSAIDs and rest. Reassurance is important — costochondritis is benign. Resolves over weeks.',
      },
      {
        name: 'Bruised or Fractured Rib',
        likelihood: 'common',
        description:
          'Direct trauma to the chest wall can bruise or fracture a rib, causing severe localized pain that is significantly worsened with breathing, coughing, or movement.',
        severity: 'high',
        whatToDo:
          'See a doctor for X-ray. Rib fractures are managed with pain control to allow normal breathing. Multiple rib fractures may require hospital care.',
      },
      {
        name: 'Pleuritis',
        likelihood: 'less-common',
        description:
          'Inflammation of the pleura (lung lining) from infection, autoimmune disease, or pulmonary embolism causes a sharp, stabbing pain that worsens with each breath.',
        severity: 'high',
        whatToDo:
          'See a doctor promptly — pleuritis can indicate a serious underlying condition (PE, pneumonia, lupus). NSAIDs treat the pain while the cause is evaluated.',
      },
      {
        name: 'Shingles (Herpes Zoster)',
        likelihood: 'less-common',
        description:
          'Reactivation of the varicella-zoster virus in a thoracic dermatome causes burning rib pain — often before the rash appears, making diagnosis difficult initially.',
        severity: 'medium',
        whatToDo:
          'See a doctor promptly. Antiviral medications are most effective when started within 72 hours of rash onset. Pain management is essential.',
      },
    ],
    seeDoctorIf: [
      'Rib pain after trauma (possible fracture)',
      'Pain worsening with breathing, especially with fever or cough',
      'Burning rib pain with skin changes or rash',
      'Severe one-sided pain radiating to the back',
    ],
    emergencyIf: [
      'Rib pain after significant trauma with difficulty breathing',
      'Sudden severe rib pain with shortness of breath (possible pulmonary embolism)',
    ],
    relatedSymptoms: [
      'chest-tightness',
      'shortness-of-breath',
      'cough',
    ],
    tags: [
      'rib pain',
      'rib ache',
      'side pain',
      'chest wall pain',
      'intercostal pain',
      'pain breathing',
      'rib tender',
    ],
  },
  {
    slug: 'stomach-cramps',
    name: 'Stomach Cramps',
    commonName: 'Stomach spasms / belly cramps / abdominal cramps',
    summary:
      'Stomach cramps — spasmodic abdominal pain — are extremely common. They range from benign causes like gas and IBS to more serious conditions like appendicitis. Accompanying symptoms are key diagnostic clues.',
    causes: [
      {
        name: 'IBS (Irritable Bowel Syndrome)',
        likelihood: 'very-common',
        description:
          'Chronic gut condition causing cramping, bloating, and altered bowel habits. Cramps often improve after a bowel movement. Stress and certain foods are common triggers.',
        severity: 'medium',
        whatToDo:
          'Low-FODMAP diet, stress management, fiber supplementation. Antispasmodics (dicyclomine) and other medications help. See a gastroenterologist for persistent IBS.',
      },
      {
        name: 'Gas and Bloating',
        likelihood: 'very-common',
        description:
          'Trapped intestinal gas causes sharp, moving cramps that shift location. Usually resolves with passage of gas.',
        severity: 'low',
        whatToDo:
          'Simethicone (Gas-X), avoid gas-producing foods, walk, and gently massage the abdomen. Resolves quickly.',
      },
      {
        name: 'Food Poisoning',
        likelihood: 'common',
        description:
          'Bacterial toxins from contaminated food cause intense cramping, nausea, vomiting, and diarrhea within hours of eating.',
        severity: 'medium',
        whatToDo:
          'Stay hydrated. Most cases resolve in 24-48 hours. See a doctor if severe, prolonged, or bloody diarrhea occurs.',
      },
      {
        name: 'Menstrual Cramps',
        likelihood: 'common',
        description:
          'Prostaglandin-driven uterine contractions cause cramping in the lower abdomen and back during menstruation.',
        severity: 'medium',
        whatToDo:
          'NSAIDs (ibuprofen, naproxen) taken at the onset of pain are very effective. Heat pad, exercise, and hormonal contraceptives reduce severity.',
      },
      {
        name: 'Appendicitis',
        likelihood: 'less-common',
        description:
          'Inflammation of the appendix causes cramping that starts around the navel and localizes to the right lower abdomen, often with fever and loss of appetite.',
        severity: 'emergency',
        whatToDo:
          'If pain migrates to the right lower abdomen and worsens with movement, seek emergency care. Appendicitis requires surgical treatment.',
      },
    ],
    seeDoctorIf: [
      'Cramps with fever',
      'Cramps that are severe or progressively worsening',
      'Cramps with blood in stool',
      'Cramps with significant vomiting lasting more than 24 hours',
    ],
    emergencyIf: [
      'Severe right lower abdominal pain with fever and nausea (possible appendicitis)',
      'Board-like rigid abdomen with severe pain',
    ],
    relatedSymptoms: [
      'stomach-pain',
      'lower-abdominal-pain',
      'bloating',
    ],
    tags: [
      'stomach cramps',
      'abdominal cramps',
      'belly cramps',
      'stomach spasms',
      'gut cramps',
      'tummy cramps',
      'cramps',
    ],
  },
  {
    slug: 'lower-abdominal-pain',
    name: 'Lower Abdominal Pain',
    commonName: 'Lower belly pain / lower stomach pain',
    summary:
      'Lower abdominal pain is a common complaint with many possible causes. Location (left, right, or central), whether it is constant or cramping, and associated symptoms are key to determining the cause.',
    causes: [
      {
        name: 'IBS',
        likelihood: 'very-common',
        description:
          'IBS commonly causes lower abdominal cramping, bloating, and changes in bowel habit. Pain often improves after passing gas or stool.',
        severity: 'medium',
        whatToDo:
          'Dietary modifications (low-FODMAP), stress management, antispasmodics, and probiotics. See a gastroenterologist for diagnosis.',
      },
      {
        name: 'Urinary Tract Infection (UTI)',
        likelihood: 'common',
        description:
          'Bladder infection causes suprapubic (lower central) pain, frequent urination, burning, and urgency — very common in women.',
        severity: 'medium',
        whatToDo:
          'See a doctor for urine test and antibiotics. Drink plenty of water. Cranberry products may prevent recurrence but do not treat active infection.',
      },
      {
        name: 'Menstrual Cramps',
        likelihood: 'very-common',
        description:
          'Cyclical lower abdominal cramping from uterine contractions during menstruation — affects most women and can range from mild to severe.',
        severity: 'medium',
        whatToDo:
          'NSAIDs (ibuprofen) are very effective when taken at the onset of pain. Heat pad, exercise, and hormonal contraceptives reduce menstrual pain.',
      },
      {
        name: 'Ovarian Cyst',
        likelihood: 'common',
        description:
          'Fluid-filled sacs on the ovary can cause one-sided lower abdominal pain, bloating, and discomfort. Most resolve spontaneously.',
        severity: 'medium',
        whatToDo:
          'See a gynecologist for ultrasound. Most cysts are monitored. Large or ruptured cysts may need intervention.',
      },
      {
        name: 'Appendicitis',
        likelihood: 'less-common',
        description:
          'Classic right lower quadrant pain starting centrally and localizing to the right lower abdomen, with fever, nausea, and loss of appetite.',
        severity: 'emergency',
        whatToDo:
          'Call 911 or go to the ER if this pattern is suspected. Appendicitis requires emergency surgery.',
      },
    ],
    seeDoctorIf: [
      'Pain persisting more than 1-2 days',
      'Pain with fever, chills, or vomiting',
      'Pain with vaginal discharge or abnormal bleeding',
      'Recurrent lower abdominal pain',
    ],
    emergencyIf: [
      'Severe right lower abdominal pain with fever (possible appendicitis)',
      'Sudden severe lower abdominal pain with shoulder tip pain in a woman of childbearing age (possible ectopic pregnancy)',
    ],
    relatedSymptoms: [
      'stomach-cramps',
      'painful-urination',
      'painful-periods',
    ],
    tags: [
      'lower abdominal pain',
      'lower belly pain',
      'lower stomach pain',
      'pelvic pain',
      'lower ab pain',
      'iliac pain',
    ],
  },
  {
    slug: 'upper-abdominal-pain',
    name: 'Upper Abdominal Pain',
    commonName: 'Upper stomach pain / epigastric pain',
    summary:
      'Pain in the upper abdomen (epigastric region) can arise from the stomach, liver, gallbladder, or pancreas. The character of the pain — burning, cramping, or stabbing — and timing relative to meals provides important diagnostic clues.',
    causes: [
      {
        name: 'Acid Reflux and Gastritis',
        likelihood: 'very-common',
        description:
          'Stomach acid irritating the esophagus and stomach lining causes burning epigastric pain, often worse after meals or when lying down.',
        severity: 'medium',
        whatToDo:
          'Antacids and PPIs. Avoid trigger foods, alcohol, and NSAIDs. Eat smaller meals. See a doctor for persistent symptoms.',
      },
      {
        name: 'Gastric or Duodenal Ulcer',
        likelihood: 'common',
        description:
          'A sore in the stomach or duodenum lining causes a gnawing or burning pain, often occurring between meals or waking you at night. H. pylori or NSAIDs are common causes.',
        severity: 'medium',
        whatToDo:
          'See a doctor. H. pylori requires antibiotic treatment. Avoid NSAIDs and alcohol. PPIs promote healing.',
      },
      {
        name: 'Gallstones',
        likelihood: 'common',
        description:
          'Gallstones blocking the bile duct cause episodic right upper quadrant pain (biliary colic) after fatty meals, often radiating to the right shoulder or back.',
        severity: 'high',
        whatToDo:
          'See a doctor for ultrasound. Symptomatic gallstones usually require surgical removal (cholecystectomy). A low-fat diet reduces attack frequency while awaiting treatment.',
      },
      {
        name: 'Pancreatitis',
        likelihood: 'less-common',
        description:
          'Inflammation of the pancreas causes severe, constant upper abdominal pain radiating to the back, often with nausea and vomiting. Can be triggered by alcohol or gallstones.',
        severity: 'emergency',
        whatToDo:
          'Seek emergency care. Pancreatitis requires hospital admission for IV fluids, pain management, and monitoring. Do not eat or drink until evaluated.',
      },
      {
        name: 'Liver Issues',
        likelihood: 'less-common',
        description:
          'Hepatitis, fatty liver, or liver abscess can cause right upper quadrant discomfort, fullness, or pain, sometimes with jaundice and fatigue.',
        severity: 'high',
        whatToDo:
          'See a doctor for liver function tests and imaging. Treatment depends on the underlying liver condition.',
      },
    ],
    seeDoctorIf: [
      'Upper abdominal pain lasting more than a few days',
      'Pain that is progressively worsening',
      'Pain with jaundice, dark urine, or pale stools',
      'Pain after fatty meals (possible gallstones)',
    ],
    emergencyIf: [
      'Severe upper abdominal pain radiating to the back with vomiting (possible pancreatitis)',
      'Upper abdominal pain with signs of shock (pale, sweaty, weak pulse)',
    ],
    relatedSymptoms: [
      'heartburn',
      'acid-reflux',
      'stomach-pain',
    ],
    tags: [
      'upper abdominal pain',
      'upper stomach pain',
      'epigastric pain',
      'upper belly pain',
      'gallbladder pain',
      'stomach ache upper',
    ],
  },
  {
    slug: 'groin-pain',
    name: 'Groin Pain',
    commonName: 'Groin ache / inner thigh pain',
    summary:
      'Groin pain — discomfort in the area where the abdomen meets the thigh — is common in athletes and active individuals. It can also be caused by hernias, lymph node swelling, or kidney stones.',
    causes: [
      {
        name: 'Muscle Strain',
        likelihood: 'very-common',
        description:
          'The adductor muscles of the inner thigh are commonly strained during sudden direction changes, kicking, or sprinting. Causes acute groin pain and tenderness.',
        severity: 'medium',
        whatToDo:
          'RICE protocol (rest, ice, compression, elevation). NSAIDs. Gradual return to activity with physical therapy. Most strains heal in 2-6 weeks.',
      },
      {
        name: 'Hernia',
        likelihood: 'common',
        description:
          'An inguinal hernia — tissue pushing through a weak spot in the abdominal wall — causes a bulge and aching groin pain that worsens with coughing, bending, or lifting.',
        severity: 'medium',
        whatToDo:
          'See a doctor or surgeon for evaluation. Symptomatic hernias require surgical repair. A strangulated hernia (blood supply cut off) is an emergency.',
      },
      {
        name: 'Kidney Stones',
        likelihood: 'common',
        description:
          'Stones passing through the ureter cause severe colicky flank pain that radiates to the groin and inner thigh as the stone moves.',
        severity: 'high',
        whatToDo:
          'See a doctor for imaging and pain management. Drink plenty of water. Small stones may pass naturally. Larger stones may need intervention.',
      },
      {
        name: 'Swollen Lymph Nodes',
        likelihood: 'common',
        description:
          'Inguinal lymph nodes enlarge in response to infections in the lower body — leg wounds, STIs, or other pelvic infections.',
        severity: 'medium',
        whatToDo:
          'See a doctor to identify the source infection. Persistent, painless, firm lymph nodes without infection require further investigation.',
      },
      {
        name: 'Hip Flexor Strain',
        likelihood: 'common',
        description:
          'The iliopsoas muscle group connects the lower back to the femur. Strain causes deep groin and hip pain that worsens with hip flexion.',
        severity: 'medium',
        whatToDo:
          'Rest, ice, and targeted stretching of the hip flexors. Physical therapy and gradual return to activity.',
      },
    ],
    seeDoctorIf: [
      'Groin bulge that cannot be pushed back in (possible hernia)',
      'Groin pain with fever (possible lymph node infection or abscess)',
      'Severe colicky groin pain with nausea (possible kidney stone)',
      'Groin pain after trauma',
    ],
    emergencyIf: [
      'Hernia bulge that is hard, tender, and cannot be reduced (strangulated hernia)',
      'Severe unilateral groin pain with scrotal swelling and redness in a young man (possible testicular torsion)',
    ],
    relatedSymptoms: [
      'lower-abdominal-pain',
      'hip-pain',
      'painful-urination',
    ],
    tags: [
      'groin pain',
      'groin ache',
      'inner thigh pain',
      'groin strain',
      'inguinal pain',
      'hip groin pain',
    ],
  },
  {
    slug: 'tailbone-pain',
    name: 'Tailbone Pain',
    commonName: 'Coccyx pain / pain at base of spine',
    summary:
      'Tailbone pain (coccydynia) is localized pain at the very bottom of the spine, typically worsened by sitting on hard surfaces or transitioning from sitting to standing. Most cases are caused by injury or prolonged sitting.',
    causes: [
      {
        name: 'Injury from Fall',
        likelihood: 'very-common',
        description:
          'Falling onto a hard surface can bruise or fracture the coccyx, causing acute tailbone pain that persists for weeks to months.',
        severity: 'medium',
        whatToDo:
          'Use a donut-shaped cushion when sitting. NSAIDs for pain. Most heal without intervention. See a doctor if pain is severe or persistent.',
      },
      {
        name: 'Prolonged Sitting',
        likelihood: 'very-common',
        description:
          'Sitting for long periods on hard or ill-fitting surfaces creates pressure on the coccyx, gradually causing irritation and pain.',
        severity: 'low',
        whatToDo:
          'Use a coccyx cushion. Take regular standing and walking breaks. Ergonomic seating adjustments. Stretching the piriformis and gluteal muscles helps.',
      },
      {
        name: 'Childbirth',
        likelihood: 'common',
        description:
          'Vaginal delivery can injure or stress the coccyx, particularly in prolonged or difficult labors, causing postpartum tailbone pain.',
        severity: 'medium',
        whatToDo:
          'Coccyx cushion, gentle stretching, and NSAIDs. Physical therapy, including internal manipulation, is effective. Most cases resolve within months.',
      },
      {
        name: 'Poor Posture',
        likelihood: 'common',
        description:
          'Slouched sitting posture increases pressure on the coccyx, causing cumulative irritation over time.',
        severity: 'low',
        whatToDo:
          'Posture correction, lumbar support, and ergonomic chair adjustment. Core strengthening exercises reduce spinal stress.',
      },
      {
        name: 'Pilonidal Cyst',
        likelihood: 'less-common',
        description:
          'A cyst near the tailbone from ingrown hair or skin debris causes localized pain, swelling, and sometimes infection.',
        severity: 'medium',
        whatToDo:
          'See a doctor or surgeon. Infected pilonidal cysts require drainage. Recurrent cysts may need surgical excision.',
      },
    ],
    seeDoctorIf: [
      'Tailbone pain persisting more than 4 weeks',
      'Pain radiating down the legs',
      'Pain with bowel movements or urination',
      'Visible swelling or redness near the tailbone',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'lower-abdominal-pain',
      'hip-pain',
      'numbness-tingling',
    ],
    tags: [
      'tailbone pain',
      'coccyx pain',
      'coccydynia',
      'pain sitting',
      'pain bottom of spine',
      'sacral pain',
    ],
  },
  {
    slug: 'frequent-burping',
    name: 'Frequent Burping',
    commonName: 'Excessive burping / belching a lot',
    summary:
      'Burping is a normal body function for releasing swallowed air from the stomach. Excessive or uncontrollable belching can indicate underlying digestive issues or behaviors that introduce excess air.',
    causes: [
      {
        name: 'Swallowing Air (Aerophagia)',
        likelihood: 'very-common',
        description:
          'Eating quickly, talking while eating, chewing gum, or sucking on hard candy causes swallowing of excess air into the stomach.',
        severity: 'low',
        whatToDo:
          'Eat slowly and mindfully, avoid chewing gum, use a straw cautiously. Most aerophagia resolves with behavioral modification.',
      },
      {
        name: 'GERD',
        likelihood: 'common',
        description:
          'Acid reflux prompts repeated swallowing to clear the esophagus, which introduces air into the stomach and causes belching.',
        severity: 'medium',
        whatToDo:
          'Treat GERD with antacids, PPIs, and lifestyle changes. Reducing reflux frequency reduces belching.',
      },
      {
        name: 'Overeating',
        likelihood: 'very-common',
        description:
          'Eating large meals distends the stomach, which releases gas upward through the esophagus as a pressure-relieving mechanism.',
        severity: 'low',
        whatToDo:
          'Eat smaller, more frequent meals. Sit upright after eating. Avoid carbonated beverages.',
      },
      {
        name: 'Carbonated Drinks',
        likelihood: 'very-common',
        description:
          'Carbon dioxide dissolved in carbonated beverages is released as gas in the stomach, causing belching.',
        severity: 'low',
        whatToDo:
          'Reduce or eliminate carbonated beverages. Allow drinks to go flat if sensitivity is high.',
      },
      {
        name: 'Gastroparesis',
        likelihood: 'less-common',
        description:
          'Delayed gastric emptying (often from diabetes or post-viral) causes food to sit in the stomach longer, promoting gas production and frequent belching.',
        severity: 'medium',
        whatToDo:
          'See a doctor for gastric emptying study. Low-fat, small frequent meals. Medications that speed gastric emptying are available.',
      },
    ],
    seeDoctorIf: [
      'Frequent burping with heartburn, regurgitation, or chest pain',
      'Belching with abdominal bloating and pain',
      'New onset excessive belching without dietary explanation',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'acid-reflux',
      'excessive-gas',
      'heartburn',
    ],
    tags: [
      'burping',
      'belching',
      'frequent burping',
      'excessive burping',
      'belching a lot',
      'gas burping',
    ],
  },
  {
    slug: 'excessive-gas',
    name: 'Excessive Gas',
    commonName: 'Too much gas / flatulence / gassiness',
    summary:
      'Passing gas (flatulence) is normal — averaging 14-20 times daily. Excessive gas beyond this causes bloating, discomfort, and social embarrassment. Dietary causes are most common, but persistent gassiness may indicate a digestive condition.',
    causes: [
      {
        name: 'High-Fiber Foods',
        likelihood: 'very-common',
        description:
          'Beans, lentils, cruciferous vegetables, and other high-fiber foods are fermented by gut bacteria, producing gas as a natural byproduct.',
        severity: 'low',
        whatToDo:
          'Gradually increase fiber intake to allow gut bacteria to adapt. Digestive enzymes (Beano) help with beans and vegetables. Cook vegetables thoroughly.',
      },
      {
        name: 'Lactose Intolerance',
        likelihood: 'very-common',
        description:
          'Inability to digest lactose (milk sugar) allows it to be fermented by colonic bacteria, producing significant gas, bloating, and diarrhea after dairy.',
        severity: 'medium',
        whatToDo:
          'Reduce or eliminate dairy. Lactase enzyme supplements enable dairy consumption. Lactose-free dairy products are an alternative.',
      },
      {
        name: 'IBS',
        likelihood: 'common',
        description:
          'IBS causes heightened visceral sensitivity — normal amounts of gut gas feel excessively painful and uncomfortable. Altered gut motility worsens gas retention.',
        severity: 'medium',
        whatToDo:
          'Low-FODMAP diet dramatically reduces gas in IBS. Probiotics and antispasmodics can help. See a gastroenterologist.',
      },
      {
        name: 'Swallowing Air',
        likelihood: 'common',
        description:
          'Air swallowed with food, drinks, or nervous habits travels through the GI tract and exits as flatulence.',
        severity: 'low',
        whatToDo:
          'Eat slowly, avoid carbonated drinks, and chew with mouth closed.',
      },
      {
        name: 'Celiac Disease',
        likelihood: 'less-common',
        description:
          'Gluten triggers immune damage to the small intestine in celiac disease, impairing absorption and causing excessive gas, bloating, and diarrhea.',
        severity: 'medium',
        whatToDo:
          'See a doctor for blood tests and biopsy. A strict gluten-free diet completely resolves symptoms.',
      },
    ],
    seeDoctorIf: [
      'Excessive gas with diarrhea, weight loss, or blood in stool',
      'Gas not improving despite dietary changes',
      'Significant abdominal bloating and distension',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'frequent-burping',
      'stomach-cramps',
      'bloating',
    ],
    tags: [
      'excessive gas',
      'flatulence',
      'gassy',
      'too much gas',
      'passing gas',
      'bloating gas',
      'stomach gas',
    ],
  },
  {
    slug: 'blood-in-urine',
    name: 'Blood in Urine',
    commonName: 'Hematuria / blood in pee / pink urine',
    summary:
      'Seeing blood in the urine (hematuria) is always a symptom that should prompt medical evaluation. While most causes are benign (UTI, kidney stones), it can occasionally indicate serious conditions like bladder cancer.',
    causes: [
      {
        name: 'Urinary Tract Infection',
        likelihood: 'very-common',
        description:
          'Bacterial infection of the bladder or urethra causes inflammation that leads to blood in the urine, along with burning, frequency, and urgency.',
        severity: 'medium',
        whatToDo:
          'See a doctor for urine culture and antibiotics. Drink plenty of water. Blood in urine resolves as the infection clears.',
      },
      {
        name: 'Kidney Stones',
        likelihood: 'common',
        description:
          'Stones scratching the urinary tract lining cause blood in the urine — often with flank pain or colicky pain radiating to the groin.',
        severity: 'high',
        whatToDo:
          'See a doctor for imaging. Pain management and hydration. Small stones may pass. Larger stones need urological intervention.',
      },
      {
        name: 'Bladder Infection',
        likelihood: 'common',
        description:
          'Cystitis causes bladder wall inflammation, resulting in blood in the urine, suprapubic pain, and urinary frequency.',
        severity: 'medium',
        whatToDo:
          'See a doctor for antibiotics and urine culture.',
      },
      {
        name: 'Kidney Injury',
        likelihood: 'less-common',
        description:
          'Blunt trauma to the kidneys (sports injury, fall, accident) can cause blood in urine from renal contusion or laceration.',
        severity: 'high',
        whatToDo:
          'Seek medical care after any trauma causing hematuria. CT scan assesses injury severity.',
      },
      {
        name: 'Bladder Cancer',
        likelihood: 'rare',
        description:
          'Painless blood in urine — particularly in older adults who smoke — is the classic presentation of bladder cancer.',
        severity: 'high',
        whatToDo:
          'See a doctor promptly. Urine cytology and cystoscopy are diagnostic. Early detection greatly improves prognosis.',
      },
    ],
    seeDoctorIf: [
      'Any visible blood in urine warrants medical evaluation',
      'Microscopic hematuria found on urinalysis',
      'Blood in urine with flank or back pain',
    ],
    emergencyIf: [
      'Heavy bleeding causing bright red urine with clots and urinary retention',
    ],
    relatedSymptoms: [
      'painful-urination',
      'lower-abdominal-pain',
      'frequent-urination',
    ],
    tags: [
      'blood in urine',
      'hematuria',
      'blood in pee',
      'pink urine',
      'red urine',
      'bloody urine',
      'urine blood',
    ],
  },
  {
    slug: 'painful-urination',
    name: 'Painful Urination',
    commonName: 'Burning when peeing / dysuria',
    summary:
      'Painful or burning urination (dysuria) is a common symptom most often caused by urinary tract infections. It can occur in men and women and usually responds well to treatment.',
    causes: [
      {
        name: 'Urinary Tract Infection',
        likelihood: 'very-common',
        description:
          'Bacterial infection of the bladder or urethra causes burning, stinging pain with urination, along with urgency, frequency, and sometimes fever.',
        severity: 'medium',
        whatToDo:
          'See a doctor for urine test and antibiotics. Drink plenty of water and cranberry juice. Do not delay treatment as infections can spread to the kidneys.',
      },
      {
        name: 'Sexually Transmitted Infection',
        likelihood: 'common',
        description:
          'Chlamydia, gonorrhea, and herpes can all cause urethral inflammation and painful urination, sometimes with discharge.',
        severity: 'high',
        whatToDo:
          'See a doctor for STI testing and appropriate antibiotic or antiviral treatment. Inform sexual partners. Use protection to prevent recurrence.',
      },
      {
        name: 'Kidney Stones',
        likelihood: 'common',
        description:
          'A stone passing through the ureter into the bladder causes severe flank pain, and as it passes through the urethra causes burning on urination.',
        severity: 'high',
        whatToDo:
          'Seek medical care for pain management and imaging. Stay well-hydrated. Urological intervention may be needed.',
      },
      {
        name: 'Interstitial Cystitis',
        likelihood: 'less-common',
        description:
          'Chronic bladder pain syndrome causing persistent pelvic discomfort, urinary urgency, frequency, and painful urination without bacterial infection.',
        severity: 'medium',
        whatToDo:
          'See a urologist. Treatment includes dietary changes, physical therapy, oral medications, and bladder instillations.',
      },
      {
        name: 'Prostatitis',
        likelihood: 'common',
        description:
          'Inflammation or infection of the prostate gland in men causes painful urination, pelvic pain, and sometimes fever and difficulty urinating.',
        severity: 'medium',
        whatToDo:
          'See a doctor. Bacterial prostatitis requires prolonged antibiotic treatment. Chronic prostatitis involves a broader management approach.',
      },
    ],
    seeDoctorIf: [
      'Painful urination persisting more than a day',
      'Urinary pain with fever or back pain (possible kidney infection)',
      'Urinary symptoms with discharge',
      'Recurrent UTIs (3+ per year)',
    ],
    emergencyIf: [
      'Painful urination with high fever, chills, and severe back pain (possible pyelonephritis)',
      'Complete inability to urinate with severe pain (urinary retention)',
    ],
    relatedSymptoms: [
      'blood-in-urine',
      'lower-abdominal-pain',
      'frequent-urination',
    ],
    tags: [
      'painful urination',
      'burning when peeing',
      'dysuria',
      'burning urine',
      'pain peeing',
      'stinging urination',
      'UTI pain',
    ],
  },
  {
    slug: 'vaginal-discharge',
    name: 'Vaginal Discharge',
    commonName: 'Unusual discharge / vaginal fluid',
    summary:
      'Some vaginal discharge is normal — clear or white, odorless, and varies throughout the menstrual cycle. Changes in color, odor, consistency, or amount can indicate infection requiring treatment.',
    causes: [
      {
        name: 'Normal Physiological Discharge',
        likelihood: 'very-common',
        description:
          'Clear to white, odorless discharge that varies through the cycle is normal. It increases at ovulation, during pregnancy, and with arousal.',
        severity: 'low',
        whatToDo:
          'No treatment needed. Maintain good hygiene with gentle washing (water only in the vaginal opening). Avoid douching.',
      },
      {
        name: 'Bacterial Vaginosis (BV)',
        likelihood: 'very-common',
        description:
          'Overgrowth of anaerobic bacteria causes a thin, gray-white discharge with a distinctive fishy odor, especially after sex.',
        severity: 'medium',
        whatToDo:
          'See a doctor for diagnosis and antibiotic treatment (metronidazole or clindamycin). BV can increase risk of STIs if untreated.',
      },
      {
        name: 'Yeast Infection (Candidiasis)',
        likelihood: 'very-common',
        description:
          'Overgrowth of Candida causes thick, white, cottage cheese-like discharge with intense itching, burning, and vulvar redness.',
        severity: 'medium',
        whatToDo:
          'OTC antifungal creams or suppositories (clotrimazole, miconazole). Oral fluconazole is available by prescription. See a doctor if first episode or recurrent.',
      },
      {
        name: 'Sexually Transmitted Infection',
        likelihood: 'common',
        description:
          'Chlamydia, gonorrhea, and trichomoniasis cause abnormal discharge — yellow-green, frothy, or purulent — often with odor, itching, and pelvic discomfort.',
        severity: 'high',
        whatToDo:
          'See a doctor for STI testing. Antibiotic treatment is required. Notify and treat partners. Use barrier contraception.',
      },
      {
        name: 'Trichomoniasis',
        likelihood: 'common',
        description:
          'A parasitic STI causing a frothy, yellow-green, malodorous discharge with genital itching and burning. Transmitted sexually.',
        severity: 'medium',
        whatToDo:
          'See a doctor for diagnosis (wet mount) and treatment with metronidazole. Both partners must be treated simultaneously.',
      },
    ],
    seeDoctorIf: [
      'Discharge with strong or unpleasant odor',
      'Yellow, green, or gray discharge',
      'Discharge with pelvic pain or fever',
      'Significant itching, burning, or vulvar changes',
    ],
    emergencyIf: [
      'Discharge with severe pelvic pain and fever (possible pelvic inflammatory disease)',
    ],
    relatedSymptoms: [
      'painful-urination',
      'lower-abdominal-pain',
      'missed-period',
    ],
    tags: [
      'vaginal discharge',
      'unusual discharge',
      'vaginal odor',
      'discharge',
      'white discharge',
      'yeast infection',
      'BV',
    ],
  },
  {
    slug: 'missed-period',
    name: 'Missed Period',
    commonName: 'Late period / no period / missed menstruation',
    summary:
      'A missed period is most commonly caused by pregnancy, but stress, weight changes, and hormonal disorders can also disrupt the menstrual cycle. Any sexually active person with a missed period should take a pregnancy test.',
    causes: [
      {
        name: 'Pregnancy',
        likelihood: 'very-common',
        description:
          'A fertilized egg implanting in the uterus stops menstruation via hCG hormone production. The most common reason for a missed period in sexually active individuals.',
        severity: 'medium',
        whatToDo:
          'Take a home pregnancy test. If positive, see a healthcare provider for prenatal care. If negative and period does not return, see a doctor.',
      },
      {
        name: 'Stress',
        likelihood: 'very-common',
        description:
          'Physical or emotional stress suppresses GnRH, disrupting the hormonal cascade that triggers ovulation and menstruation.',
        severity: 'medium',
        whatToDo:
          'Address the source of stress. Periods typically return once the stress is reduced. If periods remain absent for 3+ months, see a doctor.',
      },
      {
        name: 'Extreme Exercise or Low Body Weight',
        likelihood: 'common',
        description:
          'Excessive exercise or very low body fat percentage disrupts hypothalamic function, suppressing reproductive hormones and stopping periods (functional hypothalamic amenorrhea).',
        severity: 'medium',
        whatToDo:
          'Reduce exercise intensity and ensure adequate calorie intake. Recovery may take months. See a doctor — bone density loss can occur with prolonged amenorrhea.',
      },
      {
        name: 'PCOS (Polycystic Ovary Syndrome)',
        likelihood: 'common',
        description:
          'Hormonal imbalance in PCOS causes irregular or absent ovulation, leading to infrequent, irregular, or missed periods.',
        severity: 'medium',
        whatToDo:
          'See a gynecologist or endocrinologist. Diagnosis involves hormone tests and ultrasound. Treatment depends on symptoms and fertility goals.',
      },
      {
        name: 'Thyroid Disorder',
        likelihood: 'common',
        description:
          'Both hypothyroidism and hyperthyroidism can disrupt the hormonal regulation of the menstrual cycle, causing irregular or absent periods.',
        severity: 'medium',
        whatToDo:
          'TSH blood test. Treating the thyroid condition usually restores regular menstruation.',
      },
    ],
    seeDoctorIf: [
      'Missed period with negative pregnancy test',
      'Periods absent for 3 or more months (secondary amenorrhea)',
      'Irregular periods with other PCOS symptoms (acne, excess hair)',
      'Missing periods with hot flashes (possible premature menopause)',
    ],
    emergencyIf: [
      'Missed period with severe one-sided pelvic pain and positive pregnancy test (possible ectopic pregnancy)',
    ],
    relatedSymptoms: [
      'painful-periods',
      'vaginal-discharge',
      'mood-swings',
    ],
    tags: [
      'missed period',
      'late period',
      'no period',
      'missed menstruation',
      'period late',
      'irregular period',
      'amenorrhea',
    ],
  },
  {
    slug: 'painful-periods',
    name: 'Painful Periods',
    commonName: 'Period pain / dysmenorrhea / menstrual cramps',
    summary:
      'Painful periods (dysmenorrhea) are one of the most common gynecological complaints. Primary dysmenorrhea has no underlying cause, while secondary dysmenorrhea is caused by conditions like endometriosis or fibroids.',
    causes: [
      {
        name: 'Primary Dysmenorrhea',
        likelihood: 'very-common',
        description:
          'Prostaglandins produced during menstruation cause uterine contractions and cramping. Pain typically begins with the period and lasts 1-3 days. No underlying condition.',
        severity: 'medium',
        whatToDo:
          'NSAIDs (ibuprofen, naproxen) taken at the onset of pain are very effective. Heat pad, exercise, and hormonal contraceptives reduce pain. Omega-3 fatty acids may help.',
      },
      {
        name: 'Endometriosis',
        likelihood: 'common',
        description:
          'Endometrial tissue growing outside the uterus causes severe, debilitating period pain, pain with sex, bowel or bladder symptoms, and often infertility.',
        severity: 'high',
        whatToDo:
          'See a gynecologist. Diagnosis may require laparoscopy. Hormonal treatment (combined pill, progestins, GnRH agonists) controls symptoms. Excision surgery removes lesions.',
      },
      {
        name: 'Uterine Fibroids',
        likelihood: 'common',
        description:
          'Benign uterine muscle growths cause heavy, prolonged, and painful periods along with pelvic pressure and frequent urination.',
        severity: 'medium',
        whatToDo:
          'See a gynecologist for pelvic exam and ultrasound. Treatment options range from medications to surgical procedures depending on size and symptoms.',
      },
      {
        name: 'Intrauterine Device (IUD)',
        likelihood: 'common',
        description:
          'Copper IUDs commonly increase menstrual pain and flow, especially in the first 3-6 months after insertion.',
        severity: 'medium',
        whatToDo:
          'NSAIDs around the period. If pain is severe or persists, see a gynecologist. Hormonal IUDs (Mirena) often reduce period pain over time.',
      },
      {
        name: 'Pelvic Inflammatory Disease (PID)',
        likelihood: 'less-common',
        description:
          'Infection of the uterus, fallopian tubes, or ovaries causes pelvic pain that may be worse during or around menstruation, along with discharge and fever.',
        severity: 'high',
        whatToDo:
          'See a doctor urgently. PID requires antibiotics. Untreated PID causes infertility and chronic pelvic pain.',
      },
    ],
    seeDoctorIf: [
      'Period pain that disrupts daily activities or requires strong pain medication',
      'Pain worsening over time rather than improving',
      'Pain between periods or with sex',
      'Very heavy bleeding with pain',
    ],
    emergencyIf: [
      'Severe pelvic pain with fever and discharge (possible PID)',
    ],
    relatedSymptoms: [
      'lower-abdominal-pain',
      'missed-period',
      'stomach-cramps',
    ],
    tags: [
      'painful periods',
      'period pain',
      'dysmenorrhea',
      'menstrual cramps',
      'period cramps',
      'bad periods',
      'endometriosis',
    ],
  },
  {
    slug: 'erectile-dysfunction',
    name: 'Erectile Dysfunction',
    commonName: 'ED / impotence / cannot get erection',
    summary:
      'Erectile dysfunction (ED) — the inability to achieve or maintain an erection sufficient for sexual activity — is very common, affecting approximately half of men over 40. It is often a signal of underlying cardiovascular or hormonal health.',
    causes: [
      {
        name: 'Stress and Anxiety',
        likelihood: 'very-common',
        description:
          'Performance anxiety and general psychological stress activate the sympathetic nervous system, which inhibits the parasympathetic activity needed for erection.',
        severity: 'medium',
        whatToDo:
          'Address psychological factors through therapy (sex therapy, CBT). Mindfulness and open communication with a partner can help. Rule out physical causes with a doctor.',
      },
      {
        name: 'Cardiovascular Disease',
        likelihood: 'common',
        description:
          'Atherosclerosis (hardening of arteries) reduces penile blood flow, causing ED. This is why ED often precedes heart disease by 3-5 years and serves as an early warning sign.',
        severity: 'high',
        whatToDo:
          'See a doctor for cardiovascular risk assessment (lipids, blood pressure, blood glucose). Treating cardiovascular risk factors improves both ED and heart health. PDE5 inhibitors (sildenafil) are effective.',
      },
      {
        name: 'Diabetes',
        likelihood: 'common',
        description:
          'Diabetes damages both small blood vessels and nerves controlling erection, causing ED in up to 75% of diabetic men — often decades before cardiac disease appears.',
        severity: 'high',
        whatToDo:
          'Optimize blood sugar control. See a urologist for ED management. PDE5 inhibitors and vacuum devices are effective. Nerve damage may require specialist management.',
      },
      {
        name: 'Low Testosterone',
        likelihood: 'common',
        description:
          'Reduced testosterone levels (hypogonadism) decrease libido and can impair erectile function, often alongside fatigue and mood changes.',
        severity: 'medium',
        whatToDo:
          'See a doctor for morning testosterone blood test. Testosterone replacement therapy (gel, injection, or patch) improves libido and can improve erectile function.',
      },
      {
        name: 'Medication Side Effects',
        likelihood: 'common',
        description:
          'Antihypertensives (especially beta-blockers and thiazides), antidepressants (SSRIs), and antipsychotics commonly cause ED as a side effect.',
        severity: 'medium',
        whatToDo:
          'Do not stop medications without guidance. Discuss alternatives with your doctor. Many classes of medications have equivalent options with less sexual side effect burden.',
      },
    ],
    seeDoctorIf: [
      'ED occurring more than half the time',
      'ED with loss of morning erections (suggests physical rather than psychological cause)',
      'ED in a young man without obvious psychological cause',
      'ED alongside decreased libido, fatigue, or mood changes',
    ],
    emergencyIf: [],
    relatedSymptoms: [
      'depression-symptoms',
      'excessive-sweating',
      'fatigue',
    ],
    tags: [
      'erectile dysfunction',
      'ED',
      'impotence',
      'erection problems',
      'cannot get erection',
      'sexual dysfunction men',
      'male sexual health',
    ],
  }
]

export function getSymptomBySlug(slug: string): Symptom | undefined {
  return symptoms.find((s) => s.slug === slug);
}
