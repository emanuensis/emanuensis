echo on
copy plan.js +,,
copy cr+plan.js  temp
copy temp plan.js
del temp
rem del *~
