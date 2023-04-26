
// Create schema here
export default {
    name: 'products',
    title:'Products',
    type:'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type:'string',
        },
        {
            name:'slug',
            title: 'slug',
            type:'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'Price',
            type:'number'
        },
        {
            name:'details',
            title: 'Details',
            type:'string'
        }
    ]
}