'use client';

import { useEffect } from 'react';

const cmsConfig = {
  backend: {
    name: 'git-gateway',
    branch: 'master',
  },
  media_folder: 'public/images',
  public_folder: '/images',
  collections: [
    {
      name: 'portfolio',
      label: 'Portfolio Settings',
      files: [
        {
          name: 'settings',
          label: 'General Settings',
          file: 'content/portfolio.json',
          description: 'General portfolio settings and information',
          fields: [
            { label: 'Name', name: 'name', widget: 'string' },
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Bio', name: 'bio', widget: 'text' },
            { label: 'Profile Image', name: 'profileImage', widget: 'image' },
            { label: 'Email', name: 'email', widget: 'string' },
            {
              label: 'Social Links',
              name: 'socialLinks',
              widget: 'list',
              fields: [
                { label: 'Platform', name: 'platform', widget: 'string' },
                { label: 'URL', name: 'url', widget: 'string' },
              ],
            },
            {
              label: 'Theme',
              name: 'theme',
              widget: 'select',
              options: ['minimal', 'modern', 'developer'],
              default: 'minimal',
            },
            {
              label: 'Skills',
              name: 'skills',
              widget: 'list',
              fields: [
                { label: 'Category', name: 'category', widget: 'string' },
                {
                  label: 'Items',
                  name: 'items',
                  widget: 'list',
                  field: { label: 'Skill', name: 'skill', widget: 'string' },
                },
              ],
            },
            {
              label: 'Experience',
              name: 'experience',
              widget: 'list',
              fields: [
                { label: 'Company', name: 'company', widget: 'string' },
                { label: 'Role', name: 'role', widget: 'string' },
                { label: 'Duration', name: 'duration', widget: 'string' },
                { label: 'Description', name: 'description', widget: 'text' },
              ],
            },
            {
              label: 'Education',
              name: 'education',
              widget: 'list',
              fields: [
                { label: 'Institution', name: 'institution', widget: 'string' },
                { label: 'Degree', name: 'degree', widget: 'string' },
                { label: 'Field of Study', name: 'field', widget: 'string' },
                { label: 'Duration', name: 'duration', widget: 'string' },
              ],
            },
            {
              label: 'Certifications',
              name: 'certifications',
              widget: 'list',
              fields: [
                { label: 'Name', name: 'name', widget: 'string' },
                { label: 'Issuer', name: 'issuer', widget: 'string' },
                { label: 'Date', name: 'date', widget: 'string' },
                { label: 'URL', name: 'url', widget: 'string', required: false },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'projects',
      label: 'Projects',
      folder: 'content/projects',
      create: true,
      slug: '{{slug}}',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'text' },
        {
          label: 'Tech Stack',
          name: 'techStack',
          widget: 'list',
          field: { label: 'Tech', name: 'tech', widget: 'string' },
        },
        { label: 'Image', name: 'image', widget: 'image', required: false },
        { label: 'Live Link', name: 'liveLink', widget: 'string', required: false },
        { label: 'GitHub Link', name: 'githubLink', widget: 'string', required: false },
        { label: 'Body', name: 'body', widget: 'markdown', required: false },
      ],
    },
  ],
};

export default function AdminPage() {
  useEffect(() => {
    // Tell Decap CMS we will init manually (skip config.yml fetch)
    (window as any).CMS_MANUAL_INIT = true;

    // Load Netlify Identity Widget
    const identityScript = document.createElement('script');
    identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    document.head.appendChild(identityScript);

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

      // Load Decap CMS script
      const cmsScript = document.createElement('script');
      cmsScript.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
      cmsScript.onload = () => {
        // Init CMS with inline config — no config.yml needed
        (window as any).CMS.init({ config: cmsConfig });
      };
      document.body.appendChild(cmsScript);
    };
  }, []);

  return <div id="nc-root" />;
}
