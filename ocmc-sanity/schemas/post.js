import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'blockContent',
    }),
    defineField({
      name: 'bodyImage',
      title: 'Body image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'bodyImage2',
      title: 'Body image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body2',
      title: 'Body2',
      type: 'blockContent',
    }),
    defineField({
      name: 'conclusion',
      title: 'Conclusion',
      type: 'blockContent',
    }),
    defineField({
      name: 'author_name',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'author_image',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author_role',
      title: 'Author Role',
      type: 'string',
    }),
    defineField({
      name: 'author_instagram_handle',
      title: 'Author Instagram Handle',
      type: 'string',
    }),
    defineField({
      name: 'author_facebook_link',
      title: 'Author Facebook Link',
      type: 'string',
    }),
    defineField({
      name: 'author_linkedin_url',
      title: 'Author LinkedIn URL',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
