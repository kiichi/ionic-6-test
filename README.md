# ionic-6-test

This is my test for latest Ionic 6, and I wanted try Cloudflare CI because it's free. Except for some settings for Node.JS version,
it worked. View demo at

[https://ionic-6-test.pages.dev/](https://ionic-6-test.pages.dev/)

The demo is about quick ICD10 search. You can search diagnosis code typing some keywords. No backend.

I converted ICD10 xml file which you can download from https://www.cms.gov/medicare/icd-10/2022-icd-10-cm.



<img src="https://raw.githubusercontent.com/kiichi/ionic-6-test/main/screenshot.png" width="300px"/>

You can see actual script in [convert.html](https://github.com/kiichi/ionic-6-test/blob/main/convert.html). I was writing xml to json converter in python but I noticed that Javascript had native xml parser so i did everything in browser.

