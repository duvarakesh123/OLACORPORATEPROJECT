$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demofeature.feature");
formatter.feature({
  "line": 1,
  "name": "demo script",
  "description": "",
  "id": "demo-script",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "signup facebook page for background",
  "description": "",
  "id": "demo-script;signup-facebook-page-for-background",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Enter user name and password \"\u003cusername\u003e\" ,\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "click on login button \"\u003cString1\u003e\" ,\"\u003cString2\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "demo-script;signup-facebook-page-for-background;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "String1",
        "String2"
      ],
      "line": 21,
      "id": "demo-script;signup-facebook-page-for-background;;1"
    },
    {
      "cells": [
        "duva",
        "pass1",
        "XXXXXX",
        "YYYYYY"
      ],
      "line": 22,
      "id": "demo-script;signup-facebook-page-for-background;;2"
    },
    {
      "cells": [
        "user2",
        "pass2",
        "AAAAAAA",
        "BBBBBB"
      ],
      "line": 23,
      "id": "demo-script;signup-facebook-page-for-background;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "open the browser and navigate to facebook page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on facebook page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "signup facebook page for background",
  "description": "",
  "id": "demo-script;signup-facebook-page-for-background;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Enter user name and password \"duva\" ,\"pass1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "click on login button \"XXXXXX\" ,\"YYYYYY\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "open the browser and navigate to facebook page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on facebook page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 23,
  "name": "signup facebook page for background",
  "description": "",
  "id": "demo-script;signup-facebook-page-for-background;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Enter user name and password \"user2\" ,\"pass2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "click on login button \"AAAAAAA\" ,\"BBBBBB\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("sdet.feature");
formatter.feature({
  "line": 1,
  "name": "Google search feature",
  "description": "",
  "id": "google-search-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "write String in google searchTextbox",
  "description": "",
  "id": "google-search-feature;write-string-in-google-searchtextbox",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigate to google page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter string in search box \"\u003cvalues\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The Result will display",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "google-search-feature;write-string-in-google-searchtextbox;",
  "rows": [
    {
      "cells": [
        "values"
      ],
      "line": 9,
      "id": "google-search-feature;write-string-in-google-searchtextbox;;1"
    },
    {
      "cells": [
        "IBM"
      ],
      "line": 10,
      "id": "google-search-feature;write-string-in-google-searchtextbox;;2"
    },
    {
      "cells": [
        "Manipal"
      ],
      "line": 11,
      "id": "google-search-feature;write-string-in-google-searchtextbox;;3"
    },
    {
      "cells": [
        "Amit"
      ],
      "line": 12,
      "id": "google-search-feature;write-string-in-google-searchtextbox;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "write String in google searchTextbox",
  "description": "",
  "id": "google-search-feature;write-string-in-google-searchtextbox;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigate to google page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter string in search box \"IBM\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The Result will display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "write String in google searchTextbox",
  "description": "",
  "id": "google-search-feature;write-string-in-google-searchtextbox;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigate to google page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter string in search box \"Manipal\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The Result will display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "write String in google searchTextbox",
  "description": "",
  "id": "google-search-feature;write-string-in-google-searchtextbox;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigate to google page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter string in search box \"Amit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The Result will display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});