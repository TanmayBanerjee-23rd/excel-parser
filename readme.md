Steps to execute the Checkout System:

1. Make sure you have LST node installed in your machine

2. Open a terminal and change your directory to somewhere you would like to clone the repository,

3. Run "git clone https://github.com/TanmayBanerjee-23rd/excel-parser.git"

4. Run "cd excel-parser"

5. Run "npm install"

6. Run "npx tsc && npm run start 'path/to/the/xlxs.file'" to have the expected results on console of the excel-parser!

Notes ::

For all undefined or empty values the script substitues those with "UNKNOWN" so that those could categorised and referenced by the seach engine instead of loosing them or letting them go untracked.

Future Scopes ::

1. The script could be organised into ::
   a. excel-parser helper class which would provide 'parseExcelFile' returning the dataArray;
   b. transformer class which would provide mothods for transforming a single sheet and multiple sheets separately. - transformer could be equipped with more constraints as per business needs.
2. If the data volume is huge in a single sheet then
   - we can modify the script to break the sheet into chunks of 10K rows and either
     a. create cron jobs running in batches or
     b. trigger aws lambdas or azure functions
     and do the transformation.
3. If the excel is having too many sheets with high volume of data within each sheet then
   - we can modify the script to create cron jobs for each sheet that would apply point two for each sheet.
