# African University Presses
African university presses mapped using CartoDB with data input from Google Sheets

## Workings
The map and the features on it are drawn by CartoDB. The data is taken from a [Google Sheet](https://docs.google.com/spreadsheets/d/1URiTsMVkeM12DlZT7IfxqcYgVEt0hohIi4xIy983FI8/edit#gid=0) that CartoDB syncs with every hour. Changes made in the Google Sheet will therefore take up to one hour to show up on the map itself. Changing existing data and creating new entries is both possible and will be updated on the map. New columns, however, will not appear on the map as only predefined column headers are taken into consideration by CartoDB. 

## Editing the Google Sheet
Making changes can be done by editing the [Google Sheet](https://docs.google.com/spreadsheets/d/1URiTsMVkeM12DlZT7IfxqcYgVEt0hohIi4xIy983FI8/edit#gid=0). The existing data has remained intact but is now followed by a number of columns that represent the CartoDB input. These are protected cells and **must not be edited manually**. Changes must be made in the original cells and will automatically update those that form the CartoDB input. 

## Formatting rules
There are a few important formatting rules that must be followed:
1. Never add a row above the current column headers. The headers in the CartoDB input section must remain the way they are for CartoDB to take them into consideration when drawing the map and its features. Changing the headers will result in an empty map. 
2. Always include http:// or https:// when entering links. For Facebook it must be https://. Failure to do so will cause CartoDB to consider it text rather than a link.
3. The twitter handle must be just that (so `@UCTPress` rather than `https://twitter.com/uctpress`)
4. The coordinates but be divided by a comma: `latitude, longitude`.
5. Follow the rules in the column header comments. If absent, be consisent with existing entries. For example, a comment on the `website` column header dictates `n/a` must be entered when no website can be found. The `most recent title published` header has no such comment, but input must be consisent with existing entries and so also use `n/a`. Failure to do so will cause unwanted input text to show up in the map's infobox.
