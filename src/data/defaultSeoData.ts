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
      "Women's health homeopathy, PCOD treatment Kerala, PCOS homoeopathy, menstrual cramps dysmenorrhea, fibroid homeopathy, Dr Anjali Chandrasekhar",
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Women’s Health Gynecological Homeopathic Treatment in Malappuram',
        headline:
          'Women’s Health Gynecological Homeopathic Treatment in Malappuram',
        url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-womens-health-gynecological-care/',
        description:
          "Explore women's health and gynecological care at Anjali Homoeo Clinic in Malappuram, Kerala. Learn about menstrual health and personalized consultations.",
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
        ],
        medicalAudience: {
          '@type': 'MedicalAudience',
          audienceType: 'Patients seeking non-hormonal, constitutional homoeopathic care',
        },
        mainEntity: {
          '@type': 'MedicalClinic',
          name: 'Anjali Homoeo Clinic',
          telephone: '098951 01707',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kuttippuram',
            addressRegion: 'Keralam',
            addressCountry: 'IN',
          },
        },
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'respiratory-care',
    pageName: 'Respiratory, ENT & Allergy Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/',
    title:
      'Respiratory, ENT & Allergy Conditions Homeopathic Treatment in Malappuram',
    description:
      'Explore homoeopathic consultations for respiratory, ENT and allergy concerns at Anjali Homoeo Clinic in Malappuram, Kerala, with personalized healthcare guidance.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Asthma homeopathy Kerala, allergic rhinitis homeopathy, sinusitis treatment Malappuram, chronic bronchitis, tonsillitis homeo',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Respiratory, ENT & Allergy Conditions Homeopathic Treatment in Malappuram',
        headline:
          'Respiratory, ENT & Allergy Conditions Homeopathic Treatment in Malappuram',
        url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/',
        description:
          'Explore homoeopathic consultations for respiratory, ENT and allergy concerns at Anjali Homoeo Clinic in Malappuram, Kerala, with personalized healthcare guidance.',
        about: [
          { '@type': 'MedicalCondition', name: 'Bronchial Asthma' },
          { '@type': 'MedicalCondition', name: 'Allergic Rhinitis' },
          { '@type': 'MedicalCondition', name: 'Chronic Sinusitis' },
          { '@type': 'MedicalCondition', name: 'Recurrent Tonsillitis' },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'skin-hair-care',
    pageName: 'Skin, Hair & Scalp Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-skin-hair-scalp-conditions/',
    title: 'Skin, Hair & Scalp Homeopathic Treatment in Malappuram',
    description:
      'Explore consultations for skin, hair and scalp concerns at Anjali Homoeo Clinic in Malappuram, Kerala. Get personalized guidance for your healthcare needs.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Psoriasis homeopathy Kerala, eczema treatment Malappuram, alopecia areata homeo, acne vulgaris treatment, chronic hives urticaria',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Skin, Hair & Scalp Homeopathic Treatment in Malappuram',
        headline: 'Skin, Hair & Scalp Homeopathic Treatment in Malappuram',
        url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/',
        description:
          'Explore consultations for skin, hair and scalp concerns at Anjali Homoeo Clinic in Malappuram, Kerala. Get personalized guidance for your healthcare needs.',
        about: [
          { '@type': 'MedicalCondition', name: 'Psoriasis & Chronic Dermatitis' },
          { '@type': 'MedicalCondition', name: 'Eczema & Atopic Dermatitis' },
          { '@type': 'MedicalCondition', name: 'Alopecia Areata & Hair Loss' },
          { '@type': 'MedicalCondition', name: 'Acne Vulgaris' },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'renal-thyroid-care',
    pageName: 'Renal, Urinary, Gallbladder & Thyroid Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/',
    title:
      'Renal, Urinary & Thyroid Homeopathic Treatment in Malappuram',
    description:
      'Explore consultations for renal, urinary, gallbladder and thyroid concerns at Anjali Homoeo Clinic in Malappuram, Kerala. Get personalized healthcare guidance.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Kidney stones homeopathy Kerala, urinary tract infection homeo, gallbladder stone homeopathy, hypothyroidism treatment Malappuram',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Renal, Urinary & Thyroid Homeopathic Treatment in Malappuram',
        headline:
          'Renal, Urinary & Thyroid Homeopathic Treatment in Malappuram',
        url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/',
        description:
          'Explore consultations for renal, urinary, gallbladder and thyroid concerns at Anjali Homoeo Clinic in Malappuram, Kerala. Get personalized healthcare guidance.',
        about: [
          { '@type': 'MedicalCondition', name: 'Renal Calculi (Kidney Stones)' },
          { '@type': 'MedicalCondition', name: 'Recurrent Urinary Tract Infections' },
          { '@type': 'MedicalCondition', name: 'Cholelithiasis (Gallbladder Stones)' },
          { '@type': 'MedicalCondition', name: 'Hypothyroidism & Thyroid Nodules' },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'neurological-care',
    pageName: 'Neurological & Headache Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-neurological-headache-conditions/',
    title:
      'Headache & Neurological Homeopathic Treatment in Malappuram',
    description:
      'Explore consultations for headaches and neurological concerns at Anjali Homoeo Clinic in Malappuram, Kerala. Receive personalized healthcare guidance for your needs.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-neurological-headache-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-neurological-headache-conditions/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Migraine homeopathy Kerala, cluster headache treatment, trigeminal neuralgia, vertigo Meniere disease, neuropathy homeo',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Headache & Neurological Homeopathic Treatment in Malappuram',
        headline:
          'Headache & Neurological Homeopathic Treatment in Malappuram',
        url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-neurological-headache-conditions/',
        description:
          'Explore consultations for headaches and neurological concerns at Anjali Homoeo Clinic in Malappuram, Kerala. Receive personalized healthcare guidance for your needs.',
        about: [
          { '@type': 'MedicalCondition', name: 'Migraine with and without Aura' },
          { '@type': 'MedicalCondition', name: 'Chronic Tension Headache' },
          { '@type': 'MedicalCondition', name: 'Trigeminal Neuralgia' },
          { '@type': 'MedicalCondition', name: 'Vertigo & Vestibular Dysfunction' },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'anorectal-vascular-care',
    pageName: 'Anorectal & Vascular Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-anorectal-vascular-conditions/',
    title:
      'Anorectal & Vascular Homeopathic Treatment in Malappuram',
    description:
      'Explore consultations for anorectal and vascular concerns at Anjali Homoeo Clinic in Malappuram, Kerala. Learn about symptoms, healthcare options and personalized guidance.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-anorectal-vascular-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-anorectal-vascular-conditions/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Piles treatment without surgery Kerala, hemorrhoids homeopathy Malappuram, anal fissure homeo, varicose veins non-surgical homeopathic cure',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Anorectal & Vascular Homeopathic Treatment in Malappuram',
        headline:
          'Anorectal & Vascular Homeopathic Treatment in Malappuram',
        url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-anorectal-vascular-conditions/',
        description:
          'Explore consultations for anorectal and vascular concerns at Anjali Homoeo Clinic in Malappuram, Kerala. Learn about symptoms, healthcare options and personalized guidance.',
        about: [
          { '@type': 'MedicalCondition', name: 'Hemorrhoids (Piles - Bleeding & Non-bleeding)' },
          { '@type': 'MedicalCondition', name: 'Anal Fissures' },
          { '@type': 'MedicalCondition', name: 'Fistula-in-ano' },
          { '@type': 'MedicalCondition', name: 'Varicose Veins & Venous Insufficiency' },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'joint-musculoskeletal-care',
    pageName: 'Joint, Musculoskeletal & Chronic Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/',
    title:
      'Joint & Musculoskeletal Homeopathic Treatment in Malappuram',
    description:
      'Explore consultations for joint pain, musculoskeletal concerns and chronic conditions at Anjali Homoeo Clinic in Malappuram, Kerala. Get personalized healthcare guidance.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Arthritis homeopathy Kerala, osteoarthritis knee pain, cervical spondylosis homeo, sciatica pain relief, gout hyperuricemia',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Joint & Musculoskeletal Homeopathic Treatment in Malappuram',
        headline:
          'Joint & Musculoskeletal Homeopathic Treatment in Malappuram',
        url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/',
        description:
          'Explore consultations for joint pain, musculoskeletal concerns and chronic conditions at Anjali Homoeo Clinic in Malappuram, Kerala. Get personalized healthcare guidance.',
        about: [
          { '@type': 'MedicalCondition', name: 'Osteoarthritis & Degenerative Joint Disease' },
          { '@type': 'MedicalCondition', name: 'Rheumatoid Arthritis' },
          { '@type': 'MedicalCondition', name: 'Cervical & Lumbar Spondylosis' },
          { '@type': 'MedicalCondition', name: 'Sciatica & Disc Prolapse' },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
  },
  {
    id: 'ophthalmic-eye-care',
    pageName: 'Ophthalmic & Eye Conditions',
    category: 'clinical',
    path: '/homoeopathic-treatment-for-ophthalmic-eye-conditions/',
    title:
      'Eye Care Homeopathic Consultation in Malappuram',
    description:
      'Explore eye health consultations at Anjali Homoeo Clinic in Malappuram, Kerala. Learn about common eye concerns, symptoms and appropriate healthcare options.',
    url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/',
    canonicalUrl:
      'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'Allergic conjunctivitis homeopathy, dry eyes homeopathic eye drops, styes chalazion treatment, blepharitis Malappuram',
    schemaType: 'MedicalWebPage',
    schemaJson: JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Eye Care Homeopathic Consultation in Malappuram',
        headline:
          'Eye Care Homeopathic Consultation in Malappuram',
        url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/',
        description:
          'Explore eye health consultations at Anjali Homoeo Clinic in Malappuram, Kerala. Learn about common eye concerns, symptoms and appropriate healthcare options.',
        about: [
          { '@type': 'MedicalCondition', name: 'Allergic Conjunctivitis' },
          { '@type': 'MedicalCondition', name: 'Chronic Blepharitis' },
          { '@type': 'MedicalCondition', name: 'Recurrent Styes (Hordeolum)' },
          { '@type': 'MedicalCondition', name: 'Dry Eye Syndrome' },
        ],
      },
      null,
      2
    ),
    lastUpdated: '2026-10-19',
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
