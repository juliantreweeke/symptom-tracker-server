# Symptom Tracker
This is a prototype of an app I am building. There is a lot of work to do be done, and I am using this kind of like a sandbox to try out ideas.

This is the Back End repo, that is linked to this Front End Repo here:
https://github.com/juliantreweeke/symptom-tracker-client

The idea of the app is a B2B platform where a Health Practitioner can monitor a clients progress via statistics gathered from questionairres that are emailed out to them on a timed interval.

It's still in a discovery phase and on the BE I am undecided whether to use a shared User model or seperate models for each type of user with a shared Account model for authentication.

As far as what is complete, in the BE the auth, login logout and creation of a Practitioner and Client account is done.

In the FE, all the necessary ground work is done for the store logic and folder structure.
In terms of pages the login, logout and layout is done. 
Before finishing other pages and starting on the UI, I am first Spiking out different graph libraries in the front end to see which one is ideal. I am after a library that is mobile responsive and has annotation functionality.

## Technology
* Node
* MongoDB
* Vue
* Vuex
