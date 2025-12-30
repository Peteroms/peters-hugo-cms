import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Cloud', value: 'cloud'},
          {title: 'DevOps', value: 'devops'},
          {title: 'Containers', value: 'containers'},
          {title: 'Monitoring', value: 'monitoring'},
          {title: 'Security', value: 'security'}
        ]
      }
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number'
    })
  ]
})