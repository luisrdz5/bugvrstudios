# bugvrstudios
second version of bugvrstudios

This is the develop of the oficial site of bugvrstudios

## To ad data to firebase databases 

# We use the information from 
#https://hackernoon.com/filling-cloud-firestore-with-data-3f67d26bd66e


The information about this step are in the dir ./data

to this task we run the  scripts and you need these requirements

firebase-admin — npm module, you can install it locally to the folder of the script (we do that)
service-key.json — file we’ve generated in the Authentication section of firebase
data.json — actually the data we want to push to our Firestore


the scripts

functionality.js [require fnctionality.json]: this script uplad all the functionality information of the site
blog.js [require blogArticles.json, blogComments.json, blogLanguages.json]: this script upload the initial information [example] for the blog
users.js [require user.json]: this script upload the initial users for the system 
