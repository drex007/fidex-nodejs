### We are using IOC (Inversion of control for this)
### Define your Repository in the data/repository folder and serve your DBConnection as a constructor param/arguement to the repository class 
### To your Services inject your injectable Repository container to the services as a contructor
### Also To Your Controllers, inject your Service container to the Repository
### Bind your Repository and Service files in the container.bind.ts file
### Dont forget to export your controller files from the index.controllers.ts file
