export function pickVariant(seed: string, variants: string[]): string {
  const value = [...seed].reduce((sum, c) => sum + c.charCodeAt(0), 0);
  return variants[value % variants.length];
}

export const introVariants = [
  "Maritime injury claims often involve ticket-contract deadlines and venue clauses that differ from ordinary personal injury claims.",
  "Cruise injury cases can require fast evidence preservation, including shipboard reports, witness contact data, and medical documentation.",
  "When injuries happen at sea or during excursions, liability analysis may involve cruise operators plus third-party contractors."
];

export const legalBackgroundVariants = [
  "Maritime and admiralty principles can apply even when the voyage starts in a U.S. port.",
  "Cruise ticket contracts may shorten notice periods and filing windows compared with land-based claims.",
  "Liability can involve the cruise line, onboard contractors, and third-party excursion operators based on control and negligence facts."
];

export const compensationVariants = [
  "Potential compensation may include medical bills, wage loss, and future care costs.",
  "Recoverable damages may include rehabilitation, lost earning ability, and non-economic harms where permitted.",
  "The value of a claim often depends on injury severity, documentation quality, and contractual limitations."
];

export const ctaVariants = [
  "Talk to a Cruise Injury Lawyer",
  "Get a Free Maritime Case Review",
  "Check If You Have a Claim"
];
