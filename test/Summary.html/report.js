$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ScenarioOutline.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is desined to validate multiple sets of data.",
  "description": "",
  "id": "this-feature-is-desined-to-validate-multiple-sets-of-data.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-desined-to-validate-multiple-sets-of-data.;scenario-description;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@custom"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "launch firefox with the https://www.google.com/?gws_rd\u003dssl",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "check nopCommerce is the output",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 7
    },
    {
      "val": "https://www.google.com/?gws_rd\u003dssl",
      "offset": 24
    }
  ],
  "location": "TC_02_ScenarioOutline.launch_stepdef(String,String)"
});
formatter.result({
  "duration": 18676138362,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-desined-to-validate-multiple-sets-of-data.;scenario-description;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@custom"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "launch firefix with the https://in.yahoo.com/?p\u003dus",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "check nopCommerce is the output",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefix",
      "offset": 7
    },
    {
      "val": "https://in.yahoo.com/?p\u003dus",
      "offset": 24
    }
  ],
  "location": "TC_02_ScenarioOutline.launch_stepdef(String,String)"
});
formatter.result({
  "duration": 253794,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});