# Sanity CMS Setup Instructions

## 1. Create Sanity Project

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Create new Sanity project
sanity init

# Follow prompts:
# - Create new project
# - Project name: "Peteroms Portfolio CMS"
# - Dataset: "production"
# - Template: "Clean project with no predefined schemas"
```

## 2. Configure Environment Variables

Create `.env` file in your React project root:

```
REACT_APP_SANITY_PROJECT_ID=your-project-id-from-sanity
REACT_APP_SANITY_DATASET=production
```

## 3. Sanity Schema Setup

In your Sanity project, create these schema files:

### schemas/project.js
```javascript
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url'
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    }
  ]
}
```

### schemas/post.js
```javascript
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {hotspot: true}
        },
        {
          type: 'code'
        }
      ]
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    }
  ]
}
```

### schemas/skill.js
```javascript
export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
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
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ]
}
```

## 4. Start Sanity Studio

```bash
cd your-sanity-project
sanity start
```

## 5. Deploy Sanity Studio

```bash
sanity deploy
```

## Features Included:

✅ **Dynamic Content Loading**: Fetches from Sanity with static fallbacks
✅ **Image Optimization**: Automatic image resizing and optimization
✅ **Error Handling**: Graceful fallback to static content
✅ **Loading States**: User-friendly loading indicators
✅ **Responsive Images**: Optimized for different screen sizes

## Next Steps:

1. Create your Sanity project
2. Add the environment variables
3. Set up the schemas
4. Start adding content through Sanity Studio
5. Your React app will automatically display the new content!