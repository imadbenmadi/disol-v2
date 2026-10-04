# Lead form pattern

The "Start a project" flow. It turns a visitor into a qualified lead in three short steps: Service (ChoiceGroup), Project (budget, timeline, brief) and Contact.

- Composition: Card + Stepper + ChoiceGroup + Select + Textarea + TextField + Buttons. One question group per step. Back is always available; Continue validates only the current step.
- Store a partial lead after step 1 (with consent) so marketing can follow up on drop-offs.
- After submit: replace the card with a success EmptyState ("Request received. We reply within one business day.") and send the lead-confirmation email (see Email pattern).
- Track: `lead_step_viewed`, `lead_step_completed`, `lead_submitted` with the chosen services, budget and source (UTM).
