// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FusionChartsXT")
                .setHost(host,"xui_ui_fusionchartsxt1")
                .setLeft("19.80952380952381em")
                .setTop("1.5238095238095237em")
                .setWidth("30.01904761904762em")
                .setHeight("24.99047619047619em")
                .setChartType("Scatter")
                .setJSONData({
                    "chart" : {
                        "caption" : "Income Expenditure Analysis",
                        "subcaption" : "(sample survey done among buyers of LCD TV)",
                        "xaxisname" : "Salary",
                        "yaxisname" : "Amount spent on LCD TV",
                        "showregressionline" : "1",
                        "xaxislabelmode" : "auto"
                    },
                    "dataset" : [
                        {
                            "color" : "000000",
                            "data" : [
                                {
                                    "x" : "9200",
                                    "y" : "1600"
                                },
                                {
                                    "x" : "9900",
                                    "y" : "1800"
                                },
                                {
                                    "x" : "9500",
                                    "y" : "1510"
                                },
                                {
                                    "x" : "9700",
                                    "y" : "1400"
                                },
                                {
                                    "x" : "8100",
                                    "y" : "1500"
                                },
                                {
                                    "x" : "8600",
                                    "y" : "1300"
                                },
                                {
                                    "x" : "8300",
                                    "y" : "1220"
                                },
                                {
                                    "x" : "7800",
                                    "y" : "1300"
                                },
                                {
                                    "x" : "7800",
                                    "y" : "1220"
                                },
                                {
                                    "x" : "7000",
                                    "y" : "1210"
                                },
                                {
                                    "x" : "6000",
                                    "y" : "1140"
                                },
                                {
                                    "x" : "6000",
                                    "y" : "1000"
                                },
                                {
                                    "x" : "6200",
                                    "y" : "950"
                                },
                                {
                                    "x" : "5300",
                                    "y" : "940"
                                },
                                {
                                    "x" : "4700",
                                    "y" : "1000"
                                },
                                {
                                    "x" : "4800",
                                    "y" : "947"
                                },
                                {
                                    "x" : "4500",
                                    "y" : "850"
                                },
                                {
                                    "x" : "4000",
                                    "y" : "870"
                                },
                                {
                                    "x" : "3700",
                                    "y" : "800"
                                },
                                {
                                    "x" : "3100",
                                    "y" : "800"
                                },
                                {
                                    "x" : "4500",
                                    "y" : "600"
                                },
                                {
                                    "x" : "4000",
                                    "y" : "660"
                                },
                                {
                                    "x" : "3600",
                                    "y" : "500"
                                },
                                {
                                    "x" : "3400",
                                    "y" : "450"
                                },
                                {
                                    "x" : "3100",
                                    "y" : "650"
                                },
                                {
                                    "x" : "3100",
                                    "y" : "600"
                                },
                                {
                                    "x" : "3100",
                                    "y" : "540"
                                },
                                {
                                    "x" : "2800",
                                    "y" : "460"
                                },
                                {
                                    "x" : "2400",
                                    "y" : "650"
                                },
                                {
                                    "x" : "2300",
                                    "y" : "540"
                                },
                                {
                                    "x" : "3000",
                                    "y" : "340"
                                },
                                {
                                    "x" : "2000",
                                    "y" : "280"
                                },
                                {
                                    "x" : "2200",
                                    "y" : "340"
                                },
                                {
                                    "x" : "2000",
                                    "y" : "180"
                                }
                            ]
                        }
                    ]
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});