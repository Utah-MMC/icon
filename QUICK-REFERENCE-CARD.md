# 🎯 **QUICK REFERENCE CARD** - CNAME Migration

## **Goal**: Point `icondumpsters.com` → `icondumpsters.vercel.app`

---

## ✅ **Step 1: Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com) → Login
2. Click `icondumpsters` project
3. **Settings** → **Domains** → **Add Domain**
4. Enter: `icondumpsters.com` → **Add**

---

## 🌐 **Step 2: HostGator DNS**
1. Go to [hostgator.com](https://hostgator.com) → **cPanel Login**
2. **Domains** → **DNS Zone Editor**
3. **Add DNS Record**:
   - **Type**: `CNAME`
   - **Name**: `@` (or blank)
   - **Value**: `icondumpsters.vercel.app`
   - **TTL**: `300`
4. **Add Record**

---

## ⏱️ **Step 3: Wait & Test**
- **Wait**: 5-15 minutes for DNS propagation
- **Test**: Visit `https://icondumpsters.com`
- **Verify**: All pages load correctly

---

## 🔧 **Troubleshooting**
- **Not working?** Wait longer (up to 24 hours)
- **SSL issues?** Force HTTPS: `https://icondumpsters.com`
- **Images broken?** Clear browser cache (Ctrl+F5)

---

## 🎉 **Success!**
Your site is now live at: **`https://icondumpsters.com`**

**Total time**: 15-30 minutes  
**Downtime**: Zero
