### What is this?

It is a quiz app . The admin can manage the Quizzes through provied API and the users can see quiz and Questions
Technology Stack
Frontend
   React js
   Material Ui
Backend 
   Node js
   Express js
Database  
   MongoDB(NO SQL)
   




### How to run this locally?

- Clone this repository.

#### Installing Backend dependencies

- `npm install`

#### Installing frontend dependencies

- `npm run client-install`

#### Running Local MongoDB server

In a file called `keys.js` in the root directory. Provide the values for following key -
mongoURI

#### Running both client and server (development server)

- `npm run dev`


#### Database Models
    Question
        #text
        #choices
        #correctAnsIndex
        #ansDescription
        #tag
        #isEnable
        
    Quiz
        #description
        #startTime
        #endTime
        #questions
        #instruction
        #isEnable



#### Available Api end points are :

NOTE- TO achieve accesslevel between User and Admin i have passed accesslevel key in header of each api call and its value could be either admin or user to detect user and give access according to it

Id-- It is used to uniquely identify the document in database created by mongoDb during insertion of document

Tried to maintain the different status code in response for different methods like on post(201),get(200),delete(204).

I am only giving access to my mongoURI only for this test review otherwise we should put it into .env file as environment variable for security purpose

APIs
### add new question

#### edit existing question by Id

### delete existing question by Id

### get question by thier Id

### get any quiz by Id

### get All quizzes

### get all questions for a Quiz by using Quiz Id

### ADD NEW QUIZ

### Edit Existing Quiz by Id

### Delete existing Quiz by Id

### Add Question to a existing Quiz using Question Id and Quiz Id in which we have to add

### Disable any Question in existing quiz by using Question Id and Quiz Id from where question has to be disabled

### Enable any Question in existing quiz by using Question Id and Quiz Id from where question has to be disabled
