# Firestore Database Setup Guide

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project" or select existing project
3. Enter project name (e.g., "vivahbio-production")
4. Enable Google Analytics (optional)
5. Create project

## 2. Enable Authentication

1. In Firebase Console, go to **Authentication** → **Sign-in method**
2. Click **Google** provider
3. Enable it and set support email
4. Save changes

## 3. Create Firestore Database

1. Go to **Firestore Database** in sidebar
2. Click **Create database**
3. Choose **Production mode** (we'll add rules next)
4. Select location:
   - `asia-south1` (Mumbai) - Best for India
   - `us-central1` (Iowa) - Good for US
   - `europe-west1` (Belgium) - Good for Europe
5. Click Enable

## 4. Deploy Security Rules

### Option A: Via Firebase Console (Recommended for first time)
1. Go to **Firestore Database** → **Rules** tab
2. Copy content from `firestore.rules` file
3. Paste into the rules editor
4. Click **Publish**

### Option B: Via Firebase CLI
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init firestore

# Select your project
# Use existing firestore.rules and firestore.indexes.json

# Deploy rules
firebase deploy --only firestore:rules

# Deploy indexes
firebase deploy --only firestore:indexes
```

## 5. Set Up Collections Structure

Collections are created automatically when you add documents. Here's the structure:

### `users` Collection
```
users/{userId}
  - email: string
  - displayName: string
  - photoURL: string
  - createdAt: timestamp
  - lastLogin: timestamp
  - draftsCount: number (max 2)
```

### `biodatas` Collection (User Drafts)
```
biodatas/{biodataId}
  - userId: string (owner's UID)
  - name: string (user's full name)
  - templateId: string
  - colorTheme: string (optional)
  - data: object (all biodata fields)
  - visibleSections: object
  - createdAt: timestamp
  - updatedAt: timestamp
```

### `public-biodatas` Collection (Optional - for sharing)
```
public-biodatas/{biodataId}
  - userId: string
  - shareId: string (unique share link)
  - name: string
  - templateId: string
  - data: object
  - views: number
  - createdAt: timestamp
  - expiresAt: timestamp (optional)
```

## 6. Configure Environment Variables

Copy your Firebase config from **Project Settings** → **General** → **Your apps** → **Config**

Update `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
```

## 7. Test the Setup

1. Start your development server: `npm run dev`
2. Try signing in with Google
3. Create a draft biodata
4. Check Firestore Console to see data appearing

## 8. Production Deployment

### Security Checklist:
- ✅ Firestore rules deployed
- ✅ Indexes created
- ✅ Authentication enabled
- ✅ API keys restricted (optional but recommended)
- ✅ Environment variables set in production

### API Key Restrictions (Recommended):
1. Go to **Google Cloud Console** → **APIs & Services** → **Credentials**
2. Find your API key
3. Add restrictions:
   - **Application restrictions**: HTTP referrers
   - Add your domain: `yourdomain.com/*`
   - **API restrictions**: Select required APIs only:
     - Firebase Authentication
     - Cloud Firestore API
     - Identity Toolkit API

## 9. Monitoring

1. **Firestore Usage**: Dashboard → Firestore → Usage tab
2. **Authentication**: Dashboard → Authentication → Users
3. **Quotas**: 
   - Free tier: 50,000 reads/day, 20,000 writes/day
   - Monitor usage to avoid overages

## 10. Backup Strategy

1. Go to **Firestore** → **Import/Export**
2. Set up scheduled exports to Cloud Storage
3. Or use Firebase CLI:
```bash
firebase firestore:export gs://your-bucket/backups/$(date +%Y%m%d)
```

## Database Rules Explanation

### Security Features:
- ✅ Users can only read/write their own data
- ✅ Max 2 drafts enforced (app-level + query limits)
- ✅ Required fields validated
- ✅ Public sharing with optional expiration
- ✅ No unauthorized access to other users' data

### Performance Features:
- ✅ Composite indexes for efficient queries
- ✅ Pagination support with updatedAt ordering
- ✅ Limited query results (max 2 drafts)

## Cost Estimation (Free Tier)

**Firestore Free Tier:**
- 1 GB storage
- 50,000 reads/day
- 20,000 writes/day
- 20,000 deletes/day

**Estimated Usage (1000 users/month):**
- Writes: ~3,000/month (sign-ins + draft saves)
- Reads: ~10,000/month (loading drafts + profiles)
- **Cost**: FREE (well within limits)

**Authentication Free Tier:**
- Unlimited Google Sign-ins

## Troubleshooting

### Issue: "Missing or insufficient permissions"
**Solution**: Check firestore.rules are deployed correctly

### Issue: "Error: 9 FAILED_PRECONDITION: The query requires an index"
**Solution**: Deploy firestore.indexes.json or click the link in error to create index

### Issue: Users can't sign in
**Solution**: Check Authentication is enabled and Google provider is configured

### Issue: Data not saving
**Solution**: Check browser console for errors and verify user is authenticated
