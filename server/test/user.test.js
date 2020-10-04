const {expect} = require('chai');
const chai = require("chai");
const app = require('../server');
const request = require('supertest');
const {it,afterEach,describe,beforeEach} = require('mocha');
const User= require('../models/user');



describe("api/users", () => {
  afterEach(async () => {
    await User.deleteMany({});
    
  });
  beforeEach(async()=>{
    await User.deleteMany({});
  })

  describe("GET /", () => {
    it("should return all users", async () => {
      const users = [
        { name: "test", email: "test@gmail.com", password: "hjd@34",country:"Rwanda",city:"Kibuye" },
        { name: "test1", email: "test1@gmail.com", password: "devu@356",country:"Uganda",city:"Kampala" }
      ];
      await User.insertMany(users);
      console.log(users);
      const res = await request(app).get("/api/users");
      expect(res.status).to.equal(200);
      expect(res.body.users.length).to.equal(2);
    });
  });

  describe("GET/api/user/:userId", () => {
    it("should return a user if valid id is passed", async () => {
      const user = new User({
        name: "test",
        email: "test@gmail.com",
        password: "devu@356",
        country:"Rwanda",
        city:"Kibuye"
      });
      await user.save();
      const res = await request(app).get("/api/users/" + user._id);
      expect(res.status).to.equal(200);
      expect(res.body.user).to.have.property("name", user.name);
    });

    it("should return 404 error when invalid object id is passed", async () => {
      const res = await request(app).get("/api/users/1");
      expect(res.status).to.equal(404);
    });

    it("should return 404 error when valid object id is passed but does not exist", async () => {
      const res = await request(app).get("/api/users/111111111111");
      console.log(res.body)
      expect(res.status).to.equal(200);
      expect(res.body.user).to.equal(null);
      
    });
  });

  describe("POST /api/users/signup", () => {
    it("should return user when the all request body is valid", async () => {
      const res = await request(app)
        .post("/api/users/signup")
        .send({
          name: "test123",
          email: "test@gmail.com",
          password: "mdevuale",
          country:"Rwanda",
          city:"Kibuye"
        });
      // console.log(res.body);
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property("message",'You Successfully created a user!' );
      
      
    });

  });

  describe("PUT /api/user/update/:userId", () => {
    it("should update the existing user and return 200", async () => {
      const user = new User({
        name: "test",
        email: "test@gmail.com",
        password: "mdevuale",
        country:"Rwanda",
        city:"Kibuye"
      });
      await user.save();

      const res = await request(app)
        .patch("/api/users/update/" + user._id)
        .send({
          name: "newTest",
          email: "newemail@gmail.com",
          password: "newpassword",
          country:"Burundi",
          city:"Bujumbura"
        });
        
      expect(res).to.have.property('status',200)  
      expect(res.body).to.have.property('status',200);
      expect(res.body.user).to.have.property("name", "newTest");
    });
  });
  

  describe("DELETE /:id", () => {
    it("should delete requested id and return response 200", async () => {
      const user = new User({
        name: "test",
        email: "test@gmail.com",
        password: "malyie",
        country:"Rwanda",
        city:"Kibuye"
      });
      await user.save();

      const res = await request(app).delete("/api/users/" + user._id);
      expect(res.status).to.be.equal(200);
      
    });

    
  });
});

describe("POST /login", function () {
  it("Should login on valid credentials", async () =>{
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

        

       
      
  });
  it("Should not login on invalid credentials", async ()=> {
    const res = await request(app).post("/api/user/signin")
      
      .send({
        email: "devu3@gmail",
        password: "password123",
      })
      
        expect(res).to.have.property('status',404);
        
     
  });
});