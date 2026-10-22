import { PageSeoMetadata } from '../types/seo';

export const DEFAULT_SEO_PAGES: PageSeoMetadata[] = [
  {
    id: 'home',
    pageName: 'Homepage',
    category: 'core',
    path: '/',
    title: 'Homeopathic Clinic in Malappuram, Keralam | Homoeopathic Treatment near Malappuram',
    description:
      'Anjali Homoeo Clinic in Malappuram, Kerala, offers personalized homoeopathic consultations for various health concerns, with an individual-focused approach to healthcare.',
    url: 'https://anjalihomoeoclinic.com/',
    canonicalUrl: 'https://anjalihomoeoclinic.com/',
    ogType: 'website',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords:
      'Anjali Homoeo Clinic, Malappuram, Kerala, Homeopathy online appointment, Dr Anjali Chandrasekhar, Kuttippuram, Puthanathani, constitutional homeopathy',
    schemaType: 'MedicalClinic',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['MedicalClinic', 'LocalBusiness'],
            '@id': 'https://anjalihomoeoclinic.com/#clinic',
            name: 'Anjali Homoeo Clinic',
            description:
              'Anjali Homoeo Clinic in Malappuram, Kerala, offers personalized homoeopathic consultations for various health concerns, with an individual-focused approach to healthcare.',
            url: 'https://anjalihomoeoclinic.com/',
            telephone: '098951 01707',
            email: 'anjalihomoeoclinic@gmail.com',
            priceRange: '₹₹',
            medicalSpecialty: 'Homeopathy',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Tirur - Kuttippuram Rd, Kavumopuram',
              addressLocality: 'Kuttippuram',
              addressRegion: 'Keralam',
              postalCode: '679571',
              addressCountry: 'IN',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                opens: '09:00',
                closes: '20:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Sunday'],
                opens: '10:00',
                closes: '14:00',
              },
            ],
            sameAs: [
              'https://www.instagram.com/anjalihomoeoclinic/',
              'https://www.facebook.com/profile.php?id=61585723425201',
              'https://www.practo.com/malappuram/doctor/anjali-chandrasekhar-homoeopath',
              'https://www.justdial.com/Malappuram/Anjali-Homoeo-Clinic-Kuttippuram/9999PX483-X483-240210031557-B5V4_BZDET',
            ],
          },
          {
            '@type': 'Physician',
            '@id': 'https://anjalihomoeoclinic.com/#practitioner',
            name: 'Dr. Anjali Chandrasekhar',
            medicalSpecialty: 'Homeopathy',
            jobTitle: 'Lead Homoeopathic Physician',
            alumniOf: 'BHMS (Bachelor of Homeopathic Medicine and Surgery)',
          },
          {
            '@type': 'MedicalWebPage',
            '@id': 'https://anjalihomoeoclinic.com/#webpage',
            name: 'Homoeopathic Clinic in Malappuram – Anjali Homoeo Clinic',
            headline: 'Homoeopathic Clinic in Malappuram – Anjali Homoeo Clinic',
            url: 'https://anjalihomoeoclinic.com/',
            description:
              'Comprehensive guide to choosing a homoeopathic clinic in Malappuram, Kerala. Patient-focused consultations, verified qualifications (BHMS), transparent communication, and evidence-informed health assessments.',
            about: [
              {
                '@type': 'MedicalClinic',
                name: 'Anjali Homoeo Clinic',
              },
              {
                '@type': 'MedicalSpecialty',
                name: 'Classical Homeopathy',
              },
            ],
            mainEntity: {
              '@id': 'https://anjalihomoeoclinic.com/#clinic',
            },
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'womens-health-care',
    pageName: "Women's Health & Gynecological Care",
    category: 'clinical',
    path: '/homoeopathic-treatment-for-womens-health-gynecological-care/',
    title: 'Women’s Health Gynecological Homeopathic Treatment in Malappuram',
    description:
      "Explore women's health and gynecological care at Anjali Homoeo Clinic in Malappuram, Kerala. Learn about menstrual health and personalized consultations.",
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-womens-health-gynecological-care/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-womens-health-gynecological-care/',
    ogType: 'website',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords:
      "Women's health clinic in Malappuram, PCOS Consultation in Malappuram, PCOD consultation, menstrual irregularities Malappuram, uterine fibroids consultation, menopause consultation Malappuram, Dr Anjali Chandrasekhar",
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalWebPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-womens-health-gynecological-care/#webpage',
            name: "Women's Health Consultation in Malappuram – Anjali Homoeo Clinic",
            headline:
              "Women's Health Consultation in Malappuram – Consultations for PCOS, Fibroids & Menopause",
            url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-womens-health-gynecological-care/',
            description:
              "Explore women's health and gynecological care at Anjali Homoeo Clinic in Malappuram, Kerala. Learn about menstrual health, PCOS, uterine fibroids, and menopause consultations.",
            about: [
              {
                '@type': 'MedicalCondition',
                name: 'PCOD / PCOS (Polycystic Ovarian Disease)',
              },
              {
                '@type': 'MedicalCondition',
                name: 'Severe Dysmenorrhea (Menstrual Pain)',
              },
              {
                '@type': 'MedicalCondition',
                name: 'Irregular Menstruation & Hormonal Imbalance',
              },
              {
                '@type': 'MedicalCondition',
                name: 'Uterine Fibroids & Ovarian Cysts',
              },
              {
                '@type': 'MedicalCondition',
                name: 'Menopause & Perimenopause Symptoms',
              },
            ],
            medicalAudience: {
              '@type': 'MedicalAudience',
              audienceType: 'Patients seeking personalized women\'s health consultations',
            },
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              telephone: '098951 01707',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kuttippuram & Puthanathani',
                addressRegion: 'Keralam',
                addressCountry: 'IN',
              },
            },
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-womens-health-gynecological-care/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: "Where can I find a Women's Health Clinic in Malappuram?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can research local healthcare providers, including Anjali Homoeo Clinic, and verify their services and practitioner qualifications. For reproductive health concerns, confirm that you can access appropriate medical assessment and specialist referral when necessary.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is included in a PCOS Consultation in Malappuram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A medical assessment for suspected PCOS may involve reviewing menstrual history, symptoms, medical history, and relevant examination findings. Blood tests or imaging may be recommended when appropriate.',
                },
              },
              {
                '@type': 'Question',
                name: 'When should I seek care for menstrual irregularities?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Seek medical advice if your periods become persistently irregular, stop unexpectedly, or involve unusually heavy bleeding or severe pain. Urgent symptoms require prompt medical assessment.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do uterine fibroids always require treatment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Some fibroids cause no symptoms and may only require monitoring. Others need medication, procedures, or surgery depending on their size, location, symptoms, and the patient\'s circumstances.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I discuss during a menopause consultation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Discuss your symptoms, menstrual changes, sleep, mood, medical history, and any effect on your daily life. A qualified healthcare professional can help you understand the available evidence-based management options.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can homoeopathy treat PCOS, fibroids, or menopause symptoms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reliable scientific evidence has not established that homoeopathy effectively treats PCOS, uterine fibroids, or menopause symptoms beyond placebo effects. It should not replace evidence-based treatment or delay medical evaluation.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'respiratory-care',
    pageName: 'Respiratory, ENT & Allergy Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/',
    title:
      'Homoeopathic Doctor for Respiratory, ENT & Allergy Conditions in Malappuram',
    description:
      'Consult Dr. Anjali Chandrasekhar (BHMS) for respiratory, ENT & allergy conditions in Malappuram. Guidance for sinusitis, dust allergy, chronic cough, asthma support & adenoids.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/',
    ogType: 'website',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords:
      'Homoeopathic doctor for respiratory in Malappuram, homoeopathic clinic for sinus problems in Malappuram, respiratory allergies Malappuram, dust allergy clinic, chronic cough consultation, asthma homeopathy Malappuram, tonsillitis, adenoids children',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalWebPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/#webpage',
            name: 'Homoeopathic Doctor for Respiratory, ENT & Allergy Conditions – Anjali Homoeo Clinic',
            headline:
              'Homoeopathic Doctor for Respiratory, ENT & Allergy Conditions in Malappuram',
            url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/',
            description:
              'Comprehensive patient guide to respiratory, ENT, sinus, allergy, chronic cough, asthma, tonsillitis, and voice strain care at Anjali Homoeo Clinic in Malappuram, Kerala.',
            about: [
              { '@type': 'MedicalCondition', name: 'Chronic Sinusitis & Sinus Congestion' },
              { '@type': 'MedicalCondition', name: 'Allergic Rhinitis & Respiratory Allergies' },
              { '@type': 'MedicalCondition', name: 'House Dust Mite Allergy' },
              { '@type': 'MedicalCondition', name: 'Bronchial Asthma & Wheezing' },
              { '@type': 'MedicalCondition', name: 'Chronic Cough (Dry & Productive)' },
              { '@type': 'MedicalCondition', name: 'Recurrent Tonsillitis & Pharyngitis' },
              { '@type': 'MedicalCondition', name: 'Adenoid Hypertrophy in Children' },
              { '@type': 'MedicalCondition', name: 'Vocal Fatigue & Voice Strain' },
            ],
            medicalAudience: {
              '@type': 'MedicalAudience',
              audienceType: 'Patients seeking respiratory, ENT, and allergy consultations',
            },
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              telephone: '098951 01707',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kuttippuram & Puthanathani',
                addressRegion: 'Keralam',
                addressCountry: 'IN',
              },
            },
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'When should I consult a doctor for recurring sinus problems in Malappuram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You should seek medical evaluation if sinus symptoms such as facial pressure, persistent nasal obstruction, headache, or thick discharge last for several weeks or return frequently. Seek urgent medical care if you experience vision changes, swelling around the eyes, or severe headache.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can homoeopathy cure asthma or replace prescribed inhalers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Reliable scientific evidence has not shown homoeopathy to be an effective replacement for evidence-based asthma treatment. Patients should never discontinue or reduce prescribed inhalers, steroid preventers, or emergency bronchodilators without explicit medical instruction.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the main causes of dust allergy and persistent sneezing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Dust allergy is commonly triggered by microscopic house dust mites, mould spores, animal dander, and fabric fibres. When inhaled, these airborne allergens induce histamine release in sensitive individuals, causing sneezing, runny nose, and ocular itching.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I know if my child has enlarged adenoids?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Signs of enlarged adenoids include persistent mouth breathing, loud snoring, restless sleep, paused breathing during sleep (suspected sleep apnoea), recurrent ear fullness or infections, and persistent nasal speech. Assessment by a paediatrician or ENT specialist is recommended.',
                },
              },
              {
                '@type': 'Question',
                name: 'When does a chronic cough require urgent medical investigation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A cough persisting beyond 3 to 4 weeks warrants comprehensive medical investigation. Immediate emergency assessment is critical if the cough is accompanied by coughing up blood (haemoptysis), unexplained weight loss, shortness of breath, severe chest pain, or high fever.',
                },
              },
              {
                '@type': 'Question',
                name: 'What vocal hygiene measures are recommended for teachers and singers experiencing voice strain?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Professional voice users should maintain adequate hydration, schedule deliberate vocal rest periods, avoid frequent throat-clearing and whispering, use microphone amplification in large classrooms, and seek an ENT evaluation if hoarseness persists beyond 3 to 4 weeks.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'skin-hair-care',
    pageName: 'Skin, Hair & Scalp Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-skin-hair-scalp-conditions/',
    title: 'Skin & Hair Homoeopathic Clinic in Malappuram',
    description:
      'Consult Dr. Anjali Chandrasekhar (BHMS) for skin, hair & scalp concerns in Malappuram. Clinical guidance for eczema, psoriasis, acne, melasma, alopecia areata & dandruff.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/',
    ogType: 'website',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords:
      'Skin & hair homoeopathic clinic in Malappuram, homoeopathic skin clinic Malappuram, homoeopathic doctor for skin problems, eczema, psoriasis, acne, melasma, alopecia areata, dandruff, Dr Anjali Chandrasekhar',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalWebPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/#webpage',
            name: 'Skin & Hair Homoeopathic Clinic in Malappuram – Anjali Homoeo Clinic',
            headline: 'Skin & Hair Homoeopathic Clinic in Malappuram',
            url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/',
            description:
              'Comprehensive patient guide to eczema, psoriasis, melasma, cystic acne, hair loss, alopecia areata, dandruff, urticaria, warts, and shingles care at Anjali Homoeo Clinic in Malappuram, Kerala.',
            about: [
              { '@type': 'MedicalCondition', name: 'Eczema & Atopic Dermatitis' },
              { '@type': 'MedicalCondition', name: 'Psoriasis & Scaly Plaques' },
              { '@type': 'MedicalCondition', name: 'Melasma & Facial Pigmentation' },
              { '@type': 'MedicalCondition', name: 'Acne Vulgaris & Cystic Acne' },
              { '@type': 'MedicalCondition', name: 'Alopecia Areata & Patchy Hair Loss' },
              { '@type': 'MedicalCondition', name: 'Seborrhoeic Dermatitis & Dandruff' },
              { '@type': 'MedicalCondition', name: 'Chronic Urticaria & Skin Allergies' },
              { '@type': 'MedicalCondition', name: 'Warts (HPV) & Skin Lesions' },
              { '@type': 'MedicalCondition', name: 'Herpes Zoster (Shingles) & Postherpetic Neuralgia' },
            ],
            medicalAudience: {
              '@type': 'MedicalAudience',
              audienceType: 'Patients seeking skin, hair, and scalp care consultations',
            },
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              telephone: '098951 01707',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kuttippuram & Puthanathani',
                addressRegion: 'Keralam',
                addressCountry: 'IN',
              },
            },
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'When should I consult a doctor for recurring skin problems in Malappuram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You should seek medical evaluation if skin symptoms such as intense itching, spreading redness, scaling patches, painful cystic acne, or unexplained pigmentation persist for several weeks or recur repeatedly. Any rapidly changing, bleeding, or unusual mole requires immediate dermatological assessment.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can homoeopathy cure chronic eczema or psoriasis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reliable scientific evidence has not established homoeopathy as a curative treatment for eczema or psoriasis. These chronic inflammatory conditions require evidence-based management, skin barrier restoration, and medical supervision to prevent flare-ups, skin infections, and complications such as psoriatic arthritis.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between ordinary hair shedding and alopecia areata?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ordinary hair shedding (telogen effluvium) typically involves diffuse, uniform thinning across the scalp often triggered by stress, illness, or nutritional deficits. In contrast, alopecia areata is an autoimmune condition causing distinct, smooth, circular or oval bald patches that require clinical evaluation by a healthcare professional.',
                },
              },
              {
                '@type': 'Question',
                name: 'How should severe cystic acne be treated to prevent permanent scarring?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Severe or cystic acne involves deep follicular inflammation that risks permanent pitted scars and post-inflammatory hyperpigmentation. Evidence-based care with topical retinoids, benzoyl peroxide, or oral medications prescribed by a qualified clinician should be initiated early, while avoiding picking or squeezing lesions.',
                },
              },
              {
                '@type': 'Question',
                name: 'What triggers chronic urticaria (hives) and when is it an emergency?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Chronic urticaria produces itchy welts that persist or recur over more than six weeks, often linked to autoimmune factors, viral infections, or physical triggers. It requires immediate emergency medical attention if accompanied by lip, tongue, or facial swelling (angioedema), difficulty breathing, or dizziness.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why is early antiviral treatment essential for shingles (herpes zoster)?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Shingles causes a painful blistering rash following a nerve pathway. Prompt medical assessment within 72 hours allows prescription of antiviral therapy that limits rash severity and substantially reduces the risk of long-term debilitating nerve pain known as postherpetic neuralgia.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'renal-thyroid-care',
    pageName: 'Renal, Urinary, Gallbladder & Thyroid Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/',
    title:
      'Renal, Urinary, Gallbladder & Thyroid Homoeopathic Clinic in Malappuram',
    description:
      'Consult Dr. Anjali Chandrasekhar (BHMS) for kidney stones, urinary calculi, gallstones, hypothyroidism, Hashimoto’s & goiter in Malappuram. Evidence-aware clinical care.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/',
    ogType: 'website',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords:
      'Renal urinary gallbladder thyroid homoeopathic clinic in Malappuram, kidney stone consultation Malappuram, urinary stone consultation, gallbladder stone consultation, hypothyroidism consultation, Hashimoto thyroiditis, goiter Malappuram',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalWebPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/#webpage',
            name: 'Renal, Urinary, Gallbladder & Thyroid Homoeopathic Clinic in Malappuram – Anjali Homoeo Clinic',
            headline:
              'Renal, Urinary, Gallbladder & Thyroid Homoeopathic Clinic in Malappuram',
            url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/',
            description:
              'Comprehensive patient guide to renal calculi, ureteral stones, cholelithiasis, hypothyroidism, Hashimoto’s thyroiditis, and goiter consultations at Anjali Homoeo Clinic in Malappuram, Kerala.',
            about: [
              { '@type': 'MedicalCondition', name: 'Renal Calculi (Kidney Stones)' },
              { '@type': 'MedicalCondition', name: 'Ureteral & Bladder Calculi' },
              { '@type': 'MedicalCondition', name: 'Cholelithiasis (Gallbladder Stones)' },
              { '@type': 'MedicalCondition', name: 'Hypothyroidism (Underactive Thyroid)' },
              { '@type': 'MedicalCondition', name: 'Hashimoto’s Autoimmune Thyroiditis' },
              { '@type': 'MedicalCondition', name: 'Goiter & Thyroid Enlargement' },
            ],
            medicalAudience: {
              '@type': 'MedicalAudience',
              audienceType: 'Patients seeking kidney stone, gallbladder, and thyroid consultations',
            },
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              telephone: '098951 01707',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kuttippuram & Puthanathani',
                addressRegion: 'Keralam',
                addressCountry: 'IN',
              },
            },
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'When does a kidney stone or urinary calculus require emergency hospital care?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Seek immediate emergency medical care if flank or abdominal pain is accompanied by high fever, shaking chills, persistent vomiting, complete inability to pass urine (anuria), or if you have a single functioning kidney. An obstructing stone combined with a urinary tract infection is a urological emergency (sepsis risk).',
                },
              },
              {
                '@type': 'Question',
                name: 'Can homoeopathic remedies dissolve kidney stones or gallbladder stones?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reliable scientific evidence has not demonstrated that homoeopathic remedies can dissolve kidney stones or gallstones or eliminate urinary obstruction. Clinical management depends on stone dimensions, composition, and location, often requiring urological evaluation or surgical assessment.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can thyroid hormone medication (Levothyroxine) be replaced with homoeopathy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. In primary hypothyroidism and advanced Hashimoto’s thyroiditis, the thyroid gland lacks the biological capacity to synthesize sufficient thyroxine (T4). Discontinuing or replacing prescribed levothyroxine with unproven remedies can lead to worsening fatigue, cardiovascular strain, severe metabolic slowing, and myxoedema coma.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the classic warning signs of acute gallbladder complications?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Seek urgent medical attention if gallstone pain (biliary colic) does not subside within a few hours, or is accompanied by jaundice (yellowing of the skin or eyes), fever, chills, dark tea-colored urine, or pale clay-colored stools. These signs indicate acute cholecystitis, cholangitis, or common bile duct obstruction.',
                },
              },
              {
                '@type': 'Question',
                name: 'What tests are necessary for a comprehensive thyroid consultation in Malappuram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A thorough thyroid evaluation typically involves serum Thyroid Stimulating Hormone (TSH), Free T4, and Free T3. When autoimmune thyroiditis or structural enlargement (goiter/nodules) is suspected, thyroid peroxidase antibodies (anti-TPO), thyroglobulin antibodies (anti-Tg), and high-resolution thyroid ultrasound are recommended.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why should people with Hashimoto’s thyroiditis be cautious with iodine supplements?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Excessive iodine intake (from kelp, seaweed extracts, or high-dose supplements) can aggravate autoimmune thyroid inflammation, trigger antibody spikes, and precipitate acute thyroid dysfunction (Wolff-Chaikoff effect or iodine-induced thyrotoxicosis). Supplementation should only occur under medical supervision.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'neurological-care',
    pageName: 'Neurological & Headache Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-neurological-headache-conditions/',
    title:
      'Neurological & Headache Conditions Homoeopathic Clinic in Malappuram',
    description:
      'Consult Dr. Anjali Chandrasekhar (BHMS) for headaches, migraines, stress, anxiety, memory fog & child development in Malappuram. Evidence-aware clinical care.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-neurological-headache-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-neurological-headache-conditions/',
    ogType: 'website',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords:
      'Neurological & headache conditions homoeopathic clinic in Malappuram, headache consultation Malappuram, migraine consultation, stress management, anxiety consultation, memory problems, child development ADHD Malappuram',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalWebPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-neurological-headache-conditions/#webpage',
            name: 'Neurological & Headache Conditions Homoeopathic Clinic in Malappuram – Anjali Homoeo Clinic',
            headline:
              'Neurological & Headache Conditions Homoeopathic Clinic in Malappuram',
            url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-neurological-headache-conditions/',
            description:
              'Comprehensive patient guide to migraines, tension headaches, stress management, anxiety, memory fog, and child development consultations at Anjali Homoeo Clinic in Malappuram, Kerala.',
            about: [
              { '@type': 'MedicalCondition', name: 'Migraine with and without Aura' },
              { '@type': 'MedicalCondition', name: 'Chronic Tension Headache' },
              { '@type': 'MedicalCondition', name: 'Medication-Overuse Headache' },
              { '@type': 'MedicalCondition', name: 'Stress & Mental Fatigue' },
              { '@type': 'MedicalCondition', name: 'Generalized Anxiety Symptoms' },
              { '@type': 'MedicalCondition', name: 'Memory Difficulties & Brain Fog' },
              { '@type': 'MedicalCondition', name: 'Child Attention & ADHD Evaluation' },
            ],
            medicalAudience: {
              '@type': 'MedicalAudience',
              audienceType: 'Patients seeking headache, migraine, stress, and neurological consultations',
            },
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              telephone: '098951 01707',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kuttippuram & Puthanathani',
                addressRegion: 'Keralam',
                addressCountry: 'IN',
              },
            },
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-neurological-headache-conditions/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'When does a headache or migraine require emergency medical attention?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Seek immediate emergency medical care for a sudden, extremely severe headache (thunderclap headache), a headache accompanied by facial weakness, speech difficulty, vision loss, confusion, high fever with neck stiffness, or headache following a head injury.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between a tension headache and a migraine attack?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tension-type headaches usually cause a dull, steady aching pressure or band-like tightness around both sides of the head and neck. In contrast, migraines typically cause moderate-to-severe throbbing pain (often on one side), accompanied by nausea, vomiting, and marked sensitivity to light and sound.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are medication-overuse headaches (rebound headaches)?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Medication-overuse headaches occur when acute pain relievers, triptans, or combination analgesics are taken frequently (typically 10 to 15 days or more per month). Over time, the medicine causes headaches to become more frequent and daily, requiring structured medication withdrawal under clinical supervision.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can homoeopathy cure clinical anxiety disorders or depression?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reliable scientific evidence has not shown homoeopathy to effectively treat clinical anxiety disorders, panic disorders, or depression. These mental health conditions benefit from evidence-based care, including cognitive behavioural therapy (CBT) and prescribed medical treatments.',
                },
              },
              {
                '@type': 'Question',
                name: 'What causes persistent brain fog and memory difficulties in adults?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Brain fog and concentration difficulties can arise from chronic sleep deprivation, severe psychological stress, anxiety, depressive disorders, thyroid dysfunction (hypothyroidism), nutritional deficiencies (vitamin B12, iron), medication side effects, or neurological disorders.',
                },
              },
              {
                '@type': 'Question',
                name: 'How should child attention and learning difficulties (suspected ADHD) be evaluated?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Child developmental, attention, or learning concerns should never be diagnosed via brief online checklists or unproven therapies. They require a comprehensive multidisciplinary clinical assessment involving paediatricians, child psychologists, educators, and developmental specialists.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'anorectal-vascular-care',
    pageName: 'Anorectal & Vascular Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-anorectal-vascular-conditions/',
    title:
      'Anorectal & Vascular Homoeopathic Clinic in Malappuram',
    description:
      'Consult Dr. Anjali Chandrasekhar (BHMS) for hemorrhoids (piles), anal fissures, fistula-in-ano, and varicose veins in Malappuram, Kerala. Responsible clinical guidance.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-anorectal-vascular-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-anorectal-vascular-conditions/',
    ogType: 'website',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords:
      'Anorectal & vascular homoeopathic clinic in Malappuram, piles consultation Malappuram, hemorrhoids treatment, anal fissure clinic, fistula-in-ano, varicose veins Kerala, venous insufficiency',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalWebPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-anorectal-vascular-conditions/#webpage',
            name: 'Anorectal & Vascular Homoeopathic Clinic in Malappuram – Anjali Homoeo Clinic',
            headline:
              'Anorectal & Vascular Homoeopathic Clinic in Malappuram',
            url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-anorectal-vascular-conditions/',
            description:
              'Comprehensive patient guide to hemorrhoids (piles), anal fissures, perianal fistulas, and lower-extremity varicose veins consultations at Anjali Homoeo Clinic in Malappuram, Kerala.',
            about: [
              { '@type': 'MedicalCondition', name: 'Hemorrhoids (Piles - Internal & External)' },
              { '@type': 'MedicalCondition', name: 'Anal Fissure & Sphincter Spasm' },
              { '@type': 'MedicalCondition', name: 'Perianal Fistula (Fistula-in-ano)' },
              { '@type': 'MedicalCondition', name: 'Perianal Abscess' },
              { '@type': 'MedicalCondition', name: 'Lower-Extremity Varicose Veins' },
              { '@type': 'MedicalCondition', name: 'Chronic Venous Insufficiency (CVI)' },
            ],
            medicalAudience: {
              '@type': 'MedicalAudience',
              audienceType: 'Patients seeking anorectal and vascular health consultations',
            },
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              telephone: '098951 01707',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kuttippuram & Puthanathani',
                addressRegion: 'Keralam',
                addressCountry: 'IN',
              },
            },
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-anorectal-vascular-conditions/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Why is it dangerous to assume that all rectal bleeding is caused by piles (hemorrhoids)?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'While hemorrhoids are a frequent cause of bright red rectal bleeding, assuming that every episode of rectal bleeding is benign piles can delay the diagnosis of serious colorectal pathology. Conditions such as anal fissures, inflammatory bowel disease, polyps, and colorectal cancer can present with identical bleeding symptoms. Any rectal bleeding requires formal clinical examination by a qualified physician.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can homoeopathy cure a complex perianal fistula without surgical evaluation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A perianal fistula is an abnormal epithelialized tract connecting the anal canal to the perianal skin. While homoeopathic supportive care can assist in symptom relief and constitutional well-being, reliable scientific evidence has not shown that homoeopathic remedies can eliminate complex epithelialized fistula tracts or replace surgical evaluation. Evaluation with pelvic MRI and colorectal consultation is essential.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the fundamental difference between an anal fissure and hemorrhoids?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An anal fissure is a sharp, painful tear in the lining of the lower anal canal, characterized by severe cutting pain during defecation that lingers for hours. In contrast, uncomplicated internal hemorrhoids are swollen vascular cushions located higher in the anal canal that typically bleed painlessly into the toilet bowl without severe acute cutting pain.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I relieve excruciating pain during and after bowel movements caused by an anal fissure?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Immediate supportive care focuses on relaxing the hypertonic internal anal sphincter muscle with warm water sitz baths for 15 minutes twice daily and after defecation. Increasing dietary soluble fiber and water intake prevents hard stools from re-tearing the fissure. Clinical evaluation is advised for medical management.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can varicose veins in the legs lead to serious or life-threatening blood clots?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Varicose veins occur in the superficial venous system and can lead to superficial thrombophlebitis or increase the risk of Deep Vein Thrombosis (DVT). A DVT clot can travel to the lungs, causing a potentially fatal pulmonary embolism. Sudden unilateral calf swelling, redness, deep calf pain, or sudden shortness of breath requires immediate emergency hospital care.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I bring and expect during an anorectal or vascular consultation in Malappuram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Bring previous diagnostic reports including colonoscopy, anoscopy, pelvic scans, or lower-limb venous Doppler ultrasound reports, along with current medications. The doctor conducts a confidential review of your symptoms, bowel patterns, standing/sitting habits, and overall health to formulate a personalized supportive care plan.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'joint-musculoskeletal-care',
    pageName: 'Joint, Musculoskeletal & Chronic Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/',
    title:
      'Joint, Musculoskeletal & Chronic Homoeopathic Clinic in Malappuram',
    description:
      'Consult Dr. Anjali Chandrasekhar (BHMS) for joint pain, knee osteoarthritis, cervical & lumbar spondylosis, sciatica & chronic pain in Malappuram, Kerala.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/',
    ogType: 'website',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords:
      'Joint musculoskeletal chronic homoeopathic clinic in Malappuram, joint pain consultation Malappuram, knee osteoarthritis Malappuram, arthritis consultation, cervical spondylosis neck pain, lumbar spondylosis back pain, sciatica treatment',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalWebPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/#webpage',
            name: 'Joint, Musculoskeletal & Chronic Homoeopathic Clinic in Malappuram – Anjali Homoeo Clinic',
            headline:
              'Joint, Musculoskeletal & Chronic Homoeopathic Clinic in Malappuram',
            url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/',
            description:
              'Comprehensive patient guide to joint pain, knee osteoarthritis, rheumatoid arthritis, cervical spondylosis, lumbar spondylosis, and sciatica consultations at Anjali Homoeo Clinic in Malappuram, Kerala.',
            about: [
              { '@type': 'MedicalCondition', name: 'Knee Osteoarthritis' },
              { '@type': 'MedicalCondition', name: 'Rheumatoid Arthritis & Autoimmune Arthropathies' },
              { '@type': 'MedicalCondition', name: 'Cervical Spondylosis & Neck Pain' },
              { '@type': 'MedicalCondition', name: 'Lumbar Spondylosis & Lower Back Pain' },
              { '@type': 'MedicalCondition', name: 'Sciatica & Lumbar Radiculopathy' },
              { '@type': 'MedicalCondition', name: 'Chronic Musculoskeletal Pain Syndromes' },
            ],
            medicalAudience: {
              '@type': 'MedicalAudience',
              audienceType: 'Patients seeking joint, spine, and musculoskeletal consultations',
            },
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              telephone: '098951 01707',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kuttippuram & Puthanathani',
                addressRegion: 'Keralam',
                addressCountry: 'IN',
              },
            },
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can homoeopathy cure knee osteoarthritis or regenerate eroded cartilage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reliable scientific evidence has not shown that homoeopathic remedies can reverse osteoarthritis, rebuild lost articular cartilage, or alter bone-on-bone joint deformity. In osteoarthritis, the loss of hyaline cartilage is a progressive biomechanical and degenerative process. Homoeopathic consultations provide supportive constitutional care and general lifestyle comfort, but must never replace proven interventions such as physiotherapy, quadriceps strengthening, weight management, and orthopaedic evaluation.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I do if my lower back pain radiates down into my leg (sciatica)?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pain traveling from the lower back through the buttock down the leg indicates irritation or mechanical compression of the sciatic nerve roots. Arrange a medical evaluation to determine the precise anatomical cause. Remain gently active, avoid heavy lifting or prolonged sitting, and seek urgent hospital care if leg weakness worsens rapidly or if you experience numbness around the groin or bladder changes.',
                },
              },
              {
                '@type': 'Question',
                name: 'When does back or neck pain become an emergency medical situation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Seek immediate emergency hospital attention if back or neck pain is accompanied by loss of bowel or bladder control, saddle anesthesia (numbness in groin or perineum), progressive leg or foot weakness (foot drop), high fever with spinal tenderness, or follows high-impact trauma. These signs indicate Cauda Equina Syndrome or acute cord compression requiring urgent surgical decompression.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the fundamental difference between osteoarthritis and rheumatoid arthritis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Osteoarthritis is predominantly a degenerative wear-and-tear condition of joint cartilage worsened by weight-bearing movement and eased by rest. Rheumatoid arthritis is a systemic autoimmune disease where the immune system attacks the synovial joint lining, causing symmetrical joint swelling, warmth, and prolonged morning stiffness lasting over an hour, requiring rheumatologist care and disease-modifying drugs (DMARDs).',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I take homoeopathic remedies alongside my prescribed arthritis or pain medications?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, homoeopathic micro-dilutions can generally be taken alongside conventional medications. However, you must never discontinue, reduce, or substitute prescribed anti-inflammatory drugs, DMARDs, immunosuppressants, or painkillers on your own. Always inform both your prescribing doctor and homoeopathic practitioner.',
                },
              },
              {
                '@type': 'Question',
                name: 'What diagnostic tests or imaging should I bring to a joint and spine consultation in Malappuram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Bring available spinal or joint X-rays, MRI scans, CT reports, DEXA scans, and recent blood test panels (such as Complete Blood Count, ESR, CRP, Rheumatoid Factor, Anti-CCP, and Uric Acid). Reviewing these existing reports allows Dr. Anjali Chandrasekhar (BHMS) to assess your condition and guide supportive care safely.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'ophthalmic-eye-care',
    pageName: 'Ophthalmic & Eye Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-ophthalmic-eye-conditions/',
    title:
      'Ophthalmic & Eye Homoeopathic Clinic in Malappuram',
    description:
      'Consult Dr. Anjali Chandrasekhar (BHMS) for recurrent conjunctivitis, pink eye support, ocular hypertension & eye health co-management in Malappuram, Kerala.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/',
    ogType: 'website',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords:
      'Ophthalmic eye homoeopathic clinic in Malappuram, eye consultation Malappuram, recurrent conjunctivitis pink eye, ocular hypertension, glaucoma risk Malappuram, eye health Kerala',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalWebPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/#webpage',
            name: 'Ophthalmic & Eye Homoeopathic Clinic in Malappuram – Anjali Homoeo Clinic',
            headline:
              'Ophthalmic & Eye Homoeopathic Clinic in Malappuram',
            url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/',
            description:
              'Comprehensive patient guide to recurrent conjunctivitis, pink eye, ocular hypertension, and glaucoma co-management consultations at Anjali Homoeo Clinic in Malappuram, Kerala.',
            about: [
              { '@type': 'MedicalCondition', name: 'Recurrent Conjunctivitis (Pink Eye)' },
              { '@type': 'MedicalCondition', name: 'Allergic Conjunctivitis' },
              { '@type': 'MedicalCondition', name: 'Ocular Hypertension & Elevated Eye Pressure' },
              { '@type': 'MedicalCondition', name: 'Glaucoma & Optic Nerve Protection' },
              { '@type': 'MedicalCondition', name: 'Chronic Blepharitis & Eyelid Inflammation' },
              { '@type': 'MedicalCondition', name: 'Dry Eye Disease & Digital Eye Strain' },
            ],
            medicalAudience: {
              '@type': 'MedicalAudience',
              audienceType: 'Patients seeking eye, vision, and ocular health consultations',
            },
            mainEntity: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              telephone: '098951 01707',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kuttippuram & Puthanathani',
                addressRegion: 'Keralam',
                addressCountry: 'IN',
              },
            },
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can homoeopathy cure glaucoma or lower elevated intraocular pressure (IOP)?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Reliable scientific evidence has not shown that homoeopathic remedies can lower intraocular pressure, reverse optic nerve damage, or prevent glaucoma progression. Evidence-based treatment requires prescription pressure-lowering eye drops, laser procedures, or filtration surgery directed by a qualified ophthalmologist.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I do if I develop sudden, severe eye pain accompanied by nausea and a red eye?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'This combination of symptoms is a hallmark of acute angle-closure glaucoma, an ophthalmic emergency. Sudden blockage in the drainage angle causes intraocular pressure to spike rapidly, risking permanent blindness within hours. Proceed immediately to the nearest hospital emergency eye department for acute decompression.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why does my conjunctivitis (pink eye) keep recurring repeatedly?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Recurrent red, irritated eyes are frequently not a single lingering infection, but can arise from chronic underlying conditions such as allergic conjunctivitis, chronic blepharitis (eyelid margin inflammation), dry eye disease, poor contact lens hygiene, or unsterile self-medication. A comprehensive slit-lamp examination by an eye care professional is needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it safe to put homoeopathic eye drops or diluted solutions directly into my eyes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Never instill unsterile, non-prescribed liquid preparations or home-diluted substances into your eyes. Non-sterile drops introduce serious risks of corneal ulcers, severe chemical irritation, and sight-threatening microbial infections. Only use sterile ophthalmic drops prescribed by an eye specialist.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the fundamental difference between ocular hypertension and glaucoma?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ocular hypertension means that fluid pressure inside the eye is higher than typical (above 21 mm Hg), but there is currently no detectable damage to the optic nerve and no visual field loss. In contrast, glaucoma is diagnosed when characteristic optic nerve fiber damage and visual field deficits are present.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can a homoeopathic consultation support my overall eye health responsibly?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At Anjali Homoeo Clinic, supportive care focuses on whole-person constitutional health, exploring lifestyle ergonomics, allergic tendencies, and general wellness. Dr. Anjali Chandrasekhar (BHMS) provides transparent guidance, emphasizes the strict necessity of ophthalmologist appointments and prescription eye-drop adherence, and ensures timely referral for medical eye care.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'treatments',
    pageName: 'Treatments & Clinical Modalities',
    category: 'core',
    path: '/treatments',
    title: 'Homeopathic Treatments & Specialized Clinical Care | Anjali Homoeo Clinic',
    description:
      'Explore classical constitutional homeopathy treatments for chronic, acute, and lifestyle ailments. Personalized holistic healing in Kerala & online.',
    url: 'https://anjalihomoeoclinic.com/treatments/',
    canonicalUrl: 'https://anjalihomoeoclinic.com/treatments/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Homeopathy treatments Kerala, constitutional care, holistic medicine Malappuram, chronic disease healing',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Homeopathic Treatments & Specialized Clinical Care',
        url: 'https://anjalihomoeoclinic.com/treatments/',
        description:
          'Explore classical constitutional homeopathy treatments for chronic, acute, and lifestyle ailments. Personalized holistic healing in Kerala & online.',
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'consultations',
    pageName: 'Consultations (Online & In-Clinic)',
    category: 'core',
    path: '/consultations',
    title: 'Online Video & In-Clinic Homeopathic Consultations | Anjali Homoeo Clinic',
    description:
      'Schedule an online video or in-clinic homeopathic consultation with Dr. Anjali Chandrasekhar. Comprehensive case-taking and doorstep remedy delivery.',
    url: 'https://anjalihomoeoclinic.com/consultations/',
    canonicalUrl: 'https://anjalihomoeoclinic.com/consultations/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Homeopathy online consultation, video appointment doctor Kerala, homeo clinic visit Kuttippuram, medicine courier',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Online Video & In-Clinic Homeopathic Consultations',
        url: 'https://anjalihomoeoclinic.com/consultations/',
        description:
          'Schedule an online video or in-clinic homeopathic consultation with Dr. Anjali Chandrasekhar.',
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'book-appointment',
    pageName: 'Book an Appointment',
    category: 'core',
    path: '/book-appointment',
    title: 'Book an Online or In-Clinic Appointment | Anjali Homoeo Clinic',
    description:
      'Book your homeopathic appointment instantly. Choose online video consultation or clinic visit in Kuttippuram or Puthanathani, Malappuram.',
    url: 'https://anjalihomoeoclinic.com/book-appointment/',
    canonicalUrl: 'https://anjalihomoeoclinic.com/book-appointment/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Book homeopathy appointment, consult Dr Anjali Chandrasekhar, online doctor booking Kerala',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Book an Online or In-Clinic Appointment',
        url: 'https://anjalihomoeoclinic.com/book-appointment/',
        description:
          'Book your homeopathic appointment instantly. Choose online video consultation or clinic visit.',
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'about',
    pageName: 'About Practice & Practitioner',
    category: 'core',
    path: '/about',
    title: 'About Dr. Anjali Chandrasekhar & Anjali Homoeo Clinic | Kerala',
    description:
      'Learn about Dr. Anjali Chandrasekhar (BHMS), practicing classical constitutional homeopathy with dedication across clinics in Kuttippuram and Puthanathani.',
    url: 'https://anjalihomoeoclinic.com/about/',
    canonicalUrl: 'https://anjalihomoeoclinic.com/about/',
    ogType: 'profile',
    twitterCard: 'summary_large_image',
    keywords:
      'Dr Anjali Chandrasekhar BHMS, Anjali Homoeo Clinic story, homeopathy doctor background, Kuttippuram, Puthanathani',
    schemaType: 'AboutPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Dr. Anjali Chandrasekhar & Anjali Homoeo Clinic',
        url: 'https://anjalihomoeoclinic.com/about/',
        description:
          'Learn about Dr. Anjali Chandrasekhar (BHMS), practicing classical constitutional homeopathy with dedication across clinics in Kuttippuram and Puthanathani.',
        mainEntity: {
          '@type': 'Physician',
          name: 'Dr. Anjali Chandrasekhar',
          jobTitle: 'Lead Homeopathic Consultant',
          medicalSpecialty: 'Homeopathy',
          worksFor: {
            '@type': 'MedicalClinic',
            name: 'Anjali Homoeo Clinic',
          },
        },
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'reviews',
    pageName: 'Patient Reviews & Testimonials',
    category: 'core',
    path: '/reviews',
    title: 'Patient Reviews & Treatment Feedback | Anjali Homoeo Clinic',
    description:
      'Read genuine patient experiences, recovery stories, and reviews for online and in-clinic constitutional homeopathic treatments.',
    url: 'https://anjalihomoeoclinic.com/reviews/',
    canonicalUrl: 'https://anjalihomoeoclinic.com/reviews/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Anjali Homoeo Clinic reviews, Dr Anjali patient testimonials, homeopathy feedback Kerala',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Patient Reviews & Treatment Feedback',
        url: 'https://anjalihomoeoclinic.com/reviews/',
        description:
          'Read genuine patient experiences, recovery stories, and reviews for online and in-clinic constitutional homeopathic treatments.',
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'faq',
    pageName: 'Frequently Asked Questions (FAQ)',
    category: 'core',
    path: '/faq',
    title: 'Frequently Asked Questions (FAQ) on Homeopathy | Anjali Homoeo Clinic',
    description:
      'Answers to common questions about homeopathic consultations, medicine safety, dietary rules, delivery times, and constitutional therapy.',
    url: 'https://anjalihomoeoclinic.com/faq/',
    canonicalUrl: 'https://anjalihomoeoclinic.com/faq/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Homeopathy questions, homeopathy side effects, coffee with homeopathy, online consultation medicine dispatch',
    schemaType: 'FAQPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does an online homeopathy consultation work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You schedule a time through our booking system, complete a medical intake form, and join a private video call with Dr. Anjali Chandrasekhar. Prescribed remedies are dispatched via courier to your address.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are homeopathic remedies safe alongside conventional medicines?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, homeopathic constitutional remedies do not chemically interact with allopathic pharmaceuticals. You should not discontinue any prescribed conventional medicine without your attending physician’s advice.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you treat patients outside Kerala and internationally?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We conduct tele-consultations for patients across India and worldwide. Prescription delivery is handled via expedited courier within India and approved international routes.',
            },
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'contact',
    pageName: 'Contact & Clinic Locations',
    category: 'core',
    path: '/contact',
    title: 'Contact Anjali Homoeo Clinic | Kuttippuram & Puthanathani, Kerala',
    description:
      'Get address, phone, WhatsApp, and Google Maps directions for Anjali Homoeo Clinic branches in Kavumopuram, Kuttippuram and Puthanathani, Malappuram.',
    url: 'https://anjalihomoeoclinic.com/contact/',
    canonicalUrl: 'https://anjalihomoeoclinic.com/contact/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Contact Anjali Homoeo Clinic, Kuttippuram phone number, Puthanathani clinic address, WhatsApp consultation',
    schemaType: 'ContactPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Anjali Homoeo Clinic',
        url: 'https://anjalihomoeoclinic.com/contact/',
        description:
          'Get address, phone, WhatsApp, and Google Maps directions for Anjali Homoeo Clinic branches in Kuttippuram and Puthanathani.',
        mainEntity: {
          '@type': 'MedicalClinic',
          name: 'Anjali Homoeo Clinic',
          telephone: '098951 01707',
          email: 'anjalihomoeoclinic@gmail.com',
        },
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'products',
    pageName: 'Curated Products & Remedies',
    category: 'core',
    path: '/products',
    title: 'Curated Homeopathic Wellness Products & Remedies | Anjali Homoeo Clinic',
    description:
      'Order genuine, doctor-recommended homeopathic remedies and seasonal wellness items with fast courier delivery across India.',
    url: 'https://anjalihomoeoclinic.com/products/',
    canonicalUrl: 'https://anjalihomoeoclinic.com/products/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Homeopathic products online, buy Arnica hair oil, mother tinctures Kerala, immunity drops',
    schemaType: 'CollectionPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Curated Homeopathic Wellness Products & Remedies',
        url: 'https://anjalihomoeoclinic.com/products/',
        description:
          'Order genuine, doctor-recommended homeopathic remedies and seasonal wellness items.',
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'blog',
    pageName: 'Knowledge Hub & Blog',
    category: 'blog',
    path: '/blog',
    title: 'Homeopathy Insights & Health Knowledge Hub | Anjali Homoeo Clinic',
    description:
      'Explore expert articles on women’s health, lifestyle conditions, holistic prevention, and constitutional homeopathy by Dr. Anjali Chandrasekhar.',
    url: 'https://anjalihomoeoclinic.com/blog/',
    canonicalUrl: 'https://anjalihomoeoclinic.com/blog/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Homeopathy blog Kerala, women health articles, PCOD education, menstrual cramp management',
    schemaType: 'CollectionPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Homeopathy Insights & Health Knowledge Hub',
        url: 'https://anjalihomoeoclinic.com/blog/',
        description:
          'Explore expert articles on women’s health, lifestyle conditions, holistic prevention, and constitutional homeopathy.',
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'blog-severe-period-pain',
    pageName: 'Blog: Severe Period Pain When Are Cramps a Concern',
    category: 'blog',
    path: '/severe-period-pain-when-to-worry/',
    title: 'Severe Period Pain: When Are Menstrual Cramps a Concern? | Anjali Homoeo Clinic',
    description:
      'Learn when severe period pain is a concern, explore common causes of menstrual cramps, recognize warning signs, and discover diagnosis and treatment options.',
    url: 'https://anjalihomoeoclinic.com/severe-period-pain-when-to-worry',
    canonicalUrl: 'https://anjalihomoeoclinic.com/severe-period-pain-when-to-worry',
    ogType: 'article',
    ogImage: 'https://anjalihomoeoclinic.com/severe-period-pain-banner.png',
    twitterCard: 'summary_large_image',
    keywords:
      'Severe period pain, dysmenorrhea causes, menstrual cramps when to worry, endometriosis homeopathy, adenomyosis cramps',
    schemaType: 'BlogPosting',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Severe Period Pain: When Are Menstrual Cramps a Concern?',
        description:
          'Learn when severe period pain is a concern, explore common causes of menstrual cramps, recognize warning signs, and discover diagnosis and treatment options.',
        image: 'https://anjalihomoeoclinic.com/severe-period-pain-banner.png',
        url: 'https://anjalihomoeoclinic.com/severe-period-pain-when-to-worry',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://anjalihomoeoclinic.com/severe-period-pain-when-to-worry',
        },
        author: {
          '@type': 'Person',
          name: 'Dr. Anjali Chandrasekhar',
          jobTitle: 'Lead Homeopathic Physician',
        },
        publisher: {
          '@type': 'MedicalClinic',
          name: 'Anjali Homoeo Clinic',
          url: 'https://anjalihomoeoclinic.com/',
        },
        datePublished: '2026-03-12',
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'blog-pcod',
    pageName: 'Blog: PCOD Explained Symptoms Causes Treatment',
    category: 'blog',
    path: '/pcod-symptoms-causes-diagnosis-treatment/',
    title:
      'PCOD Explained: Symptoms, Causes, Diagnosis and Treatment Options | Anjali Homoeo Clinic',
    description:
      'Comprehensive clinical guide on PCOD: understand symptoms, underlying causes, hormonal diagnostic criteria, lifestyle modifications, and holistic homeopathic treatment.',
    url: 'https://anjalihomoeoclinic.com/pcod-symptoms-causes-diagnosis-treatment/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/pcod-symptoms-causes-diagnosis-treatment/',
    ogType: 'article',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords:
      'PCOD explained, PCOS symptoms and causes, ultrasound diagnosis PCOD, homeopathic treatment for PCOD',
    schemaType: 'BlogPosting',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline:
          'PCOD Explained: Symptoms, Causes, Diagnosis and Treatment Options',
        description:
          'Comprehensive clinical guide on PCOD: understand symptoms, underlying causes, hormonal diagnostic criteria, lifestyle modifications, and holistic homeopathic treatment.',
        url: 'https://anjalihomoeoclinic.com/pcod-symptoms-causes-diagnosis-treatment/',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://anjalihomoeoclinic.com/pcod-symptoms-causes-diagnosis-treatment/',
        },
        author: {
          '@type': 'Person',
          name: 'Dr. Anjali Chandrasekhar',
          jobTitle: 'Lead Homeopathic Physician',
        },
        publisher: {
          '@type': 'MedicalClinic',
          name: 'Anjali Homoeo Clinic',
          url: 'https://anjalihomoeoclinic.com/',
        },
        datePublished: '2026-03-08',
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'blog-uterine-fibroids',
    pageName: 'Blog: Uterine Fibroids Symptoms Diagnosis and Treatment',
    category: 'blog',
    path: '/uterine-fibroids-symptoms-diagnosis-treatment/',
    title:
      'Uterine Fibroids: Symptoms, Diagnosis and Treatment Options | Anjali Homoeo Clinic',
    description:
      'Comprehensive clinical guide to uterine fibroid causes, heavy bleeding, pelvic pressure, ultrasound diagnosis, and individualized treatment options at Anjali Homoeo Clinic, Malappuram.',
    url: 'https://anjalihomoeoclinic.com/uterine-fibroids-symptoms-diagnosis-treatment/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/uterine-fibroids-symptoms-diagnosis-treatment/',
    ogType: 'article',
    ogImage:
      'https://anjalihomoeoclinic.com/assets/aistudio/Uterine_Fibroids_Medical_Infographic_0f41f481.png',
    twitterCard: 'summary_large_image',
    keywords:
      'Uterine fibroids homeopathy, leiomyomas symptoms Malappuram, myoma treatment without surgery Kerala, heavy menstrual bleeding fibroid, pelvic ultrasound fibroids',
    schemaType: 'BlogPosting',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id':
              'https://anjalihomoeoclinic.com/uterine-fibroids-symptoms-diagnosis-treatment/#article',
            headline:
              'Uterine Fibroids: Symptoms, Diagnosis and Available Treatment Options',
            description:
              'Uterine fibroids are common, noncancerous growths that develop in or around the uterus. Explore causes, symptoms, diagnosis, and medical, non-surgical, and surgical treatment options.',
            image:
              'https://anjalihomoeoclinic.com/assets/aistudio/Uterine_Fibroids_Medical_Infographic_0f41f481.png',
            url: 'https://anjalihomoeoclinic.com/uterine-fibroids-symptoms-diagnosis-treatment/',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://anjalihomoeoclinic.com/uterine-fibroids-symptoms-diagnosis-treatment/',
            },
            author: {
              '@type': 'Person',
              name: 'Dr. Anjali Chandrasekhar',
              jobTitle: 'Senior Homeopathic Physician',
            },
            publisher: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              url: 'https://anjalihomoeoclinic.com/',
            },
            datePublished: '2026-10-20',
            dateModified: '2026-10-20',
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://anjalihomoeoclinic.com/uterine-fibroids-symptoms-diagnosis-treatment/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Are uterine fibroids cancerous?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Uterine fibroids are almost always benign, meaning they are not cancerous. However, unusual symptoms or changes should be assessed by a qualified healthcare professional rather than automatically attributed to known fibroids.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can uterine fibroids disappear without treatment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Some fibroids remain stable, while others may change in size over time. Fibroids often shrink after menopause, but spontaneous disappearance cannot be guaranteed.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can women with uterine fibroids become pregnant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Many women with uterine fibroids conceive naturally. However, certain fibroids may affect fertility or pregnancy outcomes, so individual assessment is important when planning a pregnancy.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does every uterine fibroid require surgery?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Many fibroids do not require treatment, particularly when they cause no symptoms. Monitoring or medication may be appropriate in some cases, while procedures or surgery may be recommended for more significant problems.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which treatment is best for uterine fibroids?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The most appropriate treatment depends on symptoms, fibroid size and location, age, general health, and pregnancy plans. A gynecologist can help compare the available options and recommend an individualized approach.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-20',
  },
  {
    id: 'blog-chronic-sinusitis',
    pageName: 'Blog: Chronic Sinusitis Symptoms Causes and Treatment',
    category: 'blog',
    path: '/chronic-sinusitis-symptoms-causes-treatment/',
    title:
      'Chronic Sinusitis: Symptoms, Causes & Treatment Options | Anjali Homoeo Clinic',
    description:
      'Understand chronic sinusitis symptoms, facial pressure, nasal polyps, diagnostic endoscopy, CT evaluation, and individualized treatments at Anjali Homoeo Clinic, Malappuram.',
    url: 'https://anjalihomoeoclinic.com/chronic-sinusitis-symptoms-causes-treatment/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/chronic-sinusitis-symptoms-causes-treatment/',
    ogType: 'article',
    ogImage:
      'https://anjalihomoeoclinic.com/assets/aistudio/Chronic_Sinusitis__Symptoms_and_Treatment_e14a9354.png',
    twitterCard: 'summary_large_image',
    keywords:
      'Chronic sinusitis homeopathy Kerala, sinusitis treatment Malappuram, nasal polyps without surgery, facial pain sinus pressure, saline nasal irrigation',
    schemaType: 'BlogPosting',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id':
              'https://anjalihomoeoclinic.com/chronic-sinusitis-symptoms-causes-treatment/#article',
            headline:
              'Chronic Sinusitis: Symptoms, Causes & Treatment Options',
            description:
              'Chronic sinusitis is a persistent inflammatory condition affecting the sinuses for 12 weeks or longer. Explore common symptoms, underlying causes, diagnostic procedures, and medical and home treatment options.',
            image:
              'https://anjalihomoeoclinic.com/assets/aistudio/Chronic_Sinusitis__Symptoms_and_Treatment_e14a9354.png',
            url: 'https://anjalihomoeoclinic.com/chronic-sinusitis-symptoms-causes-treatment/',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://anjalihomoeoclinic.com/chronic-sinusitis-symptoms-causes-treatment/',
            },
            author: {
              '@type': 'Person',
              name: 'Dr. Anjali Chandrasekhar',
              jobTitle: 'Senior Homeopathic Physician',
            },
            publisher: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              url: 'https://anjalihomoeoclinic.com/',
            },
            datePublished: '2026-10-20',
            dateModified: '2026-10-20',
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://anjalihomoeoclinic.com/chronic-sinusitis-symptoms-causes-treatment/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How long does chronic sinusitis last?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Chronic sinusitis is defined by symptoms lasting at least 12 weeks. The duration can vary, and some people require ongoing treatment to control inflammation and reduce recurring symptoms.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can chronic sinusitis be cured permanently?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Some people achieve long-lasting relief, while others experience recurring symptoms that require continued management. The outcome depends on factors such as nasal polyps, allergies, structural problems, and response to treatment.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is chronic sinusitis always caused by bacteria?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Chronic sinusitis is often associated with persistent inflammation rather than an ongoing bacterial infection. Antibiotics are therefore not necessary in every case.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can allergies cause chronic sinusitis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Allergies can contribute to nasal inflammation and may coexist with chronic sinusitis. However, not everyone with chronic sinusitis has allergies, so assessment should be based on the individual\'s symptoms and medical history.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is surgery always required for chronic sinusitis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Many people can manage their symptoms with appropriate medical treatment. Surgery may be considered when symptoms remain troublesome despite suitable treatment or when structural problems or nasal polyps require intervention.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can chronic sinusitis affect sleep?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Persistent nasal congestion, postnasal drip, and coughing may interrupt sleep and contribute to daytime fatigue. Treating the underlying condition may improve sleep quality.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-20',
  },
  {
    id: 'blog-asthma-symptoms',
    pageName: 'Blog: Asthma Symptoms Early Warning Signs',
    category: 'blog',
    path: '/asthma-symptoms-early-warning-signs/',
    title:
      'Asthma Symptoms: Early Warning Signs You Should Recognize | Anjali Homoeo Clinic',
    description:
      'Learn the early warning signs of asthma, common triggers, diagnostic spirometry, nighttime coughing, and individualized respiratory care at Anjali Homoeo Clinic, Malappuram.',
    url: 'https://anjalihomoeoclinic.com/asthma-symptoms-early-warning-signs/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/asthma-symptoms-early-warning-signs/',
    ogType: 'article',
    ogImage:
      'https://anjalihomoeoclinic.com/assets/aistudio/Asthma_Symptoms_Awareness_Banner_fe3d3622.png',
    twitterCard: 'summary_large_image',
    keywords:
      'Asthma symptoms, early warning signs of asthma, wheezing and coughing, asthma triggers, homeopathic asthma treatment Malappuram Kerala, exercise induced asthma, respiratory care',
    schemaType: 'BlogPosting',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id':
              'https://anjalihomoeoclinic.com/asthma-symptoms-early-warning-signs/#article',
            headline:
              'Asthma Symptoms: Early Warning Signs You Should Recognize',
            description:
              'Asthma is a chronic respiratory condition that affects the airways. Learn to recognize persistent coughing, wheezing, nighttime breathlessness, triggers, and evidence-informed care.',
            image:
              'https://anjalihomoeoclinic.com/assets/aistudio/Asthma_Symptoms_Awareness_Banner_fe3d3622.png',
            url: 'https://anjalihomoeoclinic.com/asthma-symptoms-early-warning-signs/',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://anjalihomoeoclinic.com/asthma-symptoms-early-warning-signs/',
            },
            author: {
              '@type': 'Person',
              name: 'Dr. Anjali Chandrasekhar',
              jobTitle: 'Senior Homeopathic Physician',
            },
            publisher: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              url: 'https://anjalihomoeoclinic.com/',
            },
            datePublished: '2026-10-22',
            dateModified: '2026-10-22',
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://anjalihomoeoclinic.com/asthma-symptoms-early-warning-signs/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What are the earliest symptoms of asthma?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Early asthma symptoms may include recurring coughing, mild wheezing, chest tightness, or breathlessness during exercise. Symptoms may be more noticeable at night or after exposure to triggers.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can asthma begin in adulthood?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Although asthma often develops during childhood, it can also begin in adulthood. New or persistent breathing problems should be evaluated to determine the cause.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can asthma occur without wheezing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Some people experience coughing or breathlessness without noticeable wheezing. However, these symptoms can have several causes, so diagnostic testing may be needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does nighttime coughing always mean asthma?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Nighttime coughing may be associated with asthma, but acid reflux, postnasal drip, respiratory infections, and other conditions can also cause it.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can asthma be controlled?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Many people can achieve good symptom control with appropriate treatment, trigger management, and regular medical follow-up. Individual outcomes vary, and some people require adjustments to their treatment plan over time.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is asthma contagious?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Asthma itself is not contagious and cannot be passed directly from one person to another. However, respiratory infections that trigger asthma symptoms can spread between people.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'blog-homoeopathic-clinic-in-malappuram',
    pageName: 'Blog: Homoeopathic Clinic in Malappuram Guide',
    category: 'blog',
    path: '/homoeopathic-clinic-in-malappuram-guide/',
    title:
      'Homoeopathic Clinic in Malappuram: A Guide to Choosing a Clinic | Anjali Homoeo Clinic',
    description:
      'Comprehensive guide on choosing a homoeopathic clinic in Malappuram, Kerala. Check doctor qualifications (BHMS), consultation expectations, questions to ask, and patient safety precautions.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-clinic-in-malappuram-guide/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-clinic-in-malappuram-guide/',
    ogType: 'article',
    ogImage:
      'https://anjalihomoeoclinic.com/assets/aistudio/Homoeopathic_Clinic_in_Malappuram_3c8baf0d.png',
    twitterCard: 'summary_large_image',
    keywords:
      'Homoeopathic clinic in Malappuram, Homoeopathic doctor in Malappuram, Homoeopathic treatment in Malappuram, best homoeopathic clinic in Malappuram, Dr Anjali Chandrasekhar, patient safety homoeopathy Kerala',
    schemaType: 'BlogPosting',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id':
              'https://anjalihomoeoclinic.com/homoeopathic-clinic-in-malappuram-guide/#article',
            headline:
              'Homoeopathic Clinic in Malappuram: A Guide to Choosing a Clinic',
            description:
              'Choosing the right healthcare provider is an important step. Explore how to choose a homoeopathic clinic in Malappuram, what to expect during consultation, credentials to verify, and patient safety guidelines.',
            image:
              'https://anjalihomoeoclinic.com/assets/aistudio/Homoeopathic_Clinic_in_Malappuram_3c8baf0d.png',
            url: 'https://anjalihomoeoclinic.com/homoeopathic-clinic-in-malappuram-guide/',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://anjalihomoeoclinic.com/homoeopathic-clinic-in-malappuram-guide/',
            },
            author: {
              '@type': 'Person',
              name: 'Dr. Anjali Chandrasekhar',
              jobTitle: 'Senior Homeopathic Physician',
            },
            publisher: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              url: 'https://anjalihomoeoclinic.com/',
            },
            datePublished: '2026-10-22',
            dateModified: '2026-10-22',
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://anjalihomoeoclinic.com/homoeopathic-clinic-in-malappuram-guide/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I choose a homoeopathic clinic in Malappuram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Check the practitioner\'s qualifications and registration, confirm the services offered, ask about consultation fees, and assess the clarity of communication. Be cautious of claims that promise guaranteed cures or discourage necessary medical treatment.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I check before choosing a homoeopathic doctor in Malappuram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Verify the practitioner\'s educational qualifications and professional registration. Ask about their consultation process, the limitations of the proposed treatment, and whether your symptoms require further medical assessment.',
                },
              },
              {
                '@type': 'Question',
                name: 'What happens during a homoeopathy consultation in Malappuram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The practitioner may discuss your symptoms, medical history, existing medicines, and previous treatments. Ask questions about diagnosis, safety, evidence-based alternatives, and follow-up arrangements.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is homoeopathy effective for every health condition?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Reliable scientific evidence has not established that homoeopathy is effective for treating most health conditions. It should not replace proven treatments or delay appropriate medical care.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I take homoeopathic remedies alongside prescribed medicines?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Do not assume that combining treatments is safe. Discuss every remedy with your treating healthcare professional, and never stop or change prescribed medicines without medical advice.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I bring to my first consultation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Bring relevant medical records, previous test results, a list of medicines and supplements, and notes about your symptoms. You can also prepare questions about consultation fees, treatment limitations, and follow-up care.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I find reliable information about homoeopathic treatment in Malappuram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Review clinic information carefully, verify practitioner credentials, and consult qualified healthcare professionals. Evaluate health claims critically, especially when they promise guaranteed results or suggest avoiding established medical treatments.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
  {
    id: 'blog-what-causes-piles',
    pageName: 'Blog: What Causes Piles? Risk Factors & Prevention',
    category: 'blog',
    path: '/what-causes-piles-risk-factors-prevention/',
    title:
      'What Causes Piles? Common Risk Factors and Prevention Tips | Anjali Homoeo Clinic',
    description:
      'Explore the causes of piles (haemorrhoids), risk factors including chronic constipation and straining, prevention tips, early symptoms, and treatment options in Malappuram, Kerala.',
    url: 'https://anjalihomoeoclinic.com/what-causes-piles-risk-factors-prevention/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/what-causes-piles-risk-factors-prevention/',
    ogType: 'article',
    ogImage:
      'https://anjalihomoeoclinic.com/assets/aistudio/What_Causes_Piles__Risk_Factors___Prevention_9dd18daf.png',
    twitterCard: 'summary_large_image',
    keywords:
      'What causes piles, Piles causes, haemorrhoids risk factors, piles prevention tips, Piles treatment in Malappuram, homoeopathic clinic in Malappuram, anorectal bleeding causes Kerala, Dr Anjali Chandrasekhar',
    schemaType: 'BlogPosting',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id':
              'https://anjalihomoeoclinic.com/what-causes-piles-risk-factors-prevention/#article',
            headline:
              'What Causes Piles? Common Risk Factors and Prevention Tips',
            description:
              'Piles (haemorrhoids) affect millions of individuals. Explore what causes piles, key risk factors like constipation and straining, practical prevention tips, early symptoms, and evidence-informed care.',
            image:
              'https://anjalihomoeoclinic.com/assets/aistudio/What_Causes_Piles__Risk_Factors___Prevention_9dd18daf.png',
            url: 'https://anjalihomoeoclinic.com/what-causes-piles-risk-factors-prevention/',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://anjalihomoeoclinic.com/what-causes-piles-risk-factors-prevention/',
            },
            author: {
              '@type': 'Person',
              name: 'Dr. Anjali Chandrasekhar',
              jobTitle: 'Senior Homeopathic Physician',
            },
            publisher: {
              '@type': 'MedicalClinic',
              name: 'Anjali Homoeo Clinic',
              url: 'https://anjalihomoeoclinic.com/',
            },
            datePublished: '2026-10-22',
            dateModified: '2026-10-22',
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://anjalihomoeoclinic.com/what-causes-piles-risk-factors-prevention/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the most common cause of piles?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Constipation and straining during bowel movements are common contributing factors. Other factors include pregnancy, prolonged toilet sitting, ageing, and repeated irritation around the anus.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can piles be prevented completely?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not always. However, eating enough fibre, maintaining adequate hydration, staying physically active, and avoiding excessive straining can help reduce common risk factors.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does sitting for long periods cause piles?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Prolonged sitting on the toilet may increase pressure around the anal region. Sitting for long periods elsewhere is not necessarily a direct cause, but regular movement can support general health and bowel function.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is rectal bleeding always caused by piles?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Rectal bleeding can result from anal fissures, inflammatory bowel conditions, polyps, colorectal cancer, and other medical problems. Persistent or unexplained bleeding should be assessed by a healthcare professional.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can homoeopathy cure piles?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reliable scientific evidence has not established that homoeopathy cures piles. Evidence-based options include lifestyle changes, appropriate medicines, office-based procedures, and surgery when indicated.',
                },
              },
              {
                '@type': 'Question',
                name: 'When should I see a doctor for piles?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Seek medical advice for recurrent bleeding, persistent pain, a new anal lump, or symptoms that do not improve. Heavy bleeding, fainting, black stools, or severe pain with fever requires urgent assessment.',
                },
              },
            ],
          },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-22',
  },
];
