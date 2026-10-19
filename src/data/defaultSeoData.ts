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
          },
          {
            '@type': 'Physician',
            '@id': 'https://anjalihomoeoclinic.com/#practitioner',
            name: 'Dr. Anjali Chandrasekhar',
            medicalSpecialty: 'Homeopathy',
            jobTitle: 'Lead Homoeopathic Physician',
            alumniOf: 'BHMS (Bachelor of Homeopathic Medicine and Surgery)',
            worksFor: {
              '@id': 'https://anjalihomoeoclinic.com/#clinic',
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
];
