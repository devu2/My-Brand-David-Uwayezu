import { expect } from 'chai';
import { sign } from 'jsonwebtoken';
import app from '../server';
import request from 'supertest';
import { it, afterEach, describe, beforeEach } from 'mocha';
import Query from '../models/queries';


describe('Queries Test',()=>{
    afterEach(async()=>{
        await Query.deleteMany({});
        
    });
   
    beforeEach(async()=>{
        await Query.deleteMany({});
        
    });
   

    describe('POST /api/queries',()=>{
        it('Should create a query',async()=>{
            const query = {name:'david',email:"david3@gmail.com",subject:"greetings hjjhkjk",message:"Hello there!"};
            const res = await request(app)
            .post('/api/queries')
            .send({...query})
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('message');
            
        });
        it('Should not create query with some invalid field',async()=>{
            const query = await Query.create({name:'david',email:"david3@gmail.com",subject:"greetings",message:"Hello there!"});
            const res = await request(app)
            .post('/api/queries')
            .send({...query})
            expect(res).to.have.property('status',400);
            expect(res.body).to.have.property('message');
        })
        
    });

    describe('GET /api/queries',()=>{
        it('Should get all queries while you are admin',async()=>{
            const fakeToken = sign({email: 'dec@gmail.com',userId:'ok'},process.env.JWT_SECRET)
            const query = await Query.create({name:'david',email:"david3@gmail.com",subject:"greetings hkhkjk",message:"Hello there!"});
            await query.save();
            const res = await request(app).get('/api/queries').set('authorization', `Bearer ${fakeToken}`)
            
            
            console.log(res.body);
            expect(res).to.have.property('status',200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('message');
            
        });

        

        it('Should get a single query when you are admin',async()=>{
            const query = await Query.create({name:'david',email:"david3@gmail.com",subject:"greetings hkhkjk",message:"Hello there!"});
           await query.save();
           
            const res = await request(app)
            .get('/api/queries/' + query._id)
            
            
            
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('message');
            
        });

       
    });

    describe('DELETE /api/queries',()=>{
        it('Should delete a query with valid id',async()=>{
            await request(app).post('/api/users/signup')
            .send({
              name: 'david 1234',
              email: "devu3@gmail.com",
              password:"password123",
              country:"Rwanda",
              city:"Kigali"
            })
           const res = await request(app)
              
              .post("/api/users/signin/")
              .send({
                email: "devu3@gmail.com",
                password: "password123",
              })
              
                // expect(res).to.have.status(200);
                expect(res).to.have.property("status",200);
                expect(res.body).to.have.property('message')
                expect(res.body).to.have.property("token")
           const query = await Query.create({name:'david',email:"david3@gmail.com",subject:"greetings hkhkjk",message:"Hello there!"});
           await query.save();
            await request(app)
            .delete('/api/queries/' + query._id)
            
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('message');
            

            
        });
        
    });



})









