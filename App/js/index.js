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
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid2")
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id" : "col1",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col1"
                    },
                    {
                        "id" : "col2",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col2"
                    },
                    {
                        "id" : "col3",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col3"
                    },
                    {
                        "id" : "col4",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col4"
                    }
                ])
                .setRows([
                    {
                        "cells" : [
                            {
                                "value" : "A1"
                            },
                            {
                                "value" : "B1"
                            },
                            {
                                "value" : "C1"
                            },
                            {
                                "value" : "D1"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A2"
                            },
                            {
                                "value" : "B2"
                            },
                            {
                                "value" : "C2"
                            },
                            {
                                "value" : "D2"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A3"
                            },
                            {
                                "value" : "B3"
                            },
                            {
                                "value" : "C3"
                            },
                            {
                                "value" : "D3"
                            }
                        ],
                        "sub" : [
                            {
                                "cells" : [
                                    "A4",
                                    "B4",
                                    "C4",
                                    "D4"
                                ]
                            }
                        ]
                    },
                    {
                        "iniFold" : false,
                        "cells" : [
                            {
                                "value" : "A5"
                            },
                            {
                                "value" : "B5"
                            },
                            {
                                "value" : "C5"
                            },
                            {
                                "value" : "D5"
                            }
                        ],
                        "sub" : [
                            {
                                "cells" : [
                                    {
                                        "value" : "A6"
                                    },
                                    {
                                        "value" : "B6"
                                    },
                                    {
                                        "value" : "C6"
                                    },
                                    {
                                        "value" : "D6"
                                    }
                                ]
                            }
                        ]
                    }
                ])
                .onClickCell([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "test",
                            "test1"
                        ],
                        "method" : "alert",
                        "onOK" : 2,
                        "event" : 2
                    }
                ])
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