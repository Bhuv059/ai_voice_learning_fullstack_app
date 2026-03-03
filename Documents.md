npx create-next-app@latest ./

npx shadcn@latest init

npx shadcn@latest add button

Cleanup with page.tsx, layout.tsx

create navabar

copy the prompt from clerk and paste in LLm to integrated 
the auth funcationalities, if not follow the clerk docs

Add the auth buttons in navbar
fx: if signedout then show signinbutton
else show user button


hero-section-prompt
---------------------
Create a **hero section** for a **book library app** 
with a **warm beige card** that contains
**three parts side by side**:

- **Left** – your library heading, a short description, 
              and an "add new book" button
- **Center** – an illustration of **vintage books** 
             and a globe
- **Right** – a small white card showing 3 numbered steps

**Replicate the design perfectly – provided in the screenshot.**

--------------------------
prompt for -book upload form
-----------------------------
Build a book upload form with a warm literary aesthetic using these existing CSS classes. 
The form has 5 fields stacked vertically with space-y-8 gap:

PDF file upload — A dropzone area (upload-dropzone) with a dashed border, upload icon, 
"Click to upload PDF" text, and "PDF file (max 50MB)" hint. When a file is selected, it shows
the filename with a remove button.

Cover image upload — Same dropzone style but with an image icon, "Click to upload cover image" 
text, and "Leave empty to auto-generate from PDF" hint.

Title input — A text field (form-input) with label "Title" (form-label) and placeholder "ex:
Rich Dad Poor Dad".

Author input — Same style, label "Author Name", placeholder "ex: Robert Kiyosaki".

Voice selector — Label "Choose Assistant Voice" with two groups (Male Voices: Dave, Daniel, 
Chris; Female Voices: Rachel, Sarah). Each voice is a radio card (voice-selector-option) showing the 
voice name and description. Selected state uses voice-selector-option-selected.

Submit button — Full-width (form-btn) with text "Begin Synthesis", brown background (#663820), 
white text, serif font.

Use shadcn/ui Form components with react-hook-form and zod validation. Wrap everything in a 
new-book-wrapper container. Show a LoadingOverlay when submitting.


---------------------------------