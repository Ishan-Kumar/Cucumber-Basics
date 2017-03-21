$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestFeature2.feature");
formatter.feature({
  "line": 1,
  "name": "this is from 2nd feature file",
  "description": "",
  "id": "this-is-from-2nd-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "This is a first Dummy Scenario from 2nd file",
  "description": "",
  "id": "this-is-from-2nd-feature-file;this-is-a-first-dummy-scenario-from-2nd-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Webpage1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "This is my \"first\" dummy step",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "This is my \"second\" dummy step",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "This is my \"third\" dummy step",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 12
    }
  ],
  "location": "StepsTest.this_is_my_dummy_step(String)"
});
formatter.result({
  "duration": 1740367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "second",
      "offset": 12
    }
  ],
  "location": "StepsTest.this_is_my_dummy_step(String)"
});
formatter.result({
  "duration": 215040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "third",
      "offset": 12
    }
  ],
  "location": "StepsTest.this_is_my_dummy_step(String)"
});
formatter.result({
  "duration": 224426,
  "status": "passed"
});
formatter.uri("TestFeature3.feature");
formatter.feature({
  "line": 1,
  "name": "this is from 3rd feature file",
  "description": "",
  "id": "this-is-from-3rd-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "This is a first Dummy Scenario from 3rd file",
  "description": "",
  "id": "this-is-from-3rd-feature-file;this-is-a-first-dummy-scenario-from-3rd-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Server"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "This is my \"first\" dummy step",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "This is my \"second\" dummy step",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "This is my \"third\" dummy step",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 12
    }
  ],
  "location": "StepsTest.this_is_my_dummy_step(String)"
});
formatter.result({
  "duration": 322559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "second",
      "offset": 12
    }
  ],
  "location": "StepsTest.this_is_my_dummy_step(String)"
});
formatter.result({
  "duration": 617811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "third",
      "offset": 12
    }
  ],
  "location": "StepsTest.this_is_my_dummy_step(String)"
});
formatter.result({
  "duration": 261546,
  "status": "passed"
});
});