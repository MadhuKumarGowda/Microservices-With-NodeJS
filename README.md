# Microservices-With-NodeJS

Breif introduction about Microservice

Monolithic Application
1.	Described as a single-tiered application
2.	In this, User Interface and data access code are combined into a single program from a single platform.
3.	Self-contained and independent from other computing applications.
4.	Deployed as a single monolithic application.

Disadvantages 
1.	Tight Coupling between components : Monolithic components become tightly coupled and entangled. This coupling effects management, scalability and continuous deployment. 
2.	Overloaded Web Container:  The larger the application, the longer it takes to start up. This has a huge impact on developer’s productivity because of the time wasted waiting for the container to start. It also impact deployment.
3.	Large code base: Large code base makes it though for developers and QA to understand the code and business Knowledge.
4.	Less scalable: Monolithic application prevents the team from working independently on specific functional areas while developing a larger application. Woth Monolithic application, it is much more difficult for an independent team to make a change and update production.
5.	Obstacles in continuous deployment: In monolithic application, to update one component, you must redeploy the entire application, which can interrupt background tasks, regardless of what they are impacted or not.
6.	More deployment and restart times: The size of the application makes it slow and even a minor changes results in redeployment of the whole resulting in increased restart and redeployment time.
7.	New Technology barriers: Any change in language and framework ends up affecting the whole application. This can prove to be costly in terms of time as well as money.
8.	Long Term commitment to a tech stack: Migrating from one stack to another is huge task with monolithic application. This forces you to stick to ne technology stack and in some cases, to a particular version of that technology.


A monolithic application puts all its functionalities into a single process an scales by replicating the monolith on multiple servers.
A Microservices architecture puts each elements of functionality into a separate service and scales by distributing these services across servers, replicating as needed.

Microservices:  Modular, autonomous and logical units of functionality that are independently deployable and scalable. 
Microservices architecture style is an approach to developing a single application as a suit of small services which runs on its own process and communicated as light weight mechanism.
Each microservice focuses on only one task and does that task very well. Each task represent a small business capabilities.
Advantageous of Microservices: 
1.	Modularity: Each microservice demonstrates a logically cohesive, lightweight, and independent business functionality with well-defined boundaries.
2.	Single functionality principle: Each service encapsulates a single business functionality.
3.	Asynchronous invocation: Microservices are stateless by default, thereby helping us invoke them asynchronously.
4.	Independent deployment and scalability: Each microservice can be independently deployed and hence, they are independently scaled to respond to varying workloads and user demands.
5.	Self-containment: A microservice deployment unit is self-contained as it includes all dependent libraries, storage units, and databases.
6.	Fault tolerant: Microservices architecture eliminates single points of failure through distribution of coherent functionality among other services. Even if a single service goes down, the application will continue to work. By leveraging the circuit breaker pattern, fault tolerance can also be enhanced.
7.	Loose coupling: They are designed to be loosely coupled with minimal dependencies on other services in libraries.
8.	Well-defined communication between services: Microservices communicate with each other with well-defined rest endpoints.
9.	Extensible: these can be leveraged to create an extensible solution by quickly onboarding newer ones.
10.	Multiple technology support: Each microservice can use any technology independent of one another.
11.	Faster release cycles: Microservices can be developed in parallel by multiple developers resulting in reduced release time.
Challenges with Microservices: 
1.	Visibility: Challenging to discover individual services by different developers as soon as they are brought live.
2.	Bounded Context: Challenging to set the functional boundaries of each microservice.
3.	Configuration Management: Challenging to have a centralized configuration with multiple instances developed in different environments.
4.	Dynamic Scale-up and scale-down: the number of microservices required at different points while running an application varies depending upon the requirement. In order to achieve this flexibility, a microservice architecture needs to be deployed for dynamic load balancing. This setup can prove to be a challenge in itself.


 


