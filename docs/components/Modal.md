# Modal

A focused task or confirmation that blocks the page: confirm a delete, a short form.

- Consumer provides `open`, `onClose`, `title`, optional `description`, children and `footer` (buttons: secondary "Cancel" first, primary or danger last).
- Focus moves into the dialog, Tab is trapped, Escape and the close button call `onClose`, focus returns on close, the page doesn't scroll.
- Destructive confirmations: `role="alertdialog"`, a `danger` button that names the action ("Delete client"), never "OK".
- Forms with unsaved input: `dismissible={false}` so a stray click on the scrim can't lose work.
- Longer flows (more than ~6 fields) go on a page, not in a modal.
