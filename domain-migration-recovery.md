# Domain Migration Recovery Guide

## Current Status
- **From**: www.icondumpsters.com
- **To**: icondumpsters.com
- **Issue**: Rankings dropped due to domain split

## Immediate Actions Required

### 1. Google Search Console Setup
1. **Add both domains to GSC**:
   - Add `https://www.icondumpsters.com` as a property
   - Add `https://icondumpsters.com` as a property
   - Set `https://icondumpsters.com` as the preferred domain

2. **Submit Change of Address**:
   - In GSC for www.icondumpsters.com
   - Go to Settings → Change of Address
   - Select icondumpsters.com as the new domain
   - This tells Google to transfer all ranking signals

### 2. Verify Redirects Are Working
Test these URLs to ensure 301 redirects work:
- https://www.icondumpsters.com/ → https://icondumpsters.com/
- https://www.icondumpsters.com/services → https://icondumpsters.com/services
- https://www.icondumpsters.com/salt-lake-city → https://icondumpsters.com/salt-lake-city

### 3. Update All External References
- Update Google My Business listing
- Update social media profiles
- Update directory listings
- Update any paid advertising campaigns

### 4. Internal Link Audit
- Ensure all internal links use icondumpsters.com
- Update any hardcoded www references
- Check canonical tags are set correctly

### 5. Monitor Recovery
- Track rankings in GSC
- Monitor organic traffic
- Check for crawl errors
- Verify redirect chains

## Expected Timeline
- **Immediate**: Redirects should work within 24 hours
- **1-2 weeks**: Google starts recognizing the migration
- **4-8 weeks**: Full ranking recovery (can take up to 3 months)

## Critical Success Factors
1. ✅ 301 redirects are properly configured
2. ✅ Change of Address submitted in GSC
3. ✅ Both domains verified in GSC
4. ✅ Canonical URLs point to non-www
5. ✅ All external references updated

## Monitoring Checklist
- [ ] GSC shows successful redirects
- [ ] No crawl errors for www domain
- [ ] Rankings start recovering
- [ ] Organic traffic returns to normal
- [ ] All pages indexed under new domain

