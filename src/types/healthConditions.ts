export interface HealthCategory {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  description: string;
  iconType:
    | 'women'
    | 'respiratory'
    | 'skin'
    | 'neuro'
    | 'renal'
    | 'vascular'
    | 'joint'
    | 'eye';
}

export interface ConditionFAQ {
  question: string;
  answer: string;
}

export interface HealthCondition {
  id: string;
  name: string;
  commonName?: string;
  categoryId: string;
  categoryName: string;
  slug: string;
  shortDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  seoDescription: string;
  bodySystem: string;
  overview: string;
  overviewPoints: string[];
  commonSymptoms: string[];
  symptomsNote?: string;
  causesAndRisks: string[];
  diagnosisMethods: string[];
  conventionalTreatment: string[];
  homeopathicApproach: string[];
  warningSigns: string[];
  lifestyleTips: string[];
  faqs: ConditionFAQ[];
  relatedConditionIds: string[];
}
