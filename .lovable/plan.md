
# ERATEC Full Rebrand Plan

Transform the Aquafix plumbing template into ERATEC — an HVAC / electromechanical / Hitachi VRF distributor in Egypt — per the brand guideline and marketing proposal.

## 1. Brand foundation (design tokens & type)

Update `src/index.css` and `tailwind.config.ts`:

- **Primary** Vampire Black `#0A0A0A`
- **Accent / tertiary** Better Lime `#B5FC02`
- **Secondary digital accents** Pumpkin Orange `#FC750F`, Crayola Blue `#1C6EFC`
- **Surface** White `#FFFFFF`
- Replace Clash Grotesk with **Archivo** (headings) + **Poppins** (body) via Google Fonts. Drop the Fontshare import.
- Update `font-clash` → `font-archivo` / `font-poppins` references across components (Header, Hero, Footer, etc.).
- Keep the existing token *names* (primary, secondary, tertiary, accent) so no component breaks.

## 2. Site metadata & identity

- `index.html`: title, description, keywords, OG tags, author → ERATEC HVAC & Electromechanical.
- `src/components/Logo.tsx`: text-based ERATEC wordmark in Archivo Bold + Better Lime square mark. User will replace with the official uploaded logo.
- Favicon placeholder note in chat.

## 3. New sitemap (matches the proposal IA)

Routes after rebrand:

```text
/                    Home
/about               About Us (story, mission, sustainability)
/industries          Industries Served (Real Estate, Healthcare, Hospitality, Industrial, Commercial)
/solutions           Products & Solutions (Hitachi VRF, HVAC, Electromechanical)
/solutions/:slug     Solution detail
/projects            Projects (case studies / portfolio)
/projects/:slug      Project detail
/resources           Technical Resources (blog + technical articles + guides)
/resources/:slug     Article detail
/contact             Contact (inquiry + consultation request)
/quote               Consultation / RFQ request (repurposed quote form)
/auth, /dashboard/*  Kept as-is (backend already wired)
```

Implementation:
- Add `src/pages/Industries.tsx`, `src/pages/Solutions.tsx`, `src/pages/SolutionDetail.tsx`, `src/pages/Resources.tsx` (alias of Blog).
- Update `src/App.tsx` routes. Redirect/alias old `/services` → `/solutions`, `/work` → `/projects`, `/blog` → `/resources` to keep backend data working without migrations.
- Update `Header.tsx` nav links and `Footer.tsx`.

## 4. Content rewrite

- **Hero**: Headline "Precision-Driven HVAC & Electromechanical Solutions" with Better Lime accent on "Electromechanical". Subcopy from the proposal. CTAs → "Request Consultation" / "Explore Solutions".
- **Services / Solutions** (`src/data/services.ts`): Hitachi VRF Systems, Central HVAC Systems, Electromechanical Contracting, Energy-Efficient Retrofits, After-Sales & Maintenance, Engineering Consultancy.
- **Industries** page: Real Estate, Healthcare, Hospitality, Industrial, Commercial Facilities — each with description + matching imagery.
- **About**: Company story, mission & vision, sustainability commitment, Hitachi authorized distributor badge.
- **Featured Works → Projects**: Generic HVAC/VRF installation projects.
- **Testimonials**: Consultant / MEP contractor / facility manager voices.
- **Solutions strip**: Sustainability + after-sales support messaging from the proposal.
- **Blog/Resources**: Seed 3 article titles (What is VRF Technology?, VRF vs Conventional HVAC, HVAC Energy Efficiency Explained) into the existing dynamic blogs table — admin can edit via dashboard.
- **CTA & Footer**: ERATEC contact details (Cairo, Egypt), proposal tagline "A Precision-Driven Engineering Partner".
- **Quote Calculator**: Reframe as "Project Consultation Request" with HVAC service types and project scale instead of plumbing hours.

## 5. Imagery (generated, fast tier)

Generate 6 hero grid images + 6 service/industry images + 3 project images in `src/assets/`, replacing the plumbing photos. Style: professional HVAC technicians, VRF outdoor condenser units, ducting, MEP rooms, modern commercial buildings — neutral tones, focused subjects, eco/professional vibe per brand guideline. Run image generations in parallel batches.

Keep the avatars (testimonial faces) but regenerate as engineer/consultant portraits.

## 6. Backend touches

No schema changes. The blogs / careers / quote_requests / contacts / service_inquiries tables stay. Only the seed/demo content and route aliases change. Security memory and RLS untouched.

## 7. Out of scope (this pass)

- Real ERATEC logo (user will upload separately).
- Arabic (RTL) version — brand guideline mentions Tajawal but proposal is English-first; flag as future work.
- Real project photos and case study text — placeholder content with edit-via-dashboard pathway.
- Google Ads / Meta Ads campaign assets (those are external).

## Execution order

1. Tokens, fonts, Logo, index.html (foundation — fastest visible change)
2. Routes + new page shells + nav/footer
3. Homepage section content rewrites
4. Inner page content (Industries, Solutions, About, Resources, Contact, Quote)
5. Image generation in parallel batches, wired into components
6. Final pass: verify build, screenshot home + one inner page

Estimated 25-35 file edits + ~15 generated images. I'll work in parallel batches to keep this efficient.
