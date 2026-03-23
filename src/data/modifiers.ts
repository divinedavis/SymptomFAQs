export interface ModifierPage {
  symptomSlug: string
  modifier: string
  title: string
  description: string
  content: string
  additionalCauses: string[]
}

export const modifierPages: ModifierPage[] = [
  // Stomach pain
  { symptomSlug: 'stomach-pain', modifier: 'after-eating', title: 'Stomach Pain After Eating', description: 'Common causes of stomach pain that occurs after meals and what to do about it.', content: 'Stomach pain after eating is often related to digestion. It can range from mild discomfort to severe cramping.', additionalCauses: ['Eating too fast', 'Food intolerance', 'GERD', 'Gastroparesis', 'Hiatal hernia'] },
  { symptomSlug: 'stomach-pain', modifier: 'on-left-side', title: 'Stomach Pain on Left Side', description: 'Left-sided abdominal pain causes, from gas to more serious conditions.', content: 'Pain on the left side of the abdomen can involve the descending colon, kidney, spleen, or ovary (in women).', additionalCauses: ['Gas/trapped wind', 'Constipation', 'Kidney stones (left)', 'Ovarian cyst (left)', 'Diverticulitis'] },
  { symptomSlug: 'stomach-pain', modifier: 'on-right-side', title: 'Stomach Pain on Right Side', description: 'Right-sided abdominal pain — from appendicitis to gallstones.', content: 'Right-sided abdominal pain can involve the appendix, gallbladder, liver, or right ovary. Appendicitis is the most important condition to rule out.', additionalCauses: ['Appendicitis', 'Gallstones', 'IBS', 'Ovarian cyst (right)', 'Liver issue'] },
  { symptomSlug: 'stomach-pain', modifier: 'at-night', title: 'Stomach Pain at Night', description: 'Why stomach pain gets worse at night and what it could mean.', content: 'Nocturnal abdominal pain that wakes you from sleep is more likely to have a physical cause than functional pain.', additionalCauses: ['GERD/acid reflux', 'Peptic ulcer', 'IBS', 'Gallstones', 'Inflammatory bowel disease'] },
  
  // Headache  
  { symptomSlug: 'headache', modifier: 'behind-eyes', title: 'Headache Behind the Eyes', description: 'Pain behind or around the eyes — causes from tension to cluster headaches.', content: 'Pain behind the eyes is a common complaint. It can feel like pressure, throbbing, or a sharp sensation.', additionalCauses: ['Tension headache', 'Cluster headache', 'Sinusitis', 'Eye strain/digital fatigue', 'Migraine with aura'] },
  { symptomSlug: 'headache', modifier: 'on-one-side', title: 'Headache on One Side', description: 'One-sided headaches — from migraines to cluster headaches.', content: 'Unilateral headaches (one side only) are characteristic of migraines and cluster headaches.', additionalCauses: ['Migraine', 'Cluster headache', 'Tension headache (can be one-sided)', 'Cervicogenic headache', 'TMJ disorder'] },
  { symptomSlug: 'headache', modifier: 'in-the-morning', title: 'Morning Headaches', description: 'Why you wake up with a headache — sleep apnea, dehydration, and more.', content: 'Waking up with a headache can indicate sleep-related issues or conditions that worsen during the night.', additionalCauses: ['Sleep apnea', 'Dehydration', 'Teeth grinding (bruxism)', 'Caffeine withdrawal', 'Poor sleep position'] },
  
  // Back pain
  { symptomSlug: 'back-pain', modifier: 'lower', title: 'Lower Back Pain', description: 'Lower back pain causes, from muscle strain to disc problems.', content: 'Lower back pain is one of the most common medical complaints. Most cases improve within a few weeks.', additionalCauses: ['Muscle/ligament strain', 'Herniated disc', 'Sciatica', 'Spinal stenosis', 'Kidney infection'] },
  { symptomSlug: 'back-pain', modifier: 'upper', title: 'Upper Back Pain', description: 'Upper back and shoulder blade pain — causes and relief.', content: 'Upper back pain (thoracic spine) is less common than lower back pain but can be caused by muscle tension, poor posture, or disc issues.', additionalCauses: ['Poor posture', 'Muscle overuse', 'Herniated disc (thoracic)', 'Osteoporosis compression fracture', 'Referred pain from heart/lungs'] },
  { symptomSlug: 'back-pain', modifier: 'on-left-side', title: 'Left Side Back Pain', description: 'Left-sided back pain — kidney, muscle, or spine related?', content: 'Left-sided back pain can originate from spinal structures, left kidney, or be referred from internal organs.', additionalCauses: ['Left kidney stones', 'Left kidney infection', 'Muscle strain', 'Sciatica', 'Pancreatitis (referred)'] },
  
  // Chest pain
  { symptomSlug: 'chest-pain', modifier: 'left-side', title: 'Left Side Chest Pain', description: 'Left-sided chest pain — when to worry and when not to.', content: 'Left-sided chest pain is often a cause for concern because of the heart. However, many non-cardiac causes are common.', additionalCauses: ['Anxiety/panic attack', 'Costochondritis', 'Muscle strain', 'GERD', 'Heart-related (seek emergency care)'] },
  { symptomSlug: 'chest-pain', modifier: 'when-breathing', title: 'Chest Pain When Breathing', description: 'Sharp chest pain with breathing — pleuritis, pneumonia, or anxiety?', content: 'Pain that worsens with inhalation (pleuritic chest pain) has a different set of causes than constant chest pain.', additionalCauses: ['Pleuritis (inflamed lining)', 'Pneumonia', 'Pulmonary embolism (emergency)', 'Costochondritis', 'Anxiety'] },
  
  // Fatigue
  { symptomSlug: 'fatigue', modifier: 'after-eating', title: 'Tired After Eating', description: 'Why you feel sleepy or exhausted after meals.', content: 'Post-meal fatigue (postprandial somnolence) is common and usually normal, but can sometimes indicate an underlying condition.', additionalCauses: ['Normal digestion process', 'Blood sugar spike and crash', 'Type 2 diabetes', 'Food intolerance', 'Overeating'] },
  { symptomSlug: 'fatigue', modifier: 'in-the-morning', title: 'Tired in the Morning', description: 'Why you wake up exhausted even after a full night of sleep.', content: 'Morning fatigue despite adequate sleep suggests the sleep quality may be poor, or an underlying condition is affecting rest.', additionalCauses: ['Sleep apnea', 'Poor sleep quality', 'Depression', 'Hypothyroidism', 'Anemia'] },
  
  // Dizziness
  { symptomSlug: 'dizziness', modifier: 'when-standing-up', title: 'Dizziness When Standing Up', description: 'That lightheaded feeling when you stand — orthostatic hypotension explained.', content: 'Feeling dizzy when you stand up quickly is usually caused by a temporary drop in blood pressure (orthostatic hypotension).', additionalCauses: ['Dehydration', 'Orthostatic hypotension', 'Medication side effect', 'Anemia', 'Heart rhythm issue'] },
]

export function getModifierPages(slug: string): ModifierPage[] {
  return modifierPages.filter(p => p.symptomSlug === slug)
}

export function getModifierPage(slug: string, modifier: string): ModifierPage | undefined {
  return modifierPages.find(p => p.symptomSlug === slug && p.modifier === modifier)
}
