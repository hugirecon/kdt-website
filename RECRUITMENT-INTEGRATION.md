# Recruitment System Integration Plan

## File Upload Validation (Magika)

All candidate uploads (resumes, IDs, certifications, references) must be validated with [Google Magika](https://github.com/google/magika) before being written to disk or forwarded to the Selection Specialist API.

**Why:** Prevents disguised-filetype attacks (e.g., `.exe` renamed as `.pdf`). Standard MIME detection can be fooled; Magika's AI-based detection cannot.

**Implementation:**
- Run Magika on every uploaded file in the API route handler
- Compare detected type to per-field whitelist (resume: PDF/DOCX only, ID: image formats only, etc.)
- Reject mismatches with clear error, log for security review
- Only forward validated files to the Selection Specialist API

Ship this with the resume upload feature (currently a placeholder in the application form).

## Overview
The website's recruitment features are built with mock data. When the Selection Specialist bot comes online, swap the mock data for real API calls. This doc tracks every integration point.

## Architecture
- **Website** = candidate-facing UI (careers listings, pre-screen, application, dashboard)
- **Selection Specialist Bot** = backend brain (processes applications, AI grading, pipeline management)
- **Mobile App** = PFT/physical testing (camera AI, GPS, wearables) — separate project

## API Contract (what the website needs from Selection Specialist)

### Read endpoints (website pulls data):
| Endpoint | Purpose | Used by |
|----------|---------|---------|
| `GET /positions` | List all open positions | `/careers` page |
| `GET /positions/{id}` | Single position details | `/careers/[role]` page |
| `GET /positions/{id}/prescreen` | Pre-screen questions for a position | Pre-screen gate component |
| `GET /candidates/{id}/status` | Candidate's current pipeline stage | `/portal/dashboard` |
| `GET /candidates/{id}/stage-content` | Current stage materials (test questions, interview prompts, Gauntlet tasks) | Portal stage pages |

### Write endpoints (website sends data):
| Endpoint | Purpose | Used by |
|----------|---------|---------|
| `POST /applications` | Submit completed application | Application form |
| `POST /candidates/{id}/stage-submission` | Submit test answers, interview responses, Gauntlet materials | Portal stage pages |

## What's Built (with mock data)

### 1. Careers Page (`/careers`)
- **Status:** BUILT — has branch cards (PMC, CIC, SPEAR, MIC) with role listings
- **Mock data:** Hardcoded roles in the page component
- **Integration:** Replace hardcoded roles with `GET /positions` API call
- **File:** `src/app/careers/page.tsx`

### 2. Role Detail Pages (`/careers/[role]`)
- **Status:** BUILT — detailed role descriptions, requirements, application form
- **Mock data:** Hardcoded role definitions in `page.tsx`
- **Integration:** Replace with `GET /positions/{id}` API call
- **File:** `src/app/careers/[role]/page.tsx`

### 3. Application Form
- **Status:** BUILT — branch-specific fields (military, technical, sales, medical)
- **Mock data:** Submits to `/api/apply` which sends email
- **Integration:** POST to Selection Specialist's `/applications` endpoint instead of email
- **File:** `src/app/careers/[role]/ApplicationForm.tsx`
- **Form field components:** `src/components/forms/` (CommonFields, MilitaryFields, TechnicalFields, SalesFields, MedicalFields)

### 4. Pre-Screen Gate
- **Status:** NEEDS BUILDING — not yet implemented
- **Plan:** Component embedded on role detail pages, 5-6 yes/no knockout questions before application is shown
- **Integration:** Questions come from `GET /positions/{id}/prescreen`
- **Fallback:** Hardcode initial questions per branch until API is ready

### 5. Candidate Dashboard
- **Status:** NEEDS BUILDING — account system exists but no pipeline tracking
- **Plan:** `/portal/dashboard` showing current stage, progress through selection
- **Integration:** `GET /candidates/{id}/status` for pipeline state
- **Existing auth:** Medusa auth + Discord OAuth (will migrate to Authentik later)

### 6. Stage Content Delivery (tests, interviews, Gauntlet)
- **Status:** NEEDS BUILDING
- **Plan:**
  - Written tests: timed quiz interface, questions from API
  - Bot interview: text-based chat UI, questions from API (video/app later)
  - Gauntlet: video intro upload, comprehension quiz, simulation scenarios
- **Integration:** `GET /candidates/{id}/stage-content` for content, `POST /candidates/{id}/stage-submission` for responses

## Integration Checklist (when Selection Specialist comes online)

### Step 1: API Connection
- [ ] Get Selection Specialist bot's API base URL
- [ ] Add to `.env.local` as `NEXT_PUBLIC_SELECTION_API_URL`
- [ ] Create API client utility at `src/lib/selection-api.ts`

### Step 2: Careers Data
- [ ] Replace hardcoded roles in `src/app/careers/page.tsx` with API fetch
- [ ] Replace hardcoded role details in `src/app/careers/[role]/page.tsx` with API fetch
- [ ] Add loading states and error handling
- [ ] Keep hardcoded data as fallback if API is unreachable

### Step 3: Application Submission
- [ ] Update `/api/apply/route.ts` to forward to Selection Specialist instead of sending email
- [ ] Keep email as backup notification
- [ ] Handle file uploads (resume, DD214) — presigned URL pattern

### Step 4: Pre-Screen Gate
- [ ] Build pre-screen component
- [ ] Fetch questions from API (or use hardcoded per-branch defaults initially)
- [ ] Gate the application form behind pre-screen pass

### Step 5: Candidate Portal
- [ ] Build portal routes (`/portal/dashboard`, `/portal/stage/[stageId]`)
- [ ] Integrate Authentik for auth (or use existing auth initially)
- [ ] Fetch pipeline status from API
- [ ] Fetch stage content from API
- [ ] Build stage-specific UIs (test, interview, Gauntlet)

### Step 6: Testing
- [ ] Test full flow: browse → pre-screen → apply → receive status → complete stages
- [ ] Test with real Selection Specialist bot responses
- [ ] Mobile responsiveness check on all new pages
- [ ] Error handling for API failures

## Notes
- PFT/physical testing goes to the mobile app, NOT the website
- Selection Specialist bot is the source of truth for all candidate data
- Website never makes pass/fail decisions — just displays what the bot tells it
- Internal Super App auth is SEPARATE from website/candidate auth
