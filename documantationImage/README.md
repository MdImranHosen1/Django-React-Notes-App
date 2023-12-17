# Documentation for this project

- First create virtual enviroment
- Then install all package in the virtual enviroment

what is virtual enviroment?\
In simple term this is create a new enviroment where we install all the package we need for the project. And this project does not interact with global packages.

How to install virtual enviroment?

- pip install virtualenv
- virtualenv env      (here env is the directory name wich we want to give)\
Then we have to activate virtualenv. But how?
- env\Scripts\activate.bat         (if we use windows command prompt)
- After that it will look like that
![Alt text](image.png)

Then install django in this virtual enviroment

<b> Keep in mind every command we execute in the (env) virtual enviroment which shown in the upper picture with red mark.</b>

Now we create django project which name is mynotes

- django-admin startproject mynotes
  
![Alt text](image-1.png)

Now move the env folder to my project (mynote)

Then move to the mynote folder and run django project

- python manage.py runserver

Then create a django application in mynote folder.

### Create application

<b>Application and project is not same we crete project already. Now inside the project we create a application.</b> But How?

- python manage.py startapp applcation_name
For this project we create api application. api is application name where we manage the api.
- python manage.py startapp api

### Connect the app with project

Now we have to connect app with main project. How?

In main project (mynotes) have settings.py then open it and  there have "INSTALLED_APPS=[]"
Add my app name here. How?

- "appName.apps.appNameconfig"
For this app
- "api.apps.Apiconfig"
  
For more understanding you can explore api apps where have apps.py.

### Views and URLs

#### views

In views.py take input from the html procesesd those data and send output in HTML.

Inside the api\views.py  
Import json

- from django.http import JsonResponse

![Alt text](image-2.png)

#### URLS

Urls and views are connected through urls.py

create urls.py in api folder.

![Alt text](image-3.png)

Here  views.getRoutes is the function which we create in the views folder. we just connect the views.py getRotes function with urls.py

#### Connect api urls.py with project

api/views.py  <->  api/urls.py  <->  urls.py

connect api/urls.py with our main project urls.py

![Alt text](image-4.png)_

### Database

For add database (default sqlite3) execute those commend in vscmd

- python manage.py migrate

Now let's build our model(table).
![Alt text](image-5.png)

After that we need to execute bolow commend for migrate our model.

- python manage.py makemigrations
![Alt text](image-6.png)

After migrate the table look like that.

we learn about it more leter.

### Admin panel

For access admin first we need to create a user.

- python manage.py createsuperuser

This commend will create user for access admin panel.

- Now if want to active the model which we create then we need to register our model into the admin of app(api which we create).
- from .models import Note
![Alt text](image-8.png)

Aftet that table will be created in database. In admin we can see. But if we want to edit that then we have to follow 2 commned in database section. After that we can edit that.