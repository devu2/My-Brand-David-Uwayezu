import { Schema, model } from 'mongoose';

const blogSchema = Schema({
    title: {
        type: String,
        required: true,
        unique: true

    },
    body: {
        type: String,
        required: true
    }
    
},
{
    timestamps:   true    
}
);



export default model('Blog',blogSchema);