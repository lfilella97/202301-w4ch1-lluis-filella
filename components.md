# Data

## Data layer

-List of gentleman:
-Id
-Name
-Status
-Profession
-Twitter
-Picture
-AlternativeText
-Selected

## Data modifications

- Toggle selected property of gentleman
- Delete a gentleman
- Select all gentleman

# Components

## App

- Contains the gentleman list.
- COntains 3 functions ("toggle","select all", "delete").
- Sends the list of gentlemen to Info.
  -Sends the funciton "delete" and "toggle" to gentleman
  -Sends the function select all to info.

## Info

-Recieves a list of gentleman
-Display number of selected gentleman filter by selected length...

## Button

-Selects cards
-Recieves the select all function

## Gentleman

-Recieve text
-Recieve images
-Recieve gentleman
-Recives the functions: "toggle" and "delete"
