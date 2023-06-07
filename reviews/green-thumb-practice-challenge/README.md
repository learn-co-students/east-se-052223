# Green Thumb

You will be building out an
application, Green Thumb, that allows a user to track the number of days they have not watered their plants.

## Setup

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/plants](http://localhost:3000/plants)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `index.js` file. The base URL for your API will be
[http://localhost:3000](http://localhost:3000).

## Core Deliverables

As a user, I can:

1. See the first plant's details, including its **image, name, description,
   height, and days not watered** when the page loads. You will need to make a GET
   request to the following endpoint to retrieve the plant data:

   ```txt
   GET /plants/1

   Example Response:
    {
      "id": "1",
      "name": "Fiddle Leaf Fig",
      "max_days_unwatered": 7,
      "days_unwatered": 5,
      "height": "6 ft",
      "description": "Fiddle-leaf figs require bright, filtered light to grow and look their best.",
      "image": "/image-to-display-url"
    }
   ```

2. See a menu of all plants on the left side of the page in the `ul#plants`
   element when the page loads. (_optional_: you can style each plant in the list
   by adding the classes `plant item` to each `li` element.) There is a
   placeholder `li` in the `ul#plants` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list. You
   will need to make a GET request to the following endpoint to retrieve the
   plant data:

   ```txt
   GET /plants

   Example response:
   [
      {
      "id": "1",
      "name": "Fiddle Leaf Fig",
      "max_days_unwatered": 7,
      "days_unwatered": 5,
      "height": "6 ft",
      "description": "Fiddle-leaf figs require bright, filtered light to grow and look their best.",
      "image": "/image-to-display-url"
      },
      {
        "id": "2",
        "name": "Golden Pothos",
        "max_days_unwatered": 20,
        "days_unwatered": 2,
        "height": "1 ft",
        "description": "Pothos plants can live for many years with basic care and are super adaptable, as various light, soil, and moisture conditions suit them.",
        "image": "/image-to-display-url"
      }
   ]
   ```

3. Track a day the featured plant was not watered. After clicking the "Not Watered" button, I should
   see the number of days not watered increase on the frontend. I should not
   be able to add a day not watered if the plant has been watered it's `max_days_unwatered`. **No persistence is needed for this feature**.
