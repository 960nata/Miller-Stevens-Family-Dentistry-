/**
 * Semua halaman layanan digenerate dari sini lewat /services/[slug].
 * Struktur tiap layanan mengikuti kerangka 8-section di blueprint.
 */

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  image: string;
  icon: string;
  featured: boolean;
  seoPriority: boolean;
  intro: string;
  forWho: string[];
  benefits: string[];
  process: { title: string; body: string }[];
  duration: { visits: string; time: string; note: string };
  faqs: { q: string; a: string }[];
  testimonial: { quote: string; author: string };
};

export const services: Service[] = [
  {
    slug: "family-dentistry",
    name: "Family & Preventive Dentistry",
    shortName: "Family Dentistry",
    tagline: "One practice for everyone under your roof, from age three to ninety-three.",
    image: "/images/svc-family.avif",
    icon: "family",
    featured: true,
    seoPriority: false,
    intro:
      "Family dentistry means we look after every stage of a mouth's life — the first cleaning, the teenage years, the crowns, the dentures. Seeing the whole family lets us spot patterns early, and it means one appointment block instead of four trips to four different offices.",
    forWho: [
      "Families who would rather book everyone on the same morning",
      "Children coming in for their first cleaning and fluoride",
      "Adults who have not had a check-up in a few years",
      "Anyone who wants prevention rather than repair",
    ],
    benefits: [
      "Cleanings, exams, digital X-rays and fluoride in one place",
      "Sealants and early orthodontic screening for children",
      "Gum health monitoring before it becomes gum disease",
      "One record for the whole family, one phone number to call",
    ],
    process: [
      { title: "Extended first visit", body: "Ninety minutes to two hours: examination, imaging, photographs and a real conversation about what you want from your teeth." },
      { title: "Findings visit", body: "We sit down together and walk through what we found, what is urgent, what can wait, and what it costs." },
      { title: "Treatment", body: "Scheduled around your life. Nothing starts until you have agreed to it." },
      { title: "Maintenance", body: "Cleanings every six months — or more often if your gums need it — with reminders so nothing slips." },
    ],
    duration: { visits: "2 visits to start", time: "90–120 min first visit", note: "Routine cleanings after that run about 45–60 minutes." },
    faqs: [
      { q: "How old should my child be at their first visit?", a: "The ADA recommends a first dental visit by age one, or within six months of the first tooth appearing. In practice, most parents bring children in around age two to three for a gentle 'happy visit' with no treatment." },
      { q: "Why is the first appointment so long?", a: "Because a fifteen-minute exam cannot tell you much. We take the time to see the whole picture, take photographs you can look at yourself, and understand your history — so the plan we recommend is genuinely yours." },
      { q: "How often do I really need a cleaning?", a: "Every six months for most people. If you have gum disease, are diabetic, or smoke, we may recommend every three to four months to keep it under control." },
      { q: "Do you take our whole family in one visit?", a: "Yes, where scheduling allows. Call the front desk and we will block the appointments back to back." },
      { q: "What if I have not been to a dentist in ten years?", a: "You are in good company, and nobody here will lecture you. We start where you are and prioritise what matters most." },
    ],
    testimonial: {
      quote: "Three generations of my family go here. My mother started seeing them in the seventies and now my daughter sits in the same chair.",
      author: "Robert T., patient since 1994",
    },
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortName: "Cosmetic Dentistry",
    tagline: "Changes that look like you on a good day — not like dental work.",
    image: "/images/smile-1.avif",
    icon: "sparkle",
    featured: true,
    seoPriority: true,
    intro:
      "Cosmetic dentistry covers everything that changes how your smile looks: veneers, bonding, tooth-coloured fillings, crowns, reshaping and whitening. The goal is not a Hollywood set of teeth. It is a smile that looks natural enough that people notice you look well, not that you had work done.",
    forWho: [
      "Chipped, worn or uneven front teeth",
      "Old silver or discoloured fillings on visible teeth",
      "Gaps and crowding that do not need full orthodontics",
      "Anyone who covers their mouth in photographs",
    ],
    benefits: [
      "Porcelain veneers shaped and shaded to your face",
      "Same-day composite bonding for chips and small gaps",
      "Tooth-coloured replacements for old metal fillings",
      "Digital photographs so you see the plan before we begin",
    ],
    process: [
      { title: "Smile consultation", body: "We photograph your smile and talk about what specifically bothers you. Often it is one tooth, not ten." },
      { title: "Design & preview", body: "We show you what is achievable, in what order, and at what cost — before any tooth is touched." },
      { title: "Preparation", body: "Conservative preparation, temporary restorations, and time for you to live with the shape." },
      { title: "Final placement", body: "The finished restorations are fitted, adjusted and polished. Small refinements are expected and included." },
    ],
    duration: { visits: "2–4 visits typical", time: "60–120 min per visit", note: "Bonding can often be completed in a single appointment." },
    faqs: [
      { q: "Will veneers look fake?", a: "Not if they are shaped and shaded properly. We match the translucency and proportions to your own teeth and face. The most common feedback we get is that nobody could tell." },
      { q: "How long do veneers and bonding last?", a: "Porcelain veneers commonly last ten to fifteen years or more with good care. Composite bonding is typically five to seven years and is easily repaired or refreshed." },
      { q: "Does cosmetic work damage healthy teeth?", a: "We take a conservative approach and remove as little enamel as possible. In some cases bonding or reshaping achieves the result with no enamel removal at all." },
      { q: "Does insurance cover cosmetic dentistry?", a: "Purely cosmetic procedures are usually not covered. Where a crown or filling also restores function, part of it often is. We check your benefits and tell you the real number before you commit." },
      { q: "Can I whiten first and then match the work?", a: "Yes, and we usually recommend it. Restorations do not lighten, so we whiten first and then match the new work to your brighter shade." },
    ],
    testimonial: {
      quote: "I stopped smiling in photos years ago because of one chipped front tooth. It took one appointment. One.",
      author: "Megan L., cosmetic bonding",
    },
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Dental Implants",
    tagline: "A permanent replacement that behaves like a real tooth, because it is anchored like one.",
    image: "/images/svc-implants.avif",
    icon: "tooth",
    featured: true,
    seoPriority: true,
    intro:
      "A dental implant is a titanium post placed into the jawbone, topped with a crown made to match your other teeth. Unlike a bridge, it does not rely on neighbouring teeth. Unlike a denture, it does not move. It is the closest thing modern dentistry has to growing a new tooth.",
    forWho: [
      "One or more missing teeth, front or back",
      "A failing tooth that cannot be saved",
      "Denture wearers tired of adhesive and slipping",
      "Bridge wearers who would rather not grind down healthy teeth",
    ],
    benefits: [
      "Preserves jawbone, which shrinks when a tooth is lost",
      "Does not damage or depend on the teeth beside it",
      "Eat what you want — steak, apples, corn on the cob",
      "Cleaned like a normal tooth, with a brush and floss",
    ],
    process: [
      { title: "Assessment & imaging", body: "We check bone volume, gum health and bite. Not everyone is a candidate on day one — sometimes a graft comes first." },
      { title: "Implant placement", body: "The post is placed under local anesthetic, or under general anesthesia with our anesthesiologist if you prefer to sleep through it." },
      { title: "Healing & integration", body: "Three to six months while the bone fuses to the implant. A temporary tooth keeps the gap filled meanwhile." },
      { title: "Crown placement", body: "The permanent crown is made to match your teeth in shape and shade, then secured onto the implant." },
    ],
    duration: { visits: "3–4 visits over several months", time: "60–90 min for placement", note: "The wait is bone healing, not chair time. Most of those months you carry on normally." },
    faqs: [
      { q: "Does getting an implant hurt?", a: "Placement is done under anesthetic and most patients report less discomfort than a tooth extraction. Soreness for two to three days afterwards is normal and manages well with over-the-counter pain relief." },
      { q: "How long do dental implants last?", a: "The implant post itself is designed to last decades and frequently lasts a lifetime. The crown on top may need replacing after ten to fifteen years, much like any crown." },
      { q: "What if I have been told I do not have enough bone?", a: "Bone grafting can often build the site back up. It adds a few months to the timeline but opens the option for most patients who were previously told no." },
      { q: "Implant, bridge or denture — which is right for me?", a: "It depends on how many teeth are missing, your bone, your health and your budget. We lay out all three with honest costs and let you choose. We do not push implants on people who do not need them." },
      { q: "Can I be asleep for the procedure?", a: "Yes. General anesthesia is administered by a board-certified anesthesiologist, which is safer and more comfortable than sedation squeezed in by the dentist." },
    ],
    testimonial: {
      quote: "I put it off for four years because I assumed it would be agony. The recovery was two days of ibuprofen.",
      author: "Frank D., single implant",
    },
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortName: "Whitening",
    tagline: "Professional whitening that works on the stains drugstore strips cannot reach.",
    image: "/images/smile-2.avif",
    icon: "star",
    featured: true,
    seoPriority: false,
    intro:
      "Coffee, tea, red wine and time all dull enamel. Professional whitening uses a stronger, controlled gel with custom trays fitted to your teeth, so the gel reaches every surface evenly instead of pooling on your gums. The result is faster, more even, and far less likely to leave you with sensitivity.",
    forWho: [
      "Yellowing from coffee, tea, wine or tobacco",
      "Anyone with an event, wedding or photograph coming up",
      "Patients preparing for veneers or crowns who want to match a brighter shade",
      "People whose over-the-counter strips did nothing",
    ],
    benefits: [
      "Custom trays made from impressions of your own teeth",
      "Professional-strength gel not sold over the counter",
      "Even results, including the back of the front teeth",
      "Sensitivity managed with desensitising gel where needed",
    ],
    process: [
      { title: "Check first", body: "We confirm the discolouration is surface staining and not decay, and clean the teeth so the gel works on enamel, not plaque." },
      { title: "Custom trays", body: "Impressions are taken and trays made to fit your arch exactly." },
      { title: "Whitening", body: "Worn at home for a set period each day over one to two weeks, or completed in-office where you prefer." },
      { title: "Maintenance", body: "You keep the trays. A single top-up night every few months maintains the shade for years." },
    ],
    duration: { visits: "2 visits", time: "30–45 min each", note: "Results usually visible within the first week of tray wear." },
    faqs: [
      { q: "How much whiter will my teeth get?", a: "Most patients move four to eight shades on the standard guide. Yellow-toned staining responds best; grey tones from tetracycline respond least." },
      { q: "Will it make my teeth sensitive?", a: "Some patients get temporary sensitivity to cold that resolves within a few days of finishing. Desensitising gel and shorter wear times manage this well." },
      { q: "Will it whiten my crowns and fillings?", a: "No. Porcelain and composite do not change shade. This is why we whiten before placing new front restorations, so they can be matched to the final colour." },
      { q: "How long do results last?", a: "One to three years depending on your diet and whether you smoke. Because you keep the trays, topping up costs only the price of a gel syringe." },
      { q: "Is professional whitening safe for enamel?", a: "Yes. Decades of clinical use show no structural damage to enamel at professional concentrations when used as directed and supervised." },
    ],
    testimonial: {
      quote: "I had used the strips for years with almost no change. Two weeks with the trays and the difference was obvious in photos.",
      author: "Sandra K., whitening patient",
    },
  },
  {
    slug: "sedation-dentistry",
    name: "Sedation & General Anesthesia",
    shortName: "Sedation Dentistry",
    tagline: "For patients whose fear is real — and for treatment that is easier done asleep.",
    image: "/images/svc-sedation.avif",
    icon: "moon",
    featured: true,
    seoPriority: true,
    intro:
      "Dental anxiety is not a character flaw, and it is far more common than people admit. We offer options ranging from nitrous oxide to full general anesthesia administered by a board-certified anesthesiologist. That last detail matters: a dedicated anesthesiologist monitors you throughout, while the dentist focuses entirely on your teeth.",
    forWho: [
      "Patients who have avoided the dentist for years out of fear",
      "Strong gag reflex that makes routine work difficult",
      "Multiple procedures better completed in one session",
      "Special-needs patients and those who cannot tolerate long appointments",
    ],
    benefits: [
      "Board-certified anesthesiologist, not sedation squeezed in on the side",
      "Continuous monitoring of heart rate, oxygen and blood pressure",
      "Years of postponed treatment completed in a single visit",
      "Most patients remember nothing and wake up finished",
    ],
    process: [
      { title: "Health review", body: "A full medical history, current medications and past anesthetic experiences are reviewed before anything is scheduled." },
      { title: "Choosing the level", body: "Nitrous oxide for mild anxiety, oral sedation for moderate, general anesthesia for severe anxiety or extensive work." },
      { title: "Treatment day", body: "You arrive fasted with a driver. The anesthesiologist monitors you from start to finish while treatment is completed." },
      { title: "Recovery", body: "You rest in the office until fully alert, then go home with written aftercare instructions and a follow-up call." },
    ],
    duration: { visits: "1 consultation + treatment", time: "Varies by treatment plan", note: "General anesthesia requires fasting beforehand and a driver home." },
    faqs: [
      { q: "Is general anesthesia safe in a dental office?", a: "When administered by a board-certified anesthesiologist with full monitoring equipment, yes. This is precisely why we bring in a dedicated specialist rather than doing it ourselves between appointments." },
      { q: "Will I remember anything?", a: "Under general anesthesia, no. Under oral sedation most patients remember very little. Under nitrous oxide you stay awake but relaxed." },
      { q: "How long until I can drive?", a: "Not the same day for general anesthesia or oral sedation — you must have someone drive you home. After nitrous oxide alone you can usually drive after a short recovery period." },
      { q: "Does insurance cover sedation?", a: "Sometimes, particularly where it is medically necessary or for special-needs patients. We check your specific plan and give you the number before you decide." },
      { q: "I am embarrassed about how long I have avoided the dentist.", a: "Nobody here is going to make you feel bad. A large share of our sedation patients have not been seen in five, ten, even twenty years. We simply start from today." },
    ],
    testimonial: {
      quote: "I have been terrified of dentists my whole life. They never once made me feel rushed or judged.",
      author: "Karen M., sedation patient",
    },
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dental Care",
    shortName: "Emergency Care",
    tagline: "Broken, knocked out or in pain? Call us first — do not wait it out.",
    image: "/images/hero-1.avif",
    icon: "alert",
    featured: true,
    seoPriority: true,
    intro:
      "Dental emergencies do not wait for a convenient time. A cracked tooth, a lost filling, sudden swelling or a knocked-out tooth all get worse the longer they are left. Call us as early as you can — with a knocked-out tooth in particular, the first hour matters enormously.",
    forWho: [
      "Severe or throbbing toothache",
      "A knocked-out or loosened tooth after an accident",
      "Cracked or broken tooth, or a lost crown or filling",
      "Facial swelling, abscess, or bleeding that will not stop",
    ],
    benefits: [
      "Same-day appointments reserved for emergencies where possible",
      "Pain relief first, definitive treatment second",
      "Clear costs explained before treatment begins",
      "New patients welcome — you do not need to be established with us",
    ],
    process: [
      { title: "Call immediately", body: `Ring ${"(405) 632-5562"} and describe what happened. The front desk will triage and advise what to do in the meantime.` },
      { title: "Come in", body: "We examine, image and identify the cause. The first priority is getting you out of pain." },
      { title: "Stabilise", body: "Temporary restoration, drainage, or medication as needed so you can sleep tonight." },
      { title: "Definitive repair", body: "Once the emergency is under control we plan the permanent fix and explain what it will cost." },
    ],
    duration: { visits: "1 urgent + follow-up", time: "30–60 min urgent visit", note: "A knocked-out permanent tooth has the best chance of being saved within the first hour." },
    faqs: [
      { q: "What counts as a dental emergency?", a: "Severe pain, a knocked-out tooth, a fractured tooth with exposed nerve, swelling of the face or jaw, or uncontrolled bleeding. If you are unsure, call us and describe it." },
      { q: "My tooth was knocked out — what do I do right now?", a: "Pick it up by the crown, never the root. Rinse gently with milk or saline, do not scrub. Place it back in the socket if you can, or keep it in milk, and get to us immediately." },
      { q: "Can I be seen if I have never been a patient here?", a: "Yes. Emergency patients do not need to be established with the practice." },
      { q: "What will it cost?", a: "It depends on the treatment needed. We tell you the cost before we begin — you will not be surprised by the bill afterwards." },
      { q: "Should I go to the emergency room instead?", a: "Go to the ER for uncontrolled bleeding, trauma to the jaw, or swelling affecting your breathing or swallowing. For tooth pain and dental damage, a dental office is faster and far better equipped." },
    ],
    testimonial: {
      quote: "Cracked a molar on a Saturday. They got me in first thing Monday and it did not cost anything close to what I feared.",
      author: "James W., emergency visit",
    },
  },
  {
    slug: "special-care-dentistry",
    name: "Special Care Dentistry",
    shortName: "Special Care",
    tagline: "Dental care for patients other offices have turned away.",
    image: "/images/svc-special.avif",
    icon: "hands",
    featured: false,
    seoPriority: true,
    intro:
      "Patients with autism, intellectual or developmental disabilities, dementia, movement disorders or complex medical histories deserve dental care too — and too often cannot find anyone willing to provide it. Our combination of an unhurried schedule, an experienced team and a board-certified anesthesiologist makes treatment possible where it otherwise would not be.",
    forWho: [
      "Adults and children with autism or sensory sensitivities",
      "Patients with intellectual or developmental disabilities",
      "Patients with dementia or Alzheimer's disease",
      "Complex medical histories requiring physician coordination",
      "Wheelchair users and patients with limited mobility",
    ],
    benefits: [
      "Longer appointments with no pressure to hurry",
      "Desensitisation visits with no treatment attempted",
      "General anesthesia available when awake treatment is not realistic",
      "Wheelchair accessible office with ground-level parking",
      "Caregivers welcomed in the room throughout",
    ],
    process: [
      { title: "Conversation first", body: "We speak with you or the caregiver before the visit to understand triggers, communication style and what has failed elsewhere." },
      { title: "Familiarisation visit", body: "For many patients the first visit involves no treatment at all — just seeing the room, meeting the team, sitting in the chair." },
      { title: "Care plan", body: "We agree an approach together: awake with accommodations, sedation, or general anesthesia." },
      { title: "Ongoing care", body: "The same team every visit, so trust built once does not have to be rebuilt each time." },
    ],
    duration: { visits: "Varies by patient", time: "Longer appointments as standard", note: "We plan around the patient, not around the schedule." },
    faqs: [
      { q: "My child has autism and cannot tolerate a cleaning. Can you help?", a: "Yes. We start with familiarisation visits where nothing is done, and build from there. Where treatment is genuinely not possible awake, general anesthesia with our anesthesiologist is a safe route." },
      { q: "Can a caregiver stay in the room?", a: "Always. For many of our patients the caregiver's presence is what makes the appointment possible." },
      { q: "Is the office wheelchair accessible?", a: "Yes — ground-level entrance, free parking directly outside, and accessible operatories." },
      { q: "Will you coordinate with our physician?", a: "Yes. For patients with complex medical histories we contact the treating physician before planning anything." },
      { q: "Do you charge more for these appointments?", a: "The examination itself follows our normal first-visit policy. Where sedation or anesthesia is required there is an additional cost, which we explain in full beforehand." },
    ],
    testimonial: {
      quote: "My son has autism and most offices simply could not manage a cleaning. Here, the staff knew exactly what to do.",
      author: "Alicia R., parent",
    },
  },
  {
    slug: "crowns-and-bridges",
    name: "Crowns, Bridges & Dentures",
    shortName: "Restorative",
    tagline: "Rebuilding teeth that are cracked, worn down or missing entirely.",
    image: "/images/svc-cosmetic.avif",
    icon: "layers",
    featured: false,
    seoPriority: false,
    intro:
      "When a tooth is too damaged for a filling, a crown restores its shape and strength. When teeth are missing, a bridge or denture fills the gap so your bite, your speech and your face keep their proper shape. This is the bread and butter of a practice that has been doing it since 1967.",
    forWho: [
      "Cracked, heavily filled or root-treated teeth",
      "One or several missing teeth in a row",
      "Existing dentures that no longer fit properly",
      "Worn-down teeth from grinding",
    ],
    benefits: [
      "Tooth-coloured porcelain crowns matched to your shade",
      "Fixed bridges that do not come out at night",
      "Full and partial dentures fitted and adjusted properly",
      "Repair and reline of existing dentures",
    ],
    process: [
      { title: "Examination", body: "We assess how much healthy tooth remains and whether a crown, bridge, denture or implant serves you better." },
      { title: "Preparation & impressions", body: "The tooth is shaped, impressions taken, and a temporary restoration fitted the same day." },
      { title: "Laboratory work", body: "Your restoration is made to the shade and shape agreed. Typically two to three weeks." },
      { title: "Fitting", body: "Fitted, checked against your bite and adjusted until it feels like nothing at all." },
    ],
    duration: { visits: "2–3 visits", time: "60–90 min per visit", note: "Denture fitting usually needs several short adjustment visits — this is normal, not a mistake." },
    faqs: [
      { q: "How long does a crown last?", a: "Ten to fifteen years is typical, and many last considerably longer with good hygiene and no grinding." },
      { q: "Bridge or implant?", a: "A bridge is faster and cheaper but requires shaping the healthy teeth either side. An implant leaves neighbours untouched but takes months. We explain both honestly and let you decide." },
      { q: "Will my new denture feel strange?", a: "For the first few weeks, yes — speech and eating take practice. Several small adjustments during that period are expected and included." },
      { q: "Can you repair a denture that has cracked?", a: "In most cases, yes, and often quickly. Bring it in rather than attempting a home repair with glue." },
      { q: "Does insurance cover crowns?", a: "Most plans cover a percentage of crowns on a functional tooth. We verify your benefits and give you your actual out-of-pocket cost before starting." },
    ],
    testimonial: {
      quote: "My old denture had been rubbing for two years and I thought that was just how it was. It took two adjustments here.",
      author: "Patricia H., denture patient",
    },
  },
];

export const featuredServices = services.filter((s) => s.featured).slice(0, 6);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
