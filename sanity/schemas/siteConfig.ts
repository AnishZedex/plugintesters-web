import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'siteConfig',
    title: 'Site Config',
    type: 'document',
    fields: [
          defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string',
          }),
          defineField({
            name: 'description',
            title: 'Site Description',
            type: 'string',
          }),
          defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            description: 'The main site URL',
          }),
          defineField({
            name: 'mainLogo',
            title: 'Main Logo',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative Text',
              },
            ],
          }),
          defineField({
            name: 'copywrite',
            title: 'Copywrite Name',
            type: 'string',
            description: 'Enter company name to appear after ©️',
          }),
          defineField({
            name: 'socials',
            title: 'Social Links',
            type: 'array',
            of: [{ type: 'string' }],
          }),
        ]
    })