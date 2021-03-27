module.exports = {
  "extends": "stylelint-config-standard",
  "ignoreFiles": ["./node_modules/**/*.css"],
  "rules": {
    "no-descending-specificity": null,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "selector-max-class": 4,
    "selector-max-empty-lines": 0,
    "declaration-no-important": null,
    "unit-no-unknown": true,
    "function-calc-no-invalid": null,
    "property-no-unknown": [
      true,
      {
        "ignoreProperties": ["/tap-highlight-color/", "string"]
      }
    ],
    "selector-max-id": 0,
    "unit-allowed-list": ["em", "rem", "%", "s", "px", "deg", "vh", "ms", "vw", "fr"],
    "indentation": 4,
    "selector-pseudo-class-no-unknown": true,
    "max-empty-lines": [
      2,
      {
        "ignore": ["comments"]
      }
    ]
  }
}
