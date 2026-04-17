#!/bin/bash
# Start Authentik Cloudflare tunnel and update configs with the new URL
# Run by pm2: pm2 start /Users/kdtsuperapp/kdt-website/authentik/start-tunnel.sh --name authentik-tunnel

LOG="/tmp/cf_authentik_tunnel.log"

# Start cloudflared and capture the URL
cloudflared tunnel --url http://localhost:9080 2>&1 | tee "$LOG" &
CF_PID=$!

# Wait for the tunnel URL to appear
for i in $(seq 1 30); do
  URL=$(grep -o 'https://[^ ]*trycloudflare.com' "$LOG" 2>/dev/null | head -1)
  if [ -n "$URL" ]; then
    echo "Tunnel URL: $URL"
    
    # Update .env.local with new issuer URL
    ENV_FILE="/Users/kdtsuperapp/kdt-website/.env.local"
    if [ -f "$ENV_FILE" ]; then
      sed -i '' "s|AUTHENTIK_ISSUER=.*|AUTHENTIK_ISSUER=${URL}/application/o/kdt-website/|" "$ENV_FILE"
      echo "Updated AUTHENTIK_ISSUER in .env.local"
    fi
    
    # Write URL to a known location for other scripts
    echo "$URL" > /tmp/authentik_tunnel_url
    
    break
  fi
  sleep 1
done

# Keep running (cloudflared is in background)
wait $CF_PID
