# Contact form pattern

The general contact form for support, partnerships and press, kept separate from the lead form so sales leads stay clean.

- Composition: SectionHeading + Card with TextField, Select (topic routes to the right inbox), Textarea with counter, consent Checkbox, plus a "what happens next" column in label-mono.
- Validate on blur and on submit. Show field errors inline, plus an error Alert above the form only if the server rejects the submission.
- Protect it with a server-side rate limit and a honeypot field before adding a captcha.
