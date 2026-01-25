# Quick Firestore Setup Commands

## 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

## 2. Login
```bash
firebase login
```

## 3. Initialize (if not done)
```bash
cd /workspaces/sangam-biodata/vivahbiodata
firebase init firestore
```
- Select existing project
- Use default file names (firestore.rules and firestore.indexes.json)

## 4. Deploy Rules and Indexes
```bash
# Deploy everything
firebase deploy --only firestore

# Or separately
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

## 5. Verify in Firebase Console
- Go to Firestore → Rules tab → Should see the rules
- Go to Firestore → Indexes tab → Should see the composite indexes

## Database Structure

### Collections:
1. **users** - User profiles
2. **biodatas** - User drafts (max 2 per user)
3. **public-biodatas** - Shared biodatas (optional)

### Security:
- ✅ Users can only access their own data
- ✅ Authentication required for all operations
- ✅ Validation on required fields
- ✅ Proper indexing for performance

## Test Locally (Optional)
```bash
# Install emulators
firebase init emulators

# Start emulators
firebase emulators:start

# Update .env.local to use emulator
# NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=localhost
```

## Monitoring Commands
```bash
# View logs
firebase functions:log

# Check quota usage
firebase projects:list
```
