'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Load Netlify Identity Widget
    const identityScript = document.createElement('script');
    identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    document.head.appendChild(identityScript);

    // Load Decap CMS after identity widget
    identityScript.onload = () => {
      if ((window as any).netlifyIdentity) {
        (window as any).netlifyIdentity.on('init', (user: any) => {
          if (!user) {
            (window as any).netlifyIdentity.on('login', () => {
              document.location.href = '/admin/';
            });
          }
        });
      }

      const cmsScript = document.createElement('script');
      cmsScript.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
      document.body.appendChild(cmsScript);
    };
  }, []);

  return <div id="nc-root" />;
}
