# Data

## Data layer //variable

- List of Gentlemen
  - id
  - name
  - status
  - profession
  - twitter
  - picture
  - alternativaText
  - selected

## Data modification // funciones

- toggle selected property of gentleman
- select all gentlemen
- delete a gentleman

# Components

## App

- Contains the gentlemen list // variable estado. no modificamos, matxacamos.
- Contains the function "toggle",
- Contains the function "select all"
- Contains the function "delete"
- Sends the functions "delete" and "toggle" to Gentleman
- Sends the function "select all" to Button
- Sends the list of gentlemen to Info

## Info

- Receives the list of gentlemen from App
- Display number of selected gentlemen

## Button // pueder ser un <a>

- Receives the function to "select all"

## Gentleman

- Receives the function to "delete"
- Receives the function "toggle"
- Receives a gentleman
