
module.exports = {
  "extends": ["stylelint-config-recommended"],
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "tailwind",
        "apply",
        "screen"
      ]
    }],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s", "%", "px", "deg"]
  }
};
