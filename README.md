# hCard Builder
A simple ReactJS app to allow users to generate their hCards.

## Scope
The app has 3 main parts and their positions are responsive based on different screen widths
- The form (left/top panel) contains:
  + Inputs fields to allow users to fill out their info for the hCard.
  + Submit button (does not call any API): simulate submit button by showing loading icon then result popup.
  + Upload avatar button: when the user selects an image, a thumbnail should be shown in the preview.
- The preview (right/bottom panel): is automatically updated with the info being filled out in the form.

## Setup and Run the App
- Node version: `8.4.0`
(default configured in `.nvmrc`, If you have `nvm` setup in your machine --> simply run `nvm use`)
- Install dependencies
```
npm install
```
- Start the app
```
npm start
```

## Reference
hCard is a simple, open format for publishing people, companies and
organizations on the web](http://microformats.org/wiki/hCard)
