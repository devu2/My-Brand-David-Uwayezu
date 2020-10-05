import { expect } from 'chai';
import { sign } from 'jsonwebtoken';
import app from '../server';
import request from 'supertest';
import { it, afterEach, describe, beforeEach } from 'mocha';
import Blog from '../models/blogs';
import User from '../models/user';

describe('blog tests', ()=>{
    afterEach(async()=>{
        await Blog.deleteMany({});
    });
    beforeEach(async()=>{
      await Blog.deleteMany({});
  });
  const fakeToken = sign({email: 'dec@gmail.com',userId:'ok'},process.env.JWT_SECRET)
    
    it('Should get all blogs',async()=>{
        const res = await request(app).get('/api/blogs')
        expect(res).to.have.property('status',200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('blogs');
        expect(res.body.blogs).to.be.a('array');
    });
    it("should get a single blog",async()=>{
        const blog = await Blog.create({title: "test",body: "Hello there!"});
        await blog.save();
        const res = await request(app).get(`/api/blogs/${blog._id}`)
        expect(res).to.have.property('status',200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('blog');
        
    });
    it('should fail to create blog when no token provided', async () => {
        const blog = {title: "test",body: "Hello there!"};
        const res = await request(app)
          .post('/api/blogs')
          .send({ ...blog});
        expect(res).to.have.property('status', 401);
        
      });
    
      it('should create blog when with token provided', async () => {
        const blog = {title: "test1233",body: "Hello there!"};
        

        const res = await request(app)
        
          .post('/api/blogs')
          .set('authorization', `Bearer ${fakeToken}`)
          .send({ ...blog});

          
        expect(res).to.have.property('status', 200);
        expect(res.body).to.have.property('blog');
        expect(res.body.blog).to.have.property('title',blog.title);
        expect(res.body.blog).to.have.property('body',blog.body);
      
      });  

      
          
        it('Should not get a blog while providing invalid blogid',async()=>{
          const res = await request(app).get("/api/blogs/1");
          expect(res.status).to.equal(404);
        })
       
        
        


    

    
    

  describe('PATCH /api/blogs/:blogId', () => {
      it('should update post when valid token provided', async () => {
          const blog = await Blog.create({title: "test",body: "Hello there!"});
          await blog.save();
          const user = await User.create({name: "devu",email:"devu34@gmail.com",password:"devu@466",country:"Rwanda",city:"Kibuye"});
          await user.save();
          

        const res = await request(app)
          .patch(`/api/blogs/${blog._id}`)
          .set('authorization', `Bearer ${fakeToken}`)
          .send({ title: 'new' });
        expect(res).to.have.property('status', 200);
        expect(res.body).to.have.property('status', 200);
        expect(res.body).to.have.property('blog');
        expect(res.body.blog).to.have.property('title', 'new');
        
      });
      it('Should update a blog with valid id',async()=>{
        const blog = await Blog.create({title: "test",body: "Hello there!"});
        await blog.save();
        

        const res = await request(app)
        .patch("/api/blogs/" + blog._id)
        .set('authorization', `Bearer ${fakeToken}`)
        .send({
          title: "newTest",
          body: "newemail@gmail.com",
        
        });
       
        expect(res).to.have.property('status',200);
        expect(res.body.blog).to.have.property("title", "newTest");

      })
  });


  describe("DELETE /:id", () => {
    it("Should delete a blog with valid id", async () => {
      const blog = await Blog.create({title: "test",body: "Hello there!"});
      await blog.save();

      const res = await request(app).delete("/api/blogs/" + blog._id).set('authorization', `Bearer ${fakeToken}`);
      expect(res).to.have.property('status',200);
      expect(res.body).to.have.property('blog');
      
    });

    
  });
})


