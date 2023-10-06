// Copyright 2012 Google Inc. All rights reserved.
(function() {

  var data = {
      "resource": {
          "version": "1",

          "macros": [{
              "function": "__e"
          }, {
              "vtp_signal": 0,
              "function": "__c",
              "vtp_value": 0
          }, {
              "function": "__c",
              "vtp_value": "google.ru"
          }, {
              "function": "__c",
              "vtp_value": 0
          }, {
              "vtp_signal": 0,
              "function": "__c",
              "vtp_value": 0
          }, {
              "function": "__c",
              "vtp_value": "google.ru"
          }, {
              "function": "__c",
              "vtp_value": 0
          }],
          "tags": [{
              "function": "__ogt_1p_data_v2",
              "priority": 13,
              "vtp_cityType": "CSS_SELECTOR",
              "vtp_manualEmailEnabled": false,
              "vtp_firstNameType": "CSS_SELECTOR",
              "vtp_countryType": "CSS_SELECTOR",
              "vtp_cityValue": "",
              "vtp_isAutoEnabled": true,
              "vtp_autoCollectExclusionSelectors": ["list", ["map", "exclusionSelector", ""]],
              "vtp_emailType": "CSS_SELECTOR",
              "vtp_regionType": "CSS_SELECTOR",
              "vtp_postalCodeValue": "",
              "vtp_lastNameValue": "",
              "vtp_phoneType": "CSS_SELECTOR",
              "vtp_phoneValue": "",
              "vtp_streetType": "CSS_SELECTOR",
              "vtp_postalCodeType": "CSS_SELECTOR",
              "vtp_emailValue": "",
              "vtp_firstNameValue": "",
              "vtp_streetValue": "",
              "vtp_lastNameType": "CSS_SELECTOR",
              "vtp_isEnabled": true,
              "vtp_regionValue": "",
              "vtp_countryValue": "",
              "vtp_autoEmailEnabled": true,
              "tag_id": 10
          }, {
              "function": "__ccd_ga_first",
              "priority": 12,
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 24
          }, {
              "function": "__set_product_settings",
              "priority": 11,
              "vtp_instanceDestinationId": self.optyaGtagId,
              "vtp_foreignTldMacroResult": ["macro", 5],
              "vtp_isChinaVipRegionMacroResult": ["macro", 6],
              "tag_id": 23
          }, {
              "function": "__ogt_google_signals",
              "priority": 10,
              "vtp_googleSignals": "DISABLED",
              "vtp_instanceDestinationId": self.optyaGtagId,
              "vtp_serverMacroResult": ["macro", 4],
              "tag_id": 22
          }, {
              "function": "__ccd_ga_regscope",
              "priority": 9,
              "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""],
                  ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]
              ],
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 21
          }, {
              "function": "__ccd_em_download",
              "priority": 8,
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 20
          }, {
              "function": "__ccd_em_form",
              "priority": 7,
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 19
          }, {
              "function": "__ccd_em_outbound_click",
              "priority": 6,
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 18
          }, {
              "function": "__ccd_em_page_view",
              "priority": 5,
              "vtp_historyEvents": true,
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 17
          }, {
              "function": "__ccd_em_scroll",
              "priority": 4,
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 16
          }, {
              "function": "__ccd_em_site_search",
              "priority": 3,
              "vtp_searchQueryParams": "q,s,search,query,keyword",
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 15
          }, {
              "function": "__ccd_em_video",
              "priority": 2,
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 14
          }, {
              "function": "__ccd_conversion_marking",
              "priority": 1,
              "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 13
          }, {
              "function": "__gct",
              "vtp_trackingId": self.optyaGtagId,
              "vtp_sessionDuration": 0,
              "vtp_googleSignals": ["macro", 1],
              "vtp_foreignTld": ["macro", 2],
              "vtp_restrictDomain": ["macro", 3],
              "vtp_eventSettings": ["map"],
              "tag_id": 7
          }, {
              "function": "__ccd_ga_last",
              "priority": 0,
              "vtp_instanceDestinationId": self.optyaGtagId,
              "tag_id": 12
          }],
          "predicates": [{
              "function": "_eq",
              "arg0": ["macro", 0],
              "arg1": "gtm.js"
          }, {
              "function": "_eq",
              "arg0": ["macro", 0],
              "arg1": "gtm.init"
          }],
          "rules": [
              [
                  ["if", 0],
                  ["add", 13]
              ],
              [
                  ["if", 1],
                  ["add", 0, 14, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
              ]
          ]
      },
      "runtime": [
          [50, "__ccd_conversion_marking", [46, "a"],
              [22, [30, [28, [17, [15, "a"], "conversionRules"]],
                      [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "b", ["require", "internal.registerCcdCallback"]],
              [52, "c", [15, "__module_ccdConversionMarking"]],
              ["b", [17, [15, "a"], "instanceDestinationId"],
                  [51, "", [7, "d"],
                      [2, [15, "c"], "callback", [7, [15, "d"],
                          [15, "a"]
                      ]]
                  ]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]],
              [36]
          ],
          [50, "__ccd_em_download", [46, "a"],
              [50, "r", [46, "x"],
                  [36, [1, [15, "x"],
                      [21, [2, [2, [15, "x"], "toLowerCase", [7]], "match", [7, [15, "q"]]],
                          [45]
                      ]
                  ]]
              ],
              [50, "s", [46, "x"],
                  [52, "y", [2, [17, [15, "x"], "pathname"], "split", [7, "."]]],
                  [52, "z", [39, [18, [17, [15, "y"], "length"], 1],
                      [16, [15, "y"],
                          [37, [17, [15, "y"], "length"], 1]
                      ], ""
                  ]],
                  [36, [16, [2, [15, "z"], "split", [7, "/"]], 0]]
              ],
              [50, "t", [46, "x"],
                  [36, [39, [12, [2, [17, [15, "x"], "pathname"], "substring", [7, 0, 1]], "/"],
                      [17, [15, "x"], "pathname"],
                      [0, "/", [17, [15, "x"], "pathname"]]
                  ]]
              ],
              [50, "u", [46, "x"],
                  [41, "y"],
                  [3, "y", ""],
                  [22, [1, [15, "x"],
                          [17, [15, "x"], "href"]
                      ],
                      [46, [53, [41, "z"],
                          [3, "z", [2, [17, [15, "x"], "href"], "indexOf", [7, "#"]]],
                          [3, "y", [39, [23, [15, "z"], 0],
                              [17, [15, "x"], "href"],
                              [2, [17, [15, "x"], "href"], "substring", [7, 0, [15, "z"]]]
                          ]]
                      ]]
                  ],
                  [36, [15, "y"]]
              ],
              [50, "w", [46, "x"],
                  [52, "y", [8]],
                  [43, [15, "y"],
                      [15, "j"], true
                  ],
                  [43, [15, "y"],
                      [15, "f"], true
                  ],
                  [43, [15, "x"], "eventMetadata", [15, "y"]]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "templateStorage"]],
              [52, "f", "speculative"],
              [52, "g", "ae_block_downloads"],
              [52, "h", "file_download"],
              [52, "i", "isRegistered"],
              [52, "j", "em_event"],
              [52, "k", [17, [15, "a"], "instanceDestinationId"]],
              [22, ["c", [15, "k"],
                      [15, "g"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              ["d", [15, "k"],
                  [51, "", [7, "x"],
                      [22, [30, [21, [2, [15, "x"], "getEventName", [7]],
                                  [15, "h"]
                              ],
                              [28, [2, [15, "x"], "getMetadata", [7, [15, "j"]]]]
                          ],
                          [46, [36]]
                      ],
                      [22, ["c", [15, "k"],
                              [15, "g"]
                          ],
                          [46, [2, [15, "x"], "abort", [7]],
                              [36]
                          ]
                      ],
                      [2, [15, "x"], "setMetadata", [7, [15, "f"], false]],
                      [22, [28, [17, [15, "a"], "includeParams"]],
                          [46, [2, [15, "x"], "setHitData", [7, "link_id", [44]]],
                              [2, [15, "x"], "setHitData", [7, "link_url", [44]]],
                              [2, [15, "x"], "setHitData", [7, "link_text", [44]]],
                              [2, [15, "x"], "setHitData", [7, "file_name", [44]]],
                              [2, [15, "x"], "setHitData", [7, "file_extension", [44]]]
                          ]
                      ]
                  ]
              ],
              [22, [2, [15, "e"], "getItem", [7, [15, "i"]]],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "l", ["require", "internal.addDataLayerEventListener"]],
              [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]],
              [52, "n", ["require", "internal.getDestinationIds"]],
              [52, "o", ["require", "parseUrl"]],
              [52, "p", ["require", "internal.sendGtagEvent"]],
              [52, "q", [0, "^(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|", "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$"]],
              [52, "v", ["m", [8, "checkValidation", true]]],
              [22, [28, [15, "v"]],
                  [46, [2, [15, "a"], "gtmOnFailure", [7]],
                      [36]
                  ]
              ],
              [2, [15, "e"], "setItem", [7, [15, "i"], true]],
              ["l", "gtm.linkClick", [51, "", [7, "x", "y"],
                      ["y"],
                      [52, "z", [8, "eventId", [16, [15, "x"], "gtm.uniqueEventId"]]],
                      [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
                          [46, [43, [15, "z"], "deferrable", true]]
                      ],
                      [52, "ba", [16, [15, "x"], "gtm.elementUrl"]],
                      [52, "bb", ["o", [15, "ba"]]],
                      [22, [28, [15, "bb"]],
                          [46, [36]]
                      ],
                      [52, "bc", ["s", [15, "bb"]]],
                      [22, [28, ["r", [15, "bc"]]],
                          [46, [36]]
                      ],
                      [52, "bd", [8, "link_id", [16, [15, "x"], "gtm.elementId"], "link_url", ["u", [15, "bb"]], "link_text", [16, [15, "x"], "gtm.elementText"], "file_name", ["t", [15, "bb"]], "file_extension", [15, "bc"]]],
                      ["w", [15, "z"]],
                      ["p", ["n"],
                          [15, "h"],
                          [15, "bd"],
                          [15, "z"]
                      ]
                  ],
                  [15, "v"]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_form", [46, "a"],
              [50, "u", [46, "ba"],
                  [52, "bb", [30, [16, [15, "ba"],
                          [15, "l"]
                      ],
                      [8]
                  ]],
                  [43, [15, "bb"], "event_usage", [7, 8]],
                  [43, [15, "ba"],
                      [15, "l"],
                      [15, "bb"]
                  ]
              ],
              [50, "v", [46, "ba", "bb"],
                  [52, "bc", [30, [16, [15, "ba"],
                          [15, "l"]
                      ],
                      [8]
                  ]],
                  [43, [15, "bc"],
                      [15, "k"], true
                  ],
                  [43, [15, "bc"],
                      [15, "f"], true
                  ],
                  [22, [1, [15, "p"],
                          [16, [15, "bb"], "gtm.formCanceled"]
                      ],
                      [46, [43, [15, "bc"],
                          [15, "m"], true
                      ]]
                  ],
                  [43, [15, "ba"],
                      [15, "l"],
                      [15, "bc"]
                  ]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "templateStorage"]],
              [52, "f", "speculative"],
              [52, "g", "ae_block_form"],
              [52, "h", "form_submit"],
              [52, "i", "form_start"],
              [52, "j", "isRegistered"],
              [52, "k", "em_event"],
              [52, "l", "eventMetadata"],
              [52, "m", "form_event_canceled"],
              [52, "n", [17, [15, "a"], "instanceDestinationId"]],
              [41, "o"],
              [3, "o", [17, [15, "a"], "skipValidation"]],
              [52, "p", [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]]],
              [22, ["c", [15, "n"],
                      [15, "g"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [22, [1, [15, "p"],
                      [20, [15, "o"],
                          [44]
                      ]
                  ],
                  [46, [3, "o", [20, [2, [15, "n"], "indexOf", [7, "AW-"]], 0]]]
              ],
              ["d", [15, "n"],
                  [51, "", [7, "ba"],
                      [52, "bb", [2, [15, "ba"], "getEventName", [7]]],
                      [52, "bc", [30, [20, [15, "bb"],
                              [15, "i"]
                          ],
                          [20, [15, "bb"],
                              [15, "h"]
                          ]
                      ]],
                      [22, [30, [28, [15, "bc"]],
                              [28, [2, [15, "ba"], "getMetadata", [7, [15, "k"]]]]
                          ],
                          [46, [36]]
                      ],
                      [22, ["c", [15, "n"],
                              [15, "g"]
                          ],
                          [46, [2, [15, "ba"], "abort", [7]],
                              [36]
                          ]
                      ],
                      [22, [15, "p"],
                          [46, [22, [1, [28, [15, "o"]],
                                  [2, [15, "ba"], "getMetadata", [7, [15, "m"]]]
                              ],
                              [46, [2, [15, "ba"], "abort", [7]],
                                  [36]
                              ]
                          ]]
                      ],
                      [2, [15, "ba"], "setMetadata", [7, [15, "f"], false]],
                      [22, [28, [17, [15, "a"], "includeParams"]],
                          [46, [2, [15, "ba"], "setHitData", [7, "form_id", [44]]],
                              [2, [15, "ba"], "setHitData", [7, "form_name", [44]]],
                              [2, [15, "ba"], "setHitData", [7, "form_destination", [44]]],
                              [2, [15, "ba"], "setHitData", [7, "form_length", [44]]],
                              [22, [20, [15, "bb"],
                                      [15, "h"]
                                  ],
                                  [46, [2, [15, "ba"], "setHitData", [7, "form_submit_text", [44]]]],
                                  [46, [22, [20, [15, "bb"],
                                          [15, "i"]
                                      ],
                                      [46, [2, [15, "ba"], "setHitData", [7, "first_field_id", [44]]],
                                          [2, [15, "ba"], "setHitData", [7, "first_field_name", [44]]],
                                          [2, [15, "ba"], "setHitData", [7, "first_field_type", [44]]],
                                          [2, [15, "ba"], "setHitData", [7, "first_field_position", [44]]]
                                      ]
                                  ]]
                              ]
                          ]
                      ]
                  ]
              ],
              [22, [2, [15, "e"], "getItem", [7, [15, "j"]]],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [2, [15, "e"], "setItem", [7, [15, "j"], true]],
              [52, "q", ["require", "internal.addFormInteractionListener"]],
              [52, "r", ["require", "internal.addFormSubmitListener"]],
              [52, "s", ["require", "internal.getDestinationIds"]],
              [52, "t", ["require", "internal.sendGtagEvent"]],
              [52, "w", [8]],
              [52, "x", [51, "", [7, "ba", "bb"],
                  [22, [15, "bb"],
                      [46, ["bb"]]
                  ],
                  [52, "bc", [16, [15, "ba"], "gtm.elementId"]],
                  [22, [16, [15, "w"],
                          [15, "bc"]
                      ],
                      [46, [36]]
                  ],
                  [43, [15, "w"],
                      [15, "bc"], true
                  ],
                  [52, "bd", [8, "form_id", [15, "bc"], "form_name", [16, [15, "ba"], "gtm.interactedFormName"], "form_destination", [16, [15, "ba"], "gtm.elementUrl"], "form_length", [16, [15, "ba"], "gtm.interactedFormLength"], "first_field_id", [16, [15, "ba"], "gtm.interactedFormFieldId"], "first_field_name", [16, [15, "ba"], "gtm.interactedFormFieldName"], "first_field_type", [16, [15, "ba"], "gtm.interactedFormFieldType"], "first_field_position", [16, [15, "ba"], "gtm.interactedFormFieldPosition"]]],
                  [52, "be", [8, "eventId", [17, [15, "a"], "gtmEventId"]]],
                  [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
                      [46, [43, [15, "be"], "deferrable", true]]
                  ],
                  ["u", [15, "be"]],
                  ["v", [15, "be"],
                      [15, "ba"]
                  ],
                  ["t", ["s"],
                      [15, "i"],
                      [15, "bd"],
                      [15, "be"]
                  ]
              ]],
              [52, "y", [16, [15, "b"], "useEnableAutoEventOnFormApis"]],
              [52, "z", [51, "", [7, "ba", "bb"],
                  ["x", [15, "ba"],
                      [44]
                  ],
                  [52, "bc", [8, "form_id", [16, [15, "ba"], "gtm.elementId"], "form_name", [16, [15, "ba"], "gtm.interactedFormName"], "form_destination", [16, [15, "ba"], "gtm.elementUrl"], "form_length", [16, [15, "ba"], "gtm.interactedFormLength"], "form_submit_text", [39, [15, "y"],
                      [16, [15, "ba"], "gtm.formSubmitElementText"],
                      [16, [15, "ba"], "gtm.formSubmitButtonText"]
                  ]]],
                  [43, [15, "bc"], "event_callback", [15, "bb"]],
                  [52, "bd", [8, "eventId", [17, [15, "a"], "gtmEventId"]]],
                  [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
                      [46, [43, [15, "bd"], "deferrable", true]]
                  ],
                  ["u", [15, "bd"]],
                  ["v", [15, "bd"],
                      [15, "ba"]
                  ],
                  ["t", ["s"],
                      [15, "h"],
                      [15, "bc"],
                      [15, "bd"]
                  ]
              ]],
              [22, [15, "y"],
                  [46, [53, [52, "ba", ["require", "internal.addDataLayerEventListener"]],
                      [52, "bb", ["require", "internal.enableAutoEventOnFormSubmit"]],
                      [52, "bc", ["require", "internal.enableAutoEventOnFormInteraction"]],
                      [52, "bd", ["bc"]],
                      [22, [28, [15, "bd"]],
                          [46, [2, [15, "a"], "gtmOnFailure", [7]],
                              [36]
                          ]
                      ],
                      ["ba", "gtm.formInteract", [15, "x"],
                          [15, "bd"]
                      ],
                      [52, "be", ["bb", [8, "checkValidation", [28, [15, "p"]], "waitForTags", false]]],
                      [22, [28, [15, "be"]],
                          [46, [2, [15, "a"], "gtmOnFailure", [7]],
                              [36]
                          ]
                      ],
                      ["ba", "gtm.formSubmit", [15, "z"],
                          [15, "be"]
                      ]
                  ]],
                  [46, ["q", [15, "x"]],
                      ["r", [15, "z"],
                          [8, "waitForCallbacks", false, "checkValidation", [28, [15, "p"]]]
                      ]
                  ]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_outbound_click", [46, "a"],
              [50, "s", [46, "y"],
                  [22, [28, [15, "y"]],
                      [46, [36, [44]]]
                  ],
                  [41, "z"],
                  [3, "z", ""],
                  [22, [1, [15, "y"],
                          [17, [15, "y"], "href"]
                      ],
                      [46, [53, [41, "ba"],
                          [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]],
                          [3, "z", [39, [23, [15, "ba"], 0],
                              [17, [15, "y"], "href"],
                              [2, [17, [15, "y"], "href"], "substring", [7, 0, [15, "ba"]]]
                          ]]
                      ]]
                  ],
                  [36, [15, "z"]]
              ],
              [50, "t", [46, "y"],
                  [22, [28, [15, "y"]],
                      [46, [36, [44]]]
                  ],
                  [41, "z"],
                  [3, "z", [17, [15, "y"], "hostname"]],
                  [52, "ba", [2, [15, "z"], "match", [7, "^www\\d*\\."]]],
                  [22, [1, [15, "ba"],
                          [16, [15, "ba"], 0]
                      ],
                      [46, [3, "z", [2, [15, "z"], "substring", [7, [17, [16, [15, "ba"], 0], "length"]]]]]
                  ],
                  [36, [15, "z"]]
              ],
              [50, "u", [46, "y"],
                  [22, [28, [15, "y"]],
                      [46, [36, false]]
                  ],
                  [52, "z", [2, [17, [15, "y"], "hostname"], "toLowerCase", [7]]],
                  [41, "ba"],
                  [3, "ba", [2, ["t", ["q", ["p"]]], "toLowerCase", [7]]],
                  [41, "bb"],
                  [3, "bb", [37, [17, [15, "z"], "length"],
                      [17, [15, "ba"], "length"]
                  ]],
                  [22, [1, [18, [15, "bb"], 0],
                          [29, [2, [15, "ba"], "charAt", [7, 0]], "."]
                      ],
                      [46, [32, [15, "bb"],
                              [3, "bb", [37, [15, "bb"], 1]]
                          ],
                          [3, "ba", [0, ".", [15, "ba"]]]
                      ]
                  ],
                  [22, [1, [19, [15, "bb"], 0],
                          [12, [2, [15, "z"], "indexOf", [7, [15, "ba"],
                                  [15, "bb"]
                              ]],
                              [15, "bb"]
                          ]
                      ],
                      [46, [36, false]]
                  ],
                  [36, true]
              ],
              [50, "x", [46, "y"],
                  [52, "z", [8]],
                  [43, [15, "z"],
                      [15, "j"], true
                  ],
                  [43, [15, "z"],
                      [15, "f"], true
                  ],
                  [43, [15, "y"], "eventMetadata", [15, "z"]]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "templateStorage"]],
              [52, "f", "speculative"],
              [52, "g", "ae_block_outbound_click"],
              [52, "h", "click"],
              [52, "i", "isRegistered"],
              [52, "j", "em_event"],
              [52, "k", [17, [15, "a"], "instanceDestinationId"]],
              [22, ["c", [15, "k"],
                      [15, "g"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              ["d", [15, "k"],
                  [51, "", [7, "y"],
                      [22, [30, [21, [2, [15, "y"], "getEventName", [7]],
                                  [15, "h"]
                              ],
                              [28, [2, [15, "y"], "getMetadata", [7, [15, "j"]]]]
                          ],
                          [46, [36]]
                      ],
                      [22, ["c", [15, "k"],
                              [15, "g"]
                          ],
                          [46, [2, [15, "y"], "abort", [7]],
                              [36]
                          ]
                      ],
                      [2, [15, "y"], "setMetadata", [7, [15, "f"], false]],
                      [22, [28, [17, [15, "a"], "includeParams"]],
                          [46, [2, [15, "y"], "setHitData", [7, "link_id", [44]]],
                              [2, [15, "y"], "setHitData", [7, "link_classes", [44]]],
                              [2, [15, "y"], "setHitData", [7, "link_url", [44]]],
                              [2, [15, "y"], "setHitData", [7, "link_domain", [44]]],
                              [2, [15, "y"], "setHitData", [7, "outbound", [44]]]
                          ]
                      ]
                  ]
              ],
              [22, [2, [15, "e"], "getItem", [7, [15, "i"]]],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "l", ["require", "internal.addDataLayerEventListener"]],
              [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]],
              [52, "n", ["require", "internal.getDestinationIds"]],
              [52, "o", ["require", "internal.getRemoteConfigParameter"]],
              [52, "p", ["require", "getUrl"]],
              [52, "q", ["require", "parseUrl"]],
              [52, "r", ["require", "internal.sendGtagEvent"]],
              [52, "v", ["o", [15, "k"], "cross_domain_conditions"]],
              [52, "w", ["m", [8, "affiliateDomains", [15, "v"], "checkValidation", true, "waitForTags", false]]],
              [22, [28, [15, "w"]],
                  [46, [2, [15, "a"], "gtmOnFailure", [7]],
                      [36]
                  ]
              ],
              [2, [15, "e"], "setItem", [7, [15, "i"], true]],
              ["l", "gtm.linkClick", [51, "", [7, "y", "z"],
                      [52, "ba", ["q", [16, [15, "y"], "gtm.elementUrl"]]],
                      [22, [28, ["u", [15, "ba"]]],
                          [46, ["z"],
                              [36]
                          ]
                      ],
                      [52, "bb", [8, "link_id", [16, [15, "y"], "gtm.elementId"], "link_classes", [16, [15, "y"], "gtm.elementClasses"], "link_url", ["s", [15, "ba"]], "link_domain", ["t", [15, "ba"]], "outbound", true]],
                      [43, [15, "bb"], "event_callback", [15, "z"]],
                      [52, "bc", [8, "eventId", [16, [15, "y"], "gtm.uniqueEventId"]]],
                      [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
                          [46, [43, [15, "bc"], "deferrable", true]]
                      ],
                      ["x", [15, "bc"]],
                      ["r", ["n"],
                          [15, "h"],
                          [15, "bb"],
                          [15, "bc"]
                      ]
                  ],
                  [15, "w"]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_page_view", [46, "a"],
              [50, "r", [46, "s"],
                  [52, "t", [8]],
                  [43, [15, "t"],
                      [15, "k"], true
                  ],
                  [43, [15, "t"],
                      [15, "g"], true
                  ],
                  [43, [15, "s"], "eventMetadata", [15, "t"]]
              ],
              [22, [28, [17, [15, "a"], "historyEvents"]],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "internal.setRemoteConfigParameter"]],
              [52, "f", ["require", "templateStorage"]],
              [52, "g", "speculative"],
              [52, "h", "ae_block_history"],
              [52, "i", "page_view"],
              [52, "j", "isRegistered"],
              [52, "k", "em_event"],
              [52, "l", [17, [15, "a"], "instanceDestinationId"]],
              [22, ["c", [15, "l"],
                      [15, "h"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              ["d", [15, "l"],
                  [51, "", [7, "s"],
                      [22, [30, [21, [2, [15, "s"], "getEventName", [7]],
                                  [15, "i"]
                              ],
                              [28, [2, [15, "s"], "getMetadata", [7, [15, "k"]]]]
                          ],
                          [46, [36]]
                      ],
                      [22, ["c", [15, "l"],
                              [15, "h"]
                          ],
                          [46, [2, [15, "s"], "abort", [7]],
                              [36]
                          ]
                      ],
                      [2, [15, "s"], "setMetadata", [7, [15, "g"], false]],
                      ["e", [15, "l"], "page_referrer", [2, [15, "s"], "getHitData", [7, "page_referrer"]]],
                      [22, [28, [17, [15, "a"], "includeParams"]],
                          [46, [2, [15, "s"], "setHitData", [7, "page_location", [44]]],
                              [2, [15, "s"], "setHitData", [7, "page_referrer", [44]]]
                          ]
                      ]
                  ]
              ],
              [22, [2, [15, "f"], "getItem", [7, [15, "j"]]],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "m", ["require", "internal.addDataLayerEventListener"]],
              [52, "n", ["require", "internal.enableAutoEventOnHistoryChange"]],
              [52, "o", ["require", "internal.getDestinationIds"]],
              [52, "p", ["require", "internal.sendGtagEvent"]],
              [52, "q", ["n", [8, "interval", 1000]]],
              [22, [28, [15, "q"]],
                  [46, [2, [15, "a"], "gtmOnFailure", [7]],
                      [36]
                  ]
              ],
              [2, [15, "f"], "setItem", [7, [15, "j"], true]],
              ["m", "gtm.historyChange-v2", [51, "", [7, "s", "t"],
                      ["t"],
                      [52, "u", [16, [15, "s"], "gtm.oldUrl"]],
                      [22, [20, [16, [15, "s"], "gtm.newUrl"],
                              [15, "u"]
                          ],
                          [46, [36]]
                      ],
                      [52, "v", [16, [15, "s"], "gtm.historyChangeSource"]],
                      [22, [1, [1, [21, [15, "v"], "pushState"],
                                  [21, [15, "v"], "popstate"]
                              ],
                              [21, [15, "v"], "replaceState"]
                          ],
                          [46, [36]]
                      ],
                      [52, "w", [8, "page_location", [16, [15, "s"], "gtm.newUrl"], "page_referrer", [15, "u"]]],
                      [52, "x", [8, "eventId", [16, [15, "s"], "gtm.uniqueEventId"]]],
                      [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
                          [46, [43, [15, "x"], "deferrable", true]]
                      ],
                      ["r", [15, "x"]],
                      ["p", ["o"],
                          [15, "i"],
                          [15, "w"],
                          [15, "x"]
                      ]
                  ],
                  [15, "q"]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_scroll", [46, "a"],
              [50, "q", [46, "r"],
                  [52, "s", [8]],
                  [43, [15, "s"],
                      [15, "j"], true
                  ],
                  [43, [15, "s"],
                      [15, "f"], true
                  ],
                  [43, [15, "r"], "eventMetadata", [15, "s"]]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "templateStorage"]],
              [52, "f", "speculative"],
              [52, "g", "ae_block_scroll"],
              [52, "h", "scroll"],
              [52, "i", "isRegistered"],
              [52, "j", "em_event"],
              [52, "k", [17, [15, "a"], "instanceDestinationId"]],
              [22, ["c", [15, "k"],
                      [15, "g"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              ["d", [15, "k"],
                  [51, "", [7, "r"],
                      [22, [30, [21, [2, [15, "r"], "getEventName", [7]],
                                  [15, "h"]
                              ],
                              [28, [2, [15, "r"], "getMetadata", [7, [15, "j"]]]]
                          ],
                          [46, [36]]
                      ],
                      [22, ["c", [15, "k"],
                              [15, "g"]
                          ],
                          [46, [2, [15, "r"], "abort", [7]],
                              [36]
                          ]
                      ],
                      [2, [15, "r"], "setMetadata", [7, [15, "f"], false]],
                      [22, [28, [17, [15, "a"], "includeParams"]],
                          [46, [2, [15, "r"], "setHitData", [7, "percent_scrolled", [44]]]]
                      ]
                  ]
              ],
              [22, [2, [15, "e"], "getItem", [7, [15, "i"]]],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "l", ["require", "internal.addDataLayerEventListener"]],
              [52, "m", ["require", "internal.enableAutoEventOnScroll"]],
              [52, "n", ["require", "internal.getDestinationIds"]],
              [52, "o", ["require", "internal.sendGtagEvent"]],
              [52, "p", ["m", [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90]]],
              [22, [28, [15, "p"]],
                  [46, [2, [15, "a"], "gtmOnFailure", [7]],
                      [36]
                  ]
              ],
              [2, [15, "e"], "setItem", [7, [15, "i"], true]],
              ["l", "gtm.scrollDepth", [51, "", [7, "r", "s"],
                      ["s"],
                      [52, "t", [8, "eventId", [16, [15, "r"], "gtm.uniqueEventId"]]],
                      [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
                          [46, [43, [15, "t"], "deferrable", true]]
                      ],
                      [52, "u", [8, "percent_scrolled", [16, [15, "r"], "gtm.scrollThreshold"]]],
                      ["q", [15, "t"]],
                      ["o", ["n"],
                          [15, "h"],
                          [15, "u"],
                          [15, "t"]
                      ]
                  ],
                  [15, "p"]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_site_search", [46, "a"],
              [50, "e", [46, "j"],
                  [52, "k", [2, [30, [15, "j"], ""], "split", [7, ","]]],
                  [53, [41, "l"],
                      [3, "l", 0],
                      [63, [7, "l"],
                          [23, [15, "l"],
                              [17, [15, "k"], "length"]
                          ],
                          [33, [15, "l"],
                              [3, "l", [0, [15, "l"], 1]]
                          ],
                          [46, [53, [52, "m", ["b", [2, [16, [15, "k"],
                                  [15, "l"]
                              ], "trim", [7]]]],
                              [22, [21, [15, "m"],
                                      [44]
                                  ],
                                  [46, [36, [15, "m"]]]
                              ]
                          ]]
                      ]
                  ]
              ],
              [50, "f", [46, "j", "k"],
                  [52, "l", [8, "search_term", [15, "j"]]],
                  [52, "m", [2, [30, [15, "k"], ""], "split", [7, ","]]],
                  [53, [41, "n"],
                      [3, "n", 0],
                      [63, [7, "n"],
                          [23, [15, "n"],
                              [17, [15, "m"], "length"]
                          ],
                          [33, [15, "n"],
                              [3, "n", [0, [15, "n"], 1]]
                          ],
                          [46, [53, [52, "o", [2, [16, [15, "m"],
                                  [15, "n"]
                              ], "trim", [7]]],
                              [52, "p", ["b", [15, "o"]]],
                              [22, [21, [15, "p"],
                                      [44]
                                  ],
                                  [46, [43, [15, "l"],
                                      [0, "q_", [15, "o"]],
                                      [15, "p"]
                                  ]]
                              ]
                          ]]
                      ]
                  ],
                  [36, [15, "l"]]
              ],
              [52, "b", ["require", "getQueryParameters"]],
              [52, "c", ["require", "internal.sendGtagEvent"]],
              [52, "d", ["require", "getContainerVersion"]],
              [52, "g", ["e", [17, [15, "a"], "searchQueryParams"]]],
              [52, "h", [30, [17, [15, "a"], "instanceDestinationId"],
                  [17, ["d"], "containerId"]
              ]],
              [52, "i", [8, "deferrable", true, "eventId", [17, [15, "a"], "gtmEventId"]]],
              [22, [15, "g"],
                  [46, [53, [52, "j", [39, [28, [28, [17, [15, "a"], "includeParams"]]],
                          ["f", [15, "g"],
                              [17, [15, "a"], "additionalQueryParams"]
                          ],
                          [8]
                      ]],
                      ["c", [15, "h"], "view_search_results", [15, "j"],
                          [15, "i"]
                      ]
                  ]]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_video", [46, "a"],
              [50, "s", [46, "t"],
                  [52, "u", [8]],
                  [43, [15, "u"],
                      [15, "l"], true
                  ],
                  [43, [15, "u"],
                      [15, "f"], true
                  ],
                  [43, [15, "t"], "eventMetadata", [15, "u"]]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "templateStorage"]],
              [52, "f", "speculative"],
              [52, "g", "ae_block_video"],
              [52, "h", "video_start"],
              [52, "i", "video_progress"],
              [52, "j", "video_complete"],
              [52, "k", "isRegistered"],
              [52, "l", "em_event"],
              [52, "m", [17, [15, "a"], "instanceDestinationId"]],
              [22, ["c", [15, "m"],
                      [15, "g"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              ["d", [15, "m"],
                  [51, "", [7, "t"],
                      [52, "u", [2, [15, "t"], "getEventName", [7]]],
                      [52, "v", [30, [30, [20, [15, "u"],
                                  [15, "h"]
                              ],
                              [20, [15, "u"],
                                  [15, "i"]
                              ]
                          ],
                          [20, [15, "u"],
                              [15, "j"]
                          ]
                      ]],
                      [22, [30, [28, [15, "v"]],
                              [28, [2, [15, "t"], "getMetadata", [7, [15, "l"]]]]
                          ],
                          [46, [36]]
                      ],
                      [22, ["c", [15, "m"],
                              [15, "g"]
                          ],
                          [46, [2, [15, "t"], "abort", [7]],
                              [36]
                          ]
                      ],
                      [2, [15, "t"], "setMetadata", [7, [15, "f"], false]],
                      [22, [28, [17, [15, "a"], "includeParams"]],
                          [46, [2, [15, "t"], "setHitData", [7, "video_current_time", [44]]],
                              [2, [15, "t"], "setHitData", [7, "video_duration", [44]]],
                              [2, [15, "t"], "setHitData", [7, "video_percent", [44]]],
                              [2, [15, "t"], "setHitData", [7, "video_provider", [44]]],
                              [2, [15, "t"], "setHitData", [7, "video_title", [44]]],
                              [2, [15, "t"], "setHitData", [7, "video_url", [44]]],
                              [2, [15, "t"], "setHitData", [7, "visible", [44]]]
                          ]
                      ]
                  ]
              ],
              [22, [2, [15, "e"], "getItem", [7, [15, "k"]]],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "n", ["require", "internal.addDataLayerEventListener"]],
              [52, "o", ["require", "internal.enableAutoEventOnYouTubeActivity"]],
              [52, "p", ["require", "internal.getDestinationIds"]],
              [52, "q", ["require", "internal.sendGtagEvent"]],
              [52, "r", ["o", [8, "captureComplete", true, "captureStart", true, "progressThresholdsPercent", [7, 10, 25, 50, 75]]]],
              [22, [28, [15, "r"]],
                  [46, [2, [15, "a"], "gtmOnFailure", [7]],
                      [36]
                  ]
              ],
              [2, [15, "e"], "setItem", [7, [15, "k"], true]],
              ["n", "gtm.video", [51, "", [7, "t", "u"],
                      ["u"],
                      [52, "v", [16, [15, "t"], "gtm.videoStatus"]],
                      [41, "w"],
                      [22, [20, [15, "v"], "start"],
                          [46, [3, "w", [15, "h"]]],
                          [46, [22, [20, [15, "v"], "progress"],
                              [46, [3, "w", [15, "i"]]],
                              [46, [22, [20, [15, "v"], "complete"],
                                  [46, [3, "w", [15, "j"]]],
                                  [46, [36]]
                              ]]
                          ]]
                      ],
                      [52, "x", [8, "video_current_time", [16, [15, "t"], "gtm.videoCurrentTime"], "video_duration", [16, [15, "t"], "gtm.videoDuration"], "video_percent", [16, [15, "t"], "gtm.videoPercent"], "video_provider", [16, [15, "t"], "gtm.videoProvider"], "video_title", [16, [15, "t"], "gtm.videoTitle"], "video_url", [16, [15, "t"], "gtm.videoUrl"], "visible", [16, [15, "t"], "gtm.videoVisible"]]],
                      [52, "y", [8, "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]],
                      [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
                          [46, [43, [15, "y"], "deferrable", true]]
                      ],
                      ["s", [15, "y"]],
                      ["q", ["p"],
                          [15, "w"],
                          [15, "x"],
                          [15, "y"]
                      ]
                  ],
                  [15, "r"]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_ga_first", [46, "a"],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_ga_last", [46, "a"],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_ga_regscope", [46, "a"],
              [52, "b", [15, "__module_ccdGaRegionScopedSettings"]],
              [2, [15, "b"], "applyRegionScopedSettings", [7, [15, "a"]]],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ogt_1p_data_v2", [46, "a"],
              [50, "j", [46, "m", "n", "o"],
                  [22, [20, [16, [15, "n"], "type"],
                          [15, "o"]
                      ],
                      [46, [22, [28, [15, "m"]],
                              [46, [3, "m", [8]]]
                          ],
                          [22, [28, [16, [15, "m"],
                                  [15, "o"]
                              ]],
                              [46, [43, [15, "m"],
                                  [15, "o"],
                                  [16, [15, "n"], "userData"]
                              ]]
                          ]
                      ]
                  ],
                  [36, [15, "m"]]
              ],
              [50, "k", [46, "m", "n"],
                  [52, "o", [16, [15, "a"],
                      [15, "m"]
                  ]],
                  [41, "p"],
                  [22, [20, [15, "o"], "CSS_SELECTOR"],
                      [46, [3, "p", "css_selector"]],
                      [46, [22, [20, [15, "o"], "JS_VAR"],
                          [46, [3, "p", "js_variable"]]
                      ]]
                  ],
                  [36, [8, "selector_type", [15, "p"], "value", [16, [15, "a"],
                      [15, "n"]
                  ]]]
              ],
              [50, "l", [46, "m", "n", "o", "p"],
                  [22, [28, [16, [15, "a"],
                          [15, "p"]
                      ]],
                      [46, [36]]
                  ],
                  [43, [15, "m"],
                      [15, "n"],
                      ["k", [15, "o"],
                          [15, "p"]
                      ]
                  ]
              ],
              [22, [28, [17, [15, "a"], "isEnabled"]],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getDestinationIds"]],
              [52, "d", ["require", "internal.getProductSettingsParameter"]],
              [52, "e", ["require", "internal.locateUserData"]],
              [52, "f", ["require", "internal.setRemoteConfigParameter"]],
              [52, "g", ["require", "internal.registerCcdCallback"]],
              [52, "h", [30, ["c"],
                  [7]
              ]],
              [52, "i", [8, "enable_code", true]],
              [22, [17, [15, "a"], "isAutoEnabled"],
                  [46, [53, [52, "m", [7]],
                      [22, [1, [17, [15, "a"], "autoCollectExclusionSelectors"],
                              [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]
                          ],
                          [46, [53, [41, "o"],
                              [3, "o", 0],
                              [63, [7, "o"],
                                  [23, [15, "o"],
                                      [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]
                                  ],
                                  [33, [15, "o"],
                                      [3, "o", [0, [15, "o"], 1]]
                                  ],
                                  [46, [53, [52, "p", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"],
                                          [15, "o"]
                                      ], "exclusionSelector"]],
                                      [22, [15, "p"],
                                          [46, [2, [15, "m"], "push", [7, [15, "p"]]]]
                                      ]
                                  ]]
                              ]
                          ]]
                      ],
                      [52, "n", [39, [17, [15, "a"], "isAutoCollectPiiEnabled"],
                          [17, [15, "a"], "autoEmailEnabled"], true
                      ]],
                      [43, [15, "i"], "auto_detect", [8, "email", [15, "n"], "phone", [17, [15, "a"], "autoPhoneEnabled"], "address", [17, [15, "a"], "autoAddressEnabled"], "exclude_element_selectors", [15, "m"]]]
                  ]]
              ],
              [22, [17, [15, "a"], "isManualEnabled"],
                  [46, [53, [52, "m", [8]],
                      [22, [17, [15, "a"], "manualEmailEnabled"],
                          [46, ["l", [15, "m"], "email", "emailType", "emailValue"]]
                      ],
                      [22, [17, [15, "a"], "manualPhoneEnabled"],
                          [46, ["l", [15, "m"], "phone", "phoneType", "phoneValue"]]
                      ],
                      [22, [17, [15, "a"], "manualAddressEnabled"],
                          [46, [53, [52, "n", [8]],
                              ["l", [15, "n"], "first_name", "firstNameType", "firstNameValue"],
                              ["l", [15, "n"], "last_name", "lastNameType", "lastNameValue"],
                              ["l", [15, "n"], "street", "streetType", "streetValue"],
                              ["l", [15, "n"], "city", "cityType", "cityValue"],
                              ["l", [15, "n"], "region", "regionType", "regionValue"],
                              ["l", [15, "n"], "country", "countryType", "countryValue"],
                              ["l", [15, "n"], "postal_code", "postalCodeType", "postalCodeValue"],
                              [43, [15, "m"], "name_and_address", [7, [15, "n"]]]
                          ]]
                      ],
                      [43, [15, "i"], "selectors", [15, "m"]]
                  ]]
              ],
              [65, "m", [15, "h"],
                  [46, [53, [22, [1, [1, [28, [16, [15, "b"], "enableCcdUserData"]],
                                  [28, ["d", [15, "m"], "ads_customer_data_terms"]]
                              ],
                              [28, ["d", [15, "m"], "ga_customer_data_terms"]]
                          ],
                          [46, [6]]
                      ],
                      [41, "n"],
                      [3, "n", [15, "i"]],
                      [22, [1, [20, [2, [15, "m"], "indexOf", [7, "G-"]], 0],
                              [28, [16, [15, "b"], "enableEuidAutoMode"]]
                          ],
                          [46, [53, [52, "q", [8, "enable_code", true, "selectors", [16, [15, "i"], "selectors"]]],
                              [3, "n", [15, "q"]]
                          ]]
                      ],
                      ["f", [15, "m"], "user_data_settings", [15, "n"]],
                      [22, [28, [16, [15, "b"], "enableCcdUserData"]],
                          [46, [6]]
                      ],
                      [52, "o", [16, [15, "n"], "auto_detect"]],
                      [22, [28, [15, "o"]],
                          [46, [6]]
                      ],
                      [52, "p", [51, "", [7, "q"],
                          [52, "r", [2, [15, "q"], "getMetadata", [7, "user_data_from_automatic"]]],
                          [22, [15, "r"],
                              [46, [36, [15, "r"]]]
                          ],
                          [52, "s", ["e", [8, "excludeElementSelectors", [16, [15, "o"], "exclude_element_selectors"], "fieldFilters", [8, "email", [16, [15, "o"], "email"], "phone", [16, [15, "o"], "phone"], "address", [16, [15, "o"], "address"]]]]],
                          [52, "t", [1, [15, "s"],
                              [16, [15, "s"], "elements"]
                          ]],
                          [52, "u", [8]],
                          [22, [1, [15, "t"],
                                  [18, [17, [15, "t"], "length"], 0]
                              ],
                              [46, [53, [41, "v"],
                                  [53, [41, "w"],
                                      [3, "w", 0],
                                      [63, [7, "w"],
                                          [23, [15, "w"],
                                              [17, [15, "t"], "length"]
                                          ],
                                          [33, [15, "w"],
                                              [3, "w", [0, [15, "w"], 1]]
                                          ],
                                          [46, [53, [52, "x", [16, [15, "t"],
                                                  [15, "w"]
                                              ]],
                                              ["j", [15, "u"],
                                                  [15, "x"], "email"
                                              ],
                                              [22, [16, [15, "b"], "enableAutoPiiOnPhoneAndAddress"],
                                                  [46, ["j", [15, "u"],
                                                          [15, "x"], "phone_number"
                                                      ],
                                                      [3, "v", ["j", [15, "v"],
                                                          [15, "x"], "first_name"
                                                      ]],
                                                      [3, "v", ["j", [15, "v"],
                                                          [15, "x"], "last_name"
                                                      ]],
                                                      [3, "v", ["j", [15, "v"],
                                                          [15, "x"], "country"
                                                      ]],
                                                      [3, "v", ["j", [15, "v"],
                                                          [15, "x"], "postal_code"
                                                      ]]
                                                  ]
                                              ]
                                          ]]
                                      ]
                                  ],
                                  [22, [1, [15, "v"],
                                          [28, [16, [15, "u"], "address"]]
                                      ],
                                      [46, [43, [15, "u"], "address", [15, "v"]]]
                                  ]
                              ]]
                          ],
                          [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic", [15, "u"]]],
                          [36, [15, "u"]]
                      ]],
                      ["g", [15, "m"],
                          [51, "", [7, "q"],
                              [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic_getter", [15, "p"]]]
                          ]
                      ]
                  ]]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ogt_google_signals", [46, "a"],
              [52, "b", [15, "__module_ccdGoogleSignals"]],
              [2, [15, "b"], "setup", [7, [15, "a"]]],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__set_product_settings", [46, "a"],
              [52, "b", ["require", "internal.setProductSettingsParameter"]],
              [52, "c", ["require", "getContainerVersion"]],
              [52, "d", [30, [17, [15, "a"], "instanceDestinationId"],
                  [17, ["c"], "containerId"]
              ]],
              ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]],
              ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [52, "__module_ccdConversionMarking", [13, [41, "$0"],
              [3, "$0", [51, "", [7],
                  [50, "a", [46],
                      [50, "m", [46, "n", "o"],
                          [52, "p", [8, "preHit", [15, "n"]]],
                          [65, "q", [17, [15, "o"], "conversionRules"],
                              [46, [22, ["c", [17, [15, "q"], "matchingRules"],
                                      [15, "p"]
                                  ],
                                  [46, [2, [15, "n"], "setMetadata", [7, [15, "d"], true]],
                                      [4]
                                  ]
                              ]]
                          ],
                          [22, [2, [15, "n"], "getMetadata", [7, [15, "e"]]],
                              [46, [22, [28, [15, "k"]],
                                      [46, [53, [52, "q", ["b", [15, "n"],
                                              [8, "omitHitData", true, "omitMetadata", true]
                                          ]],
                                          [2, [15, "q"], "setEventName", [7, [15, "i"]]],
                                          [3, "k", [8, "preHit", [15, "q"]]]
                                      ]]
                                  ],
                                  [65, "q", [17, [15, "o"], "conversionRules"],
                                      [46, [22, ["c", [17, [15, "q"], "matchingRules"],
                                              [15, "k"]
                                          ],
                                          [46, [2, [15, "n"], "setMetadata", [7, [15, "f"], true]],
                                              [4]
                                          ]
                                      ]]
                                  ]
                              ]
                          ],
                          [22, [2, [15, "n"], "getMetadata", [7, [15, "g"]]],
                              [46, [22, [28, [15, "l"]],
                                      [46, [53, [52, "q", ["b", [15, "n"],
                                              [8, "omitHitData", true, "omitMetadata", true]
                                          ]],
                                          [2, [15, "q"], "setEventName", [7, [15, "j"]]],
                                          [3, "l", [8, "preHit", [15, "q"]]]
                                      ]]
                                  ],
                                  [65, "q", [17, [15, "o"], "conversionRules"],
                                      [46, [22, ["c", [17, [15, "q"], "matchingRules"],
                                              [15, "l"]
                                          ],
                                          [46, [2, [15, "n"], "setMetadata", [7, [15, "h"], true]],
                                              [4]
                                          ]
                                      ]]
                                  ]
                              ]
                          ]
                      ],
                      [52, "b", ["require", "internal.copyPreHit"]],
                      [52, "c", ["require", "internal.evaluateBooleanExpression"]],
                      [52, "d", "is_conversion"],
                      [52, "e", "is_first_visit"],
                      [52, "f", "is_first_visit_conversion"],
                      [52, "g", "is_session_start"],
                      [52, "h", "is_session_start_conversion"],
                      [52, "i", "first_visit"],
                      [52, "j", "session_start"],
                      [41, "k"],
                      [41, "l"],
                      [36, [8, "callback", [15, "m"]]]
                  ],
                  [36, ["a"]]
              ]],
              ["$0"]
          ]],
          [52, "__module_ccdGaRegionScopedSettings", [13, [41, "$0"],
              [3, "$0", [51, "", [7],
                  [50, "a", [46],
                      [50, "h", [46, "j"],
                          [50, "n", [46, "o"],
                              [22, [30, [28, [15, "l"]],
                                      [21, [17, [15, "l"], "length"], 2]
                                  ],
                                  [46, [36, false]]
                              ],
                              [52, "p", ["i", [15, "o"]]],
                              [53, [41, "q"],
                                  [3, "q", 0],
                                  [63, [7, "q"],
                                      [23, [15, "q"],
                                          [17, [15, "p"], "length"]
                                      ],
                                      [33, [15, "q"],
                                          [3, "q", [0, [15, "q"], 1]]
                                      ],
                                      [46, [53, [52, "r", [16, [15, "p"],
                                              [15, "q"]
                                          ]],
                                          [52, "s", [17, [15, "r"], "countryCode"]],
                                          [52, "t", [17, [15, "r"], "regionCode"]],
                                          [52, "u", [20, [15, "s"],
                                              [15, "l"]
                                          ]],
                                          [52, "v", [30, [28, [15, "t"]],
                                              [20, [15, "t"],
                                                  [15, "m"]
                                              ]
                                          ]],
                                          [22, [1, [15, "u"],
                                                  [15, "v"]
                                              ],
                                              [46, [36, true]]
                                          ]
                                      ]]
                                  ]
                              ],
                              [36, false]
                          ],
                          [22, [28, [17, [15, "j"], "settingsTable"]],
                              [46, [36]]
                          ],
                          [52, "k", [30, [17, [15, "j"], "instanceDestinationId"],
                              [17, ["b"], "containerId"]
                          ]],
                          [52, "l", ["d"]],
                          [52, "m", ["e"]],
                          [53, [41, "o"],
                              [3, "o", 0],
                              [63, [7, "o"],
                                  [23, [15, "o"],
                                      [17, [17, [15, "j"], "settingsTable"], "length"]
                                  ],
                                  [33, [15, "o"],
                                      [3, "o", [0, [15, "o"], 1]]
                                  ],
                                  [46, [53, [52, "p", [16, [17, [15, "j"], "settingsTable"],
                                          [15, "o"]
                                      ]],
                                      [22, [30, [17, [15, "p"], "disallowAllRegions"],
                                              ["n", [17, [15, "p"], "disallowedRegions"]]
                                          ],
                                          [46, [53, [52, "q", [16, [15, "g"],
                                                  [17, [15, "p"], "redactFieldGroup"]
                                              ]],
                                              [22, [28, [15, "q"]],
                                                  [46, [6]]
                                              ],
                                              [53, [41, "r"],
                                                  [3, "r", 0],
                                                  [63, [7, "r"],
                                                      [23, [15, "r"],
                                                          [17, [15, "q"], "length"]
                                                      ],
                                                      [33, [15, "r"],
                                                          [3, "r", [0, [15, "r"], 1]]
                                                      ],
                                                      [46, [53, [52, "s", [16, [15, "q"],
                                                              [15, "r"]
                                                          ]],
                                                          ["c", [15, "k"],
                                                              [17, [15, "s"], "name"],
                                                              [17, [15, "s"], "value"]
                                                          ]
                                                      ]]
                                                  ]
                                              ]
                                          ]]
                                      ]
                                  ]]
                              ]
                          ]
                      ],
                      [50, "i", [46, "j"],
                          [52, "k", [7]],
                          [22, [28, [15, "j"]],
                              [46, [36, [15, "k"]]]
                          ],
                          [52, "l", [2, [15, "j"], "split", [7, ","]]],
                          [53, [41, "m"],
                              [3, "m", 0],
                              [63, [7, "m"],
                                  [23, [15, "m"],
                                      [17, [15, "l"], "length"]
                                  ],
                                  [33, [15, "m"],
                                      [3, "m", [0, [15, "m"], 1]]
                                  ],
                                  [46, [53, [52, "n", [2, [16, [15, "l"],
                                          [15, "m"]
                                      ], "trim", [7]]],
                                      [22, [28, [15, "n"]],
                                          [46, [6]]
                                      ],
                                      [52, "o", [2, [15, "n"], "split", [7, "-"]]],
                                      [52, "p", [16, [15, "o"], 0]],
                                      [52, "q", [39, [20, [17, [15, "o"], "length"], 2],
                                          [15, "n"],
                                          [44]
                                      ]],
                                      [22, [30, [28, [15, "p"]],
                                              [21, [17, [15, "p"], "length"], 2]
                                          ],
                                          [46, [6]]
                                      ],
                                      [22, [1, [21, [15, "q"],
                                                  [44]
                                              ],
                                              [30, [23, [17, [15, "q"], "length"], 4],
                                                  [18, [17, [15, "q"], "length"], 6]
                                              ]
                                          ],
                                          [46, [6]]
                                      ],
                                      [2, [15, "k"], "push", [7, [8, "countryCode", [15, "p"], "regionCode", [15, "q"]]]]
                                  ]]
                              ]
                          ],
                          [36, [15, "k"]]
                      ],
                      [52, "b", ["require", "getContainerVersion"]],
                      [52, "c", ["require", "internal.setRemoteConfigParameter"]],
                      [52, "d", ["require", "internal.getCountryCode"]],
                      [52, "e", ["require", "internal.getRegionCode"]],
                      [41, "f"],
                      [52, "g", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true],
                          [8, "name", "redact_device_info", "value", true]
                      ]]],
                      [36, [8, "applyRegionScopedSettings", [15, "h"]]]
                  ],
                  [36, ["a"]]
              ]],
              ["$0"]
          ]],
          [52, "__module_ccdGoogleSignals", [13, [41, "$0"],
              [3, "$0", [51, "", [7],
                  [50, "a", [46],
                      [50, "e", [46, "f"],
                          [52, "g", [30, [17, [15, "f"], "instanceDestinationId"],
                              [17, ["c"], "containerId"]
                          ]],
                          ["b", [15, "g"], "google_signals", [20, [17, [15, "f"], "serverMacroResult"], 1]],
                          [22, [17, [15, "d"], "enableGa4OnoRemarketing"],
                              [46, ["b", [15, "g"], "google_ono", [20, [17, [15, "f"], "serverMacroResult"], 2]]]
                          ]
                      ],
                      [52, "b", ["require", "internal.setProductSettingsParameter"]],
                      [52, "c", ["require", "getContainerVersion"]],
                      [52, "d", [13, [41, "$0"],
                          [3, "$0", ["require", "internal.getFlags"]],
                          ["$0"]
                      ]],
                      [36, [8, "setup", [15, "e"]]]
                  ],
                  [36, ["a"]]
              ]],
              ["$0"]
          ]]

      ],
      "entities": {
          "__ccd_conversion_marking": {
              "2": true
          },
          "__ccd_em_download": {
              "2": true
          },
          "__ccd_em_form": {
              "2": true
          },
          "__ccd_em_outbound_click": {
              "2": true
          },
          "__ccd_em_page_view": {
              "2": true
          },
          "__ccd_em_scroll": {
              "2": true
          },
          "__ccd_em_site_search": {
              "2": true
          },
          "__ccd_em_video": {
              "2": true
          },
          "__ccd_ga_first": {
              "2": true
          },
          "__ccd_ga_last": {
              "2": true
          },
          "__ccd_ga_regscope": {
              "2": true
          },
          "__ogt_1p_data_v2": {
              "2": true
          },
          "__ogt_google_signals": {
              "2": true
          },
          "__set_product_settings": {
              "2": true
          }


      },
      "permissions": {
          "__ccd_conversion_marking": {},
          "__ccd_em_download": {
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.linkClick"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "document",
                      "eventName": "click"
                  }, {
                      "targetType": "document",
                      "eventName": "auxclick"
                  }]
              },
              "access_template_storage": {}
          },
          "__ccd_em_form": {
              "access_template_storage": {},
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.formInteract", "gtm.formSubmit"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "document",
                      "eventName": "click"
                  }, {
                      "targetType": "document",
                      "eventName": "submit"
                  }, {
                      "targetType": "document",
                      "eventName": "change"
                  }, {
                      "targetType": "window",
                      "eventName": "pagehide"
                  }]
              }
          },
          "__ccd_em_outbound_click": {
              "get_url": {
                  "urlParts": "any",
                  "queriesAllowed": "any"
              },
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.linkClick"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "document",
                      "eventName": "click"
                  }, {
                      "targetType": "document",
                      "eventName": "auxclick"
                  }]
              },
              "access_template_storage": {}
          },
          "__ccd_em_page_view": {
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.historyChange-v2"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "window",
                      "eventName": "pushstate"
                  }, {
                      "targetType": "window",
                      "eventName": "popstate"
                  }]
              },
              "access_template_storage": {}
          },
          "__ccd_em_scroll": {
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.scrollDepth"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "window",
                      "eventName": "resize"
                  }, {
                      "targetType": "window",
                      "eventName": "scroll"
                  }]
              },
              "access_template_storage": {}
          },
          "__ccd_em_site_search": {
              "get_url": {
                  "urlParts": "any",
                  "queriesAllowed": "any"
              },
              "read_container_data": {}
          },
          "__ccd_em_video": {
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.video"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "element",
                      "eventName": "onStateChange"
                  }, {
                      "targetType": "element",
                      "eventName": "onPlaybackRateChange"
                  }]
              },
              "access_template_storage": {}
          },
          "__ccd_ga_first": {},
          "__ccd_ga_last": {},
          "__ccd_ga_regscope": {
              "read_container_data": {}
          },
          "__ogt_1p_data_v2": {
              "read_dom_elements": {
                  "selectors": [{
                      "type": "css",
                      "value": "*"
                  }]
              },
              "access_dom_element_property": {
                  "properties": [{
                      "property": "textContent",
                      "read": true,
                      "write": false
                  }, {
                      "property": "value",
                      "read": true,
                      "write": false
                  }, {
                      "property": "tagName",
                      "read": true,
                      "write": false
                  }, {
                      "property": "children",
                      "read": true,
                      "write": false
                  }, {
                      "property": "childElementCount",
                      "read": true,
                      "write": false
                  }]
              }
          },
          "__ogt_google_signals": {
              "read_container_data": {}
          },
          "__set_product_settings": {
              "read_container_data": {}
          }


      }



      ,
      "security_groups": {
          "google": [
              "__ccd_conversion_marking",
              "__ccd_em_download",
              "__ccd_em_form",
              "__ccd_em_outbound_click",
              "__ccd_em_page_view",
              "__ccd_em_scroll",
              "__ccd_em_site_search",
              "__ccd_em_video",
              "__ccd_ga_first",
              "__ccd_ga_last",
              "__ccd_ga_regscope",
              "__ogt_1p_data_v2",
              "__ogt_google_signals",
              "__set_product_settings"

          ]


      }



  };


  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var ba, da = function(a) {
          var b = 0;
          return function() {
              return b < a.length ? {
                  done: !1,
                  value: a[b++]
              } : {
                  done: !0
              }
          }
      },
      ea = function(a) {
          return a.raw = a
      },
      ia = function(a) {
          var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
          if (b) return b.call(a);
          if ("number" == typeof a.length) return {
              next: da(a)
          };
          throw Error(String(a) + " is not an iterable or ArrayLike");
      },
      ja = "function" == typeof Object.create ? Object.create : function(a) {
          var b = function() {};
          b.prototype = a;
          return new b
      },
      ka;
  if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
  else {
      var ma;
      a: {
          var oa = {
                  a: !0
              },
              pa = {};
          try {
              pa.__proto__ = oa;
              ma = pa.a;
              break a
          } catch (a) {}
          ma = !1
      }
      ka = ma ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a
      } : null
  }
  var qa = ka,
      ra = function(a, b) {
          a.prototype = ja(b.prototype);
          a.prototype.constructor = a;
          if (qa) qa(a, b);
          else
              for (var c in b)
                  if ("prototype" != c)
                      if (Object.defineProperties) {
                          var d = Object.getOwnPropertyDescriptor(b, c);
                          d && Object.defineProperty(a, c, d)
                      } else a[c] = b[c];
          a.Zm = b.prototype
      },
      sa = this || self,
      ta = function(a) {
          return a
      };
  var ua = function(a, b) {
      this.h = a;
      this.m = b
  };
  var va = function(a) {
          return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
      },
      wa = function() {
          this.B = {};
          this.C = !1;
          this.J = {}
      },
      xa = function(a, b) {
          var c = [],
              d;
          for (d in a.B)
              if (a.B.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                  case 1:
                      c.push(d);
                      break;
                  case 2:
                      c.push(a.get(d));
                      break;
                  case 3:
                      c.push([d, a.get(d)])
              }
          return c
      };
  wa.prototype.get = function(a) {
      return this.B["dust." + a]
  };
  wa.prototype.set = function(a, b) {
      this.C || (a = "dust." + a, this.J.hasOwnProperty(a) || (this.B[a] = b))
  };
  wa.prototype.has = function(a) {
      return this.B.hasOwnProperty("dust." + a)
  };
  var ya = function(a, b) {
      b = "dust." + b;
      a.C || a.J.hasOwnProperty(b) || delete a.B[b]
  };
  wa.prototype.wc = function() {
      this.C = !0
  };
  wa.prototype.Sf = function() {
      return this.C
  };
  var za = function(a) {
      this.m = new wa;
      this.h = [];
      this.B = !1;
      a = a || [];
      for (var b in a) a.hasOwnProperty(b) && (va(b) ? this.h[Number(b)] = a[Number(b)] : this.m.set(b, a[b]))
  };
  ba = za.prototype;
  ba.toString = function(a) {
      if (a && 0 <= a.indexOf(this)) return "";
      for (var b = [], c = 0; c < this.h.length; c++) {
          var d = this.h[c];
          null === d || void 0 === d ? b.push("") : d instanceof za ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
      }
      return b.join(",")
  };
  ba.set = function(a, b) {
      if (!this.B)
          if ("length" === a) {
              if (!va(b)) throw Error("RangeError: Length property must be a valid integer.");
              this.h.length = Number(b)
          } else va(a) ? this.h[Number(a)] = b : this.m.set(a, b)
  };
  ba.get = function(a) {
      return "length" === a ? this.length() : va(a) ? this.h[Number(a)] : this.m.get(a)
  };
  ba.length = function() {
      return this.h.length
  };
  ba.Tb = function() {
      for (var a = xa(this.m, 1), b = 0; b < this.h.length; b++) a.push(b + "");
      return new za(a)
  };
  var Aa = function(a, b) {
      va(b) ? delete a.h[Number(b)] : ya(a.m, b)
  };
  ba = za.prototype;
  ba.pop = function() {
      return this.h.pop()
  };
  ba.push = function(a) {
      return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
  };
  ba.shift = function() {
      return this.h.shift()
  };
  ba.splice = function(a, b, c) {
      return new za(this.h.splice.apply(this.h, arguments))
  };
  ba.unshift = function(a) {
      return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
  };
  ba.has = function(a) {
      return va(a) && this.h.hasOwnProperty(a) || this.m.has(a)
  };
  ba.wc = function() {
      this.B = !0;
      Object.freeze(this.h);
      this.m.wc()
  };
  ba.Sf = function() {
      return this.B
  };
  var Ba = function() {
      this.quota = {}
  };
  Ba.prototype.reset = function() {
      this.quota = {}
  };
  var Ca = function(a, b) {
      this.R = a;
      this.J = function(c, d, e) {
          return c.apply(d, e)
      };
      this.B = b;
      this.m = new wa;
      this.h = this.C = void 0
  };
  Ca.prototype.add = function(a, b) {
      Da(this, a, b, !1)
  };
  var Da = function(a, b, c, d) {
      if (!a.m.Sf())
          if (d) {
              var e = a.m;
              e.set(b, c);
              e.J["dust." + b] = !0
          } else a.m.set(b, c)
  };
  Ca.prototype.set = function(a, b) {
      this.m.Sf() || (!this.m.has(a) && this.B && this.B.has(a) ? this.B.set(a, b) : this.m.set(a, b))
  };
  Ca.prototype.get = function(a) {
      return this.m.has(a) ? this.m.get(a) : this.B ? this.B.get(a) : void 0
  };
  Ca.prototype.has = function(a) {
      return !!this.m.has(a) || !(!this.B || !this.B.has(a))
  };
  var Fa = function(a) {
      var b = new Ca(a.R, a);
      a.C && (b.C = a.C);
      b.J = a.J;
      b.h = a.h;
      return b
  };
  var Ga = function() {},
      Ha = function(a) {
          return "function" === typeof a
      },
      k = function(a) {
          return "string" === typeof a
      },
      Ia = function(a) {
          return "number" === typeof a && !isNaN(a)
      },
      Ka = Array.isArray,
      La = function(a, b) {
          if (a && Ka(a))
              for (var c = 0; c < a.length; c++)
                  if (a[c] && b(a[c])) return a[c]
      },
      Ma = function(a, b) {
          if (!Ia(a) || !Ia(b) || a > b) a = 0, b = 2147483647;
          return Math.floor(Math.random() * (b - a + 1) + a)
      },
      Oa = function(a, b) {
          for (var c = new Na, d = 0; d < a.length; d++) c.set(a[d], !0);
          for (var e = 0; e < b.length; e++)
              if (c.get(b[e])) return !0;
          return !1
      },
      l = function(a,
          b) {
          for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
      },
      Pa = function(a) {
          return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
      },
      Qa = function(a) {
          return Math.round(Number(a)) || 0
      },
      Ra = function(a) {
          return "false" === String(a).toLowerCase() ? !1 : !!a
      },
      Sa = function(a) {
          var b = [];
          if (Ka(a))
              for (var c = 0; c < a.length; c++) b.push(String(a[c]));
          return b
      },
      Ta = function(a) {
          return a ? a.replace(/^\s+|\s+$/g, "") : ""
      },
      Ua = function() {
          return new Date(Date.now())
      },
      Va = function() {
          return Ua().getTime()
      },
      Na = function() {
          this.prefix = "gtm.";
          this.values = {}
      };
  Na.prototype.set = function(a, b) {
      this.values[this.prefix + a] = b
  };
  Na.prototype.get = function(a) {
      return this.values[this.prefix + a]
  };
  var Wa = function(a, b, c) {
          return a && a.hasOwnProperty(b) ? a[b] : c
      },
      Xa = function(a) {
          var b = a;
          return function() {
              if (b) {
                  var c = b;
                  b = void 0;
                  try {
                      c()
                  } catch (d) {}
              }
          }
      },
      Ya = function(a, b) {
          for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
      },
      Za = function(a) {
          for (var b in a)
              if (a.hasOwnProperty(b)) return !0;
          return !1
      },
      ab = function(a, b) {
          for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
          return c
      },
      bb = function(a, b) {
          var c = z;
          b = b || [];
          for (var d = c, e = 0; e < a.length - 1; e++) {
              if (!d.hasOwnProperty(a[e])) return;
              d = d[a[e]];
              if (0 <=
                  b.indexOf(d)) return
          }
          return d
      },
      cb = function(a, b) {
          for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
          d[e[e.length - 1]] = b;
          return c
      },
      db = /^\w{1,9}$/,
      eb = function(a, b) {
          a = a || {};
          b = b || ",";
          var c = [];
          l(a, function(d, e) {
              db.test(d) && e && c.push(d)
          });
          return c.join(b)
      },
      fb = function(a, b) {
          function c() {
              ++d === b && (e(), e = null, c.done = !0)
          }
          var d = 0,
              e = a;
          c.done = !1;
          return c
      };
  var gb = function(a, b) {
      wa.call(this);
      this.R = a;
      this.rb = b
  };
  ra(gb, wa);
  gb.prototype.toString = function() {
      return this.R
  };
  gb.prototype.Tb = function() {
      return new za(xa(this, 1))
  };
  gb.prototype.h = function(a, b) {
      return this.rb.apply(new ib(this, a), Array.prototype.slice.call(arguments, 1))
  };
  gb.prototype.m = function(a, b) {
      try {
          return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
      } catch (c) {}
  };
  var kb = function(a, b) {
          for (var c, d = 0; d < b.length && !(c = jb(a, b[d]), c instanceof ua); d++);
          return c
      },
      jb = function(a, b) {
          try {
              var c = a.get(String(b[0]));
              if (!(c && c instanceof gb)) throw Error("Attempting to execute non-function " + b[0] + ".");
              return c.h.apply(c, [a].concat(b.slice(1)))
          } catch (e) {
              var d = a.C;
              d && d(e, b.context ? {
                  id: b[0],
                  line: b.context.line
              } : null);
              throw e;
          }
      },
      ib = function(a, b) {
          this.m = a;
          this.h = b
      },
      C = function(a, b) {
          return Ka(b) ? jb(a.h, b) : b
      },
      E = function(a) {
          return a.m.R
      };
  var lb = function() {
      wa.call(this)
  };
  ra(lb, wa);
  lb.prototype.Tb = function() {
      return new za(xa(this, 1))
  };
  var mb = {
      map: function(a) {
          for (var b = new lb, c = 0; c < arguments.length - 1; c += 2) {
              var d = C(this, arguments[c]) + "",
                  e = C(this, arguments[c + 1]);
              b.set(d, e)
          }
          return b
      },
      list: function(a) {
          for (var b = new za, c = 0; c < arguments.length; c++) {
              var d = C(this, arguments[c]);
              b.push(d)
          }
          return b
      },
      fn: function(a, b, c) {
          var d = this.h,
              e = C(this, b);
          if (!(e instanceof za)) throw Error("Error: non-List value given for Fn argument names.");
          var f = Array.prototype.slice.call(arguments, 2);
          return new gb(a, function() {
              return function(g) {
                  var h = Fa(d);
                  void 0 ===
                      h.h && (h.h = this.h.h);
                  for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++)
                      if (m[n] = C(this, m[n]), m[n] instanceof ua) return m[n];
                  for (var p = e.get("length"), q = 0; q < p; q++) q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
                  h.add("arguments", new za(m));
                  var r = kb(h, f);
                  if (r instanceof ua) return "return" === r.h ? r.m : r
              }
          }())
      },
      control: function(a, b) {
          return new ua(a, C(this, b))
      },
      undefined: function() {}
  };
  var nb = function() {
          this.B = new Ba;
          this.h = new Ca(this.B)
      },
      ob = function(a, b, c) {
          var d = new gb(b, c);
          d.wc();
          a.h.set(b, d)
      },
      pb = function(a, b, c) {
          mb.hasOwnProperty(b) && ob(a, c || b, mb[b])
      };
  nb.prototype.execute = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 0);
      return this.m(c)
  };
  nb.prototype.m = function(a) {
      for (var b, c = 0; c < arguments.length; c++) b = jb(this.h, arguments[c]);
      return b
  };
  nb.prototype.C = function(a, b) {
      var c = Fa(this.h);
      c.h = a;
      for (var d, e = 1; e < arguments.length; e++) d = jb(c, arguments[e]);
      return d
  };

  function qb() {
      for (var a = rb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
      return b
  }

  function sb() {
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      a += a.toLowerCase() + "0123456789-_";
      return a + "."
  }
  var rb, tb;

  function ub(a) {
      rb = rb || sb();
      tb = tb || qb();
      for (var b = [], c = 0; c < a.length; c += 3) {
          var d = c + 1 < a.length,
              e = c + 2 < a.length,
              f = a.charCodeAt(c),
              g = d ? a.charCodeAt(c + 1) : 0,
              h = e ? a.charCodeAt(c + 2) : 0,
              m = f >> 2,
              n = (f & 3) << 4 | g >> 4,
              p = (g & 15) << 2 | h >> 6,
              q = h & 63;
          e || (q = 64, d || (p = 64));
          b.push(rb[m], rb[n], rb[p], rb[q])
      }
      return b.join("")
  }

  function vb(a) {
      function b(m) {
          for (; d < a.length;) {
              var n = a.charAt(d++),
                  p = tb[n];
              if (null != p) return p;
              if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
          }
          return m
      }
      rb = rb || sb();
      tb = tb || qb();
      for (var c = "", d = 0;;) {
          var e = b(-1),
              f = b(0),
              g = b(64),
              h = b(64);
          if (64 === h && -1 === e) return c;
          c += String.fromCharCode(e << 2 | f >> 4);
          64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
      }
  };
  var wb = {},
      xb = function(a, b) {
          wb[a] = wb[a] || [];
          wb[a][b] = !0
      },
      yb = function() {
          delete wb.GA4_EVENT
      },
      zb = function(a) {
          var b = wb[a];
          if (!b || 0 === b.length) return "";
          for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
          0 < d && c.push(String.fromCharCode(d));
          return ub(c.join("")).replace(/\.+$/, "")
      };
  var Ab = Array.prototype.indexOf ? function(a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
  } : function(a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++)
          if (c in a && a[c] === b) return c;
      return -1
  };
  var Bb, Db = function() {
      if (void 0 === Bb) {
          var a = null,
              b = sa.trustedTypes;
          if (b && b.createPolicy) {
              try {
                  a = b.createPolicy("goog#html", {
                      createHTML: ta,
                      createScript: ta,
                      createScriptURL: ta
                  })
              } catch (c) {
                  sa.console && sa.console.error(c.message)
              }
              Bb = a
          } else Bb = a
      }
      return Bb
  };
  var Eb = function(a) {
      this.h = a
  };
  Eb.prototype.toString = function() {
      return this.h + ""
  };
  var Fb = function(a) {
          return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:TrustedResourceUrl"
      },
      Gb = {},
      Hb = function(a) {
          var b = a,
              c = Db(),
              d = c ? c.createScriptURL(b) : b;
          return new Eb(d, Gb)
      };
  var Ib = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var Jb, Kb;
  a: {
      for (var Lb = ["CLOSURE_FLAGS"], Mb = sa, Nb = 0; Nb < Lb.length; Nb++)
          if (Mb = Mb[Lb[Nb]], null == Mb) {
              Kb = null;
              break a
          } Kb = Mb
  }
  var Ob = Kb && Kb[610401301];
  Jb = null != Ob ? Ob : !1;

  function Pb() {
      var a = sa.navigator;
      if (a) {
          var b = a.userAgent;
          if (b) return b
      }
      return ""
  }
  var Qb, Rb = sa.navigator;
  Qb = Rb ? Rb.userAgentData || null : null;

  function Sb(a) {
      return Jb ? Qb ? Qb.brands.some(function(b) {
          var c = b.brand;
          return c && -1 != c.indexOf(a)
      }) : !1 : !1
  }

  function Tb(a) {
      return -1 != Pb().indexOf(a)
  };

  function Ub() {
      return Jb ? !!Qb && 0 < Qb.brands.length : !1
  }

  function Vb() {
      return Ub() ? !1 : Tb("Opera")
  }

  function Wb() {
      return Tb("Firefox") || Tb("FxiOS")
  }

  function Xb() {
      return Ub() ? Sb("Chromium") : (Tb("Chrome") || Tb("CriOS")) && !(Ub() ? 0 : Tb("Edge")) || Tb("Silk")
  };
  var Yb = {},
      Zb = function(a) {
          this.h = a
      };
  Zb.prototype.toString = function() {
      return this.h.toString()
  };
  var $b = function(a) {
      return a instanceof Zb && a.constructor === Zb ? a.h : "type_error:SafeHtml"
  };
  /*

   SPDX-License-Identifier: Apache-2.0
  */
  var ac = {};
  var bc = function() {},
      cc = function(a) {
          this.h = a
      };
  ra(cc, bc);
  cc.prototype.toString = function() {
      return this.h
  };

  function ec(a, b) {
      var c = [new cc(fc[0].toLowerCase(), ac)];
      if (0 === c.length) throw Error("");
      var d = c.map(function(f) {
              var g;
              if (f instanceof cc) g = f.h;
              else throw Error("");
              return g
          }),
          e = b.toLowerCase();
      if (d.every(function(f) {
              return 0 !== e.indexOf(f)
          })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
      a.setAttribute(b, "true")
  }

  function gc(a) {
      var b = a.tagName;
      if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  };
  (function() {
      return ""
  }).toString().indexOf("`");

  function hc(a) {
      var b = a = ic(a),
          c = Db(),
          d = c ? c.createHTML(b) : b;
      return new Zb(d, Yb)
  }

  function ic(a) {
      return null === a ? "null" : void 0 === a ? "undefined" : a
  };
  var z = window,
      G = document,
      jc = navigator,
      kc = 'https://www.googletagmanager.com/gtag/js?id=' + self.optyaGtagId, // G.currentScript && G.currentScript.src
      lc = function(a, b) {
          var c = z[a];
          z[a] = void 0 === c ? b : c;
          return z[a]
      },
      mc = function(a, b) {
          b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
              a.readyState in {
                  loaded: 1,
                  complete: 1
              } && (a.onreadystatechange = null, b())
          })
      },
      nc = {
          async: 1,
          nonce: 1,
          onerror: 1,
          onload: 1,
          src: 1,
          type: 1
      },
      oc = {
          onload: 1,
          src: 1,
          width: 1,
          height: 1,
          style: 1
      };

  function pc(a, b, c) {
      b && l(b, function(d, e) {
          d = d.toLowerCase();
          c.hasOwnProperty(d) || a.setAttribute(d, e)
      })
  }
  var qc = function(a, b, c, d, e) {
          var f = G.createElement("script");
          pc(f, d, nc);
          f.type = "text/javascript";
          f.async = !0;
          var g;
          g = Hb(ic(a));
          
          f.src = Fb(g);
          
          
          var h, m, n, p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
          (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
          mc(f, b);
          c && (f.onerror = c);
          if (e) e.appendChild(f);
          else {
              var q = G.getElementsByTagName("script")[0] || G.body || G.head;
              q.parentNode.insertBefore(f, q)
          }
          return f
      },
      rc = function() {
          if (kc) {
              var a =
                  kc.toLowerCase();
              if (0 === a.indexOf("https://")) return 2;
              if (0 === a.indexOf("http://")) return 3
          }
          return 1
      },
      sc = function(a, b, c, d, e) {
          var f;
          f = void 0 === f ? !0 : f;
          var g = e,
              h = !1;
          g || (g = G.createElement("iframe"), h = !0);
          pc(g, c, oc);
          d && l(d, function(n, p) {
              g.dataset[n] = p
          });
          f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
          if (h) {
              var m = G.body && G.body.lastChild || G.body || G.head;
              m.parentNode.insertBefore(g, m)
          }
          mc(g, b);
          void 0 !== a && (g.src = a);
          return g
      },
      tc = function(a, b, c, d) {
          var e = new Image(1, 1);
          pc(e,
              d, {});
          e.onload = function() {
              e.onload = null;
              b && b()
          };
          e.onerror = function() {
              e.onerror = null;
              c && c()
          };
          e.src = a
      },
      uc = function(a, b, c, d) {
          a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
      },
      vc = function(a, b, c) {
          a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
      },
      I = function(a) {
          z.setTimeout(a, 0)
      },
      wc = function(a, b) {
          return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
      },
      xc = function(a) {
          var b = a.innerText || a.textContent || "";
          b && " " !=
              b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
          b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
          return b
      },
      yc = function(a) {
          var b = G.createElement("div"),
              c = b,
              d = hc("A<div>" + a + "</div>");
          1 === c.nodeType && gc(c);
          c.innerHTML = $b(d);
          b = b.lastChild;
          for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
          return e
      },
      zc = function(a, b, c) {
          c = c || 100;
          for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
          for (var f = a, g = 0; f && g <= c; g++) {
              if (d[String(f.tagName).toLowerCase()]) return f;
              f = f.parentElement
          }
          return null
      },
      Ac = function(a) {
          var b;
          try {
              b = jc.sendBeacon && jc.sendBeacon(a)
          } catch (c) {
              xb("TAGGING", 15)
          }
          b || tc(a)
      },
      Bc = function(a, b) {
          var c = a[b];
          c && "string" === typeof c.animVal && (c = c.animVal);
          return c
      },
      Cc = function(a) {
          var b = {
              headers: {
                  "Attribution-Reporting-Eligible": "trigger"
              },
              keepalive: !0,
              attributionReporting: {
                  eventSourceEligible: !0,
                  triggerEligible: !0
              }
          };
          try {
              z.fetch(a, b)
          } catch (c) {}
      },
      Dc = function() {
          var a = z.performance;
          if (a && Ha(a.now)) return a.now()
      },
      Ec = function() {
          return z.performance || void 0
      };
  var Fc = function(a, b) {
          return C(this, a) && C(this, b)
      },
      Gc = function(a, b) {
          return C(this, a) === C(this, b)
      },
      Hc = function(a, b) {
          return C(this, a) || C(this, b)
      },
      Ic = function(a, b) {
          a = C(this, a);
          b = C(this, b);
          return -1 < String(a).indexOf(String(b))
      },
      Jc = function(a, b) {
          a = String(C(this, a));
          b = String(C(this, b));
          return a.substring(0, b.length) === b
      },
      Kc = function(a, b) {
          a = C(this, a);
          b = C(this, b);
          switch (a) {
              case "pageLocation":
                var c = 'https://qa.testbs.net/en/'; // z.location.href;
                b instanceof lb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                return c
          }
      };
  var Mc = function() {
      this.h = new nb;
      Lc(this)
  };
  Mc.prototype.execute = function(a) {
      return this.h.m(a)
  };
  var Lc = function(a) {
      pb(a.h, "map");
      var b = function(c, d) {
          ob(a.h, c, d)
      };
      b("and", Fc);
      b("contains", Ic);
      b("equals", Gc);
      b("or", Hc);
      b("startsWith", Jc);
      b("variable", Kc)
  };
  var Nc = function() {
      this.map = new Map
  };
  Nc.prototype.set = function(a, b) {
      this.map.set(a, b)
  };
  Nc.prototype.get = function(a) {
      return this.map.get(a)
  };
  var Oc = function() {
      this.keys = [];
      this.values = []
  };
  Oc.prototype.set = function(a, b) {
      this.keys.push(a);
      this.values.push(b)
  };
  Oc.prototype.get = function(a) {
      var b = this.keys.indexOf(a);
      if (-1 < b) return this.values[b]
  };
  var Pc = function(a) {
      if (a instanceof Pc) return a;
      this.Ga = a
  };
  Pc.prototype.toString = function() {
      return String(this.Ga)
  };
  var Rc = function(a) {
      wa.call(this);
      this.h = a;
      this.set("then", Qc(this));
      this.set("catch", Qc(this, !0));
      this.set("finally", Qc(this, !1, !0))
  };
  ra(Rc, lb);
  var Qc = function(a, b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? !1 : c;
      return new gb("", function(d, e) {
          b && (e = d, d = void 0);
          c && (e = d);
          d instanceof gb || (d = void 0);
          e instanceof gb || (e = void 0);
          var f = Fa(this.h),
              g = function(m) {
                  return function(n) {
                      return c ? (m.h(f), a.h) : m.h(f, n)
                  }
              },
              h = a.h.then(d && g(d), e && g(e));
          return new Rc(h)
      })
  };
  /*
   jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Sc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
      Tc = function(a) {
          if (null == a) return String(a);
          var b = Sc.exec(Object.prototype.toString.call(Object(a)));
          return b ? b[1].toLowerCase() : "object"
      },
      Uc = function(a, b) {
          return Object.prototype.hasOwnProperty.call(Object(a), b)
      },
      Vc = function(a) {
          if (!a || "object" != Tc(a) || a.nodeType || a == a.window) return !1;
          try {
              if (a.constructor && !Uc(a, "constructor") && !Uc(a.constructor.prototype, "isPrototypeOf")) return !1
          } catch (c) {
              return !1
          }
          for (var b in a);
          return void 0 ===
              b || Uc(a, b)
      },
      J = function(a, b) {
          var c = b || ("array" == Tc(a) ? [] : {}),
              d;
          for (d in a)
              if (Uc(a, d)) {
                  var e = a[d];
                  "array" == Tc(e) ? ("array" != Tc(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : Vc(e) ? (Vc(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
              } return c
      };
  var Xc = function(a, b, c) {
          var d = Map ? new Nc : new Oc,
              e = function(g, h) {
                  for (var m = xa(g, 1), n = 0; n < m.length; n++) h[m[n]] = f(g.get(m[n]))
              },
              f = function(g) {
                  var h = d.get(g);
                  if (h) return h;
                  if (g instanceof za) {
                      var m = [];
                      d.set(g, m);
                      for (var n = g.Tb(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
                      return m
                  }
                  if (g instanceof Rc) return g.h;
                  if (g instanceof lb) {
                      var q = {};
                      d.set(g, q);
                      e(g, q);
                      return q
                  }
                  if (g instanceof gb) {
                      var r = function() {
                          for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = Wc(u[v], b, c);
                          var w =
                              new Ca(b ? b.R : new Ba);
                          b && (w.h = b.h);
                          return f(g.h.apply(g, [w].concat(u)))
                      };
                      d.set(g, r);
                      e(g, r);
                      return r
                  }
                  var t = !1;
                  switch (c) {
                      case 1:
                          t = !0;
                          break;
                      case 2:
                          t = !1;
                          break;
                      case 3:
                          t = !1;
                          break;
                      default:
                  }
                  if (g instanceof Pc && t) return g.Ga;
                  switch (typeof g) {
                      case "boolean":
                      case "number":
                      case "string":
                      case "undefined":
                          return g;
                      case "object":
                          if (null === g) return null
                  }
              };
          return f(a)
      },
      Wc = function(a, b, c) {
          var d = Map ?
              new Nc : new Oc,
              e = function(g, h) {
                  for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]))
              },
              f = function(g) {
                  var h = d.get(g);
                  if (h) return h;
                  if (Ka(g) || Pa(g)) {
                      var m = new za([]);
                      d.set(g, m);
                      for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                      return m
                  }
                  if (Vc(g)) {
                      var p = new lb;
                      d.set(g, p);
                      e(g, p);
                      return p
                  }
                  if ("function" === typeof g) {
                      var q = new gb("", function(x) {
                          for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = Xc(C(this, y[A]), b, c);
                          return f((0, this.h.J)(g, g, y))
                      });
                      d.set(g, q);
                      e(g, q);
                      return q
                  }
                  var v = typeof g;
                  if (null === g || "string" === v || "number" === v || "boolean" === v) return g;
                  var w = !1;
                  switch (c) {
                      case 1:
                          w = !0;
                          break;
                      case 2:
                          w = !1;
                          break;
                      default:
                  }
                  if (void 0 !== g && w) return new Pc(g)
              };
          return f(a)
      };
  var Yc = function(a) {
          for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
          return b
      },
      Zc = function(a) {
          if (void 0 === a || Ka(a) || Vc(a)) return !0;
          switch (typeof a) {
              case "boolean":
              case "number":
              case "string":
              case "function":
                  return !0
          }
          return !1
      };
  var $c = {
      supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
      concat: function(a, b) {
          for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
          for (var e = 1; e < arguments.length; e++)
              if (arguments[e] instanceof za)
                  for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
              else c.push(arguments[e]);
          return new za(c)
      },
      every: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() &&
              d < c; d++)
              if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
          return !0
      },
      filter: function(a, b) {
          for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
          return new za(d)
      },
      forEach: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.h(a, this.get(d), d, this)
      },
      hasOwnProperty: function(a, b) {
          return this.has(b)
      },
      indexOf: function(a, b, c) {
          var d = this.length(),
              e = void 0 === c ? 0 : Number(c);
          0 > e && (e = Math.max(d + e, 0));
          for (var f = e; f < d; f++)
              if (this.has(f) &&
                  this.get(f) === b) return f;
          return -1
      },
      join: function(a, b) {
          for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
          return c.join(b)
      },
      lastIndexOf: function(a, b, c) {
          var d = this.length(),
              e = d - 1;
          void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
          for (var f = e; 0 <= f; f--)
              if (this.has(f) && this.get(f) === b) return f;
          return -1
      },
      map: function(a, b) {
          for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
          return new za(d)
      },
      pop: function() {
          return this.pop()
      },
      push: function(a, b) {
          return this.push.apply(this,
              Array.prototype.slice.call(arguments, 1))
      },
      reduce: function(a, b, c) {
          var d = this.length(),
              e, f = 0;
          if (void 0 !== c) e = c;
          else {
              if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
              for (var g = 0; g < d; g++)
                  if (this.has(g)) {
                      e = this.get(g);
                      f = g + 1;
                      break
                  } if (g === d) throw Error("TypeError: Reduce on List with no elements.");
          }
          for (var h = f; h < d; h++) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
          return e
      },
      reduceRight: function(a, b, c) {
          var d = this.length(),
              e, f = d - 1;
          if (void 0 !== c) e = c;
          else {
              if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
              for (var g = 1; g <= d; g++)
                  if (this.has(d - g)) {
                      e = this.get(d - g);
                      f = d - (g + 1);
                      break
                  } if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
          }
          for (var h = f; 0 <= h; h--) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
          return e
      },
      reverse: function() {
          for (var a = Yc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : Aa(this, c);
          return this
      },
      shift: function() {
          return this.shift()
      },
      slice: function(a, b, c) {
          var d = this.length();
          void 0 === b && (b = 0);
          b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
          c = void 0 === c ? d : 0 > c ?
              Math.max(d + c, 0) : Math.min(c, d);
          c = Math.max(b, c);
          for (var e = [], f = b; f < c; f++) e.push(this.get(f));
          return new za(e)
      },
      some: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
              if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
          return !1
      },
      sort: function(a, b) {
          var c = Yc(this);
          void 0 === b ? c.sort() : c.sort(function(e, f) {
              return Number(b.h(a, e, f))
          });
          for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : Aa(this, d);
          return this
      },
      splice: function(a, b, c, d) {
          return this.splice.apply(this, Array.prototype.splice.call(arguments,
              1, arguments.length - 1))
      },
      toString: function() {
          return this.toString()
      },
      unshift: function(a, b) {
          return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
      }
  };
  var ad = {
          charAt: 1,
          concat: 1,
          indexOf: 1,
          lastIndexOf: 1,
          match: 1,
          replace: 1,
          search: 1,
          slice: 1,
          split: 1,
          substring: 1,
          toLowerCase: 1,
          toLocaleLowerCase: 1,
          toString: 1,
          toUpperCase: 1,
          toLocaleUpperCase: 1,
          trim: 1
      },
      bd = new ua("break"),
      cd = new ua("continue"),
      dd = function(a, b) {
          return C(this, a) + C(this, b)
      },
      fd = function(a, b) {
          return C(this, a) && C(this, b)
      },
      gd = function(a, b, c) {
          a = C(this, a);
          b = C(this, b);
          c = C(this, c);
          if (!(c instanceof za)) throw Error("Error: Non-List argument given to Apply instruction.");
          if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
              b + " of " + a + ".");
          var d = "number" === typeof a;
          if ("boolean" === typeof a || d) {
              if ("toString" === b) {
                  if (d && c.length()) {
                      var e = Xc(c.get(0));
                      try {
                          return a.toString(e)
                      } catch (r) {}
                  }
                  return a.toString()
              }
              throw Error("TypeError: " + a + "." + b + " is not a function.");
          }
          if ("string" === typeof a) {
              if (ad.hasOwnProperty(b)) {
                  var f = 2;
                  f = 1;
                  var g = Xc(c, void 0, f);
                  return Wc(a[b].apply(a, g), this.h)
              }
              throw Error("TypeError: " +
                  b + " is not a function");
          }
          if (a instanceof za) {
              if (a.has(b)) {
                  var h = a.get(b);
                  if (h instanceof gb) {
                      var m = Yc(c);
                      m.unshift(this.h);
                      return h.h.apply(h, m)
                  }
                  throw Error("TypeError: " + b + " is not a function");
              }
              if (0 <= $c.supportedMethods.indexOf(b)) {
                  var n = Yc(c);
                  n.unshift(this.h);
                  return $c[b].apply(a, n)
              }
          }
          if (a instanceof gb || a instanceof lb) {
              if (a.has(b)) {
                  var p = a.get(b);
                  if (p instanceof gb) {
                      var q = Yc(c);
                      q.unshift(this.h);
                      return p.h.apply(p, q)
                  }
                  throw Error("TypeError: " + b + " is not a function");
              }
              if ("toString" === b) return a instanceof
              gb ? a.R : a.toString();
              if ("hasOwnProperty" === b) return a.has.apply(a, Yc(c))
          }
          if (a instanceof Pc && "toString" === b) return a.toString();
          throw Error("TypeError: Object has no '" + b + "' property.");
      },
      hd = function(a, b) {
          a = C(this, a);
          if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
          var c = this.h;
          if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
          var d = C(this, b);
          c.set(a, d);
          return d
      },
      id = function(a) {
          var b = Fa(this.h),
              c = kb(b, Array.prototype.slice.apply(arguments));
          if (c instanceof ua) return c
      },
      jd = function() {
          return bd
      },
      kd = function(a) {
          for (var b = C(this, a), c = 0; c < b.length; c++) {
              var d = C(this, b[c]);
              if (d instanceof ua) return d
          }
      },
      ld = function(a) {
          for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
              var d = arguments[c];
              if ("string" === typeof d) {
                  var e = C(this, arguments[c + 1]);
                  Da(b, d, e, !0)
              }
          }
      },
      md = function() {
          return cd
      },
      nd = function(a, b, c) {
          var d = new za;
          b = C(this, b);
          for (var e = 0; e < b.length; e++) d.push(b[e]);
          var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
          this.h.add(a, C(this,
              f))
      },
      od = function(a, b) {
          return C(this, a) / C(this, b)
      },
      pd = function(a, b) {
          a = C(this, a);
          b = C(this, b);
          var c = a instanceof Pc,
              d = b instanceof Pc;
          return c || d ? c && d ? a.Ga == b.Ga : !1 : a == b
      },
      qd = function(a) {
          for (var b, c = 0; c < arguments.length; c++) b = C(this, arguments[c]);
          return b
      };

  function rd(a, b, c, d) {
      for (var e = 0; e < b(); e++) {
          var f = a(c(e)),
              g = kb(f, d);
          if (g instanceof ua) {
              if ("break" === g.h) break;
              if ("return" === g.h) return g
          }
      }
  }

  function sd(a, b, c) {
      if ("string" === typeof b) return rd(a, function() {
          return b.length
      }, function(f) {
          return f
      }, c);
      if (b instanceof lb || b instanceof za || b instanceof gb) {
          var d = b.Tb(),
              e = d.length();
          return rd(a, function() {
              return e
          }, function(f) {
              return d.get(f)
          }, c)
      }
  }
  var td = function(a, b, c) {
          a = C(this, a);
          b = C(this, b);
          c = C(this, c);
          var d = this.h;
          return sd(function(e) {
              d.set(a, e);
              return d
          }, b, c)
      },
      ud = function(a, b, c) {
          a = C(this, a);
          b = C(this, b);
          c = C(this, c);
          var d = this.h;
          return sd(function(e) {
              var f = Fa(d);
              Da(f, a, e, !0);
              return f
          }, b, c)
      },
      vd = function(a, b, c) {
          a = C(this, a);
          b = C(this, b);
          c = C(this, c);
          var d = this.h;
          return sd(function(e) {
              var f = Fa(d);
              f.add(a, e);
              return f
          }, b, c)
      },
      xd = function(a, b, c) {
          a = C(this, a);
          b = C(this, b);
          c = C(this, c);
          var d = this.h;
          return wd(function(e) {
              d.set(a, e);
              return d
          }, b, c)
      },
      yd =
      function(a, b, c) {
          a = C(this, a);
          b = C(this, b);
          c = C(this, c);
          var d = this.h;
          return wd(function(e) {
              var f = Fa(d);
              Da(f, a, e, !0);
              return f
          }, b, c)
      },
      zd = function(a, b, c) {
          a = C(this, a);
          b = C(this, b);
          c = C(this, c);
          var d = this.h;
          return wd(function(e) {
              var f = Fa(d);
              f.add(a, e);
              return f
          }, b, c)
      };

  function wd(a, b, c) {
      if ("string" === typeof b) return rd(a, function() {
          return b.length
      }, function(d) {
          return b[d]
      }, c);
      if (b instanceof za) return rd(a, function() {
          return b.length()
      }, function(d) {
          return b.get(d)
      }, c);
      throw new TypeError("The value is not iterable.");
  }
  var Ad = function(a, b, c, d) {
          function e(p, q) {
              for (var r = 0; r < f.length(); r++) {
                  var t = f.get(r);
                  q.add(t, p.get(t))
              }
          }
          var f = C(this, a);
          if (!(f instanceof za)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
          var g = this.h;
          d = C(this, d);
          var h = Fa(g);
          for (e(g, h); jb(h, b);) {
              var m = kb(h, d);
              if (m instanceof ua) {
                  if ("break" === m.h) break;
                  if ("return" === m.h) return m
              }
              var n = Fa(g);
              e(h, n);
              jb(n, c);
              h = n
          }
      },
      Bd = function(a) {
          a = C(this, a);
          var b = this.h,
              c = !1;
          if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
          return b.get(a)
      },
      Cd = function(a, b) {
          var c;
          a = C(this, a);
          b = C(this, b);
          if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
          if (a instanceof lb || a instanceof za || a instanceof gb) c = a.get(b);
          else if ("string" === typeof a) "length" === b ? c = a.length : va(b) && (c = a[b]);
          else if (a instanceof Pc) return;
          return c
      },
      Dd = function(a, b) {
          return C(this, a) > C(this,
              b)
      },
      Ed = function(a, b) {
          return C(this, a) >= C(this, b)
      },
      Fd = function(a, b) {
          a = C(this, a);
          b = C(this, b);
          a instanceof Pc && (a = a.Ga);
          b instanceof Pc && (b = b.Ga);
          return a === b
      },
      Gd = function(a, b) {
          return !Fd.call(this, a, b)
      },
      Hd = function(a, b, c) {
          var d = [];
          C(this, a) ? d = C(this, b) : c && (d = C(this, c));
          var e = kb(this.h, d);
          if (e instanceof ua) return e
      },
      Id = function(a, b) {
          return C(this, a) < C(this, b)
      },
      Jd = function(a, b) {
          return C(this, a) <= C(this, b)
      },
      Kd = function(a, b) {
          return C(this, a) % C(this, b)
      },
      Ld = function(a, b) {
          return C(this, a) * C(this, b)
      },
      Md = function(a) {
          return -C(this,
              a)
      },
      Nd = function(a) {
          return !C(this, a)
      },
      Od = function(a, b) {
          return !pd.call(this, a, b)
      },
      Pd = function() {
          return null
      },
      Qd = function(a, b) {
          return C(this, a) || C(this, b)
      },
      Rd = function(a, b) {
          var c = C(this, a);
          C(this, b);
          return c
      },
      Sd = function(a) {
          return C(this, a)
      },
      Td = function(a) {
          return Array.prototype.slice.apply(arguments)
      },
      Ud = function(a) {
          return new ua("return", C(this, a))
      },
      Vd = function(a, b, c) {
          a = C(this, a);
          b = C(this, b);
          c = C(this, c);
          if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
          (a instanceof gb || a instanceof za || a instanceof lb) && a.set(b, c);
          return c
      },
      Wd = function(a, b) {
          return C(this, a) - C(this, b)
      },
      Xd = function(a, b, c) {
          a = C(this, a);
          var d = C(this, b),
              e = C(this, c);
          if (!Ka(d) || !Ka(e)) throw Error("Error: Malformed switch instruction.");
          for (var f, g = !1, h = 0; h < d.length; h++)
              if (g || a === C(this, d[h]))
                  if (f = C(this, e[h]), f instanceof ua) {
                      var m = f.h;
                      if ("break" === m) return;
                      if ("return" === m || "continue" === m) return f
                  } else g = !0;
          if (e.length === d.length + 1 && (f = C(this, e[e.length - 1]), f instanceof ua && ("return" === f.h || "continue" ===
                  f.h))) return f
      },
      Yd = function(a, b, c) {
          return C(this, a) ? C(this, b) : C(this, c)
      },
      Zd = function(a) {
          a = C(this, a);
          return a instanceof gb ? "function" : typeof a
      },
      $d = function(a) {
          for (var b = this.h, c = 0; c < arguments.length; c++) {
              var d = arguments[c];
              "string" !== typeof d || b.add(d, void 0)
          }
      },
      ae = function(a, b, c, d) {
          var e = C(this, d);
          if (C(this, c)) {
              var f = kb(this.h, e);
              if (f instanceof ua) {
                  if ("break" === f.h) return;
                  if ("return" === f.h) return f
              }
          }
          for (; C(this, a);) {
              var g = kb(this.h, e);
              if (g instanceof ua) {
                  if ("break" === g.h) break;
                  if ("return" === g.h) return g
              }
              C(this,
                  b)
          }
      },
      be = function(a) {
          return ~Number(C(this, a))
      },
      ce = function(a, b) {
          return Number(C(this, a)) << Number(C(this, b))
      },
      de = function(a, b) {
          return Number(C(this, a)) >> Number(C(this, b))
      },
      ee = function(a, b) {
          return Number(C(this, a)) >>> Number(C(this, b))
      },
      fe = function(a, b) {
          return Number(C(this, a)) & Number(C(this, b))
      },
      ie = function(a, b) {
          return Number(C(this, a)) ^ Number(C(this, b))
      },
      je = function(a, b) {
          return Number(C(this, a)) | Number(C(this, b))
      };
  var le = function() {
      this.h = new nb;
      ke(this)
  };
  le.prototype.execute = function(a) {
      return me(this.h.m(a))
  };
  var ne = function(a, b, c) {
          return me(a.h.C(b, c))
      },
      ke = function(a) {
          var b = function(d, e) {
              pb(a.h, d, String(e))
          };
          b("control", 49);
          b("fn", 51);
          b("list", 7);
          b("map", 8);
          b("undefined", 44);
          var c = function(d, e) {
              ob(a.h, String(d), e)
          };
          c(0, dd);
          c(1, fd);
          c(2, gd);
          c(3, hd);
          c(53, id);
          c(4, jd);
          c(5, kd);
          c(52, ld);
          c(6, md);
          c(9, kd);
          c(50, nd);
          c(10, od);
          c(12, pd);
          c(13, qd);
          c(47, td);
          c(54, ud);
          c(55, vd);
          c(63, Ad);
          c(64, xd);
          c(65, yd);
          c(66, zd);
          c(15, Bd);
          c(16, Cd);
          c(17, Cd);
          c(18, Dd);
          c(19, Ed);
          c(20, Fd);
          c(21, Gd);
          c(22, Hd);
          c(23, Id);
          c(24, Jd);
          c(25, Kd);
          c(26, Ld);
          c(27,
              Md);
          c(28, Nd);
          c(29, Od);
          c(45, Pd);
          c(30, Qd);
          c(32, Rd);
          c(33, Rd);
          c(34, Sd);
          c(35, Sd);
          c(46, Td);
          c(36, Ud);
          c(43, Vd);
          c(37, Wd);
          c(38, Xd);
          c(39, Yd);
          c(40, Zd);
          c(41, $d);
          c(42, ae);
          c(58, be);
          c(57, ce);
          c(60, de);
          c(61, ee);
          c(56, fe);
          c(62, ie);
          c(59, je)
      };

  function me(a) {
      if (a instanceof ua || a instanceof gb || a instanceof za || a instanceof lb || a instanceof Pc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
  };

  function oe(a) {
      switch (a) {
          case 1:
              return "1";
          case 2:
          case 4:
              return "0";
          default:
              return "-"
      }
  }

  function pe(a) {
      switch (a) {
          case 1:
              return "G";
          case 3:
              return "g";
          case 2:
              return "D";
          case 4:
              return "d";
          case 0:
              return "g";
          default:
              return "g"
      }
  }

  function qe(a, b) {
      var c = a[1] || 0,
          d = a[2] || 0;
      switch (b) {
          case 0:
              return "G1" + oe(c) + oe(d);
          case 1:
              return "G2" + pe(c) + pe(d);
          default:
              return "g1--"
      }
  };
  var re = function() {
      var a = function(b) {
          return {
              toString: function() {
                  return b
              }
          }
      };
      return {
          Zj: a("consent"),
          hi: a("convert_case_to"),
          ii: a("convert_false_to"),
          ji: a("convert_null_to"),
          ki: a("convert_true_to"),
          li: a("convert_undefined_to"),
          Gm: a("debug_mode_metadata"),
          Sb: a("function"),
          Zg: a("instance_name"),
          Bk: a("live_only"),
          Ck: a("malware_disabled"),
          Dk: a("metadata"),
          Gk: a("original_activity_id"),
          Nm: a("original_vendor_template_id"),
          Mm: a("once_on_load"),
          Fk: a("once_per_event"),
          gj: a("once_per_load"),
          Rm: a("priority_override"),
          Sm: a("respected_consent_types"),
          lj: a("setup_tags"),
          pe: a("tag_id"),
          qj: a("teardown_tags")
      }
  }();
  var Ne;
  var Oe = [],
      Pe = [],
      Qe = [],
      Re = [],
      Se = [],
      Te = {},
      Ue, Ve, Xe = function() {
          var a = We;
          Ve = Ve || a
      },
      Ye, Ze = [],
      $e = function(a, b) {
          var c = {};
          c["function"] = "__" + a;
          for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
          return c
      },
      af = function(a, b) {
          var c = a["function"],
              d = b && b.event;
          if (!c) throw Error("Error: No function name given for function call.");
          var e = Te[c],
              f = b && 2 === b.type && d.Nj && e && -1 !== Ze.indexOf(c),
              g = {},
              h = {},
              m;
          for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.wj && d.wj(a[m]), e && (g[m] = a[m]), !e || f) && (h[m.substr(4)] =
              a[m]);
          e && d && d.vj && (g.vtp_gtmCachedValues = d.vj);
          if (b) {
              if (null == b.name) {
                  var n;
                  a: {
                      var p = b.index;
                      if (null == p) n = "";
                      else {
                          var q;
                          switch (b.type) {
                              case 2:
                                  q = Oe[p];
                                  break;
                              case 1:
                                  q = Re[p];
                                  break;
                              default:
                                  n = "";
                                  break a
                          }
                          var r = q && q[re.Zg];
                          n = r ? String(r) : ""
                      }
                  }
                  b.name = n
              }
              e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
          }
          var t, u;
          e && (t = e(g));
          if (!e || f) u = Ne(c, h, b);
          f && t !== u && d && d.Nj(d.id, c);
          return e ? t : u
      },
      cf = function(a, b, c) {
          c = c || [];
          var d = {},
              e;
          for (e in a) a.hasOwnProperty(e) && (d[e] = bf(a[e], b, c));
          return d
      },
      bf = function(a, b,
          c) {
          if (Ka(a)) {
              var d;
              switch (a[0]) {
                  case "function_id":
                      return a[1];
                  case "list":
                      d = [];
                      for (var e = 1; e < a.length; e++) d.push(bf(a[e], b, c));
                      return d;
                  case "macro":
                      var f = a[1];
                      if (c[f]) return;
                      var g = Oe[f];
                      if (!g || b.vh(g)) return;
                      c[f] = !0;
                      var h = String(g[re.Zg]);
                      try {
                          var m = cf(g, b, c);
                          m.vtp_gtmEventId = b.id;
                          b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                          d = af(m, {
                              event: b,
                              index: f,
                              type: 2,
                              name: h
                          });
                          Ye && (d = Ye.Qk(d, m))
                      } catch (y) {
                          b.Gj && b.Gj(y, Number(f), h), d = !1
                      }
                      c[f] = !1;
                      return d;
                  case "map":
                      d = {};
                      for (var n = 1; n < a.length; n += 2) d[bf(a[n],
                          b, c)] = bf(a[n + 1], b, c);
                      return d;
                  case "template":
                      d = [];
                      for (var p = !1, q = 1; q < a.length; q++) {
                          var r = bf(a[q], b, c);
                          Ve && (p = p || r === Ve.yf);
                          d.push(r)
                      }
                      return Ve && p ? Ve.Rk(d) : d.join("");
                  case "escape":
                      d = bf(a[1], b, c);
                      if (Ve && Ka(a[1]) && "macro" === a[1][0] && Ve.Bl(a)) return Ve.Yl(d);
                      d = String(d);
                      for (var t = 2; t < a.length; t++) se[a[t]] && (d = se[a[t]](d));
                      return d;
                  case "tag":
                      var u = a[1];
                      if (!Re[u]) throw Error("Unable to resolve tag reference " + u + ".");
                      return d = {
                          Bj: a[2],
                          index: u
                      };
                  case "zb":
                      var v = {
                          arg0: a[2],
                          arg1: a[3],
                          ignore_case: a[5]
                      };
                      v["function"] =
                          a[1];
                      var w = df(v, b, c),
                          x = !!a[4];
                      return x || 2 !== w ? x !== (1 === w) : null;
                  default:
                      throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
              }
          }
          return a
      },
      df = function(a, b, c) {
          try {
              return Ue(cf(a, b, c))
          } catch (d) {
              JSON.stringify(a)
          }
          return 2
      };
  var ef = function(a, b, c) {
      var d;
      d = Error.call(this, c);
      this.message = d.message;
      "stack" in d && (this.stack = d.stack);
      this.h = a
  };
  ra(ef, Error);

  function ff(a, b) {
      if (Ka(a)) {
          Object.defineProperty(a, "context", {
              value: {
                  line: b[0]
              }
          });
          for (var c = 1; c < a.length; c++) ff(a[c], b[c])
      }
  };
  var gf = function(a, b) {
      var c;
      c = Error.call(this);
      this.message = c.message;
      "stack" in c && (this.stack = c.stack);
      this.Sl = a;
      this.m = b;
      this.h = []
  };
  ra(gf, Error);
  var jf = function() {
      return function(a, b) {
          a instanceof gf || (a = new gf(a, hf));
          b && a.h.push(b);
          throw a;
      }
  };

  function hf(a) {
      if (!a.length) return a;
      a.push({
          id: "main",
          line: 0
      });
      for (var b = a.length - 1; 0 < b; b--) Ia(a[b].id) && a.splice(b++, 1);
      for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
      a.splice(0, 1);
      return a
  };
  var mf = function(a) {
          function b(r) {
              for (var t = 0; t < r.length; t++) d[r[t]] = !0
          }
          for (var c = [], d = [], e = kf(a), f = 0; f < Pe.length; f++) {
              var g = Pe[f],
                  h = lf(g, e);
              if (h) {
                  for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                  b(g.block || [])
              } else null === h && b(g.block || []);
          }
          for (var p = [], q = 0; q < Re.length; q++) c[q] && !d[q] && (p[q] = !0);
          return p
      },
      lf = function(a, b) {
          for (var c = a["if"] || [], d = 0; d < c.length; d++) {
              var e = b(c[d]);
              if (0 === e) return !1;
              if (2 === e) return null
          }
          for (var f =
                  a.unless || [], g = 0; g < f.length; g++) {
              var h = b(f[g]);
              if (2 === h) return null;
              if (1 === h) return !1
          }
          return !0
      },
      kf = function(a) {
          var b = [];
          return function(c) {
              void 0 === b[c] && (b[c] = df(Qe[c], a));
              return b[c]
          }
      };
  var nf = {
      Qk: function(a, b) {
          b[re.hi] && "string" === typeof a && (a = 1 == b[re.hi] ? a.toLowerCase() : a.toUpperCase());
          b.hasOwnProperty(re.ji) && null === a && (a = b[re.ji]);
          b.hasOwnProperty(re.li) && void 0 === a && (a = b[re.li]);
          b.hasOwnProperty(re.ki) && !0 === a && (a = b[re.ki]);
          b.hasOwnProperty(re.ii) && !1 === a && (a = b[re.ii]);
          return a
      }
  };
  var of = function() {
      this.h = {}
  };

  function pf(a, b, c, d) {
      if (a)
          for (var e = 0; e < a.length; e++) {
              var f = void 0,
                  g = "A policy function denied the permission request";
              try {
                  f = a[e].call(void 0, b, c, d), g += "."
              } catch (h) {
                  g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
              }
              if (!f) throw new ef(c, d, g);
          }
  }

  function qf(a, b, c) {
      return function() {
          var d = arguments[0];
          if (d) {
              var e = a.h[d],
                  f = a.h.all;
              if (e || f) {
                  var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                  pf(e, b, d, g);
                  pf(f, b, d, g)
              }
          }
      }
  };
  var uf = function() {
          var a = data.permissions || {},
              b = rf.ctid,
              c = this;
          this.m = new of;
          this.h = {};
          var d = {},
              e = qf(this.m, b, function() {
                  var f = arguments[0];
                  return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
              });
          l(a, function(f, g) {
              var h = {};
              l(g, function(m, n) {
                  var p = sf(m, n);
                  h[m] = p.assert;
                  d[m] || (d[m] = p.M)
              });
              c.h[f] = function(m, n) {
                  var p = h[m];
                  if (!p) throw tf(m, {}, "The requested permission " + m + " is not configured.");
                  var q = Array.prototype.slice.call(arguments, 0);
                  p.apply(void 0, q);
                  e.apply(void 0, q)
              }
          })
      },
      wf = function(a) {
          return vf.h[a] || function() {}
      };

  function sf(a, b) {
      var c = $e(a, b);
      c.vtp_permissionName = a;
      c.vtp_createPermissionError = tf;
      try {
          return af(c)
      } catch (d) {
          return {
              assert: function(e) {
                  throw new ef(e, {}, "Permission " + e + " is unknown.");
              },
              M: function() {
                  for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                  return e
              }
          }
      }
  }

  function tf(a, b, c) {
      return new ef(a, b, c)
  };
  var xf = !1;
  var yf = {};
  yf.Em = Ra('');
  yf.Tk = Ra('');
  var zf = xf,
      Af = yf.Tk,
      Bf = yf.Em;
  var Ff = function(a) {
          var b = {},
              c = 0;
          l(a, function(e, f) {
              if (null != f)
                  if (f = ("" + f).replace(/~/g, "~~"), Cf.hasOwnProperty(e)) b[Cf[e]] = f;
                  else if (Df.hasOwnProperty(e)) {
                  var g = Df[e],
                      h = f;
                  b.hasOwnProperty(g) || (b[g] = h)
              } else if ("category" === e)
                  for (var m = f.split("/", 5), n = 0; n < m.length; n++) {
                      var p = Ef[n],
                          q = m[n];
                      b.hasOwnProperty(p) || (b[p] = q)
                  } else if (27 > c) {
                      var r = String.fromCharCode(10 > c ? 48 + c : 65 + c - 10);
                      b["k" + r] = ("" + String(e)).replace(/~/g, "~~");
                      b["v" + r] = f;
                      c++
                  }
          });
          var d = [];
          l(b, function(e, f) {
              d.push("" + e + f)
          });
          return d.join("~")
      },
      Cf = {
          item_id: "id",
          item_name: "nm",
          item_brand: "br",
          item_category: "ca",
          item_category2: "c2",
          item_category3: "c3",
          item_category4: "c4",
          item_category5: "c5",
          item_variant: "va",
          price: "pr",
          quantity: "qt",
          coupon: "cp",
          item_list_name: "ln",
          index: "lp",
          item_list_id: "li",
          discount: "ds",
          affiliation: "af",
          promotion_id: "pi",
          promotion_name: "pn",
          creative_name: "cn",
          creative_slot: "cs",
          location_id: "lo"
      },
      Df = {
          id: "id",
          name: "nm",
          brand: "br",
          variant: "va",
          list_name: "ln",
          list_position: "lp",
          list: "ln",
          position: "lp",
          creative: "cn"
      },
      Ef = ["ca",
          "c2", "c3", "c4", "c5"
      ];
  var Gf = function(a) {
          var b = [];
          l(a, function(c, d) {
              null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
          });
          return b.join("&")
      },
      Hf = function(a, b, c, d) {
          this.Sa = a.Sa;
          this.Fc = a.Fc;
          this.ph = a.ph;
          this.m = b;
          this.C = c;
          this.B = Gf(a.Sa);
          this.h = Gf(a.ph);
          this.J = this.h.length;
          if (d && 16384 < this.J) throw Error("EVENT_TOO_LARGE");
      };
  var If = function() {
      this.events = [];
      this.h = this.Sa = "";
      this.B = 0;
      this.m = !1
  };
  If.prototype.add = function(a) {
      return this.C(a) ? (this.events.push(a), this.Sa = a.B, this.h = a.m, this.B += a.J, this.m = a.C, !0) : !1
  };
  If.prototype.C = function(a) {
      var b = 20 > this.events.length && 16384 > a.J + this.B,
          c = this.Sa === a.B && this.h === a.m && this.m === a.C;
      return 0 == this.events.length || b && c
  };
  var Jf = function(a, b) {
          l(a, function(c, d) {
              null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
          })
      },
      Kf = function(a, b) {
          var c = [];
          a.B && c.push(a.B);
          b && c.push("_s=" + b);
          Jf(a.Fc, c);
          var d = !1;
          a.h && (c.push(a.h), d = !0);
          var e = c.join("&"),
              f = "",
              g = e.length + a.m.length + 1;
          d && 2048 < g && (f = c.pop(), e = c.join("&"));
          return {
              Mh: e,
              body: f
          }
      },
      Lf = function(a, b) {
          var c = a.events;
          if (1 == c.length) return Kf(c[0], b);
          var d = [];
          a.Sa && d.push(a.Sa);
          for (var e = {}, f = 0; f < c.length; f++) l(c[f].Fc, function(t, u) {
              null != u && (e[t] = e[t] || {}, e[t][String(u)] =
                  e[t][String(u)] + 1 || 1)
          });
          var g = {};
          l(e, function(t, u) {
              var v, w = -1,
                  x = 0;
              l(u, function(y, A) {
                  x += A;
                  var B = (y.length + t.length + 2) * (A - 1);
                  B > w && (v = y, w = B)
              });
              x == c.length && (g[t] = v)
          });
          Jf(g, d);
          b && d.push("_s=" + b);
          for (var h = d.join("&"), m = [], n = {}, p = 0; p < c.length; n = {
                  Se: n.Se
              }, p++) {
              var q = [];
              n.Se = {};
              l(c[p].Fc, function(t) {
                  return function(u, v) {
                      g[u] != "" + v && (t.Se[u] = v)
                  }
              }(n));
              c[p].h && q.push(c[p].h);
              Jf(n.Se, q);
              m.push(q.join("&"))
          }
          var r = m.join("\r\n");
          return {
              Mh: h,
              body: r
          }
      };
  var Pf = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

  function Qf(a, b) {
      a = String(a);
      b = String(b);
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) === c
  }
  var Rf = new Na;

  function Sf(a, b, c) {
      var d = c ? "i" : void 0;
      try {
          var e = String(b) + d,
              f = Rf.get(e);
          f || (f = new RegExp(b, d), Rf.set(e, f));
          return f.test(a)
      } catch (g) {
          return !1
      }
  }

  function Tf(a, b) {
      return 0 <= String(a).indexOf(String(b))
  }

  function Uf(a, b) {
      return String(a) === String(b)
  }

  function Vf(a, b) {
      return Number(a) >= Number(b)
  }

  function Wf(a, b) {
      return Number(a) <= Number(b)
  }

  function Xf(a, b) {
      return Number(a) > Number(b)
  }

  function Yf(a, b) {
      return Number(a) < Number(b)
  }

  function Zf(a, b) {
      return 0 === String(a).indexOf(String(b))
  };
  var fg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

  function gg(a, b) {
      return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
  };
  var hg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
      ig = {
          Fn: "function",
          DustMap: "Object",
          List: "Array"
      },
      L = function(a, b, c) {
          for (var d = 0; d < b.length; d++) {
              var e = hg.exec(b[d]);
              if (!e) throw Error("Internal Error in " + a);
              var f = e[1],
                  g = "!" === e[2],
                  h = e[3],
                  m = c[d];
              if (null == m) {
                  if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
              } else if ("*" !== h) {
                  var n = typeof m;
                  m instanceof gb ? n = "Fn" : m instanceof za ? n = "List" : m instanceof lb ? n = "DustMap" : m instanceof Pc && (n = "OpaqueValue");
                  if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (ig[n] || n) + ", which does not match required type " + (ig[h] || h) + ".");
              }
          }
      };

  function jg(a) {
      return "" + a
  }

  function kg(a, b) {
      var c = [];
      return c
  };
  var lg = function(a, b) {
          var c = new gb(a, function() {
              for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = C(this, d[e]);
              return b.apply(this, d)
          });
          c.wc();
          return c
      },
      mg = function(a, b) {
          var c = new lb,
              d;
          for (d in b)
              if (b.hasOwnProperty(d)) {
                  var e = b[d];
                  Ha(e) ? c.set(d, lg(a + "_" + d, e)) : Vc(e) ? c.set(d, mg(a + "_" + d, e)) : (Ia(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
              } c.wc();
          return c
      };
  var ng = function(a, b) {
      L(E(this), ["apiName:!string", "message:?string"], arguments);
      var c = {},
          d = new lb;
      return d = mg("AssertApiSubject", c)
  };
  var og = function(a, b) {
      L(E(this), ["actual:?*", "message:?string"], arguments);
      if (a instanceof Rc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
      var c = {},
          d = new lb;
      return d = mg("AssertThatSubject", c)
  };

  function pg(a) {
      return function() {
          for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(Xc(arguments[d], c));
          return Wc(a.apply(null, b))
      }
  }
  var rg = function() {
      for (var a = Math, b = qg, c = {}, d = 0; d < b.length; d++) {
          var e = b[d];
          a.hasOwnProperty(e) && (c[e] = pg(a[e].bind(a)))
      }
      return c
  };
  var sg = function(a) {
      var b;
      return b
  };
  var wg = function(a) {
      var b;
      return b
  };
  var xg = function(a) {
      try {
          return encodeURI(a)
      } catch (b) {}
  };
  var yg = function(a) {
      try {
          return encodeURIComponent(a)
      } catch (b) {}
  };

  function zg(a, b) {
      var c = !1;
      L(E(this), ["booleanExpression:!string", "context:?DustMap"], arguments);
      var d = JSON.parse(a);
      if (!d) throw Error("Invalid boolean expression string was given.");
      var e = b ? Xc(b) : {};
      c = Ag(d, e);
      return c
  }
  var Bg = function(a, b) {
          for (var c = 0; c < b.length; c++) {
              if (void 0 === a) return;
              a = a[b[c]]
          }
          return a
      },
      Cg = function(a, b) {
          var c = b.preHit;
          if (c) {
              var d = a[0];
              switch (d) {
                  case "hitData":
                      return 2 > a.length ? void 0 : Bg(c.getHitData(a[1]), a.slice(2));
                  case "metadata":
                      return 2 > a.length ? void 0 : Bg(c.getMetadata(a[1]), a.slice(2));
                  case "eventName":
                      return c.getEventName();
                  case "destinationId":
                      return c.getDestinationId();
                  default:
                      throw Error(d + " is not a valid field that can be accessed\n                      from PreHit data.");
              }
          }
      },
      Dg = function(a, b) {
          if (a) {
              if (void 0 !== a.contextValue) {
                  var c;
                  a: {
                      var d = a.contextValue,
                          e = d.keyParts;
                      if (e && 0 !== e.length) {
                          var f = d.namespaceType;
                          switch (f) {
                              case 1:
                                  c = Cg(e, b);
                                  break a;
                              case 2:
                                  var g = b.macro;
                                  c = g ? g[e[0]] : void 0;
                                  break a;
                              default:
                                  throw Error("Unknown Namespace Type used: " + f);
                          }
                      }
                      c = void 0
                  }
                  return c
              }
              if (void 0 !== a.booleanExpressionValue) return Ag(a.booleanExpressionValue, b);
              if (void 0 !== a.booleanValue) return !!a.booleanValue;
              if (void 0 !== a.stringValue) return String(a.stringValue);
              if (void 0 !== a.integerValue) return Number(a.integerValue);
              if (void 0 !== a.doubleValue) return Number(a.doubleValue);
              throw Error("Unknown field used for variable of type ExpressionValue:" + a);
          }
      },
      Ag = function(a, b) {
          var c = a.args;
          if (!Ka(c) || 0 === c.length) throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
          var d = function(g) {
              return Dg(g, b)
          };
          switch (a.type) {
              case 1:
                  for (var e = 0; e < c.length; e++)
                      if (d(c[e])) return !0;
                  return !1;
              case 2:
                  for (var f = 0; f < c.length; f++)
                      if (!d(c[f])) return !1;
                  return 0 < c.length;
              case 3:
                  return !d(c[0]);
              case 4:
                  return Sf(d(c[0]), d(c[1]), !1);
              case 5:
                  return Uf(d(c[0]), d(c[1]));
              case 6:
                  return Zf(d(c[0]), d(c[1]));
              case 7:
                  return Qf(d(c[0]), d(c[1]));
              case 8:
                  return Tf(d(c[0]), d(c[1]));
              case 9:
                  return Yf(d(c[0]), d(c[1]));
              case 10:
                  return Wf(d(c[0]), d(c[1]));
              case 11:
                  return Xf(d(c[0]), d(c[1]));
              case 12:
                  return Vf(d(c[0]), d(c[1]));
              default:
                  throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
          }
      };
  zg.H = "internal.evaluateBooleanExpression";
  var Eg = function(a) {
      L(E(this), ["message:?string"], arguments);
  };
  var Fg = function(a, b) {
      L(E(this), ["min:!number", "max:!number"], arguments);
      return Ma(a, b)
  };
  var M = function(a, b, c) {
      var d = a.h.h;
      if (!d) throw Error("Missing program state.");
      d.uj.apply(null, Array.prototype.slice.call(arguments, 1))
  };
  var Gg = function() {
      M(this, "read_container_data");
      var a = new lb;
      a.set("containerId", self.optyaGtagId);
      a.set("version", '1');
      a.set("environmentName", '');
      a.set("debugMode", zf);
      a.set("previewMode", Bf);
      a.set("environmentMode", Af);
      a.wc();
      return a
  };
  var Hg = function() {
      return (new Date).getTime()
  };
  var Ig = function(a) {
      if (null === a) return "null";
      if (a instanceof za) return "array";
      if (a instanceof gb) return "function";
      if (a instanceof Pc) {
          a = a.Ga;
          if (void 0 === a.constructor || void 0 === a.constructor.name) {
              var b = String(a);
              return b.substring(8, b.length - 1)
          }
          return String(a.constructor.name)
      }
      return typeof a
  };
  var Jg = function(a) {
      function b(c) {
          return function(d) {
              try {
                  return c(d)
              } catch (e) {
                  (zf || Bf) && a.call(this, e.message)
              }
          }
      }
      return {
          parse: b(function(c) {
              return Wc(JSON.parse(c))
          }),
          stringify: b(function(c) {
              return JSON.stringify(Xc(c))
          })
      }
  };
  var Kg = function(a) {
      return Qa(Xc(a, this.h))
  };
  var Lg = function(a) {
      return Number(Xc(a, this.h))
  };
  var Mg = function(a) {
      return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
  };
  var Ng = function(a, b, c) {
      var d = null,
          e = !1;
      return e ? d : null
  };
  var qg = "floor ceil round max min abs pow sqrt".split(" ");
  var Og = function() {
          var a = {};
          return {
              il: function(b) {
                  return a.hasOwnProperty(b) ? a[b] : void 0
              },
              vm: function(b, c) {
                  a[b] = c
              },
              reset: function() {
                  a = {}
              }
          }
      },
      Pg = function(a, b) {
          return function() {
              var c = Array.prototype.slice.call(arguments, 0);
              c.unshift(b);
              return gb.prototype.h.apply(a, c)
          }
      },
      Qg = function(a, b) {
          L(E(this), ["apiName:!string", "mock:?*"], arguments);
      };
  var Rg = {};
  Rg.keys = function(a) {
      return new za
  };
  Rg.values = function(a) {
      return new za
  };
  Rg.entries = function(a) {
      return new za
  };
  Rg.freeze = function(a) {
      return a
  };
  Rg.delete = function(a, b) {
      return !1
  };
  var Tg = function() {
      this.h = {};
      this.m = {};
  };
  Tg.prototype.get = function(a, b) {
      var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
      return c
  };
  Tg.prototype.add = function(a, b, c) {
      if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
      if (this.m.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
      this.h[a] = c ? void 0 : Ha(b) ? lg(a, b) : mg(a, b)
  };

  function Ug(a, b) {
      var c = void 0;
      return c
  };

  function Vg() {
      var a = {};
      return a
  };
  var Xg = function(a) {
          return Wg ? G.querySelectorAll(a) : null
      },
      Yg = function(a, b) {
          if (!Wg) return null;
          if (Element.prototype.closest) try {
              return a.closest(b)
          } catch (e) {
              return null
          }
          var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
              d = a;
          if (!G.documentElement.contains(d)) return null;
          do {
              try {
                  if (c.call(d, b)) return d
              } catch (e) {
                  break
              }
              d = d.parentElement || d.parentNode
          } while (null !== d && 1 === d.nodeType);
          return null
      },
      Zg = !1;
  if (G.querySelectorAll) try {
      var $g = G.querySelectorAll(":root");
      $g && 1 == $g.length && $g[0] == G.documentElement && (Zg = !0)
  } catch (a) {}
  var Wg = Zg;
  var O = function(a) {
      xb("GTM", a)
  };
  var ah = function(a) {
          return null == a ? "" : k(a) ? Ta(String(a)) : "e0"
      },
      ch = function(a) {
          return a.replace(bh, "")
      },
      eh = function(a) {
          return dh(a.replace(/\s/g, ""))
      },
      dh = function(a) {
          return Ta(a.replace(fh, "").toLowerCase())
      },
      hh = function(a) {
          a = a.replace(/[\s-()/.]/g, "");
          "+" !== a.charAt(0) && (a = "+" + a);
          return gh.test(a) ? a : "e0"
      },
      jh = function(a) {
          var b = a.toLowerCase().split("@");
          if (2 == b.length) {
              var c = b[0];
              /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
              c = c + "@" + b[1];
              if (ih.test(c)) return c
          }
          return "e0"
      },
      mh = function(a,
          b) {
          window.Promise || b([]);
          Promise.all(a.map(function(c) {
              return c.value && -1 !== kh.indexOf(c.name) ? lh(c.value).then(function(d) {
                  c.value = d
              }) : Promise.resolve()
          })).then(function() {
              b(a)
          }).catch(function() {
              b([])
          })
      },
      lh = function(a) {
          if ("" === a || "e0" === a) return Promise.resolve(a);
          if (z.crypto && z.crypto.subtle) {
              if (nh.test(a)) return Promise.resolve(a);
              try {
                  var b = oh(a);
                  return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                      var d = Array.from(new Uint8Array(c)).map(function(e) {
                          return String.fromCharCode(e)
                      }).join("");
                      return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                  }).catch(function() {
                      return "e2"
                  })
              } catch (c) {
                  return Promise.resolve("e2")
              }
          } else return Promise.resolve("e1")
      },
      oh = function(a) {
          var b;
          if (z.TextEncoder) b = (new TextEncoder("utf-8")).encode(a);
          else {
              for (var c = [], d = 0; d < a.length; d++) {
                  var e = a.charCodeAt(d);
                  128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                      e >> 6 & 63, 128 | e & 63))
              }
              b = new Uint8Array(c)
          }
          return b
      },
      fh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
      ih = /^\S+@\S+\.\S+$/,
      gh = /^\+\d{10,15}$/,
      bh = /[.~]/g,
      ph = /^[0-9A-Za-z_-]{43}$/,
      nh = /^[0-9A-Fa-f]{64}$/,
      qh = {},
      rh = (qh.email = "em", qh.phone_number = "pn", qh.first_name = "fn", qh.last_name = "ln", qh.street = "sa", qh.city = "ct", qh.region = "rg", qh.country = "co", qh.postal_code = "pc", qh.error_code = "ec", qh),
      sh = {},
      th = (sh.email = "sha256_email_address", sh.phone_number = "sha256_phone_number", sh.first_name = "sha256_first_name", sh.last_name =
          "sha256_last_name", sh.street = "sha256_street", sh),
      uh = function(a, b) {
          function c(t, u, v, w) {
              var x = ah(t);
              "" !== x && (nh.test(x) ? m.push({
                  name: u,
                  value: x,
                  index: w
              }) : m.push({
                  name: u,
                  value: v(x),
                  index: w
              }))
          }

          function d(t, u) {
              var v = t;
              if (k(v) || Ka(v)) {
                  v = Ka(t) ? t : [t];
                  for (var w = 0; w < v.length; ++w) {
                      var x = ah(v[w]),
                          y = nh.test(x);
                      u && !y && O(89);
                      !u && y && O(88)
                  }
              }
          }

          function e(t, u) {
              var v = t[u];
              d(v, !1);
              var w = th[u];
              t.hasOwnProperty(w) && (t.hasOwnProperty(u) && O(90), v = t[w], d(v, !0));
              return v
          }

          function f(t, u, v) {
              var w = e(t, u);
              w = Ka(w) ? w : [w];
              for (var x =
                      0; x < w.length; ++x) c(w[x], u, v)
          }

          function g(t, u, v, w) {
              var x = e(t, u);
              c(x, u, v, w)
          }

          function h(t) {
              return function(u) {
                  O(64);
                  return t(u)
              }
          }
          var m = [];

          if ( true ) { // z.location.protocol
              f(a, "email", jh);
              f(a, "phone_number", hh);
              f(a, "first_name", h(eh));
              f(a, "last_name", h(eh));
              var n = a.home_address || {};
              f(n, "street", h(dh));
              f(n, "city", h(dh));
              f(n, "postal_code", h(ch));
              f(n, "region", h(dh));
              f(n, "country", h(ch));
              var p = a.address || {};
              p = Ka(p) ? p : [p];
              for (var q = 0; q < p.length; q++) {
                  var r = p[q];
                  g(r, "first_name", eh, q);
                  g(r, "last_name", eh, q);
                  g(r, "street", dh, q);
                  g(r, "city", dh, q);
                  g(r, "postal_code", ch, q);
                  g(r, "region", dh, q);
                  g(r, "country", ch, q)
              }
              mh(m, b)
          } else m.push({
              name: "error_code",
              value: "e3",
              index: void 0
          }), b(m)
      },
      vh = function(a, b) {
          uh(a, function(c) {
              for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                  var g = c[f].name,
                      h = c[f].value,
                      m = c[f].index,
                      n = rh[g];
                  n && h && (-1 === kh.indexOf(g) || /^e\d+$/.test(h) || ph.test(h) || nh.test(h)) && (void 0 !== m && (n += m), d.push(n + "." + h), e++)
              }
              1 === c.length && "error_code" === c[0].name && (e = 0);
              b(encodeURIComponent(d.join("~")), e)
          })
      },
      wh = function(a) {
          if (z.Promise) try {
              return new Promise(function(b) {
                  vh(a,
                      function(c, d) {
                          b({
                              Tf: c,
                              Wl: d
                          })
                      })
              })
          } catch (b) {}
      },
      kh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var P = {
          g: {
              eg: "ad_personalization",
              F: "ad_storage",
              We: "ad_user_data",
              O: "analytics_storage",
              Ua: "region",
              xd: "consent_updated",
              Xe: "wait_for_update",
              mi: "ads",
              ig: "all",
              ni: "play",
              oi: "search",
              ri: "youtube",
              si: "app_remove",
              ui: "app_store_refund",
              vi: "app_store_subscription_cancel",
              wi: "app_store_subscription_convert",
              xi: "app_store_subscription_renew",
              kg: "add_payment_info",
              lg: "add_shipping_info",
              Yb: "add_to_cart",
              Zb: "remove_from_cart",
              mg: "view_cart",
              Jb: "begin_checkout",
              ac: "select_item",
              Za: "view_item_list",
              sb: "select_promotion",
              ab: "view_promotion",
              Ca: "purchase",
              bc: "refund",
              Ia: "view_item",
              ng: "add_to_wishlist",
              fk: "exception",
              yi: "first_open",
              zi: "first_visit",
              la: "gtag.config",
              Ja: "gtag.get",
              Ai: "in_app_purchase",
              fc: "page_view",
              gk: "screen_view",
              Bi: "session_start",
              hk: "timing_complete",
              ik: "track_social",
              zd: "user_engagement",
              tb: "gclid",
              ma: "ads_data_redaction",
              X: "allow_ad_personalization_signals",
              Ad: "allow_custom_scripts",
              Ze: "allow_display_features",
              Bd: "allow_enhanced_conversions",
              ub: "allow_google_signals",
              Da: "allow_interest_groups",
              jk: "app_id",
              kk: "app_installer_id",
              lk: "app_name",
              mk: "app_version",
              hc: "auid",
              Ci: "auto_detection_enabled",
              Kb: "aw_remarketing",
              af: "aw_remarketing_only",
              Cd: "discount",
              Dd: "aw_feed_country",
              Ed: "aw_feed_language",
              Z: "items",
              Fd: "aw_merchant_id",
              og: "aw_basket_type",
              Lc: "campaign_content",
              Mc: "campaign_id",
              Nc: "campaign_medium",
              Oc: "campaign_name",
              Pc: "campaign",
              Qc: "campaign_source",
              Rc: "campaign_term",
              cb: "client_id",
              Di: "content_group",
              Ei: "content_type",
              Ka: "conversion_cookie_prefix",
              Sc: "conversion_id",
              xa: "conversion_linker",
              Lb: "conversion_api",
              Na: "cookie_domain",
              Ea: "cookie_expires",
              Oa: "cookie_flags",
              ic: "cookie_name",
              Tc: "cookie_path",
              La: "cookie_prefix",
              fb: "cookie_update",
              vb: "country",
              sa: "currency",
              Gd: "customer_lifetime_value",
              jc: "custom_map",
              Fi: "gcldc",
              Gi: "debug_mode",
              aa: "developer_id",
              Hi: "disable_merchant_reported_purchases",
              kc: "dc_custom_params",
              pg: "dc_natural_search",
              bf: "dynamic_event_settings",
              qg: "affiliation",
              Hd: "checkout_option",
              cf: "checkout_step",
              rg: "coupon",
              Uc: "item_list_name",
              df: "list_name",
              Ii: "promotions",
              Vc: "shipping",
              ef: "tax",
              Id: "engagement_time_msec",
              Wc: "enhanced_client_id",
              Xc: "enhanced_conversions",
              sg: "enhanced_conversions_automatic_settings",
              Jd: "estimated_delivery_date",
              ff: "euid_logged_in_state",
              mc: "event_callback",
              nk: "event_category",
              wb: "event_developer_id_string",
              pk: "event_label",
              ug: "event",
              Kd: "event_settings",
              Ld: "event_timeout",
              qk: "description",
              rk: "fatal",
              Ji: "experiments",
              hf: "firebase_id",
              Md: "first_party_collection",
              Nd: "_x_20",
              Mb: "_x_19",
              vg: "fledge",
              wg: "flight_error_code",
              xg: "flight_error_message",
              Ki: "fl_activity_category",
              Li: "fl_activity_group",
              yg: "fl_advertiser_id",
              Mi: "fl_ar_dedupe",
              Ni: "fl_random_number",
              Oi: "tran",
              Pi: "u",
              Od: "gac_gclid",
              nc: "gac_wbraid",
              zg: "gac_wbraid_multiple_conversions",
              Ag: "ga_restrict_domain",
              jf: "ga_temp_client_id",
              Pd: "gdpr_applies",
              Bg: "geo_granularity",
              hb: "value_callback",
              Pa: "value_key",
              sk: "google_ono",
              ib: "google_signals",
              Cg: "google_tld",
              Qd: "groups",
              Dg: "gsa_experiment_id",
              Eg: "iframe_state",
              Rd: "ignore_referrer",
              kf: "internal_traffic_results",
              Nb: "is_legacy_converted",
              yb: "is_legacy_loaded",
              Sd: "is_passthrough",
              ya: "language",
              lf: "legacy_developer_id_string",
              za: "linker",
              oc: "accept_incoming",
              zb: "decorate_forms",
              T: "domains",
              Ob: "url_position",
              Fg: "method",
              tk: "name",
              Yc: "new_customer",
              Gg: "non_interaction",
              Qi: "optimize_id",
              nf: "page_hostname",
              Pb: "page_path",
              Fa: "page_referrer",
              Ab: "page_title",
              Hg: "passengers",
              Ig: "phone_conversion_callback",
              Ri: "phone_conversion_country_code",
              Jg: "phone_conversion_css_class",
              Si: "phone_conversion_ids",
              Kg: "phone_conversion_number",
              Lg: "phone_conversion_options",
              qc: "quantity",
              Zc: "redact_device_info",
              pf: "redact_enhanced_user_id",
              Ti: "redact_ga_client_id",
              Ui: "redact_user_id",
              Td: "referral_exclusion_definition",
              Qb: "restricted_data_processing",
              Vi: "retoken",
              uk: "sample_rate",
              qf: "screen_name",
              Bb: "screen_resolution",
              Wi: "search_term",
              Qa: "send_page_view",
              Rb: "send_to",
              rf: "server_container_url",
              ad: "session_duration",
              Ud: "session_engaged",
              tf: "session_engaged_time",
              jb: "session_id",
              Vd: "session_number",
              bd: "delivery_postal_code",
              Mg: "temporary_client_id",
              uf: "topmost_url",
              Xi: "tracking_id",
              vf: "traffic_type",
              na: "transaction_id",
              sc: "transport_url",
              Ng: "trip_type",
              uc: "update",
              kb: "url_passthrough",
              Xd: "_user_agent_architecture",
              Yd: "_user_agent_bitness",
              Zd: "_user_agent_full_version_list",
              ae: "_user_agent_mobile",
              be: "_user_agent_model",
              ce: "_user_agent_platform",
              de: "_user_agent_platform_version",
              ee: "_user_agent_wow64",
              oa: "user_data",
              Og: "user_data_auto_latency",
              Pg: "user_data_auto_meta",
              Qg: "user_data_auto_multi",
              Rg: "user_data_auto_selectors",
              Sg: "user_data_auto_status",
              wf: "user_data_mode",
              xf: "user_data_settings",
              Aa: "user_id",
              Ra: "user_properties",
              Tg: "us_privacy_string",
              da: "value",
              vc: "wbraid",
              Ug: "wbraid_multiple_conversions",
              dj: "_host_name",
              ej: "_in_page_command",
              fj: "_is_passthrough_cid",
              Af: "non_personalized_ads",
              oe: "_sst_parameters",
              eb: "conversion_label",
              ia: "page_location",
              xb: "global_developer_id_string",
              Wd: "tc_privacy_string"
          }
      },
      xh = {},
      yh = Object.freeze((xh[P.g.X] = 1, xh[P.g.Ze] = 1, xh[P.g.Bd] = 1, xh[P.g.ub] = 1, xh[P.g.Z] = 1, xh[P.g.Na] = 1, xh[P.g.Ea] = 1, xh[P.g.Oa] = 1, xh[P.g.ic] = 1, xh[P.g.Tc] = 1, xh[P.g.La] = 1, xh[P.g.fb] = 1, xh[P.g.jc] = 1, xh[P.g.aa] = 1, xh[P.g.bf] =
          1, xh[P.g.mc] = 1, xh[P.g.Kd] = 1, xh[P.g.Ld] = 1, xh[P.g.Md] = 1, xh[P.g.Ag] = 1, xh[P.g.ib] = 1, xh[P.g.Cg] = 1, xh[P.g.Qd] = 1, xh[P.g.kf] = 1, xh[P.g.Nb] = 1, xh[P.g.yb] = 1, xh[P.g.za] = 1, xh[P.g.pf] = 1, xh[P.g.Td] = 1, xh[P.g.Qb] = 1, xh[P.g.Qa] = 1, xh[P.g.Rb] = 1, xh[P.g.rf] = 1, xh[P.g.ad] = 1, xh[P.g.tf] = 1, xh[P.g.bd] = 1, xh[P.g.sc] = 1, xh[P.g.uc] = 1, xh[P.g.xf] = 1, xh[P.g.Ra] = 1, xh[P.g.oe] = 1, xh));
  Object.freeze([P.g.ia, P.g.Fa, P.g.Ab, P.g.ya, P.g.qf, P.g.Aa, P.g.hf, P.g.Di]);
  var zh = {},
      Ah = Object.freeze((zh[P.g.si] = 1, zh[P.g.ui] = 1, zh[P.g.vi] = 1, zh[P.g.wi] = 1, zh[P.g.xi] = 1, zh[P.g.yi] = 1, zh[P.g.zi] = 1, zh[P.g.Ai] = 1, zh[P.g.Bi] = 1, zh[P.g.zd] = 1, zh)),
      Bh = {},
      Ch = Object.freeze((Bh[P.g.kg] = 1, Bh[P.g.lg] = 1, Bh[P.g.Yb] = 1, Bh[P.g.Zb] = 1, Bh[P.g.mg] = 1, Bh[P.g.Jb] = 1, Bh[P.g.ac] = 1, Bh[P.g.Za] = 1, Bh[P.g.sb] = 1, Bh[P.g.ab] = 1, Bh[P.g.Ca] = 1, Bh[P.g.bc] = 1, Bh[P.g.Ia] = 1, Bh[P.g.ng] = 1, Bh)),
      Dh = Object.freeze([P.g.X, P.g.ub, P.g.fb]),
      Eh = Object.freeze([].concat(Dh)),
      Fh = Object.freeze([P.g.Ea, P.g.Ld, P.g.ad, P.g.tf, P.g.Id]),
      Gh = Object.freeze([].concat(Fh)),
      Hh = {},
      Ih = (Hh[P.g.F] = "1", Hh[P.g.O] = "2", Hh),
      Jh = {},
      Kh = Object.freeze((Jh[P.g.X] = 1, Jh[P.g.Bd] = 1, Jh[P.g.Da] = 1, Jh[P.g.Kb] = 1, Jh[P.g.af] = 1, Jh[P.g.Cd] = 1, Jh[P.g.Dd] = 1, Jh[P.g.Ed] = 1, Jh[P.g.Z] = 1, Jh[P.g.Fd] = 1, Jh[P.g.Ka] = 1, Jh[P.g.xa] = 1, Jh[P.g.Na] = 1, Jh[P.g.Ea] = 1, Jh[P.g.Oa] = 1, Jh[P.g.La] = 1, Jh[P.g.sa] = 1, Jh[P.g.Gd] = 1, Jh[P.g.aa] = 1, Jh[P.g.Hi] = 1, Jh[P.g.Xc] = 1, Jh[P.g.Jd] = 1, Jh[P.g.hf] = 1, Jh[P.g.Md] = 1, Jh[P.g.Nb] = 1, Jh[P.g.yb] = 1, Jh[P.g.ya] = 1, Jh[P.g.Yc] = 1, Jh[P.g.ia] = 1, Jh[P.g.Fa] = 1, Jh[P.g.Ig] = 1, Jh[P.g.Jg] =
          1, Jh[P.g.Kg] = 1, Jh[P.g.Lg] = 1, Jh[P.g.Qb] = 1, Jh[P.g.Qa] = 1, Jh[P.g.Rb] = 1, Jh[P.g.rf] = 1, Jh[P.g.bd] = 1, Jh[P.g.na] = 1, Jh[P.g.sc] = 1, Jh[P.g.uc] = 1, Jh[P.g.kb] = 1, Jh[P.g.oa] = 1, Jh[P.g.Aa] = 1, Jh[P.g.da] = 1, Jh));
  Object.freeze(P.g);
  var Lh = {},
      Mh = z.google_tag_manager = z.google_tag_manager || {},
      Nh = Math.random();
  Lh.ah = "36q0";
  Lh.ne = Number("0") || 0;
  Lh.ka = "dataLayer";
  Lh.dk = self.optyaGtagCliendId;
  var Oh = {
          __cl: 1,
          __ecl: 1,
          __ehl: 1,
          __evl: 1,
          __fal: 1,
          __fil: 1,
          __fsl: 1,
          __hl: 1,
          __jel: 1,
          __lcl: 1,
          __sdl: 1,
          __tl: 1,
          __ytl: 1
      },
      Ph = {
          __paused: 1,
          __tg: 1
      },
      Qh;
  for (Qh in Oh) Oh.hasOwnProperty(Qh) && (Ph[Qh] = 1);
  var Rh = Ra("true"),
      Sh, Th = !1;
  Th = !0;
  Sh = Th;
  var Uh, Vh = !1;
  Uh = Vh;
  var Wh, Xh = !1;
  Wh = Xh;
  var Yh, Zh = !1;
  Yh = Zh;
  Lh.Ye = "www.googletagmanager.com";
  var $h = "" + Lh.Ye + (Sh ? "/gtag/js" : "/gtm.js"),
      ai = null,
      bi = null,
      ci = {},
      di = {},
      ei = {},
      fi = function() {
          var a = Mh.sequence || 1;
          Mh.sequence = a + 1;
          return a
      };
  Lh.bk = "true";
  var gi = "";
  Lh.Ef = gi;
  var hi = new Na,
      ii = {},
      ji = {},
      mi = {
          name: Lh.ka,
          set: function(a, b) {
              J(cb(a, b), ii);
              ki()
          },
          get: function(a) {
              return li(a, 2)
          },
          reset: function() {
              hi = new Na;
              ii = {};
              ki()
          }
      },
      li = function(a, b) {
          return 2 != b ? hi.get(a) : ni(a)
      },
      ni = function(a, b) {
          var c = a.split(".");
          b = b || [];
          for (var d = ii, e = 0; e < c.length; e++) {
              if (null === d) return !1;
              if (void 0 === d) break;
              d = d[c[e]];
              if (-1 !== b.indexOf(d)) return
          }
          return d
      },
      oi = function(a, b) {
          ji.hasOwnProperty(a) || (hi.set(a, b), J(cb(a, b), ii), ki())
      },
      pi = function() {
          for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                  "gtm.blacklist", "tagTypeBlacklist"
              ], b = 0; b < a.length; b++) {
              var c = a[b],
                  d = li(c, 1);
              if (Ka(d) || Vc(d)) d = J(d);
              ji[c] = d
          }
      },
      ki = function(a) {
          l(ji, function(b, c) {
              hi.set(b, c);
              J(cb(b), ii);
              J(cb(b, c), ii);
              a && delete ji[b]
          })
      },
      qi = function(a, b) {
          var c, d = 1 !== (void 0 === b ? 2 : b) ? ni(a) : hi.get(a);
          "array" === Tc(d) || "object" === Tc(d) ? c = J(d) : c = d;
          return c
      };
  var ri = [],
      si = function(a) {
          return void 0 == ri[a] ? !1 : ri[a]
      };
  var R = [];
  R[7] = !0;
  R[9] = !0;
  R[27] = !0;
  R[28] = !0;
  R[11] = !0;
  R[13] = !0;
  R[55] = !0;
  R[15] = !0;
  R[16] = !0;
  R[25] = !0;
  R[26] = !0;
  R[34] = !0;
  R[36] = !0;
  R[43] = !0;
  R[57] = !0;
  R[59] = !0;
  R[61] = !0;
  R[66] = !0;
  R[68] = !0;
  R[72] = !0;
  R[73] = !0, ri[1] = !0;
  R[75] = !0;
  R[74] = !0;
  R[76] = !0;
  R[77] = !0;
  R[80] = !0;
  R[83] = !0;
  R[88] = !0;
  R[92] = !0;
  R[93] = !0;
  R[94] = !0;
  R[96] = !0;
  R[97] = !0;
  R[113] = !0;
  R[115] = !0;
  R[116] = !0;
  R[118] = !0;
  R[122] = !0;
  R[127] = !0;
  R[128] = !0;
  R[130] = !0;
  R[132] = !0;
  R[133] = !0;
  R[135] = !0;
  var T = function(a) {
      return !!R[a]
  };
  var ti = function(a) {
      xb("HEALTH", a)
  };
  var ui;
  try {
      ui = JSON.parse(vb("eyIwIjoiUlUiLCIxIjoiUlUtQkEiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5ydSIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))
  } catch (a) {
      O(123), ti(2), ui = {}
  }
  var Gi = function() {
          return ui["0"] || ""
      },
      Hi = function() {
          return ui["1"] || ""
      },
      Ii = function() {
          var a = !1;
          a = !!ui["2"];
          return a
      },
      Ji = function() {
          return !!ui["6"]
      },
      Ki = function() {
          var a = "";
          a = ui["4"] || "";
          return a
      },
      Li = function() {
          var a = !1;
          a = !!ui["5"];
          return a
      },
      Mi = function() {
          var a = "";
          a = ui["3"] || "";
          return a
      };
  var Ni, Oi = !1;

  function Pi() {
      Oi = !0;
      Ni = Ni || {}
  }
  var Qi = function(a) {
      Oi || Pi();
      return Ni[a]
  };
  var Ri = function() {
          var a = z.screen;
          return {
              width: a ? a.width : 0,
              height: a ? a.height : 0
          }
      },
      Si = function(a) {
          if (G.hidden) return !0;
          var b = a.getBoundingClientRect();
          if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
          var c = z.getComputedStyle(a, null);
          if ("hidden" === c.visibility) return !0;
          for (var d = a, e = c; d;) {
              if ("none" === e.display) return !0;
              var f = e.opacity,
                  g = e.filter;
              if (g) {
                  var h = g.indexOf("opacity(");
                  0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                      f))
              }
              if (void 0 !== f && 0 >= f) return !0;
              (d = d.parentElement) && (e = z.getComputedStyle(d, null))
          }
          return !1
      };
  var Ti = function() {
          var a = G.body,
              b = G.documentElement || a && a.parentElement,
              c, d;
          if (G.compatMode && "BackCompat" !== G.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
          else {
              var e = function(f, g) {
                  return f && g ? Math.min(f, g) : Math.max(f, g)
              };
              c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
              d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
          }
          return {
              width: d,
              height: c
          }
      },
      Ui = function(a) {
          var b = Ti(),
              c = b.height,
              d = b.width,
              e = a.getBoundingClientRect(),
              f = e.bottom - e.top,
              g = e.right - e.left;
          return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
              d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
      };
  var Vi = [],
      Wi = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
      Xi = function(a, b, c) {
          for (var d = new z.IntersectionObserver(a, {
                  threshold: c
              }), e = 0; e < b.length; e++) d.observe(b[e]);
          for (var f = 0; f < Vi.length; f++)
              if (!Vi[f]) return Vi[f] = d, f;
          return Vi.push(d) - 1
      },
      Yi = function(a, b, c) {
          function d(h, m) {
              var n = {
                      top: 0,
                      bottom: 0,
                      right: 0,
                      left: 0,
                      width: 0,
                      height: 0
                  },
                  p = {
                      boundingClientRect: h.getBoundingClientRect(),
                      intersectionRatio: m,
                      intersectionRect: n,
                      isIntersecting: 0 < m,
                      rootBounds: n,
                      target: h,
                      time: Va()
                  };
              I(function() {
                  return a(p)
              })
          }
          for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
          c.sort(function(h, m) {
              return h - m
          });
          return function() {
              for (var h = 0; h < b.length; h++) {
                  var m = Ui(b[h]);
                  if (m > e[h])
                      for (; f[h] < c.length - 1 && m >= c[f[h] + 1];) d(b[h], m), f[h]++;
                  else if (m < e[h])
                      for (; 0 <= f[h] && m <= c[f[h]];) d(b[h], m), f[h]--;
                  e[h] = m
              }
          }
      },
      Zi = function(a, b, c) {
          for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
          if (Wi) {
              var e = !1;
              I(function() {
                  e ||
                      Yi(a, b, c)()
              });
              return Xi(function(f) {
                  e = !0;
                  for (var g = {
                          nd: 0
                      }; g.nd < f.length; g = {
                          nd: g.nd
                      }, g.nd++) I(function(h) {
                      return function() {
                          return a(f[h.nd])
                      }
                  }(g))
              }, b, c)
          }
          return z.setInterval(Yi(a, b, c), 1E3)
      },
      $i = function(a) {
          Wi ? 0 <= a && a < Vi.length && Vi[a] && (Vi[a].disconnect(), Vi[a] = void 0) : z.clearInterval(a)
      };
  var aj = /:[0-9]+$/,
      bj = /^\d+\.fls\.doubleclick\.net$/,
      cj = function(a, b, c, d) {
          for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
              var h = f[g].split("=");
              if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                  var m = h.slice(1).join("=");
                  if (!c) return d ? m : decodeURIComponent(m).replace(/\+/g, " ");
                  e.push(d ? m : decodeURIComponent(m).replace(/\+/g, " "))
              }
          }
          return c ? e : void 0
      },
      fj = function(a, b, c, d, e) {
          b && (b = String(b).toLowerCase());
          if ("protocol" === b || "port" === b) a.protocol = dj("https:") || dj("https:"); // a.protocol z.location.protocol
          
          "port" === b 
            ? a.port = String(Number('qa.testbs.net' ? a.port : z.location.port) || ("http" === "https" ? 80 : "https" === "https" ? 443 : "")) // a.hostname // a.protocol
            : "host" === b && (a.hostname = ('qa.testbs.net' || 'qa.testbs.net' ).replace(aj, "").toLowerCase()); // a.hostname // z.location.hostname
          return ej(a, b, c, d, e)
      },
      ej = function(a, b, c, d, e) {
          var f, g = dj(a.protocol);
          b && (b = String(b).toLowerCase());
          switch (b) {
              case "url_no_fragment":
                  f = gj(a);
                  break;
              case "protocol":
                  f = g;
                  break;
              case "host":
                  f = a.hostname.replace(aj, "").toLowerCase();
                  if (c) {
                      var h = /^www\d*\./.exec(f);
                      h && h[0] && (f = f.substr(h[0].length))
                  }
                  break;
              case "port":
                  f =
                      String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                  break;
              case "path":
                  a.pathname || a.hostname || xb("TAGGING", 1);
                  f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                  var m = f.split("/");
                  0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                  f = m.join("/");
                  break;
              case "query":
                  f = a.search.replace("?", "");
                  e && (f = cj(f, e, !1));
                  break;
              case "extension":
                  var n = a.pathname.split(".");
                  f = 1 < n.length ? n[n.length - 1] : "";
                  f = f.split("/")[0];
                  break;
              case "fragment":
                  f = a.hash.replace("#", "");
                  break;
              default:
                  f = a && a.href
          }
          return f
      },
      dj = function(a) {
          return a ? a.replace(":", "").toLowerCase() : ""
      },
      gj = function(a) {
          var b = "";
          if (a && a.href) {
              var c = a.href.indexOf("#");
              b = 0 > c ? a.href : a.href.substr(0, c)
          }
          return b
      },
      hj = function(a) {
          var b = G.createElement("a");
          a && (b.href = a);
          var c = b.pathname;
          "/" !== c[0] && (a || xb("TAGGING", 1), c = "/" + c);
          
          var d = b.hostname.replace(aj, "");
          
          return {
              href: b.href,
              protocol: b.protocol,
              host: b.host,
              hostname: d,
              pathname: c,
              search: b.search,
              hash: b.hash,
              port: b.port
          }
      },
      ij = function(a) {
          function b(n) {
              var p = n.split("=")[0];
              return 0 > d.indexOf(p) ? n :
                  p + "=0"
          }

          function c(n) {
              return n.split("&").map(b).filter(function(p) {
                  return void 0 !== p
              }).join("&")
          }
          var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
              e = hj(a),
              f = a.split(/[?#]/)[0],
              g = e.search,
              h = e.hash;
          "?" === g[0] && (g = g.substring(1));
          "#" === h[0] && (h = h.substring(1));
          g = c(g);
          h = c(h);
          "" !== g && (g = "?" + g);
          "" !== h && (h = "#" + h);
          var m = "" + f + g + h;
          "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
          return m
      },
      jj = function(a) {
          var b = hj( 'https://qa.testbs.net/en/' ), // z.location.href
              c = fj(b, "host", !1);
          if (c && c.match(bj)) {
              var d = fj(b,
                  "path").split(a + "=");
              if (1 < d.length) return d[1].split(";")[0].split("?")[0]
          }
      };
  var lj = function(a, b, c) {
          var d = a.element,
              e = {
                  U: a.U,
                  type: a.ja,
                  tagName: d.tagName
              };
          b && (e.querySelector = kj(d));
          c && (e.isVisible = !Si(d));
          return e
      },
      mj = function(a, b, c) {
          return lj({
              element: a.element,
              U: a.U,
              ja: "1"
          }, b, c)
      },
      nj = function(a) {
          var b = !!a.yc + "." + !!a.zc;
          a && a.hd && a.hd.length && (b += "." + a.hd.join("."));
          a && a.Wa && (b += "." + a.Wa.email + "." + a.Wa.phone + "." + a.Wa.address);
          return b
      },
      qj = function(a) {
          if (0 != a.length) {
              var b;
              b = oj(a, function(c) {
                  return !pj.test(c.U)
              });
              b = oj(b, function(c) {
                  return "INPUT" === c.element.tagName.toUpperCase()
              });
              b = oj(b, function(c) {
                  return !Si(c.element)
              });
              return b[0]
          }
      },
      rj = function(a, b) {
          if (!b || 0 === b.length) return a;
          for (var c = [], d = 0; d < a.length; d++) {
              for (var e = !0, f = 0; f < b.length; f++) {
                  var g = b[f];
                  if (g && Yg(a[d].element, g)) {
                      e = !1;
                      break
                  }
              }
              e && c.push(a[d])
          }
          return c
      },
      oj = function(a, b) {
          if (1 >= a.length) return a;
          var c = a.filter(b);
          return 0 == c.length ? a : c
      },
      kj = function(a) {
          var b;
          if (a === G.body) b = "body";
          else {
              var c;
              if (a.id) c = "#" + a.id;
              else {
                  var d;
                  if (a.parentElement) {
                      var e;
                      a: {
                          var f = a.parentElement;
                          if (f) {
                              for (var g = 0; g < f.childElementCount; g++)
                                  if (f.children[g] ===
                                      a) {
                                      e = g + 1;
                                      break a
                                  } e = -1
                          } else e = 1
                      }
                      d = kj(a.parentElement) + ">:nth-child(" + e + ")"
                  } else d = "";
                  c = d
              }
              b = c
          }
          return b
      },
      tj = function(a) {
          for (var b = [], c = 0; c < a.length; c++) {
              var d = a[c],
                  e = d.textContent;
              "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
              if (e) {
                  var f = e.match(sj);
                  if (f) {
                      var g = f[0],
                          h;
                      if (z.location) {
                          var m = ej(z.location, "host", !0);
                          h = 0 <= g.toLowerCase().indexOf(m)
                      } else h = !1;
                      h || b.push({
                          element: d,
                          U: g
                      })
                  }
              }
          }
          return b
      },
      xj = function() {
          var a = [],
              b = G.body;
          if (!b) return {
              elements: a,
              status: "4"
          };
          for (var c = b.querySelectorAll("*"),
                  d = 0; d < c.length && 1E4 > d; d++) {
              var e = c[d];
              if (!(0 <= uj.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
                  for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++)
                      if (!(0 <= vj.indexOf(e.children[g].tagName.toUpperCase()))) {
                          f = !0;
                          break
                      }(!f || T(114) && -1 !== wj.indexOf(e.tagName)) && a.push(e)
              }
          }
          return {
              elements: a,
              status: 1E4 < c.length ? "2" : "1"
          }
      },
      yj = !0,
      zj = !1;
  var sj = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
      Aj = /@(gmail|googlemail)\./i,
      pj = /support|noreply/i,
      uj = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
      vj = ["BR"],
      Bj = {
          Hm: "1",
          Pm: "2",
          Im: "3",
          Km: "4",
          Fm: "5",
          Qm: "6",
          Lm: "7"
      },
      Cj = {},
      wj = ["INPUT", "SELECT"];
  var Vj = function(a) {
          a = a || {
              yc: !0,
              zc: !0
          };
          a.Wa = a.Wa || {
              email: !0,
              phone: !1,
              address: !1
          };
          var b = nj(a),
              c = Cj[b];
          if (c && 200 > Va() - c.timestamp) return c.result;
          var d = xj(),
              e = d.status,
              f = [],
              g, h, m = [];
          if (!T(114)) {
              if (a.Wa && a.Wa.email) {
                  var n = tj(d.elements);
                  f = rj(n, a && a.hd);
                  g = qj(f);
                  10 < n.length && (e = "3")
              }!a.Vh && g && (f = [g]);
              for (var p = 0; p < f.length; p++) m.push(mj(f[p], a.yc, a.zc));
              m = m.slice(0, 10)
          } else if (a.Wa) {}
          g && (h = mj(g, a.yc, a.zc));
          var D = {
              elements: m,
              Oh: h,
              status: e
          };
          Cj[b] = {
              timestamp: Va(),
              result: D
          };
          return D
      },
      Wj = function(a) {
          return a.tagName + ":" + a.isVisible + ":" + a.U.length + ":" + Aj.test(a.U)
      };
  var Xj = function(a, b, c) {
          if (!c) return !1;
          var d = c.selector_type,
              e = String(c.value),
              f;
          if ("js_variable" === d) {
              e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
              for (var g = e.split(","), h = 0; h < g.length; h++) {
                  var m = g[h].trim();
                  if (m) {
                      if (0 === m.indexOf("dataLayer.")) f = li(m.substring(10));
                      else {
                          var n = m.split(".");
                          f = z[n.shift()];
                          for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                      }
                      if (void 0 !== f) break
                  }
              }
          } else if ("css_selector" === d && Wg) {
              var q = Xg(e);
              if (q && 0 < q.length) {
                  f = [];
                  for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(xc(q[r]) ||
                      Ta(q[r].value));
                  f = 1 === f.length ? f[0] : f
              }
          }
          return f ? (a[b] = f, !0) : !1
      },
      Yj = function(a) {
          if (a) {
              var b = {},
                  c = !1;
              c = Xj(b, "email", a.email) || c;
              c = Xj(b, "phone_number", a.phone) || c;
              b.address = [];
              for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                  var f = {};
                  c = Xj(f, "first_name", d[e].first_name) || c;
                  c = Xj(f, "last_name", d[e].last_name) || c;
                  c = Xj(f, "street", d[e].street) || c;
                  c = Xj(f, "city", d[e].city) || c;
                  c = Xj(f, "region", d[e].region) || c;
                  c = Xj(f, "country", d[e].country) || c;
                  c = Xj(f, "postal_code", d[e].postal_code) || c;
                  b.address.push(f)
              }
              return c ?
                  b : void 0
          }
      },
      Zj = function(a) {
          return a.B[P.g.xf]
      },
      ak = function(a) {
          var b = U(a, P.g.Xc) || {},
              c = !1;
          l(b, function(d, e) {
              var f = e.enhanced_conversions_mode;
              if ("automatic" === f || "manual" === f) c = !0
          });
          return c
      },
      bk = function(a) {
          if (!Vc(a)) return !1;
          var b = a.mode;
          return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
      },
      ck = function(a) {
          if (a) {
              if ("selectors" === a.mode || Vc(a.selectors)) return Yj(a.selectors);
              if ("auto_detect" === a.mode || Vc(a.auto_detect)) {
                  var b;
                  var c = a.auto_detect;
                  if (c) {
                      var d = Vj({
                              yc: !1,
                              zc: !1,
                              hd: c.exclude_element_selectors,
                              Wa: {
                                  email: !!c.email,
                                  phone: !!c.phone,
                                  address: !!c.address
                              }
                          }).elements,
                          e = {};
                      if (0 < d.length)
                          for (var f = 0; f < d.length; f++) {
                              var g = d[f];
                              if ("1" === g.type) {
                                  e.email = g.U;
                                  break
                              }
                          }
                      b = e
                  } else b = void 0;
                  return b
              }
          }
      };
  var gk = new function(a, b) {
      this.h = a;
      this.defaultValue = void 0 === b ? !1 : b
  }(1933);
  var hk = function(a) {
      hk[" "](a);
      return a
  };
  hk[" "] = function() {};
  var jk = function() {
      var a = ik,
          b = "th";
      if (a.th && a.hasOwnProperty(b)) return a.th;
      var c = new a;
      return a.th = c
  };
  var ik = function() {
      var a = {};
      this.h = function() {
          var b = gk.h,
              c = gk.defaultValue;
          return null != a[b] ? a[b] : c
      };
      this.m = function() {
          a[gk.h] = !0
      }
  };
  var kk = !1,
      lk = !1,
      mk = [],
      nk = {},
      ok = {},
      pk = {
          ad_storage: !1,
          ad_user_data: !1,
          ad_personalization: !1
      };

  function qk() {
      var a = lc("google_tag_data", {});
      a.ics || (a.ics = {
          entries: {},
          cps: {},
          default: rk,
          update: sk,
          declare: tk,
          implicit: uk,
          addListener: vk,
          notifyListeners: wk,
          setCps: xk,
          active: !1,
          usedDeclare: !1,
          usedDefault: !1,
          usedUpdate: !1,
          usedImplicit: !1,
          usedSetCps: !1,
          accessedDefault: !1,
          accessedAny: !1,
          wasSetLate: !1
      });
      return a.ics
  }

  function yk(a, b, c, d) {
      return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
  }

  function tk(a, b, c, d, e) {
      var f = qk();
      f.active = !0;
      f.usedDeclare = !0;
      var g = f.entries,
          h = g[a] || {},
          m = h.declare_region,
          n = c && k(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if (yk(n, m, d, e)) {
          var p = {
              region: h.region,
              declare_region: n,
              declare: "granted" === b,
              implicit: h.implicit,
              default: h.default,
              update: h.update,
              quiet: h.quiet
          };
          if ("" !== d || !1 !== h.declare) g[a] = p
      }
  }

  function uk(a, b) {
      var c = qk();
      c.active = !0;
      c.usedImplicit = !0;
      var d = c.entries,
          e = d[a] = d[a] || {};
      !1 !== e.implicit && (e.implicit = "granted" === b)
  }

  function rk(a, b, c, d, e, f) {
      var g = qk();
      g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
      g.active = !0;
      g.usedDefault = !0;
      xb("TAGGING", 19);
      if (void 0 == b) xb("TAGGING", 18);
      else {
          var h = g.entries,
              m = h[a] || {},
              n = m.region,
              p = c && k(c) ? c.toUpperCase() : void 0;
          d = d.toUpperCase();
          e = e.toUpperCase();
          if (yk(p, n, d, e)) {
              var q = !!(f && 0 < f && void 0 === m.update),
                  r = {
                      region: p,
                      declare_region: m.declare_region,
                      implicit: m.implicit,
                      default: "granted" === b,
                      declare: m.declare,
                      update: m.update,
                      quiet: q
                  };
              if ("" !== d || !1 !== m.default) h[a] =
                  r;
              q && z.setTimeout(function() {
                  if (h[a] === r && r.quiet) {
                      r.quiet = !1;
                      var t = [a];
                      if (si(4))
                          for (var u in nk) nk.hasOwnProperty(u) && nk[u] === a && t.push(u);
                      for (var v = 0; v < t.length; v++) zk(t[v]);
                      wk();
                      xb("TAGGING", 2)
                  }
              }, f)
          }
      }
  }

  function sk(a, b) {
      var c = qk();
      c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
      c.active = !0;
      c.usedUpdate = !0;
      if (void 0 != b) {
          var d = Ak(c, a),
              e = c.entries,
              f = e[a] = e[a] || {};
          f.update = "granted" === b;
          var g = Ak(c, a),
              h = [a];
          if (si(4))
              for (var m in nk) nk.hasOwnProperty(m) && nk[m] === a && h.push(m);
          if (f.quiet) {
              f.quiet = !1;
              for (var n = 0; n < h.length; n++) zk(h[n])
          } else if (g !== d)
              for (var p = 0; p < h.length; p++) zk(h[p])
      }
  }

  function Bk(a, b, c, d, e, f) {
      var g = a[b] || {},
          h = g.region,
          m = d && k(d) ? d.toUpperCase() : void 0;
      e = e.toUpperCase();
      f = f.toUpperCase();
      if (yk(m, h, e, f)) {
          var n = {
              enabled: "granted" === c,
              region: m
          };
          if ("" !== e || !1 !== g.enabled) return a[b] = n, !0
      }
      return !1
  }

  function xk(a, b, c, d, e) {
      var f = qk();
      Bk(f.cps, a, b, c, d, e) && (f.usedSetCps = !0)
  }

  function vk(a, b) {
      mk.push({
          consentTypes: a,
          Yk: b
      })
  }

  function zk(a) {
      for (var b = 0; b < mk.length; ++b) {
          var c = mk[b];
          Ka(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.Ij = !0)
      }
  }

  function wk(a, b) {
      for (var c = 0; c < mk.length; ++c) {
          var d = mk[c];
          if (d.Ij) {
              d.Ij = !1;
              try {
                  d.Yk({
                      consentEventId: a,
                      consentPriorityId: b
                  })
              } catch (e) {}
          }
      }
  }

  function Ak(a, b) {
      var c = a.entries,
          d = c[b] || {},
          e = d.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = d.default;
      if (void 0 !== e) return e ? 1 : 2;
      if (si(4) && nk.hasOwnProperty(b)) {
          var f = c[nk[b]] || {};
          e = f.update;
          if (void 0 !== e) return e ? 1 : 2;
          e = f.default;
          if (void 0 !== e) return e ? 1 : 2
      }
      e = d.declare;
      return void 0 !== e ? e ? 1 : 2 : si(4) && (e = d.implicit, void 0 !== e) ? e ? 3 : 4 : si(3) && pk.hasOwnProperty(b) ? pk[b] ? 3 : 4 : 0
  }
  var Ck = function(a) {
          var b = qk();
          b.accessedAny = !0;
          switch (Ak(b, a)) {
              case 1:
              case 3:
                  return !0;
              case 2:
              case 4:
                  return !1;
              default:
                  return !0
          }
      },
      Dk = function(a) {
          var b = qk();
          b.accessedDefault = !0;
          switch ((b.entries[a] || {}).default) {
              case !0:
                  return 3;
              case !1:
                  return 2;
              default:
                  return 1
          }
      },
      Ek = function(a) {
          var b = qk();
          b.accessedAny = !0;
          return !(b.entries[a] || {}).quiet
      },
      Fk = function() {
          if (!jk().h()) return !1;
          var a = qk();
          a.accessedAny = !0;
          return a.active
      },
      Gk = function() {
          var a = qk();
          a.accessedDefault = !0;
          return a.usedDefault
      },
      Hk = function(a,
          b) {
          qk().addListener(a, b)
      },
      Ik = function(a, b) {
          qk().notifyListeners(a, b)
      },
      Jk = function(a, b) {
          function c() {
              for (var e = 0; e < b.length; e++)
                  if (!Ek(b[e])) return !0;
              return !1
          }
          if (c()) {
              var d = !1;
              Hk(b, function(e) {
                  d || c() || (d = !0, a(e))
              })
          } else a({})
      },
      Kk = function(a, b) {
          function c() {
              for (var f = [], g = 0; g < d.length; g++) {
                  var h = d[g];
                  Ck(h) && !e[h] && (f.push(h), e[h] = !0)
              }
              return f
          }
          var d = k(b) ? [b] : b,
              e = {};
          c().length !== d.length && Hk(d, function(f) {
              var g = c();
              0 < g.length && (f.consentTypes = g, a(f))
          })
      };

  function Lk() {}

  function Mk() {};
  var Nk = [P.g.F, P.g.O, P.g.We, P.g.eg],
      Ok = {},
      Pk = (Ok[P.g.mi] = "a", Ok[P.g.oi] = "s", Ok[P.g.ri] = "y", Ok[P.g.ni] = "p", Ok),
      Qk = function(a) {
          for (var b = a[P.g.Ua], c = Array.isArray(b) ? b : [b], d = {
                  od: 0
              }; d.od < c.length; d = {
                  od: d.od
              }, ++d.od) l(a, function(e) {
              return function(f, g) {
                  if (f !== P.g.Ua) {
                      var h = c[e.od],
                          m = Gi(),
                          n = Hi();
                      lk = !0;
                      kk && xb("TAGGING", 20);
                      qk().declare(f, g, h, m, n)
                  }
              }
          }(d))
      },
      Rk = function(a) {
          var b = a[P.g.Ua];
          b && O(40);
          var c = a[P.g.Xe];
          c && O(41);
          for (var d = Ka(b) ? b : [b], e = {
                  pd: 0
              }; e.pd < d.length; e = {
                  pd: e.pd
              }, ++e.pd) l(a, function(f) {
              return function(g,
                  h) {
                  if (g !== P.g.Ua && g !== P.g.Xe) {
                      var m = d[f.pd],
                          n = Number(c),
                          p = Gi(),
                          q = Hi();
                      kk = !0;
                      lk && xb("TAGGING", 20);
                      qk().default(g, h, m, p, q, n)
                  }
              }
          }(e))
      },
      Sk = function(a, b) {
          l(a, function(c, d) {
              kk = !0;
              lk && xb("TAGGING", 20);
              qk().update(c, d)
          });
          Ik(b.eventId, b.priorityId)
      },
      Tk = function(a) {
          for (var b = a[P.g.Ua], c = Array.isArray(b) ? b : [b], d = {
                  rd: 0
              }; d.rd < c.length; d = {
                  rd: d.rd
              }, ++d.rd) l(a, function(e) {
              return function(f, g) {
                  if (f !== P.g.Ua) {
                      var h = c[e.rd],
                          m = Gi(),
                          n = Hi();
                      qk().setCps(f, g, h, m, n)
                  }
              }
          }(d))
      },
      Uk = function(a) {
          for (var b = a[P.g.Ua], c = Array.isArray(b) ?
                  b : [b], d = {
                      Gc: 0
                  }; d.Gc < c.length; d = {
                  Gc: d.Gc
              }, ++d.Gc) a.hasOwnProperty(P.g.ig) && l(Pk, function(e) {
              return function(f) {
                  Bk(ok, f, a[P.g.ig], c[e.Gc], Gi(), Hi())
              }
          }(d)), l(a, function(e) {
              return function(f, g) {
                  f !== P.g.Ua && f !== P.g.ig && Bk(ok, f, g, c[e.Gc], Gi(), Hi())
              }
          }(d))
      },
      Vk = function() {
          return Ck(P.g.We) ? Ji() || qk().usedSetCps : !1
      },
      Wk = function(a, b) {
          Hk(a, b)
      },
      Xk = function(a, b) {
          Kk(a, b)
      },
      Yk = function(a, b) {
          Jk(a, b)
      };
  var Zk = [P.g.F, P.g.O],
      $k = [P.g.F, P.g.O, P.g.We, P.g.eg],
      al = {},
      bl = (al[P.g.F] = 1, al[P.g.O] = 2, al),
      cl = {},
      dl = (cl[P.g.mi] = "a", cl[P.g.oi] = "s", cl[P.g.ri] = "y", cl[P.g.ni] = "p", cl),
      el = function() {
          var a = {},
              b;
          for (b in bl)
              if (bl.hasOwnProperty(b)) {
                  var c = bl[b],
                      d, e = qk();
                  e.accessedAny = !0;
                  d = Ak(e, b);
                  a[c] = d
              } var f = T(111) && Zk.every(Ck),
              g = T(104);
          return f || g ? qe(a, 1) : qe(a, 0)
      },
      fl = {},
      gl = (fl[P.g.F] = 0, fl[P.g.O] = 1, fl[P.g.We] = 2, fl[P.g.eg] = 3, fl);

  function hl(a) {
      switch (a) {
          case void 0:
              return 1;
          case !0:
              return 3;
          case !1:
              return 2;
          default:
              return 0
      }
  }
  var il = function() {
          if (T(106)) {
              for (var a = "1", b = 0; b < $k.length; b++) {
                  var c = a,
                      d, e = $k[b],
                      f = nk[e];
                  d = void 0 === f ? 0 : gl.hasOwnProperty(f) ? 12 | gl[f] : 8;
                  var g = qk();
                  g.accessedAny = !0;
                  var h = g.entries[e] || {};
                  d = d << 2 | hl(h.implicit);
                  a = c + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [d] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [hl(h.declare) << 4 | hl(h.default) << 2 | hl(h.update)])
              }
              return a
          }
          for (var m = "G1", n = 0; n < Zk.length; n++) switch (Dk(Zk[n])) {
              case 3:
                  m += "1";
                  break;
              case 2:
                  m += "0";
                  break;
              case 1:
                  m += "-"
          }
          return m
      },
      jl = function() {
          var a = qk(),
              b = a.cps,
              c = [],
              d;
          for (d in ok) ok.hasOwnProperty(d) && ok[d].enabled && (a.usedSetCps ? b.hasOwnProperty(d) && b[d].enabled && c.push(d) : c.push(d));
          for (var e = "", f = 0; f < c.length; f++) {
              var g = dl[c[f]];
              g && (e += g)
          }
          return "" === e ? "-" : e
      };
  var kl = function(a) {
      var b = 1,
          c, d, e;
      if (a)
          for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
      return b
  };
  var ll = function(a, b, c) {
      for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
          var g = e[f].split("="),
              h = g[0].replace(/^\s*|\s*$/g, "");
          if (h && h == a) {
              var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
              m && c && (m = decodeURIComponent(m));
              d.push(m)
          }
      }
      return d
  };
  var ml = function(a, b) {
          var c = function() {};
          c.prototype = a.prototype;
          var d = new c;
          a.apply(d, Array.prototype.slice.call(arguments, 1));
          return d
      },
      nl = function(a) {
          var b = a;
          return function() {
              if (b) {
                  var c = b;
                  b = null;
                  c()
              }
          }
      };

  function ol(a) {
      return "null" !== a.origin
  };
  var rl = function(a, b, c, d) {
          return pl(d) ? ll(a, String(b || ql()), c) : []
      },
      ul = function(a, b, c, d, e) {
          if (pl(e)) {
              var f = sl(a, d, e);
              if (1 === f.length) return f[0].id;
              if (0 !== f.length) {
                  f = tl(f, function(g) {
                      return g.Lf
                  }, b);
                  if (1 === f.length) return f[0].id;
                  f = tl(f, function(g) {
                      return g.Ge
                  }, c);
                  return f[0] ? f[0].id : void 0
              }
          }
      };

  function vl(a, b, c, d) {
      var e = ql(),
          f = window;
      ol(f) && (f.document.cookie = a);
      var g = ql();
      return e != g || void 0 != c && 0 <= rl(b, g, !1, d).indexOf(c)
  }
  var zl = function(a, b, c, d) {
          function e(w, x, y) {
              if (null == y) return delete h[x], w;
              h[x] = y;
              return w + "; " + x + "=" + y
          }

          function f(w, x) {
              if (null == x) return delete h[x], w;
              h[x] = !0;
              return w + "; " + x
          }
          if (!pl(c.Fb)) return 2;
          var g;
          void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = wl(b), g = a + "=" + b);
          var h = {};
          g = e(g, "path", c.path);
          var m;
          c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
          g = e(g, "expires", m);
          g = e(g, "max-age", c.Nl);
          g = e(g, "samesite",
              c.km);
          c.mm && (g = f(g, "secure"));
          var n = c.domain;
          if (n && "auto" === n.toLowerCase()) {
              for (var p = xl(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                  var u = "none" !== p[t] ? p[t] : void 0,
                      v = e(g, "domain", u);
                  v = f(v, c.flags);
                  try {
                      d && d(a, h)
                  } catch (w) {
                      q = w;
                      continue
                  }
                  r = !0;
                  if (!yl(u, c.path) && vl(v, a, b, c.Fb)) return 0
              }
              if (q && !r) throw q;
              return 1
          }
          n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
          g = f(g, c.flags);
          d && d(a, h);
          return yl(n, c.path) ? 1 : vl(g, a, b, c.Fb) ? 0 : 1
      },
      Al = function(a, b, c) {
          null == c.path && (c.path = "/");
          c.domain || (c.domain = "auto");
          return zl(a,
              b, c)
      };

  function tl(a, b, c) {
      for (var d = [], e = [], f, g = 0; g < a.length; g++) {
          var h = a[g],
              m = b(h);
          m === c ? d.push(h) : void 0 === f || m < f ? (e = [h], f = m) : m === f && e.push(h)
      }
      return 0 < d.length ? d : e
  }

  function sl(a, b, c) {
      for (var d = [], e = rl(a, void 0, void 0, c), f = 0; f < e.length; f++) {
          var g = e[f].split("."),
              h = g.shift();
          if (!b || -1 !== b.indexOf(h)) {
              var m = g.shift();
              m && (m = m.split("-"), d.push({
                  id: g.join("."),
                  Lf: 1 * m[0] || 1,
                  Ge: 1 * m[1] || 1
              }))
          }
      }
      return d
  }
  var wl = function(a) {
          a && 1200 < a.length && (a = a.substring(0, 1200));
          return a
      },
      Bl = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
      Cl = /(^|\.)doubleclick\.net$/i,
      yl = function(a, b) {
          return Cl.test( 'qa.testbs.net' ) || "/" === b && Bl.test(a) // window.document.location.hostname
      },
      ql = function() {
          return ol(window) ? window.document.cookie : ""
      },
      xl = function() {
          var a = [],
              b = 'qa.testbs.net'.split("."); // window.document.location.hostname
          if (4 === b.length) {
              var c = b[b.length - 1];
              if (parseInt(c, 10).toString() === c) return ["none"]
          }
          for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
          var e = 'qa.testbs.net'; // window.document.location.hostname
          Cl.test(e) || Bl.test(e) || a.push("none");
          return a
      },
      pl = function(a) {
          return jk().h() && a && Fk() ? Ek(a) ? Ck(a) : !1 : !0
      };
  var Dl = function(a) {
          var b = Math.round(2147483647 * Math.random());
          return a ? String(b ^ kl(a) & 2147483647) : String(b)
      },
      El = function(a) {
          return [Dl(a), Math.round(Va() / 1E3)].join(".")
      },
      Hl = function(a, b, c, d, e) {
          var f = Fl(b);
          return ul(a, f, Gl(c), d, e)
      },
      Il = function(a, b, c, d) {
          var e = "" + Fl(c),
              f = Gl(d);
          1 < f && (e += "-" + f);
          return [b, e, a].join(".")
      },
      Fl = function(a) {
          if (!a) return 1;
          a = 0 === a.indexOf(".") ? a.substr(1) : a;
          return a.split(".").length
      },
      Gl = function(a) {
          if (!a || "/" === a) return 1;
          "/" !== a[0] && (a = "/" + a);
          "/" !== a[a.length - 1] && (a += "/");
          return a.split("/").length -
              1
      };
  var Jl = function() {
      Mh.dedupe_gclid || (Mh.dedupe_gclid = "" + El());
      return Mh.dedupe_gclid
  };
  var Kl = function() {
      var a = !1;
      return a
  };
  var Ml = function(a, b) {
          var c = Ll();
          c.pending || (c.pending = []);
          La(c.pending, function(d) {
              return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
          }) || c.pending.push({
              target: a,
              onLoad: b
          })
      },
      Nl = function() {
          this.container = {};
          this.destination = {};
          this.canonical = {};
          this.pending = [];
          this.siloed = []
      },
      Ll = function() {
          var a = lc("google_tag_data", {}),
              b = a.tidr;
          b || (b = new Nl, a.tidr = b);
          return b
      };
  var Ol = {},
      Pl = !1,
      rf = {
          ctid: self.optyaGtagId,
          Jf: self.gtagUniqueKey2,
          Uf: self.optyaGtagId + '|' + self.gtagUniqueKey1,
          Hj: self.optyaGtagId
      };
  Ol.zf = Ra("");
  var Rl = function() {
          var a = rf.Uf ? rf.Uf.split("|") : [rf.ctid];
          return Pl ? a.map(Ql) : a
      },
      Tl = function() {
          var a = Sl();
          return Pl ? a.map(Ql) : a
      },
      Vl = function() {
          return Ul(rf.ctid)
      },
      Wl = function(a) {
          return a ? rf.Jf : Ul(rf.Jf || "_" + rf.ctid)
      },
      Sl = function() {
          return rf.Hj ? rf.Hj.split("|") : []
      },
      Xl = function(a) {
          var b = Ll();
          return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
      },
      Ul = function(a) {
          return T(138) ? Pl ? Ql(a) : a : a
      },
      Ql = function(a) {
          return T(138) ? "s_" + a : a
      },
      Yl = function() {
          if (T(138)) {
              var a = !1;
              if (a) {
                  var b = Ll();
                  if (b.siloed) {
                      for (var c = [], d = rf.Uf ? rf.Uf.split("|") : [rf.ctid], e = Sl(), f = {}, g = 0; g < b.siloed.length; f = {
                              wd: f.wd
                          }, g++) f.wd = b.siloed[g], !Pl && La(f.wd.isDestination ? e : d, function(h) {
                          return function(m) {
                              return m === h.wd.ctid
                          }
                      }(f)) ? Pl = !0 : c.push(f.wd);
                      b.siloed = c
                  }
              }
          }
      };

  function Zl() {
      var a = Ll();
      if (a.pending) {
          for (var b, c = [], d = !1, e = Rl(), f = Tl(), g = {}, h = 0; h < a.pending.length; g = {
                  Ic: g.Ic
              }, h++) g.Ic = a.pending[h], La(g.Ic.target.isDestination ? f : e, function(m) {
              return function(n) {
                  return n === m.Ic.target.ctid
              }
          }(g)) ? d || (b = g.Ic.onLoad, d = !0) : c.push(g.Ic);
          a.pending = c;
          if (b) try {
              b(Wl())
          } catch (m) {}
      }
  }
  var $l = function() {
          for (var a = Ll(), b = Rl(), c = 0; c < b.length; c++) {
              var d = a.container[b[c]];
              d ? (d.state = 2, d.containers = Rl(), d.destinations = Tl()) : a.container[b[c]] = {
                  state: 2,
                  containers: Rl(),
                  destinations: Tl()
              }
          }
          for (var e = Tl(), f = 0; f < e.length; f++) {
              var g = a.destination[e[f]];
              g && 0 === g.state && O(93);
              g ? (g.state = 2, g.containers = Rl(), g.destinations = Tl()) : a.destination[e[f]] = {
                  state: 2,
                  containers: Rl(),
                  destinations: Tl()
              }
          }
          T(132) && (a.canonical[Wl()] = {});
          Zl()
      },
      am = function(a) {
          return !!Ll().container[a]
      },
      bm = function() {
          return {
              ctid: Vl(),
              isDestination: Ol.zf
          }
      };

  function cm(a) {
      if (T(138)) {
          var b = Ll();
          (b.siloed = b.siloed || []).push(a)
      }
  }
  var dm = function() {
          var a = Ll().container,
              b;
          for (b in a)
              if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
          return !1
      },
      em = function() {
          var a = {};
          l(Ll().destination, function(b, c) {
              0 === c.state && (a[b] = c)
          });
          return a
      };
  var fm = {
          UA: 1,
          AW: 2,
          DC: 3,
          G: 4,
          GF: 5,
          GT: 12,
          GTM: 14,
          HA: 6,
          MC: 7
      },
      gm = function(a) {
          var b = rf.ctid.split("-")[0].toUpperCase(),
              c = {};
          c.ctid = rf.ctid;
          c.gm = Lh.ne;
          c.jm = Lh.ah;
          c.Kl = Ol.zf ? 2 : 1;
          Sh ? (c.Yf = fm[b], c.Yf || (c.Yf = 0)) : c.Yf = Yh ? 13 : 10;
          Wh ? c.Gh = 1 : Kl() ? c.Gh = 2 : c.Gh = 3;
          var d;
          var e = c.Yf,
              f = c.Gh;
          void 0 === e ? d = "" : (f || (f = 0), d = "" + gg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
          var g = c.Tm,
              h = 4 + d + (g ? "" + gg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
              m, n = c.jm;
          m = n &&
              fg.test(n) ? "" + gg(3, 2) + n : "";
          var p, q = c.gm;
          p = q ? "" + gg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
          var r;
          var t = c.ctid;
          if (t && a) {
              var u = t.split("-"),
                  v = u[0].toUpperCase();
              if ("GTM" !== v && "OPT" !== v) r = "";
              else {
                  var w = u[1];
                  r = "" + gg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Kl || 0) + w
              }
          } else r = "";
          return h + m + p + r
      };

  function hm(a, b) {
      if ("" === a) return b;
      var c = Number(a);
      return isNaN(c) ? b : c
  };
  var im = function(a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1)
  };

  function jm() {
      return Jb ? !!Qb && !!Qb.platform : !1
  }

  function km() {
      return Tb("iPhone") && !Tb("iPod") && !Tb("iPad")
  }

  function lm() {
      km() || Tb("iPad") || Tb("iPod")
  };
  Vb();
  Ub() || Tb("Trident") || Tb("MSIE");
  Tb("Edge");
  !Tb("Gecko") || -1 != Pb().toLowerCase().indexOf("webkit") && !Tb("Edge") || Tb("Trident") || Tb("MSIE") || Tb("Edge"); - 1 != Pb().toLowerCase().indexOf("webkit") && !Tb("Edge") && Tb("Mobile");
  jm() || Tb("Macintosh");
  jm() || Tb("Windows");
  (jm() ? "Linux" === Qb.platform : Tb("Linux")) || jm() || Tb("CrOS");
  var mm = sa.navigator || null;
  mm && (mm.appVersion || "").indexOf("X11");
  jm() || Tb("Android");
  km();
  Tb("iPad");
  Tb("iPod");
  lm();
  Pb().toLowerCase().indexOf("kaios");
  var nm = function(a, b, c, d) {
          for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
              var g = a.charCodeAt(e - 1);
              if (38 == g || 63 == g) {
                  var h = a.charCodeAt(e + f);
                  if (!h || 61 == h || 38 == h || 35 == h) return e
              }
              e += f + 1
          }
          return -1
      },
      om = /#|$/,
      pm = function(a, b) {
          var c = a.search(om),
              d = nm(a, 0, b, c);
          if (0 > d) return null;
          var e = a.indexOf("&", d);
          if (0 > e || e > c) e = c;
          d += b.length + 1;
          return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
      },
      qm = /[?&]($|#)/,
      rm = function(a, b, c) {
          for (var d, e = a.search(om), f = 0, g, h = []; 0 <= (g = nm(a, f, b, e));) h.push(a.substring(f,
              g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
          h.push(a.slice(f));
          d = h.join("").replace(qm, "$1");
          var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
          var p = b + n;
          if (p) {
              var q, r = d.indexOf("#");
              0 > r && (r = d.length);
              var t = d.indexOf("?"),
                  u;
              0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
              q = [d.slice(0, t), u, d.slice(r)];
              var v = q[1];
              q[1] = p ? v ? v + "&" + p : p : v;
              m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
          } else m = d;
          return m
      };
  var sm = function(a) {
          try {
              var b;
              if (b = !!a && null != 'https://qa.testbs.net/en/') a: { // a.location.href
                  try {
                      hk(a.foo);
                      b = !0;
                      break a
                  } catch (c) {}
                  b = !1
              }
              return b
          } catch (c) {
              return !1
          }
      },
      tm = function(a, b) {
          if (a)
              for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
      };

  function um(a) {
      if (!a || !G.head) return null;
      var b = vm("META");
      G.head.appendChild(b);
      b.httpEquiv = "origin-trial";
      b.content = a;
      return b
  }
  var wm = function() {
          if (z.top == z) return 0;
          var a = z.location.ancestorOrigins;
          return a ? a[a.length - 1] == 'https://qa.testbs.net' ? 1 : 2 : sm(z.top) ? 1 : 2 // z.location.origin
      },
      vm = function(a, b) {
          b = void 0 === b ? document : b;
          return b.createElement(String(a).toLowerCase())
      };

  function xm(a, b, c, d) {
      d = void 0 === d ? !1 : d;
      a.google_image_requests || (a.google_image_requests = []);
      var e = vm("IMG", a.document);
      if (c) {
          var f = function() {
              if (c) {
                  var g = a.google_image_requests,
                      h = Ab(g, e);
                  0 <= h && Array.prototype.splice.call(g, h, 1)
              }
              e.removeEventListener && e.removeEventListener("load", f, !1);
              e.removeEventListener && e.removeEventListener("error", f, !1)
          };
          im(e, "load", f);
          im(e, "error", f)
      }
      d && (e.attributionSrc = "");
      e.src = b;
      a.google_image_requests.push(e)
  }
  var Qm = function(a) {
          var b;
          b = void 0 === b ? !1 : b;
          var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
          tm(a, function(d, e) {
              if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
          });
          Pm(c, b)
      },
      Pm = function(a, b) {
          var c = window,
              d;
          b = void 0 === b ? !1 : b;
          d = void 0 === d ? !1 : d;
          if (c.fetch) {
              var e = {
                  keepalive: !0,
                  credentials: "include",
                  redirect: "follow",
                  method: "get",
                  mode: "no-cors"
              };
              d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                      eventSourceEligible: "true",
                      triggerEligible: "false"
                  } :
                  e.headers = {
                      "Attribution-Reporting-Eligible": "event-source"
                  });
              c.fetch(a, e)
          } else xm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
      };
  var Rm = function() {};
  var Sm = function(a) {
          void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
          void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
          return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
      },
      Tm = function(a, b) {
          b = void 0 === b ? {} : b;
          this.m = a;
          this.h = null;
          this.J = {};
          this.rb = 0;
          var c;
          this.R = null != (c = b.zm) ? c : 500;
          var d;
          this.C = null != (d = b.Um) ? d : !1;
          this.B = null
      };
  ra(Tm, Rm);
  Tm.prototype.addEventListener = function(a) {
      var b = this,
          c = {
              internalBlockOnErrors: this.C
          },
          d = nl(function() {
              return a(c)
          }),
          e = 0; - 1 !== this.R && (e = setTimeout(function() {
          c.tcString = "tcunavailable";
          c.internalErrorState = 1;
          d()
      }, this.R));
      var f = function(g, h) {
          clearTimeout(e);
          g ? (c = g, c.internalErrorState = Sm(c), c.internalBlockOnErrors = b.C, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
          a(c)
      };
      try {
          Um(this, "addEventListener", f)
      } catch (g) {
          c.tcString =
              "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
      }
  };
  Tm.prototype.removeEventListener = function(a) {
      a && a.listenerId && Um(this, "removeEventListener", null, a.listenerId)
  };
  var Wm = function(a, b, c) {
          var d;
          d = void 0 === d ? "755" : d;
          var e;
          a: {
              if (a.publisher && a.publisher.restrictions) {
                  var f = a.publisher.restrictions[b];
                  if (void 0 !== f) {
                      e = f[void 0 === d ? "755" : d];
                      break a
                  }
              }
              e = void 0
          }
          var g = e;
          if (0 === g) return !1;
          var h = c;
          2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
          var m;
          if (0 === h)
              if (a.purpose && a.vendor) {
                  var n = Vm(a.vendor.consents, void 0 === d ? "755" : d);
                  m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Vm(a.purpose.consents, b)
              } else m = !0;
          else m = 1 === h ? a.purpose && a.vendor ? Vm(a.purpose.legitimateInterests,
              b) && Vm(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
          return m
      },
      Vm = function(a, b) {
          return !(!a || !a[b])
      },
      Um = function(a, b, c, d) {
          c || (c = function() {});
          if ("function" === typeof a.m.__tcfapi) {
              var e = a.m.__tcfapi;
              e(b, 2, c, d)
          } else if (Xm(a)) {
              Ym(a);
              var f = ++a.rb;
              a.J[f] = c;
              if (a.h) {
                  var g = {};
                  a.h.postMessage((g.__tcfapiCall = {
                      command: b,
                      version: 2,
                      callId: f,
                      parameter: d
                  }, g), "*")
              }
          } else c({}, !1)
      },
      Xm = function(a) {
          if (a.h) return a.h;
          var b;
          a: {
              for (var c = a.m, d = 0; 50 > d; ++d) {
                  var e;
                  try {
                      e = !(!c.frames || !c.frames.__tcfapiLocator)
                  } catch (h) {
                      e = !1
                  }
                  if (e) {
                      b = c;
                      break a
                  }
                  var f;
                  b: {
                      try {
                          var g = c.parent;
                          if (g && g != c) {
                              f = g;
                              break b
                          }
                      } catch (h) {}
                      f = null
                  }
                  if (!(c = f)) break
              }
              b = null
          }
          a.h = b;
          return a.h
      },
      Ym = function(a) {
          a.B || (a.B = function(b) {
              try {
                  var c;
                  c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                  a.J[c.callId](c.returnValue, c.success)
              } catch (d) {}
          }, im(a.m, "message", a.B))
      },
      Zm = function(a) {
          if (!1 === a.gdprApplies) return !0;
          void 0 === a.internalErrorState && (a.internalErrorState = Sm(a));
          return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
              (Qm({
                  e: String(a.internalErrorState)
              }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
      };
  var $m = {
          1: 0,
          3: 0,
          4: 0,
          7: 3,
          9: 3,
          10: 3
      },
      an = hm('', 500);

  function bn() {
      var a = Mh.tcf || {};
      return Mh.tcf = a
  }
  var hn = function() {
      var a = bn(),
          b = new Tm(z, {
              zm: -1
          });
      cn(b) && dn() && O(124);
      if (!dn() && !a.active && cn(b)) {
          a.active = !0;
          a.Vf = {};
          en();
          a.tcString = "tcunavailable";
          try {
              b.addEventListener(function(c) {
                  if (0 !== c.internalErrorState) fn(a), gn(a);
                  else {
                      var d;
                      a.gdprApplies = c.gdprApplies;
                      if (!1 === c.gdprApplies) {
                          var e = {},
                              f;
                          for (f in $m) $m.hasOwnProperty(f) && (e[f] = !0);
                          d = e;
                          b.removeEventListener(c)
                      } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                          var g = {},
                              h;
                          for (h in $m)
                              if ($m.hasOwnProperty(h))
                                  if ("1" ===
                                      h) {
                                      var m, n = c,
                                          p = !0;
                                      p = void 0 === p ? !1 : p;
                                      m = Zm(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Wm(n, "1", 0) : !1;
                                      g["1"] = m
                                  } else g[h] = Wm(c, h, $m[h]);
                          d = g
                      }
                      d && (a.tcString = c.tcString || "tcempty", a.Vf = d, gn(a))
                  }
              })
          } catch (c) {
              fn(a), gn(a)
          }
      }
  };

  function fn(a) {
      a.type = "e";
      a.tcString = "tcunavailable"
  }

  function en() {
      var a = {},
          b = (a.ad_storage = "denied", a.wait_for_update = an, a);
      Rk(b)
  }

  function cn(a) {
      return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != Xm(a) ? !0 : !1
  }
  var dn = function() {
      return !0 !== z.gtag_enable_tcf_support
  };

  function gn(a) {
      var b = {},
          c = (b.ad_storage = a.Vf["1"] ? "granted" : "denied", b);
      Sk(c, {
          eventId: 0
      }, {
          gdprApplies: a ? a.gdprApplies : void 0,
          tcString: jn()
      })
  }
  var jn = function() {
          var a = bn();
          return a.active ? a.tcString || "" : ""
      },
      kn = function() {
          var a = bn();
          return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
      },
      ln = function(a) {
          if (!$m.hasOwnProperty(String(a))) return !0;
          var b = bn();
          return b.active && b.Vf ? !!b.Vf[String(a)] : !0
      };
  var mn = function(a) {
          var b = String(a[re.Sb] || "").replace(/_/g, "");
          0 === b.indexOf("cvt") && (b = "cvt");
          return b
      },
      nn = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
  var on = {
          sampleRate: "0.005000",
          Wj: "",
          Vj: Number("5"),
          bn: Number("")
      },
      pn = [];

  function qn(a) {
      pn.push(a)
  }
  var rn = !1,
      sn;
  if (!(sn = nn)) {
      var tn = Math.random(),
          un = on.sampleRate;
      sn = tn < Number(un)
  }
  var vn = sn,
      wn = "https://www.googletagmanager.com/a?id=" + rf.ctid,
      xn = void 0,
      yn = {},
      zn = void 0,
      An = new function() {
          var a = 5;
          0 < on.Vj && (a = on.Vj);
          this.h = 0;
          this.B = [];
          this.m = a
      },
      Bn = 1E3;

  function Cn(a) {
      var b = xn;
      if (void 0 === b) return "";
      for (var c = [wn], d = 0; d < pn.length; d++) {
          var e = pn[d]({
              eventId: b,
              Xb: !!a,
              Pj: function() {
                  rn = !0
              }
          });
          "&" === e[0] && c.push(e)
      }
      c.push("&z=0");
      return c.join("")
  }

  function Dn() {
      zn && (z.clearTimeout(zn), zn = void 0);
      if (void 0 !== xn && En) {
          var a;
          (a = yn[xn]) || (a = An.h < An.m ? !1 : 1E3 > Va() - An.B[An.h % An.m]);
          if (a || 0 >= Bn--) O(1), yn[xn] = !0;
          else {
              var b = An.h++ % An.m;
              An.B[b] = Va();
              var c = Cn(!0);
              tc(c);
              if (rn) {
                  var d = c.replace("/a?", "/td?");
                  tc(d)
              }
              En = rn = !1
          }
      }
  }
  var En = !1;

  function Fn(a) {
      yn[a] || (a !== xn && (Dn(), xn = a), En = !0, zn || (zn = z.setTimeout(Dn, 500)), 2022 <= Cn().length && Dn())
  }
  var Gn = Ma();

  function Hn() {
      Gn = Ma()
  }

  function In() {
      return ["&v=3&t=t", "&pid=" + Gn].join("")
  };
  var Jn = void 0;

  function Kn(a) {
      var b = "";
      return b
  };
  var Ln = function(a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
      }
      return b
  };
  Wb();
  km() || Tb("iPod");
  Tb("iPad");
  !Tb("Android") || Xb() || Wb() || Vb() || Tb("Silk");
  Xb();
  !Tb("Safari") || Xb() || (Ub() ? 0 : Tb("Coast")) || Vb() || (Ub() ? 0 : Tb("Edge")) || (Ub() ? Sb("Microsoft Edge") : Tb("Edg/")) || (Ub() ? Sb("Opera") : Tb("OPR")) || Wb() || Tb("Silk") || Tb("Android") || lm();
  var Mn = {},
      Nn = null,
      On = function(a) {
          for (var b = [], c = 0, d = 0; d < a.length; d++) {
              var e = a.charCodeAt(d);
              255 < e && (b[c++] = e & 255, e >>= 8);
              b[c++] = e
          }
          var f = 4;
          void 0 === f && (f = 0);
          if (!Nn) {
              Nn = {};
              for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                  var n = g.concat(h[m].split(""));
                  Mn[m] = n;
                  for (var p = 0; p < n.length; p++) {
                      var q = n[p];
                      void 0 === Nn[q] && (Nn[q] = p)
                  }
              }
          }
          for (var r = Mn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
              var x = b[v],
                  y = b[v + 1],
                  A = b[v + 2],
                  B = r[x >> 2],
                  D = r[(x & 3) << 4 | y >> 4],
                  F = r[(y & 15) << 2 | A >> 6],
                  K = r[A & 63];
              t[w++] = "" + B + D + F + K
          }
          var H = 0,
              N = u;
          switch (b.length - v) {
              case 2:
                  H = b[v + 1], N = r[(H & 15) << 2] || u;
              case 1:
                  var Q = b[v];
                  t[w] = "" + r[Q >> 2] + r[(Q & 3) << 4 | H >> 4] + N + u
          }
          return t.join("")
      };
  var Pn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

  function Qn(a) {
      var b;
      return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
  }

  function Rn() {
      var a = z.google_tag_data,
          b;
      if (null != a && a.uach) {
          var c = a.uach,
              d = Object.assign({}, c);
          c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
          b = d
      } else b = null;
      return b
  }

  function Sn() {
      var a, b;
      return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
  }

  function Tn(a) {
      var b, c;
      return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
  }

  function Un() {
      var a = z;
      if (!Tn(a)) return null;
      var b = Qn(a);
      if (b.uach_promise) return b.uach_promise;
      var c = a.navigator.userAgentData.getHighEntropyValues(Pn).then(function(d) {
          null != b.uach || (b.uach = d);
          return d
      });
      return b.uach_promise = c
  };
  var Vn, Wn = function() {
          if (Tn(z) && (Vn = Va(), !Sn())) {
              var a = Un();
              a && (a.then(function() {
                  O(95);
              }), a.catch(function() {
                  O(96)
              }))
          }
      },
      Yn = function(a) {
          var b = Xn.Dm,
              c = function(g, h) {
                  try {
                      a(g, h)
                  } catch (m) {}
              },
              d = Rn();
          if (d) c(d);
          else {
              var e = Sn();
              if (e) {
                  b =
                      Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                  var f = z.setTimeout(function() {
                      c.De || (c.De = !0, O(106), c(null, Error("Timeout")))
                  }, b);
                  e.then(function(g) {
                      c.De || (c.De = !0, O(104), z.clearTimeout(f), c(g))
                  }).catch(function(g) {
                      c.De || (c.De = !0, O(105), z.clearTimeout(f), c(null, g))
                  })
              } else c(null)
          }
      },
      Zn = function(a, b) {
          a && (b.m[P.g.Xd] = a.architecture, b.m[P.g.Yd] = a.bitness, a.fullVersionList && (b.m[P.g.Zd] = a.fullVersionList.map(function(c) {
                  return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
              }).join("|")),
              b.m[P.g.ae] = a.mobile ? "1" : "0", b.m[P.g.be] = a.model, b.m[P.g.ce] = a.platform, b.m[P.g.de] = a.platformVersion, b.m[P.g.ee] = a.wow64 ? "1" : "0")
      };

  function $n(a, b, c, d) {
      var e, f = Number(null != a.Db ? a.Db : void 0);
      0 !== f && (e = new Date((b || Va()) + 1E3 * (f || 7776E3)));
      return {
          path: a.path,
          domain: a.domain,
          flags: a.flags,
          encode: !!c,
          expires: e,
          Fb: d
      }
  };
  var ao;
  var fo = function() {
          var a = bo,
              b = co,
              c = eo(),
              d = function(g) {
                  a(g.target || g.srcElement || {})
              },
              e = function(g) {
                  b(g.target || g.srcElement || {})
              };
          if (!c.init) {
              uc(G, "mousedown", d);
              uc(G, "keyup", d);
              uc(G, "submit", e);
              var f = HTMLFormElement.prototype.submit;
              HTMLFormElement.prototype.submit = function() {
                  b(this);
                  f.call(this)
              };
              c.init = !0
          }
      },
      go = function(a, b, c, d, e) {
          var f = {
              callback: a,
              domains: b,
              fragment: 2 === c,
              placement: c,
              forms: d,
              sameHost: e
          };
          eo().decorators.push(f)
      },
      ho = function(a, b, c) {
          for (var d = eo().decorators, e = {}, f = 0; f < d.length; ++f) {
              var g =
                  d[f],
                  h;
              if (h = !c || g.forms) a: {
                  var m = g.domains,
                      n = a,
                      p = !!g.sameHost;
                  if (m && (p || n !== 'qa.testbs.net' )) // G.location.hostname
                      for (var q = 0; q < m.length; q++)
                          if (m[q] instanceof RegExp) {
                              if (m[q].test(n)) {
                                  h = !0;
                                  break a
                              }
                          } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                      h = !0;
                      break a
                  }
                  h = !1
              }
              if (h) {
                  var r = g.placement;
                  void 0 == r && (r = g.fragment ? 2 : 1);
                  r === b && Ya(e, g.callback())
              }
          }
          return e
      };

  function eo() {
      var a = lc("google_tag_data", {}),
          b = a.gl;
      b && b.decorators || (b = {
          decorators: []
      }, a.gl = b);
      return b
  };
  var io = /(.*?)\*(.*?)\*(.*)/,
      jo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
      ko = /^(?:www\.|m\.|amp\.)+/,
      lo = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function mo(a) {
      return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
  }
  var oo = function(a) {
      var b = [],
          c;
      for (c in a)
          if (a.hasOwnProperty(c)) {
              var d = a[c];
              void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(ub(String(d))))
          } var e = b.join("*");
      return ["1", no(e), e].join("*")
  };

  function no(a, b) {
      var c = [jc.userAgent, (new Date).getTimezoneOffset(), jc.userLanguage || jc.language, Math.floor(Va() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
          d;
      if (!(d = ao)) {
          for (var e = Array(256), f = 0; 256 > f; f++) {
              for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
              e[f] = g
          }
          d = e
      }
      ao = d;
      for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ ao[(m ^ c.charCodeAt(n)) & 255];
      return ((m ^ -1) >>> 0).toString(36)
  }

  function po() {
      return function(a) {
          var b = hj( 'https://qa.testbs.net/en/' ), // z.location.href
              c = b.search.replace("?", ""),
              d = cj(c, "_gl", !1, !0) || "";
          a.query = qo(d) || {};
          var e = fj(b, "fragment").match(mo("_gl"));
          a.fragment = qo(e && e[3] || "") || {}
      }
  }

  function ro(a, b) {
      var c = mo(a).exec(b),
          d = b;
      if (c) {
          var e = c[2],
              f = c[4];
          d = c[1];
          f && (d = d + e + f)
      }
      return d
  }
  var so = function(a, b) {
          b || (b = "_gl");
          var c = lo.exec(a);
          if (!c) return "";
          var d = c[1],
              e = ro(b, (c[2] || "").slice(1)),
              f = ro(b, (c[3] || "").slice(1));
          e.length && (e = "?" + e);
          f.length && (f = "#" + f);
          return "" + d + e + f
      },
      to = function(a) {
          var b = po(),
              c = eo();
          c.data || (c.data = {
              query: {},
              fragment: {}
          }, b(c.data));
          var d = {},
              e = c.data;
          e && (Ya(d, e.query), a && Ya(d, e.fragment));
          return d
      },
      qo = function(a) {
          try {
              var b = uo(a, 3);
              if (void 0 !== b) {
                  for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                      var f = d[e],
                          g = vb(d[e + 1]);
                      c[f] = g
                  }
                  xb("TAGGING", 6);
                  return c
              }
          } catch (h) {
              xb("TAGGING",
                  8)
          }
      };

  function uo(a, b) {
      if (a) {
          var c;
          a: {
              for (var d = a, e = 0; 3 > e; ++e) {
                  var f = io.exec(d);
                  if (f) {
                      c = f;
                      break a
                  }
                  d = decodeURIComponent(d)
              }
              c = void 0
          }
          var g = c;
          if (g && "1" === g[1]) {
              var h = g[3],
                  m;
              a: {
                  for (var n = g[2], p = 0; p < b; ++p)
                      if (n === no(h, p)) {
                          m = !0;
                          break a
                      } m = !1
              }
              if (m) return h;
              xb("TAGGING", 7)
          }
      }
  }

  function vo(a, b, c, d) {
      function e(p) {
          p = ro(a, p);
          var q = p.charAt(p.length - 1);
          p && "&" !== q && (p += "&");
          return p + n
      }
      d = void 0 === d ? !1 : d;
      var f = lo.exec(c);
      if (!f) return "";
      var g = f[1],
          h = f[2] || "",
          m = f[3] || "",
          n = a + "=" + b;
      d ? m = "#" + e(m.substring(1)) : h = "?" + e(h.substring(1));
      return "" + g + h + m
  }

  function wo(a, b) {
      var c = "FORM" === (a.tagName || "").toUpperCase(),
          d = ho(b, 1, c),
          e = ho(b, 2, c),
          f = ho(b, 3, c);
      if (Za(d)) {
          var g = oo(d);
          c ? xo("_gl", g, a) : yo("_gl", g, a, !1)
      }
      if (!c && Za(e)) {
          var h = oo(e);
          yo("_gl", h, a, !0)
      }
      for (var m in f)
          if (f.hasOwnProperty(m)) a: {
              var n = m,
                  p = f[m],
                  q = a;
              if (q.tagName) {
                  if ("a" === q.tagName.toLowerCase()) {
                      yo(n, p, q);
                      break a
                  }
                  if ("form" === q.tagName.toLowerCase()) {
                      xo(n, p, q);
                      break a
                  }
              }
              "string" == typeof q && vo(n, p, q)
          }
  }

  function yo(a, b, c, d) {
      if (c.href) {
          var e = vo(a, b, c.href, void 0 === d ? !1 : d);
          Ib.test(e) && (c.href = e)
      }
  }

  function xo(a, b, c) {
      if (c && c.action) {
          var d = (c.method || "").toLowerCase();
          if ("get" === d) {
              for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                  var h = e[g];
                  if (h.name === a) {
                      h.setAttribute("value", b);
                      f = !0;
                      break
                  }
              }
              if (!f) {
                  var m = G.createElement("input");
                  m.setAttribute("type", "hidden");
                  m.setAttribute("name", a);
                  m.setAttribute("value", b);
                  c.appendChild(m)
              }
          } else if ("post" === d) {
              var n = vo(a, b, c.action);
              Ib.test(n) && (c.action = n)
          }
      }
  }

  function bo(a) {
      try {
          var b;
          a: {
              for (var c = a, d = 100; c && 0 < d;) {
                  if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                      b = c;
                      break a
                  }
                  c = c.parentNode;
                  d--
              }
              b = null
          }
          var e = b;
          if (e) {
              var f = "https:"; // e.protocol
              "http:" !== f && "https:" !== f || wo(e, e.hostname)
          }
      } catch (g) {}
  }

  function co(a) {
      try {
          if (a.action) {
              var b = fj(hj(a.action), "host");
              wo(a, b)
          }
      } catch (c) {}
  }
  var zo = function(a, b, c, d) {
          fo();
          go(a, b, "fragment" === c ? 2 : 1, !!d, !1)
      },
      Ao = function(a, b) {
          fo();
          go(a, [ej(z.location, "host", !0)], b, !0, !0)
      },
      Bo = function() {
          var a = 'qa.testbs.net', // G.location.hostname
              b = jo.exec(G.referrer);
          if (!b) return !1;
          var c = b[2],
              d = b[1],
              e = "";
          if (c) {
              var f = c.split("/"),
                  g = f[1];
              e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
          } else if (d) {
              if (0 === d.indexOf("xn--")) return !1;
              e = d.replace(/-/g, ".").replace(/\.\./g, "-")
          }
          var h = a.replace(ko, ""),
              m = e.replace(ko, ""),
              n;
          if (!(n = h === m)) {
              var p = "." + m;
              n = h.substring(h.length - p.length,
                  h.length) === p
          }
          return n
      },
      Co = function(a, b) {
          return !1 === a ? !1 : a || b || Bo()
      };
  var Do = ["1"],
      Eo = {},
      Fo = {},
      Ho = function(a) {
          return Eo[Go(a)]
      },
      Lo = function(a, b) {
          b = void 0 === b ? !0 : b;
          var c = Go(a.prefix);
          if (!Eo[c])
              if (Io(c, a.path, a.domain)) {
                  if (si(1)) {
                      var d = Fo[Go(a.prefix)];
                      Jo(a, d ? d.id : void 0, d ? d.Dh : void 0)
                  }
              } else {
                  var e = jj("auiddc");
                  if (e) xb("TAGGING", 17), Eo[c] = e;
                  else if (b) {
                      var f = Go(a.prefix),
                          g = El();
                      if (0 === Ko(f, g, a)) {
                          var h = lc("google_tag_data", {});
                          h._gcl_au || (h._gcl_au = g)
                      }
                      Io(c, a.path, a.domain)
                  }
              }
      };

  function Jo(a, b, c) {
      var d = Go(a.prefix),
          e = Eo[d];
      if (e) {
          var f = e.split(".");
          if (2 === f.length) {
              var g = Number(f[1]) || 0;
              if (g) {
                  var h = e;
                  b && (h = e + "." + b + "." + (c ? c : Math.floor(Va() / 1E3)));
                  Ko(d, h, a, 1E3 * g)
              }
          }
      }
  }

  function Ko(a, b, c, d) {
      var e = Il(b, "1", c.domain, c.path),
          f = $n(c, d);
      f.Fb = "ad_storage";
      return Al(a, e, f)
  }

  function Io(a, b, c) {
      var d = Hl(a, b, c, Do, "ad_storage");
      if (!d) return !1;
      Mo(a, d);
      return !0
  }

  function Mo(a, b) {
      var c = b.split(".");
      5 === c.length ? (Eo[a] = c.slice(0, 2).join("."), Fo[a] = {
          id: c.slice(2, 4).join("."),
          Dh: Number(c[4]) || 0
      }) : 3 === c.length ? Fo[a] = {
          id: c.slice(0, 2).join("."),
          Dh: Number(c[2]) || 0
      } : Eo[a] = b
  }

  function Go(a) {
      return (a || "_gcl") + "_au"
  }

  function No(a) {
      Fk() ? Jk(function() {
          Ck("ad_storage") ? a() : Kk(a, "ad_storage")
      }, ["ad_storage"]) : a()
  }

  function Oo(a) {
      var b = to(!0),
          c = Go(a.prefix);
      No(function() {
          var d = b[c];
          if (d) {
              Mo(c, d);
              var e = 1E3 * Number(Eo[c].split(".")[1]);
              if (e) {
                  xb("TAGGING", 16);
                  var f = $n(a, e);
                  f.Fb = "ad_storage";
                  var g = Il(d, "1", a.domain, a.path);
                  Al(c, g, f)
              }
          }
      })
  }

  function Po(a, b, c, d, e) {
      e = e || {};
      var f = function() {
          var g = {},
              h = Hl(a, e.path, e.domain, Do, "ad_storage");
          h && (g[a] = h);
          return g
      };
      No(function() {
          zo(f, b, c, d)
      })
  };
  var Qo = function(a) {
      for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
          var f = c[e].match(d);
          f && b.push({
              Yh: f[1],
              value: f[2],
              timestamp: Number(f[2].split(".")[1]) || 0
          })
      }
      b.sort(function(g, h) {
          return h.timestamp - g.timestamp
      });
      return b
  };

  function Ro(a, b) {
      var c = Qo(a),
          d = {};
      if (!c || !c.length) return d;
      for (var e = 0; e < c.length; e++) {
          var f = c[e].value.split(".");
          if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
              d[c[e].Yh] || (d[c[e].Yh] = []);
              var g = {
                  version: f[0],
                  timestamp: 1E3 * Number(f[1]),
                  fa: f[2]
              };
              b && 3 < f.length && (g.labels = f.slice(3));
              d[c[e].Yh].push(g)
          }
      }
      return d
  };
  var So = /^\w+$/,
      To = /^[\w-]+$/,
      Uo = {
          aw: "_aw",
          dc: "_dc",
          gf: "_gf",
          ha: "_ha",
          gp: "_gp",
          gb: "_gb"
      },
      Vo = function() {
          return jk().h() && Fk() ? Ck("ad_storage") : !0
      },
      Wo = function(a, b) {
          Ek("ad_storage") ? Vo() ? a() : Kk(a, "ad_storage") : b ? xb("TAGGING", 3) : Jk(function() {
              Wo(a, !0)
          }, ["ad_storage"])
      },
      Yo = function(a) {
          return Xo(a).map(function(b) {
              return b.fa
          })
      },
      Xo = function(a) {
          var b = [];
          if (!ol(z) || !G.cookie) return b;
          var c = rl(a, G.cookie, void 0, "ad_storage");
          if (!c || 0 == c.length) return b;
          for (var d = {}, e = 0; e < c.length; d = {
                  Qe: d.Qe
              }, e++) {
              var f = Zo(c[e]);
              if (null != f) {
                  var g = f,
                      h = g.version;
                  d.Qe = g.fa;
                  var m = g.timestamp,
                      n = g.labels,
                      p = La(b, function(q) {
                          return function(r) {
                              return r.fa === q.Qe
                          }
                      }(d));
                  p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = $o(p.labels, n || [])) : b.push({
                      version: h,
                      fa: d.Qe,
                      timestamp: m,
                      labels: n
                  })
              }
          }
          b.sort(function(q, r) {
              return r.timestamp - q.timestamp
          });
          return ap(b)
      };

  function $o(a, b) {
      for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
      for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
      return d
  }

  function bp(a) {
      return a && "string" == typeof a && a.match(So) ? a : "_gcl"
  }
  var dp = function() {
          var a = hj( 'https://qa.testbs.net/en/' ), // z.location.href
              b = fj(a, "query", !1, void 0, "gclid"),
              c = fj(a, "query", !1, void 0, "gclsrc"),
              d = fj(a, "query", !1, void 0, "wbraid"),
              e = fj(a, "query", !1, void 0, "dclid");
          if (!b || !c || !d) {
              var f = a.hash.replace("#", "");
              b = b || cj(f, "gclid", !1);
              c = c || cj(f, "gclsrc", !1);
              d = d || cj(f, "wbraid", !1)
          }
          return cp(b, c, e, d)
      },
      cp = function(a, b, c, d) {
          var e = {},
              f = function(g, h) {
                  e[h] || (e[h] = []);
                  e[h].push(g)
              };
          e.gclid = a;
          e.gclsrc = b;
          e.dclid = c;
          void 0 !== d && To.test(d) && (e.gbraid = d, f(d, "gb"));
          if (void 0 !== a && a.match(To)) switch (b) {
              case void 0:
                  f(a,
                      "aw");
                  break;
              case "aw.ds":
                  f(a, "aw");
                  f(a, "dc");
                  break;
              case "ds":
                  f(a, "dc");
                  break;
              case "3p.ds":
                  f(a, "dc");
                  break;
              case "gf":
                  f(a, "gf");
                  break;
              case "ha":
                  f(a, "ha")
          }
          c && f(c, "dc");
          return e
      },
      fp = function(a) {
          var b = dp();
          Wo(function() {
              ep(b, !1, a)
          })
      };

  function ep(a, b, c, d, e) {
      function f(w, x) {
          var y = gp(w, g);
          y && (Al(y, x, h), m = !0)
      }
      c = c || {};
      e = e || [];
      var g = bp(c.prefix);
      d = d || Va();
      var h = $n(c, d, !0);
      h.Fb = "ad_storage";
      var m = !1,
          n = Math.round(d / 1E3),
          p = function(w) {
              var x = ["GCL", n, w];
              0 < e.length && x.push(e.join("."));
              return x.join(".")
          };
      a.aw && f("aw", p(a.aw[0]));
      a.dc && f("dc", p(a.dc[0]));
      a.gf && f("gf", p(a.gf[0]));
      a.ha && f("ha", p(a.ha[0]));
      a.gp && f("gp", p(a.gp[0]));
      if (!m && a.gb) {
          var q = a.gb[0],
              r = gp("gb", g),
              t = !1;
          if (!b)
              for (var u = Xo(r), v = 0; v < u.length; v++) u[v].fa === q && u[v].labels &&
                  0 < u[v].labels.length && (t = !0);
          t || f("gb", p(q))
      }
  }
  var ip = function(a, b) {
          var c = to(!0);
          Wo(function() {
              for (var d = bp(b.prefix), e = 0; e < a.length; ++e) {
                  var f = a[e];
                  if (void 0 !== Uo[f]) {
                      var g = gp(f, d),
                          h = c[g];
                      if (h) {
                          var m = Math.min(hp(h), Va()),
                              n;
                          b: {
                              var p = m;
                              if (ol(z))
                                  for (var q = rl(g, G.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                      if (hp(q[r]) > p) {
                                          n = !0;
                                          break b
                                      } n = !1
                          }
                          if (!n) {
                              var t = $n(b, m, !0);
                              t.Fb = "ad_storage";
                              Al(g, h, t)
                          }
                      }
                  }
              }
              ep(cp(c.gclid, c.gclsrc), !1, b)
          })
      },
      gp = function(a, b) {
          var c = Uo[a];
          if (void 0 !== c) return b + c
      },
      hp = function(a) {
          return 0 !== jp(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
              0) : 0
      };

  function Zo(a) {
      var b = jp(a.split("."));
      return 0 === b.length ? null : {
          version: b[0],
          fa: b[2],
          timestamp: 1E3 * (Number(b[1]) || 0),
          labels: b.slice(3)
      }
  }

  function jp(a) {
      return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !To.test(a[2]) ? [] : a
  }
  var kp = function(a, b, c, d, e) {
          if (Ka(b) && ol(z)) {
              var f = bp(e),
                  g = function() {
                      for (var h = {}, m = 0; m < a.length; ++m) {
                          var n = gp(a[m], f);
                          if (n) {
                              var p = rl(n, G.cookie, void 0, "ad_storage");
                              p.length && (h[n] = p.sort()[p.length - 1])
                          }
                      }
                      return h
                  };
              Wo(function() {
                  zo(g, b, c, d)
              })
          }
      },
      ap = function(a) {
          return a.filter(function(b) {
              return To.test(b.fa)
          })
      },
      lp = function(a, b) {
          if (ol(z)) {
              for (var c = bp(b.prefix), d = {}, e = 0; e < a.length; e++) Uo[a[e]] && (d[a[e]] = Uo[a[e]]);
              Wo(function() {
                  l(d, function(f, g) {
                      var h = rl(c + g, G.cookie, void 0, "ad_storage");
                      h.sort(function(t,
                          u) {
                          return hp(u) - hp(t)
                      });
                      if (h.length) {
                          var m = h[0],
                              n = hp(m),
                              p = 0 !== jp(m.split(".")).length ? m.split(".").slice(3) : [],
                              q = {},
                              r;
                          r = 0 !== jp(m.split(".")).length ? m.split(".")[2] : void 0;
                          q[f] = [r];
                          ep(q, !0, b, n, p)
                      }
                  })
              })
          }
      };

  function mp(a, b) {
      for (var c = 0; c < b.length; ++c)
          if (a[b[c]]) return !0;
      return !1
  }
  var np = function(a) {
          function b(e, f, g) {
              g && (e[f] = g)
          }
          if (Fk()) {
              var c = dp();
              if (mp(c, a)) {
                  var d = {};
                  b(d, "gclid", c.gclid);
                  b(d, "dclid", c.dclid);
                  b(d, "gclsrc", c.gclsrc);
                  b(d, "wbraid", c.gbraid);
                  Ao(function() {
                      return d
                  }, 3);
                  Ao(function() {
                      var e = {};
                      return e._up = "1", e
                  }, 1)
              }
          }
      },
      op = function(a, b, c, d) {
          var e = [];
          c = c || {};
          if (!Vo()) return e;
          var f = Xo(a);
          if (!f.length) return e;
          for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
          if (d) return e;
          if (1 !== e[0]) {
              var h = f[0],
                  m = f[0].timestamp,
                  n = [h.version, Math.round(m /
                      1E3), h.fa].concat(h.labels || [], [b]).join("."),
                  p = $n(c, m, !0);
              p.Fb = "ad_storage";
              Al(a, n, p)
          }
          return e
      };

  function pp(a, b) {
      var c = bp(b),
          d = gp(a, c);
      if (!d) return 0;
      for (var e = Xo(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
      return f
  }

  function qp(a) {
      var b = 0,
          c;
      for (c in a)
          for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
      return b
  }
  var rp = function(a) {
      var b = Math.max(pp("aw", a), qp(Vo() ? Ro() : {}));
      return Math.max(pp("gb", a), qp(Vo() ? Ro("_gac_gb", !0) : {})) > b
  };
  var wp = /[A-Z]+/,
      xp = /\s/,
      yp = function(a, b) {
          if (k(a)) {
              a = Ta(a);
              var c = a.indexOf("-");
              if (!(0 > c)) {
                  var d = a.substring(0, c);
                  if (wp.test(d)) {
                      var e = a.substring(c + 1),
                          f;
                      if (b && T(120)) {
                          var g = function(n) {
                              var p = n.indexOf("/");
                              return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                          };
                          f = g(e);
                          if ("DC" === d && 2 === f.length) {
                              var h = g(f[1]);
                              2 === h.length && (f[1] = h[0], f.push(h[1]))
                          }
                      } else {
                          f = e.split("/");
                          for (var m = 0; m < f.length; m++)
                              if (!f[m] || xp.test(f[m]) && ("AW" !== d || 1 !== m)) return
                      }
                      return {
                          id: a,
                          prefix: d,
                          ba: d + "-" + f[0],
                          I: f
                      }
                  }
              }
          }
      },
      Ap = function(a,
          b) {
          for (var c = {}, d = 0; d < a.length; ++d) {
              var e = yp(a[d], b);
              e && (c[e.id] = e)
          }
          zp(c);
          var f = [];
          l(c, function(g, h) {
              f.push(h)
          });
          return f
      };

  function zp(a) {
      var b = [],
          c;
      for (c in a)
          if (a.hasOwnProperty(c)) {
              var d = a[c];
              "AW" === d.prefix && d.I[1] && b.push(d.ba)
          } for (var e = 0; e < b.length; ++e) delete a[b[e]]
  };
  var Bp = function(a, b, c, d) {
      var e = rc(),
          f;
      if (1 === e) a: {
          var g = $h;g = g.toLowerCase();
          for (var h = "https://" + g, m = "http://" + g, n = 1, p = G.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
              var r = p[q].src;
              if (r) {
                  r = r.toLowerCase();
                  if (0 === r.indexOf(m)) {
                      f = 3;
                      break a
                  }
                  1 === n && 0 === r.indexOf(h) && (n = 2)
              }
          }
          f = n
      }
      else f = e;
      return (2 === f || d || "http:" != 'https:' ? a : b) + c // z.location.protocol
  };
  var Np = function(a, b, c) {
      this.target = a;
      this.eventName = b;
      this.h = c;
      this.m = {};
      this.metadata = J(c.eventMetadata || {});
      this.isAborted = !1
  };
  Np.prototype.copyToHitData = function(a, b) {
      var c = U(this.h, a);
      void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
  };
  var Op = function(a, b, c) {
      var d = Qi(a.target.ba);
      return d && d.hasOwnProperty(b) ? d[b] : c
  };

  function Pp(a) {
      return {
          getDestinationId: function() {
              return a.target.ba
          },
          getEventName: function() {
              return a.eventName
          },
          setEventName: function(b) {
              a.eventName = b
          },
          getHitData: function(b) {
              return a.m[b]
          },
          setHitData: function(b, c) {
              a.m[b] = c
          },
          setHitDataIfNotDefined: function(b, c) {
              void 0 === a.m[b] && (a.m[b] = c)
          },
          copyToHitData: function(b, c) {
              a.copyToHitData(b, c)
          },
          getMetadata: function(b) {
              return a.metadata[b]
          },
          setMetadata: function(b, c) {
              a.metadata[b] = c
          },
          isAborted: function() {
              return a.isAborted
          },
          abort: function() {
              a.isAborted = !0
          },
          getFromEventContext: function(b) {
              return U(a.h, b)
          },
          Pf: function() {
              return a
          },
          getHitKeys: function() {
              return Object.keys(a.m)
          }
      }
  };
  var Rp = function(a) {
          var b = Qp[a.target.ba];
          if (!a.isAborted && b)
              for (var c = Pp(a), d = 0; d < b.length; ++d) {
                  try {
                      b[d](c)
                  } catch (e) {
                      a.isAborted = !0
                  }
                  if (a.isAborted) break
              }
      },
      Sp = function(a, b) {
          var c = Qp[a];
          c || (c = Qp[a] = []);
          c.push(b)
      },
      Qp = {};
  var jq = function(a, b, c, d, e, f, g, h, m, n, p, q) {
          this.eventId = a;
          this.priorityId = b;
          this.h = c;
          this.J = d;
          this.m = e;
          this.C = f;
          this.R = g;
          this.B = h;
          this.eventMetadata = m;
          this.P = n;
          this.W = p;
          this.isGtmEvent = q
      },
      U = function(a, b, c) {
          if (void 0 !== a.h[b]) return a.h[b];
          if (void 0 !== a.J[b]) return a.J[b];
          if (void 0 !== a.m[b]) return a.m[b];
          vn && kq(a, a.C[b], a.R[b]) && (O(71), O(79));
          return void 0 !== a.C[b] ? a.C[b] : void 0 !== a.B[b] ? a.B[b] : c
      },
      lq = function(a) {
          function b(g) {
              for (var h = Object.keys(g), m = 0; m < h.length; ++m) c[h[m]] = 1
          }
          var c = {};
          b(a.h);
          b(a.J);
          b(a.m);
          b(a.C);
          if (vn)
              for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
                  var f = d[e];
                  if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                      O(71);
                      O(80);
                      break
                  }
              }
          return Object.keys(c)
      },
      mq = function(a, b, c) {
          function d(m) {
              Vc(m) && l(m, function(n, p) {
                  f = !0;
                  e[n] = p
              })
          }
          var e = {},
              f = !1;
          c && 1 !== c || (d(a.B[b]), d(a.C[b]), d(a.m[b]), d(a.J[b]));
          c && 2 !== c || d(a.h[b]);
          if (vn) {
              var g = f,
                  h = e;
              e = {};
              f = !1;
              c && 1 !== c || (d(a.B[b]), d(a.R[b]), d(a.m[b]), d(a.J[b]));
              c && 2 !== c || d(a.h[b]);
              if (f !== g || kq(a, e, h)) O(71), O(81);
              f = g;
              e = h
          }
          return f ?
              e : void 0
      },
      nq = function(a) {
          var b = [P.g.Pc, P.g.Lc, P.g.Mc, P.g.Nc, P.g.Oc, P.g.Qc, P.g.Rc],
              c = {},
              d = !1,
              e = function(h) {
                  for (var m = 0; m < b.length; m++) void 0 !== h[b[m]] && (c[b[m]] = h[b[m]], d = !0);
                  return d
              };
          if (e(a.h) || e(a.J) || e(a.m)) return c;
          e(a.C);
          if (vn) {
              var f = c,
                  g = d;
              c = {};
              d = !1;
              e(a.R);
              kq(a, c, f) && (O(71), O(82));
              c = f;
              d = g
          }
          if (d) return c;
          e(a.B);
          return c
      },
      kq = function(a, b, c) {
          if (!vn) return !1;
          try {
              if (b === c) return !1;
              var d = Tc(b);
              if (d !== Tc(c) || !(Vc(b) && Vc(c) || "array" === d)) return !0;
              if ("array" === d) {
                  if (b.length !== c.length) return !0;
                  for (var e =
                          0; e < b.length; e++)
                      if (kq(a, b[e], c[e])) return !0
              } else {
                  for (var f in c)
                      if (!b.hasOwnProperty(f)) return !0;
                  for (var g in b)
                      if (!c.hasOwnProperty(g) || kq(a, b[g], c[g])) return !0
              }
          } catch (h) {
              O(72)
          }
          return !1
      },
      oq = function(a, b) {
          this.Xg = a;
          this.xk = b;
          this.C = {};
          this.ie = {};
          this.h = {};
          this.J = {};
          this.m = {};
          this.he = {};
          this.B = {};
          this.yd = function() {};
          this.rb = function() {};
          this.R = !1
      },
      pq = function(a, b) {
          a.C = b;
          return a
      },
      qq = function(a, b) {
          a.ie = b;
          return a
      },
      rq = function(a, b) {
          a.h = b;
          return a
      },
      sq = function(a, b) {
          a.J = b;
          return a
      },
      tq = function(a, b) {
          a.m =
              b;
          return a
      },
      uq = function(a, b) {
          a.he = b;
          return a
      },
      vq = function(a, b) {
          a.B = b || {};
          return a
      },
      wq = function(a, b) {
          a.yd = b;
          return a
      },
      xq = function(a, b) {
          a.rb = b;
          return a
      },
      yq = function(a, b) {
          a.R = b;
          return a
      },
      zq = function(a) {
          return new jq(a.Xg, a.xk, a.C, a.ie, a.h, a.J, a.m, a.he, a.B, a.yd, a.rb, a.R)
      };

  function Dq(a) {
      var b = U(a.h, P.g.yb),
          c = U(a.h, P.g.Nb);
      b && !c ? (a.eventName !== P.g.la && a.eventName !== P.g.zd && O(131), a.isAborted = !0) : !b && c && (O(132), a.isAborted = !0)
  };

  function Fq() {
      return "attribution-reporting"
  }

  function Gq(a) {
      var b;
      b = void 0 === b ? document : b;
      var c;
      return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
  };
  var Hq = !1;

  function Iq() {
      if (Gq("join-ad-interest-group") && Ha(jc.joinAdInterestGroup)) return !0;
      Hq || (um('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Hq = !0);
      return Gq("join-ad-interest-group") && Ha(jc.joinAdInterestGroup)
  }

  function Jq(a, b) {
      var c = void 0;
      try {
          c = G.querySelector('iframe[data-tagging-id="' + b + '"]')
      } catch (e) {}
      if (c) {
          var d = Number(c.dataset.loadTime);
          if (d && 6E4 > Va() - d) {
              xb("TAGGING", 9);
              return
          }
      } else try {
          if (50 <= G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
              xb("TAGGING", 10);
              return
          }
      } catch (e) {}
      sc(a, void 0, {
          allow: "join-ad-interest-group"
      }, {
          taggingId: b,
          loadTime: Va()
      }, c)
  }

  function Kq() {
      return "https://td.doubleclick.net"
  };
  var Lq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
      Mq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
      Nq = /^\d+\.fls\.doubleclick\.net$/,
      Oq = /;gac=([^;?]+)/,
      Pq = /;gacgb=([^;?]+)/,
      Qq = /;gclaw=([^;?]+)/,
      Rq = /;gclgb=([^;?]+)/;

  function Sq(a, b) {
      if (Nq.test( 'qa.testbs.net' )) { //  G.location.host
          var c = 'https://qa.testbs.net/en/'.match(b); // G.location.href
          return c && 2 == c.length && c[1].match(Lq) ? decodeURIComponent(c[1]) : ""
      }
      var d = [],
          e;
      for (e in a) {
          for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].fa);
          d.push(e + ":" + f.join(","))
      }
      return 0 < d.length ? d.join(";") : ""
  }
  var Tq = function(a, b, c) {
      var d = Vo() ? Ro("_gac_gb", !0) : {},
          e = [],
          f = !1,
          g;
      for (g in d) {
          var h = op("_gac_gb_" + g, a, b, c);
          f = f || 0 !== h.length && h.some(function(m) {
              return 1 === m
          });
          e.push(g + ":" + h.join(","))
      }
      return {
          bl: f ? e.join(";") : "",
          al: Sq(d, Pq)
      }
  };

  function Uq(a, b, c) {
      if (Nq.test( 'qa.testbs.net' )) { // G.location.host
          var d = 'https://qa.testbs.net/en/'.match(c); // G.location.href
          if (d && 2 == d.length && d[1].match(Mq)) return [{
              fa: d[1]
          }]
      } else return Xo((a || "_gcl") + b);
      return []
  }
  var Vq = function(a) {
          return Uq(a, "_aw", Qq).map(function(b) {
              return b.fa
          }).join(".")
      },
      Wq = function(a) {
          return Uq(a, "_gb", Rq).map(function(b) {
              return b.fa
          }).join(".")
      },
      Xq = function(a, b) {
          var c = op((b && b.prefix || "_gcl") + "_gb", a, b);
          return 0 === c.length || c.every(function(d) {
              return 0 === d
          }) ? "" : c.join(".")
      };
  var Yq = function() {
      if (Ha(z.__uspapi)) {
          var a = "";
          try {
              z.__uspapi("getUSPData", 1, function(b, c) {
                  if (c && b) {
                      var d = b.uspString;
                      d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                  }
              })
          } catch (b) {}
          return a
      }
  };
  var Jr = {
      D: {
          di: "ads_conversion_hit",
          fg: "container_execute_start",
          fi: "container_setup_end",
          gg: "container_setup_start",
          ei: "container_execute_end",
          gi: "container_yield_end",
          hg: "container_yield_start",
          Zi: "event_execute_end",
          Yi: "event_evaluation_end",
          Vg: "event_evaluation_start",
          aj: "event_setup_end",
          fe: "event_setup_start",
          bj: "ga4_conversion_hit",
          je: "page_load",
          Om: "pageview",
          Ub: "snippet_load",
          mj: "tag_callback_error",
          nj: "tag_callback_failure",
          oj: "tag_callback_success",
          pj: "tag_execute_end",
          ed: "tag_execute_start"
      }
  };
  var Kr = !1,
      Lr = "L S Y E EC TC HTC".split(" "),
      Mr = ["S", "V", "E"],
      Nr = ["TS", "TI", "TE"];
  var ps = function(a) {},
      qs = function(a) {},
      rs = function() {},
      ss = function(a, b) {},
      ts = function(a, b) {},
      us = function(a, b) {},
      vs = function(a, b) {},
      Or = function(a, b, c, d, e, f) {
          var g;
          g = void 0 === g ? !1 : g;
          var h = {};
          return h
      },
      Pr = function(a) {
          var b = !1;
          return b
      },
      Qr = function(a, b) {},
      ws = function() {
          var a = {};
          return a
      },
      is = function(a) {
          a = void 0 === a ? !0 : a;
          var b = {};
          return b
      },
      xs = function() {},
      ys = function(a, b) {},
      zs = function(a, b, c) {},
      As = function() {
          var a = Or("PAGEVIEW", Vl());
          if ($r(a.entry, "mark")[0]) {
              var b = Ec();
              b.clearMarks(a.entry);
              b.clearMeasures("GTM-" + Vl() + ":" + Jr.D.je + ":to:PAGEVIEW")
          }
          var c = Or(Jr.D.je, Vl());
          Pr(a) && Qr(a, c)
      };
  var Bs = function(a, b) {
      var c = z,
          d, e = c.GooglebQhCsO;
      e || (e = {}, c.GooglebQhCsO = e);
      d = e;
      if (d[a]) return !1;
      d[a] = [];
      d[a][0] = b;
      return !0
  };
  var Cs = function(a, b, c) {
      var d = pm(a, "fmt");
      if (b) {
          var e = pm(a, "random"),
              f = pm(a, "label") || "";
          if (!e) return !1;
          var g = On(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
          if (!Bs(g, b)) return !1
      }
      d && 4 != d && (a = rm(a, "rfmt", d));
      var h = rm(a, "fmt", 4);
      qc(h, function() {
          z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
      }, void 0, c, G.getElementsByTagName("script")[0].parentElement || void 0);
      return !0
  };
  var Ss = function() {
          this.h = {}
      },
      Ts = function(a, b, c) {
          null != c && (a.h[b] = c)
      },
      Us = function(a) {
          return Object.keys(a.h).map(function(b) {
              return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
          }).join("&")
      },
      Ws = function(a, b, c, d) {};

  function Ys(a, b) {
      if (a) {
          var c = "" + a;
          0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
          "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
          return hj("" + c + b).href
      }
  }

  function Zs() {
      return !!Lh.Ef && "SGTM_TOKEN" !== Lh.Ef.split("@@").join("")
  }

  function $s(a) {
      for (var b = at(), c = ia(b), d = c.next(); !d.done; d = c.next()) {
          var e = U(a, d.value);
          if (e) return e
      }
  }

  function at() {
      var a = [];
      T(113) && a.push(P.g.rf);
      a.push(P.g.sc);
      return a
  };
  var ct = function(a, b, c, d, e) {
          if (!bt() && !am(a)) {
              var f = "?id=" + encodeURIComponent(a) + "&l=" + Lh.ka,
                  g = 0 === a.indexOf("GTM-");
              g || (f += "&cx=c");
              T(142) && (f += "&gtm=" + gm());
              var h = Zs();
              h && (f += "&sign=" + Lh.Ef);
              var m = c ? "/gtag/js" : "/gtm.js",
                  n = Uh || Wh ? Ys(b, m + f) : void 0;
              if (!n) {
                  var p = Lh.Ye + m;
                  h && kc && g && (p = kc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                  n = Bp("https://", "http://", p + f)
              }
              var q = a;
              d.siloed && (cm({
                  ctid: q,
                  isDestination: !1
              }), q = Ql(q));
              var r = q,
                  t = bm();
              Ll().container[r] = {
                  state: 1,
                  context: d,
                  parent: t
              };
              Ml({
                      ctid: r,
                      isDestination: !1
                  },
                  e);
              qc(n)
          }
      },
      dt = function(a, b, c, d) {
          var e;
          if (e = !bt()) {
              var f = Ll().destination[a];
              e = !(f && f.state)
          }
          if (e)
              if (dm()) Ll().destination[a] = {
                  state: 0,
                  transportUrl: b,
                  context: c,
                  parent: bm()
              }, Ml({
                  ctid: a,
                  isDestination: !0
              }, d), O(91);
              else {
                  var g = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Lh.ka + "&cx=c";
                  T(142) && (g += "&gtm=" + gm());
                  Zs() && (g += "&sign=" + Lh.Ef);
                  var h = Uh || Wh ? Ys(b, g) : void 0;
                  h || (h = Bp("https://", "http://", Lh.Ye + g));
                  var m = a;
                  c.siloed && (cm({
                      ctid: m,
                      isDestination: !0
                  }), m = Ql(m));
                  Ll().destination[m] = {
                      state: 1,
                      context: c,
                      parent: bm()
                  };
                  Ml({
                      ctid: m,
                      isDestination: !0
                  }, d);
                  qc(h)
              }
      };

  function bt() {
      if (Kl()) {
          return !0
      }
      return !1
  };
  var ft = function(a, b) {
          et(a).entity.push(b)
      },
      gt = function(a, b) {
          et(a).event && et(a).event.push(b)
      },
      ht = function() {
          var a = et(Wl());
          return a.event ? a.event : []
      };

  function et(a) {
      var b, c = Mh.r;
      c || (c = {
          container: {}
      }, Mh.r = c);
      b = c;
      var d = b.container[a];
      d || (d = {
          entity: [],
          event: []
      }, b.container[a] = d);
      return d
  };
  var it = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
      jt = {
          cl: ["ecl"],
          customPixels: ["nonGooglePixels"],
          ecl: ["cl"],
          ehl: ["hl"],
          hl: ["ehl"],
          html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
          customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
          nonGooglePixels: [],
          nonGoogleScripts: ["nonGooglePixels"],
          nonGoogleIframes: ["nonGooglePixels"]
      },
      kt = {
          cl: ["ecl"],
          customPixels: ["customScripts", "html"],
          ecl: ["cl"],
          ehl: ["hl"],
          hl: ["ehl"],
          html: ["customScripts"],
          customScripts: ["html"],
          nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
          nonGoogleScripts: ["customScripts", "html"],
          nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
      },
      lt = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
      ot = function(a) {
          var b = li("gtm.allowlist") || li("gtm.whitelist");
          b && O(9);
          Sh && (b = ["google", "gtagfl", "lcl", "zone"]);
          mt() && (Sh ?
              O(116) : O(117), nt && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
          var c = b && ab(Sa(b), jt),
              d = li("gtm.blocklist") || li("gtm.blacklist");
          d || (d = li("tagTypeBlacklist")) && O(3);
          d ? O(8) : d = [];
          mt() && (d = Sa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
          0 <= Sa(d).indexOf("google") && O(2);
          var e = d && ab(Sa(d), kt),
              f = {};
          return function(g) {
              var h = g && g[re.Sb];
              if (!h || "string" != typeof h) return !0;
              h = h.replace(/^_*/, "");
              if (void 0 !== f[h]) return f[h];
              var m = di[h] || [],
                  n = a(h, m),
                  p;
              p = et(Wl()).entity;
              for (var q = 0; q < p.length; q++) try {
                  n = n && p[q](h, m)
              } catch (y) {
                  n = !1
              }
              if (b) {
                  var r;
                  if (r = n) a: {
                      if (0 > c.indexOf(h))
                          if (m && 0 < m.length)
                              for (var t = 0; t < m.length; t++) {
                                  if (0 > c.indexOf(m[t])) {
                                      O(11);
                                      r = !1;
                                      break a
                                  }
                              } else {
                                  r = !1;
                                  break a
                              }
                      r = !0
                  }
                  n = r
              }
              var u = !1;
              if (d) {
                  var v = 0 <= e.indexOf(h);
                  if (v) u = v;
                  else {
                      var w = Oa(e, m || []);
                      w && O(10);
                      u = w
                  }
              }
              var x = !n || u;
              x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Oa(e, lt));
              return f[h] = x
          }
      },
      nt = !1;
  var mt = function() {
      return it.test(z.location && 'qa.testbs.net' ) // z.location.hostname
  };
  var pt = "",
      qt = [];

  function rt(a) {
      var b = "";
      pt && (b = "&dl=" + encodeURIComponent(pt));
      0 < qt.length && (b += "&tdp=" + qt.join("."));
      a.Xb && (pt = "", qt.length = 0, b && a.Pj());
      return b
  };
  var st = [];

  function tt(a) {
      if (!st.length) return "";
      var b = "&tdc=" + st.join("!");
      a.Xb && (a.Pj(), st.length = 0);
      return b
  };
  var ut = {
          initialized: 11,
          complete: 12,
          interactive: 13
      },
      vt = {},
      wt = Object.freeze((vt[P.g.Qa] = !0, vt)),
      xt = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics="),
      At = function(a, b, c) {
          if (vn && "config" === a && !(1 < yp(b).I.length)) {
              var d, e = lc("google_tag_data", {});
              e.td || (e.td = {});
              d = e.td;
              var f = J(c.C);
              J(c.h, f);
              var g = [],
                  h;
              for (h in d) {
                  var m = zt(d[h], f);
                  m.length && (xt && console.log(m), g.push(h))
              }
              g.length && (g.length && vn && st.push(b + "*" + g.join(".")), xb("TAGGING", ut[G.readyState] ||
                  14));
              d[b] = f
          }
      };

  function Bt(a, b) {
      var c = {},
          d;
      for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
      for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
      return c
  }

  function zt(a, b, c, d) {
      c = void 0 === c ? {} : c;
      d = void 0 === d ? "" : d;
      if (a === b) return [];
      var e = function(q, r) {
              var t = r[q];
              return void 0 === t ? wt[q] : t
          },
          f;
      for (f in Bt(a, b)) {
          var g = (d ? d + "." : "") + f,
              h = e(f, a),
              m = e(f, b),
              n = "object" === Tc(h) || "array" === Tc(h),
              p = "object" === Tc(m) || "array" === Tc(m);
          if (n && p) zt(h, m, c, g);
          else if (n || p || h !== m) c[g] = !0
      }
      return Object.keys(c)
  };
  var Ct = !1,
      Dt = 0,
      Et = [];

  function Ft(a) {
      if (!Ct) {
          var b = G.createEventObject,
              c = "complete" == G.readyState,
              d = "interactive" == G.readyState;
          if (!a || "readystatechange" != a.type || c || !b && d) {
              Ct = !0;
              for (var e = 0; e < Et.length; e++) I(Et[e])
          }
          Et.push = function() {
              for (var f = 0; f < arguments.length; f++) I(arguments[f]);
              return 0
          }
      }
  }

  function Gt() {
      if (!Ct && 140 > Dt) {
          Dt++;
          try {
              G.documentElement.doScroll("left"), Ft()
          } catch (a) {
              z.setTimeout(Gt, 50)
          }
      }
  }
  var Ht = function(a) {
      Ct ? a() : Et.push(a)
  };
  var It = function() {
      this.C = 0;
      this.h = {}
  };
  It.prototype.addListener = function(a, b, c) {
      var d = ++this.C;
      this.h[a] = this.h[a] || {};
      this.h[a][String(d)] = {
          listener: b,
          ob: c
      };
      return d
  };
  It.prototype.m = function(a, b) {
      var c = this.h[a],
          d = String(b);
      if (!c || !c[d]) return !1;
      delete c[d];
      return !0
  };
  It.prototype.B = function(a, b) {
      var c = [];
      l(this.h[a], function(d, e) {
          0 > c.indexOf(e.listener) && (void 0 === e.ob || 0 <= b.indexOf(e.ob)) && c.push(e.listener)
      });
      return c
  };
  var Jt = function(a, b, c) {
      return {
          entityType: a,
          indexInOriginContainer: b,
          nameInOriginContainer: c,
          originContainerId: Vl()
      }
  };

  function Kt(a, b) {
      if (data.entities && data.entities[a]) return data.entities[a][b]
  };
  var Mt = function(a, b) {
          this.h = !1;
          this.C = [];
          this.J = {
              tags: []
          };
          this.R = !1;
          this.m = this.B = 0;
          Lt(this, a, b)
      },
      Nt = function(a, b, c, d) {
          if (Ph.hasOwnProperty(b) || "__zone" === b) return -1;
          var e = {};
          Vc(d) && (e = J(d, e));
          e.id = c;
          e.status = "timeout";
          return a.J.tags.push(e) - 1
      },
      Ot = function(a, b, c, d) {
          var e = a.J.tags[b];
          e && (e.status = c, e.executionTime = d)
      },
      Pt = function(a) {
          if (!a.h) {
              for (var b = a.C, c = 0; c < b.length; c++) b[c]();
              a.h = !0;
              a.C.length = 0
          }
      },
      Lt = function(a, b, c) {
          void 0 !== b && a.Gf(b);
          c && z.setTimeout(function() {
              return Pt(a)
          }, Number(c))
      };
  Mt.prototype.Gf = function(a) {
      var b = this,
          c = Xa(function() {
              return I(function() {
                  a(Vl(), b.J)
              })
          });
      this.h ? c() : this.C.push(c)
  };
  var Qt = function(a) {
          a.B++;
          return Xa(function() {
              a.m++;
              a.R && a.m >= a.B && Pt(a)
          })
      },
      Rt = function(a) {
          a.R = !0;
          a.m >= a.B && Pt(a)
      };
  var St = {},
      Ut = function() {
          return z[Tt()]
      },
      Vt = !1;

  function Tt() {
      return z.GoogleAnalyticsObject || "ga"
  }
  var Yt = function(a) {},
      Zt = function(a, b) {
          return function() {
              var c = Ut(),
                  d = c && c.getByName && c.getByName(a);
              if (d) {
                  var e = d.get("sendHitTask");
                  d.set("sendHitTask", function(f) {
                      var g = f.get("hitPayload"),
                          h = f.get("hitCallback"),
                          m = 0 > g.indexOf("&tid=" + b);
                      m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                      e(f);
                      m && (f.set("hitPayload",
                          g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                  })
              }
          }
      };
  var du = {},
      eu = {};

  function fu(a, b) {
      if (vn) {
          var c;
          c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
          du[a] = "&e=" + c + "&eid=" + a;
          Fn(a)
      }
  }

  function gu(a) {
      var b = a.eventId,
          c = a.Xb;
      if (!du[b]) return "";
      var d = eu[b] ? "" : "&es=1";
      d += du[b];
      c && (eu[b] = !0);
      return d
  };
  var hu = {};

  function iu(a, b) {
      vn && (hu[a] = hu[a] || {}, hu[a][b] = (hu[a][b] || 0) + 1)
  }

  function ju(a) {
      for (var b = a.eventId, c = a.Xb, d = Object.entries(hu[b] || {}), e = [], f = 0; f < d.length; f++) {
          var g = ia(d[f]),
              h = g.next().value,
              m = g.next().value;
          e.push("" + h + m)
      }
      c && delete hu[b];
      return e.length ? "&md=" + e.join(".") : ""
  };
  var ku = {},
      lu = {
          aev: "1",
          c: "2",
          jsm: "3",
          v: "4",
          j: "5",
          smm: "6",
          rmm: "7",
          input: "8"
      };

  function mu(a, b, c) {
      if (vn) {
          ku[a] = ku[a] || [];
          var d = lu[b] || "0",
              e;
          e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === G ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || Vc(c) ? "0" : "e";
          ku[a].push("" + d + e)
      }
  }

  function nu(a) {
      var b = a.eventId,
          c = ku[b] || [];
      if (!c.length) return "";
      a.Xb && delete ku[b];
      return "&pcr=" + c.join(".")
  };
  var ou = {},
      Gu = {};

  function Uu(a, b, c) {
      if (vn && b) {
          var d = mn(b);
          ou[a] = ou[a] || [];
          ou[a].push(c + d);
          var e = b["function"];
          if (!e) throw Error("Error: No function name given for function call.");
          var f = (Te[e] ? "1" : "2") + d;
          Gu[a] = Gu[a] || [];
          Gu[a].push(f);
          Fn(a)
      }
  }

  function Vu(a) {
      var b = a.eventId,
          c = a.Xb,
          d = "",
          e = ou[b] || [];
      e.length && (d += "&tr=" + e.join("."));
      var f = Gu[b] || [];
      f.length && (d += "&ti=" + f.join("."));
      c && (delete ou[b], delete Gu[b]);
      return d
  };

  function Wu(a, b, c, d) {
      var e = Re[a],
          f = Xu(a, b, c, d);
      if (!f) return null;
      var g = bf(e[re.lj], c, []);
      if (g && g.length) {
          var h = g[0];
          f = Wu(h.index, {
              P: f,
              W: 1 === h.Bj ? b.terminate : f,
              terminate: b.terminate
          }, c, d)
      }
      return f
  }

  function Xu(a, b, c, d) {
      function e() {
          if (f[re.Ck]) h();
          else {
              var w = cf(f, c, []),
                  x = w[re.Zj];
              if (null != x)
                  for (var y = 0; y < x.length; y++)
                      if (!Ck(x[y])) {
                          h();
                          return
                      } var A = Nt(c.Vb, String(f[re.Sb]), Number(f[re.pe]), w[re.Dk]),
                  B = !1;
              w.vtp_gtmOnSuccess = function() {
                  if (!B) {
                      B = !0;
                      var K = Va() - F;
                      Uu(c.id, Re[a], "5");
                      Ot(c.Vb, A, "success", K);
                      T(70) && zs(c, f, Jr.D.oj);
                      g()
                  }
              };
              w.vtp_gtmOnFailure = function() {
                  if (!B) {
                      B = !0;
                      var K = Va() - F;
                      Uu(c.id, Re[a], "6");
                      Ot(c.Vb, A, "failure", K);
                      T(70) && zs(c, f, Jr.D.nj);
                      h()
                  }
              };
              w.vtp_gtmTagId = f.tag_id;
              w.vtp_gtmEventId =
                  c.id;
              c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
              Uu(c.id, f, "1");
              var D = function() {
                  ti(3);
                  var K = Va() - F;
                  Uu(c.id, f, "7");
                  Ot(c.Vb, A, "exception", K);
                  T(70) && zs(c, f, Jr.D.mj);
                  B || (B = !0, h())
              };
              T(70) && ys(c, f);
              var F = Va();
              try {
                  af(w, {
                      event: c,
                      index: a,
                      type: 1
                  })
              } catch (K) {
                  D(K)
              }
              T(70) && zs(c, f, Jr.D.pj)
          }
      }
      var f = Re[a],
          g = b.P,
          h = b.W,
          m = b.terminate;
      if (c.vh(f)) return null;
      var n = bf(f[re.qj], c, []);
      if (n && n.length) {
          var p = n[0],
              q = Wu(p.index, {
                  P: g,
                  W: h,
                  terminate: m
              }, c, d);
          if (!q) return null;
          g = q;
          h = 2 === p.Bj ? m : q
      }
      if (f[re.gj] || f[re.Fk]) {
          var r = f[re.gj] ?
              Se : c.wm,
              t = g,
              u = h;
          if (!r[a]) {
              e = Xa(e);
              var v = Yu(a, r, e);
              g = v.P;
              h = v.W
          }
          return function() {
              r[a](t, u)
          }
      }
      return e
  }

  function Yu(a, b, c) {
      var d = [],
          e = [];
      b[a] = Zu(d, e, c);
      return {
          P: function() {
              b[a] = $u;
              for (var f = 0; f < d.length; f++) d[f]()
          },
          W: function() {
              b[a] = av;
              for (var f = 0; f < e.length; f++) e[f]()
          }
      }
  }

  function Zu(a, b, c) {
      return function(d, e) {
          a.push(d);
          b.push(e);
          c()
      }
  }

  function $u(a) {
      a()
  }

  function av(a, b) {
      b()
  };
  var cv = function(a, b) {
          return 1 === arguments.length ? bv("set", a) : bv("set", a, b)
      },
      dv = function(a, b) {
          return 1 === arguments.length ? bv("config", a) : bv("config", a, b)
      },
      ev = function(a, b, c) {
          c = c || {};
          c[P.g.Rb] = a;
          return bv("event", b, c)
      };

  function bv(a) {
      return arguments
  }
  var fv = function() {
      this.h = [];
      this.m = []
  };
  fv.prototype.enqueue = function(a, b, c) {
      var d = this.h.length + 1;
      a["gtm.uniqueEventId"] = b;
      a["gtm.priorityId"] = d;
      c.eventId = b;
      c.fromContainerExecution = !0;
      c.priorityId = d;
      var e = {
          message: a,
          notBeforeEventId: b,
          priorityId: d,
          messageContext: c
      };
      this.h.push(e);
      for (var f = 0; f < this.m.length; f++) try {
          this.m[f](e)
      } catch (g) {}
  };
  fv.prototype.listen = function(a) {
      this.m.push(a)
  };
  fv.prototype.get = function() {
      for (var a = {}, b = 0; b < this.h.length; b++) {
          var c = this.h[b],
              d = a[c.notBeforeEventId];
          d || (d = [], a[c.notBeforeEventId] = d);
          d.push(c)
      }
      return a
  };
  fv.prototype.prune = function(a) {
      for (var b = [], c = [], d = 0; d < this.h.length; d++) {
          var e = this.h[d];
          e.notBeforeEventId === a ? b.push(e) : c.push(e)
      }
      this.h = c;
      return b
  };
  var hv = function(a, b, c) {
          gv().enqueue(a, b, c)
      },
      jv = function() {
          var a = iv;
          gv().listen(a)
      };

  function gv() {
      var a = Mh.mb;
      a || (a = new fv, Mh.mb = a);
      return a
  }
  var rv = function(a) {
          var b = Mh.zones;
          return b ? b.getIsAllowedFn(Rl(), a) : function() {
              return !0
          }
      },
      sv = function(a) {
          var b = Mh.zones;
          return b ? b.isActive(Rl(), a) : !0
      },
      tv = function() {
          gt(Wl(), function(a, b) {
              return sv(b)
          })
      };
  var wv = function(a, b) {
      for (var c = [], d = 0; d < Re.length; d++)
          if (a[d]) {
              var e = Re[d];
              var f = Qt(b.Vb);
              try {
                  var g = Wu(d, {
                      P: f,
                      W: f,
                      terminate: f
                  }, b, d);
                  if (g) {
                      var h = e["function"];
                      if (!h) throw "Error: No function name given for function call.";
                      var m = Te[h];
                      c.push({
                          Rj: d,
                          Jj: (m ? m.priorityOverride || 0 : 0) || Kt(e[re.Sb], 1) || 0,
                          execute: g
                      })
                  } else uv(d, b), f()
              } catch (p) {
                  f()
              }
          } c.sort(vv);
      for (var n = 0; n < c.length; n++) c[n].execute();
      return 0 < c.length
  };
  var yv = function(a, b) {
      if (!xv) return !1;
      var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
          d = xv.B(a.event, c ? String(c).split(",") : []);
      if (!d.length) return !1;
      for (var e = 0; e < d.length; ++e) {
          var f = Qt(b);
          try {
              d[e](a, f)
          } catch (g) {
              f()
          }
      }
      return !0
  };

  function vv(a, b) {
      var c, d = b.Jj,
          e = a.Jj;
      c = d > e ? 1 : d < e ? -1 : 0;
      var f;
      if (0 !== c) f = c;
      else {
          var g = a.Rj,
              h = b.Rj;
          f = g > h ? 1 : g < h ? -1 : 0
      }
      return f
  }

  function uv(a, b) {
      if (vn) {
          var c = function(d) {
              var e = b.vh(Re[d]) ? "3" : "4",
                  f = bf(Re[d][re.lj], b, []);
              f && f.length && c(f[0].index);
              Uu(b.id, Re[d], e);
              var g = bf(Re[d][re.qj], b, []);
              g && g.length && c(g[0].index)
          };
          c(a)
      }
  }
  var zv = !1,
      xv;
  var Av = function() {
      xv || (xv = new It);
      return xv
  };
  var Fv = function(a) {
      var b = a["gtm.uniqueEventId"],
          c = a["gtm.priorityId"],
          d = a.event;
      T(70) && ss(b, d);
      if ("gtm.js" === d) {
          if (zv) return !1;
          zv = !0
      }
      var e, f = !1,
          g = sv(b);
      if (T(130))
          for (var h = ht(), m = 0; g && m < h.length; m++) g = (0, h[m])(d, b);
      if (g) e = rv(b);
      else {
          if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
          f = !0;
          e = rv(Number.MAX_SAFE_INTEGER)
      }
      fu(b, d);
      var n = a.eventCallback,
          p = a.eventTimeout,
          q = {
              id: b,
              priorityId: c,
              name: d,
              vh: ot(e),
              wm: [],
              Gj: function() {
                  O(6);
                  ti(0)
              },
              vj: Bv(),
              wj: Cv(b),
              Vb: new Mt(function() {
                  if (T(70)) {}
                  n && n.apply(n, [].slice.call(arguments, 0))
              }, p)
          };
      T(119) && (q.Nj = iu);
      T(70) && us(q.id, q.name);
      var r = mf(q);
      T(70) && vs(q.id,
          q.name);
      f && (r = Dv(r));
      T(70) && ts(b, d);
      var t = wv(r, q),
          u = !1;
      u = yv(a, q.Vb);
      Rt(q.Vb);
      "gtm.js" !== d && "gtm.sync" !== d || Yt(Vl());
      return Ev(r, t) || u
  };

  function Cv(a) {
      return function(b) {
          Zc(b) || mu(a, "input", b)
      }
  }

  function Bv() {
      var a = {};
      a.event = qi("event", 1);
      a.ecommerce = qi("ecommerce", 1);
      a.gtm = qi("gtm");
      a.eventModel = qi("eventModel");
      return a
  }

  function Dv(a) {
      for (var b = [], c = 0; c < a.length; c++)
          if (a[c]) {
              var d = String(Re[c][re.Sb]);
              if (Oh[d] || void 0 !== Re[c][re.Gk] || ei[d] || Kt(d, 2)) b[c] = !0
          } return b
  }

  function Ev(a, b) {
      if (!b) return b;
      for (var c = 0; c < a.length; c++)
          if (a[c] && Re[c] && !Ph[String(Re[c][re.Sb])]) return !0;
      return !1
  }
  var Gv = {};

  function Hv(a, b, c) {
      vn && void 0 !== a && (Gv[a] = Gv[a] || [], Gv[a].push(c + b), Fn(a))
  }

  function Iv(a) {
      var b = a.eventId,
          c = a.Xb,
          d = "",
          e = Gv[b] || [];
      e.length && (d += "&epr=" + e.join("."));
      c && delete Gv[b];
      return d
  };
  var Kv = function(a, b) {
          var c = yp(a, !0);
          c && Jv.register(c, b)
      },
      Lv = function(a, b, c, d) {
          var e = yp(c, d.isGtmEvent);
          e && Jv.push("event", [b, a], e, d)
      },
      Mv = function(a, b, c, d) {
          var e = yp(c, d.isGtmEvent);
          e && Jv.push("get", [a, b], e, d)
      },
      Ov = function(a) {
          var b = yp(a, !0),
              c;
          b ? c = Nv(Jv, b).h : c = {};
          return c
      },
      Pv = function(a, b) {
          var c = yp(a, !0);
          if (c) {
              var d = Jv,
                  e = J(b);
              J(Nv(d, c).h, e);
              Nv(d, c).h = e
          }
      },
      Qv = function() {
          this.status = 1;
          this.J = {};
          this.h = {};
          this.m = {};
          this.R = null;
          this.C = {};
          this.B = !1
      },
      Rv = function(a, b, c, d) {
          var e = Va();
          this.type = a;
          this.B = e;
          this.h =
              b;
          this.m = c;
          this.messageContext = d
      },
      Sv = function() {
          this.m = {};
          this.B = {};
          this.h = []
      },
      Nv = function(a, b) {
          var c = b.ba;
          return a.m[c] = a.m[c] || new Qv
      },
      Tv = function(a, b, c, d) {
          if (d.h) {
              var e = Nv(a, d.h),
                  f = e.R;
              if (f) {
                  var g = J(c),
                      h = J(e.J[d.h.id]),
                      m = J(e.C),
                      n = J(e.h),
                      p = J(a.B),
                      q = {};
                  if (vn) try {
                      q = J(ii)
                  } catch (v) {
                      O(72)
                  }
                  var r = d.h.prefix,
                      t = function(v) {
                          Hv(d.messageContext.eventId, r, v);
                          var w = g[P.g.mc];
                          w && I(w)
                      },
                      u = zq(yq(xq(wq(vq(tq(sq(uq(rq(qq(pq(new oq(d.messageContext.eventId, d.messageContext.priorityId), g), h), m), n), p), q), d.messageContext.eventMetadata),
                          function() {
                              if (t) {
                                  var v = t;
                                  t = void 0;
                                  v("2")
                              }
                          }), function() {
                          if (t) {
                              var v = t;
                              t = void 0;
                              v("3")
                          }
                      }), !!d.messageContext.isGtmEvent));
                  try {
                      Hv(d.messageContext.eventId, r, "1"), At(d.type, d.h.id, u), f(d.h.id, b, d.B, u)
                  } catch (v) {
                      Hv(d.messageContext.eventId, r, "4")
                  }
              }
          }
      };
  Sv.prototype.register = function(a, b, c) {
      var d = Nv(this, a);
      3 !== d.status && (d.R = b, d.status = 3, c && (J(d.h, c), d.h = c), this.flush())
  };
  Sv.prototype.push = function(a, b, c, d) {
      void 0 !== c && (1 === Nv(this, c).status && (Nv(this, c).status = 2, this.push("require", [{}], c, {})), Nv(this, c).B && (d.deferrable = !1));
      this.h.push(new Rv(a, c, b, d));
      d.deferrable || this.flush()
  };
  Sv.prototype.flush = function(a) {
      for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
          var f = this.h[0],
              g = f.h;
          if (f.messageContext.deferrable) !g || Nv(this, g).B ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
          else {
              switch (f.type) {
                  case "require":
                      if (3 !== Nv(this, g).status && !a) {
                          this.h.push.apply(this.h, c);
                          return
                      }
                      break;
                  case "set":
                      l(f.m[0], function(r, t) {
                          J(cb(r, t), b.B)
                      });
                      break;
                  case "config":
                      var h = Nv(this, g);
                      e.Gb = {};
                      l(f.m[0], function(r) {
                          return function(t, u) {
                              J(cb(t, u), r.Gb)
                          }
                      }(e));
                      var m = !!e.Gb[P.g.uc];
                      delete e.Gb[P.g.uc];
                      var n = g.ba === g.id;
                      m || (n ? h.C = {} : h.J[g.id] = {});
                      h.B && m || Tv(this, P.g.la, e.Gb, f);
                      h.B = !0;
                      n ? J(e.Gb, h.C) : (J(e.Gb, h.J[g.id]), O(70));
                      d = !0;
                      break;
                  case "event":
                      e.Pe = {};
                      l(f.m[0], function(r) {
                          return function(t, u) {
                              J(cb(t, u), r.Pe)
                          }
                      }(e));
                      Tv(this, f.m[1], e.Pe, f);
                      break;
                  case "get":
                      var p = {},
                          q = (p[P.g.Pa] = f.m[0], p[P.g.hb] = f.m[1], p);
                      Tv(this, P.g.Ja, q, f)
              }
              this.h.shift();
              Uv(this, f)
          }
          e = {
              Gb: e.Gb,
              Pe: e.Pe
          }
      }
      this.h.push.apply(this.h, c);
      d && this.flush()
  };
  var Uv = function(a, b) {
          if ("require" !== b.type)
              if (b.h)
                  for (var c = Nv(a, b.h).m[b.type] || [], d = 0; d < c.length; d++) c[d]();
              else
                  for (var e in a.m)
                      if (a.m.hasOwnProperty(e)) {
                          var f = a.m[e];
                          if (f && f.m)
                              for (var g = f.m[b.type] || [], h = 0; h < g.length; h++) g[h]()
                      }
      },
      Jv = new Sv;
  var vf;
  var Vv = {},
      Wv = {},
      Xv = function(a, b) {
          for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                  Ue: e.Ue,
                  Re: e.Re
              }, f++) {
              var g = a[f];
              if (0 <= g.indexOf("-")) {
                  if (e.Ue = yp(g, b), e.Ue) {
                      var h = Tl();
                      La(h, function(r) {
                          return function(t) {
                              return r.Ue.ba === t
                          }
                      }(e)) ? c.push(g) : d.push(g)
                  }
              } else {
                  var m = Vv[g] || [];
                  e.Re = {};
                  m.forEach(function(r) {
                      return function(t) {
                          return r.Re[t] = !0
                      }
                  }(e));
                  for (var n = Rl(), p = 0; p < n.length; p++)
                      if (e.Re[n[p]]) {
                          c = c.concat(Tl());
                          break
                      } var q = Wv[g] || [];
                  q.length && (c = c.concat(q))
              }
          }
          return {
              Ml: c,
              Pl: d
          }
      },
      Yv = function(a) {
          l(Vv, function(b,
              c) {
              var d = c.indexOf(a);
              0 <= d && c.splice(d, 1)
          })
      },
      Zv = function(a) {
          l(Wv, function(b, c) {
              var d = c.indexOf(a);
              0 <= d && c.splice(d, 1)
          })
      };
  var $v = "HA GF G UA AW DC MC".split(" "),
      aw = !1,
      bw = !1;

  function cw(a, b) {
      a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
          value: fi()
      });
      b.eventId = a["gtm.uniqueEventId"];
      b.priorityId = a["gtm.priorityId"];
      return {
          eventId: b.eventId,
          priorityId: b.priorityId
      }
  }
  var dw = void 0,
      ew = void 0;

  function fw(a, b, c) {
      var d = J(a);
      d.eventId = void 0;
      d.inheritParentConfig = void 0;
      Object.keys(b).some(function(f) {
          return void 0 !== b[f]
      }) && O(136);
      var e = J(b);
      J(c, e);
      hv(dv(Rl()[0], e), a.eventId, d)
  }

  function gw(a) {
      for (var b = at(), c = ia(b), d = c.next(); !d.done; d = c.next()) {
          var e = d.value,
              f = a && a[e] || Jv.B[e];
          if (f) return f
      }
  }
  var hw = {
          config: function(a, b) {
              var c = T(122),
                  d = cw(a, b);
              if (!(2 > a.length) && k(a[1])) {
                  var e = {};
                  if (2 < a.length) {
                      if (void 0 != a[2] && !Vc(a[2]) || 3 < a.length) return;
                      e = a[2]
                  }
                  var f = yp(a[1], b.isGtmEvent);
                  if (f) {
                      var g, h, m;
                      a: {
                          if (!Ol.zf) {
                              var n = Xl(bm());
                              if (n && n.parent && n.context && 1 === n.context.source && 0 !== n.parent.ctid.indexOf("GTM-")) {
                                  var p = n.parent,
                                      q = p.isDestination;
                                  m = {
                                      Tl: Xl(p),
                                      Ll: q
                                  };
                                  break a
                              }
                          }
                          m = void 0
                      }
                      var r = m;
                      r && (g = r.Tl, h = r.Ll);
                      fu(d.eventId, "gtag.config");
                      var t = f.ba,
                          u = f.id !== t;
                      if (u ? -1 === Tl().indexOf(t) : -1 === Rl().indexOf(t)) {
                          if (!(c &&
                                  b.inheritParentConfig || T(61) && e[P.g.yb])) {
                              var v = gw(e);
                              if (u) dt(t, v, {
                                  source: 2,
                                  fromContainerExecution: b.fromContainerExecution
                              });
                              else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                                  var w = e;
                                  dw ? fw(b, w, dw) : ew || (ew = J(w))
                              } else ct(t, v, !0, {
                                  source: 2,
                                  fromContainerExecution: b.fromContainerExecution
                              })
                          }
                      } else {
                          if (g && (O(128), h && O(130), c && b.inheritParentConfig)) {
                              var x = e;
                              ew ? fw(b, ew, x) : !x[P.g.uc] && Rh && dw || (dw = J(x));
                              return
                          }
                          if (Rh && !u && !e[P.g.uc]) {
                              var y = bw;
                              bw = !0;
                              if (y) return
                          }
                          aw || O(43);
                          if (!b.noTargetGroup)
                              if (u) {
                                  Zv(f.id);
                                  var A = f.id,
                                      B = e[P.g.Qd] || "default";
                                  B = String(B).split(",");
                                  for (var D = 0; D < B.length; D++) {
                                      var F = Wv[B[D]] || [];
                                      Wv[B[D]] = F;
                                      0 > F.indexOf(A) && F.push(A)
                                  }
                              } else {
                                  Yv(f.id);
                                  var K = f.id,
                                      H = e[P.g.Qd] || "default";
                                  H = H.toString().split(",");
                                  for (var N = 0; N < H.length; N++) {
                                      var Q = Vv[H[N]] || [];
                                      Vv[H[N]] = Q;
                                      0 > Q.indexOf(K) && Q.push(K)
                                  }
                              } delete e[P.g.Qd];
                          var ca = b.eventMetadata || {};
                          ca.hasOwnProperty("is_external_event") || (ca.is_external_event = !b.fromContainerExecution);
                          b.eventMetadata = ca;
                          delete e[P.g.mc];
                          for (var aa = u ? [f.id] : Tl(), W = 0; W <
                              aa.length; W++) {
                              var S = e,
                                  na = J(b),
                                  ha = yp(aa[W], na.isGtmEvent);
                              ha && Jv.push("config", [S], ha, na)
                          }
                      }
                  }
              }
          },
          consent: function(a, b) {
              if (3 === a.length) {
                  O(39);
                  var c = cw(a, b),
                      d = a[1];
                  "default" === d ? Rk(a[2]) : "update" === d ? Sk(a[2], c) : "declare" === d ? b.fromContainerExecution && Qk(a[2]) : "core_platform_services" === d && Tk(a[2])
              }
          },
          event: function(a, b) {
              var c = a[1];
              if (!(2 > a.length) && k(c)) {
                  var d;
                  if (2 < a.length) {
                      if (!Vc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                      d = a[2]
                  }
                  var e = d,
                      f = {},
                      g = (f.event = c, f);
                  e && (g.eventModel = J(e), e[P.g.mc] && (g.eventCallback =
                      e[P.g.mc]), e[P.g.Ld] && (g.eventTimeout = e[P.g.Ld]));
                  var h = cw(a, b),
                      m = h.eventId,
                      n = h.priorityId;
                  g["gtm.uniqueEventId"] = m;
                  n && (g["gtm.priorityId"] = n);
                  if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                  var p;
                  var q = d,
                      r = q && q[P.g.Rb];
                  void 0 === r && (r = li(P.g.Rb, 2), void 0 === r && (r = "default"));
                  if (k(r) || Ka(r)) {
                      var t;
                      b.isGtmEvent && T(120) ? t = k(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                      var u = Xv(t, b.isGtmEvent),
                          v = u.Ml,
                          w = u.Pl;
                      if (w.length)
                          for (var x = gw(q), y = 0; y < w.length; y++) {
                              var A = yp(w[y], b.isGtmEvent);
                              A && dt(A.ba, x, {
                                  source: 3,
                                  fromContainerExecution: b.fromContainerExecution
                              })
                          }
                      p = Ap(v, b.isGtmEvent)
                  } else p = void 0;
                  var B = p;
                  if (B) {
                      fu(m, c);
                      for (var D = [], F = 0; F < B.length; F++) {
                          var K = B[F],
                              H = J(b);
                          if (-1 !== $v.indexOf(K.prefix)) {
                              var N = J(d),
                                  Q = H.eventMetadata || {};
                              Q.hasOwnProperty("is_external_event") || (Q.is_external_event = !H.fromContainerExecution);
                              H.eventMetadata = Q;
                              delete N[P.g.mc];
                              Lv(c, N, K.id, H)
                          }
                          D.push(K.id)
                      }
                      g.eventModel = g.eventModel || {};
                      0 < B.length ? g.eventModel[P.g.Rb] = D.join() : delete g.eventModel[P.g.Rb];
                      aw || O(43);
                      void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                      T(135) && g.eventModel[P.g.Nb] && (b.noGtmEvent = !0);
                      return b.noGtmEvent ? void 0 : g
                  }
              }
          },
          get: function(a, b) {
              O(53);
              if (4 === a.length && k(a[1]) && k(a[2]) && Ha(a[3])) {
                  var c = yp(a[1], b.isGtmEvent),
                      d = String(a[2]),
                      e = a[3];
                  if (c) {
                      aw || O(43);
                      var f = gw();
                      if (!La(Tl(), function(h) {
                              return c.ba === h
                          })) dt(c.ba, f, {
                          source: 4,
                          fromContainerExecution: b.fromContainerExecution
                      });
                      else if (-1 !== $v.indexOf(c.prefix)) {
                          cw(a, b);
                          var g = {};
                          Lk(J((g[P.g.Pa] = d, g[P.g.hb] =
                              e, g)));
                          Mv(d, function(h) {
                              I(function() {
                                  return e(h)
                              })
                          }, c.id, b)
                      }
                  }
              }
          },
          js: function(a, b) {
              if (2 == a.length && a[1].getTime) {
                  aw = !0;
                  var c = cw(a, b),
                      d = c.eventId,
                      e = c.priorityId,
                      f = {};
                  return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
              }
          },
          policy: function(a) {
              if (3 === a.length && k(a[1]) && Ha(a[2])) {
                  var b = a[1],
                      c = a[2],
                      d = vf.m;
                  d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                  if (O(74), "all" === a[1]) {
                      O(75);
                      var e = !1;
                      try {
                          e = a[2](Vl(), "unknown", {})
                      } catch (f) {}
                      e || O(76)
                  }
              } else {
                  O(73);
              }
          },
          set: function(a, b) {
              var c;
              2 == a.length && Vc(a[1]) ? c = J(a[1]) : 3 == a.length && k(a[1]) && (c = {}, Vc(a[2]) || Ka(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
              if (c) {
                  var d = cw(a, b),
                      e = d.eventId,
                      f = d.priorityId;
                  J(c);
                  var g = J(c);
                  Jv.push("set", [g], void 0, b);
                  c["gtm.uniqueEventId"] = e;
                  f && (c["gtm.priorityId"] = f);
                  T(30) && delete c.event;
                  b.overwriteModelFields = !0;
                  return c
              }
          }
      },
      iw = {
          policy: !0
      };
  var jw = function(a) {
          var b = z[Lh.ka].hide;
          if (b && void 0 !== b[a] && b.end) {
              b[a] = !1;
              var c = !0,
                  d;
              for (d in b)
                  if (b.hasOwnProperty(d) && !0 === b[d]) {
                      c = !1;
                      break
                  } c && (b.end(), b.end = null)
          }
      },
      kw = function(a) {
          var b = z[Lh.ka],
              c = b && b.hide;
          c && c.end && (c[a] = !0)
      };
  var lw = !1,
      mw = [];

  function nw() {
      if (!lw) {
          lw = !0;
          for (var a = 0; a < mw.length; a++) I(mw[a])
      }
  }
  var ow = function(a) {
      lw ? I(a) : mw.push(a)
  };
  var Fw = function(a) {
      if (Ew(a)) return a;
      this.h = a
  };
  Fw.prototype.getUntrustedMessageValue = function() {
      return this.h
  };
  var Ew = function(a) {
      return !a || "object" !== Tc(a) || Vc(a) ? !1 : "getUntrustedMessageValue" in a
  };
  Fw.prototype.getUntrustedMessageValue = Fw.prototype.getUntrustedMessageValue;
  var Gw = 0,
      Hw = {},
      Iw = [],
      Jw = [],
      Kw = !1,
      Lw = !1;

  function Mw(a, b) {
      return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
  }
  var Nw = function(a) {
          return z[Lh.ka].push(a)
      },
      Ow = function(a, b, c) {
          a.eventCallback = b;
          c && (a.eventTimeout = c);
          return Nw(a)
      },
      Pw = function(a, b) {
          var c = Mh[Lh.ka],
              d = c ? c.subscribers : 1,
              e = 0,
              f = !1,
              g = void 0;
          b && (g = z.setTimeout(function() {
              f || (f = !0, a());
              g = void 0
          }, b));
          return function() {
              ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
          }
      };

  function Qw(a, b) {
      var c = a._clear || b.overwriteModelFields;
      l(a, function(e, f) {
          "_clear" !== e && (c && oi(e), oi(e, f))
      });
      ai || (ai = a["gtm.start"]);
      var d = a["gtm.uniqueEventId"];
      if (!a.event) return !1;
      "number" !== typeof d && (d = fi(), a["gtm.uniqueEventId"] = d, oi("gtm.uniqueEventId", d));
      return Fv(a)
  }

  function Rw(a) {
      if (null == a || "object" !== typeof a) return !1;
      if (a.event) return !0;
      if (Pa(a)) {
          var b = a[0];
          if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
      }
      return !1
  }

  function Sw() {
      var a;
      if (Jw.length) a = Jw.shift();
      else if (Iw.length) a = Iw.shift();
      else return;
      var b;
      var c = a;
      if (Kw || !Rw(c.message)) b = c;
      else {
          Kw = !0;
          var d = c.message["gtm.uniqueEventId"];
          "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = fi());
          var e = {},
              f = {
                  message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                  messageContext: {
                      eventId: d - 2
                  }
              },
              g = {},
              h = {
                  message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                  messageContext: {
                      eventId: d - 1
                  }
              };
          Iw.unshift(h, c);
          if (vn) {
              var m = rf.ctid;
              if (m) {
                  var n, p = Xl(bm());
                  n = p && p.context;
                  var q, r = hj( 'https://qa.testbs.net/en/' ); // z.location.href
                  
                  q = r.hostname + r.pathname;
                  var t = n && n.fromContainerExecution,
                      u = n && n.source,
                      v = rf.Jf,
                      w = Ol.zf;
                  vn && (pt || (pt = q), qt.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
              }
          }
          b = f
      }
      return b
  }

  function Tw() {
      for (var a = !1, b; !Lw && (b = Sw());) {
          Lw = !0;
          delete ii.eventModel;
          ki();
          var c = b,
              d = c.message,
              e = c.messageContext;
          if (null == d) Lw = !1;
          else {
              e.fromContainerExecution && pi();
              try {
                  if (Ha(d)) try {
                      d.call(mi)
                  } catch (x) {} else if (Ka(d)) {
                      var f = d;
                      if (k(f[0])) {
                          var g = f[0].split("."),
                              h = g.pop(),
                              m = f.slice(1),
                              n = li(g.join("."), 2);
                          if (null != n) try {
                              n[h].apply(n, m)
                          } catch (x) {}
                      }
                  } else {
                      var p = void 0,
                          q = !1;
                      if (Pa(d)) {
                          a: {
                              if (d.length && k(d[0])) {
                                  var r = hw[d[0]];
                                  if (r && (!e.fromContainerExecution || !iw[d[0]])) {
                                      p = r(d, e);
                                      break a
                                  }
                              }
                              p = void 0
                          }(q = p &&
                              "set" === d[0] && !!p.event) && O(101)
                      }
                      else p = d;
                      if (p) {
                          var t = Qw(p, e);
                          a = t || a;
                          q && t && O(113)
                      }
                  }
              } finally {
                  e.fromContainerExecution && ki(!0);
                  var u = d["gtm.uniqueEventId"];
                  if ("number" === typeof u) {
                      for (var v = Hw[String(u)] || [], w = 0; w < v.length; w++) Jw.push(Uw(v[w]));
                      v.length && Jw.sort(Mw);
                      delete Hw[String(u)];
                      u > Gw && (Gw = u)
                  }
                  Lw = !1
              }
          }
      }
      return !a
  }

  function Vw() {
      if (T(70)) {
          var a = Ww();
      }
      var e = Tw();
      try {
          jw(Vl())
      } catch (f) {}
      return e
  }

  function iv(a) {
      if (Gw < a.notBeforeEventId) {
          var b = String(a.notBeforeEventId);
          Hw[b] = Hw[b] || [];
          Hw[b].push(a)
      } else Jw.push(Uw(a)), Jw.sort(Mw), I(function() {
          Lw || Tw()
      })
  }

  function Uw(a) {
      return {
          message: a.message,
          messageContext: a.messageContext
      }
  }
  var Xw = function() {
          function a(f) {
              var g = {};
              if (Ew(f)) {
                  var h = f;
                  f = Ew(h) ? h.getUntrustedMessageValue() : void 0;
                  g.fromContainerExecution = !0
              }
              return {
                  message: f,
                  messageContext: g
              }
          }
          var b = lc(Lh.ka, []),
              c = Mh[Lh.ka] = Mh[Lh.ka] || {};
          !0 === c.pruned && O(83);
          Hw = gv().get();
          jv();
          Ht(function() {
              if (!c.gtmDom) {
                  c.gtmDom = !0;
                  var f = {};
                  b.push((f.event = "gtm.dom", f))
              }
          });
          ow(function() {
              if (!c.gtmLoad) {
                  c.gtmLoad = !0;
                  var f = {};
                  b.push((f.event = "gtm.load", f))
              }
          });
          c.subscribers = (c.subscribers || 0) + 1;
          var d = b.push;
          b.push = function() {
              var f;
              if (0 < Mh.SANDBOXED_JS_SEMAPHORE) {
                  f = [];
                  for (var g = 0; g < arguments.length; g++) f[g] = new Fw(arguments[g])
              } else f = [].slice.call(arguments, 0);
              var h = f.map(function(q) {
                  return a(q)
              });
              Iw.push.apply(Iw, h);
              var m = d.apply(b, f),
                  n = Math.max(100, Number("1000") || 300);
              if (this.length > n)
                  for (O(4), c.pruned = !0; this.length > n;) this.shift();
              var p = "boolean" !== typeof m || m;
              return Tw() && p
          };
          var e = b.slice(0).map(function(f) {
              return a(f)
          });
          Iw.push.apply(Iw, e);
          Ww() && (T(70) && rs(), I(Vw))
      },
      Ww = function() {
          var a = !0;
          return a
      };

  function Yw(a) {
      if (null == a || 0 === a.length) return !1;
      var b = Number(a),
          c = Va();
      return b < c + 3E5 && b > c - 9E5
  }

  function Zw(a) {
      return a && 0 === a.indexOf("pending:") ? Yw(a.substr(8)) : !1
  };
  var $w = function(a, b) {
          for (var c = 0; c < a.length; ++c) {
              var d = b[c];
              if (d)
                  for (var e = 0; e < a[c].length; ++e) a[c][e] && (a[c][e][P.g.Uc] = d)
          }
      },
      bx = function(a, b, c) {
          var d = ax[a.pa];
          d || ("click" === a.promoa ? d = P.g.sb : b.length ? d = P.g.ab : c.length && (d = P.g.Za));
          return d
      },
      cx = function(a) {
          var b, c, d, e;
          switch (a.t) {
              case "event":
                  b = a.ea;
                  c = a.ec;
                  d = a.el;
                  e = a.ev;
                  break;
              case "pageview":
                  b = P.g.fc;
                  break;
              case "screenview":
                  b = P.g.gk;
                  break;
              case "timing":
                  b = P.g.hk;
                  c = a.utc;
                  d = a.utl;
                  e = a.utt;
                  break;
              case "exception":
                  b = P.g.fk;
                  break;
              case "social":
                  b = P.g.ik
          }
          return {
              ql: b,
              ol: c,
              pl: d,
              rl: e
          }
      },
      jx = function(a) {
          var b, c, d, e = a.match(dx);
          if (e) return b = Number(e[1]) - 1, c = ex[e[2]], {
              zh: b,
              Ah: c,
              Bh: "promotion"
          };
          var f = a.match(fx);
          if (f) return d = "product", b = Number(f[1]) - 1, gx[f[2]] ? c = gx[f[2]] : c = hx(f[2]), {
              zh: b,
              Ah: c,
              Bh: d
          };
          var g = a.match(ix);
          if (g) {
              d = "impression";
              var h = Number(g[1]) - 1;
              b = Number(g[2]) - 1;
              var m = g[3];
              gx[m] ? c = gx[m] : c = hx(m);
              return {
                  zh: b,
                  Ah: c,
                  Bh: d,
                  xl: h
              }
          }
          return {}
      },
      kx = function(a, b, c, d, e) {
          var f = jx(a),
              g = f.zh,
              h = f.Ah,
              m = f.Bh,
              n = f.xl;
          if (!(!h || !m || void 0 === g || 0 > g || 200 <= g)) {
              var p;
              switch (m) {
                  case "promotion":
                      p =
                          c;
                      break;
                  case "product":
                      p = d;
                      break;
                  case "impression":
                      if (0 > n || 200 <= n) return;
                      p = e
              }
              p && ("impression" !== m ? (p[g] || (p[g] = {}), p[g][h] || (p[g][h] = b)) : void 0 !== n && (p[n] || (p[n] = []), p[n][g] || (p[n][g] = {}), p[n][g][h] || (p[n][g][h] = b)))
          }
      },
      nx = function(a) {
          if (lx[a]) return lx[a];
          var b = hx(a);
          if (b) return b;
          var c = a.match(mx);
          if (c) return "ua_content_group_" + Number(c[1])
      },
      hx = function(a) {
          var b = a.match(ox),
              c;
          if (b) {
              if ("cd" === b[1]) c = "ua_dimension";
              else if ("cm" === b[1]) c = "ua_metric";
              else return;
              var d = Number(b[2]);
              if (1 <= d && 200 >= d) return c +
                  "_" + d
          }
      },
      lx = {
          aid: P.g.jk,
          aiid: P.g.kk,
          an: P.g.lk,
          av: P.g.mk,
          cc: P.g.Lc,
          cd: P.g.qf,
          ci: P.g.Mc,
          cid: P.g.cb,
          ck: P.g.Rc,
          cm: P.g.Nc,
          cn: P.g.Oc,
          cs: P.g.Qc,
          cu: P.g.sa,
          dh: P.g.nf,
          dl: P.g.ia,
          dp: P.g.Pb,
          dr: P.g.Fa,
          dt: P.g.Ab,
          exd: P.g.qk,
          exf: P.g.rk,
          sf: P.g.uk,
          sr: P.g.Bb,
          uid: P.g.Aa,
          ul: P.g.ya,
          utv: P.g.tk
      },
      px = {
          col: P.g.Hd,
          cos: P.g.cf,
          pal: P.g.Uc,
          ta: P.g.qg,
          tcc: P.g.rg,
          ti: P.g.na,
          ts: P.g.Vc,
          tt: P.g.ef
      },
      ax = {
          add: P.g.Yb,
          checkout: P.g.Jb,
          checkout_option: P.g.Hd,
          click: P.g.ac,
          detail: P.g.Ia,
          purchase: P.g.Ca,
          refund: P.g.bc,
          remove: P.g.Zb
      },
      ex = {
          cr: "creative_name",
          id: "promotion_id",
          nm: "promotion_name",
          ps: "creative_slot"
      },
      gx = {
          br: "item_brand",
          ca: "item_category",
          cc: "coupon",
          id: "item_id",
          nm: "item_name",
          pr: "price",
          ps: "index",
          qt: "quantity",
          va: "item_variant"
      },
      qx = {
          ea: 1,
          ec: 1,
          el: 1,
          ev: 1,
          pa: 1,
          promoa: 1,
          t: 1,
          tr: 1,
          utc: 1,
          utl: 1,
          utt: 1
      },
      ox = /^(cd|cm)([1-9][0-9]{0,2})$/,
      mx = /^cg([1-5])$/,
      dx = /^promo([1-9][0-9]{0,2})(id|cr|nm|ps)$/,
      fx = /^pr([0-9]{0,3})([a-z]{2}[0-9]{0,3})$/,
      ix = /^il([0-9]{0,3})pi([0-9]{0,3})([a-z]{2}[0-9]{0,3})$/,
      rx = /^il([1-9][0-9]{0,2})nm$/,
      sx = function(a) {
          var b = Tl().filter(function(aa) {
              return 0 ===
                  aa.indexOf("G-")
          });
          if (b.length) {
              var c = {},
                  d = function(aa, W) {
                      void 0 !== W && void 0 === c[aa] && (c[aa] = W)
                  },
                  e = {},
                  f = function(aa, W) {
                      void 0 !== W && void 0 === e[aa] && (e[aa] = W)
                  },
                  g = a.hitPayload;
              if ("string" !== typeof g) O(126);
              else {
                  for (var h = {}, m = [], n = [], p = [], q = [], r = g.split("&"), t = 0; t < r.length; ++t) {
                      var u = r[t].split("="),
                          v = u[0] || "",
                          w = decodeURIComponent(u[1] || "");
                      if ("" !== v && "" !== w)
                          if (qx[v] && !h[v]) h[v] = w;
                          else if (px[v]) f(px[v], w);
                      else {
                          var x = nx(v);
                          if (x) d(x, w);
                          else {
                              var y = v.match(rx);
                              if (y) {
                                  var A = Number(y[1]) - 1;
                                  0 <= A && 200 > A && !q[A] &&
                                      (q[A] = w)
                              } else kx(v, w, m, n, p)
                          }
                      }
                  }
                  var B = cx(h),
                      D = B.ql,
                      F = B.ol,
                      K = B.pl,
                      H = B.rl,
                      N;
                  if (h.pa || h.promoa || m.length || p.length) N = bx(h, m, p);
                  N && h.tr && f(P.g.da, h.tr);
                  var Q;
                  N === P.g.sb || N === P.g.ab ? Q = m : N === P.g.Za ? ($w(p, q), Q = Array.prototype.concat.apply([], p)) : N && (Q = n);
                  Q && Q.length && f(P.g.Z, Q.filter(function(aa) {
                      return !!aa
                  }));
                  if (D || N) {
                      d(P.g.nk, F);
                      d(P.g.pk, K);
                      d(P.g.da, H);
                      d(P.g.Ze, a.allowAdFeatures);
                      d(P.g.X, a.allowAdPersonalizationSignals);
                      d(P.g.Na, a.cookieDomain);
                      d(P.g.Ea, a.cookieExpires);
                      d(P.g.Oa, a.cookieFlags);
                      d(P.g.Tc,
                          a.cookiePath);
                      d(P.g.La, "_ga" === a.cookieName ? void 0 : a.cookieName);
                      d(P.g.fb, a.cookieUpdate);
                      d(P.g.Nb, !0);
                      D && D !== N && Nw(ev(b, D, c));
                      var ca = J(c);
                      J(e, ca);
                      N && Nw(ev(b, N, ca))
                  } else O(126)
              }
          }
      };
  var tx = function() {
      var a = lc("google_tag_data", {}),
          b = a.slq && a.slq[Vl()] && a.slq[Vl()].q;
      if (!Ka(b)) return;
      for (var c = 0; c < b.length; c++) {
          var d = b[c];
          Vc(d) && sx(d)
      }
      b.length = 0;
      b.push = function() {
          for (var e = 0; e < arguments.length; e++) {
              var f = arguments[e];
              Vc(f) && sx(f)
          }
          return 0
      };
  };
  var We = {};
  We.yf = new String("undefined");
  var xx = function(a, b, c) {
          var d = {
              event: b,
              "gtm.element": a,
              "gtm.elementClasses": Bc(a, "className"),
              "gtm.elementId": a["for"] || wc(a, "id") || "",
              "gtm.elementTarget": a.formTarget || Bc(a, "target") || ""
          };
          c && (d["gtm.triggers"] = c.join(","));
          d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Bc(a, "href") || a.src || a.code || a.codebase || "";
          return d
      },
      yx = function(a) {
          Mh.hasOwnProperty("autoEventsSettings") || (Mh.autoEventsSettings = {});
          var b = Mh.autoEventsSettings;
          b.hasOwnProperty(a) || (b[a] = {});
          return b[a]
      },
      zx = function(a, b, c) {
          yx(a)[b] = c
      },
      Ax = function(a, b, c, d) {
          var e = yx(a),
              f = Wa(e, b, d);
          e[b] = c(f)
      },
      Bx = function(a, b, c) {
          var d = yx(a);
          return Wa(d, b, c)
      },
      Cx = function(a) {
          return "string" === typeof a ? a : String(fi())
      };
  var Dx = ["input", "select", "textarea"],
      Ex = ["button", "hidden", "image", "reset", "submit"],
      Fx = function(a) {
          var b = a.tagName.toLowerCase();
          return 0 > Dx.indexOf(b) || "input" === b && 0 <= Ex.indexOf(a.type.toLowerCase()) ? !1 : !0
      },
      Gx = function(a) {
          return a.form ? a.form.tagName ? a.form : G.getElementById(a.form) : zc(a, ["form"], 100)
      },
      Hx = function(a, b, c) {
          if (!a.elements) return 0;
          for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
              var g = a.elements[e];
              if (Fx(g)) {
                  if (g.dataset[c] === d) return f;
                  f++
              }
          }
          return 0
      };
  var Ix = !!z.MutationObserver,
      Jx = void 0,
      Kx = function(a) {
          if (!Jx) {
              var b = function() {
                  var c = G.body;
                  if (c)
                      if (Ix)(new MutationObserver(function() {
                          for (var e = 0; e < Jx.length; e++) I(Jx[e])
                      })).observe(c, {
                          childList: !0,
                          subtree: !0
                      });
                      else {
                          var d = !1;
                          uc(c, "DOMNodeInserted", function() {
                              d || (d = !0, I(function() {
                                  d = !1;
                                  for (var e = 0; e < Jx.length; e++) I(Jx[e])
                              }))
                          })
                      }
              };
              Jx = [];
              G.body ? b() : I(b)
          }
          Jx.push(a)
      };
  var Vx = function(a, b, c) {
      function d() {
          var g = a();
          f += e ? (Va() - e) * g.playbackRate / 1E3 : 0;
          e = Va()
      }
      var e = 0,
          f = 0;
      return {
          createEvent: function(g, h, m) {
              var n = a(),
                  p = n.oh,
                  q = void 0 !== m ? Math.round(m) : void 0 !== h ? Math.round(n.oh * h) : Math.round(n.zj),
                  r = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                  t = G.hidden ? !1 : .5 <= Ui(c);
              d();
              var u = void 0;
              void 0 !== b && (u = [b]);
              var v = xx(c, "gtm.video", u);
              v["gtm.videoProvider"] = "youtube";
              v["gtm.videoStatus"] = g;
              v["gtm.videoUrl"] = n.url;
              v["gtm.videoTitle"] = n.title;
              v["gtm.videoDuration"] =
                  Math.round(p);
              v["gtm.videoCurrentTime"] = Math.round(q);
              v["gtm.videoElapsedTime"] = Math.round(f);
              v["gtm.videoPercent"] = r;
              v["gtm.videoVisible"] = t;
              return v
          },
          Oj: function() {
              e = Va()
          },
          fd: function() {
              d()
          }
      }
  };
  var Wx = z.clearTimeout,
      Xx = z.setTimeout,
      V = function(a, b, c, d) {
          if (Kl()) {
              b && I(b)
          } else return qc(a, b, c, d)
      },
      Yx = function() {
          return new Date
      },
      Zx = function() {
          return 'https://qa.testbs.net/en/'; // z.location.href
      },
      $x = function(a) {
          return fj(hj(a), "fragment")
      },
      ay = function(a) {
          return gj(hj(a))
      },
      by = function(a, b) {
          return li(a, b || 2)
      },
      cy = function(a, b, c) {
          return b ? Ow(a, b, c) : Nw(a)
      },
      dy = function(a, b) {
          z[a] = b
      },
      X = function(a, b, c) {
          b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
          return z[a]
      },
      ey = function(a, b, c) {
          return rl(a, b, void 0 === c ? !0 : !!c)
      },
      fy = function(a, b, c) {
          return 0 === Al(a, b, c)
      },
      gy = function(a, b) {
          if (Kl()) {
              b && I(b)
          } else sc(a, b)
      },
      hy = function(a) {
          return !!Bx(a, "init", !1)
      },
      iy = function(a) {
          zx(a, "init", !0)
      },
      jy = function(a, b, c) {
          Zc(a) || mu(c, b, a)
      };

  function Hy(a, b) {
      function c(g) {
          var h = hj(g),
              m = fj(h, "protocol"),
              n = fj(h, "host", !0),
              p = fj(h, "port"),
              q = fj(h, "path").toLowerCase().replace(/\/$/, "");
          if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
          return [m, n, p, q]
      }
      for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
          if (d[f] !== e[f]) return !1;
      return !0
  }

  function Iy(a) {
      return Jy(a) ? 1 : 0
  }

  function Jy(a) {
      var b = a.arg0,
          c = a.arg1;
      if (a.any_of && Array.isArray(c)) {
          for (var d = 0; d < c.length; d++) {
              var e = J(a, {});
              J({
                  arg1: c[d],
                  any_of: void 0
              }, e);
              if (Iy(e)) return !0
          }
          return !1
      }
      switch (a["function"]) {
          case "_cn":
              return Tf(b, c);
          case "_css":
              var f;
              a: {
                  if (b) try {
                      for (var g = 0; g < Pf.length; g++) {
                          var h = Pf[g];
                          if (b[h]) {
                              f = b[h](c);
                              break a
                          }
                      }
                  } catch (m) {}
                  f = !1
              }
              return f;
          case "_ew":
              return Qf(b, c);
          case "_eq":
              return Uf(b, c);
          case "_ge":
              return Vf(b, c);
          case "_gt":
              return Xf(b, c);
          case "_lc":
              return 0 <= String(b).split(",").indexOf(String(c));
          case "_le":
              return Wf(b, c);
          case "_lt":
              return Yf(b, c);
          case "_re":
              return Sf(b, c, a.ignore_case);
          case "_sw":
              return Zf(b, c);
          case "_um":
              return Hy(b, c)
      }
      return !1
  };

  function Ky() {
      var a = ["&cv=1", "&rv=" + Lh.ah, "&tc=" + Re.filter(function(b) {
          return b
      }).length];
      Lh.ne && a.push("&x=" + Lh.ne);
      return a.join("")
  };

  function Ly() {
      function a(c, d) {
          var e = zb(d);
          e && b.push(c + "=" + e)
      }
      var b = [];
      a("&u", "GTM");
      a("&ut", "TAGGING");
      a("&h", "HEALTH");
      return b.join("")
  };
  var My;

  function Ny(a, b, c) {
      My = My || new Tg;
      My.add(a, b, c)
  }

  function Oy(a, b) {
      var c = My = My || new Tg;
      if (c.m.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
      if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
      c.m[a] = Ha(b) ? lg(a, b) : mg(a, b)
  }

  function Py() {
      return function(a) {
          var b;
          var c = My;
          if (c.h.hasOwnProperty(a)) b = c.get(a, this);
          else {
              var d;
              if (d = c.m.hasOwnProperty(a)) {
                  var e = !1,
                      f = this.h.h;
                  if (f) {
                      var g = f.jd();
                      if (g) {
                          0 !== g.indexOf("__cvt_") && (e = !0);
                      }
                  } else e = !0;
                  d = e
              }
              if (d) {
                  var h = c.m.hasOwnProperty(a) ? c.m[a] : void 0;
                  b = h
              } else throw Error(a + " is not a valid API name.");
          }
          return b
      }
  };

  function Qy(a, b) {
      var c = this;
  }
  Qy.K = "addConsentListener";
  var Ry;
  var Sy = function(a) {
      for (var b = 0; b < a.length; ++b)
          if (Ry) try {
              a[b]()
          } catch (c) {
              O(77)
          } else a[b]()
  };

  function Ty(a, b, c) {
      var d = this,
          e;
      L(E(this), ["eventName:!string", "callback:!Fn", "triggerId:?string"], arguments), Sy([function() {
          return M(d, "listen_data_layer", a)
      }]), e = Av().addListener(a, Xc(b), c);
      return e
  }
  Ty.H = "internal.addDataLayerEventListener";

  function Uy(a, b, c) {}
  Uy.K = "addDocumentEventListener";

  function Vy(a, b, c, d) {}
  Vy.K = "addElementEventListener";

  function Wy(a) {}
  Wy.K = "addEventCallback";

  function $y(a) {}
  $y.H = "internal.addFormAbandonmentListener";

  function az(a, b, c, d) {}
  az.H = "internal.addFormData";
  var bz = {},
      cz = [],
      dz = {},
      ez = 0,
      fz = 0;
  var hz = function() {
          uc(G, "change", function(a) {
              for (var b = 0; b < cz.length; b++) cz[b](a)
          });
          uc(z, "pagehide", function() {
              gz()
          })
      },
      gz = function() {
          l(dz, function(a, b) {
              var c = bz[a];
              c && l(b, function(d, e) {
                  iz(e, c)
              })
          })
      },
      lz = function(a, b) {
          var c = "" + a;
          if (bz[c]) bz[c].push(b);
          else {
              var d = [b];
              bz[c] = d;
              var e = dz[c];
              e || (e = {}, dz[c] = e);
              cz.push(function(f) {
                  var g = f.target;
                  if (g) {
                      var h = Gx(g);
                      if (h) {
                          var m = jz(h, "gtmFormInteractId", function() {
                                  return ez++
                              }),
                              n = jz(g, "gtmFormInteractFieldId", function() {
                                  return fz++
                              }),
                              p = e[m];
                          p ? (p.Ha && (z.clearTimeout(p.Ha),
                              p.ra.dataset.gtmFormInteractFieldId !== n && iz(p, d)), p.ra = g, kz(p, d, a)) : (e[m] = {
                              form: h,
                              ra: g,
                              Wb: 0,
                              Ha: null
                          }, kz(e[m], d, a))
                      }
                  }
              })
          }
      },
      iz = function(a, b) {
          var c = a.form,
              d = a.ra,
              e = xx(c, "gtm.formInteract"),
              f = c.action;
          f && f.tagName && (f = c.cloneNode(!1).action);
          e["gtm.elementUrl"] = f;
          e["gtm.interactedFormName"] = c.getAttribute("name");
          e["gtm.interactedFormLength"] = c.length;
          e["gtm.interactedFormField"] = d;
          e["gtm.interactedFormFieldPosition"] = Hx(c, d, "gtmFormInteractFieldId");
          e["gtm.interactSequenceNumber"] = a.Wb;
          e["gtm.interactedFormFieldId"] =
              d.id;
          e["gtm.interactedFormFieldName"] = d.getAttribute("name");
          e["gtm.interactedFormFieldType"] = d.getAttribute("type");
          for (var g = 0; g < b.length; g++) b[g](e);
          a.Wb++;
          a.Ha = null
      },
      kz = function(a, b, c) {
          c ? a.Ha = z.setTimeout(function() {
              iz(a, b)
          }, c) : iz(a, b)
      },
      jz = function(a, b, c) {
          var d = a.dataset[b];
          if (d) return d;
          d = String(c());
          return a.dataset[b] = d
      };

  function mz(a, b) {
      L(E(this), ["callback:!Fn", "options:?*"], arguments);
      var c = Xc(b) || {},
          d = Number(c.interval);
      if (!d || 0 > d) d = 0;
      var e = Xc(a),
          f;
      Bx("pix.fil", "init") ? f = Bx("pix.fil", "reg") : (hz(), f = lz, zx("pix.fil", "reg", lz), zx("pix.fil", "init", !0));
      f(d, e);
  }
  mz.H = "internal.addFormInteractionListener";
  var oz = function(a, b, c) {
          var d = xx(a, "gtm.formSubmit");
          d["gtm.interactedFormName"] = a.getAttribute("name");
          d["gtm.interactedFormLength"] = a.length;
          d["gtm.willOpenInCurrentWindow"] = !b && nz(a);
          c && c.value && (d["gtm.formSubmitButtonText"] = c.value);
          var e = a.action;
          e && e.tagName && (e = a.cloneNode(!1).action);
          d["gtm.elementUrl"] = e;
          d["gtm.formCanceled"] = b;
          return d
      },
      pz = function(a, b) {
          var c = Bx("pix.fsl", a ? "nv.mwt" : "mwt", 0);
          z.setTimeout(b, c)
      },
      qz = function(a, b, c, d, e) {
          var f = Bx("pix.fsl", c ? "nv.mwt" : "mwt", 0),
              g = Bx("pix.fsl",
                  c ? "runIfCanceled" : "runIfUncanceled", []);
          if (!g.length) return !0;
          var h = oz(a, c, e);
          O(121);
          if ("https://www.facebook.com/tr/" === h["gtm.elementUrl"]) return O(122), !0;
          if (d && f) {
              for (var m = fb(b, g.length), n = 0; n < g.length; ++n) g[n](h, m);
              return m.done
          }
          for (var p = 0; p < g.length; ++p) g[p](h, function() {});
          return !0
      },
      rz = function() {
          var a = [],
              b = function(c) {
                  return La(a, function(d) {
                      return d.form === c
                  })
              };
          return {
              store: function(c, d) {
                  var e = b(c);
                  e ? e.button = d : a.push({
                      form: c,
                      button: d
                  })
              },
              get: function(c) {
                  var d = b(c);
                  return d ? d.button : null
              }
          }
      },
      nz = function(a) {
          var b = Bc(a, "target");
          return b && "_self" !== b && "_parent" !== b && "_top" !== b ? !1 : !0
      },
      sz = function() {
          var a = rz(),
              b = HTMLFormElement.prototype.submit;
          uc(G, "click", function(c) {
              var d = c.target;
              if (d && (d = zc(d, ["button", "input"], 100)) && ("submit" == d.type || "image" == d.type) && d.name && wc(d, "value")) {
                  var e = Gx(d);
                  e && a.store(e, d)
              }
          }, !1);
          uc(G, "submit", function(c) {
              var d = c.target;
              if (!d) return c.returnValue;
              var e = c.defaultPrevented || !1 === c.returnValue,
                  f = nz(d) && !e,
                  g = a.get(d),
                  h = !0,
                  m = function() {
                      if (h) {
                          var n;
                          g && (n = G.createElement("input"),
                              n.type = "hidden", n.name = g.name, n.value = g.value, d.appendChild(n));
                          b.call(d);
                          n && d.removeChild(n)
                      }
                  };
              if (qz(d, m, e, f, g)) return h = !1, c.returnValue;
              pz(e, m);
              e || (c.preventDefault && c.preventDefault(), c.returnValue = !1);
              return !1
          }, !1);
          HTMLFormElement.prototype.submit = function() {
              var c = this,
                  d = !0,
                  e = function() {
                      d && b.call(c)
                  };
              qz(c, e, !1, nz(c)) ? (b.call(c), d = !1) : pz(!1, e)
          }
      };

  function tz(a, b) {
      L(E(this), ["callback:!Fn", "options:?DustMap"], arguments);
      var c = Xc(b) || {},
          d = c.waitForCallbacks,
          e = c.waitForCallbacksTimeout,
          f = c.checkValidation;
      e = e && 0 < e ? e : 2E3;
      var g = Xc(a);
      if (d) {
          var h = function(n) {
              return Math.max(e, n)
          };
          Ax("pix.fsl", "mwt", h, 0);
          f || Ax("pix.fsl", "nv.mwt", h, 0)
      }
      var m = function(n) {
          n.push(g);
          return n
      };
      Ax("pix.fsl", "runIfUncanceled", m, []);
      f || Ax("pix.fsl", "runIfCanceled", m, []);
      Bx("pix.fsl", "init") || (sz(), zx("pix.fsl",
          "init", !0));
  }
  tz.H = "internal.addFormSubmitListener";

  function yz(a) {}
  yz.H = "internal.addGaSendListener";
  var zz = function(a, b) {
      this.tagId = a;
      this.h = b
  };

  function Az(a, b, c) {
      var d = this;
  }
  Az.H = "internal.loadGoogleTag";

  function Bz(a, b, c) {}
  Bz.H = "internal.addGoogleTagRestriction";
  var Cz = {},
      Dz = [];
  var Kz = function(a, b) {};
  Kz.H = "internal.addHistoryChangeListener";

  function Lz(a, b, c) {}
  Lz.K = "addWindowEventListener";

  function Mz(a, b) {
      return !0
  }
  Mz.K = "aliasInWindow";

  function Nz(a, b, c) {}
  Nz.H = "internal.appendRemoteConfigParameter";

  function Oz() {
      var a = 2;
      return a
  };

  function Pz(a, b) {
      var c;
      return c
  }
  Pz.K = "callInWindow";

  function Qz(a) {}
  Qz.K = "callLater";

  function Rz(a) {}
  Rz.H = "callOnDomReady";

  function Sz(a) {}
  Sz.H = "callOnWindowLoad";

  function Tz(a) {
      var b;
      return b
  }
  Tz.H = "internal.computeGtmParameter";

  function Uz(a, b) {
      var c;
      var d = Wc(c, this.h, Oz());
      void 0 === d && void 0 !== c && O(45);
      return d
  }
  Uz.K = "copyFromDataLayer";

  function Vz(a) {
      var b;
      return b
  }
  Vz.K = "copyFromWindow";

  function Wz(a, b) {
      var c;
      L(E(this), ["preHit:!DustMap", "dustOptions:?DustMap"], arguments);
      var d = Xc(b) || {},
          e = Xc(a, this.h, 1).Pf(),
          f = e.h;
      d.omitEventContext && (f = zq(new oq(e.h.eventId, e.h.priorityId)));
      var g = new Np(e.target, e.eventName, f);
      d.omitHitData || J(e.m, g.m);
      d.omitMetadata ? g.metadata = {} : J(e.metadata, g.metadata);
      g.isAborted = e.isAborted;
      c = Wc(Pp(g), this.h, 1);
      return c
  }
  Wz.H = "internal.copyPreHit";

  function Xz(a, b) {
      var c = null,
          d = Oz();
      return Wc(c, this.h, d)
  }
  Xz.K = "createArgumentsQueue";

  function Yz(a) {
      var b;
      return Wc(b, this.h,
          Oz())
  }
  Yz.K = "createQueue";

  function Zz(a, b) {
      var c = null;
      return c
  }
  Zz.H = "internal.createRegex";

  function $z(a) {
      if (!a) return {};
      var b = a.Xk;
      return Jt(b.type, b.index, b.name)
  }

  function aA(a) {
      return a ? {
          originatingEntity: $z(a)
      } : {}
  };

  function bA(a) {}
  bA.H = "internal.declareConsentState";
  var cA = {},
      dA = [],
      eA = {},
      fA = 0,
      gA = 0;
  var iA = function() {
          l(eA, function(a, b) {
              var c = cA[a];
              c && l(b, function(d, e) {
                  hA(e, c)
              })
          })
      },
      lA = function(a, b) {
          var c = "" + b;
          if (cA[c]) cA[c].push(a);
          else {
              var d = [a];
              cA[c] = d;
              var e = eA[c];
              e || (e = {}, eA[c] = e);
              dA.push(function(f) {
                  var g = f.target;
                  if (g) {
                      var h = Gx(g);
                      if (h) {
                          var m = jA(h, "gtmFormInteractId", function() {
                                  return fA++
                              }),
                              n = jA(g, "gtmFormInteractFieldId", function() {
                                  return gA++
                              });
                          if (null !== m && null !== n) {
                              var p = e[m];
                              p ? (p.Ha && (z.clearTimeout(p.Ha), p.ra.getAttribute("data-gtm-form-interact-field-id") !== n && hA(p, d)), p.ra = g, kA(p,
                                  d, b)) : (e[m] = {
                                  form: h,
                                  ra: g,
                                  Wb: 0,
                                  Ha: null
                              }, kA(e[m], d, b))
                          }
                      }
                  }
              })
          }
      },
      hA = function(a, b) {
          var c = a.form,
              d = a.ra,
              e = xx(c, "gtm.formInteract", b),
              f = c.action;
          f && f.tagName && (f = c.cloneNode(!1).action);
          e["gtm.elementUrl"] = f;
          e["gtm.interactedFormName"] = null != c.getAttribute("name") ? c.getAttribute("name") : void 0;
          e["gtm.interactedFormLength"] = c.length;
          e["gtm.interactedFormField"] = d;
          e["gtm.interactedFormFieldId"] = d.id;
          e["gtm.interactedFormFieldName"] = null != d.getAttribute("name") ? d.getAttribute("name") : void 0;
          e["gtm.interactedFormFieldPosition"] =
              Hx(c, d, "gtmFormInteractFieldId");
          e["gtm.interactedFormFieldType"] = null != d.getAttribute("type") ? d.getAttribute("type") : void 0;
          e["gtm.interactSequenceNumber"] = a.Wb;
          Nw(e);
          a.Wb++;
          a.Ha = null
      },
      kA = function(a, b, c) {
          c ? a.Ha = z.setTimeout(function() {
              hA(a, b)
          }, c) : hA(a, b)
      },
      jA = function(a, b, c) {
          var d;
          try {
              if (d = a.dataset[b]) return d;
              d = String(c());
              a.dataset[b] = d
          } catch (e) {
              d = null
          }
          return d
      };

  function mA(a, b) {
      var c = this;
      L(E(this), ["options:?DustMap", "triggerId:?*"], arguments);
      Sy([function() {
          return M(c, "process_dom_events", "document", "change")
      }, function() {
          return M(c, "process_dom_events", "window", "pagehide")
      }]);
      b = Cx(b);
      var d = a && Number(a.get("interval"));
      0 < d && isFinite(d) || (d = 0);
      if (Bx("fil", "init", !1)) {
          var e = Bx("fil", "reg");
          if (e) e(b, d);
          else throw Error("Failed to register trigger: " + b);
      } else uc(G, "change", function(f) {
          for (var g =
                  0; g < dA.length; g++) dA[g](f)
      }), uc(z, "pagehide", function() {
          iA()
      }), lA(b, d), zx("fil", "reg", lA), zx("fil", "init", !0);
      return b
  }
  mA.H = "internal.enableAutoEventOnFormInteraction";
  var nA = function(a, b, c, d, e) {
          var f = Bx("fsl", c ? "nv.mwt" : "mwt", 0),
              g;
          g = c ? Bx("fsl", "nv.ids", []) : Bx("fsl", "ids", []);
          if (!g.length) return !0;
          var h = xx(a, "gtm.formSubmit", g),
              m = a.action;
          m && m.tagName && (m = a.cloneNode(!1).action);
          O(121);
          if ("https://www.facebook.com/tr/" === m) return O(122), !0;
          h["gtm.elementUrl"] = m;
          h["gtm.formCanceled"] = c;
          null != a.getAttribute("name") && (h["gtm.interactedFormName"] = a.getAttribute("name"));
          e && (h["gtm.formSubmitElement"] = e, h["gtm.formSubmitElementText"] = e.value);
          if (d && f) {
              if (!Ow(h, Pw(b,
                      f), f)) return !1
          } else Ow(h, function() {}, f || 2E3);
          return !0
      },
      oA = function() {
          var a = [],
              b = function(c) {
                  return La(a, function(d) {
                      return d.form === c
                  })
              };
          return {
              store: function(c, d) {
                  var e = b(c);
                  e ? e.button = d : a.push({
                      form: c,
                      button: d
                  })
              },
              get: function(c) {
                  var d = b(c);
                  return d ? d.button : null
              }
          }
      },
      pA = function(a) {
          var b = a.target;
          return b && "_self" !== b && "_parent" !== b && "_top" !== b ? !1 : !0
      },
      qA = function() {
          var a = oA(),
              b = HTMLFormElement.prototype.submit;
          uc(G, "click", function(c) {
              var d = c.target;
              if (d && (d = zc(d, ["button", "input"], 100)) && ("submit" ==
                      d.type || "image" == d.type) && d.name && wc(d, "value")) {
                  var e = Gx(d);
                  e && a.store(e, d)
              }
          }, !1);
          uc(G, "submit", function(c) {
              var d = c.target;
              if (!d) return c.returnValue;
              var e = c.defaultPrevented || !1 === c.returnValue,
                  f = pA(d) && !e,
                  g = a.get(d),
                  h = !0;
              if (nA(d, function() {
                      if (h) {
                          var m;
                          g && (m = G.createElement("input"), m.type = "hidden", m.name = g.name, m.value = g.value, d.appendChild(m));
                          b.call(d);
                          m && d.removeChild(m)
                      }
                  }, e, f, g)) h = !1;
              else return e || (c.preventDefault && c.preventDefault(), c.returnValue = !1), !1;
              return c.returnValue
          }, !1);
          HTMLFormElement.prototype.submit =
              function() {
                  var c = this,
                      d = !0;
                  nA(c, function() {
                      d && b.call(c)
                  }, !1, pA(c)) && (b.call(c), d = !1)
              }
      };

  function rA(a, b) {
      var c = this;
      L(E(this), ["options:?DustMap", "triggerId:?*"], arguments);
      Sy([function() {
          return M(c, "process_dom_events", "document", "click")
      }, function() {
          return M(c, "process_dom_events", "document", "submit")
      }]);
      var d = a && a.get("waitForTags"),
          e = a && a.get("checkValidation");
      b = Cx(b);
      if (d) {
          var f = Number(a.get("waitForTagsTimeout"));
          0 < f && isFinite(f) || (f = 2E3);
          var g = function(m) {
              return Math.max(f, m)
          };
          Ax("fsl", "mwt", g, 0);
          e ||
              Ax("fsl", "nv.mwt", g, 0)
      }
      var h = function(m) {
          m.push(b);
          return m
      };
      Ax("fsl", "ids", h, []);
      e || Ax("fsl", "nv.ids", h, []);
      Bx("fsl", "init", !1) || (qA(), zx("fsl", "init", !0));
      return b
  }
  rA.H = "internal.enableAutoEventOnFormSubmit";

  function wA() {
      var a = this;
  }
  wA.H = "internal.enableAutoEventOnGaSend";
  var xA = {},
      yA = [];
  var AA = function(a, b) {
          var c = "" + b;
          if (xA[c]) xA[c].push(a);
          else {
              var d = [a];
              xA[c] = d;
              var e = zA(),
                  f = -1;
              yA.push(function(g) {
                  0 <= f && z.clearTimeout(f);
                  b ? f = z.setTimeout(function() {
                      e(g, d);
                      f = -1
                  }, b) : e(g, d)
              })
          }
      },
      zA = function() {
          var a = 'https://qa.testbs.net/en/', // z.location.href
              b = {
                  source: null,
                  state: z.history.state || null,
                  url: gj(hj(a)),
                  N: fj(hj(a), "fragment")
              };
          return function(c, d) {
              var e = b,
                  f = {};
              f[e.source] = !0;
              f[c.source] = !0;
              if (!f.popstate || !f.hashchange || e.N != c.N) {
                  var g = {},
                      h = (g.event = "gtm.historyChange-v2", g["gtm.historyChangeSource"] = c.source, g["gtm.oldUrlFragment"] =
                          b.N, g["gtm.newUrlFragment"] = c.N, g["gtm.oldHistoryState"] = b.state, g["gtm.newHistoryState"] = c.state, g["gtm.oldUrl"] = b.url, g["gtm.newUrl"] = c.url, g["gtm.triggers"] = d.join(","), g);
                  b = c;
                  Nw(h)
              }
          }
      },
      BA = function(a, b) {
          var c = z.history,
              d = c[a];
          if (Ha(d)) try {
              c[a] = function(e, f, g) {
                  d.apply(c, [].slice.call(arguments, 0));
                  var h = 'https://qa.testbs.net/en/'; // z.location.href
                  b({
                      source: a,
                      state: e,
                      url: gj(hj(h)),
                      N: fj(hj(h), "fragment")
                  })
              }
          } catch (e) {}
      },
      DA = function(a) {
          z.addEventListener("popstate", function(b) {
              var c = CA(b);
              a({
                  source: "popstate",
                  state: b.state,
                  url: gj(hj(c)),
                  N: fj(hj(c), "fragment")
              })
          })
      },
      EA = function(a) {
          z.addEventListener("hashchange", function(b) {
              var c = CA(b);
              a({
                  source: "hashchange",
                  state: null,
                  url: gj(hj(c)),
                  N: fj(hj(c), "fragment")
              })
          })
      },
      CA = function(a) {
          return a.target && a.target.location && a.target.location.href ? a.target.location.href : 'https://qa.testbs.net/en/' // z.location.href
      };

  function FA(a, b) {
      var c = this;
      L(E(this), ["options:?DustMap", "triggerId:?*"], arguments);
      Sy([function() {
          return M(c, "process_dom_events", "window", "popstate")
      }, function() {
          return M(c, "process_dom_events", "window", "pushstate")
      }]);
      b = Cx(b);
      var d = Number(a && a.get("interval"));
      0 < d && isFinite(d) || (d = 0);
      if (Bx("ehl", "init", !1)) {
          var e = Bx("ehl", "reg");
          e && e(b, d)
      } else {
          var f = function(g) {
              for (var h = 0; h < yA.length; h++) yA[h](g)
          };
          EA(f);
          DA(f);
          BA("pushState",
              f);
          BA("replaceState", f);
          AA(b, d);
          zx("ehl", "reg", AA);
          zx("ehl", "init", !0)
      }
      return b
  }
  FA.H = "internal.enableAutoEventOnHistoryChange";
  var GA = function(a, b) {
          if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) return !1;
          var c = Bc(b, "href"),
              d = c.indexOf("#"),
              e = Bc(b, "target");
          if (e && "_self" !== e && "_parent" !== e && "_top" !== e || 0 === d) return !1;
          if (0 < d) {
              var f = gj(hj(c)),
                  g = gj(hj( 'https://qa.testbs.net/en/' )); // z.location.href
              return f !== g
          }
          return !0
      },
      HA = function(a, b) {
          for (var c = fj(hj((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || Bc(b, "href") || b.src || b.code || b.codebase || ""), "host"), d = 0; d < a.length; d++) try {
              if ((new RegExp(a[d])).test(c)) return !1
          } catch (e) {}
          return !0
      },
      IA = function() {
          var a = 0,
              b = function(c) {
                  var d = c.target;
                  if (d && 3 !== c.which && !(c.wh || c.timeStamp && c.timeStamp === a)) {
                      a = c.timeStamp;
                      d = zc(d, ["a", "area"], 100);
                      if (!d) return c.returnValue;
                      var e = c.defaultPrevented || !1 === c.returnValue,
                          f = Bx("aelc", e ? "nv.mwt" : "mwt", 0),
                          g;
                      g = e ? Bx("aelc", "nv.ids", []) : Bx("aelc", "ids", []);
                      for (var h = [], m = 0; m < g.length; m++) {
                          var n = g[m],
                              p = Bx("aelc", "aff.map", {})[n];
                          p && !HA(p, d) || h.push(n)
                      }
                      if (h.length) {
                          var q = GA(c, d),
                              r = xx(d, "gtm.linkClick", h);
                          r["gtm.elementText"] = xc(d);
                          r["gtm.willOpenInNewWindow"] = !q;
                          if (q && !e && f && d.href) {
                              var t = !!La(String(Bc(d, "rel") || "").split(" "), function(x) {
                                      return "noreferrer" === x.toLowerCase()
                                  }),
                                  u = z[(Bc(d, "target") || "_self").substring(1)],
                                  v = !0,
                                  w = Pw(function() {
                                      var x;
                                      if (x = v && u) {
                                          var y;
                                          a: if (t) {
                                              var A;
                                              try {
                                                  A = new MouseEvent(c.type, {
                                                      bubbles: !0
                                                  })
                                              } catch (B) {
                                                  if (!G.createEvent) {
                                                      y = !1;
                                                      break a
                                                  }
                                                  A = G.createEvent("MouseEvents");
                                                  A.initEvent(c.type, !0, !0)
                                              }
                                              A.wh = !0;
                                              c.target.dispatchEvent(A);
                                              y = !0
                                          } else y = !1;
                                          x = !y
                                      }
                                      x && (u.location.href = Bc(d, "href"))
                                  }, f);
                              if (Ow(r, w, f)) v = !1;
                              else return c.preventDefault &&
                                  c.preventDefault(), c.returnValue = !1
                          } else Ow(r, function() {}, f || 2E3);
                          return !0
                      }
                  }
              };
          uc(G, "click", b, !1);
          uc(G, "auxclick", b, !1)
      };

  function JA(a, b) {
      var c = this;
      L(E(this), ["dustOptions:?DustMap", "triggerId:?*"], arguments);
      var d = Xc(a);
      T(139) ? Sy([function() {
          return M(c, "detect_link_click_events", d)
      }]) : Sy([function() {
          return M(c, "process_dom_events", "document", "click")
      }, function() {
          return M(c, "process_dom_events", "document", "auxclick")
      }]);
      var e = d && !!d.waitForTags,
          f = d && !!d.checkValidation,
          g = d ? d.affiliateDomains : void 0;
      b = Cx(b);
      if (e) {
          var h = Number(d.waitForTagsTimeout);
          0 < h && isFinite(h) || (h = 2E3);
          var m = function(p) {
              return Math.max(h, p)
          };
          Ax("aelc", "mwt", m, 0);
          f || Ax("aelc", "nv.mwt", m, 0)
      }
      var n = function(p) {
          p.push(b);
          return p
      };
      Ax("aelc", "ids", n, []);
      f || Ax("aelc", "nv.ids", n, []);
      g && Ax("aelc", "aff.map", function(p) {
          p[b] = g;
          return p
      }, {});
      Bx("aelc", "init", !1) || (IA(), zx("aelc", "init", !0));
      return b
  }
  JA.H = "internal.enableAutoEventOnLinkClick";
  var KA, LA;
  var MA = function(a) {
          return Bx("sdl", a, {})
      },
      NA = function(a, b, c) {
          b && (Array.isArray(a) || (a = [a]), Ax("sdl", c, function(d) {
              for (var e = 0; e < a.length; e++) {
                  var f = String(a[e]);
                  d.hasOwnProperty(f) || (d[f] = []);
                  d[f].push(b)
              }
              return d
          }, {}))
      },
      QA = function() {
          var a = 250,
              b = !1;
          G.scrollingElement && G.documentElement && z.addEventListener && (a = 50, b = !0);
          var c = 0,
              d = !1,
              e = function() {
                  d ? c = z.setTimeout(e, a) : (c = 0, OA(), Bx("sdl", "init", !1) && !PA() && (vc(z, "scroll", f), vc(z, "resize", f), zx("sdl", "init", !1)));
                  d = !1
              },
              f = function() {
                  b && KA();
                  c ? d = !0 : (c =
                      z.setTimeout(e, a), zx("sdl", "pending", !0))
              };
          return f
      },
      OA = function() {
          var a = KA(),
              b = a.mh,
              c = a.nh,
              d = b / LA.scrollWidth * 100,
              e = c / LA.scrollHeight * 100;
          RA(b, "horiz.pix", "PIXELS", "horizontal");
          RA(d, "horiz.pct", "PERCENT", "horizontal");
          RA(c, "vert.pix", "PIXELS", "vertical");
          RA(e, "vert.pct", "PERCENT", "vertical");
          zx("sdl", "pending", !1)
      },
      RA = function(a, b, c, d) {
          var e = MA(b),
              f = {},
              g;
          for (g in e) {
              f.Jc = g;
              if (e.hasOwnProperty(f.Jc)) {
                  var h = Number(f.Jc);
                  if (!(a < h)) {
                      var m = {};
                      Nw((m.event = "gtm.scrollDepth", m["gtm.scrollThreshold"] = h,
                          m["gtm.scrollUnits"] = c.toLowerCase(), m["gtm.scrollDirection"] = d, m["gtm.triggers"] = e[f.Jc].join(","), m));
                      Ax("sdl", b, function(n) {
                          return function(p) {
                              delete p[n.Jc];
                              return p
                          }
                      }(f), {})
                  }
              }
              f = {
                  Jc: f.Jc
              }
          }
      },
      TA = function() {
          Ax("sdl", "scr", function(a) {
              a || (a = G.scrollingElement || G.body && G.body.parentNode);
              return LA = a
          }, !1);
          Ax("sdl", "depth", function(a) {
              a || (a = SA());
              return KA = a
          }, !1)
      },
      SA = function() {
          var a = 0,
              b = 0;
          return function() {
              var c = Ti(),
                  d = c.height;
              a = Math.max(LA.scrollLeft + c.width, a);
              b = Math.max(LA.scrollTop + d, b);
              return {
                  mh: a,
                  nh: b
              }
          }
      },
      PA = function() {
          return !!(Object.keys(MA("horiz.pix")).length || Object.keys(MA("horiz.pct")).length || Object.keys(MA("vert.pix")).length || Object.keys(MA("vert.pct")).length)
      };

  function UA(a, b) {
      var c = this;
      L(E(this), ["options:!DustMap", "triggerId:?*"], arguments);
      Sy([function() {
          return M(c, "process_dom_events", "window", "resize")
      }, function() {
          return M(c, "process_dom_events", "window", "scroll")
      }]);
      TA();
      if (!LA) return;
      b = Cx(b);
      var d = Xc(a);
      switch (d.horizontalThresholdUnits) {
          case "PIXELS":
              NA(d.horizontalThresholds, b, "horiz.pix");
              break;
          case "PERCENT":
              NA(d.horizontalThresholds, b, "horiz.pct")
      }
      switch (d.verticalThresholdUnits) {
          case "PIXELS":
              NA(d.verticalThresholds,
                  b, "vert.pix");
              break;
          case "PERCENT":
              NA(d.verticalThresholds, b, "vert.pct")
      }
      Bx("sdl", "init", !1) ? Bx("sdl", "pending", !1) || I(function() {
          return OA()
      }) : (zx("sdl", "init", !0), zx("sdl", "pending", !0), I(function() {
          OA();
          if (PA()) {
              var e = QA();
              uc(z, "scroll", e);
              uc(z, "resize", e)
          } else zx("sdl", "init", !1)
      }));
      return b
  }
  UA.H = "internal.enableAutoEventOnScroll";
  var fc = ea(["data-gtm-yt-inspected-"]),
      VA = ["www.youtube.com", "www.youtube-nocookie.com"],
      WA, XA = !1;
  var YA = function(a, b, c) {
          var d = a.map(function(g) {
              return {
                  Ba: g,
                  Ke: g,
                  He: void 0
              }
          });
          if (!b.length) return d;
          var e = b.map(function(g) {
              return {
                  Ba: g * c,
                  Ke: void 0,
                  He: g
              }
          });
          if (!d.length) return e;
          var f = d.concat(e);
          f.sort(function(g, h) {
              return g.Ba - h.Ba
          });
          return f
      },
      ZA = function(a) {
          a = void 0 === a ? [] : a;
          for (var b = [], c = 0; c < a.length; c++) 0 > a[c] || b.push(a[c]);
          b.sort(function(d, e) {
              return d - e
          });
          return b
      },
      $A = function(a) {
          a = void 0 === a ? [] : a;
          for (var b = [], c = 0; c < a.length; c++) 100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
          b.sort(function(d, e) {
              return d -
                  e
          });
          return b
      },
      aB = function(a, b) {
          var c, d;

          function e() {
              t = Vx(function() {
                  return {
                      url: w,
                      title: x,
                      oh: v,
                      zj: a.getCurrentTime(),
                      playbackRate: y
                  }
              }, b.ob, a.getIframe());
              v = 0;
              x = w = "";
              y = 1;
              return f
          }

          function f(F) {
              switch (F) {
                  case 1:
                      v = Math.round(a.getDuration());
                      w = a.getVideoUrl();
                      if (a.getVideoData) {
                          var K = a.getVideoData();
                          x = K ? K.title : ""
                      }
                      y = a.getPlaybackRate();
                      b.jh ? Nw(t.createEvent("start")) : t.fd();
                      u = YA(b.Qh, b.Ph, a.getDuration());
                      return g(F);
                  default:
                      return f
              }
          }

          function g() {
              A = a.getCurrentTime();
              B = Ua().getTime();
              t.Oj();
              r();
              return h
          }

          function h(F) {
              var K;
              switch (F) {
                  case 0:
                      return n(F);
                  case 2:
                      K = "pause";
                  case 3:
                      var H = a.getCurrentTime() - A;
                      K = 1 < Math.abs((Ua().getTime() - B) / 1E3 * y - H) ? "seek" : K || "buffering";
                      a.getCurrentTime() && (b.ih ? Nw(t.createEvent(K)) : t.fd());
                      q();
                      return m;
                  case -1:
                      return e(F);
                  default:
                      return h
              }
          }

          function m(F) {
              switch (F) {
                  case 0:
                      return n(F);
                  case 1:
                      return g(F);
                  case -1:
                      return e(F);
                  default:
                      return m
              }
          }

          function n() {
              for (; d;) {
                  var F = c;
                  z.clearTimeout(d);
                  F()
              }
              b.hh && Nw(t.createEvent("complete", 1));
              return e(-1)
          }

          function p() {}

          function q() {
              d &&
                  (z.clearTimeout(d), d = 0, c = p)
          }

          function r() {
              if (u.length && 0 !== y) {
                  var F = -1,
                      K;
                  do {
                      K = u[0];
                      if (K.Ba > a.getDuration()) return;
                      F = (K.Ba - a.getCurrentTime()) / y;
                      if (0 > F && (u.shift(), 0 === u.length)) return
                  } while (0 > F);
                  c = function() {
                      d = 0;
                      c = p;
                      0 < u.length && u[0].Ba === K.Ba && (u.shift(), Nw(t.createEvent("progress", K.He, K.Ke)));
                      r()
                  };
                  d = z.setTimeout(c, 1E3 * F)
              }
          }
          var t, u = [],
              v, w, x, y, A, B, D = e(-1);
          d = 0;
          c = p;
          return {
              onStateChange: function(F) {
                  D = D(F)
              },
              onPlaybackRateChange: function(F) {
                  A = a.getCurrentTime();
                  B = Ua().getTime();
                  t.fd();
                  y = F;
                  q();
                  r()
              }
          }
      },
      cB =
      function(a) {
          I(function() {
              function b() {
                  for (var d = c.getElementsByTagName("iframe"), e = d.length, f = 0; f < e; f++) bB(d[f], a)
              }
              var c = G;
              b();
              Kx(b)
          })
      },
      bB = function(a, b) {
          if (!a.getAttribute("data-gtm-yt-inspected-" + b.ob) && (ec(a, "data-gtm-yt-inspected-" + b.ob), dB(a, b.xe))) {
              a.id || (a.id = eB());
              var c = z.YT,
                  d = c.get(a.id);
              d || (d = new c.Player(a.id));
              var e = aB(d, b),
                  f = {},
                  g;
              for (g in e) f.ud = g, e.hasOwnProperty(f.ud) && d.addEventListener(f.ud, function(h) {
                  return function(m) {
                      return e[h.ud](m.data)
                  }
              }(f)), f = {
                  ud: f.ud
              }
          }
      },
      dB = function(a, b) {
          var c =
              a.getAttribute("src");
          if (fB(c, "embed/")) {
              if (0 < c.indexOf("enablejsapi=1")) return !0;
              if (b) {
                  var d;
                  var e = -1 !== c.indexOf("?") ? "&" : "?"; 
                  - 1 < c.indexOf("origin=") 
                    ? d = c + e + "enablejsapi=1" 
                    : (WA || (WA = "https://qa.testbs.net", G.location.port && (WA += ":" + G.location.port)), d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(WA)); // G.location.protocol + "//" + G.location.hostname
                  var f;
                  f = Hb(d);
                  a.src = Fb(f).toString();
                  return !0
              }
          }
          return !1
      },
      fB = function(a, b) {
          if (!a) return !1;
          for (var c = 0; c < VA.length; c++)
              if (0 <= a.indexOf("//" + VA[c] + "/" + b)) return !0;
          return !1
      },
      eB = function() {
          var a =
              Math.round(1E9 * Math.random()) + "";
          return G.getElementById(a) ? eB() : a
      };

  function gB(a, b) {
      var c = this;
      L(E(this), ["dustOptions:!DustMap", "triggerId:?*"], arguments);
      Sy([function() {
          return M(c, "process_dom_events", "element", "onStateChange")
      }, function() {
          return M(c, "process_dom_events", "element", "onPlaybackRateChange")
      }]);
      b = Cx(b);
      var d = !!a.get("captureStart"),
          e = !!a.get("captureComplete"),
          f = !!a.get("capturePause"),
          g = $A(Xc(a.get("progressThresholdsPercent"))),
          h = ZA(Xc(a.get("progressThresholdsTimeInSeconds"))),
          m = !!a.get("fixMissingApi");
      if (!(d || e || f || g.length || h.length)) return;
      var n = {
              jh: d,
              hh: e,
              ih: f,
              Ph: g,
              Qh: h,
              xe: m,
              ob: b
          },
          p = z.YT,
          q = function() {
              cB(n)
          };
      if (p) return p.ready && p.ready(q), b;
      var r = z.onYouTubeIframeAPIReady;
      z.onYouTubeIframeAPIReady = function() {
          r && r();
          q()
      };
      I(function() {
          for (var t = G.getElementsByTagName("script"), u = t.length, v = 0; v < u; v++) {
              var w = t[v].getAttribute("src");
              if (fB(w, "iframe_api") || fB(w, "player_api")) return b
          }
          for (var x = G.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++)
              if (!XA && dB(x[A], n.xe)) return qc("https://www.youtube.com/iframe_api"),
                  XA = !0, b
      });
      return b
  }
  gB.H = "internal.enableAutoEventOnYouTubeActivity";
  var hB;

  function iB(a) {
      var b = !1;
      return b
  }
  iB.H = "internal.evaluateMatchingRules";
  var jB = function(a) {
          var b = a[P.g.nf];
          if (b) return b;
          var c = a[P.g.ia];
          if (k(c)) {
              if (Ha(URL)) try {
                  return (new URL(c)).hostname
              } catch (e) {
                  return
              }
              var d = hj(c);
              if (d.hostname) return fj(d, "host")
          }
      },
      lB = function(a, b, c) {
          if (c) switch (c.type) {
              case "event_name":
                  return a;
              case "const":
                  return c.const_value;
              case "event_param":
                  var d = c.event_param.param_name;
                  if (d === P.g.Pb) return kB(b);
                  return d === P.g.nf ? jB(b) : b[d]
          }
      },
      pB = function(a,
          b, c, d) {
          mB = !1;
          if (c && !nB(a, b, c)) return !1;
          if (!d || 0 === d.length) return !0;
          for (var e = 0; e < d.length; e++)
              if (oB(a, b, d[e].predicates || [])) return !0;
          return !1
      },
      oB = function(a, b, c) {
          for (var d = 0; d < c.length; d++)
              if (!nB(a, b, c[d])) return !1;
          return !0
      },
      nB = function(a, b, c) {
          var d = c.values || [],
              e = lB(a, b, d[0]),
              f = lB(a, b, d[1]),
              g = c.type;
          if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g) k(e) && (e = e.toLowerCase()), k(f) && (f = f.toLowerCase());
          var h = !1;
          switch (g) {
              case "eq":
              case "eqi":
                  h = Uf(e, f);
                  break;
              case "sw":
              case "swi":
                  h = Zf(e, f);
                  break;
              case "ew":
              case "ewi":
                  h =
                      Qf(e, f);
                  break;
              case "cn":
              case "cni":
                  h = Tf(e, f);
                  break;
              case "lt":
                  h = Yf(e, f);
                  break;
              case "le":
                  h = Wf(e, f);
                  break;
              case "gt":
                  h = Xf(e, f);
                  break;
              case "ge":
                  h = Vf(e, f);
                  break;
              case "re":
              case "rei":
                  void 0 !== e && (h = Sf(e, f, "rei" === g))
          }
          return !!c.negate !== h
      },
      mB = !1;
  var kB = function(a) {
          var b = a[P.g.Pb];
          if (b) return b;
          mB = !0;
          var c = a[P.g.ia];
          if (k(c)) {
              var d = T(57);
              if (Ha(URL)) try {
                  var e = new URL(c);
                  return e.pathname + qB(d ? e.search : "")
              } catch (h) {
                  return
              }
              var f = hj(c);

              if (f.hostname) {
                  var g = d ?
                      fj(f, "query") : "";
                  g && (g = "?" + g);
                  return fj(f, "path") + qB(g)
              }
          }
      },
      qB = function(a) {
          if (!T(72) || !a) return a;
          var b = a.split("&"),
              c = [];
          b[0] = b[0].substring(1);
          for (var d = 0; d < b.length; d++) {
              var e = b[d],
                  f = e.indexOf("=");
              rB[0 <= f ? e.substring(0, f) : e] || c.push(b[d])
          }
          return c.length ? "?" + c.join("&") : ""
      },
      rB = Object.freeze({
          __utma: 1,
          __utmb: 1,
          __utmc: 1,
          __utmk: 1,
          __utmv: 1,
          __utmx: 1,
          __utmz: 1,
          __ga: 1,
          _gac: 1,
          _gl: 1,
          dclid: 1,
          gbraid: 1,
          gclid: 1,
          gclsrc: 1,
          utm_campaign: 1,
          utm_content: 1,
          utm_expid: 1,
          utm_id: 1,
          utm_medium: 1,
          utm_nooverride: 1,
          utm_referrer: 1,
          utm_source: 1,
          utm_term: 1,
          wbraid: 1
      });

  function sB(a, b) {
      var c = !1;
      return c
  }
  sB.H = "internal.evaluatePredicates";
  var tB = function(a) {
      var b;
      return b
  };

  function uB(a, b) {
      b = void 0 === b ? !0 : b;
      var c;
      return c
  }
  uB.K = "getCookieValues";

  function vB() {
      return Gi()
  }
  vB.H = "internal.getCountryCode";

  function wB() {
      var a = [];
      a = Tl();
      return Wc(a)
  }
  wB.H = "internal.getDestinationIds";

  function xB(a) {
      var b = null;
      return b
  }
  xB.K = "getElementById";
  var yB = {};
  yB.deferGaGamLink = T(129);
  yB.enableAddFormDataApi = T(127);
  yB.enableAddGoogleTagRestrictionApi = T(91);
  yB.enableAdsConversionValidation = T(83);
  yB.enableAdsHistoryChangeEvents = T(36);
  yB.enableAutoPiiOnPhoneAndAddress = T(114);
  yB.enableCcdAutoRedaction = T(92);
  yB.enableCcdEventEditingAndCreation = T(26);
  yB.enableCcdPreAutoPiiDetection = T(49);
  yB.enableCcdUserData = T(16);
  yB.enableConsentDisclosureActivity = T(124);
  yB.enableDeferAllEnhancedMeasurement = T(126);
  yB.enableEesPagePath = T(43);
  yB.enableEuidAutoMode = T(37);
  yB.enableFormSkipValidation = T(116);
  yB.enableGa4OnoRemarketing = T(34);
  yB.enableMergeRemoteConfigApi = T(137);
  yB.enableRemoveFormDataApi = T(128);
  yB.includeQueryInEesPagePath = T(57);
  yB.pixieSetCorePlatformServices = T(105);
  yB.useEnableAutoEventOnFormApis = T(91);
  yB.autoPiiEligible = Li();

  function zB() {
      return Wc(yB)
  }
  zB.H = "internal.getFlags";

  function AB(a, b) {
      var c;
      L(E(this), ["targetId:!string", "name:!string"], arguments);
      var d = Qi(a) || {};
      c = Wc(d[b], this.h);
      return c
  }
  AB.H = "internal.getProductSettingsParameter";

  function BB(a, b) {
      var c;
      L(E(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
      M(this, "get_url", "query", a);
      var d = fj(hj( 'https://qa.testbs.net/en/' ), "query"), // z.location.href
          e = cj(d, a, b);
      c = Wc(e, this.h);
      return c
  }
  BB.K = "getQueryParameters";

  function CB(a, b) {
      var c;
      return c
  }
  CB.K = "getReferrerQueryParameters";

  function DB(a) {
      var b = "";
      return b
  }
  DB.K = "getReferrerUrl";

  function EB() {
      return Hi()
  }
  EB.H = "internal.getRegionCode";

  function FB(a, b) {
      var c;
      L(E(this), ["targetId:!string", "name:!string"], arguments);
      var d = Ov(a);
      c = Wc(d[b], this.h);
      return c
  }
  FB.H = "internal.getRemoteConfigParameter";

  function GB(a) {
      var b = "";
      L(E(this), ["component:?string"], arguments), M(this, "get_url", a), b = fj(hj( 'https://qa.testbs.net/en/' ), a); // z.location.href
      return b
  }
  GB.K = "getUrl";

  function HB() {
      M(this, "get_user_agent");
      return jc.userAgent
  }
  HB.K = "getUserAgent";
  var IB = function(a) {
          var b = !1;
          b = Op(a, "google_ono", !1);
          return b
      },
      JB = function(a) {
          if (a.metadata.is_merchant_center || !$s(a.h)) return !1;
          if (!U(a.h, P.g.rf)) {
              var b = U(a.h, P.g.Md);
              return !0 === b || "true" === b
          }
          return !0
      },
      KB = function(a) {
          var b = a.metadata.user_data;
          if (Vc(b)) return b
      },
      LB = function(a, b) {
          var c = Op(a, P.g.Kd, a.h.B[P.g.Kd]);
          if (c && void 0 !== c[b || a.eventName]) return c[b || a.eventName]
      },
      MB = function(a,
          b, c) {
          a.m[P.g.oe] || (a.m[P.g.oe] = {});
          a.m[P.g.oe][b] = c
      };
  var NB = !1,
      OB = function(a) {
          var b = a.eventName === P.g.fc && Fk() && JB(a),
              c = a.metadata.batch_on_navigation,
              d = a.metadata.is_conversion,
              e = a.metadata.is_session_start,
              f = a.metadata.create_dc_join,
              g = a.metadata.create_google_join,
              h = a.metadata.euid_mode_enabled && !!KB(a);
          return !(!jc.sendBeacon || d || h || e || f || g || b || !c && NB)
      };
  var PB = function(a) {
      xb("GA4_EVENT", a)
  };
  var RB = function(a) {
          return !a || QB.test(a) || Ah.hasOwnProperty(a)
      },
      SB = function(a, b, c) {
          for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
              var f = d[e];
              if (f.edit_param) {
                  var g = f.edit_param.param_name,
                      h = lB(a, b, f.edit_param.param_value),
                      m;
                  if (h) {
                      var n = Number(h);
                      m = isNaN(n) ? h : n
                  } else m = h;
                  b[g] = m
              } else f.delete_param && delete b[f.delete_param.param_name]
          }
      },
      QB = /^(_|ga_|google_|gtag\.|firebase_).*$/;
  var TB = function(a) {
          var b = 0,
              c = 0;
          return {
              start: function() {
                  b = Va()
              },
              stop: function() {
                  c = this.get()
              },
              get: function() {
                  var d = 0;
                  a.yh() && (d = Va() - b);
                  return d + c
              }
          }
      },
      UB = function() {
          this.h = void 0;
          this.m = 0;
          this.isActive = this.isVisible = this.B = !1;
          this.J = this.C = void 0
      };
  ba = UB.prototype;
  ba.yk = function(a) {
      var b = this;
      if (!this.h) {
          this.B = G.hasFocus();
          this.isVisible = !G.hidden;
          this.isActive = !0;
          var c = function(d, e, f) {
              uc(d, e, function(g) {
                  b.h.stop();
                  f(g);
                  b.yh() && b.h.start()
              })
          };
          c(z, "focus", function() {
              b.B = !0
          });
          c(z, "blur", function() {
              b.B = !1
          });
          c(z, "pageshow", function(d) {
              b.isActive = !0;
              d.persisted && O(56);
              b.J && b.J()
          });
          c(z, "pagehide", function() {
              b.isActive = !1;
              b.C && b.C()
          });
          c(G, "visibilitychange", function() {
              b.isVisible = !G.hidden
          });
          JB(a) && -1 === (jc.userAgent || "").indexOf("Firefox") && -1 === (jc.userAgent || "").indexOf("FxiOS") && c(z, "beforeunload", function() {
              NB = !0
          });
          this.Sh();
          this.m = 0
      }
  };
  ba.Sh = function() {
      this.m += this.Of();
      this.h = TB(this);
      this.yh() && this.h.start()
  };
  ba.Am = function(a) {
      var b = this.Of();
      0 < b && (a.m[P.g.Id] = b)
  };
  ba.sl = function(a) {
      a.m[P.g.Id] =
          void 0;
      this.Sh();
      this.m = 0
  };
  ba.yh = function() {
      return this.B && this.isVisible && this.isActive
  };
  ba.kl = function() {
      return this.m + this.Of()
  };
  ba.Of = function() {
      return this.h && this.h.get() || 0
  };
  ba.fm = function(a) {
      this.C = a
  };
  ba.Lj = function(a) {
      this.J = a
  };

  function VB() {
      return z.gaGlobal = z.gaGlobal || {}
  }
  var WB = function() {
          var a = VB();
          a.hid = a.hid || Ma();
          return a.hid
      },
      XB = function(a, b) {
          var c = VB();
          if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
      };
  var YB = function(a, b, c) {
          var d = a.metadata.client_id_source;
          if (void 0 === d || c <= d) a.m[P.g.cb] = b, a.metadata.client_id_source = c
      },
      aC = function(a, b) {
          var c;
          var d = b.metadata.cookie_options,
              e = d.prefix + "_ga",
              f = $n(d, void 0, void 0, P.g.O);
          if (!1 === U(b.h, P.g.fb) && ZB(b) === a) c = !0;
          else {
              var g = Il(a, $B[0], d.domain, d.path);
              c = 1 !== Al(e, g, f)
          }
          return c
      },
      ZB = function(a) {
          var b = a.metadata.cookie_options,
              c = b.prefix + "_ga",
              d = Hl(c, b.domain, b.path, $B, P.g.O);
          if (!d) {
              var e = String(U(a.h, P.g.ic, ""));
              e && e != c && (d = Hl(e, b.domain, b.path, $B, P.g.O))
          }
          return d
      },
      $B = ["GA1"],
      bC = function(a, b) {
          var c = a.m[P.g.cb];
          if (U(a.h, P.g.yb) && U(a.h, P.g.Nb) || b && c === b) return c;
          if (c) {
              c = "" + c;
              if (!aC(c, a)) return O(31), a.isAborted = !0, "";
              XB(c, Ck(P.g.O));
              return c
          }
          O(32);
          a.isAborted = !0;
          return ""
      };
  var eC = function(a, b, c) {
          if (!b) return a;
          if (!a) return b;
          var d = cC(a);
          if (!d) return b;
          var e, f = Qa(null != (e = U(c.h, P.g.ad)) ? e : 30);
          if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.Ee + 60 * f)) return a;
          var g = cC(b);
          if (!g) return a;
          g.Ec = d.Ec + 1;
          var h;
          return null != (h = dC(g.sessionId, g.Ec, g.md, g.Ee, g.Ch, g.Cc, g.ue)) ? h : b
      },
      hC = function(a, b) {
          var c = b.metadata.cookie_options,
              d = fC(b, c),
              e = Il(a, gC[0], c.domain, c.path),
              f = {
                  Fb: P.g.O,
                  domain: c.domain,
                  path: c.path,
                  expires: c.Db ? new Date(Va() + 1E3 * c.Db) : void 0,
                  flags: c.flags
              };
          Al(d,
              void 0, f);
          return 1 !== Al(d, e, f)
      },
      iC = function(a) {
          var b = a.metadata.cookie_options,
              c = fC(a, b),
              d = Hl(c, b.domain, b.path, gC, P.g.O);
          if (!d) return d;
          var e = rl(c, void 0, void 0, P.g.O);
          if (d && 1 < e.length) {
              O(114);
              for (var f = void 0, g = void 0, h = 0; h < e.length; h++) {
                  var m = e[h].split(".");
                  if (!(7 > m.length)) {
                      var n = Number(m[5]);
                      n && (!g || n > g) && (g = n, f = e[h])
                  }
              }
              f && !f.endsWith(d) && (O(115), d = f.split(".").slice(2).join("."))
          }
          return d
      },
      dC = function(a, b, c, d, e, f, g) {
          if (a && b) {
              var h = [a, b, Qa(c), d, e];
              h.push(f ? "1" : "0");
              h.push(g || "0");
              return h.join(".")
          }
      },
      gC = ["GS1"],
      fC = function(a, b) {
          return b.prefix + "_ga_" + a.target.I[0]
      },
      cC = function(a) {
          if (a) {
              var b = a.split(".");
              if (!(5 > b.length || 7 < b.length)) {
                  7 > b.length && O(67);
                  var c = Number(b[1]),
                      d = Number(b[3]),
                      e = Number(b[4] || 0);
                  c || O(118);
                  d || O(119);
                  isNaN(e) && O(120);
                  if (!T(74) || c && d && !isNaN(e)) return {
                      sessionId: b[0],
                      Ec: c,
                      md: !!Number(b[2]),
                      Ee: d,
                      Ch: e,
                      Cc: "1" === b[5],
                      ue: "0" !== b[6] ? b[6] : void 0
                  }
              }
          }
      },
      jC = function(a) {
          return dC(a.m[P.g.jb], a.m[P.g.Vd], a.m[P.g.Ud], Math.floor(a.metadata.event_start_timestamp_ms / 1E3), a.metadata.join_timer_sec ||
              0, !!a.metadata[P.g.ff], a.m[P.g.Wc])
      };
  var kC = function(a) {
          var b = U(a.h, P.g.za),
              c = a.h.B[P.g.za];
          if (c === b) return c;
          var d = J(b);
          c && c[P.g.T] && (d[P.g.T] = (d[P.g.T] || []).concat(c[P.g.T]));
          return d
      },
      lC = function(a, b) {
          var c = to(!0);
          return "1" !== c._up ? {} : {
              clientId: c[a],
              Zf: c[b]
          }
      },
      mC = function(a, b, c) {
          var d = to(!0),
              e = d[b];
          e && (YB(a, e, 2), aC(e, a));
          var f = d[c];
          f && hC(f, a);
          return {
              clientId: e,
              Zf: f
          }
      },
      nC = !1,
      oC = function(a) {
          var b = kC(a) || {},
              c = a.metadata.cookie_options,
              d = c.prefix + "_ga",
              e = fC(a, c),
              f = {};
          Co(b[P.g.oc], !!b[P.g.T]) && (f = mC(a, d, e), f.clientId && f.Zf && (nC = !0));
          b[P.g.T] &&
              zo(function() {
                  var g = {},
                      h = ZB(a);
                  h && (g[d] = h);
                  var m = iC(a);
                  m && (g[e] = m);
                  var n = rl("FPLC", void 0, void 0, P.g.O);
                  n.length && (g._fplc = n[0]);
                  return g
              }, b[P.g.T], b[P.g.Ob], !!b[P.g.zb]);
          return f
      },
      qC = function(a) {
          if (!U(a.h, P.g.kb)) return {};
          var b = a.metadata.cookie_options,
              c = b.prefix + "_ga",
              d = fC(a, b);
          Ao(function() {
              var e;
              if (Ck("analytics_storage")) e = {};
              else {
                  var f = {};
                  e = (f._up = "1", f[c] = a.m[P.g.cb], f[d] = jC(a), f)
              }
              return e
          }, 1);
          return !Ck("analytics_storage") && pC() ? lC(c, d) : {}
      },
      pC = function() {
          var a = ej(z.location, "host"),
              b = ej(hj(G.referrer),
                  "host");
          return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
      },
      rC = function(a) {
          if (!a) return a;
          var b = String(a);
          b = so(b);
          return b = so(b, "_ga")
      };
  var sC = function() {
      var a = Va(),
          b = a + 864E5,
          c = 20,
          d = 5E3;
      return function() {
          var e = Va();
          e >= b && (b = e + 864E5, d = 5E3);
          if (1 > d) return !1;
          c = Math.min(c + (e - a) / 1E3 * 5, 20);
          a = e;
          if (1 > c) return !1;
          d--;
          c--;
          return !0
      }
  };
  var tC = function() {
          var a = !0;
          ln(7) && ln(9) && ln(10) || (a = !1);
          return a
      },
      uC = function() {
          var a = !0;
          ln(3) && ln(4) || (a = !1);
          return a
      };
  var vC = function(a, b) {
          Fk() && (a.gcs = el(), T(106) && (a.gcd = il()), b.metadata.is_consent_update && (a.gcu = "1"))
      },
      yC = function(a) {
          if (a.metadata.is_merchant_center) return "https://www.merchant-center-analytics.goog/mc/collect";
          var b = Ys($s(a.h), "/g/collect");
          if (b) return b;
          var c = Op(a, P.g.ib, U(a.h, P.g.ib));
          c = c || IB(a);
          var d = U(a.h, P.g.ub);
          return c && !Ii() && !1 !== d && tC() && Ck(P.g.F) && Ck(P.g.O) ? wC() : xC()
      },
      zC = !1;
  zC = !0;
  var AC = {};
  AC[P.g.cb] = "cid";
  AC[P.g.hf] = "_fid";
  AC[P.g.Bg] = "_geo";
  AC[P.g.xb] = "gdid";
  AC[P.g.Rd] = "ir";
  AC[P.g.ya] = "ul";
  AC[P.g.Zc] = "_rdi";
  AC[P.g.Bb] = "sr";
  AC[P.g.Xi] = "tid";
  AC[P.g.vf] = "tt";
  AC[P.g.wf] = "ec_mode";
  AC[P.g.fj] = "gtm_up";
  AC[P.g.Xd] = "uaa", AC[P.g.Yd] = "uab", AC[P.g.Zd] = "uafvl", AC[P.g.ae] = "uamb", AC[P.g.be] = "uam", AC[P.g.ce] = "uap", AC[P.g.de] = "uapv", AC[P.g.ee] = "uaw";
  var BC = {};
  BC[P.g.Lc] = "cc";
  BC[P.g.Mc] = "ci";
  BC[P.g.Nc] = "cm";
  BC[P.g.Oc] =
      "cn";
  BC[P.g.Qc] = "cs";
  BC[P.g.Rc] = "ck";
  BC[P.g.sa] = "cu";
  BC[P.g.ia] = "dl";
  BC[P.g.Fa] = "dr";
  BC[P.g.Ab] = "dt";
  BC[P.g.Ud] = "seg";
  BC[P.g.jb] = "sid";
  BC[P.g.Vd] = "sct";
  BC[P.g.Aa] = "uid";
  T(80) && (BC[P.g.Pb] = "dp");
  var CC = {};
  CC[P.g.Id] = "_et";
  CC[P.g.wb] = "edid";
  var DC = {};
  DC[P.g.Lc] = "cc";
  DC[P.g.Mc] = "ci";
  DC[P.g.Nc] = "cm";
  DC[P.g.Oc] = "cn";
  DC[P.g.Qc] = "cs";
  DC[P.g.Rc] = "ck";
  var EC = {},
      FC = Object.freeze((EC[P.g.oa] = 1, EC)),
      xC = function() {
          var a = "www";
          zC && Ki() && (a = Ki());
          return "https://" + a + ".google-analytics.com/g/collect"
      },
      wC = function() {
          var a;
          zC && "" !== Ki() && (a = Ki());
          return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
      },
      GC = function(a, b, c) {
          var d = {},
              e = {},
              f = {};
          d.v = "2";
          d.tid = a.target.ba;
          IB(a) && !Ii() && (d._ono = 1);
          d.gtm = gm();
          d._p = WB();
          c && (d.em = c);
          a.metadata.create_google_join && (d._gaz = 1);
          vC(d, a);
          T(109) && (Vk() && (d.dma_cps = jl()), Ji() && (d.dma = "1"));
          var g = a.m[P.g.xb];
          g && (d.gdid = g);
          e.en = String(a.eventName);
          a.metadata.is_first_visit &&
              (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
          a.metadata.is_new_to_site && (e._nsi = 1);
          a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
          a.metadata.is_conversion && (e._c = 1);
          a.metadata.is_external_event && (e._ee = 1);
          if (a.metadata.is_ecommerce) {
              var h = a.m[P.g.Z] || U(a.h, P.g.Z);
              if (Ka(h))
                  for (var m = 0; m < h.length && 200 > m; m++) e["pr" + (m + 1)] = Ff(h[m])
          }
          var n = a.m[P.g.wb];
          n && (e.edid = n);
          var p = function(r, t) {
              if ("object" !== typeof t || !FC[r]) {
                  var u = "ep." + r,
                      v = "epn." + r;
                  r = Ia(t) ? v : u;
                  var w = Ia(t) ? u :
                      v;
                  e.hasOwnProperty(w) && delete e[w];
                  e[r] = String(t)
              }
          };
          l(a.m, function(r, t) {
              if (void 0 !== t && !yh.hasOwnProperty(r)) {
                  null === t && (t = "");
                  var u;
                  r !== P.g.Wc ? u = !1 : a.metadata.euid_mode_enabled ? (d.ecid = t, u = !0) : u = void 0;
                  if (!u && r !== P.g.ff) {
                      var v = t;
                      !0 === t && (v = "1");
                      !1 === t && (v = "0");
                      v = String(v);
                      var w;
                      if (AC[r]) w = AC[r], d[w] = v;
                      else if (BC[r]) w = BC[r], f[w] = v;
                      else if (CC[r]) w = CC[r], e[w] = v;
                      else if ("_" === r.charAt(0)) d[r] = v;
                      else {
                          var x;
                          DC[r] ? x = !0 : r !== P.g.Pc ? x = !1 : ("object" !== typeof t && p(r, t), x = !0);
                          x || p(r, t)
                      }
                  }
              }
          });
          (function(r) {
              JB(a) &&
                  "object" === typeof r && l(r || {}, function(t, u) {
                      "object" !== typeof u && (d["sst." + t] = String(u))
                  })
          })(a.m[P.g.oe]);
          var q = a.m[P.g.Ra] || {};
          !1 !== U(a.h, P.g.X) && uC() || (q._npa = "1");
          T(28) && !1 === U(a.h, P.g.ub) && (d.ngs = "1");
          l(q, function(r, t) {
              void 0 !== t && ((null === t && (t = ""), r !== P.g.Aa || f.uid) ? b[r] !== t && (e[(Ia(t) ? "upn." : "up.") + String(r)] = String(t), b[r] = t) : f.uid = String(t))
          });
          return Hf.call(this, {
              Sa: d,
              Fc: f,
              ph: e
          }, yC(a), JB(a)) || this
      };
  ra(GC, Hf);
  var HC = function(a, b) {
          return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
              return b[d] || c
          })
      },
      IC = function(a) {
          var b = a.search;
          return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
      },
      JC = function(a) {
          var b = {},
              c = "",
              d = a.pathname.indexOf("/g/collect");
          0 <= d && (c = a.pathname.substring(0, d));

          b.transport_url = a.protocol + "//" + a.hostname + c;
          return b
      },
      KC = function(a, b) {
          var c = new z.XMLHttpRequest;
          c.withCredentials = !0;
          var d = b ? "POST" : "GET",
              e = "",
              f = 0,
              g = hj(a),
              h = JC(g),
              m = IC(g);
          c.onprogress = function(n) {
              if (200 ===
                  c.status) {
                  e += c.responseText.substring(f);
                  f = n.loaded;
                  for (var p = HC(e, h), q = p.indexOf("\n\n"); - 1 !== q;) {
                      var r;
                      a: {
                          var t = ia(p.substring(0, q).split("\n")),
                              u = t.next().value,
                              v = t.next().value;
                          if (u.startsWith("event: message") && v.startsWith("data: ")) try {
                              r = JSON.parse(v.substring(v.indexOf(":") + 1));
                              break a
                          } catch (D) {}
                          r = void 0
                      }
                      var w = r;
                      if (w) {
                          var x = w.send_pixel || [];
                          if (Array.isArray(x))
                              for (var y = 0; y < x.length; y++) tc(x[y]);
                          if (T(66)) {
                              var A = w.send_beacon || [];
                              if (Array.isArray(A))
                                  for (var B = 0; B < A.length; B++) Ac(A[B])
                          }
                      }
                      p = p.substring(q +
                          2);
                      q = p.indexOf("\n\n")
                  }
                  e = p
              }
          };
          c.open(d, m);
          c.send(b)
      };
  var NC = function(a, b, c, d) {
          var e = a + "?" + b;
          LC && (d = !(0 === e.indexOf(xC()) || 0 === e.indexOf(wC())));
          d && !NB ? KC(e, c) : MC(a, b, c)
      },
      OC = function(a, b) {
          function c(r) {
              p.push(r + "=" + encodeURIComponent("" + a.Sa[r]))
          }
          var d = b.om,
              e = b.qm,
              f = b.nl,
              g = b.Mk,
              h = b.Lk,
              m = b.Al,
              n = b.zl;
          if (d || e) {
              var p = [];
              a.Sa._ono && c("_ono");
              c("tid");
              c("cid");
              c("gtm");
              p.push("aip=1");
              a.Fc.uid && !n && p.push("uid=" + encodeURIComponent("" + a.Fc.uid));
              d && (MC("https://stats.g.doubleclick.net/g/collect", "v=2&" + p.join("&")), Mk("https://stats.g.doubleclick.net/g/collect?v=2&" + p.join("&")));
              if (e) {
                  p.push("z=" + Ma());
                  if (!m) {
                      var q = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                      q && tc(q + p.join("&"))
                  }
                  T(28) && !NB && g && h && Iq() && function() {
                      var r = Kq() + "/td/ga/rul?";
                      p = [];
                      c("tid");
                      p.push("gacid=" + encodeURIComponent(String(a.Sa.cid)));
                      c("gtm");
                      p.push("aip=1");
                      p.push("fledge=1");
                      p.push("z=" +
                          Ma());
                      Jq(r + p.join("&"), a.Sa.tid)
                  }()
              }
          }
      },
      LC = !1;
  var PC = function() {
      this.C = 1;
      this.J = {};
      this.h = new If;
      this.m = -1
  };
  PC.prototype.B = function(a, b) {
      var c = this,
          d = new GC(a, this.J, b),
          e = OB(a);
      e && this.h.C(d) || this.flush();
      if (e && this.h.add(d)) {
          if (0 > this.m) {
              var f = z.setTimeout,
                  g;
              JB(a) ? QC ? (QC = !1, g = RC) : g = SC : g = 5E3;
              this.m = f.call(z, function() {
                  return c.flush()
              }, g)
          }
      } else {
          var h = Kf(d, this.C++);
          NC(d.m, h.Mh, h.body, d.C);
          var m = a.metadata.create_dc_join,
              n = a.metadata.create_google_join,
              p = !1 !== U(a.h, P.g.Da),
              q = !1 !== U(a.h, P.g.X),
              r = {
                  eventId: a.h.eventId,
                  priorityId: a.h.priorityId
              },
              t = {
                  om: m,
                  qm: n,
                  nl: Mi(),
                  Mk: p,
                  Lk: q,
                  Al: Ii(),
                  zl: a.metadata.euid_mode_enabled,
                  Wm: r
              };
          OC(d, t)
      }
      ps(a)
  };
  PC.prototype.add = function(a) {
      a.metadata.euid_mode_enabled && !NB ? this.R(a) : this.B(a)
  };
  PC.prototype.flush = function() {
      if (this.h.events.length) {
          var a = Lf(this.h, this.C++);
          NC(this.h.h, a.Mh, a.body, this.h.m);
          this.h = new If;
          0 <= this.m && (z.clearTimeout(this.m),
              this.m = -1)
      }
  };
  PC.prototype.R = function(a) {
      var b = this,
          c = KB(a);
      c ? vh(c, function(d) {
          b.B(a, 1 === d.split("~").length ? void 0 : d)
      }) : this.B(a)
  };
  var MC = function(a, b, c) {
          var d = a + "?" + b;
          if (c) try {
              jc.sendBeacon && jc.sendBeacon(d, c)
          } catch (e) {
              xb("TAGGING", 15)
          } else Ac(d)
      },
      RC = hm('', 500),
      SC = hm('', 5E3),
      QC = !0;
  var TC = function(a, b, c) {
          void 0 === c && (c = {});
          if ("object" === typeof b)
              for (var d in b) TC(a + "." + d, b[d], c);
          else c[a] = b;
          return c
      },
      UC = function(a) {
          if (JB(a)) {
              var b = function(d) {
                      var e = TC(P.g.oa, d);
                      l(e, function(f, g) {
                          a.m[f] = g
                      })
                  },
                  c = U(a.h, P.g.oa);
              void 0 !== c ? b(c) : b(a.metadata.user_data);
              a.metadata.user_data = void 0
          }
      };
  var VC = window,
      WC = document,
      XC = function(a) {
          var b = VC._gaUserPrefs;
          if (b && b.ioo && b.ioo() || WC.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === VC["ga-disable-" + a]) return !0;
          try {
              var c = VC.external;
              if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
          } catch (f) {}
          for (var d = ll("AMP_TOKEN", String(WC.cookie), !0), e = 0; e < d.length; e++)
              if ("$OPT_OUT" == d[e]) return !0;
          return WC.getElementById("__gaOptOutExtension") ? !0 : !1
      };
  var YC = function(a, b, c) {
          c || (c = function() {});
          void 0 !== a.m[b] && (a.m[b] = c(a.m[b]))
      },
      ZC = function(a, b) {
          var c = P.g.F;
          Ck(c) || Xk(function() {
              b.metadata.is_consent_update = !0;
              var d = Ih[c || ""];
              d && MB(b, "gcut", d);
              a.sj(b)
          }, c)
      },
      Xn = {
          Vk: "",
          Dm: Number("")
      },
      $C = {},
      aD = ($C[P.g.Lc] = 1, $C[P.g.Mc] = 1, $C[P.g.Nc] = 1, $C[P.g.Oc] = 1, $C[P.g.Qc] = 1, $C[P.g.Rc] = 1, $C),
      bD = function(a) {
          this.rb = a;
          this.yd = new PC;
          this.h = void 0;
          this.C = new UB;
          this.m = this.B = void 0;
          this.R = !1;
          this.ie = void 0;
          this.he = !1;
          this.Xg = 0;
          this.J = !1
      };
  ba = bD.prototype;
  ba.Zl = function(a, b, c) {
      var d = this,
          e = yp(this.rb);
      if (e)
          if (c.eventMetadata.is_external_event && "_" === a.charAt(0)) c.W();
          else {
              a !== P.g.la && a !== P.g.Ja && RB(a) && O(58);
              cD(c.h);
              var f = new Np(e, a, c);
              f.metadata.event_start_timestamp_ms = b;
              var g = [P.g.O];
              (Op(f, P.g.ib, U(f.h, P.g.ib)) || JB(f)) && g.push(P.g.F);
              var h = function() {
                  Yk(function() {
                      d.am(f)
                  }, g)
              };
              T(11) && T(25) ? Yn(h) : h()
          }
      else c.W()
  };
  ba.am = function(a) {
      this.m = a;
      try {
          if (XC(a.target.ba)) O(28), a.isAborted = !0;
          else if (T(97)) {
              var b;
              var c =
                  Xl(bm()),
                  d = c && c.parent;
              b = d ? Xl(d) : void 0;
              if (b && Ka(b.destinations))
                  for (var e = 0; e < b.destinations.length; e++)
                      if (XC(b.destinations[e])) {
                          O(125);
                          a.isAborted = !0;
                          break
                      }
          }
          if (0 <= Xn.Vk.replace(/\s+/g, "").split(",").indexOf(a.eventName)) a.isAborted = !0;
          else {
              var f = LB(a);
              f && f.blacklisted && (a.isAborted = !0)
          }
          var g = 'https:'; // G.location.protocol
          "http:" != g && "https:" != g && (O(29), a.isAborted = !0);
          jc && "preview" == jc.loadPurpose && (O(30), a.isAborted = !0);
          T(108) && (a.isAborted = !0);
          Dq(a);
          var h = Mh.grl;
          h || (h = sC(), Mh.grl = h);
          h() || (O(35), a.isAborted = !0);
          if (a.isAborted) {
              a.h.W();
              yb();
              return
          }
          var m = {
              prefix: String(U(a.h, P.g.La, "")),
              path: String(U(a.h, P.g.Tc, "/")),
              flags: String(U(a.h, P.g.Oa, "")),
              domain: String(U(a.h, P.g.Na, "auto")),
              Db: Number(U(a.h, P.g.Ea, 63072E3))
          };
          a.metadata.cookie_options = m;
          dD(a);
          this.zk(a);
          this.C.Am(a);
          a.metadata.is_merchant_center ? a.metadata.euid_mode_enabled = !1 : U(a.h, P.g.pf) ? a.metadata.euid_mode_enabled = !1 : Op(a, "ccd_add_1p_data", !1) ? a.metadata.euid_mode_enabled = !0 : a.metadata.euid_mode_enabled = T(16) ? !1 : bk(Zj(a.h));
          if (a.metadata.euid_mode_enabled) {
              var n =
                  Zj(a.h);
              if (bk(n)) {
                  var p = U(a.h, P.g.oa);
                  if (Op(a, "ccd_add_1p_data", !1)) null === p ? a.metadata.user_data_from_code = null : (n.enable_code && Vc(p) && (a.metadata.user_data_from_code = p), Vc(n.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = Yj(n.selectors)));
                  else if (void 0 !== p) a.metadata.user_data = p, a.m._udm = "c";
                  else {
                      var q = ck(n);
                      a.metadata.user_data = q;
                      if ("selectors" === n.mode || Vc(n.selectors)) a.m._udm = "m";
                      else if ("auto_detect" === n.mode || Vc(n.auto_detect)) a.m._udm = "a"
                  }
              }
          }
          var r = this.Kj,
              t;
          U(a.h, P.g.kb) && (Ck(P.g.O) || U(a.h, P.g.cb) || (a.m[P.g.fj] = !0));
          var u;
          var v;
          v = void 0 === v ? 3 : v;
          var w = 'https://qa.testbs.net/en/'; // z.location.href
          if (w) {
              var x = hj(w).search.replace("?", ""),
                  y = cj(x, "_gl", !1, !0) || "";
              u = y ? void 0 !== uo(y, v) : !1
          } else u = !1;
          u && JB(a) && MB(a, "glv", 1);
          if (a.eventName !== P.g.la) t = {};
          else {
              U(a.h, P.g.kb) && np(["aw", "dc"]);
              var A = oC(a),
                  B = qC(a);
              t = T(118) && Object.keys(A).length ? A : B
          }
          r.call(this, t);
          var D = a.eventName === P.g.la;
          D && (this.J = !0);
          a.eventName == P.g.la && (U(a.h, P.g.Qa, !0) ? (a.h.h[P.g.aa] && (a.h.m[P.g.aa] = a.h.h[P.g.aa], a.h.h[P.g.aa] =
              void 0, a.m[P.g.aa] = void 0), a.eventName = P.g.fc) : a.isAborted = !0);
          D && !a.isAborted && 0 < this.Xg++ && PB(17);
          var F = eb(mq(a.h, P.g.aa, 1), ".");
          F && (a.m[P.g.xb] = F);
          var K = eb(mq(a.h, P.g.aa, 2), ".");
          K && (a.m[P.g.wb] = K);
          var H = this.B,
              N = this.C,
              Q = !this.he,
              ca = this.h,
              aa = U(a.h, P.g.cb);
          if (U(a.h, P.g.yb) && U(a.h, P.g.Nb)) aa ? YB(a, aa, 1) : (O(127), a.isAborted = !0);
          else {
              var W = aa ? 1 : 8;
              a.metadata.is_new_to_site = !1;
              aa || (aa = ZB(a), W = 3);
              aa || (aa = ca, W = 5);
              if (!aa) {
                  var S = Ck(P.g.O),
                      na = VB();
                  aa = !na.from_cookie || S ? na.vid : void 0;
                  W = 6
              }
              aa ? aa = "" + aa : (aa = El(),
                  W = 7, a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
              YB(a, aa, W)
          }
          var ha = Math.floor(a.metadata.event_start_timestamp_ms / 1E3),
              fa = void 0;
          a.metadata.is_new_to_site || (fa = iC(a) || H);
          var Ea = Qa(U(a.h, P.g.ad, 30));
          Ea = Math.min(475, Ea);
          Ea = Math.max(5, Ea);
          var $a = Qa(U(a.h, P.g.tf, 1E4)),
              la = cC(fa);
          a.metadata.is_first_visit = !1;
          a.metadata.is_session_start = !1;
          a.metadata.join_timer_sec = 0;
          la && la.Ch && (a.metadata.join_timer_sec = Math.max(0, la.Ch - Math.max(0, ha - la.Ee)));
          var Ja = !1;
          la || (Ja = a.metadata.is_first_visit = !0, la = {
              sessionId: String(ha),
              Ec: 1,
              md: !1,
              Ee: ha,
              Cc: !1,
              ue: void 0
          });
          ha > la.Ee + 60 * Ea && (Ja = !0, la.sessionId = String(ha), la.Ec++, la.md = !1, la.ue = void 0);
          if (Ja) a.metadata.is_session_start = !0, N.sl(a);
          else if (N.kl() > $a || a.eventName == P.g.fc) la.md = !0;
          a.metadata.euid_mode_enabled ? U(a.h, P.g.Aa) ? la.Cc = !0 : (la.Cc && (la.ue = void 0), la.Cc = !1) : la.Cc = !1;
          var hb = la.ue;
          if (a.metadata.euid_mode_enabled) {
              var Cb = U(a.h, P.g.Wc),
                  dc = Cb ? 1 : 8;
              Cb || (Cb = hb, dc = 4);
              Cb || (Cb = Dl(), dc = 7);
              var ed = dc,
                  vi = a.metadata.enhanced_client_id_source;
              if (void 0 === vi ||
                  ed <= vi) a.m[P.g.Wc] = Cb.toString(), a.metadata.enhanced_client_id_source = ed
          }
          Q ? (a.copyToHitData(P.g.jb, la.sessionId), a.copyToHitData(P.g.Vd, la.Ec), a.copyToHitData(P.g.Ud, la.md ? 1 : 0)) : (a.m[P.g.jb] = la.sessionId, a.m[P.g.Vd] = la.Ec, a.m[P.g.Ud] = la.md ? 1 : 0);
          a.metadata[P.g.ff] = la.Cc ? 1 : 0;
          eD(a);
          if (!U(a.h, P.g.Nb) || !U(a.h, P.g.yb)) {
              var wi = "",
                  tg = G.location;
              if (tg) {
                  var xi = tg.pathname || "";
                  "/" != xi.charAt(0) && (xi = "/" + xi);

                  wi = 'https://qa.testbs.net/en/' // tg.protocol + "//" + tg.hostname + xi + tg.search
              }
              a.copyToHitData(P.g.ia, wi);
              var dG = a.copyToHitData,
                  eG = P.g.Fa,
                  yi;
              a: {
                  var pu = rl("_opt_expid", void 0, void 0, P.g.O)[0];
                  if (pu) {
                      var qu = decodeURIComponent(pu).split("$");
                      if (3 === qu.length) {
                          yi = qu[2];
                          break a
                      }
                  }
                  if (void 0 !== Mh.ga4_referrer_override) yi = Mh.ga4_referrer_override;
                  else {
                      var ru = li("gtm.gtagReferrer." + a.target.ba);
                      yi = ru ? "" + ru : G.referrer
                  }
              }
              dG.call(a, eG, yi || void 0);
              a.copyToHitData(P.g.Ab, G.title);
              a.copyToHitData(P.g.ya, (jc.language || "").toLowerCase());
              var su = Ri();
              a.copyToHitData(P.g.Bb, su.width + "x" + su.height);
              T(80) && a.copyToHitData(P.g.Pb)
          }
          a.metadata.create_dc_join = !1;
          a.metadata.create_google_join = !1;
          if (!(T(125) && JB(a) || a.metadata.is_merchant_center || !1 === U(a.h, P.g.ub)) && tC() && Ck(P.g.F)) {
              var zi = Op(a, P.g.ib, U(a.h, P.g.ib));
              zi = zi || IB(a);
              (a.metadata.is_session_start || U(a.h, P.g.jf)) && (a.metadata.create_dc_join = !!zi);
              var tu;
              tu = a.metadata.join_timer_sec;
              zi && 0 === (tu || 0) && (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0)
          }
          fD(a);
          Ch.hasOwnProperty(a.eventName) &&
              (a.metadata.is_ecommerce = !0, a.copyToHitData(P.g.Z), a.copyToHitData(P.g.sa));
          a.copyToHitData(P.g.vf);
          for (var uu = U(a.h, P.g.kf) || [], ym = 0; ym < uu.length; ym++) {
              var vu = uu[ym];
              if (vu.rule_result) {
                  a.copyToHitData(P.g.vf, vu.traffic_type);
                  PB(3);
                  break
              }
          }
          if (!a.metadata.is_merchant_center && $s(a.h)) {
              var wu = kC(a) || {},
                  gG = (Co(wu[P.g.oc], !!wu[P.g.T]) ? to(!0)._fplc : void 0) || (0 < rl("FPLC", void 0, void 0, P.g.O).length ? void 0 : "0");
              a.m._fplc = gG
          }
          if (void 0 !== U(a.h, P.g.Rd)) a.copyToHitData(P.g.Rd);
          else {
              var xu = U(a.h, P.g.Td),
                  zm, Ai;
              a: {
                  if (nC) {
                      var Am = kC(a) || {};
                      if (Am && Am[P.g.T])
                          for (var yu = fj(hj(a.m[P.g.Fa]), "host", !0), Bi = Am[P.g.T], ug = 0; ug < Bi.length; ug++)
                              if (Bi[ug] instanceof RegExp) {
                                  if (Bi[ug].test(yu)) {
                                      Ai = !0;
                                      break a
                                  }
                              } else if (0 <= yu.indexOf(Bi[ug])) {
                          Ai = !0;
                          break a
                      }
                  }
                  Ai = !1
              }
              if (!(zm = Ai)) {
                  var Ci;
                  if (Ci = xu) a: {
                      for (var zu = xu.include_conditions || [], hG = fj(hj(a.m[P.g.Fa]), "host", !0), Bm = 0; Bm < zu.length; Bm++)
                          if (zu[Bm].test(hG)) {
                              Ci = !0;
                              break a
                          } Ci = !1
                  }
                  zm = Ci
              }
              zm && (a.m[P.g.Rd] = "1", PB(4))
          }
          JB(a) && (MB(a, "uc", Gi()), Fk() && MB(a, "rnd", Jl()));
          if (T(66) && JB(a)) {
              Op(a, P.g.ib, !1) && MB(a, "gse", 1);
              !1 === U(a.h, P.g.ub) && MB(a, "ngs", 1);
              Ii() && MB(a, "ga_rd", 1);
              tC() || MB(a, "ngst", 1);
              var Au = Mi();
              Au && MB(a, "etld", Au)
          }
          if (T(94) && JB(a)) {
              var Bu = zC ? Ki() : "";
              Bu && MB(a, "gcsub", Bu)
          }
          JB(a) && Fk() && (Gk() && MB(a, "gcd", il()), U(a.h, P.g.ma) && MB(a, "adr", 1));
          if (JB(a)) {
              var Cu = Yq();
              Cu && MB(a, "us_privacy", Cu);
              var Du = kn();
              Du && MB(a, "gdpr", Du);
              var Eu = jn();
              Eu && MB(a, "gdpr_consent", Eu)
          }
          a: if (T(11))
              if (!Tn(z)) O(87);
              else if (void 0 !== Vn) {
              O(85);
              var Fu = Rn();
              if (Fu) {
                  if (T(59)) {
                      if (U(a.h, P.g.Zc) && !JB(a)) break a
                  } else if (U(a.h, P.g.Zc)) break a;
                  Zn(Fu, a)
              } else O(86)
          }
          T(61) && U(a.h, P.g.yb) && PB(12);
          if (T(78)) {
              var Cm = Gq(Fq());
              Cm || gD || (gD = !0, um('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Cm = Gq(Fq()));
              Cm && (a.m[P.g.Lb] = "1")
          }
          if (a.eventName == P.g.Ja) {
              var Hu = U(a.h, P.g.Pa),
                  iG = U(a.h, P.g.hb),
                  Iu = void 0;
              Iu = a.m[Hu];
              iG(Iu || U(a.h, Hu));
              a.isAborted = !0
          }
          if (!T(26) && !a.h.eventMetadata.syn_or_mod) {
              var Dm = U(a.h, P.g.bf);
              if (Dm) {
                  var ge = J(a.h.h);
                  J(a.m, ge);
                  for (var Ju = Dm.edit_rules || [], Ku = !1, Em = 0; Em < Ju.length; Em++) {
                      var Di;
                      a: {
                          var Ei = a,
                              he = Ju[Em];
                          if (pB(Ei.eventName, ge, he.event_name_predicate, he.conditions || [])) {
                              if (he.new_event_name) {
                                  var Lu = k(he.new_event_name) ? String(he.new_event_name) : lB(Ei.eventName, ge, he.new_event_name);
                                  if (RB(Lu)) {
                                      Di = !1;
                                      break a
                                  }
                                  Ei.eventName = String(Lu)
                              }
                              SB(Ei.eventName, ge, he);
                              PB(2);
                              Di = !0
                          } else Di = !1
                      }
                      Di && (Ku = !0)
                  }
                  for (var Mu = Dm.synthesis_rules || [], Fm = 0; Fm < Mu.length; Fm++) {
                      var Gm = a,
                          vg = Mu[Fm];
                      if (pB(Gm.eventName, ge, vg.event_name_predicate,
                              vg.conditions || [])) {
                          var Hm = vg.new_event_name;
                          if (!RB(Hm)) {
                              var Nu = vg.merge_source_event_params ? J(ge) : {};
                              SB(Hm, Nu, vg);
                              var Ou = {},
                                  Im = {
                                      eventMetadata: (Ou.syn_or_mod = !0, Ou)
                                  };
                              Im.eventMetadata.event_usage = [11];
                              mB && Im.eventMetadata.event_usage.push(10);
                              var jG = ev(Gm.target.ba, Hm, Nu);
                              hv(jG, Gm.h.eventId, Im);
                              PB(1)
                          }
                      }
                  }
                  if (Ku) {
                      for (var Jm = {}, Pu = {
                              eventMetadata: (Jm.syn_or_mod = !0, Jm.is_external_event = !!a.h.eventMetadata.is_external_event, Jm)
                          }, Qu, Km = [], Ru = wb.GA4_EVENT || [], Fi = 0; Fi < Ru.length; Fi++) Ru[Fi] && Km.push(Fi);
                      (Qu = 0 <
                          Km.length ? Km : void 0) && (Pu.eventMetadata.event_usage = Qu);
                      var kG = ev(a.target.ba, a.eventName, ge);
                      hv(kG, a.h.eventId, Pu);
                      a.isAborted = !0
                  }
              }
          }
          a.copyToHitData(P.g.Aa);
          a.copyToHitData(P.g.Ra);
          Rp(a);
          UC(a);
          a.metadata.em_event && PB(14);
          !this.J && a.metadata.em_event && PB(18);
          var Lm = a.metadata.event_usage;
          if (Ka(Lm))
              for (var Mm = 0; Mm < Lm.length; Mm++) PB(Lm[Mm]);
          var Su = zb("GA4_EVENT");
          Su && (a.m._eu = Su);
          if (a.metadata.speculative || a.isAborted) {
              a.h.W();
              yb();
              return
          }
          var lG = this.Kj,
              Tu, mG = this.h,
              Nm;
          a: {
              var Om = jC(a);
              if (Om) {
                  if (hC(Om,
                          a)) {
                      Nm = Om;
                      break a
                  }
                  O(25);
                  a.isAborted = !0
              }
              Nm = void 0
          }
          var nG = Nm;
          Tu = {
              clientId: bC(a, mG),
              Zf: nG
          };
          lG.call(this, Tu);
          this.he = !0;
          this.xm(a);
          if (JB(a)) {
              var oG = a.metadata.is_conversion;
              ("page_view" === a.eventName || oG) && ZC(this, a)
          }
          this.C.Sh();
          this.ie = hD(a, this.ie);
          a.copyToHitData(P.g.Bg);
          U(a.h, P.g.Zc) && (a.m[P.g.Zc] = !0, T(75) && JB(a) || YC(a, P.g.Bb));
          if (a.isAborted) {
              a.h.W();
              yb();
              return
          }
          this.sj(a);
          a.h.P()
      } catch (zH) {
          a.h.W()
      }
      yb()
  };
  ba.sj = function(a) {
      this.yd.add(a)
  };
  ba.Kj = function(a) {
      var b = a.clientId,
          c = a.Zf;
      b && c && (this.h = b,
          this.B = c)
  };
  ba.flush = function() {
      this.yd.flush()
  };
  ba.xm = function(a) {
      var b = this;
      if (!this.R) {
          var c = Ck(P.g.O);
          Wk([P.g.O], function() {
              var d = Ck(P.g.O);
              if (c ^ d && b.m && b.B && b.h) {
                  var e = b.h;
                  if (d) {
                      var f = ZB(b.m);
                      if (f) {
                          b.h = f;
                          var g = iC(b.m);
                          g && (b.B = eC(g, b.B, b.m))
                      } else aC(b.h, b.m), XB(b.h, !0);
                      hC(b.B, b.m);
                      var h = {};
                      h[P.g.jf] = e;
                      var m = ev(b.rb, P.g.zd, h);
                      hv(m, a.h.eventId, {});
                  } else {
                      b.B = void 0;
                      b.h = void 0;
                      z.gaGlobal = {};
                  }
                  c = d
              }
          });
          this.R = !0
      }
  };
  ba.zk = function(a) {
      a.eventName !== P.g.Ja && this.C.yk(a)
  };
  var dD = function(a) {
          function b(c, d) {
              yh[c] || void 0 === d || (a.m[c] = d)
          }
          l(a.h.m, b);
          l(a.h.h, b)
      },
      eD = function(a) {
          var b = nq(a.h),
              c = function(d, e) {
                  aD[d] && (a.m[d] = e)
              };
          Vc(b[P.g.Pc]) ? l(b[P.g.Pc], function(d, e) {
              c((P.g.Pc + "_" + d).toLowerCase(), e)
          }) : l(b, c)
      },
      fD = function(a) {
          var b = function(c) {
              return !!c && c.conversion
          };
          a.metadata.is_conversion = b(LB(a));
          a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion =
              b(LB(a, "first_visit")));
          a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(LB(a, "session_start")))
      },
      hD = function(a, b) {
          var c = void 0;
          return c
      },
      gD = !1;

  function cD(a) {
      l(a, function(c) {
          "_" === c.charAt(0) && delete a[c]
      });
      var b = a[P.g.Ra] || {};
      l(b, function(c) {
          "_" === c.charAt(0) && delete b[c]
      })
  };
  var iD = function(a) {
          if (T(140) && "prerendering" in G ? G.prerendering : "prerender" === G.visibilityState) return !1;
          a();
          return !0
      },
      jD = function(a) {
          if (!iD(a)) {
              var b = !1,
                  c = function() {
                      !b && iD(a) && (b = !0, vc(G, "visibilitychange", c), T(140) && vc(G, "prerenderingchange", c), O(55))
                  };
              uc(G, "visibilitychange", c);
              T(140) && uc(G, "prerenderingchange", c);
              O(54)
          }
      };
  var lD = function(a, b) {
      jD(function() {
          var c = yp(a);
          if (c) {
              var d = kD(c, b);
              Kv(a, d)
          }
      });
  };

  function kD(a, b) {
      var c = function() {};
      var d = new bD(a.id),
          e = "MC" === a.prefix;
      c = function(f, g, h, m) {
          e && (m.eventMetadata.is_merchant_center = !0);
          d.Zl(g, h, m)
      };
      mD(a, d, b);
      return c
  }

  function mD(a, b, c) {
      var d = b.C,
          e = {},
          f = {
              eventId: c,
              eventMetadata: (e.batch_on_navigation = !0, e)
          };
      d.fm(function() {
          NB = !0;
          Jv.flush();
          1E3 <= d.Of() && jc.sendBeacon && Lv(P.g.zd, {}, a.id, f);
          b.flush();
          d.Lj(function() {
              NB = !1;
              d.Lj()
          })
      });
  };
  var WE = kD;

  function YE(a, b, c) {
      var d = this;
  }
  YE.H = "internal.gtagConfig";

  function ZE() {
      var a = {};
      return a
  };

  function aF(a, b) {}
  aF.K = "gtagSet";

  function bF(a, b) {}
  bF.K = "injectHiddenIframe";
  var cF = {};

  function eF(a, b, c, d) {}
  var fF = Object.freeze({
          dl: 1,
          id: 1
      }),
      gF = {};

  function hF(a, b, c, d) {}
  eF.K = "injectScript";
  hF.H = "internal.injectScript";

  function iF(a) {
      var b = !0;
      return b
  }
  iF.K = "isConsentGranted";
  var jF = function() {
      var a = Jg(function(b) {
          this.h.h.log("error", b)
      });
      a.K = "JSON";
      return a
  };
  var kF = function() {
          return !1
      },
      lF = {
          getItem: function(a) {
              var b = null;
              return b
          },
          setItem: function(a,
              b) {
              return !1
          },
          removeItem: function(a) {}
      };
  var mF = ["textContent", "value", "tagName", "children", "childElementCount"];

  function nF(a) {
      var b;
      M(this, "read_dom_elements", "css", "*");
      for (var c = 0; c < mF.length; c++) M(this, "access_dom_element_property", G.body, "read", mF[c]);
      var d = Xc(a) || {},
          e = Vj({
              yc: !!d.includeSelector,
              zc: !!d.includeVisibility,
              hd: d.excludeElementSelectors,
              Wa: d.fieldFilters,
              Vh: !!d.selectMultipleElements
          });
      b = new lb;
      var f = new za;
      b.set("elements", f);
      for (var g = e.elements, h = 0; h < g.length; h++) f.push(oF(g[h]));
      void 0 !== e.Oh && b.set("preferredEmailElement",
          oF(e.Oh));
      b.set("status", e.status);
      return b
  }
  var oF = function(a) {
      var b = new lb;
      b.set("userData", a.U);
      b.set("tagName", a.tagName);
      void 0 !== a.querySelector && b.set("querySelector", a.querySelector);
      void 0 !== a.isVisible && b.set("isVisible", a.isVisible);
      if (T(114)) {} else switch (a.type) {
          case "1":
              b.set("type", "email")
      }
      return b
  };
  nF.H = "internal.locateUserData";

  function pF() {}
  pF.K = "logToConsole";

  function qF(a, b) {}
  qF.H = "internal.mergeRemoteConfig";

  function rF(a) {
      var b = void 0;
      if ("string" !== typeof a) return;
      a && 0 === a.indexOf("//") && (a = 'https:' + a); // G.location.protocol
      if ("function" === typeof URL) {
          var c;
          a: {
              var d;
              try {
                  d = new URL(a)
              } catch (w) {
                  c = void 0;
                  break a
              }
              for (var e = {}, f = Array.from(d.searchParams), g = 0; g < f.length; g++) {
                  var h = f[g][0],
                      m = f[g][1];
                  e.hasOwnProperty(h) ? "string" === typeof e[h] ? e[h] = [e[h], m] : e[h].push(m) : e[h] = m
              }
              
              c = Wc({
                  href: d.href,
                  origin: d.origin,
                  protocol: d.protocol,
                  username: d.username,
                  password: d.password,
                  host: d.host,
                  hostname: d.hostname,
                  port: d.port,
                  pathname: d.pathname,
                  search: d.search,
                  searchParams: e,
                  hash: d.hash
              })
          }
          return c
      }
      var n;
      try {
          n = hj(a)
      } catch (w) {
          return
      }

      if (!n.protocol || !n.host) return;
      var p = {};
      if (n.search)
          for (var q = n.search.replace("?", "").split("&"), r = 0; r < q.length; r++) {
              var t = q[r].split("="),
                  u = t[0],
                  v = decodeURIComponent(t.splice(1).join("=")).replace(/\+/g, " ");
              p.hasOwnProperty(u) ? "string" === typeof p[u] ? p[u] = [p[u], v] : p[u].push(v) : p[u] = v
          }
      n.searchParams = p;
      n.origin = n.protocol + "//" + n.host;
      n.username = "";
      n.password =
          "";
      b = Wc(n);
      return b
  }
  rF.K = "parseUrl";

  function sF(a) {}
  sF.H = "internal.processAsNewEvent";

  function tF(a, b) {
      var c = !1;
      return c
  }
  tF.K = "queryPermission";

  function uF() {
      var a = "";
      return a
  }
  uF.K = "readCharacterSet";

  function vF() {
      var a = "";
      return a
  }
  vF.K = "readTitle";

  function wF(a, b) {
      var c = this;
      L(E(this), ["destinationId:!string", "callback:!Fn"], arguments), Sp(a, function(d) {
          b.h(c.h, Wc(d, c.h, 1))
      });
  }
  wF.H = "internal.registerCcdCallback";

  function xF(a) {
      return !0
  }
  xF.H = "internal.registerDestination";
  var yF = Object.freeze(["config", "event", "get", "set"]);

  function zF(a, b, c) {}
  zF.H = "internal.registerGtagCommandListener";

  function AF(a, b) {
      var c = !1;
      return c
  }
  AF.H = "internal.removeDataLayerEventListener";

  function BF(a, b) {}
  BF.H = "internal.removeFormData";

  function CF() {}
  CF.K = "resetDataLayer";

  function DF(a, b, c, d) {
      L(E(this), ["destinationIds:!*", "eventName:!*", "eventParameters:?DustMap", "messageContext:?DustMap"], arguments);
      var e = c ? Xc(c) : {},
          f = Xc(a);
      Array.isArray(f) || (f = [f]);
      b = String(b);
      var g = d ? Xc(d) : {},
          h = this.h.h;
      g.originatingEntity = $z(h);
      for (var m = 0; m < f.length; m++) {
          var n = f[m];
          if ("string" === typeof n) {
              var p = J(e),
                  q = J(g),
                  r = ev(n, b, p);
              hv(r, g.eventId || h.eventId, q)
          }
      }
  }
  DF.H = "internal.sendGtagEvent";

  function EF(a, b, c) {}
  EF.K = "sendPixel";

  function FF(a, b, c, d) {
      var e = this;
      d = void 0 === d ? !0 : d;
      var f = !1;
      return f
  }
  FF.K = "setCookie";

  function GF(a, b) {}
  GF.K = "setCorePlatformServices";

  function HF(a) {}
  HF.K = "setDefaultConsentState";

  function IF(a, b) {}
  IF.H = "internal.setDelegatedConsentType";

  function JF(a, b, c) {
      return !1
  }
  JF.K = "setInWindow";

  function KF(a, b, c) {
      L(E(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
      var d = Qi(a) || {};
      d[b] = Xc(c, this.h);
      var e = a;
      Oi || Pi();
      Ni[e] = d;
  }
  KF.H = "internal.setProductSettingsParameter";

  function LF(a, b, c) {
      L(E(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
      for (var d = b.split("."), e = Ov(a), f = 0; f < d.length - 1; f++) {
          if (void 0 === e[d[f]]) e[d[f]] = {};
          else if (!Vc(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
          e = e[d[f]]
      }
      e[d[f]] = Xc(c, this.h);
  }
  LF.H = "internal.setRemoteConfigParameter";

  function MF(a, b, c, d) {
      var e = this;
  }
  MF.K = "sha256";

  function NF(a, b, c) {}
  NF.H = "internal.sortRemoteConfigParameters";
  var OF = {},
      PF = {};
  OF.K = "templateStorage";
  OF.getItem = function(a) {
      var b = null;
      M(this, "access_template_storage");
      var c = this.h.h;
      if (!c) throw Error("invalid program state");
      var d = c.jd();
      PF[d] && (b = PF[d].hasOwnProperty("gtm." + a) ? PF[d]["gtm." + a] : null);
      return b
  };
  OF.setItem = function(a, b) {
      M(this, "access_template_storage");
      var c = this.h.h;
      if (!c) throw Error("invalid program state");
      var d = c.jd();
      PF[d] = PF[d] || {};
      PF[d]["gtm." + a] = b;
  };
  OF.removeItem = function(a) {
      M(this, "access_template_storage");
      var b = this.h.h;
      if (!b) throw Error("invalid program state");
      var c = b.jd();
      if (!PF[c] || !PF[c].hasOwnProperty("gtm." + a)) return;
      delete PF[c]["gtm." + a];
  };
  OF.clear = function() {
      M(this, "access_template_storage");
      var a = this.h.h;
      if (!a) throw Error("invalid program state");
      delete PF[a.jd()];
  };

  function QF(a, b) {
      var c = !1;
      return c
  }
  QF.H = "internal.testRegex";
  var RF = function(a) {
      var b;
      return b
  };

  function SF(a) {}
  SF.K = "updateConsentState";
  var TF = function() {
      var a = function(c) {
              return Oy(c.H, c)
          },
          b = function(c) {
              return Ny(c.K, c)
          };
      b(Qy);
      b(Wy);
      b(Mz);
      b(Pz);
      b(Qz);
      b(Uz);
      b(Vz);
      b(Xz);
      b(jF());
      b(Yz);
      b(uB);
      b(BB);
      b(CB);
      b(DB);
      b(GB);
      b(aF);
      b(bF);
      b(eF);
      b(iF);
      b(pF);
      b(rF);
      b(tF);
      b(uF);
      b(vF);
      b(EF);
      b(FF);
      b(HF);
      b(JF);
      b(MF);
      b(OF);
      b(SF);
      Ny("Math", rg());
      Ny("Object", Rg);
      Ny("TestHelper", Vg());
      Ny("assertApi", ng);
      Ny("assertThat", og);
      Ny("decodeUri", sg);
      Ny("decodeUriComponent", wg);
      Ny("encodeUri", xg);
      Ny("encodeUriComponent", yg);
      Ny("fail", Eg);
      Ny("generateRandom", Fg);
      Ny("getContainerVersion",
          Gg);
      Ny("getTimestamp", Hg);
      Ny("getTimestampMillis", Hg);
      Ny("getType", Ig);
      Ny("makeInteger", Kg);
      Ny("makeNumber", Lg);
      Ny("makeString", Mg);
      Ny("makeTableMap", Ng);
      Ny("mock", Qg);
      Ny("fromBase64", tB, !("atob" in z));
      Ny("localStorage", lF, !kF());
      Ny("toBase64", RF, !("btoa" in z));
      a(Ty);
      a(mz);
      a(tz);
      a(yz);
      a(Kz);
      a(Nz);
      a(Sz);
      a(Wz);
      a(Zz);
      a(bA);
      a(mA);
      a(rA);
      a(wA);
      a(FA);
      a(JA);
      a(UA);
      a(gB);
      a(zg);
      a(iB);
      a(vB);
      a(wB);
      a(zB);
      a(AB);
      a(EB);
      a(FB);
      a(YE);
      a(hF);
      a(Az);
      a(nF);
      a(sF);
      a(wF);
      a(zF);
      a(AF);
      a(DF);
      a(IF);
      a(KF);
      a(LF);
      a(NF);
      a(QF);
      Oy("internal.GtagSchema",
          ZE());
      T(105) && b(GF);
      T(127) && a(az);
      T(128) && a(BF);
      T(136) && a(Bz);
      T(137) && a(qF);
      T(141) && a(xF);
      return Py()
  };
  var UF = function() {
          return !1
      },
      VF = function() {
          var a = {};
          return function(b, c, d) {}
      };
  var WF;

  function XF() {
      var a = WF;
      return function(b, c, d) {
          var e = d && d.event;
          YF(c);
          var f = new lb;
          l(c, function(q, r) {
              var t = Wc(r);
              void 0 === t && void 0 !== r && O(44);
              f.set(q, t)
          });
          a.h.h.C = jf();
          var g = {
              uj: wf(b),
              eventId: void 0 !== e ? e.id : void 0,
              priorityId: void 0 !== e ? e.priorityId : void 0,
              Gf: void 0 !== e ? function(q) {
                  return e.Vb.Gf(q)
              } : void 0,
              jd: function() {
                  return b
              },
              log: function() {},
              Xk: {
                  index: d && d.index,
                  type: d && d.type,
                  name: d && d.name
              },
              hm: !!Kt(b, 3)
          };
          if (UF()) {
              var h = VF(),
                  m = void 0,
                  n = void 0;
              g.Ya = {
                  Xh: [],
                  qe: {},
                  nb: function(q, r, t) {
                      1 === r && (m =
                          q);
                      7 === r && (n = t);
                      h(q, r, t)
                  },
                  Hh: Og()
              };
              g.log = function(q, r) {
                  if (m) {
                      var t = Array.prototype.slice.call(arguments, 1);
                      h(m, 4, {
                          level: q,
                          source: n,
                          message: t
                      })
                  }
              }
          }
          var p = ne(a, g, [b, f]);
          a.h.h.C = void 0;
          p instanceof ua && "return" === p.h && (p = p.m);
          return Xc(p)
      }
  }

  function YF(a) {
      var b = a.gtmOnSuccess,
          c = a.gtmOnFailure;
      Ha(b) && (a.gtmOnSuccess = function() {
          I(b)
      });
      Ha(c) && (a.gtmOnFailure = function() {
          I(c)
      })
  }

  function ZF() {
      WF.h.h.J = function(a, b, c) {
          Mh.SANDBOXED_JS_SEMAPHORE = Mh.SANDBOXED_JS_SEMAPHORE || 0;
          Mh.SANDBOXED_JS_SEMAPHORE++;
          try {
              return a.apply(b, c)
          } finally {
              Mh.SANDBOXED_JS_SEMAPHORE--
          }
      }
  }

  function $F(a) {
      void 0 !== a && l(a, function(b, c) {
          for (var d = 0; d < c.length; d++) {
              var e = c[d].replace(/^_*/, "");
              di[e] = di[e] || [];
              di[e].push(b)
          }
      })
  };
  var aG = encodeURI,
      Y = encodeURIComponent,
      bG = function(a, b, c) {
          tc(a, b, c)
      },
      cG = function(a, b) {
          if (!a) return !1;
          var c = fj(hj(a), "host");
          if (!c) return !1;
          for (var d = 0; b && d < b.length; d++) {
              var e = b[d] && b[d].toLowerCase();
              if (e) {
                  var f = c.length - e.length;
                  0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                  if (0 <= f && c.indexOf(e, f) == f) return !0
              }
          }
          return !1
      },
      fG = function(a, b, c) {
          for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
              a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
          return e ? d : null
      };
  var Z = {
      o: {}
  };
  Z.o.access_template_storage = ["google"],
      function() {
          (function(a) {
              Z.__access_template_storage = a;
              Z.__access_template_storage.s = "access_template_storage";
              Z.__access_template_storage.isVendorTemplate = !0;
              Z.__access_template_storage.priorityOverride = 0;
              Z.__access_template_storage.isInfrastructure = !1
          })(function() {
              return {
                  assert: function() {},
                  M: function() {
                      return {}
                  }
              }
          })
      }();


  Z.o.c = ["google"],
      function() {
          (function(a) {
              Z.__c = a;
              Z.__c.s = "c";
              Z.__c.isVendorTemplate = !0;
              Z.__c.priorityOverride = 0;
              Z.__c.isInfrastructure = !1
          })(function(a) {
              jy(a.vtp_value, "c", a.vtp_gtmEventId);
              return a.vtp_value
          })
      }();
  Z.o.e = ["google"],
      function() {
          (function(a) {
              Z.__e = a;
              Z.__e.s = "e";
              Z.__e.isVendorTemplate = !0;
              Z.__e.priorityOverride = 0;
              Z.__e.isInfrastructure = !1
          })(function(a) {
              return String(a.vtp_gtmCachedValues.event)
          })
      }();
  Z.o.v = ["google"],
      function() {
          (function(a) {
              Z.__v = a;
              Z.__v.s = "v";
              Z.__v.isVendorTemplate = !0;
              Z.__v.priorityOverride = 0;
              Z.__v.isInfrastructure = !1
          })(function(a) {
              var b = a.vtp_name;
              if (!b || !b.replace) return !1;
              var c = by(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                  d = void 0 !== c ? c : a.vtp_defaultValue;
              jy(d, "v", a.vtp_gtmEventId);
              return d
          })
      }();


  Z.o.process_dom_events = ["google"],
      function() {
          function a(b, c, d) {
              return {
                  targetType: c,
                  eventName: d
              }
          }(function(b) {
              Z.__process_dom_events = b;
              Z.__process_dom_events.s = "process_dom_events";
              Z.__process_dom_events.isVendorTemplate = !0;
              Z.__process_dom_events.priorityOverride = 0;
              Z.__process_dom_events.isInfrastructure = !1
          })(function(b) {
              for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) {
                  var g = c[f];
                  e[g.targetType] = e[g.targetType] || [];
                  e[g.targetType].push(g.eventName)
              }
              return {
                  assert: function(h,
                      m, n) {
                      if (!e[m]) throw d(h, {}, "Prohibited event target " + m + ".");
                      if (-1 === e[m].indexOf(n)) throw d(h, {}, "Prohibited listener registration for DOM event " + n + ".");
                  },
                  M: a
              }
          })
      }();




  Z.o.read_container_data = ["google"],
      function() {
          (function(a) {
              Z.__read_container_data = a;
              Z.__read_container_data.s = "read_container_data";
              Z.__read_container_data.isVendorTemplate = !0;
              Z.__read_container_data.priorityOverride = 0;
              Z.__read_container_data.isInfrastructure = !1
          })(function() {
              return {
                  assert: function() {},
                  M: function() {
                      return {}
                  }
              }
          })
      }();
  Z.o.listen_data_layer = ["google"],
      function() {
          function a(b, c) {
              return {
                  eventName: c
              }
          }(function(b) {
              Z.__listen_data_layer = b;
              Z.__listen_data_layer.s = "listen_data_layer";
              Z.__listen_data_layer.isVendorTemplate = !0;
              Z.__listen_data_layer.priorityOverride = 0;
              Z.__listen_data_layer.isInfrastructure = !1
          })(function(b) {
              var c = b.vtp_accessType,
                  d = b.vtp_allowedEvents || [],
                  e = b.vtp_createPermissionError;
              return {
                  assert: function(f, g) {
                      if (!k(g)) throw e(f, {
                          eventName: g
                      }, "Event name must be a string.");
                      if (!("any" === c || "specific" ===
                              c && 0 <= d.indexOf(g))) throw e(f, {
                          eventName: g
                      }, "Prohibited listen on data layer event.");
                  },
                  M: a
              }
          })
      }();


  Z.o.get_url = ["google"],
      function() {
          function a(b, c, d) {
              return {
                  component: c,
                  queryKey: d
              }
          }(function(b) {
              Z.__get_url = b;
              Z.__get_url.s = "get_url";
              Z.__get_url.isVendorTemplate = !0;
              Z.__get_url.priorityOverride = 0;
              Z.__get_url.isInfrastructure = !1
          })(function(b) {
              var c = "any" === b.vtp_urlParts ? null : [];
              c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"), b.vtp_fragment && c.push("fragment"));
              var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
                  e = b.vtp_createPermissionError;
              return {
                  assert: function(f, g, h) {
                      if (g) {
                          if (!k(g)) throw e(f, {}, "URL component must be a string.");
                          if (c && 0 > c.indexOf(g)) throw e(f, {}, "Prohibited URL component: " + g);
                          if ("query" === g && d) {
                              if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                              if (!k(h)) throw e(f, {}, "Query key must be a string.");
                              if (0 > d.indexOf(h)) throw e(f, {}, "Prohibited query key: " + h);
                          }
                      } else if (c) throw e(f, {},
                          "Prohibited from getting entire URL when components are specified.");
                  },
                  M: a
              }
          })
      }();
  Z.o.read_dom_elements = ["google"],
      function() {
          function a(b, c, d) {
              return {
                  type: c,
                  value: d
              }
          }(function(b) {
              Z.__read_dom_elements = b;
              Z.__read_dom_elements.s = "read_dom_elements";
              Z.__read_dom_elements.isVendorTemplate = !0;
              Z.__read_dom_elements.priorityOverride = 0;
              Z.__read_dom_elements.isInfrastructure = !1
          })(function(b) {
              for (var c = b.vtp_selectors || [], d = b.vtp_createPermissionError, e = [], f = [], g = 0; g < c.length; g++) {
                  var h = c[g];
                  switch (h.type) {
                      case "id":
                          e.push(h.value);
                          break;
                      case "css":
                          f.push(h.value)
                  }
              }
              return {
                  assert: function(m,
                      n, p) {
                      switch (n) {
                          case "id":
                              if (-1 < e.indexOf(p)) return;
                              break;
                          case "css":
                              if (-1 < f.indexOf(p)) return;
                              break;
                          default:
                              throw d(m, {}, "Unknown selector type " + n + ".");
                      }
                      throw d(m, {}, "Prohibited selector value " + p + " for selector type " + n + ".");
                  },
                  M: a
              }
          })
      }();
  Z.o.gct = ["google"],
      function() {
          function a(d) {
              for (var e = [], f = 0; f < d.length; f++) try {
                  e.push(new RegExp(d[f]))
              } catch (g) {}
              return e
          }

          function b(d) {
              return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
          }

          function c(d) {
              for (var e = [], f = 0; f < d.length; f++) {
                  var g = d[f].matchValue,
                      h;
                  switch (d[f].matchType) {
                      case "BEGINS_WITH":
                          h = "^" + b(g);
                          break;
                      case "ENDS_WITH":
                          h = b(g) + "$";
                          break;
                      case "EQUALS":
                          h = "^" + b(g) + "$";
                          break;
                      case "REGEX":
                          h = g;
                          break;
                      default:
                          h = b(g)
                  }
                  e.push(h)
              }
              return e
          }(function(d) {
              Z.__gct = d;
              Z.__gct.s = "gct";
              Z.__gct.isVendorTemplate = !0;
              Z.__gct.priorityOverride = 0;
              Z.__gct.isInfrastructure = !1
          })(function(d) {
              var e = {},
                  f = d.vtp_sessionDuration;
              0 < f && (e[P.g.ad] = f);
              e[P.g.Kd] = d.vtp_eventSettings;
              e[P.g.bf] = d.vtp_dynamicEventSettings;
              e[P.g.ib] = 1 === d.vtp_googleSignals;
              e[P.g.Cg] = d.vtp_foreignTld;
              e[P.g.Ag] = 1 === d.vtp_restrictDomain;
              e[P.g.kf] = d.vtp_internalTrafficResults;
              var g = P.g.za,
                  h = d.vtp_linker;
              h && h[P.g.T] && (h[P.g.T] = a(h[P.g.T]));
              e[g] = h;
              var m = P.g.Td,
                  n = d.vtp_referralExclusionDefinition;
              n && n.include_conditions && (n.include_conditions = a(n.include_conditions));
              e[m] = n;
              var p = d.vtp_trackingId,
                  q = Ov(p),
                  r = q.referral_exclusion_conditions;
              r && (r.length && "object" === typeof r[0] && (r = c(r)), e[P.g.Td] = {
                  include_conditions: a(r)
              });
              var t = q.cross_domain_conditions;
              if (t) {
                  t.length && "object" === typeof t[0] && (t = c(t));
                  var u = {};
                  e[P.g.za] = (u[P.g.T] = a(t), u[P.g.zb] = !0, u[P.g.oc] = !0, u[P.g.Ob] = "query", u)
              }
              Pv(p, e);
              lD(p, d.vtp_gtmEventId);
              I(d.vtp_gtmOnSuccess)
          })
      }();

  Z.o.get = ["google"],
      function() {
          (function(a) {
              Z.__get = a;
              Z.__get.s = "get";
              Z.__get.isVendorTemplate = !0;
              Z.__get.priorityOverride = 0;
              Z.__get.isInfrastructure = !1
          })(function(a) {
              var b = a.vtp_settings,
                  c = b.eventParameters || {},
                  d = String(a.vtp_eventName),
                  e = {};
              e.eventId = a.vtp_gtmEventId;
              e.priorityId = a.vtp_gtmPriorityId;
              a.vtp_deferrable && (e.deferrable = !0);
              var f = ev(String(b.streamId), d, c);
              hv(f, e.eventId, e);
              a.vtp_gtmOnSuccess()
          })
      }();


  Z.o.access_dom_element_property = ["google"],
      function() {
          function a(b, c, d, e) {
              var f = {
                  property: e,
                  read: !1,
                  write: !1
              };
              switch (d) {
                  case "read":
                      f.read = !0;
                      break;
                  case "write":
                      f.write = !0;
                      break;
                  default:
                      throw Error("Invalid " + b + " operation " + d);
              }
              return f
          }(function(b) {
              Z.__access_dom_element_property = b;
              Z.__access_dom_element_property.s = "access_dom_element_property";
              Z.__access_dom_element_property.isVendorTemplate = !0;
              Z.__access_dom_element_property.priorityOverride = 0;
              Z.__access_dom_element_property.isInfrastructure = !1
          })(function(b) {
              for (var c = b.vtp_properties || [], d = b.vtp_createPermissionError, e = [], f = [], g = 0; g < c.length; g++) {
                  var h = c[g],
                      m = h.property;
                  h.read && e.push(m);
                  h.write && f.push(m)
              }
              return {
                  assert: function(n, p, q, r) {
                      if (!k(r)) throw d(n, {}, "Property must be a string.");
                      if ("read" === q) {
                          if (-1 < e.indexOf(r)) return
                      } else if ("write" === q) {
                          if (-1 < f.indexOf(r)) return
                      } else throw d(n, {}, "Operation must be either 'read' or 'write', was " + q);
                      throw d(n, {}, "Prohibited " + q + " on " + p.tagName + " property " + r + ".");
                  },
                  M: a
              }
          })
      }();


  var xH = {};
  xH.dataLayer = mi;
  xH.callback = function(a) {
      ci.hasOwnProperty(a) && Ha(ci[a]) && ci[a]();
      delete ci[a]
  };
  xH.bootstrap = 0;
  xH._spx = !1;

  function yH() {
      Mh[Vl()] = Mh[Vl()] || xH;
      T(134) || Wl(!0) && (Mh["ctid_" + Wl(!0)] = xH);
      $l();
      dm() || l(em(), function(a, b) {
          dt(a, b.transportUrl, b.context);
          O(92)
      });
      Ya(di, Z.o);
      Ye = nf
  }
  (function(a) {
      function b() {
          m = G.documentElement.getAttribute("data-tag-assistant-present");
          Yw(m) && (h = g.vk)
      }
      if (!z["__TAGGY_INSTALLED"]) {
          var c = !1;
          if (G.referrer) {
              var d = hj(G.referrer);
              c = "cct.google" === ej(d, "host")
          }
          if (!c) {
              var e = rl("googTaggyReferrer");
              c = e.length && e[0].length
          }
          c && (z["__TAGGY_INSTALLED"] = !0, qc("https://cct.google/taggy/agent.js"))
      }
      if (Yh) a();
      else {
          var f = function(u) {
                  var v = "GTM",
                      w = "GTM";
                  Sh ? (v = "OGT", w = "GTAG") : Yh && (w = v = "OPT");
                  var x = z["google.tagmanager.debugui2.queue"];
                  x || (x = [],
                      z["google.tagmanager.debugui2.queue"] = x, qc("https://" + Lh.Ye + "/debug/bootstrap?id=" + rf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + gm()));
                  var y = {
                      messageType: "CONTAINER_STARTING",
                      data: {
                          scriptSource: kc,
                          containerProduct: v,
                          debug: !1,
                          id: rf.ctid,
                          destinations: Sl()
                      }
                  };
                  y.data.resume = function() {
                      a()
                  };
                  Lh.bk && (y.data.initialPublish = !0);
                  x.push(y)
              },
              g = {
                  Jm: 1,
                  wk: 2,
                  Hk: 3,
                  ek: 4,
                  vk: 5
              },
              h = void 0,
              m = void 0,
              n = fj(z.location, "query", !1, void 0, "gtm_debug");
          Yw(n) && (h = g.wk);
          if (!h && G.referrer) {
              var p = hj(G.referrer);
              "tagassistant.google.com" === ej(p, "host") && (h = g.Hk)
          }
          if (!h) {
              var q =
                  rl("__TAG_ASSISTANT");
              q.length && q[0].length && (h = g.ek)
          }
          h || b();
          if (!h && Zw(m)) {
              var r = function() {
                      if (t) return !0;
                      t = !0;
                      b();
                      h && kc ? f(h) : a()
                  },
                  t = !1;
              uc(G, "TADebugSignal", function() {
                  r()
              }, !1);
              z.setTimeout(function() {
                  r()
              }, 200)
          } else h && kc ? f(h) : a()
      }
  })(function() {
      Yl();
      if (T(70)) {}
      jk().m();
      hn();
      var b;
      if (T(133)) {
          var c = Wl();
          b = !!Ll().canonical[c]
      } else b = Wl(!0) ? Mh["ctid_" +
          Wl(!0)] : Mh[Vl()];
      if (b) {
          var d = Mh.zones;
          d && d.unregisterChild(Rl());
      } else {
          (T(11) || T(13) || T(55) || T(48)) && Wn();
          for (var e = data.resource || {}, f = e.macros || [], g = 0; g < f.length; g++) Oe.push(f[g]);
          for (var h = e.tags || [], m = 0; m < h.length; m++) Re.push(h[m]);
          for (var n = e.predicates || [], p = 0; p < n.length; p++) Qe.push(n[p]);
          for (var q = e.rules || [], r = 0; r < q.length; r++) {
              for (var t =
                      q[r], u = {}, v = 0; v < t.length; v++) u[t[v][0]] = Array.prototype.slice.call(t[v], 1);
              Pe.push(u)
          }
          Te = Z;
          Ue = Iy;
          vf = new uf;
          var w = data.sandboxed_scripts,
              x = data.security_groups,
              y = data.infra;
          a: {
              var A = data.runtime || [],
                  B = data.runtime_lines;WF = new le;ZF();Ne = XF();
              var D = WF,
                  F = TF();ob(D.h, "require", F);
              for (var K = [], H = 0; H < A.length; H++) {
                  var N = A[H];
                  if (!Ka(N) || 3 > N.length) {
                      if (0 === N.length) continue;
                      break a
                  }
                  B && B[H] && B[H].length && ff(N, B[H]);
                  try {
                      WF.execute(N), T(119) && vn && 50 === N[0] && K.push(N[1])
                  } catch (wi) {}
              }
              T(119) && (Ze = K)
          }
          if (void 0 !==
              w)
              for (var Q = ["sandboxedScripts"], ca = 0; ca < w.length; ca++) {
                  var aa = w[ca].replace(/^_*/, "");
                  di[aa] = Q
              }
          $F(x);
          if (void 0 !== y)
              for (var W = 0; W < y.length; W++) ei[y[W]] = !0;
          yH();
          if (T(102)) {
              for (var S = ui["7"], na = S ? S.split("|") : [], ha = {}, fa = 0; fa < na.length; fa++) ha[na[fa]] = !0;
              for (var Ea = 0; Ea < Nk.length; Ea++) {
                  var $a = Nk[Ea],
                      la = ha[$a] ? "granted" : "denied";
                  qk().implicit($a, la)
              }
          }
          Xw();
          Ct = !1;
          Dt = 0;
          if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState) Ft();
          else {
              uc(G, "DOMContentLoaded", Ft);
              uc(G, "readystatechange",
                  Ft);
              if (G.createEventObject && G.documentElement.doScroll) {
                  var Ja = !0;
                  try {
                      Ja = !z.frameElement
                  } catch (wi) {}
                  Ja && Gt()
              }
              uc(z, "load", Ft)
          }
          lw = !1;
          "complete" === G.readyState ? nw() : uc(z, "load", nw);
          vn && (qn(In), z.setInterval(Hn, 864E5));
          qn(Ky);
          qn(gu);
          qn(Ly);
          qn(Iv);
          qn(Vu);
          qn(tt);
          qn(Kn);
          qn(rt);
          qn(nu);
          T(119) && qn(ju);
          tx();
          ti(1);
          T(131) && tv();
          bi = Va();
          xH.bootstrap = bi;
          if (T(70)) {}
      }
  });

})()