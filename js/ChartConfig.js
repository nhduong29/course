zingchart.THEME="classic";
var myConfig = {
    
    "graphset":[
        {
            "type":"bar",
            "background-color":"transparent",
            "border-width":"0px",
            "height":"400px",
            "width":"100%",
            "scale-y":{
                "values":"0:100:10",
                "line-color":"none",
                "tick":{
                    "visible":false
                },
                "item":{
                     "visible":false
                },
                "guide":{
                     "visible":false
                }
            },
            "arrows":[
              {
                "backgroundColor":"#CCCCCC",
                "direction":"bottom",
                "borderWidth": 0,
                "to":{
                  "x": "96%",
                  "y": "90%"
                },
                "from":{
                  "x": "4%",
                  "y": "90%"
                }
              }
            ],
            "scale-x":{
                "items-overlap":true,
                "max-items":9999,
                "values":["Beginer","Pre-Intermediate","Intermediate", "Upper-Intermediate", "Advance", "Expert"],
                "offset-y":"1px",
                "line-color":"#d2dae2",
                "line-width":"0px",
                "item":{
                    "font-color":"#8391a5",
                    "font-family":"Roboto",
                    "font-size":"14px",
                    "padding-top":"2px"
                },
                "tick":{
                    "visible":false,
                    "line-color":"#d2dae2"
                },
                "guide":{
                    "visible":false
                }
            },
            "plotarea":{
                "margin":"45px 20px 38px 45px"
            },
            "plot":{
                "bar-width":"33px",
                "hover-state":{
                    "visible":false
                },
                "animation":{
                    "delay":500,
                    "effect":"ANIMATION_SLIDE_BOTTOM"
                },
                "tooltip":{
                    "visible" : false
                },
                "value-box": {
                    "text": "%data-classname",
                    "color": "#606060"
                },
            },
            "crosshair-x":{
                "line-width":"100%",
                "alpha":0.18,
                "plot-label": {
                    "text": "<strong>%data-classname</strong>: học trong %data-time",
                    "font-color":"#000",
                    "font-family":"Roboto",
                    "background-color":"#fdfdfd",
                    "font-size":"12px",
                    "padding":"5px 10px",
                    "border-radius":"5px",
                    "alpha":1
                },
                "scale-label":{
                    "font-color":"#ffffff",
                    "background-color":"#D70206",
                    "font-family":"Roboto",
                    "font-size":"12px",
                    "padding":"5px 10px",
                    "border-radius":"5px"
                }
            },
            "series":[
                {
                    "values":[25,40,55,70,85,100],
                    "data-classname":["L1","L4","L7","L10","L13", "L16"],
                    "data-time":["1 tháng","2 tháng","2 tháng","2 tháng","3 tháng", "3 tháng"],
                    "styles":[
                        {"background-color":"#5DCF83"},
                        {"background-color":"#F46767"},
                        {"background-color":"#EDC755"},
                        {"background-color":"#55A4ED"},
                        {"background-color":"#48C5BB"},
                        {"background-color":"#B44EDA"}
                    ]
                },
                {
                    "values":[30,45,60,75,90],
                    "data-classname":["L2","L5","L8","L11","L14"],
                    "data-time":["1 tháng","2 tháng","2 tháng","3 tháng","3 tháng"],
                    "styles":[
                        {"background-color":"#5DCF83"},
                        {"background-color":"#F46767"},
                        {"background-color":"#EDC755"},
                        {"background-color":"#55A4ED"},
                        {"background-color":"#48C5BB"}
                    ]
                },
                {
                    "values":[35,50,65,80,95],
                    "data-classname":["L3","L6","L6","L12","L15"],
                    "data-time":["1 tháng","2 tháng","2 tháng","3 tháng","3 tháng"],
                    "styles":[
                        {"background-color":"#5DCF83"},
                        {"background-color":"#F46767"},
                        {"background-color":"#EDC755"},
                        {"background-color":"#55A4ED"},
                        {"background-color":"#48C5BB"}
                    ]
                },
            ]
        }
    ]
};
 
zingchart.render({ 
  id : 'my-skill', 
  data : myConfig, 
  height: '100%', 
  width: '100%' 
});
 