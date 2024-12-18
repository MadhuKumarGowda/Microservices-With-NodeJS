var rest_supertest = require("supertest");
var should = require("should");

// Enter rest microservice app's UR: here
var rest_server = rest_supertest.agent("http://localhost:4002");

describe("Unit Test for Rest Services", ()=>{
         // #1 Test if the REST URL is UP
         it("should find the get movies service to be running", (done)=>{
            rest_server.get("/movies")
                .expect("Content-type", /json/)
                .expect(200)
                done();
         })

         it("should find the get user service to be running", (done)=>{
            rest_server.get("/users")
                .expect("Content-type", /json/)
                .expect(200)
                done();
         })

         it("should find the save user service to be running", (done)=>{
            rest_server.post("/user")
                .expect("Content-type", /json/)
                .expect(201)
                done();
         })

         it("should find the save movie service to be running", (done)=>{
            rest_server.post("/movie")
                .expect("Content-type", /json/)
                .expect(201)
                done();
         })

         it("should return 404", (done)=>{
            rest_server.get("/botfound")
                .expect("Content-type", /json/)
                .expect(303)
                done();
         })
});