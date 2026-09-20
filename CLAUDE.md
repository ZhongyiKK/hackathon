# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

**Hackathon Project**: AI-Powered Merchant Offer Recommendation Interface Demo  
**Duration**: 48-hour Hackathon  
**Client**: Credit card company (similar to Amex)

### Core Goal
Build a demo interface that allows merchants to see AI-generated offer proposals based on:
- Merchant objectives (e.g., increase repeat purchases, clear inventory, drive traffic during specific time periods)
- Member preference profiles

Each proposal should show:
- Connection to existing Amex merchant offer templates or membership benefits
- Recommendation reasoning and estimated impact
- Accept/Decline interaction with visual feedback

### Priority Order (48h constraint)
1. **Functionality & Interaction** (highest priority)
2. **Visual feedback & UX flow**
3. **Styling** (keep simple but professional)

---

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS (for quick professional look)
- **Data**: Mock JSON (no backend required)
- **Build Tool**: Vite (fast dev server, optimized production build)

---

## Project Structure

```
hackathon/
├── src/
│   ├── components/
│   │   ├── OfferProposal.jsx       # Individual offer card component
│   │   ├── OfferList.jsx           # Container for multiple offers
│   │   ├── MerchantHeader.jsx      # Merchant info & objectives display
│   │   └── ActionButtons.jsx       # Accept/Decline buttons with feedback
│   ├── data/
│   │   ├── mockOffers.json         # AI-generated offer proposals
│   │   ├── merchantTemplates.json  # Amex merchant offer templates
│   │   └── memberBenefits.json     # Membership benefits catalog
│   ├── hooks/
│   │   └── useOfferActions.js      # State management for accept/decline
│   ├── App.jsx                     # Main component
│   ├── App.css                     # Global styles (or move to Tailwind)
│   └── main.jsx                    # Entry point
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── package.json                    # Dependencies & scripts
├── tailwind.config.js              # Tailwind configuration (if using)
└── CLAUDE.md                       # This file
```

---

## Key Commands

```bash
# Install dependencies
npm install

# Start development server (HMR enabled, runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Core Components & Data Flow

### 1. **OfferProposal Component**
- Displays a single AI-generated offer card
- Shows: proposal name, recommendation reason, estimated impact metrics, linked template/benefit
- Contains Accept/Decline buttons with hover feedback
- Props: `offer` (offer object), `onAccept`, `onDecline`

### 2. **OfferList Component**
- Maps through array of offer proposals
- Handles state for accepted/declined offers (visual indicators)
- Passes callback handlers to OfferProposal children

### 3. **useOfferActions Hook**
- Centralized state management for offer interactions
- Tracks: current offers, accepted offers, declined offers
- Methods: `acceptOffer()`, `declineOffer()`, `reset()`
- Can be extended to call a backend API later

### 4. **Mock Data Structure**
Offers should follow this structure:
```json
{
  "id": "offer_001",
  "title": "Flash Sale: 20% Off Electronics",
  "objective": "increase_repeat_purchases",
  "reason": "Based on member purchase history showing high interest in electronics",
  "estimatedImpact": {
    "metric": "Expected 15% increase in repeat visits",
    "confidence": "82%"
  },
  "linkedTemplate": {
    "id": "template_cashback_electronics",
    "name": "Amex Merchant Offer Template - 20% Cashback"
  },
  "linkedBenefit": {
    "id": "benefit_premium_reward",
    "name": "Premium Member Exclusive Reward"
  },
  "status": "pending" // pending, accepted, declined
}
```

---

## Development Guidelines

### Quick Wins for 48h
- Start with static mock data, no backend calls
- Use Tailwind CSS utility classes for rapid styling
- Keep component tree shallow (avoid deep nesting)
- Leverage React hooks for state, avoid Redux unless absolutely necessary

### UI/UX Priorities
- Clear visual hierarchy: merchant name → objectives → offers
- Distinct visual states for offers (pending, accepted, declined)
- Smooth transitions/feedback when clicking Accept/Decline
- Mobile-responsive layout (even if demo, keeps it professional)

### Debugging
- Vite dev server includes React DevTools integration
- Check browser console for component re-render issues
- Use React DevTools profiler if performance concerns arise

---

## Next Steps

1. Run `npm install` to set up dependencies
2. Create the mock data files in `src/data/`
3. Build core OfferProposal component first
4. Implement useOfferActions hook for state management
5. Wire up OfferList and MerchantHeader
6. Add styling via Tailwind (or inline CSS for speed)
7. Test interactions and visual feedback
