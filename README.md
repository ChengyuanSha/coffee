# React Coffee Selection App With (Fake) REST API Backend

Analyze coffee consumption behaviour and prefereces

## Run Locally

Run the following commands in terminal:    
Start React App
```
npm install
npm start
```
Start `json-server` Backend Server
```
npm run server
```

Then open [http://localhost:3000](http://localhost:3000) to view it in your local browser.
     
       
## Usage

### REST API Backend 

Click `Save Log` button on the website will create a REST API request to the backend server. The data will be saved in `db.json` JSON database. 


### dynamic rendering with config file

Modify `src/config.json` can change the number of rows and number of buttons within a row dynamically.

* `instruction` is the subtitle 
* `buttons` defined the button name
* `images` defines which images in `assets` to use. Note there are only 7 images in `assets` so use 0 - 6. 
* Please keep the number of `buttons` and `images` the same. 
* `button_type` defined the type of the button. Please give **unique** name for each row. 

For example: 

```json
    "buttonType0" : {
        "instruction" : "Choose a Coffee Type",
        "button_type" : "coffeeType",
        "buttons" : [
            "Coffee",
            "Expresso",
            "Tea"
        ],
        "images" : [
            0,
            1,
            2
        ]
    }
```


