# KDT Website — Deployment Notes

## Currently Running (Dev Mode)
```bash
pm2 status                    # Check if running
pm2 logs kdt-website          # View logs
pm2 restart kdt-website       # Restart
```

## Switch to Production (When Ready)
```bash
cd /Users/kdtsuperapp/kdt-website
npm run build
pm2 delete kdt-website
pm2 start npm --name "kdt-website" -- run start
pm2 save
```

## Pre-Deploy Checklist
- [ ] Optimize logo.png (currently 6.7MB — should be <500KB)
- [ ] Review all content for accuracy
- [ ] Test on mobile
- [ ] Run production build

## Useful Commands
```bash
pm2 status          # See what's running
pm2 logs            # View all logs  
pm2 restart all     # Restart everything
pm2 stop all        # Stop everything
```

---
*Created: 2026-01-30*
