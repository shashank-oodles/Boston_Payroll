export const STEPS = [
  { id: 1, key: "whoToPay", percent: 10 },
  { id: 2, key: "payrollStatus", percent: 25 },
  { id: 3, key: "industry", percent: 40 },
  { id: 4, key: "businessEntity", percent: 60 },
  { id: 5, key: "accountant", percent: 80 },
  { id: 6, key: "help", percent: 99 }
];

export const BUSINESS_ENTITY_TYPES = [
  {
    value: "sole_proprietorship",
    label: "Sole Proprietorship",
    description: "Owned and operated by one individual with no legal separation.",
  },
  {
    value: "llc",
    label: "Limited Liability Company (LLC)",
    description: "A flexible structure offering liability protection and tax options.",
  },
  {
    value: "partnership",
    label: "Partnership",
    description: "Owned by two or more individuals sharing profits and responsibilities.",
  },
  {
    value: "c_corporation",
    label: "C Corporation",
    description: "A separate legal entity taxed independently from its owners.",
  },
  {
    value: "s_corporation",
    label: "S Corporation",
    description: "A corporation that passes income directly to shareholders for tax purposes.",
  },
  {
    value: "nonprofit",
    label: "Nonprofit Organization",
    description: "Formed for charitable, educational, or public service purposes.",
  },
  {
    value: "trust",
    label: "Trust",
    description: "A legal arrangement where assets are held for beneficiaries.",
  },
  {
    value: "estate",
    label: "Estate",
    description: "Legal entity managing assets of a deceased individual.",
  },
];

