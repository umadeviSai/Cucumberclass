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
  "duration": 17130628596,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cG[oogle]\u003e but was:\u003cG[iggle.com]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.Testcases.TC_02_ScenarioOutline.launch_stepdef(TC_02_ScenarioOutline.java:22)\r\n\tat ✽.Given launch firefox with the https://www.google.com/?gws_rd\u003dssl(ScenarioOutline.feature:4)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.embedding("image/png", "embedded0.png");
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
  "name": "launch firefox with the https://in.yahoo.com/?p\u003dus",
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
      "val": "https://in.yahoo.com/?p\u003dus",
      "offset": 24
    }
  ],
  "location": "TC_02_ScenarioOutline.launch_stepdef(String,String)"
});
formatter.result({
  "duration": 28097376502,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Yahoo]\u003e but was:\u003c[Giggle.com]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.Testcases.TC_02_ScenarioOutline.launch_stepdef(TC_02_ScenarioOutline.java:22)\r\n\tat ✽.Given launch firefox with the https://in.yahoo.com/?p\u003dus(ScenarioOutline.feature:4)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.embedding("image/png", "embedded1.png");
});